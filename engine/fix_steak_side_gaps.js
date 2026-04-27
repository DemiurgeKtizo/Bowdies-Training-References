// Adds the 38 missing steak × side pair-classifications to pairing-map-v2.js.
//
// Tier reasoning:
//   EXCELLENT — rich-with-rich classics (Au Gratin × big bold steaks, Lobster
//     Mac × marquee cuts). These elevate the plate.
//   STRONG    — solid plate companions: Sauteed Garlic Spinach × any steak
//     (garlic depth carries any cut), Asparagus × leaner cuts (classic),
//     Mushrooms × Cowboy (umami × marbled fat).
//   WORKS     — lighter sides that don't fight but don't elevate: Broccolini,
//     Seasonal Vegetables, Honey Roasted Carrots × bold steaks, etc.
//
// After this lands, run engine/backfill_steak_side_notes.js to generate the
// 38 food×food notes via the engine.
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

// Tier-mapped additions
const ADDS = {
  excellent: [
    ['Kansas City', 'Lobster Mac'],
    ['Kansas City', 'Au Gratin Potatoes'],
    ['Cowboy Ribeye', 'Lobster Mac'],
    ['Cowboy Ribeye', 'Au Gratin Potatoes'],
    ['The Tomahawk', 'Lobster Mac'],
    ['The Tomahawk', 'Au Gratin Potatoes'],
    ['Porterhouse', 'Au Gratin Potatoes'],
  ],
  strong: [
    ['Filet Mignon', 'Sauteed Garlic Spinach'],
    ['Filet Mignon', 'Asparagus'],
    ['Bone-In Filet', 'Sauteed Garlic Spinach'],
    ['Bone-In Filet', 'Asparagus'],
    ['Kansas City', 'Sauteed Garlic Spinach'],
    ['Cowboy Ribeye', 'Sauteed Garlic Spinach'],
    ['Cowboy Ribeye', 'Mushrooms'],
    ['The Tomahawk', 'Sauteed Garlic Spinach'],
    ['Porterhouse', 'Sauteed Garlic Spinach'],
  ],
  works: [
    ['Filet Mignon', 'Seasonal Vegetables'],
    ['Filet Mignon', 'Honey Roasted Carrots'],
    ['Filet Mignon', 'Broccolini'],
    ['Bone-In Filet', 'Seasonal Vegetables'],
    ['Bone-In Filet', 'Honey Roasted Carrots'],
    ['Bone-In Filet', 'Broccolini'],
    ['Kansas City', 'Seasonal Vegetables'],
    ['Kansas City', 'Honey Roasted Carrots'],
    ['Kansas City', 'Broccolini'],
    ['Kansas City', 'Asparagus'],
    ['Cowboy Ribeye', 'Seasonal Vegetables'],
    ['Cowboy Ribeye', 'Honey Roasted Carrots'],
    ['Cowboy Ribeye', 'Broccolini'],
    ['Cowboy Ribeye', 'Asparagus'],
    ['The Tomahawk', 'Seasonal Vegetables'],
    ['The Tomahawk', 'Honey Roasted Carrots'],
    ['The Tomahawk', 'Broccolini'],
    ['The Tomahawk', 'Asparagus'],
    ['Porterhouse', 'Seasonal Vegetables'],
    ['Porterhouse', 'Honey Roasted Carrots'],
    ['Porterhouse', 'Broccolini'],
    ['Porterhouse', 'Asparagus'],
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
const backup = file + '.pre-steak-side-backfill.bak';
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
      // Tier list doesn't exist — find the entry's closing brace and insert
      const closeIdx = b.lastIndexOf('}');
      if (closeIdx === -1) { console.log('  [WARN] ' + entryName + ': no closing brace'); return null; }
      const insertion = ',\n    ' + tier + ': ["' + otherName + '"]\n  ';
      const newBlock = b.slice(0, closeIdx).replace(/,?\s*$/, '') + insertion + b.slice(closeIdx);
      console.log('  ' + entryName + ' [' + tier + ']: created list, added ' + otherName);
      totalChanges++;
      return newBlock;
    }
    let list = m[2];
    if (new RegExp('"' + escName + '"').test(list)) return null;  // already there
    list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
    console.log('  ' + entryName + ' [' + tier + ']: added ' + otherName);
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
console.log('Next: run engine/backfill_steak_side_notes.js to generate the 38 food×food notes');
