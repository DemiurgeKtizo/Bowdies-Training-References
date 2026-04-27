// Adds the 98 missing entree × side pair-classifications to pairing-map-v2.js.
//
// Tier defaults (see audit_entree_side_coverage.js for the full gap list):
//
// FISH_DELICATE × LIGHT_SIDE  = STRONG  (clean cut meets clean side)
// FISH_DELICATE × CREAMY_SIDE = WORKS   (cream typically overpowers delicate fish)
// FISH_DELICATE × RICH_SIDE   = WORKS   (rich fights delicate)
// FISH_RICH     × LIGHT_SIDE  = STRONG  (oil meets fresh)
// FISH_RICH     × CREAMY_SIDE = STRONG  (rich-with-rich works)
// FISH_RICH     × RICH_SIDE   = STRONG
// CHICKEN       × everything  = STRONG default, EXCELLENT for Mushrooms (classic)
// VEG_MAIN      × LIGHT_SIDE  = WORKS   (vegetable on vegetable, neutral)
// VEG_MAIN      × Garlic Spinach / Honey Carrots / Mushrooms = STRONG (depth/spice complements)
// VEG_MAIN      × CREAMY_SIDE = WORKS
// VEG_MAIN      × RICH_SIDE   = WORKS
//
// Specific elevations:
//   Salmon × Asparagus = EXCELLENT (classic)
//   Roast Half Chicken × Mushrooms = EXCELLENT (classic)
//   Scallops × Lobster Mac = STRONG (luxury × luxury, but doesn't quite hit excellent)
//
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

const ADDS = {
  excellent: [
    ['Faroe Island Salmon', 'Asparagus'],
    ['Roast Half Chicken', 'Mushrooms'],
  ],
  strong: [
    // Scallops (FISH_DELICATE) — caramelized sear gives some depth
    ['Seared Scallops', 'Sauteed Garlic Spinach'],
    ['Seared Scallops', 'Seasonal Vegetables'],
    ['Seared Scallops', 'Broccolini'],
    ['Seared Scallops', 'Asparagus'],
    ['Seared Scallops', 'Lobster Mac'],
    ['Seared Scallops', 'Mushrooms'],
    // Market Fish (FISH_DELICATE)
    ['Market Fish', 'Sauteed Garlic Spinach'],
    ['Market Fish', 'Seasonal Vegetables'],
    ['Market Fish', 'Broccolini'],
    ['Market Fish', 'Asparagus'],
    // Yellowfin Tuna (FISH_DELICATE) — seared-rare crust gives backbone
    ['Tuxedo-Crusted Yellowfin Tuna', 'Sauteed Garlic Spinach'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Seasonal Vegetables'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Broccolini'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Asparagus'],
    // Halibut (FISH_DELICATE) — salinity handles cream
    ['Salt-Cured Halibut', 'Sauteed Garlic Spinach'],
    ['Salt-Cured Halibut', 'Seasonal Vegetables'],
    ['Salt-Cured Halibut', 'Broccolini'],
    ['Salt-Cured Halibut', 'Asparagus'],
    ['Salt-Cured Halibut', 'Au Gratin Potatoes'],
    // Trout (FISH_DELICATE) — most delicate, keep clean
    ['Rainbow Trout', 'Sauteed Garlic Spinach'],
    ['Rainbow Trout', 'Seasonal Vegetables'],
    ['Rainbow Trout', 'Broccolini'],
    ['Rainbow Trout', 'Asparagus'],
    // Salmon (FISH_RICH) — oily flesh
    ['Faroe Island Salmon', 'Sauteed Garlic Spinach'],
    ['Faroe Island Salmon', 'Honey Roasted Carrots'],
    ['Faroe Island Salmon', 'Broccolini'],
    ['Faroe Island Salmon', 'Mushrooms'],
    // Swordfish (FISH_RICH) — meaty
    ['Swordfish', 'Sauteed Garlic Spinach'],
    ['Swordfish', 'Seasonal Vegetables'],
    ['Swordfish', 'Broccolini'],
    ['Swordfish', 'Asparagus'],
    ['Swordfish', 'Mushrooms'],
    ['Swordfish', 'Au Gratin Potatoes'],
    // Seabass (FISH_RICH) — buttery flesh
    ['Chilean Seabass', 'Sauteed Garlic Spinach'],
    ['Chilean Seabass', 'Seasonal Vegetables'],
    ['Chilean Seabass', 'Broccolini'],
    ['Chilean Seabass', 'Asparagus'],
    ['Chilean Seabass', 'Mushrooms'],
    // Roast Half Chicken — versatile
    ['Roast Half Chicken', 'Au Gratin Potatoes'],
    ['Roast Half Chicken', 'Creamed Spinach'],
    ['Roast Half Chicken', 'Honey Roasted Carrots'],
    ['Roast Half Chicken', 'Broccolini'],
    ['Roast Half Chicken', 'Asparagus'],
    ['Roast Half Chicken', 'Seasonal Vegetables'],
    // Vegetable Curry — depth-complement sides
    ['Vegetable Curry with Chickpeas', 'Sauteed Garlic Spinach'],
    ['Vegetable Curry with Chickpeas', 'Honey Roasted Carrots'],
    ['Vegetable Curry with Chickpeas', 'Mushrooms'],
  ],
  works: [
    // Scallops × heavy/decadent sides (cream or rich fights delicate)
    ['Seared Scallops', 'Truffle Fries'],
    ['Seared Scallops', 'Au Gratin Potatoes'],
    ['Seared Scallops', 'Creamed Spinach'],
    ['Seared Scallops', 'Honey Roasted Carrots'],
    // Market Fish × heavy sides
    ['Market Fish', 'Truffle Fries'],
    ['Market Fish', 'Lobster Mac'],
    ['Market Fish', 'Au Gratin Potatoes'],
    ['Market Fish', 'Creamed Spinach'],
    ['Market Fish', 'Mushrooms'],
    ['Market Fish', 'Honey Roasted Carrots'],
    // Yellowfin Tuna × heavy sides
    ['Tuxedo-Crusted Yellowfin Tuna', 'Truffle Fries'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Lobster Mac'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Au Gratin Potatoes'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Creamed Spinach'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Mushrooms'],
    ['Tuxedo-Crusted Yellowfin Tuna', 'Honey Roasted Carrots'],
    // Halibut × the rest
    ['Salt-Cured Halibut', 'Truffle Fries'],
    ['Salt-Cured Halibut', 'Lobster Mac'],
    ['Salt-Cured Halibut', 'Creamed Spinach'],
    ['Salt-Cured Halibut', 'Mushrooms'],
    ['Salt-Cured Halibut', 'Honey Roasted Carrots'],
    // Trout × heavy sides
    ['Rainbow Trout', 'Truffle Fries'],
    ['Rainbow Trout', 'Lobster Mac'],
    ['Rainbow Trout', 'Au Gratin Potatoes'],
    ['Rainbow Trout', 'Creamed Spinach'],
    ['Rainbow Trout', 'Mushrooms'],
    ['Rainbow Trout', 'Honey Roasted Carrots'],
    // Salmon × the rest
    ['Faroe Island Salmon', 'Truffle Fries'],
    ['Faroe Island Salmon', 'Lobster Mac'],
    ['Faroe Island Salmon', 'Au Gratin Potatoes'],
    ['Faroe Island Salmon', 'Creamed Spinach'],
    ['Faroe Island Salmon', 'Seasonal Vegetables'],
    // Swordfish × the rest
    ['Swordfish', 'Truffle Fries'],
    ['Swordfish', 'Lobster Mac'],
    ['Swordfish', 'Creamed Spinach'],
    ['Swordfish', 'Honey Roasted Carrots'],
    // Seabass × the rest
    ['Chilean Seabass', 'Truffle Fries'],
    ['Chilean Seabass', 'Lobster Mac'],
    ['Chilean Seabass', 'Au Gratin Potatoes'],
    ['Chilean Seabass', 'Creamed Spinach'],
    ['Chilean Seabass', 'Honey Roasted Carrots'],
    // Roast Half Chicken × less-classic sides
    ['Roast Half Chicken', 'Truffle Fries'],
    ['Roast Half Chicken', 'Lobster Mac'],
    // Vegetable Curry × less-complement sides
    ['Vegetable Curry with Chickpeas', 'Truffle Fries'],
    ['Vegetable Curry with Chickpeas', 'Lobster Mac'],
    ['Vegetable Curry with Chickpeas', 'Au Gratin Potatoes'],
    ['Vegetable Curry with Chickpeas', 'Creamed Spinach'],
    ['Vegetable Curry with Chickpeas', 'Seasonal Vegetables'],
    ['Vegetable Curry with Chickpeas', 'Broccolini'],
    ['Vegetable Curry with Chickpeas', 'Asparagus'],
  ],
};

let totalCount = 0;
for (const tier of Object.keys(ADDS)) totalCount += ADDS[tier].length;
console.log('Total pairs to add: ' + totalCount);
console.log('  excellent: ' + ADDS.excellent.length);
console.log('  strong:    ' + ADDS.strong.length);
console.log('  works:     ' + ADDS.works.length);
console.log('');

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-entree-side-backfill.bak';
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

function addToTier(entryName, otherName, tier) {
  return withinEntry(entryName, (block) => {
    let b = block;
    const tierRe = new RegExp('(' + tier + ':\\s*\\[)([^\\]]*)(\\])');
    const m = b.match(tierRe);
    const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    if (!m) {
      const closeIdx = b.lastIndexOf('}');
      if (closeIdx === -1) { console.log('  [WARN] ' + entryName + ': no closing brace'); return null; }
      const insertion = ',\n    ' + tier + ': ["' + otherName + '"]\n  ';
      const newBlock = b.slice(0, closeIdx).replace(/,?\s*$/, '') + insertion + b.slice(closeIdx);
      console.log('  ' + entryName + ' [' + tier + ']: created list, added ' + otherName);
      totalChanges++;
      return newBlock;
    }
    let list = m[2];
    if (new RegExp('"' + escName + '"').test(list)) return null;
    list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
    totalChanges++;
    return b.replace(m[0], m[1] + list + m[3]);
  });
}

for (const tier of ['excellent', 'strong', 'works']) {
  for (const [a, b] of ADDS[tier]) {
    addToTier(a, b, tier);
    addToTier(b, a, tier);
  }
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('');
console.log('=== ' + totalChanges + ' tier-list entries added ===');
console.log('Next: run engine/backfill_entree_side_notes.js');
