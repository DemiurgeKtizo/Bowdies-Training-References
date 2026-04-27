// engine/regenerate_dxf_notes.js
//
// Walks pairing-notes.js and rewrites the templated drink×food portion using
// the current state of the engine (corpus mining + voice subclasses + price
// tiers + filter stack). Editorial notes — anything that doesn't match the
// templated signature — are LEFT UNTOUCHED per CLAUDE.md.
//
// Usage:
//   node engine/regenerate_dxf_notes.js              # apply
//   node engine/regenerate_dxf_notes.js --dry-run    # preview only, sample 10
//   node engine/regenerate_dxf_notes.js --sample N   # preview, sample N
//
// Pre-flight: backs up pairing-notes.js to pairing-notes.js.pre-regen-dxf.bak.
// Mirror keys: result is stored under both "A|B" and "B|A".
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy = require('./pairing_engine_taxonomy');
const dxf = require('./drink_x_food_generator');

const REPO = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(REPO, 'pairing-notes.js');
const BACKUP = path.join(REPO, 'pairing-notes.js.pre-regen-dxf.bak');

const args = process.argv.slice(2);
const isDry = args.includes('--dry-run') || args.includes('--sample');
const sampleArgIdx = args.indexOf('--sample');
const sampleN = sampleArgIdx !== -1 ? parseInt(args[sampleArgIdx + 1] || '10', 10) : (isDry ? 10 : 0);
const chunkArgIdx = args.indexOf('--chunk');
const chunkSize = chunkArgIdx !== -1 ? parseInt(args[chunkArgIdx + 1] || '2000', 10) : Infinity;
const offsetArgIdx = args.indexOf('--offset');
const offset = offsetArgIdx !== -1 ? parseInt(args[offsetArgIdx + 1] || '0', 10) : 0;

// ── load data into a vm context (so we can read the existing notes object)
const ctx = {};
vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(REPO, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('enriched-profiles.js', 'ENRICHED_PROFILES');
load('chemistry-claims.js', 'CHEMISTRY_CLAIMS');
load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');
load('pairing-notes.js', 'PAIRING_NOTES');

const byName = {};
for (const e of ctx.PAIRING_MAP) byName[e.name] = e;

// ── isTemplatedNote — same signatures used by miners
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

// ── tier lookup by pair key
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['avoid', 'works', 'strong', 'excellent', 'gold']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

// ── walk every key, regen templated drink×food entries
const stats = {
  totalKeys: 0,
  editorial: 0,
  notDxf: 0,
  noTier: 0,
  templatedRegen: 0,
  errors: 0,
  unchanged: 0,
};

const updates = {};  // newKey -> newNote
const samples = [];

const allKeys = Object.keys(ctx.PAIRING_NOTES).sort();
let processed = 0;
for (let _ki = offset; _ki < allKeys.length && processed < chunkSize; _ki++) {
  const key = allKeys[_ki];
  processed++;
  stats.totalKeys++;
  const note = ctx.PAIRING_NOTES[key];
  if (!isTemplatedNote(note)) { stats.editorial++; continue; }
  const [a, b] = key.split('|');
  const A = byName[a], B = byName[b];
  if (!A || !B) { stats.errors++; continue; }
  const isAFood = taxonomy.FOOD_CATS.has(A.category);
  const isBFood = taxonomy.FOOD_CATS.has(B.category);
  if (isAFood === isBFood) { stats.notDxf++; continue; }
  const drink = isAFood ? B : A;
  const food = isAFood ? A : B;
  const tier = tierByKey.get(key);
  if (!tier) { stats.noTier++; continue; }
  let newNote;
  try {
    newNote = dxf.generate(drink, food, tier, ctx);
  } catch (e) {
    stats.errors++;
    continue;
  }
  if (!newNote || newNote === note) { stats.unchanged++; continue; }
  // mirror-key
  const fwd = food.name + '|' + drink.name;
  const rev = drink.name + '|' + food.name;
  updates[fwd] = newNote;
  updates[rev] = newNote;
  stats.templatedRegen++;
  if (samples.length < sampleN) {
    samples.push({ key, tier, drink: drink.name, food: food.name, before: note, after: newNote });
  }
}

console.log('=== DXF REGEN PASS ===');
console.log('Total keys:               ', stats.totalKeys);
console.log('Editorial (untouched):    ', stats.editorial);
console.log('Non-dxf (skipped):        ', stats.notDxf);
console.log('No tier (skipped):        ', stats.noTier);
console.log('Errors (skipped):         ', stats.errors);
console.log('Unchanged regen:          ', stats.unchanged);
console.log('Templated regen (changed):', stats.templatedRegen);
console.log('');

if (sampleN) {
  console.log('Sample of changes (first ' + samples.length + '):');
  for (const s of samples) {
    console.log('--- [' + s.tier + '] ' + s.drink + ' × ' + s.food + ' ---');
    console.log('  before: ' + s.before.substring(0, 200));
    console.log('  after:  ' + s.after.substring(0, 200));
    console.log('');
  }
}

if (isDry) {
  console.log('[DRY RUN] no file written.');
  process.exit(0);
}

// ── apply: write updates back to pairing-notes.js
fs.copyFileSync(NOTES_FILE, BACKUP);
console.log('[OK] backup: ' + path.relative(REPO, BACKUP));

const merged = Object.assign({}, ctx.PAIRING_NOTES, updates);

// Re-emit pairing-notes.js with the same shape as before
const header = '// Pairing notes — drink × food only.\n' +
               '// Same-kind pairs (drink × drink, food × food) removed: not in engine data model.\n' +
               '// See CLAUDE.md for the editorial preservation rule.\n' +
               'const PAIRING_NOTES = {\n';
// IMPORTANT: pairing-notes.js is loaded by the browser AND by Node. The
// frontend (set-the-stage.html, index.html) calls getPairingNote(item, pair)
// to render explanation panels — without it, the UI shows
// "Detailed pairing notes coming soon" instead of the actual note. Always
// re-emit the helper + module.exports tail.
const footer = '};\n\n' +
  'function getPairingNote(itemName, pairingName) {\n' +
  '  return PAIRING_NOTES[itemName + \'|\' + pairingName] || null;\n' +
  '}\n\n' +
  'if (typeof module !== \'undefined\' && module.exports) {\n' +
  '  module.exports = { PAIRING_NOTES, getPairingNote };\n' +
  '}\n';
const sortedKeys = Object.keys(merged).sort();
const body = sortedKeys.map(k => {
  // Use double-quoted JSON encoding so embedded quotes/newlines are safe
  return '  ' + JSON.stringify(k) + ': ' + JSON.stringify(merged[k]) + ',\n';
}).join('');
fs.writeFileSync(NOTES_FILE, header + body + footer);
console.log('[OK] wrote ' + sortedKeys.length + ' keys to pairing-notes.js');
console.log('');
console.log('Next:');
console.log('  node engine/engine_snapshot_test.js   # verify anchors');
console.log('  node engine/engine_health_check.js    # verify structural integrity');
