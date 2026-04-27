'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = path.resolve(__dirname, '..');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

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

const mismatches = [];
for (const [key, note] of Object.entries(ctx.PAIRING_NOTES)) {
  const tier = tierByKey.get(key);
  if (!tier) continue;
  const m = note.match(/(Gold|Excellent|Strong|Works|Avoid)[;:]/);
  if (!m) continue;
  const noteVerdict = m[1].toLowerCase();
  if (noteVerdict !== tier) {
    mismatches.push({ key, tierList: tier, noteVerdict });
  }
}

console.log('Total tier↔note verdict mismatches: ' + mismatches.length);
const summary = {};
for (const m of mismatches) {
  const k = m.tierList + '→' + m.noteVerdict;
  summary[k] = (summary[k] || 0) + 1;
}
console.log('By transition:');
for (const [k, n] of Object.entries(summary)) {
  console.log('  ' + k + ': ' + n);
}
console.log('');
console.log('Sample (first 20):');
mismatches.slice(0, 20).forEach(m => console.log('  [list:' + m.tierList + ' / note:' + m.noteVerdict + '] ' + m.key));
