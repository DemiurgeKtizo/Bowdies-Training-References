// engine/fix_missing_verdict_labels.js
//
// Per the 2026-05-06 audit: 3,888+ legacy-format notes (e.g., "1792 Small
// Batch with the KC — Barton 1792 small-batch against the strip's marbling.
// The spicy-sweet high-rye handles the cut at the balanced mid-proof.")
// have no recognizable verdict label. The audit script and front-end can't
// classify them. This script appends a tier-appropriate closer.
//
// For gold-tier pairs that read "Excellent;" / "Strong;" / "Works;" / null,
// a "Gold standard;" prefix is added if missing. This preserves the existing
// editorial body and just clarifies the verdict.
//
// Conservative — only adds, never replaces existing verdicts.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');
const BACKUP = path.join(ROOT, 'pairing-notes.js.pre-verdict-fix.bak');

const PM = require(path.join(ROOT, 'pairing-map-v2.js')).PAIRING_MAP;

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

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
  if (!m) return null;
  const w = m[1];
  if (w === 'Excellent') return 'excellent';
  if (w === 'Strong') return 'strong';
  if (w === 'Works' || w === 'Works alongside') return 'works';
  return 'avoid';
}

// Tier-appropriate closer pools. Hash-picked for variety.
const CLOSERS = {
  gold:      [
    'Gold standard; the headline call at the table.',
    'Gold standard; pour without second-guessing.',
    'Gold standard; the recommendation that earns the regular.',
    'Gold standard; the call that defines the pairing.',
  ],
  excellent: [
    'Excellent; the call holds at full register.',
    'Excellent; reliable headline pairing.',
    'Excellent; servers pour without second-guessing.',
    'Excellent; the pairing carries cleanly.',
  ],
  strong:    [
    'Strong; the call sits without strain.',
    'Strong; consistent recommendation across the table.',
    'Strong; the pairing reads at register.',
    'Strong; reliable across the meal.',
  ],
  works:     [
    'Works; capable alongside without driving the table.',
    'Works; the pairing holds without overshooting.',
    'Works; safe call, not the headline.',
    'Works; the match reads neutral at the table.',
  ],
  avoid:     [
    'Avoid; route the table to a better-matched pour.',
    'Avoid; the pairing fights at the table — point the guest elsewhere.',
    'Avoid; the call reads off-register; recommend an alternative.',
    'Avoid; pair this elsewhere on the menu.',
  ],
};

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let nullFixed = 0, goldPromoted = 0, untouched = 0;
const fixedByTier = { gold:0, excellent:0, strong:0, works:0, avoid:0 };

for (let i = 0; i < lines.length; i++) {
  const m = lineRe.exec(lines[i]);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  const mapTier = tierByKey.get(key);
  if (!mapTier) { untouched++; continue; }
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  const noteTier = getNoteTier(text);

  let modified = false;

  // Case 1: no verdict label at all → append tier closer
  if (noteTier === null) {
    const pool = CLOSERS[mapTier];
    const idx = hashPair(key.split('|').sort().join('::')) % pool.length;
    const closer = pool[idx];
    // Append after a space + period if needed
    const trimmed = text.trim().replace(/[\s.,;]+$/, '');
    text = trimmed + '. ' + closer;
    nullFixed++;
    fixedByTier[mapTier]++;
    modified = true;
  }
  // Case 2: gold pair without "Gold standard;" / "Peak X for Y" → prepend gold closer
  else if (mapTier === 'gold' && noteTier !== 'gold') {
    // Append a Gold-standard suffix sentence, preserving existing verdict.
    const pool = CLOSERS.gold;
    const idx = hashPair(key.split('|').sort().join('::')) % pool.length;
    const closer = pool[idx];
    const trimmed = text.trim().replace(/[\s.,;]+$/, '');
    text = trimmed + '. ' + closer;
    goldPromoted++;
    modified = true;
  }

  if (modified) {
    lines[i] = prefix + JSON.stringify(text) + comma;
  }
}

console.log('=== VERDICT LABEL REPAIR ===');
console.log('Notes with appended verdict closer (no prior label): ' + nullFixed);
console.log('  by tier: gold=' + fixedByTier.gold + ', excellent=' + fixedByTier.excellent
  + ', strong=' + fixedByTier.strong + ', works=' + fixedByTier.works + ', avoid=' + fixedByTier.avoid);
console.log('Gold-tier under-promoted notes with appended Gold standard closer: ' + goldPromoted);

if (nullFixed === 0 && goldPromoted === 0) { console.log('[NOOP]'); process.exit(0); }

if (!fs.existsSync(BACKUP)) {
  fs.copyFileSync(NOTES_FILE, BACKUP);
  console.log('[OK] backup: ' + path.relative(ROOT, BACKUP));
}

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.verdict.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote pairing-notes.js (' + out.length + ' chars)');
console.log('total time: ' + (Date.now()-t0) + 'ms');
