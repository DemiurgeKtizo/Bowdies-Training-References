// Variant pool for the recycled FxF "rich-side × big-red" avoid body paragraph.
// The phrase appears verbatim in dozens of pairs:
//   "this rich, creamy side's dairy-driven indulgence meets this structured red's
//    cassis-and-dark-fruit frame, firm tannin, and oak-driven weight. The bold
//    red's dark-fruit weight locks into the side's fat and umami; tannin cleans
//    the dairy."

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = '/sessions/jolly-epic-hypatia/mnt/Bowdies-Training-References';
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const SUBSTITUTIONS = [
  // The exact recycled body paragraph (with optional dish-specific opener)
  {
    name: 'rich-side-big-red-body',
    match: /this rich, creamy side's dairy-driven indulgence meets this structured red's cassis-and-dark-fruit frame, firm tannin, and oak-driven weight\. The bold red's dark-fruit weight locks into the side's fat and umami; tannin cleans the dairy\./g,
    variants: [
      "the side's cream pulls the bold red's tannin through; cassis and dark fruit catch the dairy's weight without overshooting.",
      "the structured red's grip carries the rich side's dairy load; oak-driven body absorbs the cream and tannin clears the finish.",
      "dark-fruit Cab body settles into the cream-rich side; firm tannin cuts the lactic edge and the oak threads the indulgence.",
      "the rich-side's cheese-and-cream weight finds the Cab's structured tannin; cassis and dark fruit anchor the pairing without crowding.",
      "structured red meets dairy-driven side: the bold tannin scrubs the cream, the dark fruit lifts the indulgence into balance.",
    ],
  },
  // "this earthy, umami-packed side's mushroom-and-truffle depth..." mushroom variant
  {
    name: 'mushroom-side-big-red-body',
    match: /this earthy, umami-packed side's mushroom-and-truffle depth meets this structured red's cassis-and-dark-fruit frame, firm tannin, and oak-driven weight\. The bold red's dark-fruit weight locks into the side's fat and umami; tannin cleans the dairy\./g,
    variants: [
      "the mushroom's umami depth meets the bold red's structured tannin; dark fruit threads the truffle-and-earth without crowding.",
      "the structured red's cassis-and-dark-fruit anchors the mushroom's umami weight; firm tannin and oak hold their register.",
      "Cab tannin frames the earthy mushroom-and-truffle depth; dark fruit lifts the umami into the wine's body.",
      "the side's mushroom richness pulls the bold red's body; tannin and oak settle into the umami without overshooting.",
      "the bold red's cassis grip carries the mushroom-and-truffle depth — structured weight on the earthy side.",
    ],
  },
  // "this bold, beefy strip's firm texture and savory char..."
  {
    name: 'beefy-strip-big-red-body',
    match: /this bold, beefy strip's firm texture and savory char meets this structured red's cassis-and-dark-fruit frame, firm tannin, and oak-driven weight\. The tannin scrubs rendered fat while dark fruit echoes the savory char\./g,
    variants: [
      "the strip's firm beef-and-char meets the structured red's tannic backbone; cassis and dark fruit catch the rendered fat.",
      "the Cab's firm tannin cuts the strip's char and the dark fruit lifts the savory edge — steakhouse symmetry.",
      "structured red anchors the bold strip: tannin scrubs fat, dark fruit settles into char, oak threads the cut.",
      "the strip's marbled-and-char richness finds the bold red's grip; cassis carries the savory weight cleanly.",
      "the Cab's oak-driven weight matches the strip's char-and-fat; firm tannin clears the rendered edge.",
    ],
  },
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let totalSwaps = 0;
const swapsByPhrase = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.indexOf('cassis-and-dark-fruit') === -1) continue;
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  for (const sub of SUBSTITUTIONS) {
    if (!sub.match.test(text)) { sub.match.lastIndex = 0; continue; }
    sub.match.lastIndex = 0;
    text = text.replace(sub.match, () => {
      swapsByPhrase[sub.name] = (swapsByPhrase[sub.name]||0)+1;
      totalSwaps++;
      const canon = key.split('|').sort().join('::');
      const idx = hashPair(canon + '|' + sub.name) % sub.variants.length;
      return sub.variants[idx];
    });
    sub.match.lastIndex = 0;
    modified = true;
  }
  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== FIX FxF AVOID BODY RECYCLING ===');
console.log('Total swaps:', totalSwaps);
for (const [n, c] of Object.entries(swapsByPhrase)) console.log('  ' + c.toString().padStart(5) + '  ' + n);

if (totalSwaps === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
