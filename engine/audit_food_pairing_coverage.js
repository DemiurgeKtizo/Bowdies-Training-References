// Comprehensive food × food coverage audit. Checks every cross-course
// relationship a server might field at the table:
//   starter → main  (guest had starter, asking what main works)
//   soup    → main
//   salad   → main
//   starter → dessert  (full-meal-arc question)
//   soup    → dessert
//   salad   → dessert
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

const fc = e => taxonomy.foodClassFor(e) || '';
const STARTERS = ctx.PAIRING_MAP.filter(e => /STARTER/.test(fc(e)));
const SOUPS    = ctx.PAIRING_MAP.filter(e => /SOUP/.test(fc(e)));
const SALADS   = ctx.PAIRING_MAP.filter(e => fc(e) === 'SALAD');
const ENTREES  = ctx.PAIRING_MAP.filter(e => /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(fc(e)));
const DESSERTS = ctx.PAIRING_MAP.filter(e => /DESSERT/.test(fc(e)));

console.log('Buckets:');
console.log('  Starters: ' + STARTERS.length + ' — ' + STARTERS.map(e=>e.name).join(', '));
console.log('  Soups:    ' + SOUPS.length + ' — ' + SOUPS.map(e=>e.name).join(', '));
console.log('  Salads:   ' + SALADS.length + ' — ' + SALADS.map(e=>e.name).join(', '));
console.log('  Entrees:  ' + ENTREES.length + ' — ' + ENTREES.map(e=>e.name).join(', '));
console.log('  Desserts: ' + DESSERTS.length + ' — ' + DESSERTS.map(e=>e.name).join(', '));
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

function gap(label, lhsBucket, rhsBucket) {
  const total = lhsBucket.length * rhsBucket.length;
  const missingTier = [];
  const missingNote = [];
  for (const a of lhsBucket) {
    for (const b of rhsBucket) {
      const fwd = a.name + '|' + b.name;
      const rev = b.name + '|' + a.name;
      const noteHit = ctx.PAIRING_NOTES[fwd] || ctx.PAIRING_NOTES[rev];
      const tierHit = tierByKey.get(fwd) || tierByKey.get(rev);
      if (!tierHit) missingTier.push(fwd);
      if (!noteHit) missingNote.push(fwd);
    }
  }
  console.log('=== ' + label + ' ===');
  console.log('  Total possible: ' + total);
  console.log('  Missing tier:   ' + missingTier.length);
  console.log('  Missing note:   ' + missingNote.length);
  if (missingTier.length && missingTier.length <= 30) {
    missingTier.forEach(k => console.log('    ' + k));
  } else if (missingTier.length > 30) {
    console.log('    (' + missingTier.length + ' — showing first 15)');
    missingTier.slice(0, 15).forEach(k => console.log('    ' + k));
  }
  console.log('');
  return { label, total, missingTier, missingNote };
}

const results = [];
results.push(gap('Starter × Entree', STARTERS, ENTREES));
results.push(gap('Soup × Entree',    SOUPS,    ENTREES));
results.push(gap('Salad × Entree',   SALADS,   ENTREES));
results.push(gap('Starter × Dessert', STARTERS, DESSERTS));
results.push(gap('Soup × Dessert',    SOUPS,    DESSERTS));
results.push(gap('Salad × Dessert',   SALADS,   DESSERTS));

const grandTotal = results.reduce((s,r) => s + r.total, 0);
const grandMissingTier = results.reduce((s,r) => s + r.missingTier.length, 0);
const grandMissingNote = results.reduce((s,r) => s + r.missingNote.length, 0);
console.log('=== GRAND TOTAL ===');
console.log('  Possible pairs: ' + grandTotal);
console.log('  Missing tier:   ' + grandMissingTier);
console.log('  Missing note:   ' + grandMissingNote);
