// Comprehensive entree × side coverage audit. Reports any pair where the
// entree (steak / fish / chicken / veg main) lacks tier + note for a given
// side (rich / creamy / light).
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

const ENTREE_CLASSES = /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/;
const SIDE_CLASSES = /SIDE/;

const entrees = ctx.PAIRING_MAP.filter(e => ENTREE_CLASSES.test(taxonomy.foodClassFor(e) || ''));
const sides = ctx.PAIRING_MAP.filter(e => SIDE_CLASSES.test(taxonomy.foodClassFor(e) || ''));

console.log('Entrees: ' + entrees.length);
entrees.forEach(e => console.log('  ' + e.name + ' (' + taxonomy.foodClassFor(e) + ')'));
console.log('');
console.log('Sides: ' + sides.length);
sides.forEach(s => console.log('  ' + s.name + ' (' + taxonomy.foodClassFor(s) + ')'));
console.log('');

const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

const total = entrees.length * sides.length;
const missing = [];
const haveTierNoNote = [];

for (const e of entrees) {
  for (const s of sides) {
    const fwd = e.name + '|' + s.name;
    const rev = s.name + '|' + e.name;
    const noteHit = ctx.PAIRING_NOTES[fwd] || ctx.PAIRING_NOTES[rev];
    const tierHit = tierByKey.get(fwd) || tierByKey.get(rev);
    if (!tierHit && !noteHit) {
      missing.push(fwd);
    } else if (tierHit && !noteHit) {
      haveTierNoNote.push({ pair: fwd, tier: tierHit });
    }
  }
}

console.log('=== Coverage summary ===');
console.log('Total possible pairs: ' + total);
console.log('Missing both tier + note: ' + missing.length);
console.log('Have tier but no note:    ' + haveTierNoNote.length);
console.log('');

if (missing.length) {
  console.log('=== Missing tier + note (need to classify and generate) ===');
  const byEntree = {};
  for (const k of missing) {
    const [a, b] = k.split('|');
    if (!byEntree[a]) byEntree[a] = [];
    byEntree[a].push(b);
  }
  for (const [entree, sideList] of Object.entries(byEntree)) {
    console.log('  ' + entree + ' (' + sideList.length + '): ' + sideList.join(', '));
  }
  console.log('');
}

if (haveTierNoNote.length) {
  console.log('=== Have tier, missing note (just need generation) ===');
  for (const item of haveTierNoNote) {
    console.log('  [' + item.tier + '] ' + item.pair);
  }
}
