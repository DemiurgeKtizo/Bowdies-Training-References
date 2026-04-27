// Tier corrections — pass 1.
//
// Demotes 16 pairs from gold→strong where pair-map-v2.js disagrees with the
// editorial verdict text in pairing-notes.js. Each pair was reviewed against
// the editorial reasoning; in every case the editorial verdict is the source
// of truth (it's the tableside reasoning the floor team actually uses).
//
// See AUDIT trail in this file's commit message for per-pair justification.
//
// This is a tier-data correction at the source (pair-map). Mirror-keys both
// directions on each pair. Backs up pair-map before writing.
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

// (drink, food) — drinks first for clarity, will be mirrored on both sides.
const DEMOTIONS = [
  // Wine-on-greens (California Sauv Blanc rounder than NZ/Sancerre gold)
  ['St Supéry Sauvignon Blanc', 'Asparagus'],
  ['St Supéry Sauvignon Blanc', 'Tomato Basil'],
  // Wine-on-steak overshoots
  ['Château Beaucastel', 'Filet Mignon'],
  ['Château Gombaude-Guillot', 'Bone-In Filet'],
  ['Fattoria Le Pupille Saffredi', 'The Tomahawk'],
  ['Shafer Hillside Select', 'Kansas City'],
  // Wine-on-side (gold sits on steak, not the side)
  ['Lagavulin 8', 'Mushrooms'],
  ['Scavino Barolo', 'Mushrooms'],
  // Cocktail substitutes (Champagne is gold for these)
  ['French 75', 'Prime Tartare'],
  ['Head Fake', 'Crab Cake'],
  ['Margarita', 'Seafood Tower'],
  // Pinot on cream-soup (Chard tips harder)
  ['Cristom Mt Jefferson Cuvée', 'Mushroom Bisque'],
  // Spirit-forward / Zin alternatives (Cab/Old Fashioned are gold)
  ['Sazerac', 'Cowboy Ribeye'],
  ['Vieux Carré', 'Cowboy Ribeye'],
  ['Venge Scout\'s Honor', 'Kansas City'],
  // Sweet-aperitif vs Tawny gold
  ['Pineau des Charentes', 'Carrot Cake'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-tier-fix-v1.bak';
fs.writeFileSync(backup, src);
console.log('[OK] backup: ' + path.relative(repo, backup));
console.log('');

let totalChanges = 0;

function withinEntry(entryName, op) {
  const startMarker = 'name: "' + entryName + '"';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) {
    console.log('[ERR] not found: ' + entryName);
    return false;
  }
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

function moveEntryFromTierToTier(entryName, otherName, fromTiers, toTier) {
  return withinEntry(entryName, (block) => {
    let b = block;
    let removed = false;
    // Remove from any of the fromTiers lists
    for (const tierName of fromTiers) {
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
    // Add to toTier (if not already there)
    const toRe = new RegExp('(' + toTier + ':\\s*\\[)([^\\]]*)(\\])');
    const tm = b.match(toRe);
    if (tm) {
      let list = tm[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        // Insert at the start of the list to keep tier ordering predictable
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [' + toTier + ']: added ' + otherName);
        totalChanges++;
        b = b.replace(tm[0], tm[1] + list + tm[3]);
      }
    } else if (removed) {
      console.log('  [WARN] ' + entryName + ': no ' + toTier + ' list found, skipping add');
    }
    return b;
  });
}

for (const [drink, food] of DEMOTIONS) {
  console.log('--- Demoting: ' + drink + ' × ' + food + ' (gold → strong) ---');
  // From the drink's side: remove from gold + excellent (any gold-as-subset duplicate), add to strong
  moveEntryFromTierToTier(drink, food, ['gold', 'excellent'], 'strong');
  // From the food's side: same operation
  moveEntryFromTierToTier(food, drink, ['gold', 'excellent'], 'strong');
  console.log('');
}

if (totalChanges === 0) {
  console.log('[NOOP] no changes needed.');
  process.exit(0);
}

fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list edits written to pairing-map-v2.js ===');
console.log('Next: regen affected pairs (or full regen pipeline)');
