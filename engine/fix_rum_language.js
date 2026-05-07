// Replace tequila/agave language in rum notes with rum-appropriate phrasing.
// Targets the LIGHT_SPIRIT class default character/bridge text that was applied
// uniformly to rums and tequilas before the LIGHT_SPIRIT subclass split.

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

const RUMS = new Set([
  'Bacardi Rum', 'Mount Gay Rum', 'Captain Morgan Rum', 'Malibu Rum',
  'Ron Zacapa Rum', 'Doctor Bird Jamaica Rum', "Myers's Rum",
  'Jung and Wulff Trinidad', 'Jung and Wulff Guyana',
]);

const SUBSTITUTIONS = [
  {
    match: /silver-spirit lift with agave-citrus edge/g,
    variants: [
      'light-rum register with cane-and-citrus lift',
      'Caribbean-rum register with bright sugarcane',
      'unaged-cane lift with citrus snap',
      'clean light-rum body with citrus edge',
      'cane-and-lime lift with rum brightness',
    ],
  },
  {
    match: /silver-spirit lift with/g,
    variants: [
      'light-rum lift with',
      'Caribbean-rum lift with',
      'cane-and-citrus lift with',
      'silver-rum register with',
      'unaged-cane brightness and',
    ],
  },
  {
    match: /blanco-tequila or light-rum register/g,
    variants: [
      'light-rum register',
      'Caribbean-rum body',
      'unaged-cane register',
      'silver-rum body',
      'cane-and-citrus register',
    ],
  },
  {
    match: /silver-spirit register lifts the/g,
    variants: [
      'light-rum register lifts the',
      'Caribbean-rum body carries the',
      'unaged-cane register matches the',
      'silver-rum body cuts the',
      'cane-and-citrus body lifts the',
    ],
  },
  {
    match: /blanco-tequila body matches the/g,
    variants: [
      'light-rum body matches the',
      'Caribbean-rum body wraps the',
      'unaged-cane body sits with the',
      'silver-rum body cuts the',
      'cane-and-citrus body lifts the',
    ],
  },
  {
    match: /the agave edge brightens/g,
    variants: [
      'the cane edge brightens',
      'the citrus edge brightens',
      'the sugarcane note brightens',
      'the bright cane edge underlines',
      'the light-cane lift brightens',
    ],
  },
  {
    match: /silver-spirit body (sits|leans|reads|finds|meets|overpowers)/g,
    variants: [
      'light-rum body $1',
      'Caribbean-rum body $1',
      'silver-rum body $1',
      'unaged-cane body $1',
      'cane-and-citrus body $1',
    ],
  },
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let totalSwaps = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.indexOf('silver-spirit') === -1
      && line.indexOf('blanco-tequila') === -1
      && line.indexOf('agave edge') === -1) continue;
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  const [a, b] = key.split('|');
  // Only fix in rum-context pairs
  if (!RUMS.has(a) && !RUMS.has(b)) continue;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  for (const sub of SUBSTITUTIONS) {
    if (!sub.match.test(text)) { sub.match.lastIndex = 0; continue; }
    sub.match.lastIndex = 0;
    text = text.replace(sub.match, (matchStr, ...groups) => {
      const canon = key.split('|').sort().join('::');
      const idx = hashPair(canon + '|' + sub.match.source) % sub.variants.length;
      let result = sub.variants[idx];
      // Substitute $1, $2 etc from regex captures
      for (let g = 0; g < groups.length - 2; g++) {
        result = result.replace(new RegExp('\\$' + (g+1), 'g'), groups[g] || '');
      }
      totalSwaps++;
      return result;
    });
    sub.match.lastIndex = 0;
    modified = true;
  }
  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== FIX RUM LANGUAGE ===');
console.log('Total swaps:', totalSwaps);
if (totalSwaps === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
