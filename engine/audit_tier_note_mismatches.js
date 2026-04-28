// Audit COURSE_TO_DESSERT pairs for tier-note mismatches.
// For each FxF course-to-dessert pair: parse the tier verdict from the note
// text ("Gold standard;", "Excellent;", "Strong;", "Works;", "Avoid;") and
// compare to the tier the pairing-map-v2.js assigns. Flag mismatches.

'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');
const fxfGen = require('./pairing_engine_generator');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

const FOOD_CATS = taxonomy.FOOD_CATS;
const allFoods = ctx.PAIRING_MAP.filter(e => FOOD_CATS.has(e.category));
const foodByName = {};
for (const f of allFoods) foodByName[f.name] = f;

// Build tier lookup. Priority: gold first (highest), so when a pair appears
// in both gold AND excellent (gold ⊂ excellent convention), the gold tier wins.
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold', 'excellent', 'strong', 'works', 'avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) {
      const k = e.name + '|' + t;
      if (!tierByKey.has(k)) tierByKey.set(k, tier);  // first-found (gold) wins
    }
  }
}

// Parse the tier label from a note text
function parseNoteTier(note) {
  if (!note) return null;
  if (/Gold standard;/.test(note)) return 'gold';
  if (/^\* /.test(note)) return 'gold';                  // * prefix is a gold marker
  if (/\bExcellent;/.test(note)) return 'excellent';
  if (/\bStrong;/.test(note)) return 'strong';
  if (/\bWorks;/.test(note)) return 'works';
  if (/\bAvoid;/.test(note)) return 'avoid';
  return null;
}

const TIER_RANK = { gold: 0, excellent: 1, strong: 2, works: 3, avoid: 4 };

const results = {
  total: 0,
  matching: 0,
  mismatches: [],
  steakDessert: [],
  mainDessert: [],
};

for (const a of allFoods) {
  for (const b of allFoods) {
    if (a.name === b.name) continue;
    const arch = fxfGen.archetypeFor(a, b);
    // Audit ALL FxF archetypes
    const fwd = a.name + '|' + b.name;
    const note = ctx.PAIRING_NOTES[fwd];
    if (!note) continue;
    const mapTier = tierByKey.get(fwd) || tierByKey.get(b.name + '|' + a.name);
    const noteTier = parseNoteTier(note);
    results.total++;
    if (mapTier === noteTier) {
      results.matching++;
    } else {
      const m = {
        pair: fwd,
        category: a.category + '/' + b.category,
        mapTier,
        noteTier,
        snippet: note.slice(0, 120),
      };
      results.mismatches.push(m);
      if (a.category === 'steak' || b.category === 'steak') results.steakDessert.push(m);
      if (a.category === 'main' || b.category === 'main') results.mainDessert.push(m);
    }
  }
}

console.log('=== COURSE_TO_DESSERT tier-note mismatch audit ===');
console.log('');
console.log('Total pairs:        ' + results.total);
console.log('Matching:           ' + results.matching);
console.log('Mismatches:         ' + results.mismatches.length);
console.log('  steak × dessert:  ' + results.steakDessert.length);
console.log('  main × dessert:   ' + results.mainDessert.length);

// Direction of mismatch (note higher than map, or lower)
const noteHigher = results.mismatches.filter(m => TIER_RANK[m.noteTier] < TIER_RANK[m.mapTier]);
const noteLower  = results.mismatches.filter(m => TIER_RANK[m.noteTier] > TIER_RANK[m.mapTier]);
console.log('');
console.log('Direction breakdown:');
console.log('  Note tier HIGHER than map tier (note says strong, map says works): ' + noteHigher.length);
console.log('  Note tier LOWER than map tier:                                      ' + noteLower.length);

console.log('');
console.log('=== Note tier higher than map (most common case) ===');
const seenPairs = new Set();
for (const m of noteHigher) {
  const sortedKey = m.pair.split('|').sort().join('::');
  if (seenPairs.has(sortedKey)) continue;
  seenPairs.add(sortedKey);
  console.log('  [map=' + m.mapTier + ' -> note=' + m.noteTier + '] ' + m.pair);
}

if (noteLower.length > 0) {
  console.log('');
  console.log('=== Note tier lower than map (rarer) ===');
  const seenLower = new Set();
  for (const m of noteLower) {
    const sortedKey = m.pair.split('|').sort().join('::');
    if (seenLower.has(sortedKey)) continue;
    seenLower.add(sortedKey);
    console.log('  [map=' + m.mapTier + ' -> note=' + m.noteTier + '] ' + m.pair);
  }
}