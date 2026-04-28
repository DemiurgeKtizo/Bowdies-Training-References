'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = path.resolve(__dirname, '..');
const fxfGen = require('./pairing_engine_generator');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('enriched-profiles.js', 'ENRICHED_PROFILES');
load('chemistry-claims.js', 'CHEMISTRY_CLAIMS');
load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');

const byName = {}; for (const e of ctx.PAIRING_MAP) byName[e.name] = e;

const samples = [
  ['Shrimp Bisque','Truffle Fries','works'],         // SOUP_SALAD_SIDE
  ['Mushroom Bisque','Mushrooms','works'],           // SOUP_SALAD_SIDE
  ['French Onion','Au Gratin Potatoes','works'],     // SOUP_SALAD_SIDE
  ['House Wedge','Truffle Fries','strong'],          // SOUP_SALAD_SIDE
  ['Bone Marrow','Truffle Fries','strong'],          // STARTER_SIDE
  ['Truffle Fries','Creme Brulee','works'],          // SIDE_TO_DESSERT
  ['Prime Tartare','Seasonal Soup','works'],         // STARTER_SOUP_SALAD
  ['Bone Marrow','Filet Mignon','strong'],           // STEAK_STARTER (existing)
  ['Burrata','The Tomahawk','avoid'],                // STEAK_STARTER avoid
  ['Crab Cake','Faroe Island Salmon','works'],       // MAIN_STARTER
  ['Mushroom Bisque','Filet Mignon','excellent'],    // STEAK_SOUP_SALAD
  ['Chocolate Cake','Cheesecake','works'],           // DESSERT_PAIR
  ['Lobster Mac','Truffle Fries','works'],           // SIDE_PAIR
  ['House Wedge','Carrot Cake','works'],             // SOUP_SALAD_TO_DESSERT (salad)
  ['Tomato Basil','Mocha Creme','works'],            // SOUP_SALAD_TO_DESSERT
  ['Filet Mignon','Faroe Island Salmon','works'],    // STEAK_MAIN
];

console.log('=== ENGINE v4 SAMPLE GENERATIONS ===');
for (const [aName, bName, tier] of samples) {
  const a = byName[aName], b = byName[bName];
  if (!a || !b) { console.log('  [missing] ' + aName + ' or ' + bName); continue; }
  const note = fxfGen.generate(a, b, tier, ctx);
  const [ca, cb] = fxfGen.canonicalize(a, b);
  const arch = fxfGen.archetypeFor(ca, cb);
  console.log('');
  console.log('[' + tier.padEnd(9) + '][' + arch.padEnd(22) + '] ' + aName + ' x ' + bName);
  console.log('  ' + note);
}
