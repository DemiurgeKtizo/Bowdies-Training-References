// engine/mine_tier_corrections_and_competitors.js
//
// Mines two things from the existing v9 pair-notes corpus:
//
// 1. TIER_CORRECTIONS — pairs where the actual v9 verdict word (Works/Strong/
//    Excellent) disagrees with the tier-list location in pairing-map-v2.js.
//    Format: "DrinkName|FoodName" -> "works" | "strong" | "excellent"
//
// 2. COMPETITOR_REFS — phrases like "Fernet Branca still cuts it harder" or
//    "Oban 14 still leads the Highland-marrow pairings". Indexed by
//    foodClass × drinkClass. Used to append a competitor reference to
//    verdicts when the bottle is in a "but doesn't lead" position.
//
// Output: writes engine/tier_corrections.js and engine/competitor_refs.js

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const REPO_ROOT = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');

function loadData() {
  const ctx = {};
  vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(REPO_ROOT, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js',     'PAIRING_MAP');
  load('enriched-profiles.js',  'ENRICHED_PROFILES');
  load('pairing-notes.js',      'PAIRING_NOTES');
  return ctx;
}

const TEMPLATED_SIGS = [
  /caramel-spice character/, /finds neutral with/, /meets at register with/,
  /character holds with/, /sits alongside/, /leans against/, /stays alongside/,
  /reads alongside/, /character drowns out/, /bulldozes/, /character overpowers/,
  /Avoid; Reach for/, /Save the .* for the steak/, /runs straight into/,
];
function isTemplatedDxF(note) { return TEMPLATED_SIGS.some(rx => rx.test(note)); }

// Find tier from pair-map (mirror-aware)
function tierFromMap(drink, food) {
  for (const t of ['gold', 'excellent', 'strong', 'works', 'avoid']) {
    if (Array.isArray(drink[t]) && drink[t].includes(food.name)) return t;
  }
  for (const t of ['gold', 'excellent', 'strong', 'works', 'avoid']) {
    if (Array.isArray(food[t]) && food[t].includes(drink.name)) return t;
  }
  return null;
}

// Extract verdict word from note text
function tierFromVerdict(note) {
  const m = note.match(/\b(Excellent|Strong|Works|Avoid|Gold standard|Peak)\b/);
  if (!m) return null;
  const w = m[1].toLowerCase();
  if (w === 'gold standard' || w === 'peak') return 'gold';
  return w;
}

// ── COMPETITOR REF EXTRACTION ───────────────────────────────────────────────
// Patterns:
//   "{Bottle} still cuts it harder"
//   "{Bottle}'s ... still leads ..."
//   "reach for {Bottle}"
//   "save ... for ... reach for {Bottle}"

const COMP_PATTERNS = [
  /\b([A-Z][\w'\.\-]+(?:\s+[A-Z\d][\w'\.\-]*){0,4})\s+still\s+(cuts it harder|leads)/g,
  /\breach for\s+([A-Z][\w'\.\-]+(?:\s+[A-Z\d][\w'\.\-]*){0,4})\s+if/gi,
];

function main() {
  const data = loadData();
  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  const tierCorrections = {};
  let totalTemplated = 0;
  let mismatches = 0;
  const mismatchByPattern = {};

  const competitorRefs = {};   // foodClass||drinkClass -> { bottle: count }

  for (const [key, note] of Object.entries(data.PAIRING_NOTES)) {
    if (!isTemplatedDxF(note)) continue;
    totalTemplated++;
    const [a, b] = key.split('|');
    const eA = byName[a], eB = byName[b];
    if (!eA || !eB) continue;
    let drink, food;
    if (taxonomy.FOOD_CATS.has(eA.category) && !taxonomy.FOOD_CATS.has(eB.category)) { drink = eB; food = eA; }
    else if (!taxonomy.FOOD_CATS.has(eA.category) && taxonomy.FOOD_CATS.has(eB.category)) { drink = eA; food = eB; }
    else continue;

    const enrich = (e) => data.ENRICHED_PROFILES[e.name] ? Object.assign({}, e, { axes: data.ENRICHED_PROFILES[e.name].axes }) : e;
    const dc = taxonomy.drinkClassFor(enrich(drink));
    const fc = taxonomy.foodClassFor(enrich(food));

    // 1. Tier correction
    const mapTier = tierFromMap(drink, food);
    const verdictTier = tierFromVerdict(note);
    if (mapTier && verdictTier && mapTier !== verdictTier) {
      // Only record corrections where verdict tier is LOWER than map tier
      // (the most surprising case — gold pair-map listed but v9 wrote Works)
      const rank = { gold: 0, excellent: 1, strong: 2, works: 3, avoid: 4 };
      if (rank[verdictTier] > rank[mapTier]) {
        tierCorrections[drink.name + '|' + food.name] = verdictTier;
        mismatches++;
        const k = mapTier + '->' + verdictTier;
        mismatchByPattern[k] = (mismatchByPattern[k] || 0) + 1;
      }
    }

    // 2. Competitor refs
    for (const pat of COMP_PATTERNS) {
      pat.lastIndex = 0;
      let m;
      while ((m = pat.exec(note)) !== null) {
        const candidate = m[1].trim();
        // Must match a known bottle in pair-map
        if (!byName[candidate]) continue;
        if (!fc || !dc) continue;
        const k = fc + '||' + dc;
        if (!competitorRefs[k]) competitorRefs[k] = {};
        competitorRefs[k][candidate] = (competitorRefs[k][candidate] || 0) + 1;
      }
    }
  }

  console.log('=== mining tier corrections + competitor refs ===');
  console.log('templated v9 notes scanned: ' + totalTemplated);
  console.log('tier corrections found:     ' + mismatches);
  console.log('  by pattern: ' + JSON.stringify(mismatchByPattern));
  console.log('');

  // Dedupe competitor refs: pick the top bottle per (foodClass, drinkClass)
  const compTop = {};
  for (const [k, bottles] of Object.entries(competitorRefs)) {
    const sorted = Object.entries(bottles).sort((a, b) => b[1] - a[1]);
    const [fc, dc] = k.split('||');
    if (!compTop[fc]) compTop[fc] = {};
    compTop[fc][dc] = { bottle: sorted[0][0], count: sorted[0][1] };
  }
  let compCount = 0;
  for (const fc of Object.keys(compTop)) compCount += Object.keys(compTop[fc]).length;
  console.log('competitor refs found: ' + compCount + ' (foodClass x drinkClass cells)');

  // Write tier_corrections.js
  const tcLines = [];
  tcLines.push('// AUTO-GENERATED by engine/mine_tier_corrections_and_competitors.js');
  tcLines.push('// TIER_CORRECTIONS: pairs where v9 verdict tier differs from pair-map tier.');
  tcLines.push('// Format: "{Drink}|{Food}" -> tier (v9 actual)');
  tcLines.push('const TIER_CORRECTIONS = {');
  for (const k of Object.keys(tierCorrections).sort()) {
    tcLines.push('  ' + JSON.stringify(k) + ': ' + JSON.stringify(tierCorrections[k]) + ',');
  }
  tcLines.push('};');
  tcLines.push('module.exports = { TIER_CORRECTIONS };');
  fs.writeFileSync(path.join(__dirname, 'tier_corrections.js'), tcLines.join('\n') + '\n');
  console.log('[OK] wrote engine/tier_corrections.js (' + Object.keys(tierCorrections).length + ' entries)');

  // Write competitor_refs.js
  const crLines = [];
  crLines.push('// AUTO-GENERATED by engine/mine_tier_corrections_and_competitors.js');
  crLines.push('// COMPETITOR_REFS: per (foodClass, drinkClass) the bottle that v9 says');
  crLines.push('// "still cuts it harder" or "still leads". Used in verdict generation.');
  crLines.push('const COMPETITOR_REFS = {');
  for (const fc of Object.keys(compTop).sort()) {
    crLines.push('  ' + JSON.stringify(fc) + ': {');
    for (const dc of Object.keys(compTop[fc]).sort()) {
      const v = compTop[fc][dc];
      crLines.push('    ' + JSON.stringify(dc) + ': { bottle: ' + JSON.stringify(v.bottle) + ', count: ' + v.count + ' },');
    }
    crLines.push('  },');
  }
  crLines.push('};');
  crLines.push('module.exports = { COMPETITOR_REFS };');
  fs.writeFileSync(path.join(__dirname, 'competitor_refs.js'), crLines.join('\n') + '\n');
  console.log('[OK] wrote engine/competitor_refs.js (' + compCount + ' entries)');
}

main();
