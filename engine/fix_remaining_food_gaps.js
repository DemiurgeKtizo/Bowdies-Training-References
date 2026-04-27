// Fills the remaining 433 food×food gaps across seven cell types:
//   STARTER × SOUP    (96 — course-1 alternatives)
//   STARTER × SALAD   (14)
//   STARTER × SIDE    (79)
//   SOUP × SALAD      (24)
//   SOUP × SIDE       (120)
//   SALAD × SIDE      (20)
//   SIDE × DESSERT    (80)
//
// Default tier: WORKS (course-jumping or same-course alternatives are neutral).
// STRONG upgrades for clear chemistry classics.
'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const file = path.join(repo, 'pairing-map-v2.js');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

const fc = e => taxonomy.foodClassFor(e) || '';
const STARTERS = ctx.PAIRING_MAP.filter(e => /STARTER/.test(fc(e)));
const SOUPS    = ctx.PAIRING_MAP.filter(e => /SOUP/.test(fc(e)));
const SALADS   = ctx.PAIRING_MAP.filter(e => fc(e) === 'SALAD');
const SIDES    = ctx.PAIRING_MAP.filter(e => /SIDE/.test(fc(e)));
const DESSERTS = ctx.PAIRING_MAP.filter(e => /DESSERT/.test(fc(e)));

const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

// Targeted STRONG upgrades — kitchen knowledge
const OVERRIDES = {
  // Starter × Salad: clean salads opening into starters
  'Burrata|House Wedge': 'works',           // cheese × cheese duplication
  'Burrata|Grilled Caesar': 'works',        // cheese × cheese
  'Brussels and Belly|House Wedge': 'works', // bacon × bacon-and-bleu
  // Starter × Side
  'Bone Marrow|Truffle Fries': 'strong',    // rich × rich classic
  'Bone Marrow|Au Gratin Potatoes': 'strong', // marrow + cheese-and-cream
  // Soup × Side: avoid ingredient doubling
  'Mushroom Bisque|Mushrooms': 'works',     // duplication
  'Shrimp Bisque|Lobster Mac': 'works',     // shellfish duplication
  'Clam Chowder|Lobster Mac': 'works',      // shellfish duplication
  'Loaded Potato|Au Gratin Potatoes': 'works', // potato duplication
  'Loaded Potato|Truffle Fries': 'works',   // potato duplication
  'Creamy Potato|Au Gratin Potatoes': 'works',
  'Creamy Potato|Truffle Fries': 'works',
  // Salad × Side: classic comfort sides with crisp salads
  'House Wedge|Truffle Fries': 'strong',
  'Grilled Caesar|Truffle Fries': 'strong',
};

function defaultTier(lhs, rhs) {
  const lc = fc(lhs), rc = fc(rhs);
  // STARTER × SOUP, STARTER × SALAD, STARTER × SIDE
  if (/STARTER/.test(lc) && (/SOUP/.test(rc) || rc === 'SALAD' || /SIDE/.test(rc))) return 'works';
  if (/SOUP/.test(lc) && /STARTER/.test(rc)) return 'works';
  // SOUP × SALAD, SOUP × SIDE
  if (/SOUP/.test(lc) && (rc === 'SALAD' || /SIDE/.test(rc))) return 'works';
  if (rc.match(/SOUP/) && /STARTER|SALAD|SIDE/.test(lc)) return 'works';
  // SALAD × SIDE
  if ((lc === 'SALAD' && /SIDE/.test(rc)) || (/SIDE/.test(lc) && rc === 'SALAD')) return 'works';
  // SIDE × DESSERT
  if ((/SIDE/.test(lc) && /DESSERT/.test(rc)) || (/DESSERT/.test(lc) && /SIDE/.test(rc))) return 'works';
  return null;
}

const adds = { excellent: [], strong: [], works: [], avoid: [] };

function consider(lhsBucket, rhsBucket) {
  for (const a of lhsBucket) {
    for (const b of rhsBucket) {
      if (a.name === b.name) continue;
      const fwd = a.name + '|' + b.name;
      const rev = b.name + '|' + a.name;
      if (tierByKey.get(fwd) || tierByKey.get(rev)) continue;
      let tier = OVERRIDES[fwd] || OVERRIDES[rev] || defaultTier(a, b);
      if (!tier) continue;
      adds[tier].push([a.name, b.name]);
    }
  }
}

consider(STARTERS, SOUPS);
consider(STARTERS, SALADS);
consider(STARTERS, SIDES);
consider(SOUPS, SALADS);
consider(SOUPS, SIDES);
consider(SALADS, SIDES);
consider(SIDES, DESSERTS);

let total = 0;
for (const t of Object.keys(adds)) total += adds[t].length;
console.log('Pairs to add: ' + total);
for (const t of ['excellent','strong','works','avoid']) {
  console.log('  ' + t + ': ' + adds[t].length);
}
console.log('');

let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-remaining-food-backfill.bak';
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

for (const tier of ['excellent','strong','works','avoid']) {
  for (const [a, b] of adds[tier]) {
    addToTier(a, b, tier);
    addToTier(b, a, tier);
  }
}

if (totalChanges === 0) { console.log('[NOOP]'); process.exit(0); }
fs.writeFileSync(file, src);
console.log('=== ' + totalChanges + ' tier-list entries added ===');
console.log('Next: run engine/backfill_remaining_food_notes.js');
