// engine/sync_mirrors_dxf.js
//
// Mirror sync for ANY pair (DxF or FxF) where A|B != B|A. Picks the
// canonical (alphabetically-first) key's value and writes it to both
// directions. Fast — operates on the file as text without re-serializing
// the full corpus.
//
// Use after any phrase-substitution pass that risks asymmetric output
// (e.g., per-key hash-picked variant where the seed isn't order-independent).

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
console.log('read in ' + (Date.now()-t0) + 'ms');

// Parse the file — easiest path: load as module
delete require.cache[NOTES_FILE];
const PN = require(NOTES_FILE).PAIRING_NOTES;
const keys = Object.keys(PN);
console.log('keys:', keys.length);

const seen = new Set();
let mismatches = 0;
const lines = src.split('\n');
const lineIdx = new Map();
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;
for (let i = 0; i < lines.length; i++) {
  const m = lineRe.exec(lines[i]);
  if (m) lineIdx.set(m[2], i);
}
console.log('indexed lines:', lineIdx.size);

let updated = 0;
for (const k of keys) {
  const idx = k.indexOf('|');
  if (idx < 0) continue;
  const a = k.slice(0, idx);
  const b = k.slice(idx + 1);
  const pairKey = [a, b].sort().join('::');
  if (seen.has(pairKey)) continue;
  seen.add(pairKey);

  const fwd = a + '|' + b;
  const rev = b + '|' + a;
  if (!PN[rev]) continue;
  if (PN[fwd] === PN[rev]) continue;
  mismatches++;

  // Pick canonical: alphabetically-first key wins
  const canon = (fwd < rev) ? PN[fwd] : PN[rev];
  // Update the OTHER direction's line
  const losingKey = (fwd < rev) ? rev : fwd;
  const li = lineIdx.get(losingKey);
  if (li !== undefined) {
    const m = lineRe.exec(lines[li]);
    if (m) {
      lines[li] = m[1] + JSON.stringify(canon) + m[4];
      updated++;
    }
  }
}

console.log('mismatches found:', mismatches);
console.log('lines updated:', updated);

if (updated > 0) {
  const out = lines.join('\n');
  const tmp = NOTES_FILE + '.tmp.sync.' + process.pid;
  fs.writeFileSync(tmp, out);
  fs.renameSync(tmp, NOTES_FILE);
  console.log('[OK] wrote pairing-notes.js (' + out.length + ' chars)');
}
console.log('total time:', (Date.now()-t0) + 'ms');
