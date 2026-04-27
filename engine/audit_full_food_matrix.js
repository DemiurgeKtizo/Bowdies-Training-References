// Comprehensive audit of every food × food pair across all class
// combinations. Reports gaps the previous audits didn't cover.
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
const FOOD_CATS = taxonomy.FOOD_CATS;
const allFoods = ctx.PAIRING_MAP.filter(e => FOOD_CATS.has(e.category));

function bucket(name, pred) { return { name, items: allFoods.filter(pred) }; }
const buckets = [
  bucket('STARTER',  e => /STARTER/.test(fc(e))),
  bucket('SOUP',     e => /SOUP/.test(fc(e))),
  bucket('SALAD',    e => fc(e) === 'SALAD'),
  bucket('ENTREE',   e => /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(fc(e))),
  bucket('SIDE',     e => /SIDE/.test(fc(e))),
  bucket('DESSERT',  e => /DESSERT/.test(fc(e))),
];

console.log('Buckets:');
for (const b of buckets) console.log('  ' + b.name + ': ' + b.items.length);
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

const cellGap = (a, b) => {
  const total = a.items.length * b.items.length;
  let missingTier = 0, missingNote = 0;
  const samples = [];
  for (const lhs of a.items) {
    for (const rhs of b.items) {
      if (lhs.name === rhs.name) continue;
      const fwd = lhs.name + '|' + rhs.name;
      const rev = rhs.name + '|' + lhs.name;
      const noteHit = ctx.PAIRING_NOTES[fwd] || ctx.PAIRING_NOTES[rev];
      const tierHit = tierByKey.get(fwd) || tierByKey.get(rev);
      if (!tierHit) missingTier++;
      if (!noteHit) {
        missingNote++;
        if (samples.length < 3) samples.push(fwd);
      }
    }
  }
  return { total, missingTier, missingNote, samples };
};

console.log('Coverage matrix (missing notes / possible pairs):');
console.log('');
const header = ['          '].concat(buckets.map(b => b.name.padEnd(10))).join('');
console.log(header);
for (const a of buckets) {
  const row = [a.name.padEnd(10)];
  for (const b of buckets) {
    if (a === b) { row.push('--        '); continue; }
    const g = cellGap(a, b);
    row.push((g.missingNote + '/' + g.total).padEnd(10));
  }
  console.log(row.join(''));
}
console.log('');

// Detailed: any cell with > 0 missing
console.log('=== Detailed gaps (only cells with missing notes) ===');
for (let i = 0; i < buckets.length; i++) {
  for (let j = 0; j < buckets.length; j++) {
    if (i === j) continue;
    if (i > j) continue; // dedupe — gap symmetric
    const g = cellGap(buckets[i], buckets[j]);
    if (g.missingNote > 0) {
      console.log('  ' + buckets[i].name + ' × ' + buckets[j].name + ': ' + g.missingNote + '/' + g.total + ' (samples: ' + g.samples.join(', ') + ')');
    }
  }
}
