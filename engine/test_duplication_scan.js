'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const fr = require('./flavor_relationships');

const repo = path.resolve(__dirname, '..');
const ctx = {}; vm.createContext(ctx);
vm.runInContext(fs.readFileSync(path.join(repo, 'pairing-map-v2.js'), 'utf8') + '\nthis.PAIRING_MAP = PAIRING_MAP;', ctx);

const dups = fr.scanForDuplications(ctx.PAIRING_MAP);
console.log('Duplications found above AVOID tier:', dups.length);

const byTier = { gold: [], excellent: [], strong: [], works: [] };
for (const d of dups) {
  if (byTier[d.currentTier]) byTier[d.currentTier].push(d);
}

for (const t of ['gold','excellent','strong','works']) {
  if (byTier[t].length === 0) continue;
  console.log('');
  console.log('=== ' + t.toUpperCase() + ' (' + byTier[t].length + ' to override) ===');
  byTier[t].slice(0, 30).forEach(d => console.log('  [' + d.label.padEnd(18) + '] ' + d.a + ' x ' + d.b));
  if (byTier[t].length > 30) console.log('  ... +' + (byTier[t].length - 30) + ' more');
}

// Group counts by duplication label
console.log('');
console.log('=== By duplication kind ===');
const byLabel = {};
for (const d of dups) byLabel[d.label] = (byLabel[d.label] || 0) + 1;
for (const [label, n] of Object.entries(byLabel).sort((a,b)=>b[1]-a[1])) {
  console.log('  ' + label.padEnd(20) + ' ' + n);
}
