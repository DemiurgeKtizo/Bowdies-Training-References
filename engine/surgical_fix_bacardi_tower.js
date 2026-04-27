// Surgical replacement for the Bacardi×Tower bacon-and-bleu leak.
// Uses regex-based line replacement on the source file rather than
// re-emitting the whole 14MB notes object — avoids slow re-serialize.
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const dxf = require('./drink_x_food_generator');

// Load just enough to regen the new note
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
const newNote = dxf.generate(drink, food, tier, ctx);

if (newNote.includes('bacon-and-bleu')) {
  console.log('[ABORT] new note still contains bacon-and-bleu — skip write');
  process.exit(1);
}
console.log('New note (clean):');
console.log('  ' + newNote);

// Read the file as text, do two regex line replacements
const notesPath = path.join(repo, 'pairing-notes.js');
let src = fs.readFileSync(notesPath, 'utf8');

const beforeSize = src.length;

// Each line looks like:  "Bacardi Rum|Seafood Tower": "<note>",
const newJsonValue = JSON.stringify(newNote);
const lineRegex1 = /^(\s*"Bacardi Rum\|Seafood Tower":\s*)"[^"]*(?:\\.[^"]*)*",$/m;
const lineRegex2 = /^(\s*"Seafood Tower\|Bacardi Rum":\s*)"[^"]*(?:\\.[^"]*)*",$/m;

const m1 = src.match(lineRegex1);
const m2 = src.match(lineRegex2);
console.log('Match 1:', m1 ? 'YES' : 'NO');
console.log('Match 2:', m2 ? 'YES' : 'NO');
if (!m1 || !m2) {
  console.log('[ABORT] regex did not match — investigate file shape');
  process.exit(1);
}

src = src.replace(lineRegex1, '$1' + newJsonValue + ',');
src = src.replace(lineRegex2, '$1' + newJsonValue + ',');

const afterSize = src.length;
console.log('Size change: ' + beforeSize + ' -> ' + afterSize + ' (delta ' + (afterSize - beforeSize) + ')');

// Backup + atomic write
const backup = path.join(repo, 'pairing-notes.js.pre-bacardi-fix.bak');
fs.copyFileSync(notesPath, backup);
console.log('[OK] backup: ' + path.relative(repo, backup));

const tmp = notesPath + '.tmp';
fs.writeFileSync(tmp, src);
fs.renameSync(tmp, notesPath);
console.log('[OK] wrote pairing-notes.js (' + afterSize + ' bytes)');
