// Tier corrections — pass 5.
//
// Promotes 6 pairs from excellent → gold where editorial verdict literally
// says "Gold standard;" (same prefix used by actual gold-tier notes).
// These are high-confidence promotions — the editorial author explicitly
// labeled them gold.
//
// The inverse direction had heavy false-positive risk on "Peak X for Y"
// language because the editorial uses that pattern for niche-tier peaks
// (e.g., "Peak Sauv Blanc for asparagus" doesn't mean absolute gold; it
// means peak in the Sauv-Blanc category). Restricting to literal
// "Gold standard;" prefix is the strict signal.
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

const PROMOTIONS = [
  // [drink, food]
  ['Bacardi Rum', 'Shrimp Bisque'],
  ['Corazon Weller', 'Brussels and Belly'],
  ['Macallan 18', 'Cowboy Ribeye'],
  ['Disaronno', 'Peanut Butter Brownie'],
  ['Frangelico', 'Peanut Butter Brownie'],
  ['Corazon Stagg', 'The Tomahawk'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-tier-fix-v5.bak';
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

function promoteToGold(entryName, otherName) {
  return withinEntry(entryName, (block) => {
    let b = block;
    // Add to gold (preserving membership in excellent — gold is subset of excellent)
    const gRe = /(gold:\s*\[)([^\]]*)(\])/;
    const gm = b.match(gRe);
    if (gm) {
      let list = gm[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [gold]: added ' + otherName);
        totalChanges++;
        b = b.replace(gm[0], gm[1] + list + gm[3]);
      }
    } else {
      console.log('  [WARN] ' + entryName + ': no gold list found, skipping');
    }
    // Ensure also present in excellent (canonical convention: gold is subset of excellent)
    const eRe = /(excellent:\s*\[)([^\]]*)(\])/;
    const em = b.match(eRe);
    if (em) {
      let list = em[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [excellent]: also added ' + otherName);
        totalChanges++;
        b = b.replace(em[0], em[1] + list + em[3]);
      }
    }
    return b;
  });
}

for (const [drink, food] of PROMOTIONS) {
  console.log('--- Promoting: ' + drink + ' × ' + food + ' (excellent → gold) ---');
  promoteToGold(drink, food);
  promoteToGold(food, drink);
  console.log('');
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list edits written to pairing-map-v2.js ===');
