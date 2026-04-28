// engine/audit_fxf_coverage.js
//
// FxF coverage audit. Reports per-archetype coverage stats: total pairs,
// templated/editorial split, average note length, top recycled phrases.
// Use this to identify under-covered or low-quality FxF category combos for
// targeted backfill scripts.
//
// Usage: node engine/audit_fxf_coverage.js [--archetype STEAK_SIDE]

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
const foodNames = new Set(allFoods.map(f => f.name));
const foodByName = {};
for (const f of allFoods) foodByName[f.name] = f;

const TEMPLATED_SIGS = [
  /the call holds at neutral register/,
  /the side carries cleanly with the cut/,
  /reliable side-on-steak match/,
  /the side that completes the steak plate/,
  /headline side pairing for/,
  /reliable opener for the steak course/,
  /reliable opener for the cut/,
  /classic steak-house transition into/,
  /reliable steak-house finish/,
  /a measured close to the meal/,
  /the close holds, neither soars nor fights/,
  /the dessert closes the meal without crowding/,
  /the side gives way to the dessert/,
  /the table doubles up on/,
  /both bring \w+ as the headline/,
  /share \w+ as the primary character/,
  /the meal goes redundant/,
  /the meal doubles down without contrast/,
  /the side sits without pulling focus/,
  /safe opener, the meal builds without crowding/,
  /reliable headline side for/,
  /soup-or-salad frames the steak course cleanly/,
  /the dessert split holds at neutral register/,
  /sequence them or share/,
  /no flavor conflict/,
];

function isTemplated(note) {
  if (!note) return false;
  return TEMPLATED_SIGS.some(re => re.test(note));
}

const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) tierByKey.set(e.name + '|' + t, tier);
  }
}

const args = process.argv.slice(2);
const archetypeFilter = args.indexOf('--archetype') !== -1
  ? args[args.indexOf('--archetype') + 1]
  : null;

const seen = new Set();
const buckets = {}; // archetype -> { total, templated, editorial, lengths, samples }

for (const a of allFoods) {
  for (const b of allFoods) {
    if (a.name === b.name) continue;
    const pairKey = [a.name, b.name].sort().join('::');
    if (seen.has(pairKey)) continue;
    seen.add(pairKey);

    const arch = fxfGen.archetypeFor(a, b);
    if (archetypeFilter && arch !== archetypeFilter) continue;

    const fwd = a.name + '|' + b.name;
    const note = ctx.PAIRING_NOTES[fwd];
    if (!note) continue;
    const tier = tierByKey.get(fwd) || tierByKey.get(b.name + '|' + a.name);
    if (!tier) continue;

    if (!buckets[arch]) buckets[arch] = {
      total: 0, templated: 0, editorial: 0, lengths: [], byTier: {},
      samples: { templated: [], editorial: [] },
    };
    const bk = buckets[arch];
    bk.total++;
    bk.byTier[tier] = (bk.byTier[tier] || 0) + 1;
    const wc = note.split(/\s+/).length;
    bk.lengths.push(wc);
    if (isTemplated(note)) {
      bk.templated++;
      if (bk.samples.templated.length < 2) bk.samples.templated.push({ key: fwd, note, tier, wc });
    } else {
      bk.editorial++;
      if (bk.samples.editorial.length < 2) bk.samples.editorial.push({ key: fwd, note, tier, wc });
    }
  }
}

const avg = arr => arr.length ? (arr.reduce((s, n) => s + n, 0) / arr.length).toFixed(1) : 'n/a';

console.log('=== FxF COVERAGE AUDIT ===');
console.log('');
console.log('Archetype'.padEnd(26) + 'Total  Tmpl  Edit  Avg-len  Tier breakdown');
const sortedKeys = Object.keys(buckets).sort();
for (const k of sortedKeys) {
  const bk = buckets[k];
  const tierStr = Object.entries(bk.byTier).map(([t, n]) => t + ':' + n).join(' ');
  console.log(k.padEnd(26) + String(bk.total).padStart(5) + '  ' + String(bk.templated).padStart(4) + '  ' + String(bk.editorial).padStart(4) + '  ' + avg(bk.lengths).padStart(7) + '  ' + tierStr);
}

console.log('');
console.log('=== UNDER-COVERED ARCHETYPES (templated > editorial, suggesting stale generic notes) ===');
for (const k of sortedKeys) {
  const bk = buckets[k];
  if (bk.templated > bk.editorial && bk.total >= 10) {
    console.log('  ' + k + ': ' + bk.templated + ' templated of ' + bk.total + ' (' + Math.round(100 * bk.templated / bk.total) + '% templated)');
  }
}

if (archetypeFilter) {
  console.log('');
  console.log('=== SAMPLES (' + archetypeFilter + ') ===');
  const bk = buckets[archetypeFilter];
  if (bk) {
    console.log('--- TEMPLATED ---');
    for (const s of bk.samples.templated) {
      console.log('[' + s.tier + ', ' + s.wc + 'w] ' + s.key);
      console.log('  ' + s.note);
    }
    console.log('--- EDITORIAL ---');
    for (const s of bk.samples.editorial) {
      console.log('[' + s.tier + ', ' + s.wc + 'w] ' + s.key);
      console.log('  ' + s.note);
    }
  }
}
