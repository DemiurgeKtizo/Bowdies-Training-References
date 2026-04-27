'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const dxf = require('./drink_x_food_generator');

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

const drink = byName['Bacardi Rum'];
const food = byName['Seafood Tower'];
const tier = tierByKey.get('Bacardi Rum|Seafood Tower');
console.log('Tier:', tier);
console.log('Drink class:', drink.category);
console.log('Food class:', food.category);

const newNote = dxf.generate(drink, food, tier, ctx);
console.log('\nNEW NOTE:');
console.log(newNote);
console.log('\nContains bacon-and-bleu:', newNote.includes('bacon-and-bleu'));
