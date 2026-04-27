// engine/rewrite_food_x_food_notes.js
//
// Rewrites existing food x food pair-notes in pairing-notes.js using the
// CURRENT version of pairing_engine_generator.js. Use this when the generator
// templates have been improved and you want to refresh the food x food output
// without re-running the entire backfill.
//
// Usage:
//   node engine/rewrite_food_x_food_notes.js              # apply
//   node engine/rewrite_food_x_food_notes.js --dry-run    # preview
//   node engine/rewrite_food_x_food_notes.js --sample 10  # preview, sample 10
//
// Editorial pair-notes are NEVER touched. We only rewrite notes whose BOTH
// halves are foods (per taxonomy.FOOD_CATS) -- those are by definition the
// templated food x food notes the orchestrator generated, since pairing-notes
// originally had only drink x food entries before we backfilled.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy  = require('./pairing_engine_taxonomy');
const generator = require('./pairing_engine_generator');

const REPO_ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(REPO_ROOT, 'pairing-notes.js');
const BACKUP_FILE = path.join(REPO_ROOT, 'pairing-notes.js.pre-fxf-rewrite.bak');

function loadData(repoRoot) {
  const ctx = {};
  vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repoRoot, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js',     'PAIRING_MAP');
  load('enriched-profiles.js',  'ENRICHED_PROFILES');
  load('pairing-notes.js',      'PAIRING_NOTES');
  try { load('chemistry-claims.js', 'CHEMISTRY_CLAIMS'); }
  catch (e) { ctx.CHEMISTRY_CLAIMS = null; }
  return ctx;
}

function findFxfKeys(data) {
  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  const seen = new Set();
  const pairs = [];
  for (const key of Object.keys(data.PAIRING_NOTES)) {
    const idx = key.indexOf('|');
    if (idx === -1) continue;
    const a = key.slice(0, idx);
    const b = key.slice(idx + 1);
    const eA = byName[a], eB = byName[b];
    if (!eA || !eB) continue;
    if (!taxonomy.FOOD_CATS.has(eA.category)) continue;
    if (!taxonomy.FOOD_CATS.has(eB.category)) continue;
    const sig = [a, b].sort().join('|');
    if (seen.has(sig)) continue;
    seen.add(sig);
    pairs.push({ a: eA, b: eB });
  }
  return pairs;
}

// Find tier of pair given pairing-map (mirror-aware: best tier from either side)
function tierFor(eA, eB, pairingMap) {
  const tierRank = { gold: 0, excellent: 1, strong: 2, works: 3, avoid: 4 };
  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  let best = null;
  for (const [src, tgt] of [[eA.name, eB.name], [eB.name, eA.name]]) {
    const entry = pairingMap.find(e => e.name === src);
    if (!entry) continue;
    for (const tier of tiers) {
      if (Array.isArray(entry[tier]) && entry[tier].includes(tgt)) {
        if (best === null || tierRank[tier] < tierRank[best]) best = tier;
      }
    }
  }
  return best;
}

// Rewrite the file: for each fxf pair, replace both fwd and rev key text.
// We use string replacement on the file source rather than full re-emission
// (the file has 48k+ keys; touching all of them risks formatting drift).

function rewriteFile(originalSrc, replacements) {
  let src = originalSrc;
  for (const r of replacements) {
    for (const key of [r.fwdKey, r.revKey]) {
      // Build a regex matching `"key": "old text"` (with proper escaping)
      const escapedKey = key.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      const pat = new RegExp('("' + escapedKey + '":\\s*)"((?:[^"\\\\]|\\\\.)*)"', 'g');
      const newQuoted = '"' + r.note.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
      const before = src;
      src = src.replace(pat, '$1' + newQuoted);
      if (src === before) {
        // Key not found -- shouldn't happen if findFxfKeys was correct
        console.error('[WARN] could not find key in source: ' + key);
      }
    }
  }
  return src;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--dry-run') !== -1;
  let sampleN = 10;
  const sampleArg = args.indexOf('--sample');
  if (sampleArg !== -1) sampleN = parseInt(args[sampleArg + 1], 10) || 10;

  console.log('=== rewrite_food_x_food_notes ===');
  console.log('');

  const data = loadData(REPO_ROOT);
  const pairs = findFxfKeys(data);
  console.log('food x food pairs in notes: ' + pairs.length);

  const replacements = [];
  for (const p of pairs) {
    const tier = tierFor(p.a, p.b, data.PAIRING_MAP);
    if (!tier) continue;  // not in any tier list -- skip
    let newNote;
    try {
      newNote = generator.generate(p.a, p.b, tier, data);
    } catch (e) {
      console.error('  generation error: ' + p.a.name + ' x ' + p.b.name + ': ' + e.message);
      continue;
    }
    // Canonical pair: A|B with canonicalized order (heavier first)
    const [ca, cb] = generator.canonicalize(p.a, p.b);
    const fwdKey = ca.name + '|' + cb.name;
    const revKey = cb.name + '|' + ca.name;
    // Find the existing note (could be in either key direction)
    const oldNote = data.PAIRING_NOTES[fwdKey] || data.PAIRING_NOTES[revKey];
    if (oldNote === newNote) continue;  // no change
    replacements.push({ fwdKey: fwdKey, revKey: revKey, note: newNote, oldNote: oldNote, a: ca, b: cb, tier: tier });
  }
  console.log('regenerated:                 ' + replacements.length);
  console.log('unchanged:                   ' + (pairs.length - replacements.length));

  console.log('');
  console.log('Sample (' + Math.min(sampleN, replacements.length) + ' of ' + replacements.length + '):');
  console.log('');
  for (const r of replacements.slice(0, sampleN)) {
    console.log('  [' + r.tier.padEnd(9) + '] ' + r.a.name + ' x ' + r.b.name);
    console.log('    BEFORE: ' + (r.oldNote || '').slice(0, 200) + ((r.oldNote && r.oldNote.length > 200) ? '...' : ''));
    console.log('    AFTER : ' + r.note.slice(0, 200) + (r.note.length > 200 ? '...' : ''));
    console.log('');
  }

  if (dryRun) {
    console.log('[DRY-RUN] no files modified.');
    process.exit(0);
  }

  const originalSrc = fs.readFileSync(NOTES_FILE, 'utf8');
  fs.writeFileSync(BACKUP_FILE, originalSrc);
  const newSrc = rewriteFile(originalSrc, replacements);

  // Sanity parse
  const sanityCtx = {};
  vm.createContext(sanityCtx);
  try {
    vm.runInContext(newSrc + '\nthis.PAIRING_NOTES = PAIRING_NOTES;', sanityCtx);
  } catch (e) {
    console.error('[FAIL] Updated pairing-notes.js would not parse: ' + e.message);
    process.exit(1);
  }
  const newCount = Object.keys(sanityCtx.PAIRING_NOTES).length;
  const oldCount = Object.keys(data.PAIRING_NOTES).length;
  if (newCount !== oldCount) {
    console.error('[WARN] Key count changed: ' + oldCount + ' -> ' + newCount);
  }

  fs.writeFileSync(NOTES_FILE, newSrc);
  console.log('[OK] backup: ' + path.relative(REPO_ROOT, BACKUP_FILE));
  console.log('[OK] pairing-notes.js: ' + replacements.length + ' food x food pairs rewritten (x2 mirror = ' + (replacements.length * 2) + ' keys updated).');
}

main();
