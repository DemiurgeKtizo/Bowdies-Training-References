// Sample WORKS-tier food×food notes to identify "empty" ones — those that
// say "no conflict" without actually describing the flavor relationship.
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const flavorRel = require('./flavor_relationships');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) tierByKey.set(e.name + '|' + target, tier);
  }
}

const FOOD_CATS = taxonomy.FOOD_CATS;
const allFoods = ctx.PAIRING_MAP.filter(e => FOOD_CATS.has(e.category));
const byName = {}; for (const e of allFoods) byName[e.name] = e;

// "Empty" patterns: notes that say WORKS but don't actually engage flavor
const EMPTY_PATTERNS = [
  /no flavor conflict, sequence them or share the table/,
  /the table can build them together or in order/,
  /no conflict however the table orders them/,
  /sequence them or share, neither reads off/,
  /the table builds either way/,
  /either timing holds/,
  /no clash/,
  /both bookends earn their place without conflict/,
  /share the meal without strain/,
  /clean transition or together if the table wants/,
  /sequence them or share, neither overshadows/,
  /both belong on the meal/,
  /the bookends compose neutrally/,
  /clean arc from open to close/,
  /both items earn their place/,
];

let totalWorks = 0, emptyWorks = 0;
const emptySamples = [];
for (const a of allFoods) {
  for (const b of allFoods) {
    if (a.name === b.name) continue;
    const fwd = a.name + '|' + b.name;
    const tier = tierByKey.get(fwd);
    if (tier !== 'works') continue;
    const note = ctx.PAIRING_NOTES[fwd];
    if (!note) continue;
    totalWorks++;
    const isEmpty = EMPTY_PATTERNS.some(re => re.test(note));
    if (isEmpty) {
      emptyWorks++;
      if (emptySamples.length < 12) {
        emptySamples.push({ key: fwd, note: note, classA: taxonomy.foodClassFor(a), classB: taxonomy.foodClassFor(b) });
      }
    }
  }
}

console.log('Total WORKS food×food notes: ' + totalWorks);
console.log('"Empty" WORKS notes:         ' + emptyWorks + ' (' + ((emptyWorks/totalWorks)*100).toFixed(1) + '%)');
console.log('');
console.log('Sample empties:');
for (const s of emptySamples) {
  console.log('  [' + s.classA + ' x ' + s.classB + '] ' + s.key);
  console.log('    ' + s.note);
  console.log('');
}
