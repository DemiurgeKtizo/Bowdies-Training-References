// Final polish: catch X-on-Y closers in gold tier (missed by earlier fix that
// only matched Strong/Excellent/Works prefix), residual rum-context tequila
// phrases, and a few specific factual slot leaks.

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

const FOODS_FISH = new Set(['Faroe Island Salmon','Tuxedo-Crusted Yellowfin Tuna','Chilean Seabass','Salt-Cured Halibut','Rainbow Trout','Swordfish','Market Fish','Seafood Tower']);
const FOODS_SALAD = new Set(['Grilled Caesar','House Wedge']);
const FOODS_DESSERT = new Set(['Chocolate Brownie','Chocolate Cake','Carrot Cake','Cheesecake','Creme Brulee','Beignets','Mocha Creme','Peanut Butter Brownie']);

const GOLD_CLOSERS = [
  'Gold standard; the headline call at the table.',
  'Gold standard; pour without second-guessing.',
  'Gold standard; the call that earns the regular.',
  'Gold standard; the pairing that defines the moment.',
  'Gold standard; a confident headline pour.',
  'Gold standard; the unskippable match for this combo.',
  'Gold standard; recommend without hesitation.',
];

const RUM_BRIDGE_VARIANTS = [
  'the cane-and-citrus thread frames {target}',
  'the bright sugarcane edge underlines {target}',
  'the Caribbean register brightens {target}',
  'the light-rum lift plays against {target}',
  'the rum-and-lime thread softens {target}',
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let stats = {
  goldXonY: 0, rumAgaveCitrus: 0, fishLeak: 0, saladLeak: 0,
  dessertLeak: 0, fernetCaskStrength: 0,
};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  const [a, b] = key.split('|');
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  const canon = key.split('|').sort().join('::');

  // --- Fix 1: Gold-tier X-on-Y closers ---
  // Pattern: "Gold standard; ... the X-on-Y NOUN ..."
  if (/Gold standard;[^.]*[a-z]-on-[a-z]/.test(text)) {
    text = text.replace(/Gold standard;\s+[^.]*[a-z]-on-[a-z][^.]*\./g, () => {
      const idx = hashPair(canon + '|gold-xony') % GOLD_CLOSERS.length;
      stats.goldXonY++;
      return GOLD_CLOSERS[idx];
    });
    modified = true;
  }

  // --- Fix 2: rum-context "agave-citrus thread" still in some bridge2 ---
  if ((RUMS.has(a) || RUMS.has(b)) && text.includes('agave-citrus thread')) {
    text = text.replace(/(?:the\s+)?agave-citrus thread (frames|softens|underlines|lifts|brightens|plays\s+against)\s+(\S+(?:\s+\S+){0,3})/g, (full, verb, target) => {
      stats.rumAgaveCitrus++;
      const idx = hashPair(canon + '|rum-bridge2') % RUM_BRIDGE_VARIANTS.length;
      let pick = RUM_BRIDGE_VARIANTS[idx].replace('{target}', target.replace(/\s*[.,;].*$/, ''));
      // Preserve any trailing punctuation lost in regex
      const m = target.match(/[.,;].*$/);
      if (m) pick = pick + m[0];
      return pick;
    });
    modified = true;
  }

  // --- Fix 3: "lifts the fish" / "frames the fish" in non-fish pairs ---
  if (/\b(lifts|frames|cuts|brightens|underlines)\s+the\s+fish\b/.test(text)) {
    const isFishPair = FOODS_FISH.has(a) || FOODS_FISH.has(b);
    if (!isFishPair) {
      text = text.replace(/\b(lifts|frames|cuts|brightens|underlines)\s+the\s+fish\b/g, (mm, verb) => {
        stats.fishLeak++;
        return verb + ' the dish';
      });
      modified = true;
    }
  }

  // --- Fix 4: "salad" closers on non-salad pairs ---
  if (/\bover-?\s*specified\s+for\s+the\s+salad\b|\boverpowers\s+the\s+salad\b/.test(text)) {
    const isSaladPair = FOODS_SALAD.has(a) || FOODS_SALAD.has(b);
    if (!isSaladPair) {
      text = text.replace(/over-?specified\s+for\s+the\s+salad/g, 'over-specified for this dish');
      text = text.replace(/overpowers\s+the\s+salad/g, 'overpowers this dish');
      stats.saladLeak++;
      modified = true;
    }
  }

  // --- Fix 5: "the dessert" leak in non-dessert pairs ---
  if (/\b(?:slightly\s+)?over-?specified\s+for\s+the\s+dessert\b|\bcomposed\s+with\s+dessert\b/.test(text)) {
    const isDessertPair = FOODS_DESSERT.has(a) || FOODS_DESSERT.has(b);
    if (!isDessertPair) {
      text = text.replace(/(?:slightly\s+)?over-?specified\s+for\s+the\s+dessert/g, 'over-specified for this dish');
      text = text.replace(/composed\s+with\s+dessert/g, 'composed with this dish');
      stats.dessertLeak++;
      modified = true;
    }
  }

  // --- Fix 6: Fernet "cask-strength" — Fernet is not cask-strength ---
  if (/Fernet Branca's cask-strength/.test(text)) {
    text = text.replace(/Fernet Branca's cask-strength nuclear-bitter-menthol edge/g, "Fernet Branca's nuclear bitter-menthol intensity");
    stats.fernetCaskStrength++;
    modified = true;
  }

  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== RESIDUAL LEAKS V3 ===');
console.log('Gold X-on-Y closers:    ' + stats.goldXonY);
console.log('Rum agave-citrus thread:' + stats.rumAgaveCitrus);
console.log('Fish leak in non-fish:  ' + stats.fishLeak);
console.log('Salad leak in non-salad:' + stats.saladLeak);
console.log('Dessert leak in non-dessert: ' + stats.dessertLeak);
console.log('Fernet cask-strength fix:' + stats.fernetCaskStrength);
const total = Object.values(stats).reduce((s,n)=>s+n,0);
console.log('TOTAL: ' + total);

if (total === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
