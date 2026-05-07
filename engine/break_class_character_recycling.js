'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');
const BACKUP = path.join(ROOT, 'pairing-notes.js.pre-class-char-fix.bak');

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const SUBSTITUTIONS = [
  { name: 'bourbon-class-default-character',
    match: /'s oak-and-vanilla bourbon depth/g,
    variants: ["'s oak-and-vanilla bourbon depth","'s caramel-and-spice bourbon weight","'s rounded-oak bourbon character","'s warm-vanilla bourbon backbone","'s grain-and-oak bourbon register","'s soft-oak bourbon body","'s spice-and-caramel bourbon depth"] },
  { name: 'big-red-class-character',
    match: /'s concentrated dark-fruit and tannin/g,
    variants: ["'s concentrated dark-fruit and tannin","'s dense blackberry-and-cassis tannin","'s structured dark-fruit weight","'s firm cassis-and-cocoa tannin","'s powerful blackcurrant body","'s deep dark-fruit and grippy tannin"] },
  { name: 'sweet-liqueur-class-character',
    match: /'s sweet liqueur character/g,
    variants: ["'s sweet liqueur character","'s digestif-pour sweetness","'s after-dinner liqueur weight","'s syrupy-sweet liqueur body","'s herbal-and-sugar liqueur register"] },
  { name: 'gin-class-character',
    match: /'s botanical-driven lift/g,
    variants: ["'s botanical-driven lift","'s juniper-and-citrus lift","'s herbal-botanical edge","'s gin lift with floral-and-pepper","'s coriander-and-juniper register"] },
  { name: 'sparkling-class-character',
    match: /'s bright sparkling effervescence/g,
    variants: ["'s bright sparkling effervescence","'s méthode-driven bubbles and toast","'s brioche-laced sparkling body","'s fine-bubble Champagne register","'s mineral-driven sparkling lift"] },
  { name: 'white-wine-class-character',
    match: /'s crisp white-wine character/g,
    variants: ["'s crisp white-wine character","'s mineral-bright white body","'s acid-driven white register","'s stone-fruit white body","'s cool-climate white acidity"] },
  { name: 'tequila-class-character',
    match: /'s aged-agave character/g,
    variants: ["'s aged-agave character","'s rested-agave body","'s barrel-aged tequila weight","'s cooked-agave-and-oak register","'s añejo-pour depth"] },
  { name: 'mezcal-class-character',
    match: /'s smoky agave character/g,
    variants: ["'s smoky agave character","'s wood-fire mezcal body","'s espadín-and-smoke register","'s earthen-pit smoke profile","'s rustic mezcal weight"] },
  { name: 'cognac-class-character',
    match: /'s barrel-aged cognac character/g,
    variants: ["'s barrel-aged cognac character","'s eau-de-vie body with oak","'s Limousin-oak cognac register","'s aged-grape brandy depth","'s rancio-edged cognac weight"] },
  { name: 'cocktail-bold-class-character',
    match: /'s spirit-forward cocktail register/g,
    variants: ["'s spirit-forward cocktail register","'s stirred whiskey-led build","'s bitters-and-spirit register","'s aromatic spirit-driven cocktail body","'s manhattan-or-old-fashioned register"] },
  { name: 'cocktail-light-class-character',
    match: /'s citrus-and-bright cocktail lift/g,
    variants: ["'s citrus-and-bright cocktail lift","'s shaken-and-bright cocktail register","'s gin-or-tequila cocktail lift","'s lemon-driven cocktail body","'s high-acid cocktail register"] },
  { name: 'apertivo-class-character',
    match: /'s bitter-herb aperitivo edge/g,
    variants: ["'s bitter-herb aperitivo edge","'s amaro-bitter register","'s gentian-driven cut","'s bittersweet rhubarb-and-orange edge","'s aperitivo herb-and-bitter cut"] },
  { name: 'sweet-wine-class-character',
    match: /'s dessert-wine sweetness/g,
    variants: ["'s dessert-wine sweetness","'s late-harvest honey-and-apricot","'s botrytis-influenced sweetness","'s sticky-sweet dessert pour","'s noble-rot-driven sugar"] },
  { name: 'vodka-class-character',
    match: /'s crystalline neutrality/g,
    variants: ["'s crystalline neutrality","'s clean cold-distilled body","'s neutral vodka register","'s unflavored crystalline pour","'s silky vodka body"] },
  { name: 'light-spirit-class-character',
    match: /'s silver-spirit lift with agave-citrus edge/g,
    variants: ["'s silver-spirit lift with agave-citrus edge","'s blanco-tequila or light-rum register","'s unaged silver-spirit body","'s green-agave-and-cane lift","'s clean silver register"] },
  { name: 'heavy-spirit-class-character',
    match: /'s dense-spirit weight/g,
    variants: ["'s dense-spirit weight","'s rich layered-spirit body","'s high-proof pour register","'s heavy aged-spirit weight","'s deep-bodied spirit register"] },
  { name: 'elegant-red-class-character',
    match: /'s red-fruit-and-spice elegance/g,
    variants: ["'s red-fruit-and-spice elegance","'s polished medium-body register","'s elegant cherry-and-pepper body","'s silky red-fruit lift","'s spice-driven red elegance"] },
];

// Pre-build substring tests for fast filtering
const QUICK_TESTS = SUBSTITUTIONS.map(s => {
  // Extract the static substring (no regex special chars)
  const src = s.match.source.replace(/^\\?/, '');
  return src;
});

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
console.log('Read in ' + (Date.now()-t0) + 'ms');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let totalSwaps = 0;
const swapsByPhrase = {};

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Quick reject: skip lines that don't contain any of our needles
  let mightMatch = false;
  for (const t of QUICK_TESTS) if (line.indexOf(t) !== -1) { mightMatch = true; break; }
  if (!mightMatch) continue;

  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  for (const sub of SUBSTITUTIONS) {
    if (text.indexOf(QUICK_TESTS[SUBSTITUTIONS.indexOf(sub)]) === -1) continue;
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

console.log('Process time: ' + (Date.now()-t0) + 'ms');
console.log('=== BREAK CLASS CHARACTER RECYCLING ===');
console.log('Total swaps:', totalSwaps);
console.log('\nBy phrase:');
for (const [n, c] of Object.entries(swapsByPhrase).sort((a,b)=>b[1]-a[1])) {
  console.log('  ' + c.toString().padStart(6) + '  ' + n);
}

if (totalSwaps === 0) { console.log('[NOOP]'); process.exit(0); }
if (!fs.existsSync(BACKUP)) { fs.copyFileSync(NOTES_FILE, BACKUP); console.log('[OK] backup'); }

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars');
console.log('Total: ' + (Date.now()-t0) + 'ms');
