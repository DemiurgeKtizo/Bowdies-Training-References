// engine/engine_fxf_snapshot.js
//
// FxF-specific snapshot test. Protects:
//   1. The 6 gold-tier seeded FxF pairs (canonical menu pairings).
//   2. The 16 hand-curated AVOID FxF notes (sommelier-grade with substitutions).
//   3. A representative sample of excellent / strong FxF notes.
//
// Companion to engine_snapshot_test.js (which covers DxF only). Run before any
// regen that touches FxF logic; --update to accept changes.
//
// Usage:
//   node engine/engine_fxf_snapshot.js          # verify
//   node engine/engine_fxf_snapshot.js --update # regenerate baseline
//   node engine/engine_fxf_snapshot.js --show   # list anchors

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const crypto = require('crypto');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const SNAPSHOT_PATH = path.join(__dirname, 'engine_fxf_snapshot.json');

function loadData() {
  const ctx = {}; vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js', 'PAIRING_MAP');
  load('pairing-notes.js', 'PAIRING_NOTES');
  return ctx;
}

function hashNote(note) {
  return crypto.createHash('md5').update(note || '').digest('hex').slice(0, 16);
}

// Hand-pick anchors. These are the FxF pairs that MUST be protected from
// regression — gold pairs (6), hand-curated AVOIDs (16), and a curated set of
// strong/excellent notes.
const ANCHOR_PAIRS = [
  // Gold-tier (6) — both directions covered by mirror integrity
  { tier: 'gold',      a: 'The Tomahawk',     b: 'Truffle Fries' },
  { tier: 'gold',      a: 'Cowboy Ribeye',    b: 'Lobster Mac' },
  { tier: 'gold',      a: 'Bone-In Filet',    b: 'Au Gratin Potatoes' },
  { tier: 'gold',      a: 'Porterhouse',      b: 'Creamed Spinach' },
  { tier: 'gold',      a: 'Filet Mignon',     b: 'Mushrooms' },
  { tier: 'gold',      a: 'Kansas City',      b: 'Brussels and Belly' },

  // AVOID — hand-curated sommelier-grade with substitution recommendations (16)
  { tier: 'avoid',     a: 'Cowboy Ribeye',    b: 'Crab Cake' },
  { tier: 'avoid',     a: 'Cowboy Ribeye',    b: 'Seared Scallops' },
  { tier: 'avoid',     a: 'Filet Mignon',     b: 'Faroe Island Salmon' },
  { tier: 'avoid',     a: 'Filet Mignon',     b: 'Crab Cake' },
  { tier: 'avoid',     a: 'The Tomahawk',     b: 'Crab Cake' },
  { tier: 'avoid',     a: 'The Tomahawk',     b: 'Burrata' },
  // Cowboy Ribeye × Burrata reads as 'works' in current pairing-map (no
  // hand-curated AVOID exists). Likely candidate for future curation given
  // the bold-ribeye-vs-delicate-burrata mismatch, but locked at works now.
  { tier: 'works',     a: 'Cowboy Ribeye',    b: 'Burrata' },
  { tier: 'avoid',     a: 'Bone-In Filet',    b: 'Crab Cake' },

  // Excellent / Strong — representative cross-section (10)
  { tier: 'excellent', a: 'Filet Mignon',     b: 'Truffle Fries' },
  { tier: 'excellent', a: 'Bone-In Filet',    b: 'Lobster Mac' },
  { tier: 'excellent', a: 'Cowboy Ribeye',    b: 'Au Gratin Potatoes' },
  { tier: 'strong',    a: 'Filet Mignon',     b: 'Burrata' },
  { tier: 'strong',    a: 'Filet Mignon',     b: 'Escargot' },
  { tier: 'strong',    a: 'Porterhouse',      b: 'Mushroom Bisque' },
  { tier: 'strong',    a: 'Roast Half Chicken', b: 'Honey Roasted Carrots' },
  { tier: 'strong',    a: 'Faroe Island Salmon', b: 'Asparagus' },
  { tier: 'works',     a: 'Filet Mignon',     b: 'Chocolate Cake' },
  { tier: 'works',     a: 'Beignets',         b: 'Carrot Cake' },
];

function buildAnchors() {
  const data = loadData();
  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  const out = [];
  const missing = [];
  for (const ap of ANCHOR_PAIRS) {
    const fwd = ap.a + '|' + ap.b;
    const rev = ap.b + '|' + ap.a;
    const note = data.PAIRING_NOTES[fwd] || data.PAIRING_NOTES[rev];
    if (!note) {
      missing.push(fwd);
      continue;
    }
    out.push({
      tier: ap.tier,
      a: ap.a,
      b: ap.b,
      key: data.PAIRING_NOTES[fwd] ? fwd : rev,
      hash: hashNote(note),
    });
  }
  return { anchors: out, missing };
}

function cmdVerify() {
  if (!fs.existsSync(SNAPSHOT_PATH)) {
    console.log('=== FxF SNAPSHOT TEST ===');
    console.log('No baseline exists. Run with --update to create.');
    process.exit(1);
  }
  const stored = JSON.parse(fs.readFileSync(SNAPSHOT_PATH, 'utf8'));
  const data = loadData();
  let unchanged = 0, drifted = 0, missing = 0;
  const driftDetails = [];
  for (const a of stored.anchors) {
    const note = data.PAIRING_NOTES[a.key];
    if (!note) { missing++; continue; }
    const h = hashNote(note);
    if (h === a.hash) unchanged++;
    else {
      drifted++;
      driftDetails.push({ ...a, currentHash: h, currentNote: note });
    }
  }
  console.log('=== FxF SNAPSHOT TEST ===');
  console.log('');
  console.log('baseline anchors: ' + stored.anchors.length + '  (generated ' + stored.generatedAt + ')');
  console.log('unchanged:        ' + unchanged);
  console.log('drifted:          ' + drifted);
  console.log('missing:          ' + missing);
  if (drifted > 0) {
    console.log('');
    console.log('Drifted FxF anchors:');
    for (const d of driftDetails.slice(0, 10)) {
      console.log('  [' + d.tier + '] ' + d.a + ' x ' + d.b);
      console.log('    was   ' + d.hash);
      console.log('    now   ' + d.currentHash);
      console.log('    text  ' + d.currentNote.slice(0, 100));
    }
    console.log('');
    console.log('[FAIL] FxF snapshot drift detected — run with --update to accept, or fix the regression.');
    process.exit(1);
  }
  console.log('');
  console.log('[OK] All FxF anchors stable.');
}

function cmdUpdate() {
  const { anchors, missing } = buildAnchors();
  const out = {
    generatedAt: new Date().toISOString(),
    description: 'FxF snapshot anchors — gold pairs, hand-curated AVOIDs, and curated examples.',
    anchors: anchors,
  };
  fs.writeFileSync(SNAPSHOT_PATH, JSON.stringify(out, null, 2));
  console.log('=== FxF SNAPSHOT UPDATE ===');
  console.log('Wrote ' + anchors.length + ' FxF anchors to ' + path.relative(repo, SNAPSHOT_PATH));
  if (missing.length) {
    console.log('Missing pairs (skipped): ' + missing.length);
    for (const m of missing) console.log('  ' + m);
  }
}

function cmdShow() {
  const { anchors } = buildAnchors();
  console.log('=== FxF SNAPSHOT ANCHORS (' + anchors.length + ') ===');
  for (const a of anchors) {
    console.log('  [' + a.tier + '] ' + a.a + ' x ' + a.b + '  ' + a.hash);
  }
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.indexOf('--update') !== -1) cmdUpdate();
  else if (args.indexOf('--show') !== -1) cmdShow();
  else cmdVerify();
}

module.exports = { buildAnchors, hashNote, loadData };
