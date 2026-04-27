// engine/mine_chemistry_claims.js
//
// Mines flavor-pair chemistry clauses from the editorial pair-note corpus.
// Walks every editorial pair-note (skipping templated ones via signature
// match), pattern-matches "the {drink-side phrase} {bridging verb} the
// {food-side phrase}" clauses, groups by head-noun pair, and emits
// chemistry-claims.js indexed by [drinkFlavor][foodFlavor].
//
// Output schema (matches existing file):
//   const CHEMISTRY_CLAIMS = {
//     "<drinkFlavor>": {
//       "<foodFlavor>": { "clause": "...", "count": N }
//     }
//   };
//
// Usage:
//   node engine/mine_chemistry_claims.js              # apply
//   node engine/mine_chemistry_claims.js --dry-run    # preview top output
//   node engine/mine_chemistry_claims.js --min N      # min total count per pair
//
// Pre-flight: writes chemistry-claims.js.pre-mine.bak (if file exists)

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const NOTES_FILE   = path.join(REPO_ROOT, 'pairing-notes.js');
const OUTPUT_FILE  = path.join(REPO_ROOT, 'chemistry-claims.js');
const BACKUP_FILE  = path.join(REPO_ROOT, 'chemistry-claims.js.pre-mine.bak');

// ── TEMPLATED SIGNATURES (skip these notes) ────────────────────────────────
// Same as engine_health_check uses, plus our food x food templated phrases.
const TEMPLATED_SIGS = [
  /runs straight into [^—]+— the/,
  /Gold standard;.*lock that sells itself/,
  /Avoid; Reach for/,
  /Save the .* for the steak/,
  /caramel-spice character/,
  /finds neutral with/,
  /meets at register with/,
  /character holds with/,
  /sits alongside/,
  /leans against/,
  /stays alongside/,
  /reads alongside/,
  /character drowns out/,
  /bulldozes/,
  /character overpowers/,
  // Food x food signatures
  /carries cleanly into/,
  /the plate composes/,
  /into a closing/,
  /closes with/,
  /^\* /,
];

// ── BRIDGING VERBS ─────────────────────────────────────────────────────────
const VERBS = [
  'cuts', 'meets', 'plays with', 'plays against',
  'echoes', 'frames', 'lifts', 'threads', 'layers into',
  'softens', 'holds with', 'sits with', 'carries', 'bridges',
  'complements', 'mirrors', 'catches', 'wraps', 'underlines',
  'rounds', 'plays', 'sets the table for'
];
const VERB_RX = VERBS.map(v => v.replace(/ /g, '\\s+')).join('|');

// Match: "the {NP1 of 1-4 words} {VERB} the {NP2 of 1-4 words}"
const CLAUSE_RX = new RegExp(
  '\\bthe\\s+([\\w-]+(?:\\s+[\\w-]+){0,3})\\s+(' + VERB_RX + ')\\s+the\\s+([\\w-]+(?:\\s+[\\w-]+){0,3})\\b',
  'gi'
);

// Words that should NOT be considered the "head" of an NP -- they're
// connectives or filler; if the head is one of these, walk back one word.
const SKIP_HEADS = new Set(['plate', 'cleanly', 'slightly', 'still', 'cleanly,', 'too']);

function headOf(np) {
  const words = np.split(/\s+/).filter(Boolean);
  if (!words.length) return '';
  // Strip punctuation from last word
  let head = words[words.length - 1].replace(/[,.;:!?]+$/, '');
  // If the head is a skip word and we have more words, walk back
  if (SKIP_HEADS.has(head) && words.length > 1) {
    head = words[words.length - 2].replace(/[,.;:!?]+$/, '');
  }
  return head.toLowerCase();
}

function loadNotes() {
  const ctx = {};
  vm.createContext(ctx);
  vm.runInContext(fs.readFileSync(NOTES_FILE, 'utf8') + '\nthis.PAIRING_NOTES = PAIRING_NOTES;', ctx);
  return ctx.PAIRING_NOTES;
}

function isEditorial(note) {
  return !TEMPLATED_SIGS.some(rx => rx.test(note));
}

function mine(notes, minCount) {
  const seen = new Set();   // dedupe mirror keys (same text)
  const grouped = {};       // [drinkHead][foodHead] -> { clauses: { clauseText: count }, total }

  let editorialCount = 0;
  let mirrorDupes = 0;

  for (const v of Object.values(notes)) {
    if (!isEditorial(v)) continue;
    if (seen.has(v)) { mirrorDupes++; continue; }
    seen.add(v);
    editorialCount++;

    let m;
    CLAUSE_RX.lastIndex = 0;
    while ((m = CLAUSE_RX.exec(v)) !== null) {
      const np1 = m[1].trim().toLowerCase();
      const verb = m[2].trim().toLowerCase().replace(/\s+/g, ' ');
      const np2 = m[3].trim().toLowerCase().replace(/[,.;:!?]+$/, '');
      const dh = headOf(np1);
      const fh = headOf(np2);
      if (!dh || !fh) continue;
      // Skip same-head pairings (often noise)
      if (dh === fh) continue;
      // Skip very short heads (likely punctuation slip)
      if (dh.length < 3 || fh.length < 3) continue;

      const clauseText = 'the ' + np1 + ' ' + verb + ' the ' + np2;
      if (!grouped[dh]) grouped[dh] = {};
      if (!grouped[dh][fh]) grouped[dh][fh] = { clauses: {}, total: 0 };
      grouped[dh][fh].clauses[clauseText] = (grouped[dh][fh].clauses[clauseText] || 0) + 1;
      grouped[dh][fh].total++;
    }
  }

  // For each (drinkHead, foodHead) bucket, pick the most-common clause text.
  const result = {};
  let totalPairs = 0;
  let keptPairs = 0;
  for (const [dh, foods] of Object.entries(grouped)) {
    for (const [fh, info] of Object.entries(foods)) {
      totalPairs++;
      if (info.total < minCount) continue;
      // Pick most-common clause; ties broken by alpha
      const best = Object.entries(info.clauses).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))[0];
      if (!result[dh]) result[dh] = {};
      result[dh][fh] = { clause: best[0], count: info.total };
      keptPairs++;
    }
  }
  return { result: result, totalPairs: totalPairs, keptPairs: keptPairs, editorialCount: editorialCount, mirrorDupes: mirrorDupes };
}

function emitJs(claims) {
  const lines = [];
  lines.push('// AUTO-GENERATED by engine/mine_chemistry_claims.js -- do not edit by hand.');
  lines.push('//');
  lines.push('// CHEMISTRY_CLAIMS: pair-level chemistry phrases mined from the editorial');
  lines.push('// pair-note corpus. Indexed by [drinkFlavor][foodFlavor] -> { clause, count }.');
  lines.push('// Generator consults at composition time when a (drink-flavor x food-flavor)');
  lines.push('// match exists for a pair under construction.');
  lines.push('// ---------------------------------------------------------------------------');
  lines.push('const CHEMISTRY_CLAIMS = {');
  const drinks = Object.keys(claims).sort();
  for (let i = 0; i < drinks.length; i++) {
    const dh = drinks[i];
    const foods = claims[dh];
    lines.push('  "' + dh + '": {');
    const fhs = Object.keys(foods).sort();
    for (let j = 0; j < fhs.length; j++) {
      const fh = fhs[j];
      const v = foods[fh];
      const escClause = v.clause.replace(/\\/g, '\\\\').replace(/"/g, '\\"');
      const trail = (j === fhs.length - 1) ? '' : ',';
      lines.push('    "' + fh + '": { "clause": "' + escClause + '", "count": ' + v.count + ' }' + trail);
    }
    lines.push('  }' + (i === drinks.length - 1 ? '' : ','));
  }
  lines.push('};');
  lines.push('');
  lines.push('if (typeof module !== "undefined" && module.exports) {');
  lines.push('  module.exports = { CHEMISTRY_CLAIMS };');
  lines.push('} else if (typeof window !== "undefined") {');
  lines.push('  window.CHEMISTRY_CLAIMS = CHEMISTRY_CLAIMS;');
  lines.push('}');
  return lines.join('\n') + '\n';
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--dry-run') !== -1;
  let minCount = 3;
  const minArg = args.indexOf('--min');
  if (minArg !== -1) minCount = parseInt(args[minArg + 1], 10) || 3;

  console.log('=== mine_chemistry_claims ===');
  console.log('min count threshold: ' + minCount);
  console.log('');

  const notes = loadNotes();
  const r = mine(notes, minCount);

  console.log('editorial notes scanned (deduped): ' + r.editorialCount);
  console.log('total flavor-pair buckets:          ' + r.totalPairs);
  console.log('kept (count >= ' + minCount + '):                    ' + r.keptPairs);
  console.log('drink-flavor head words covered:    ' + Object.keys(r.result).length);
  console.log('');

  // Print top 30 entries
  const flat = [];
  for (const [dh, foods] of Object.entries(r.result)) {
    for (const [fh, v] of Object.entries(foods)) flat.push({ dh, fh, count: v.count, clause: v.clause });
  }
  flat.sort((a, b) => b.count - a.count);
  console.log('Top 30 chemistry pairs:');
  for (const e of flat.slice(0, 30)) {
    console.log('  ' + String(e.count).padStart(4) + '  [' + e.dh.padEnd(12) + ' x ' + e.fh.padEnd(14) + ']  ' + e.clause);
  }
  console.log('');

  if (dryRun) { console.log('[DRY-RUN] no files modified.'); return; }

  // Backup existing file if present
  if (fs.existsSync(OUTPUT_FILE)) {
    fs.writeFileSync(BACKUP_FILE, fs.readFileSync(OUTPUT_FILE, 'utf8'));
    console.log('[OK] backup: ' + path.relative(REPO_ROOT, BACKUP_FILE));
  }
  fs.writeFileSync(OUTPUT_FILE, emitJs(r.result));
  console.log('[OK] wrote chemistry-claims.js with ' + r.keptPairs + ' flavor-pair entries.');
}

main();
