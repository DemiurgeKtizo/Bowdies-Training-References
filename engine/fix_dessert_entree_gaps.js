// Adds the 85 missing dessert × entree pair-classifications to pairing-map-v2.js.
//
// Default classification: WORKS (the relationship is sequential — dessert
// follows the entree in the meal — not an active enhancement OR a conflict).
// Server use: "guest had the X for entree and is asking what dessert" or
// vice versa. Works = "doesn't fight, doesn't elevate, fine."
//
// After this lands, run regenerate_templated_notes.js to backfill the 85
// food×food notes via the engine.
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

// The 85 missing pairs from the coverage scan (each is dessert × entree)
// All assigned WORKS as the neutral default.
const ADDS = [
  ['Creme Brulee', 'Seared Scallops'],
  ['Creme Brulee', 'Vegetable Curry with Chickpeas'],
  ['Creme Brulee', 'Market Fish'],
  ['Creme Brulee', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Creme Brulee', 'Salt-Cured Halibut'],
  ['Creme Brulee', 'Swordfish'],
  ['Creme Brulee', 'Chilean Seabass'],
  ['Creme Brulee', 'Rainbow Trout'],
  ['Cheesecake', 'Seared Scallops'],
  ['Cheesecake', 'Vegetable Curry with Chickpeas'],
  ['Cheesecake', 'Market Fish'],
  ['Cheesecake', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Cheesecake', 'Salt-Cured Halibut'],
  ['Cheesecake', 'Swordfish'],
  ['Cheesecake', 'Chilean Seabass'],
  ['Cheesecake', 'Rainbow Trout'],
  ['Carrot Cake', 'Seared Scallops'],
  ['Carrot Cake', 'Vegetable Curry with Chickpeas'],
  ['Carrot Cake', 'Faroe Island Salmon'],
  ['Carrot Cake', 'Market Fish'],
  ['Carrot Cake', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Carrot Cake', 'Salt-Cured Halibut'],
  ['Carrot Cake', 'Swordfish'],
  ['Carrot Cake', 'Chilean Seabass'],
  ['Carrot Cake', 'Rainbow Trout'],
  ['Chocolate Brownie', 'Seared Scallops'],
  ['Chocolate Brownie', 'Vegetable Curry with Chickpeas'],
  ['Chocolate Brownie', 'Faroe Island Salmon'],
  ['Chocolate Brownie', 'Market Fish'],
  ['Chocolate Brownie', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Chocolate Brownie', 'Salt-Cured Halibut'],
  ['Chocolate Brownie', 'Swordfish'],
  ['Chocolate Brownie', 'Chilean Seabass'],
  ['Chocolate Brownie', 'Rainbow Trout'],
  ['Chocolate Brownie', 'Roast Half Chicken'],
  ['Peanut Butter Brownie', 'Seared Scallops'],
  ['Peanut Butter Brownie', 'Vegetable Curry with Chickpeas'],
  ['Peanut Butter Brownie', 'Faroe Island Salmon'],
  ['Peanut Butter Brownie', 'Market Fish'],
  ['Peanut Butter Brownie', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Peanut Butter Brownie', 'Salt-Cured Halibut'],
  ['Peanut Butter Brownie', 'Swordfish'],
  ['Peanut Butter Brownie', 'Chilean Seabass'],
  ['Peanut Butter Brownie', 'Rainbow Trout'],
  ['Peanut Butter Brownie', 'Roast Half Chicken'],
  ['Beignets', 'Seared Scallops'],
  ['Beignets', 'Vegetable Curry with Chickpeas'],
  ['Beignets', 'Market Fish'],
  ['Beignets', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Beignets', 'Salt-Cured Halibut'],
  ['Beignets', 'Swordfish'],
  ['Beignets', 'Chilean Seabass'],
  ['Beignets', 'Rainbow Trout'],
  ['Chocolate Cake', 'Filet Mignon'],
  ['Chocolate Cake', 'Bone-In Filet'],
  ['Chocolate Cake', 'Kansas City'],
  ['Chocolate Cake', 'Cowboy Ribeye'],
  ['Chocolate Cake', 'The Tomahawk'],
  ['Chocolate Cake', 'Porterhouse'],
  ['Chocolate Cake', 'Seared Scallops'],
  ['Chocolate Cake', 'Vegetable Curry with Chickpeas'],
  ['Chocolate Cake', 'Faroe Island Salmon'],
  ['Chocolate Cake', 'Market Fish'],
  ['Chocolate Cake', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Chocolate Cake', 'Salt-Cured Halibut'],
  ['Chocolate Cake', 'Swordfish'],
  ['Chocolate Cake', 'Chilean Seabass'],
  ['Chocolate Cake', 'Rainbow Trout'],
  ['Chocolate Cake', 'Roast Half Chicken'],
  ['Mocha Creme', 'Filet Mignon'],
  ['Mocha Creme', 'Bone-In Filet'],
  ['Mocha Creme', 'Kansas City'],
  ['Mocha Creme', 'Cowboy Ribeye'],
  ['Mocha Creme', 'The Tomahawk'],
  ['Mocha Creme', 'Porterhouse'],
  ['Mocha Creme', 'Seared Scallops'],
  ['Mocha Creme', 'Vegetable Curry with Chickpeas'],
  ['Mocha Creme', 'Faroe Island Salmon'],
  ['Mocha Creme', 'Market Fish'],
  ['Mocha Creme', 'Tuxedo-Crusted Yellowfin Tuna'],
  ['Mocha Creme', 'Salt-Cured Halibut'],
  ['Mocha Creme', 'Swordfish'],
  ['Mocha Creme', 'Chilean Seabass'],
  ['Mocha Creme', 'Rainbow Trout'],
  ['Mocha Creme', 'Roast Half Chicken'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-dessert-entree-backfill.bak';
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

function addToWorks(entryName, otherName) {
  return withinEntry(entryName, (block) => {
    let b = block;
    const wRe = /(works:\s*\[)([^\]]*)(\])/;
    const wm = b.match(wRe);
    if (!wm) {
      // Need to add a works field — find the entry's closing brace and insert before it
      // For this batch, all entries have a works field. If not, log.
      console.log('  [WARN] ' + entryName + ': no works list found, skipping');
      return null;
    }
    let list = wm[2];
    const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (new RegExp('"' + escName + '"').test(list)) return null;  // already there
    list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
    console.log('  ' + entryName + ' [works]: added ' + otherName);
    totalChanges++;
    return b.replace(wm[0], wm[1] + list + wm[3]);
  });
}

for (const [a, b] of ADDS) {
  addToWorks(a, b);
  addToWorks(b, a);
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('');
console.log('=== ' + totalChanges + ' tier-list entries added ===');
console.log('Next: run engine/regenerate_templated_notes.js to backfill the food×food notes');
