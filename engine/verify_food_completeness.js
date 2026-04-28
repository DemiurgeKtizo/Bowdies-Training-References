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

const allFoods = ctx.PAIRING_MAP.filter(e => taxonomy.FOOD_CATS.has(e.category));
console.log('All foods:', allFoods.length);

let missing = 0;
const sampleMissing = [];
let withinClass = { total: 0, missing: 0 };

for (let i = 0; i < allFoods.length; i++) {
  for (let j = 0; j < allFoods.length; j++) {
    if (i === j) continue;
    const a = allFoods[i], b = allFoods[j];
    const sameClass = taxonomy.foodClassFor(a) === taxonomy.foodClassFor(b);
    if (sameClass) withinClass.total++;
    const fwd = a.name + '|' + b.name;
    if (!ctx.PAIRING_NOTES[fwd]) {
      missing++;
      if (sampleMissing.length < 15) sampleMissing.push(fwd + ' [' + (sameClass ? 'same-class' : 'cross-class') + ']');
      if (sameClass) withinClass.missing++;
    }
  }
}

console.log('');
console.log('Missing food×food note keys (directional, both A|B and B|A counted): ' + missing);
console.log('Same-class missing: ' + withinClass.missing + '/' + withinClass.total);
sampleMissing.forEach(s => console.log('  ' + s));
