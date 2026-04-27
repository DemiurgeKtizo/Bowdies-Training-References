// Tier corrections — pass 2.
//
// Demotes 9 high-confidence pairs where editorial verdict explicitly says
// "Works" but pair-map has them at gold / strong / excellent. Reasoning per
// pair is in the AUDIT comments below.
//
// gold → works:    2 pairs
// strong → works:  3 pairs
// excellent → works: 4 pairs
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');

// Each demotion: [drink, food, fromTier]
// We move from fromTier (and any superset tier) into 'works' on both sides.
const DEMOTIONS = [
  // gold → works
  // Cragganmore vs Fernet Branca for marrow: editorial explicitly names
  // Fernet as "still the featured marrow pairing".
  ['Cragganmore 12', 'Bone Marrow', 'gold'],
  // Louis XIII on brulee: $4000 cognac wasted on $12 dessert; editorial
  // names Rémy VSOP as the appropriate tier.
  ['Louis XIII Cognac', 'Creme Brulee', 'gold'],

  // strong → works
  // Basil Hayden's Toast on porterhouse — editorial says "works better than
  // standard Basil Hayden's" but doesn't elevate to strong.
  ["Basil Hayden's Toast", 'Porterhouse', 'strong'],
  // Le Garenne Rosé on salmon — "doesn't peak; the Chardonnays and Pinots do
  // more against the Faroe's fat."
  ['Le Garenne Rosé', 'Faroe Island Salmon', 'strong'],
  // Maker's Mark on porterhouse — Cellar Aged and Weller 12 outrun it.
  ["Maker's Mark", 'Porterhouse', 'strong'],

  // excellent → works
  // JW Blue on marrow — collector spend, but Fernet Branca is the marrow call.
  ['Johnnie Walker Blue', 'Bone Marrow', 'excellent'],
  // Louis XIII on cheesecake — same over-pour reasoning as brulee.
  ['Louis XIII Cognac', 'Cheesecake', 'excellent'],
  // Faust on mushrooms — bigger Cabs peak higher.
  ['Faust Napa Valley Cabernet', 'Mushrooms', 'excellent'],
  // Fisher Unity Pinot on wedge — wedge too heavy for Pinot.
  ['Fisher Unity Pinot Noir', 'House Wedge', 'excellent'],
];

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-tier-fix-v2.bak';
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

// Order tier_supersets: gold ⊂ excellent ⊂ strong (gold is also in excellent's list, etc.)
// When demoting to works, scrub from gold/excellent/strong, then add to works.
function moveToWorks(entryName, otherName) {
  return withinEntry(entryName, (block) => {
    let b = block;
    let removed = false;
    for (const tierName of ['gold', 'excellent', 'strong']) {
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
    const worksRe = /(works:\s*\[)([^\]]*)(\])/;
    const wm = b.match(worksRe);
    if (wm) {
      let list = wm[2];
      const escName = otherName.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      if (!new RegExp('"' + escName + '"').test(list)) {
        list = list.replace(/^(\s*)/, '$1"' + otherName + '", ');
        console.log('  ' + entryName + ' [works]: added ' + otherName);
        totalChanges++;
        b = b.replace(wm[0], wm[1] + list + wm[3]);
      }
    } else if (removed) {
      console.log('  [WARN] ' + entryName + ': no works list; skipping add');
    }
    return b;
  });
}

for (const [drink, food, fromTier] of DEMOTIONS) {
  console.log('--- Demoting: ' + drink + ' × ' + food + ' (' + fromTier + ' → works) ---');
  moveToWorks(drink, food);
  moveToWorks(food, drink);
  console.log('');
}

if (totalChanges === 0) {
  console.log('[NOOP] no changes needed.');
  process.exit(0);
}

fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list edits written to pairing-map-v2.js ===');
