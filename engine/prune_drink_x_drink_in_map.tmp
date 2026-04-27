// engine/prune_drink_x_drink_in_map.js
//
// Walks pairing-map-v2.js and removes every drink-x-drink listing from drink
// entities' tier lists. Drink-x-food and food-x-drink listings are preserved.
// Food-on-food entries (sides, starters, desserts under steaks) are also
// preserved -- those are handled by the food-x-food templating in B2.
//
// Why: pairing-notes.js says "drink x food only. Same-kind pairs (drink x
// drink, food x food) removed: not in engine data model." But the tier lists
// in pairing-map-v2.js still contain ~1,732 drink-x-drink entries that can
// never be backed by an editorial note. The engine surfaces those
// recommendations (e.g., "Bowdie's Old Fashioned -> avoid: Caymus") with no
// note attached. Per design call (Option C), drink-x-drink entries are noise
// in a service context (guests pick one drink per course, not two competing
// ones), so we prune them. Food-x-food survives because course-level food
// pairings ('what side with this steak') are real service moments.
//
// Usage:
//   node engine/prune_drink_x_drink_in_map.js              # apply
//   node engine/prune_drink_x_drink_in_map.js --dry-run    # preview
//
// Pre-flight: writes pairing-map-v2.pre-prune.bak.js
// Post-flight: prints removal count, prompts to re-run health check.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy = require('./pairing_engine_taxonomy');

const REPO_ROOT = path.resolve(__dirname, '..');
const MAP_FILE = path.join(REPO_ROOT, 'pairing-map-v2.js');
const BACKUP_FILE = path.join(REPO_ROOT, 'pairing-map-v2.pre-prune.bak.js');

// ── DATA LOAD ──────────────────────────────────────────────────────────────

function loadMap(repoRoot) {
  const ctx = {};
  vm.createContext(ctx);
  const src = fs.readFileSync(path.join(repoRoot, 'pairing-map-v2.js'), 'utf8');
  vm.runInContext(src + '\nthis.PAIRING_MAP = PAIRING_MAP;', ctx);
  return ctx.PAIRING_MAP;
}

// ── PRUNE ──────────────────────────────────────────────────────────────────

function pruneDrinkDrink(pairingMap) {
  const isDrink = (name) => {
    const e = pairingMap.find(x => x.name === name);
    return e && !taxonomy.FOOD_CATS.has(e.category);
  };

  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  const removals = [];  // { entity, tier, removed[] }
  const newMap = [];

  for (const entity of pairingMap) {
    const isEntityDrink = !taxonomy.FOOD_CATS.has(entity.category);
    if (!isEntityDrink) {
      // Food entity — leave tier lists untouched
      newMap.push(entity);
      continue;
    }
    // Drink entity — remove drink names from each tier list
    const next = Object.assign({}, entity);
    for (const tier of tiers) {
      const list = entity[tier];
      if (!Array.isArray(list)) continue;
      const removed = [];
      const kept = [];
      for (const name of list) {
        if (isDrink(name)) removed.push(name);
        else kept.push(name);
      }
      if (removed.length) {
        removals.push({ entity: entity.name, tier: tier, removed: removed });
      }
      next[tier] = kept;
    }
    newMap.push(next);
  }

  return { newMap: newMap, removals: removals };
}

// ── SERIALIZER ─────────────────────────────────────────────────────────────
//
// Re-emits the PAIRING_MAP array in the existing file's style:
//
//   {
//     name: "X",
//     category: "Y",
//     profile: ["a","b","c"],
//     gold: [
//       "First",
//       "Second",
//     ],
//     excellent: [...],
//     strong: [],
//     works: [...],
//     avoid: [...],
//   },
//
// Strings escape backslash and double-quote. Empty arrays render as [].

function emitString(s) {
  return '"' + s.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"';
}

function emitInlineArray(arr) {
  return '[' + arr.map(emitString).join(',') + ']';
}

function emitMultilineArray(arr, indent) {
  if (arr.length === 0) return '[]';
  const ind = ' '.repeat(indent);
  const inner = arr.map(s => ind + '  ' + emitString(s) + ',').join('\n');
  return '[\n' + inner + '\n' + ind + ']';
}

function emitEntity(e) {
  const lines = [];
  lines.push('  {');
  lines.push('    name: ' + emitString(e.name) + ',');
  lines.push('    category: ' + emitString(e.category) + ',');
  if (Array.isArray(e.profile)) {
    lines.push('    profile: ' + emitInlineArray(e.profile) + ',');
  }
  for (const tier of ['gold', 'excellent', 'strong', 'works', 'avoid']) {
    if (e[tier] === undefined) continue;
    lines.push('    ' + tier + ': ' + emitMultilineArray(e[tier] || [], 4) + ',');
  }
  lines.push('  },');
  return lines.join('\n');
}

function emitMap(pairingMap) {
  return 'const PAIRING_MAP = [\n' +
    pairingMap.map(emitEntity).join('\n') +
    '\n];';
}

// ── FILE SURGERY ───────────────────────────────────────────────────────────
//
// Replace ONLY the `const PAIRING_MAP = [...];` block in the file. Preserve
// the leading comment block, CATEGORY_LABELS, and any trailing exports.

function rewriteFile(originalSrc, newMap) {
  const startMarker = 'const PAIRING_MAP = [';
  const startIdx = originalSrc.indexOf(startMarker);
  if (startIdx === -1) throw new Error('Could not locate "const PAIRING_MAP = [" in source.');

  // Find matching closing `];` by counting brackets from startIdx
  let depth = 0;
  let endIdx = -1;
  for (let i = startIdx + startMarker.length - 1; i < originalSrc.length; i++) {
    const c = originalSrc[i];
    if (c === '[') depth++;
    else if (c === ']') {
      depth--;
      if (depth === 0) {
        // Look for the next `;` after this `]`
        const semi = originalSrc.indexOf(';', i);
        if (semi === -1) throw new Error('Could not locate `];` after PAIRING_MAP.');
        endIdx = semi + 1;
        break;
      }
    }
  }
  if (endIdx === -1) throw new Error('Could not match closing `]` of PAIRING_MAP.');

  return originalSrc.slice(0, startIdx) + emitMap(newMap) + originalSrc.slice(endIdx);
}

// ── MAIN ───────────────────────────────────────────────────────────────────

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--dry-run') !== -1;

  const originalSrc = fs.readFileSync(MAP_FILE, 'utf8');
  const map = loadMap(REPO_ROOT);
  const result = pruneDrinkDrink(map);

  const totalRemoved = result.removals.reduce((s, r) => s + r.removed.length, 0);
  const entitiesAffected = new Set(result.removals.map(r => r.entity)).size;

  console.log('=== prune_drink_x_drink_in_map ===');
  console.log('');
  console.log('drink entities affected: ' + entitiesAffected);
  console.log('total drink-x-drink listings removed: ' + totalRemoved);
  console.log('');
  console.log('Sample removals (first 8 entities):');
  const seenEntities = new Set();
  for (const r of result.removals) {
    if (seenEntities.size >= 8) break;
    if (seenEntities.has(r.entity)) continue;
    seenEntities.add(r.entity);
    const allForEntity = result.removals.filter(x => x.entity === r.entity);
    const counts = allForEntity.map(x => x.tier + '=' + x.removed.length).join(', ');
    console.log('  ' + r.entity.padEnd(35) + '  ' + counts);
  }

  // Round-trip sanity: try to load the serialized version
  const newSrc = rewriteFile(originalSrc, result.newMap);
  const sanityCtx = {};
  vm.createContext(sanityCtx);
  try {
    vm.runInContext(newSrc + '\nthis.PAIRING_MAP = PAIRING_MAP;', sanityCtx);
  } catch (e) {
    console.error('');
    console.error('[FAIL] Serialized map would not parse: ' + e.message);
    process.exit(1);
  }
  if (sanityCtx.PAIRING_MAP.length !== map.length) {
    console.error('[FAIL] Serialized map has different entity count: ' + sanityCtx.PAIRING_MAP.length + ' vs ' + map.length);
    process.exit(1);
  }
  console.log('');
  console.log('[OK] Serialized map parses cleanly. ' + sanityCtx.PAIRING_MAP.length + ' entities round-tripped.');

  if (dryRun) {
    console.log('');
    console.log('[DRY-RUN] no files modified.');
    process.exit(0);
  }

  fs.writeFileSync(BACKUP_FILE, originalSrc);
  fs.writeFileSync(MAP_FILE, newSrc);
  console.log('');
  console.log('[OK] backup: ' + path.relative(REPO_ROOT, BACKUP_FILE));
  console.log('[OK] pairing-map-v2.js updated.');
  console.log('');
  console.log('Next: run `node engine/engine_health_check.js` to confirm');
  console.log('      orphan count drops by ~1,732 (food-x-food remainder = ~194).');
}

main();
