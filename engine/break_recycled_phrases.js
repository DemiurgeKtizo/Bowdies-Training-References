// engine/break_recycled_phrases.js
//
// Fast in-place string-replacement variant of recycled-phrase repair.
// Instead of parsing pairing-notes.js as a module + re-serializing 51K keys
// (which takes 60+ seconds on the 14MB file), we operate on the source as
// raw text. We walk note-by-note via a pair-key matcher, do per-note
// hash-picked variant substitution, then write the file once.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');
const BACKUP = path.join(ROOT, 'pairing-notes.js.pre-break-recycled.bak');

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const SUBSTITUTIONS = [
  {
    name: 'bourbon-depth-settles-on-the-plate',
    match: /the bourbon depth settles on the plate/g,
    variants: [
      'the oak-and-vanilla weight wraps the plate',
      'the bourbon body sits with the dish',
      'the brown-spirit warmth threads the plate',
      'the caramel-spice register matches the plate',
      'the bourbon backbone carries the dish',
      'the oak depth lays under the plate',
      'the bourbon weight handles the plate',
      'the bourbon depth folds into the plate',
    ],
  },
  {
    name: 'vanilla-layers-into-the-cream',
    match: /the vanilla layers into the cream/g,
    variants: [
      'the vanilla rounds the cream',
      'the caramel softens the cream',
      'the oak frames the cream',
      'the rounded sweetness brightens the cream',
      'the toffee-vanilla edge underlines the cream',
      'the caramel-spice settles the cream',
    ],
  },
  {
    name: 'pairing-sits-at-neutral-register',
    match: /pairing sits at neutral register without clash/g,
    variants: [
      'pairing holds at neutral register without conflict',
      'pairing sits in the middle without contention',
      'pairing rests neutral without jostle',
      'pairing reads even, no friction at the table',
      'pairing settles flat without contest',
    ],
  },
  {
    name: 'call-lands-as-a-measured-alongside',
    match: /call lands as a measured alongside/g,
    variants: [
      'call rests as a measured alongside',
      'call reads as a controlled companion',
      'call settles as a quiet partner',
      'call holds as a steady alongside',
      'call sits as a balanced companion',
    ],
  },
  {
    name: 'call-holds-neither-soars-nor-fights',
    match: /call holds — neither soars nor fights/g,
    variants: [
      'call holds — without lifting or clashing',
      'call sits flat — neither pushing nor pulling',
      'call reads even — no lift, no friction',
      'call rests level — without soaring or sparring',
      'call holds steady — neither rising nor resisting',
    ],
  },
  {
    name: 'works-alongside-nothing-fights',
    match: /Works alongside; nothing fights in this/g,
    variants: [
      'Works alongside; no contention in this',
      'Works at the table; nothing jostles in this',
      'Sits without contest in this',
      'Holds level; no friction in this',
      'Rests without conflict in this',
    ],
  },
  {
    name: 'side-carries-its-register-against-the-cut',
    match: /the side carries its register against the cut/g,
    variants: [
      'the pairing carries its register cleanly',
      'the call holds its register at the table',
      'the match stays in its register',
      'the pairing lands at register without strain',
      'the call reads at register without overshooting',
    ],
  },
  {
    name: 'pairing-reads-as-a-quiet-alongside',
    match: /pairing reads as a quiet alongside/g,
    variants: [
      'pairing reads as a measured alongside',
      'pairing sits as a quiet companion',
      'pairing rests as a low-volume alongside',
      'pairing reads understated',
      'pairing settles as a soft alongside',
    ],
  },
];

console.log('Reading pairing-notes.js as text...');
const t0 = Date.now();
let src = fs.readFileSync(NOTES_FILE, 'utf8');
console.log('  read in ' + (Date.now()-t0) + 'ms (' + src.length + ' chars)');

// Walk lines: each line is `  "DRINK|FOOD": "TEXT",`. We do per-line work
// so the hash seed includes the pair key for deterministic variant choice.
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let totalSwaps = 0;
const swapsByPhrase = {};

for (let i = 0; i < lines.length; i++) {
  const m = lineRe.exec(lines[i]);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  // Decode the JSON-encoded note text so regex can match across escapes.
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  for (const sub of SUBSTITUTIONS) {
    if (!sub.match.test(text)) continue;
    sub.match.lastIndex = 0;
    text = text.replace(sub.match, () => {
      swapsByPhrase[sub.name] = (swapsByPhrase[sub.name]||0)+1;
      totalSwaps++;
      const idx = hashPair(key + '|' + sub.name) % sub.variants.length;
      return sub.variants[idx];
    });
    sub.match.lastIndex = 0;
    modified = true;
  }
  if (modified) {
    lines[i] = prefix + JSON.stringify(text) + comma;
  }
}

console.log('=== BREAK RECYCLED PHRASES ===');
console.log('Total swaps:', totalSwaps);
console.log('\nBy phrase:');
for (const [n, c] of Object.entries(swapsByPhrase).sort((a,b)=>b[1]-a[1])) {
  console.log('  ' + c.toString().padStart(6) + '  ' + n);
}
console.log('Process time so far:', (Date.now()-t0) + 'ms');

if (totalSwaps === 0) { console.log('[NOOP]'); process.exit(0); }

if (!fs.existsSync(BACKUP)) {
  fs.copyFileSync(NOTES_FILE, BACKUP);
  console.log('[OK] backup: ' + path.relative(ROOT, BACKUP));
} else {
  console.log('[OK] backup already present');
}

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote pairing-notes.js (' + out.length + ' chars)');
console.log('Total time:', (Date.now()-t0) + 'ms');
