// Tier corrections — pass 4.
//
// Demotes 30 high-confidence pairs from gold → excellent. Skipped 124 of 154
// candidates flagged by the heuristic — most use "Excellent" as a verdict
// word but describe gold-grade pairings ("textbook", "featured", "iconic").
//
// Demote signals required: approachable/democratic/entry register, "save
// the bottle for niche guest", explicit naming of a better alternative
// ("X is the featured/peak/gold pairing"), or "softer/lighter than [gold]".
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

const DEMOTIONS = [
  ['Beefeater Gin', 'Seafood Tower'],
  ['Sambuca', 'Beignets'],
  ['Bombay Sapphire Gin', 'Seafood Tower'],
  ['Weller Millennium', 'Bone-In Filet'],
  ['Captain Morgan Rum', 'Beignets'],
  ['Casamigos Mezcal', 'Bone Marrow'],
  ['Christian Bros Brandy', 'Chocolate Brownie'],
  ['Contratto Vermouth', 'Escargot'],
  ['Corazon Sazerac', 'Cowboy Ribeye'],
  ['Crown Royal', 'Kansas City'],
  ["Dewar's White Label", 'Kansas City'],
  ['Elephant Gin', 'Burrata'],
  ['Yellow Chartreuse', 'Escargot'],
  ['Fernet Menta', 'Chocolate Brownie'],
  ['Hendricks Gin', 'Burrata'],
  ["Jack Daniel's 12 Year", 'Cowboy Ribeye'],
  ['Jameson Irish Whiskey', 'Kansas City'],
  ['Jung and Wulff Trinidad', 'Cheesecake'],
  ["Kentucky Owl St. Patrick's", 'Cowboy Ribeye'],
  ['Komos Anejo Reserva', 'Kansas City'],
  ['Loch Lomond 20 Year', 'Cowboy Ribeye'],
  ['Milagro Anejo', 'Kansas City'],
  ["Myers's Rum", 'Chocolate Brownie'],
  ['Ocho Anejo', 'Kansas City'],
  ['Plymouth Gin', 'Crab Cake'],
  ['Mount Gay Rum', 'Shrimp Cocktail'],
  ['Transfusion', 'Seafood Tower'],
  ['Villon Cognac', 'Chocolate Brownie'],
  ['Wheatley Vodka', 'Shrimp Cocktail'],
  ['Yamazaki 18 Year', 'Bone Marrow'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-tier-fix-v4.bak';
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

function moveToExcellent(entryName, otherName) {
  return withinEntry(entryName, (block) => {
    let b = block;
    let removed = false;
    // Remove from gold
    const gRe = /(gold:\s*\[)([^\]]*)(\])/;
    const gm = b.match(gRe);
    if (gm) {
      let list = gm[2];
      const before = list;
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      list = list.replace(new RegExp('\\s*"' + escName + '"\\s*,?'), '').replace(/,\s*\]/, ']');
      if (list !== before) {
        console.log('  ' + entryName + ' [gold]: removed ' + otherName);
        totalChanges++;
        removed = true;
        b = b.replace(gm[0], gm[1] + list + gm[3]);
      }
    }
    // Add to excellent (if not already there)
    const eRe = /(excellent:\s*\[)([^\]]*)(\])/;
    const em = b.match(eRe);
    if (em) {
      let list = em[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [excellent]: added ' + otherName);
        totalChanges++;
        b = b.replace(em[0], em[1] + list + em[3]);
      }
    } else if (removed) {
      console.log('  [WARN] ' + entryName + ': no excellent list; skipping add');
    }
    return b;
  });
}

for (const [drink, food] of DEMOTIONS) {
  console.log('--- Demoting: ' + drink + ' × ' + food + ' (gold → excellent) ---');
  moveToExcellent(drink, food);
  moveToExcellent(food, drink);
  console.log('');
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list edits written to pairing-map-v2.js ===');
