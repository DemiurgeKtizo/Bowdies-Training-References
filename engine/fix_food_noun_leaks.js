// Targeted regen for pairs whose stored notes contain food-noun leaks
// (House Wedge language showing up on Seafood Tower etc.). Scans current
// templated notes for off-pair food references and regenerates only those.
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const dxf = require('./drink_x_food_generator');
const fxfGen = require('./pairing_engine_generator');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('enriched-profiles.js', 'ENRICHED_PROFILES');
load('chemistry-claims.js', 'CHEMISTRY_CLAIMS');
load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');
load('pairing-notes.js', 'PAIRING_NOTES');

const byName = {}; for (const e of ctx.PAIRING_MAP) byName[e.name] = e;
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['avoid','works','strong','excellent','gold']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

// Suspect off-pair food noun → list of foods where this noun is legitimate
const FOOD_NOUN_HOSTS = {
  'bacon': ['House Wedge','Brussels and Belly'],
  'bleu': ['House Wedge'],
  'lardon': ['House Wedge'],
  'lardons': ['House Wedge'],
  'anchovy': ['Grilled Caesar','House Wedge'],
  'romaine': ['Grilled Caesar'],
  'iceberg': ['House Wedge'],
  'bacon-and-bleu': ['House Wedge'],
  'parmesan crisp': ['Grilled Caesar'],
  'crisp lardons': ['House Wedge'],
};

function isTemplatedNote(note) {
  if (!note) return true;
  const sig = [
    /runs straight into/, /meets at register with/, / that defines /,
    /the call you don't second-guess/, /the call servers pour without second-guessing/,
    /reads cleanly at the table/, /reach for any of those/, /pick from the alternatives/,
    /elegance meets the plate/, /sits in the pocket on/, /earns a regular/,
    /dials in cleanly/, /workhorse pairing/, /keeps pace with/,
    /Save the .+ for the steak/, /Save the .+ for another course/,
    /belongs on (the steak|another) course/, /Hold the .+ for /,
    /that's the play/, /-- textbook\./, /the answer is /, /pour it and step back/,
    /if a guest asks what to drink with/, /is fine on .+ -- fine, not memorable/,
    /doesn't fight .+, but doesn't lift it either/, /pulls neither way against/,
    /backup when the strong calls/, /save the storytelling/, /spoken for/,
    /without asking for attention/, /is the answer, full stop/,
    /when a guest asks what works/, /-- the kind of pour that earns a regular/,
    /carries .+ without overshooting/,
  ];
  return sig.some(r => r.test(note));
}

const updates = {};
const detected = [];

// Phrases so distinctive they're treated as leaks regardless of templated-status.
// E.g. "bacon-and-bleu" only belongs on House Wedge — if it shows up elsewhere,
// it's a templated-text contamination event no matter what isTemplatedNote() says.
const HARD_LEAK_PHRASES = ['bacon-and-bleu', 'crisp lardons', 'parmesan crisp'];

for (const key of Object.keys(ctx.PAIRING_NOTES)) {
  const note = ctx.PAIRING_NOTES[key];
  const lower = note.toLowerCase();

  // Hard-leak detection: bypass isTemplatedNote() — distinctive phrase wins
  let hardLeak = null;
  for (const phrase of HARD_LEAK_PHRASES) {
    if (lower.includes(phrase)) {
      const [a, b] = key.split('|');
      const A = byName[a], B = byName[b];
      if (!A || !B) continue;
      const food = taxonomy.FOOD_CATS.has(A.category) ? A.name : B.name;
      const hosts = FOOD_NOUN_HOSTS[phrase] || [];
      if (!hosts.includes(food)) {
        hardLeak = {key, noun: phrase, food, foodHosts: hosts.join(', '), excerpt: note.substring(0, 160)};
        break;
      }
    }
  }
  if (hardLeak) {
    detected.push(hardLeak);
    continue;
  }

  if (!isTemplatedNote(note)) continue;
  // Find any suspect noun
  for (const [noun, hosts] of Object.entries(FOOD_NOUN_HOSTS)) {
    if (!new RegExp('\\b' + noun + '\\b').test(lower)) continue;
    // Check if this pair's food is in the hosts list
    const [a, b] = key.split('|');
    const A = byName[a], B = byName[b];
    if (!A || !B) continue;
    const food = taxonomy.FOOD_CATS.has(A.category) ? A.name : B.name;
    if (hosts.includes(food)) continue;  // legitimate
    // Leak detected
    detected.push({key, noun, food, foodHosts: hosts.join(', '), excerpt: note.substring(0, 160)});
    break;
  }
}

console.log('Leaks detected: ' + detected.length);
for (const d of detected.slice(0, 12)) {
  console.log('  [' + d.noun + '] ' + d.key + '  (food=' + d.food + ', noun belongs to: ' + d.foodHosts + ')');
}
if (detected.length > 12) console.log('  ... +' + (detected.length-12) + ' more');

// Regen each leaked pair
console.log('\nRegenerating affected pairs...');
let regened = 0;
for (const d of detected) {
  const [a, b] = d.key.split('|');
  const A = byName[a], B = byName[b];
  const isAFood = taxonomy.FOOD_CATS.has(A.category);
  const isBFood = taxonomy.FOOD_CATS.has(B.category);
  const tier = tierByKey.get(d.key);
  if (!tier) continue;
  let newNote;
  try {
    if (isAFood && !isBFood) {
      newNote = dxf.generate(B, A, tier, ctx);
    } else if (!isAFood && isBFood) {
      newNote = dxf.generate(A, B, tier, ctx);
    } else if (isAFood && isBFood) {
      newNote = fxfGen.generate(A, B, tier, ctx);
    } else continue;
  } catch (e) { continue; }
  if (!newNote) continue;
  // Mirror-key
  const food = isAFood ? A.name : B.name;
  const drink = isAFood ? B.name : A.name;
  if (isAFood && isBFood) {
    updates[d.key] = newNote;
    updates[(d.key.split('|').reverse().join('|'))] = newNote;
  } else {
    updates[food + '|' + drink] = newNote;
    updates[drink + '|' + food] = newNote;
  }
  regened++;
}
console.log('Regenerated: ' + regened + ' (' + Object.keys(updates).length + ' keys with mirrors)');

// Backup + write
const merged = Object.assign({}, ctx.PAIRING_NOTES, updates);
const sortedKeys = Object.keys(merged).sort();
const backup = path.join(repo, 'pairing-notes.js.pre-leak-fix.bak');
fs.copyFileSync(path.join(repo, 'pairing-notes.js'), backup);
console.log('[OK] backup: ' + path.relative(repo, backup));

const header = '// Pairing notes — drink × food only.\n' +
               '// Same-kind pairs (drink × drink, food × food) removed: not in engine data model.\n' +
               '// See CLAUDE.md for the editorial preservation rule.\n' +
               'const PAIRING_NOTES = {\n';
const body = sortedKeys.map(k =>
  '  ' + JSON.stringify(k) + ': ' + JSON.stringify(merged[k]) + ',\n'
).join('');
const footer = '};\n\n' +
  'function getPairingNote(itemName, pairingName) {\n' +
  '  return PAIRING_NOTES[itemName + \'|\' + pairingName] || null;\n' +
  '}\n\n' +
  'if (typeof module !== \'undefined\' && module.exports) {\n' +
  '  module.exports = { PAIRING_NOTES, getPairingNote };\n' +
  '}\n';

// Atomic write — write to temp file then rename, so interruption can't truncate the live file
const tmpPath = path.join(repo, 'pairing-notes.js.tmp');
fs.writeFileSync(tmpPath, header + body + footer);
fs.renameSync(tmpPath, path.join(repo, 'pairing-notes.js'));
console.log('[OK] wrote ' + sortedKeys.length + ' keys to pairing-notes.js');
