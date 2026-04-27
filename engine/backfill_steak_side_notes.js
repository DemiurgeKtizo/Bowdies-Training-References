// Generates the 38 missing steak × side pair-notes via the food×food generator.
// JSON.stringify on values for safe escaping; atomic write via temp + rename.
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const fxfGen = require('./pairing_engine_generator');

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
  for (const tier of ['avoid', 'works', 'strong', 'excellent', 'gold']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

const STEAKS = ['Filet Mignon','Bone-In Filet','Kansas City','Cowboy Ribeye','The Tomahawk','Porterhouse'];
const sides = ctx.PAIRING_MAP.filter(e => /SIDE/.test(taxonomy.foodClassFor(e) || '')).map(e => e.name);

const updates = {};
let added = 0;

for (const sn of STEAKS) {
  for (const sd of sides) {
    const fwd = sn + '|' + sd;
    const rev = sd + '|' + sn;
    if (ctx.PAIRING_NOTES[fwd] || ctx.PAIRING_NOTES[rev]) continue;
    const tier = tierByKey.get(fwd) || tierByKey.get(rev);
    if (!tier) continue;
    const steak = byName[sn], side = byName[sd];
    let note;
    try {
      note = fxfGen.generate(steak, side, tier, ctx);
    } catch (err) {
      console.log('  [ERR] ' + sn + ' x ' + sd + ': ' + err.message);
      continue;
    }
    if (!note) continue;
    updates[fwd] = note;
    updates[rev] = note;
    added++;
  }
}

console.log('Generated ' + added + ' new steak×side pair-notes (' + Object.keys(updates).length + ' keys with mirrors)');
console.log('');

// Sample
const sampleKeys = Object.keys(updates).slice(0, 5);
for (const k of sampleKeys) {
  console.log('  ' + k + ':');
  console.log('  ' + updates[k].substring(0, 250));
  console.log('');
}

const merged = Object.assign({}, ctx.PAIRING_NOTES, updates);
const sortedKeys = Object.keys(merged).sort();

const backup = path.join(repo, 'pairing-notes.js.pre-steak-side-backfill.bak');
fs.copyFileSync(path.join(repo, 'pairing-notes.js'), backup);
console.log('[OK] backup: ' + path.relative(repo, backup));

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

const tmp = path.join(repo, 'pairing-notes.js.tmp');
fs.writeFileSync(tmp, header + body + footer);
fs.renameSync(tmp, path.join(repo, 'pairing-notes.js'));
console.log('[OK] wrote ' + sortedKeys.length + ' keys to pairing-notes.js');
