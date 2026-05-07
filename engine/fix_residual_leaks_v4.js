// Final cleanup pass: catches X-on-Y closers without "the" prefix and remaining
// rum-context tequila/blanco language.

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

const CLOSERS_BY_TIER = {
  Strong: [
    'the call holds at register without strain',
    'a confident match across the table',
    'reliable headline pairing',
    'consistent recommendation worth pouring',
  ],
  Excellent: [
    'a confident headline pairing',
    'the pairing earns its featured slot',
    'a textbook match that delivers',
    'one of the strong calls on the list',
  ],
  Works: [
    'capable alongside without driving the table',
    'safe call, not the headline',
    'reliable companion, low risk',
    'composed but not a standout',
    'the call holds at register',
  ],
};

const RUM_BLANCO_REPLACEMENTS = [
  'cane register',
  'sugarcane lift',
  'silver-rum register',
  'Caribbean-rum register',
  'unaged-cane register',
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let stats = { xony2: 0, rumBlanco: 0, rumAgaveCitrus: 0 };

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!/[a-z]-on-[a-z]/.test(line) && !/blanco register/.test(line) && !/agave-citrus/.test(line)) continue;
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  const [a, b] = key.split('|');
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  const canon = key.split('|').sort().join('::');

  // Catch X-on-Y closers without "the" prefix:
  //   "Works; capable X-on-Y match"
  //   "Strong; reliable X-on-Y recommendation"
  //   "Works; safe X-on-Y alongside"
  for (const tier of ['Strong','Excellent','Works']) {
    const re = new RegExp(tier + ';\\s+(?:capable|reliable|safe|the\\s+server-confident|server-confident)?\\s*[a-z-]+-on-[a-z-]+\\s+(call|pairing|match|recommendation|alongside)\\b[^.]*\\.', 'g');
    if (!re.test(text)) continue;
    re.lastIndex = 0;
    text = text.replace(re, () => {
      const pool = CLOSERS_BY_TIER[tier];
      const idx = hashPair(canon + '|' + tier + '|x2') % pool.length;
      stats.xony2++;
      return tier + '; ' + pool[idx] + '.';
    });
    modified = true;
  }

  // Rum-context "blanco register"
  if ((RUMS.has(a) || RUMS.has(b)) && /blanco register/.test(text)) {
    text = text.replace(/(?:bright\s+)?blanco register/g, (mm) => {
      stats.rumBlanco++;
      const idx = hashPair(canon + '|rum-blanco') % RUM_BLANCO_REPLACEMENTS.length;
      return RUM_BLANCO_REPLACEMENTS[idx];
    });
    modified = true;
  }

  // Any remaining "agave-citrus" in rum context
  if ((RUMS.has(a) || RUMS.has(b)) && /agave-citrus/.test(text)) {
    text = text.replace(/agave-citrus/g, () => {
      stats.rumAgaveCitrus++;
      return 'cane-and-citrus';
    });
    modified = true;
  }

  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== RESIDUAL V4 ===');
console.log('X-on-Y closers (no "the"):' + stats.xony2);
console.log('Rum blanco replacements:  ' + stats.rumBlanco);
console.log('Rum agave-citrus residue: ' + stats.rumAgaveCitrus);
const total = Object.values(stats).reduce((s,n)=>s+n,0);
console.log('TOTAL:', total);

if (total === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote in ' + (Date.now()-t0) + 'ms');
