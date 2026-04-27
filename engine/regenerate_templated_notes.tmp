// engine/regenerate_templated_notes.js
//
// Backfill orchestrator. Walks pairing-map-v2.js tier lists, finds food x
// food pairs that have no pair-note, and generates one via the templated
// generator. Mirror-keys the result (stores under "A|B" and "B|A"). Editorial
// pair-notes are NEVER touched; existing templated notes are NEVER touched.
// Per Phase B Option C: backfill missing only.
//
// Usage:
//   node engine/regenerate_templated_notes.js              # apply
//   node engine/regenerate_templated_notes.js --dry-run    # preview, sample 10
//   node engine/regenerate_templated_notes.js --sample 30  # preview, sample 30
//   node engine/regenerate_templated_notes.js --limit 20   # apply only first 20
//
// Pre-flight: writes pairing-notes.js.pre-regen-fxf.bak
// Post-flight: tier-list orphan count should drop to 0 in health check.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy  = require('./pairing_engine_taxonomy');
const generator = require('./pairing_engine_generator');

const REPO_ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(REPO_ROOT, 'pairing-notes.js');
const BACKUP_FILE = path.join(REPO_ROOT, 'pairing-notes.js.pre-regen-fxf.bak');

// ── DATA LOADER ────────────────────────────────────────────────────────────

function loadData(repoRoot) {
  const ctx = {};
  vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repoRoot, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js',     'PAIRING_MAP');
  load('enriched-profiles.js',  'ENRICHED_PROFILES');
  load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');
  load('pairing-notes.js',      'PAIRING_NOTES');
  return ctx;
}

// ── ORPHAN ENUMERATION ────────────────────────────────────────────────────

function findFoodFoodOrphans(data) {
  const noteKeys = new Set(Object.keys(data.PAIRING_NOTES));
  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  const seen = new Set();
  const orphans = [];

  for (const e of data.PAIRING_MAP) {
    if (!taxonomy.FOOD_CATS.has(e.category)) continue;  // only foods as source
    for (const tier of tiers) {
      const list = e[tier];
      if (!Array.isArray(list)) continue;
      for (const target of list) {
        const t = byName[target];
        if (!t) continue;
        if (!taxonomy.FOOD_CATS.has(t.category)) continue;  // food x food only
        const fwd = e.name + '|' + target;
        const rev = target + '|' + e.name;
        if (noteKeys.has(fwd) || noteKeys.has(rev)) continue;
        // Dedupe by unordered pair across tier lists (same pair may appear
        // in both entities' tier lists)
        const sig = [e.name, target].sort().join('|');
        if (seen.has(sig)) continue;
        seen.add(sig);
        // Use the tier from whichever entity declared it. If both declare
        // (same pair on both sides), prefer the stronger tier from either.
        let bestTier = tier;
        const otherList = (t.gold || []).concat(t.excellent || []).concat(t.strong || []).concat(t.works || []).concat(t.avoid || []);
        if (otherList.includes(e.name)) {
          for (const otherTier of tiers) {
            if ((t[otherTier] || []).includes(e.name)) {
              const rank = { gold: 0, excellent: 1, strong: 2, works: 3, avoid: 4 };
              if (rank[otherTier] < rank[bestTier]) bestTier = otherTier;
              break;
            }
          }
        }
        orphans.push({ a: e, b: t, tier: bestTier });
      }
    }
  }
  return orphans;
}

// ── GENERATION ─────────────────────────────────────────────────────────────

function generateNotes(orphans, ctx) {
  const generated = [];
  const errors = [];
  for (const o of orphans) {
    try {
      const note = generator.generate(o.a, o.b, o.tier, ctx);
      generated.push({ a: o.a, b: o.b, tier: o.tier, note: note });
    } catch (err) {
      errors.push({ a: o.a.name, b: o.b.name, tier: o.tier, error: err.message });
    }
  }
  return { generated: generated, errors: errors };
}

// ── INSERT INTO PAIRING-NOTES.JS ───────────────────────────────────────────
//
// pairing-notes.js is structured as:
//   const PAIRING_NOTES = {
//     "Key1|Key2": "note text",
//     ...
//   };
//   if (typeof module !== 'undefined' && module.exports) ... // export block
//
// We splice new entries into the closing `};` of the PAIRING_NOTES object.

function insertNotesIntoFile(originalSrc, generated) {
  // Find the closing `};` of the PAIRING_NOTES object literal.
  // PAIRING_NOTES starts at "const PAIRING_NOTES = {".
  const startIdx = originalSrc.indexOf('const PAIRING_NOTES = {');
  if (startIdx === -1) throw new Error('Could not find PAIRING_NOTES declaration');

  // Walk forward, counting braces, to find matching `}`.
  let depth = 0;
  let endIdx = -1;
  for (let i = startIdx + 'const PAIRING_NOTES = '.length; i < originalSrc.length; i++) {
    const c = originalSrc[i];
    if (c === '{') depth++;
    else if (c === '}') {
      depth--;
      if (depth === 0) { endIdx = i; break; }
    }
  }
  if (endIdx === -1) throw new Error('Could not find closing `}` of PAIRING_NOTES');

  // Build new entries (mirror-keyed; same text both directions)
  const lines = [];
  for (const g of generated) {
    const fwd = g.a.name + '|' + g.b.name;
    const rev = g.b.name + '|' + g.a.name;
    const escaped = '"' + g.note.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
    lines.push('  "' + fwd.replace(/"/g, '\\"') + '": ' + escaped + ',');
    lines.push('  "' + rev.replace(/"/g, '\\"') + '": ' + escaped + ',');
  }
  const insert = '\n' + lines.join('\n') + '\n';

  // Insert before the closing `}` -- i.e., as additional properties of the object
  return originalSrc.slice(0, endIdx) + insert + originalSrc.slice(endIdx);
}

// ── MAIN ───────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--dry-run') !== -1;
  let sampleN = 10;
  const sampleArg = args.indexOf('--sample');
  if (sampleArg !== -1) sampleN = parseInt(args[sampleArg + 1], 10) || 10;
  let limit = null;
  const limitArg = args.indexOf('--limit');
  if (limitArg !== -1) limit = parseInt(args[limitArg + 1], 10) || null;

  console.log('=== regenerate_templated_notes (food x food backfill) ===');
  console.log('');

  const data = loadData(REPO_ROOT);
  let orphans = findFoodFoodOrphans(data);
  console.log('food x food orphans found: ' + orphans.length);

  if (limit) {
    orphans = orphans.slice(0, limit);
    console.log('limited to: ' + orphans.length);
  }

  const { generated, errors } = generateNotes(orphans, data);
  console.log('generated:                 ' + generated.length);
  if (errors.length) {
    console.log('errors:                    ' + errors.length);
    errors.slice(0, 10).forEach(e => console.log('  ' + e.a + ' x ' + e.b + ' [' + e.tier + ']: ' + e.error));
  }

  // Show sample
  console.log('');
  console.log('Sample (' + Math.min(sampleN, generated.length) + ' of ' + generated.length + '):');
  console.log('');
  for (const g of generated.slice(0, sampleN)) {
    console.log('  [' + g.tier.padEnd(9) + '] ' + g.a.name + ' x ' + g.b.name);
    console.log('    ' + g.note);
    console.log('');
  }

  if (dryRun) {
    console.log('[DRY-RUN] no files modified.');
    process.exit(0);
  }

  // Apply
  const originalSrc = fs.readFileSync(NOTES_FILE, 'utf8');
  fs.writeFileSync(BACKUP_FILE, originalSrc);
  const newSrc = insertNotesIntoFile(originalSrc, generated);

  // Sanity: re-parse to verify the new file is valid JS
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
  if (newCount !== oldCount + generated.length * 2) {
    console.error('[WARN] Expected ' + (oldCount + generated.length * 2) + ' keys after insert, got ' + newCount);
  }

  fs.writeFileSync(NOTES_FILE, newSrc);
  console.log('[OK] backup: ' + path.relative(REPO_ROOT, BACKUP_FILE));
  console.log('[OK] pairing-notes.js: ' + oldCount + ' -> ' + newCount + ' keys (added ' + (newCount - oldCount) + ', expected ' + (generated.length * 2) + ')');
  console.log('');
  console.log('Next: run `node engine/engine_health_check.js` to confirm');
  console.log('      "tier-list consistency" warning clears,');
  console.log('      and `node engine/engine_snapshot_test.js` to verify');
  console.log('      no anchor drift (none expected -- all 81 anchors are drink x food).');
}

main();
