// engine/compare_dxf_v2_vs_v9.js
//
// Sample drink x food pairs that already have a v9 templated note in
// pairing-notes.js. Run the new B2 v2 generator on the same (drink, food,
// tier) and print side-by-side. Lets us see where v2 still falls short of
// v9 quality so we can iterate on specific gaps.
//
// Usage:
//   node engine/compare_dxf_v2_vs_v9.js              # 30 stratified samples
//   node engine/compare_dxf_v2_vs_v9.js --n 50       # 50 samples
//   node engine/compare_dxf_v2_vs_v9.js --tier gold  # filter to one tier
//   node engine/compare_dxf_v2_vs_v9.js --class BIG_RED  # filter to one drink class
//   node engine/compare_dxf_v2_vs_v9.js --bottle "Caymus Cabernet Sauvignon"  # filter to one bottle

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy = require('./pairing_engine_taxonomy');
const dxf      = require('./drink_x_food_generator');

const REPO_ROOT = path.resolve(__dirname, '..');

function loadData() {
  const ctx = {};
  vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(REPO_ROOT, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js',     'PAIRING_MAP');
  load('enriched-profiles.js',  'ENRICHED_PROFILES');
  load('chemistry-claims.js',   'CHEMISTRY_CLAIMS');
  load('editorial-snippets.js', 'EDITORIAL_SNIPPETS');
  load('pairing-notes.js',      'PAIRING_NOTES');
  return ctx;
}

const TEMPLATED_SIGS = [
  /caramel-spice character/, /finds neutral with/, /meets at register with/,
  /character holds with/, /sits alongside/, /leans against/, /stays alongside/,
  /reads alongside/, /character drowns out/, /bulldozes/, /character overpowers/,
  /Avoid; Reach for/, /Save the .* for the steak/, /runs straight into/,
];
function isTemplatedDxF(note) {
  return TEMPLATED_SIGS.some(rx => rx.test(note));
}

function findTier(drink, food) {
  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  for (const t of tiers) {
    if (Array.isArray(drink[t]) && drink[t].includes(food.name)) return t;
  }
  for (const t of tiers) {
    if (Array.isArray(food[t]) && food[t].includes(drink.name)) return t;
  }
  return null;
}

function main() {
  const args = process.argv.slice(2);
  let n = 30;
  const nArg = args.indexOf('--n');
  if (nArg !== -1) n = parseInt(args[nArg + 1], 10) || 30;
  let tierFilter = null;
  const tArg = args.indexOf('--tier');
  if (tArg !== -1) tierFilter = args[tArg + 1];
  let classFilter = null;
  const cArg = args.indexOf('--class');
  if (cArg !== -1) classFilter = args[cArg + 1];
  let bottleFilter = null;
  const bArg = args.indexOf('--bottle');
  if (bArg !== -1) bottleFilter = args[bArg + 1];

  const data = loadData();
  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  // Collect drink x food templated pairs
  const seen = new Set();
  const candidates = [];
  for (const [key, note] of Object.entries(data.PAIRING_NOTES)) {
    if (seen.has(note)) continue;
    seen.add(note);
    if (!isTemplatedDxF(note)) continue;
    const [a, b] = key.split('|');
    const eA = byName[a], eB = byName[b];
    if (!eA || !eB) continue;
    let drink, food;
    if (taxonomy.FOOD_CATS.has(eA.category) && !taxonomy.FOOD_CATS.has(eB.category)) { drink = eB; food = eA; }
    else if (!taxonomy.FOOD_CATS.has(eA.category) && taxonomy.FOOD_CATS.has(eB.category)) { drink = eA; food = eB; }
    else continue;

    const tier = findTier(drink, food);
    if (!tier) continue;
    if (tierFilter && tier !== tierFilter) continue;

    const enrich = (e) => data.ENRICHED_PROFILES[e.name]
      ? Object.assign({}, e, { axes: data.ENRICHED_PROFILES[e.name].axes })
      : e;
    const dc = taxonomy.drinkClassFor(enrich(drink));
    if (classFilter && dc !== classFilter) continue;
    if (bottleFilter && drink.name !== bottleFilter) continue;

    candidates.push({ drink: drink, food: food, tier: tier, drinkClass: dc, v9Note: note });
  }
  console.log('candidates: ' + candidates.length);

  // Stratify by tier so the sample isn't all 'works'
  const byTier = {};
  for (const c of candidates) {
    byTier[c.tier] = byTier[c.tier] || [];
    byTier[c.tier].push(c);
  }
  // Deterministic sample: first N across tiers
  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  const perTier = Math.ceil(n / tiers.length);
  const sample = [];
  for (const t of tiers) {
    const pool = byTier[t] || [];
    // Sort deterministically by key so output is stable
    pool.sort((a, b) => (a.drink.name + a.food.name).localeCompare(b.drink.name + b.food.name));
    sample.push(...pool.slice(0, perTier));
  }
  const finalSample = sample.slice(0, n);
  console.log('sampling: ' + finalSample.length);
  console.log('');

  for (const s of finalSample) {
    let v2Note;
    try {
      v2Note = dxf.generate(s.drink, s.food, s.tier, data);
    } catch (e) {
      v2Note = '[GENERATION ERROR: ' + e.message + ']';
    }
    console.log('=== [' + s.tier.padEnd(9) + '] [' + (s.drinkClass || '???').padEnd(16) + '] ' + s.drink.name + ' x ' + s.food.name + ' ===');
    console.log('  V9: ' + s.v9Note);
    console.log('');
    console.log('  V2: ' + v2Note);
    console.log('');
  }
}

main();
