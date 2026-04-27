// Tier corrections — pass 3.
//
// Demotes 22 pairs from excellent → strong where editorial verdict explicitly
// says "Strong X for Y" with reasoning. Skipped one candidate (#9 Cheesecake
// × Inhibited) where the heuristic misfired — its actual verdict reads as
// "works", not "strong".
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

const DEMOTIONS = [
  ['Le Garenne Rosé', 'Asparagus'],
  ['Caymus Cabernet Sauvignon', 'Au Gratin Potatoes'],
  ['Fattoria Le Pupille Saffredi', 'Bone Marrow'],
  ["Venge Scout's Honor", 'Bone Marrow'],
  ['Scavino Barolo', 'Brussels and Belly'],
  ['Silver Oak Cabernet Sauvignon', 'Brussels and Belly'],
  ['Caymus Cabernet Sauvignon', 'Mushrooms'],
  ['Caymus Cabernet Sauvignon', 'Porterhouse'],
  ['Château Gombaude-Guillot', 'Truffle Fries'],
  ['Scavino Barolo', 'Cowboy Ribeye'],
  ['Domaine de Berthiers Pouilly-Fumé', 'Sauteed Garlic Spinach'],
  ['Elk Cove Pinot Blanc', 'Faroe Island Salmon'],
  ["Graham's 20 Year Tawny", 'Mocha Creme'],
  ['Jean-Pierre Grossot Chablis', 'Grilled Caesar'],
  ['Jean-Pierre Grossot Chablis', 'Sauteed Garlic Spinach'],
  ['Jean-Pierre Grossot Chablis', 'Seafood Tower'],
  ['Jean-Pierre Grossot Chablis', 'Shrimp Cocktail'],
  ['Jordan Cabernet Sauvignon', 'Lobster Mac'],
  ['Jordan Cabernet Sauvignon', 'Porterhouse'],
  ['Lingua Franca Avni Pinot Noir', 'Roast Half Chicken'],
  ['Silver Oak Cabernet Sauvignon', 'Mushrooms'],
  ['Scavino Barolo', 'Porterhouse'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-tier-fix-v3.bak';
fs.writeFileSync(backup, src);
console.log('[OK] backup: ' + path.relative(repo, backup));
console.log('');

let totalChanges = 0;

function withinEntry(entryName, op) {
  const startMarker = 'name: "' + entryName + '"';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) { console.log('[ERR] not found: ' + entryName); return false; }
  const tail = src.slice(startIdx);
  const nextEntryRel = tail.search(/\n\s*\},\s*\n\s*\{\s*\n\s*name:/);
  const endIdx = (nextEntryRel === -1) ? src.length : startIdx + nextEntryRel + 2;
  const block = src.slice(startIdx, endIdx);
  const newBlock = op(block);
  if (newBlock !== null && newBlock !== block) {
    src = src.slice(0, startIdx) + newBlock + src.slice(endIdx);
    return true;
  }
  return false;
}

function moveToStrong(entryName, otherName) {
  return withinEntry(entryName, (block) => {
    let b = block;
    let removed = false;
    for (const tierName of ['gold', 'excellent']) {
      const re = new RegExp('(' + tierName + ':\\s*\\[)([^\\]]*)(\\])');
      const m = b.match(re);
      if (!m) continue;
      let list = m[2];
      const before = list;
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      list = list.replace(new RegExp('\\s*"' + escName + '"\\s*,?'), '').replace(/,\s*\]/, ']');
      if (list !== before) {
        console.log('  ' + entryName + ' [' + tierName + ']: removed ' + otherName);
        totalChanges++;
        removed = true;
        b = b.replace(m[0], m[1] + list + m[3]);
      }
    }
    const sRe = /(strong:\s*\[)([^\]]*)(\])/;
    const sm = b.match(sRe);
    if (sm) {
      let list = sm[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [strong]: added ' + otherName);
        totalChanges++;
        b = b.replace(sm[0], sm[1] + list + sm[3]);
      }
    } else if (removed) {
      console.log('  [WARN] ' + entryName + ': no strong list; skipping add');
    }
    return b;
  });
}

for (const [drink, food] of DEMOTIONS) {
  console.log('--- Demoting: ' + drink + ' × ' + food + ' (excellent → strong) ---');
  moveToStrong(drink, food);
  moveToStrong(food, drink);
  console.log('');
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list edits written to pairing-map-v2.js ===');
