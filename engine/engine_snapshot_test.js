// engine/engine_snapshot_test.js
//
// Locks 81 anchor pairs by hashing their note text. Run as:
//
//   node engine/engine_snapshot_test.js          # verify (fails on drift)
//   node engine/engine_snapshot_test.js --update # rewrite the snapshot
//   node engine/engine_snapshot_test.js --show   # print anchor list + hashes
//
// CLAUDE.md says verify 81 anchor pairs unchanged before/after a regen pass.
// This test selects anchors deterministically across drink/food classes and
// tiers so coverage is balanced -- if any anchor's note text changes between
// runs, the test fails and you have to either explain the change (and re-run
// with --update) or fix the regression.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const crypto = require('crypto');

const taxonomy = require('./pairing_engine_taxonomy');

const SNAPSHOT_FILE = path.join(__dirname, '.snapshot.json');
const ANCHOR_TARGET = 81;
const PER_DRINK_CLASS_CAP = 6;
const PER_FOOD_CLASS_CAP = 8;

// ── DATA LOADER ───────────────────────────────────────────────────────────

function loadData(repoRoot) {
  const ctx = {};
  vm.createContext(ctx);
  const load = (file, name) => {
    const src = fs.readFileSync(path.join(repoRoot, file), 'utf8');
    vm.runInContext(src + '\nthis.' + name + ' = ' + name + ';', ctx);
  };
  load('pairing-map-v2.js',    'PAIRING_MAP');
  load('enriched-profiles.js', 'ENRICHED_PROFILES');
  load('pairing-notes.js',     'PAIRING_NOTES');
  return ctx;
}

// ── ANCHOR SELECTION ──────────────────────────────────────────────────────

function selectAnchors(data) {
  const enrich = (e) =>
    data.ENRICHED_PROFILES[e.name]
      ? Object.assign({}, e, { axes: data.ENRICHED_PROFILES[e.name].axes })
      : e;

  const byName = {};
  for (const e of data.PAIRING_MAP) byName[e.name] = e;

  const foods = data.PAIRING_MAP.filter(e => taxonomy.FOOD_CATS.has(e.category));
  const drinkClassCounts = {};
  const foodClassCounts = {};
  const anchors = [];
  const seenPairs = new Set();
  const TIERS = ['gold', 'excellent', 'strong', 'works', 'avoid'];

  for (const food of foods) {
    if (anchors.length >= ANCHOR_TARGET) break;
    const fc = taxonomy.foodClassFor(enrich(food));
    if (!fc) continue;
    if ((foodClassCounts[fc] || 0) >= PER_FOOD_CLASS_CAP) continue;

    for (const tier of TIERS) {
      if (anchors.length >= ANCHOR_TARGET) break;
      if ((foodClassCounts[fc] || 0) >= PER_FOOD_CLASS_CAP) break;
      const list = food[tier];
      if (!Array.isArray(list)) continue;

      for (const targetName of list) {
        const target = byName[targetName];
        if (!target) continue;
        const dc = taxonomy.drinkClassFor(enrich(target));
        if (!dc) continue;
        if ((drinkClassCounts[dc] || 0) >= PER_DRINK_CLASS_CAP) continue;

        const pairSig = [food.name, targetName].sort().join('|');
        if (seenPairs.has(pairSig)) continue;

        const fwdKey = food.name + '|' + targetName;
        const revKey = targetName + '|' + food.name;
        const note = data.PAIRING_NOTES[fwdKey] || data.PAIRING_NOTES[revKey];
        if (!note) continue;

        seenPairs.add(pairSig);
        anchors.push({
          food: food.name,
          drink: targetName,
          foodClass: fc,
          drinkClass: dc,
          tier: tier,
          key: fwdKey,
          hash: hashNote(note),
        });
        drinkClassCounts[dc] = (drinkClassCounts[dc] || 0) + 1;
        foodClassCounts[fc] = (foodClassCounts[fc] || 0) + 1;
        break;
      }
    }
  }

  return { anchors: anchors, drinkClassCounts: drinkClassCounts, foodClassCounts: foodClassCounts };
}

function hashNote(text) {
  const normalized = text.replace(/\s+/g, ' ').trim();
  return crypto.createHash('sha256').update(normalized).digest('hex').slice(0, 16);
}

// ── COMMANDS ──────────────────────────────────────────────────────────────

function cmdShow(repoRoot) {
  const data = loadData(repoRoot);
  const result = selectAnchors(data);
  console.log('Selected ' + result.anchors.length + ' anchor pairs.');
  console.log('');
  console.log('Drink-class distribution:');
  for (const k of Object.keys(result.drinkClassCounts).sort((a, b) => result.drinkClassCounts[b] - result.drinkClassCounts[a])) {
    console.log('  ' + k.padEnd(20) + ' ' + result.drinkClassCounts[k]);
  }
  console.log('');
  console.log('Food-class distribution:');
  for (const k of Object.keys(result.foodClassCounts).sort((a, b) => result.foodClassCounts[b] - result.foodClassCounts[a])) {
    console.log('  ' + k.padEnd(22) + ' ' + result.foodClassCounts[k]);
  }
  console.log('');
  console.log('Anchors:');
  for (const a of result.anchors) {
    console.log('  [' + a.tier.padEnd(9) + '] ' + a.food.padEnd(30) + ' x ' + a.drink.padEnd(35) + '  ' + a.hash + '  (' + a.foodClass + '/' + a.drinkClass + ')');
  }
}

function cmdUpdate(repoRoot) {
  const data = loadData(repoRoot);
  const result = selectAnchors(data);
  const snapshot = {
    generatedAt: new Date().toISOString(),
    anchorCount: result.anchors.length,
    anchors: result.anchors.map(a => ({
      food: a.food,
      drink: a.drink,
      tier: a.tier,
      foodClass: a.foodClass,
      drinkClass: a.drinkClass,
      hash: a.hash,
    })),
  };
  fs.writeFileSync(SNAPSHOT_FILE, JSON.stringify(snapshot, null, 2));
  console.log('Wrote ' + result.anchors.length + ' anchors to ' + path.relative(repoRoot, SNAPSHOT_FILE));
}

function cmdVerify(repoRoot) {
  if (!fs.existsSync(SNAPSHOT_FILE)) {
    console.error('No snapshot file at ' + SNAPSHOT_FILE + '.');
    console.error('Run with --update to create the baseline.');
    process.exit(2);
  }
  const stored = JSON.parse(fs.readFileSync(SNAPSHOT_FILE, 'utf8'));
  const data = loadData(repoRoot);

  const drift = [];
  const missing = [];
  const same = [];
  for (const a of stored.anchors) {
    const fwdKey = a.food + '|' + a.drink;
    const revKey = a.drink + '|' + a.food;
    const note = data.PAIRING_NOTES[fwdKey] || data.PAIRING_NOTES[revKey];
    if (!note) { missing.push(a); continue; }
    const currentHash = hashNote(note);
    if (currentHash !== a.hash) drift.push(Object.assign({}, a, { currentHash: currentHash }));
    else same.push(a);
  }

  console.log('=== ENGINE SNAPSHOT TEST ===');
  console.log('');
  console.log('baseline anchors: ' + stored.anchorCount + '  (generated ' + stored.generatedAt + ')');
  console.log('unchanged: ' + same.length);
  console.log('drifted:   ' + drift.length);
  console.log('missing:   ' + missing.length);

  if (drift.length) {
    console.log('');
    console.log('Drifted anchors:');
    for (const d of drift) {
      console.log('  [' + d.tier.padEnd(9) + '] ' + d.food + ' x ' + d.drink);
      console.log('     was   ' + d.hash + '  (' + d.foodClass + '/' + d.drinkClass + ')');
      console.log('     now   ' + d.currentHash);
      const note = data.PAIRING_NOTES[d.food + '|' + d.drink] || data.PAIRING_NOTES[d.drink + '|' + d.food];
      console.log('     text  ' + note.slice(0, 100) + (note.length > 100 ? '...' : ''));
    }
  }
  if (missing.length) {
    console.log('');
    console.log('Missing anchors (note no longer exists):');
    for (const m of missing) {
      console.log('  [' + m.tier.padEnd(9) + '] ' + m.food + ' x ' + m.drink);
    }
  }

  const ok = drift.length === 0 && missing.length === 0;
  console.log('');
  console.log(ok ? '[OK] Snapshot clean.' : '[FAIL] Snapshot drift detected -- run with --update to accept, or fix the regression.');
  process.exit(ok ? 0 : 1);
}

// ── CLI ────────────────────────────────────────────────────────────────────

if (require.main === module) {
  const repoRoot = path.resolve(__dirname, '..');
  const args = process.argv.slice(2);
  if (args.indexOf('--update') !== -1) cmdUpdate(repoRoot);
  else if (args.indexOf('--show') !== -1) cmdShow(repoRoot);
  else cmdVerify(repoRoot);
}

module.exports = { selectAnchors: selectAnchors, hashNote: hashNote, loadData: loadData };
