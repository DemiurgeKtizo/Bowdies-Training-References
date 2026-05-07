// engine/audit_tier_mismatches_all.js
//
// Generalized tier-note mismatch audit, replacing the COURSE_TO_DESSERT-only
// audit_tier_note_mismatches.js. Walks every tier-listed pair, classifies
// the note's verdict label, and reports disagreements with the pairing-map
// tier.
//
// Use --report to print sample mismatches.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const PN = require(path.join(ROOT, 'pairing-notes.js')).PAIRING_NOTES;
const PM = require(path.join(ROOT, 'pairing-map-v2.js')).PAIRING_MAP;

// Build canonical tier (highest tier wins for gold-subset-of-excellent overlaps)
const TIER_PRIO = ['gold','excellent','strong','works','avoid'];
const tierByKey = new Map();
for (const e of PM) {
  for (const tier of TIER_PRIO) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) {
      const k1 = e.name + '|' + t, k2 = t + '|' + e.name;
      if (!tierByKey.has(k1)) tierByKey.set(k1, tier);
      if (!tierByKey.has(k2)) tierByKey.set(k2, tier);
    }
  }
}

function getNoteTier(t) {
  if (/Gold standard;/.test(t)) return 'gold';
  if (/Peak [a-z][^A-Z]*?for /.test(t)) return 'gold';
  const re = /\b(Excellent|Strong|Works alongside|Works|Avoid|Never pair|Never layer)\b[;.,:\s—-]/;
  const m = t.match(re);
  if (m) {
    const w = m[1];
    if (w === 'Excellent') return 'excellent';
    if (w === 'Strong') return 'strong';
    if (w === 'Works' || w === 'Works alongside') return 'works';
    if (w === 'Avoid' || w === 'Never pair' || w === 'Never layer') return 'avoid';
  }
  return null;
}

const argReport = process.argv.includes('--report');

let total = 0, match = 0, byMismatch = {}, samples = {};
for (const k of Object.keys(PN)) {
  const t = PN[k];
  if (typeof t !== 'string' || !t) continue;
  const mapTier = tierByKey.get(k);
  if (!mapTier) continue;
  total++;
  const noteTier = getNoteTier(t);
  if (noteTier === mapTier) { match++; continue; }
  const cat = mapTier + ' -> ' + noteTier;
  byMismatch[cat] = (byMismatch[cat]||0)+1;
  if (argReport) {
    samples[cat] = samples[cat] || [];
    if (samples[cat].length < 3) samples[cat].push({k, snippet: t.slice(0,160)});
  }
}

console.log('=== TIER MISMATCH AUDIT ===');
console.log('Total tier-listed pairs:  ' + total);
console.log('Matching:                 ' + match + ' (' + (match/total*100).toFixed(1) + '%)');
console.log('Mismatched:               ' + (total-match) + ' (' + ((total-match)/total*100).toFixed(1) + '%)');
console.log('\nBreakdown:');
for (const [cat, c] of Object.entries(byMismatch).sort((a,b)=>b[1]-a[1])) {
  console.log('  ' + c.toString().padStart(5) + '  ' + cat);
}
if (argReport) {
  console.log('\nSamples:');
  for (const [cat, ss] of Object.entries(samples)) {
    console.log('--- ' + cat + ' ---');
    for (const s of ss) console.log('  [' + s.k + '] ' + s.snippet);
  }
}
