// engine/sync_mirrors_v2.js
//
// Mirror sync for FxF pairs: for any A|B != B|A AND neither direction is a
// hand-curated AVOID (substitution-recommendation pattern), regenerate via
// the engine and write to both directions. Run as the post-step of any FxF
// regen pass to guarantee mirror integrity.
//
// Run: node engine/sync_mirrors_v2.js

'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const fxfGen = require('./pairing_engine_generator');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');
load('chemistry-claims.js', 'CHEMISTRY_CLAIMS');

const FOOD_CATS = taxonomy.FOOD_CATS;
const allFoods = ctx.PAIRING_MAP.filter(e => FOOD_CATS.has(e.category));
const foodNames = new Set(allFoods.map(f => f.name));
const foodByName = {};
for (const f of allFoods) foodByName[f.name] = f;

const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) tierByKey.set(e.name + '|' + t, tier);
  }
}

// Hand-curated AVOID detection: notes with substitution recommendations.
function isHandCuratedAvoid(note) {
  if (!note) return false;
  return /Avoid;.*\b(Pair|Pour|Stand|Hold|Order)\s+\w+.*\b(with|for|on)\b/i.test(note);
}

const seen = new Set();
let synced = 0, preserved = 0, alreadyMatched = 0, missingDir = 0, errors = 0;
const updates = {};

for (const k of Object.keys(ctx.PAIRING_NOTES)) {
  const idx = k.indexOf('|');
  const a = k.slice(0, idx);
  const b = k.slice(idx + 1);
  if (!foodNames.has(a) || !foodNames.has(b)) continue;
  const pairKey = [a, b].sort().join('::');
  if (seen.has(pairKey)) continue;
  seen.add(pairKey);

  const fwd = a + '|' + b;
  const rev = b + '|' + a;
  const noteA = ctx.PAIRING_NOTES[fwd];
  const noteB = ctx.PAIRING_NOTES[rev];
  if (!noteA || !noteB) { missingDir++; continue; }
  if (noteA === noteB) { alreadyMatched++; continue; }

  // If either direction is hand-curated AVOID, preserve both as-is.
  if (isHandCuratedAvoid(noteA) || isHandCuratedAvoid(noteB)) {
    preserved++;
    continue;
  }

  // Otherwise, regenerate and write to both directions.
  const tier = tierByKey.get(fwd) || tierByKey.get(rev);
  if (!tier) { errors++; continue; }
  try {
    const generated = fxfGen.generate(foodByName[a], foodByName[b], tier, {
      PAIRING_MAP: ctx.PAIRING_MAP,
      CHEMISTRY_CLAIMS: ctx.CHEMISTRY_CLAIMS,
    });
    updates[fwd] = generated;
    updates[rev] = generated;
    synced++;
  } catch (err) {
    errors++;
  }
}

console.log('Already matched:    ', alreadyMatched);
console.log('Missing direction:  ', missingDir);
console.log('Hand-curated preserved:', preserved);
console.log('Mirror-synced:      ', synced);
console.log('Errors:             ', errors);

if (synced === 0) { console.log('No syncs needed.'); process.exit(0); }

const merged = Object.assign({}, ctx.PAIRING_NOTES, updates);
const sortedKeys = Object.keys(merged).sort();
const notesPath = path.join(repo, 'pairing-notes.js');
fs.copyFileSync(notesPath, notesPath + '.pre-mirror-sync.bak');

const header = '// Pairing notes — drink × food and food × food.\n' +
               '// Drink × drink pairs removed: not in engine data model.\n' +
               '// See CLAUDE.md for the editorial preservation rule and FxF generator architecture.\n' +
               'const PAIRING_NOTES = {\n';
const body = sortedKeys.map(k => '  ' + JSON.stringify(k) + ': ' + JSON.stringify(merged[k]) + ',\n').join('');
const footer = '};\n\n' +
  'function getPairingNote(itemName, pairingName) {\n' +
  '  return PAIRING_NOTES[itemName + \'|\' + pairingName] || null;\n' +
  '}\n\n' +
  'if (typeof module !== \'undefined\' && module.exports) {\n' +
  '  module.exports = { PAIRING_NOTES, getPairingNote };\n' +
  '}\n';

fs.writeFileSync(notesPath, header + body + footer);
console.log('Wrote ' + sortedKeys.length + ' keys.');
