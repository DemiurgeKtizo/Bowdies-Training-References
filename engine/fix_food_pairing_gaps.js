// Adds 510 missing food×food pair-classifications across six relationship
// types, using class-based smart defaults plus targeted overrides.
//
// Default rules:
//   STARTER → ENTREE  : STRONG (sequential, leads cleanly)
//                       except HEARTY_STARTER → STEAK_BOLD = WORKS (rich-on-rich)
//   SOUP    → ENTREE  : WORKS  (preamble, neutral)
//                       except LIGHT_SOUP → FISH/CHICKEN = STRONG
//                       except HEARTY_SOUP → STEAK_BOLD = WORKS (rich-on-rich)
//   SALAD   → ENTREE  : STRONG (palate cleanser, leads to anything)
//   STARTER → DESSERT : WORKS  (course-jumping, neutral)
//   SOUP    → DESSERT : WORKS
//   SALAD   → DESSERT : WORKS
//
// Targeted overrides (kitchen knowledge):
//   Shrimp Bisque × Seared Scallops    : WORKS (shrimp + scallop is okay but doesn't elevate)
//   Mushroom Bisque × Filet Mignon     : EXCELLENT (umami × buttery beef classic)
//   Mushroom Bisque × Bone-In Filet    : EXCELLENT
//   French Onion × Tomahawk/Cowboy/KC  : STRONG (richness sequence works)
//   Bone Marrow × Filet/Bone-In/KC     : STRONG (beef-on-beef chemistry)
//   House Wedge × steaks               : STRONG (classic)
//   Grilled Caesar × steaks            : STRONG (classic)
//   Crab Cake × salmon/tuna/halibut    : WORKS (sea-on-sea)
//   Seafood Tower × delicate fish      : WORKS (sea-on-sea overload)
//   Burrata × big steaks               : WORKS (cheese before bold beef)
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
const ENTREES  = ctx.PAIRING_MAP.filter(e => /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(fc(e)));
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

// Targeted overrides
const OVERRIDES = {
  'Mushroom Bisque|Filet Mignon': 'excellent',
  'Mushroom Bisque|Bone-In Filet': 'excellent',
  'Bone Marrow|Filet Mignon': 'strong',
  'Bone Marrow|Bone-In Filet': 'strong',
  'Bone Marrow|Kansas City': 'strong',
  'Bone Marrow|Cowboy Ribeye': 'strong',
  'French Onion|The Tomahawk': 'strong',
  'French Onion|Cowboy Ribeye': 'strong',
  'French Onion|Kansas City': 'strong',
  'French Onion|Porterhouse': 'strong',
  'Shrimp Bisque|Seared Scallops': 'works',
  'Crab Cake|Faroe Island Salmon': 'works',
  'Crab Cake|Tuxedo-Crusted Yellowfin Tuna': 'works',
  'Crab Cake|Salt-Cured Halibut': 'works',
  'Seafood Tower|Rainbow Trout': 'works',
  'Seafood Tower|Salt-Cured Halibut': 'works',
  'Seafood Tower|Tuxedo-Crusted Yellowfin Tuna': 'works',
  'Seafood Tower|Market Fish': 'works',
  'Burrata|The Tomahawk': 'works',
  'Burrata|Cowboy Ribeye': 'works',
  'Burrata|Porterhouse': 'works',
};

function defaultTier(lhs, rhs) {
  const lc = fc(lhs), rc = fc(rhs);
  // Starter → Entree
  if (/STARTER/.test(lc) && /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(rc)) {
    if (lc === 'HEARTY_STARTER' && rc === 'STEAK_BOLD') return 'works';
    return 'strong';
  }
  // Soup → Entree
  if (/SOUP/.test(lc) && /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(rc)) {
    if (lc === 'LIGHT_SOUP' && /^(FISH_MAIN|CHICKEN)/.test(rc)) return 'strong';
    if (lc === 'HEARTY_SOUP' && rc === 'STEAK_BOLD') return 'works';
    return 'works';
  }
  // Salad → Entree
  if (lc === 'SALAD' && /^(STEAK|FISH_MAIN|CHICKEN|VEG_MAIN)/.test(rc)) {
    return 'strong';
  }
  // Starter/Soup/Salad → Dessert
  if (/(STARTER|SOUP|SALAD)/.test(lc) && /DESSERT/.test(rc)) {
    return 'works';
  }
  return null;
}

// Build add-list
const adds = { excellent: [], strong: [], works: [], avoid: [] };

function consider(lhsBucket, rhsBucket) {
  for (const a of lhsBucket) {
    for (const b of rhsBucket) {
      const fwd = a.name + '|' + b.name;
      const rev = b.name + '|' + a.name;
      if (tierByKey.get(fwd) || tierByKey.get(rev)) continue;
      let tier = OVERRIDES[fwd] || OVERRIDES[rev] || defaultTier(a, b);
      if (!tier) continue;
      adds[tier].push([a.name, b.name]);
    }
  }
}

consider(STARTERS, ENTREES);
consider(SOUPS, ENTREES);
consider(SALADS, ENTREES);
consider(STARTERS, DESSERTS);
consider(SOUPS, DESSERTS);
consider(SALADS, DESSERTS);

let total = 0;
for (const t of Object.keys(adds)) total += adds[t].length;
console.log('Pairs to add: ' + total);
for (const t of ['excellent','strong','works','avoid']) {
  console.log('  ' + t + ': ' + adds[t].length);
}
console.log('');

// Write to pairing-map-v2.js
let src = fs.readFileSync(file, 'utf8');
const backup = file + '.pre-food-pairing-backfill.bak';
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
console.log('Next: run engine/backfill_food_pairing_notes.js');
