// engine/engine_health_check.js
//
// Pre-regen safety net. Surfaces blockers BEFORE you run the templated
// regenerator or push a deploy. Run as:
//
//   node engine/engine_health_check.js
//
// Exits 0 if all checks pass, 1 otherwise. Designed to be the first step in
// the regen pipeline (see CLAUDE.md). If it fails, fix the issue and re-run —
// don't proceed to regenerate_templated_notes.js with a dirty foundation.
//
// Checks performed:
//   1. Taxonomy coverage      — every entity classifies (no DEFAULT bucket)
//   2. Profile parity         — pairing-map and enriched-profiles agree on names
//   3. Pair-note references   — every pair-note key references a known entity
//   4. Mirror integrity       — every "A|B" has a matching "B|A" with same text
//   5. Tier-list consistency  — every tier-listed item also has a pair-note
//   6. Tier uniqueness        — items appear in only one tier (gold⊆excellent ok)
//   7. Language drift         — flags forbidden phrases (e.g. "seared beef")
//   8. Templated/editorial split — sanity check on the templated/editorial ratio
//   9. Chemistry-claims sanity — flags suspiciously thin chemistry data

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const taxonomy = require('./pairing_engine_taxonomy');

// ── DATA LOADER ───────────────────────────────────────────────────────────

function loadRepoData(repoRoot) {
  const ctx = {};
  vm.createContext(ctx);
  const load = (file, name) => {
    const src = fs.readFileSync(path.join(repoRoot, file), 'utf8');
    vm.runInContext(src + '\nthis.' + name + ' = ' + name + ';', ctx);
  };
  load('pairing-map-v2.js',    'PAIRING_MAP');
  load('enriched-profiles.js', 'ENRICHED_PROFILES');
  load('pairing-notes.js',     'PAIRING_NOTES');
  try { load('chemistry-claims.js', 'CHEMISTRY_CLAIMS'); }
  catch (e) { ctx.CHEMISTRY_CLAIMS = null; }
  return ctx;
}

// ── CHECKS ────────────────────────────────────────────────────────────────

function check_taxonomy_coverage(data) {
  const report = taxonomy.verifyCoverage(data.PAIRING_MAP, data.ENRICHED_PROFILES);
  const issues = [];
  if (report.drink.defaults.length) {
    issues.push(report.drink.defaults.length + ' drinks unclassified: ' + report.drink.defaults.slice(0,5).join(', ') + (report.drink.defaults.length>5?'...':''));
  }
  if (report.food.defaults.length) {
    issues.push(report.food.defaults.length + ' foods unclassified: ' + report.food.defaults.slice(0,5).join(', ') + (report.food.defaults.length>5?'...':''));
  }
  if (report.orphanCategory.length) {
    issues.push(report.orphanCategory.length + ' entities have unknown category');
  }
  return {
    name: 'Taxonomy coverage',
    level: issues.length ? 'fail' : 'pass',
    summary: issues.length ? issues.join('; ')
      : report.totalEntities + ' entities -> ' + Object.keys(report.drink.counts).length + ' drink classes, ' + Object.keys(report.food.counts).length + ' food classes',
    detail: report.drink.defaults.concat(report.food.defaults),
  };
}

function check_profile_parity(data) {
  const mapNames = new Set(data.PAIRING_MAP.map(e => e.name));
  const profileNames = new Set(Object.keys(data.ENRICHED_PROFILES));
  const inMapNotProfiles = [...mapNames].filter(n => !profileNames.has(n));
  const inProfilesNotMap = [...profileNames].filter(n => !mapNames.has(n));
  const issues = [];
  if (inMapNotProfiles.length) issues.push(inMapNotProfiles.length + ' in map missing profile');
  if (inProfilesNotMap.length) issues.push(inProfilesNotMap.length + ' in profile missing map entry');
  return {
    name: 'Profile parity',
    level: issues.length ? 'fail' : 'pass',
    summary: issues.length ? issues.join('; ')
      : mapNames.size + ' entities, perfect parity',
    detail: inMapNotProfiles.map(n => 'map->missing: ' + n).concat(inProfilesNotMap.map(n => 'profile->missing: ' + n)),
  };
}

function check_pair_note_refs(data) {
  const mapNames = new Set(data.PAIRING_MAP.map(e => e.name));
  const unknown = new Set();
  let unknownKeys = 0;
  for (const k of Object.keys(data.PAIRING_NOTES)) {
    const [l, r] = k.split('|');
    if (!mapNames.has(l)) { unknown.add(l); unknownKeys++; }
    if (!mapNames.has(r)) { unknown.add(r); unknownKeys++; }
  }
  return {
    name: 'Pair-note references',
    level: unknown.size ? 'fail' : 'pass',
    summary: unknown.size
      ? unknownKeys + ' keys reference ' + unknown.size + ' unknown entities'
      : 'all ' + Object.keys(data.PAIRING_NOTES).length + ' keys reference known entities',
    detail: [...unknown].slice(0, 20),
  };
}

function check_mirror_integrity(data) {
  let missing = 0, mismatch = 0;
  const sampleMissing = [];
  const sampleMismatch = [];
  for (const k of Object.keys(data.PAIRING_NOTES)) {
    const [l, r] = k.split('|');
    const reverse = r + '|' + l;
    if (!Object.prototype.hasOwnProperty.call(data.PAIRING_NOTES, reverse)) {
      missing++;
      if (sampleMissing.length < 5) sampleMissing.push(k);
    } else if (data.PAIRING_NOTES[k] !== data.PAIRING_NOTES[reverse]) {
      mismatch++;
      if (sampleMismatch.length < 5) sampleMismatch.push(k);
    }
  }
  const issues = [];
  if (missing) issues.push(missing + ' keys missing mirror');
  if (mismatch) issues.push(mismatch + ' keys mirror with different text');
  return {
    name: 'Mirror integrity',
    level: issues.length ? 'fail' : 'pass',
    summary: issues.length ? issues.join('; ')
      : 'all ' + Object.keys(data.PAIRING_NOTES).length + ' keys mirrored cleanly',
    detail: sampleMissing.concat(sampleMismatch),
  };
}

function check_tier_list_consistency(data) {
  const noteKeys = new Set(Object.keys(data.PAIRING_NOTES));
  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  const orphans = [];
  for (const e of data.PAIRING_MAP) {
    for (const tier of tiers) {
      const list = e[tier];
      if (!Array.isArray(list)) continue;
      for (const target of list) {
        const fwd = e.name + '|' + target;
        const rev = target + '|' + e.name;
        if (!noteKeys.has(fwd) && !noteKeys.has(rev)) {
          orphans.push(e.name + ' -> ' + target + ' [' + tier + '] (no note)');
        }
      }
    }
  }
  return {
    name: 'Tier-list consistency',
    level: orphans.length ? 'warn' : 'pass',
    summary: orphans.length
      ? orphans.length + ' tier-listed pairs missing notes'
      : 'all tier-listed pairs have notes',
    detail: orphans.slice(0, 30),
  };
}

function check_tier_uniqueness(data) {
  // gold ⊆ excellent is intentional — gold is a "headline subset" the UI promotes.
  // Only flag OTHER duplicates (e.g. excellent + avoid) and any gold item
  // that is NOT in excellent (broken invariant).
  const tiers = ['gold', 'excellent', 'strong', 'works', 'avoid'];
  const dupes = [];
  let goldExcellentOverlap = 0;
  let goldNotInExcellent = 0;
  for (const e of data.PAIRING_MAP) {
    const seenIn = {};
    for (const tier of tiers) {
      const list = e[tier];
      if (!Array.isArray(list)) continue;
      for (const target of list) {
        if (seenIn[target]) {
          const pairKey = seenIn[target] + '->' + tier;
          if (pairKey === 'gold->excellent') goldExcellentOverlap++;
          else dupes.push(e.name + ': "' + target + '" appears in both [' + seenIn[target] + '] and [' + tier + ']');
        } else {
          seenIn[target] = tier;
        }
      }
    }
    if (Array.isArray(e.gold) && Array.isArray(e.excellent)) {
      const exc = new Set(e.excellent);
      for (const g of e.gold) if (!exc.has(g)) goldNotInExcellent++;
    }
  }
  const issues = [];
  if (dupes.length) issues.push(dupes.length + ' unexpected dupes');
  if (goldNotInExcellent) issues.push(goldNotInExcellent + ' gold items missing from excellent');
  return {
    name: 'Tier uniqueness',
    level: issues.length ? 'warn' : 'pass',
    summary: issues.length ? issues.join('; ')
      : goldExcellentOverlap + ' gold-subset-of-excellent overlaps (intentional); no other dupes',
    detail: dupes.slice(0, 20),
  };
}

function check_language_drift(data) {
  const STEAKS = ['Filet Mignon','Bone-In Filet','Kansas City','Cowboy Ribeye','The Tomahawk','Porterhouse'];
  const STEAK_FORBIDDEN = [
    /seared (?:crust|fat|beef|filet|ribeye|strip|porterhouse|tomahawk|steak|meat|cut)/i,
    /pan-seared (?:filet|tomahawk|cowboy|ribeye|porterhouse|strip|steak)/i,
    /steak's seared/i,
  ];
  const findings = [];
  for (const k of Object.keys(data.PAIRING_NOTES)) {
    const [l, r] = k.split('|');
    if (!STEAKS.includes(l) && !STEAKS.includes(r)) continue;
    const note = data.PAIRING_NOTES[k];
    for (const pat of STEAK_FORBIDDEN) {
      if (pat.test(note)) { findings.push({ key: k, pattern: pat.source }); break; }
    }
  }
  // Dedupe by unordered pair
  const seen = new Set();
  const uniq = [];
  for (const f of findings) {
    const [l, r] = f.key.split('|');
    const sig = [l, r].sort().join('|');
    if (seen.has(sig)) continue;
    seen.add(sig);
    uniq.push(f);
  }
  return {
    name: 'Language drift (cooking method)',
    level: uniq.length ? 'warn' : 'pass',
    summary: uniq.length
      ? uniq.length + ' unique pair-notes describe steak with sear/pan-sear language'
      : 'no cooking-method drift detected',
    detail: uniq.slice(0, 20).map(f => f.key + '  [' + f.pattern + ']'),
  };
}

function check_templated_editorial_split(data) {
  const SIGS = [
    /runs straight into [^—]+— the/,
    /Gold standard;.*lock that sells itself/,
    /Avoid; Reach for/,
    /Save the .* for the steak/,
    /caramel-spice character/,
    /finds neutral with/,
    /meets at register with/,
    /character holds with/,
    /sits alongside/,
    /leans against/,
    /stays alongside/,
    /reads alongside/,
    /character drowns out/,
    /bulldozes/,
    /character overpowers/,
  ];
  let templated = 0, editorial = 0;
  for (const v of Object.values(data.PAIRING_NOTES)) {
    if (SIGS.some(rx => rx.test(v))) templated++;
    else editorial++;
  }
  const uniqTempl = templated / 2;
  const uniqEdit  = editorial / 2;
  const ratio = uniqTempl / (uniqTempl + uniqEdit);
  const level = (ratio < 0.2 || ratio > 0.85) ? 'warn' : 'pass';
  return {
    name: 'Templated / editorial split',
    level,
    summary: '~' + Math.round(uniqTempl) + ' templated, ~' + Math.round(uniqEdit) + ' editorial (' + (ratio*100).toFixed(1) + '% templated)',
    detail: [],
  };
}

function check_chemistry_claims(data) {
  if (!data.CHEMISTRY_CLAIMS) {
    return { name: 'Chemistry claims', level: 'warn', summary: 'chemistry-claims.js not loaded', detail: [] };
  }
  let claims = 0;
  for (const inner of Object.values(data.CHEMISTRY_CLAIMS)) {
    claims += Object.keys(inner).length;
  }
  const level = claims < 30 ? 'warn' : 'pass';
  return {
    name: 'Chemistry claims',
    level,
    summary: claims + ' chemistry claim entries indexed',
    detail: claims < 30 ? ['suspiciously thin -- mine_chemistry_claims.js may need broader heuristics'] : [],
  };
}

// ── RUNNER ────────────────────────────────────────────────────────────────

function run(repoRoot) {
  const data = loadRepoData(repoRoot);
  const checks = [
    check_taxonomy_coverage,
    check_profile_parity,
    check_pair_note_refs,
    check_mirror_integrity,
    check_tier_list_consistency,
    check_tier_uniqueness,
    check_language_drift,
    check_templated_editorial_split,
    check_chemistry_claims,
  ];

  const results = checks.map(c => c(data));

  const SYM = { pass: '[PASS]', warn: '[WARN]', fail: '[FAIL]' };
  console.log('=== ENGINE HEALTH CHECK ===');
  console.log('');
  for (const r of results) {
    console.log(SYM[r.level] + ' ' + r.name.padEnd(34) + ' -- ' + r.summary);
    if (r.detail && r.detail.length && r.level !== 'pass') {
      r.detail.slice(0, 10).forEach(d => console.log('       . ' + d));
      if (r.detail.length > 10) console.log('       . ... and ' + (r.detail.length - 10) + ' more');
    }
  }

  const failures = results.filter(r => r.level === 'fail').length;
  const warnings = results.filter(r => r.level === 'warn').length;
  console.log('');
  console.log((failures ? '[FAIL]' : '[OK]') + ' ' + (results.length - failures - warnings) + ' pass | ' + warnings + ' warn | ' + failures + ' fail');

  return { results, failures, warnings };
}

if (require.main === module) {
  const repoRoot = process.argv[2] || path.resolve(__dirname, '..');
  const { failures } = run(repoRoot);
  process.exit(failures > 0 ? 1 : 0);
}

module.exports = { run, loadRepoData };
