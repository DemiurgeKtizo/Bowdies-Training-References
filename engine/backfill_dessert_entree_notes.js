// Safe backfill for the 85 dessert × entree pairs.
// Uses JSON.stringify for both keys and values so quotes/specials escape
// cleanly. Mirrors the helper + module.exports tail that the frontend needs.
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const fxfGen = require('./pairing_engine_generator');

// Load existing pair-notes
const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('enriched-profiles.js', 'ENRICHED_PROFILES');
load('chemistry-claims.js', 'CHEMISTRY_CLAIMS');
load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');
load('pairing-notes.js', 'PAIRING_NOTES');

const byName = {}; for (const e of ctx.PAIRING_MAP) byName[e.name] = e;

// Find tier for each pair
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['avoid', 'works', 'strong', 'excellent', 'gold']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

const updates = {};
let added = 0;

const desserts = ctx.PAIRING_MAP.filter(e => {
  const fc = taxonomy.foodClassFor(e);
  return fc === 'DESSERT_LIGHT' || fc === 'DESSERT_CHOCOLATE';
});
const entrees = ctx.PAIRING_MAP.filter(e => {
  const fc = taxonomy.foodClassFor(e);
  return /STEAK|FISH_MAIN|CHICKEN|VEG_MAIN/.test(fc || '');
});

for (const d of desserts) {
  for (const e of entrees) {
    const fwd = d.name + '|' + e.name;
    const rev = e.name + '|' + d.name;
    if (ctx.PAIRING_NOTES[fwd] || ctx.PAIRING_NOTES[rev]) continue;
    const tier = tierByKey.get(fwd) || tierByKey.get(rev) || 'works';
    let note;
    try {
      note = fxfGen.generate(e, d, tier, ctx);
    } catch (err) {
      console.log('  [ERR] ' + d.name + ' x ' + e.name + ': ' + err.message);
      continue;
    }
    if (!note) continue;
    updates[fwd] = note;
    updates[rev] = note;
    added++;
  }
}

console.log('Generated ' + added + ' new dessert×entree pair-notes (' + Object.keys(updates).length + ' keys with mirrors)');

// Sample a few
const sampleKeys = Object.keys(updates).slice(0, 5);
for (const k of sampleKeys) {
  console.log('\n  ' + k + ':');
  console.log('  ' + updates[k].substring(0, 200));
}

// Merge with existing notes
const merged = Object.assign({}, ctx.PAIRING_NOTES, updates);
const sortedKeys = Object.keys(merged).sort();

// Backup
const backup = path.join(repo, 'pairing-notes.js.pre-dessert-backfill.bak');
fs.copyFileSync(path.join(repo, 'pairing-notes.js'), backup);
console.log('\n[OK] backup: ' + path.relative(repo, backup));

// Re-emit
const header = '// Pairing notes — drink × food only.\n' +
               '// Same-kind pairs (drink × drink, food × food) removed: not in engine data model.\n' +
               '// See CLAUDE.md for the editorial preservation rule.\n' +
               'const PAIRING_NOTES = {\n';
const body = sortedKeys.map(k =>
  '  ' + JSON.stringify(k) + ': ' + JSON.stringify(merged[k]) + ',\n'
).join('');
const footer = '};\n\n' +
  'function getPairingNote(itemName, pairingName) {\n' +
  '  return PAIRING_NOTES[itemName + \'|\' + pairingName] || null;\n' +
  '}\n\n' +
  'if (typeof module !== \'undefined\' && module.exports) {\n' +
  '  module.exports = { PAIRING_NOTES, getPairingNote };\n' +
  '}\n';

fs.writeFileSync(path.join(repo, 'pairing-notes.js'), header + body + footer);
console.log('[OK] wrote ' + sortedKeys.length + ' keys to pairing-notes.js');
