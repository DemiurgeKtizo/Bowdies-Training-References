// Audit dessert × entree pair tiers + notes for sanity.
// Flags:
//   - any dessert × entree pair classified above WORKS that lacks a chemistry rationale
//   - notes that look templated-default rather than purposefully written
//   - mirror-key disagreements
//   - desserts vs entrees with surprising "avoid" or "gold" classifications
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

const byName = {}; for (const e of ctx.PAIRING_MAP) byName[e.name] = e;

const desserts = ctx.PAIRING_MAP.filter(e => {
  const fc = taxonomy.foodClassFor(e);
  return fc === 'DESSERT_LIGHT' || fc === 'DESSERT_CHOCOLATE';
});
const entrees = ctx.PAIRING_MAP.filter(e => {
  const fc = taxonomy.foodClassFor(e);
  return /STEAK|FISH_MAIN|CHICKEN|VEG_MAIN/.test(fc || '');
});

console.log('Desserts: ' + desserts.length + '  Entrees: ' + entrees.length);
console.log('');

// Tier inventory
const inventory = { gold: [], excellent: [], strong: [], works: [], avoid: [], missing: [] };

for (const d of desserts) {
  for (const e of entrees) {
    const fwdKey = d.name + '|' + e.name;
    const revKey = e.name + '|' + d.name;
    let tier = null;
    for (const t of ['gold','excellent','strong','works','avoid']) {
      if (Array.isArray(d[t]) && d[t].includes(e.name)) { tier = t; break; }
      if (Array.isArray(e[t]) && e[t].includes(d.name)) { tier = t; break; }
    }
    if (!tier) { inventory.missing.push(fwdKey); continue; }
    inventory[tier].push({ pair: fwdKey, note: ctx.PAIRING_NOTES[fwdKey] || ctx.PAIRING_NOTES[revKey] || '(no note)' });
  }
}

console.log('Tier breakdown for dessert × entree:');
for (const [tier, list] of Object.entries(inventory)) {
  console.log('  ' + tier + ': ' + list.length);
}
console.log('');

// Highlight outliers — any dessert × entree gold/excellent/avoid is unusual
console.log('===== GOLD pairs (unusual for dessert×entree) =====');
inventory.gold.slice(0, 20).forEach(p => {
  console.log('  ' + p.pair);
  console.log('    ' + p.note.substring(0, 200));
});
console.log('');
console.log('===== EXCELLENT pairs (unusual) =====');
inventory.excellent.slice(0, 20).forEach(p => {
  console.log('  ' + p.pair);
  console.log('    ' + p.note.substring(0, 200));
});
console.log('');
console.log('===== AVOID pairs (unusual) =====');
inventory.avoid.slice(0, 20).forEach(p => {
  console.log('  ' + p.pair);
  console.log('    ' + p.note.substring(0, 200));
});
console.log('');
console.log('===== STRONG pairs (sample 6) =====');
inventory.strong.slice(0, 6).forEach(p => {
  console.log('  ' + p.pair);
  console.log('    ' + p.note.substring(0, 200));
});
console.log('');
console.log('===== WORKS pairs (sample 6) =====');
inventory.works.slice(0, 6).forEach(p => {
  console.log('  ' + p.pair);
  console.log('    ' + p.note.substring(0, 200));
});
console.log('');

// Missing
if (inventory.missing.length) {
  console.log('===== MISSING tier-classifications =====');
  inventory.missing.forEach(k => console.log('  ' + k));
}
