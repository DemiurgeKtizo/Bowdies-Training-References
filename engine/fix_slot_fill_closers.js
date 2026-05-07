// engine/fix_slot_fill_closers.js
//
// 2026-05-06 audit pass 3: closer phrases mined from the v9 corpus contain
// hardcoded "{drinkClass}-on-{foodClass}" labels (e.g., "the digestif-on-
// dessert call", "the bourbon-on-light-soup pairing"). When the engine pulls
// these phrases for a pair whose actual classes don't match the embedded
// labels, the closer reads as a misfit ("Mount Gay Rum × Grilled Caesar"
// gets "the digestif-on-dessert pairing").
//
// Fix: detect any "X-on-Y" closer at sentence end and replace with a clean
// tier-appropriate generic closer chosen by hash. The closer pool here is
// label-free — no embedded class assumptions.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// Replacement pools — tier-appropriate, label-free.
const CLOSERS = {
  Strong: [
    'the call holds at register without strain',
    'a confident match across the table',
    'reliable headline pairing',
    'the pairing reads cleanly',
    'consistent recommendation worth pouring',
    'the match carries without overshooting',
    'a steady recommendation at the table',
    'the call lands cleanly',
  ],
  Excellent: [
    'a confident headline pairing',
    'the pairing earns its featured slot',
    'a textbook match that delivers',
    'one of the strong calls on the list',
    'the match holds at full register',
    'reliable headline call',
    'servers pour without second-guessing',
  ],
  Works: [
    'capable alongside without driving the table',
    'the pairing holds without overshooting',
    'safe call, not the headline',
    'the match reads neutral at the table',
    'reliable companion, low risk',
    'composed but not a standout',
    'the call holds at register',
    'a safe alongside, no friction',
  ],
};

// Match patterns:
//   "Strong; the X-on-Y NOUN [optional adverb phrase]."
//   "Excellent; the X-on-Y NOUN..."
//   "Works; the X-on-Y NOUN..."
// where X and Y are class slugs and NOUN is call/pairing/match/etc.
// Also catch "Works at the table; nothing jostles in this X-on-Y pairing."
const PATTERNS = [
  // "Tier; the X-on-Y NOUN ..." capturing the rest of the sentence
  {
    tier: 'Strong',
    re: /Strong;\s+the\s+[a-z-]+-on-[a-z-]+\s+(call|pairing|match|recommendation|alongside)\b[^.]*\./g,
  },
  {
    tier: 'Excellent',
    re: /Excellent;\s+the\s+[a-z-]+-on-[a-z-]+\s+(call|pairing|match|recommendation|alongside)\b[^.]*\./g,
  },
  {
    tier: 'Works',
    re: /Works(?:\s+alongside)?;\s+the\s+[a-z-]+-on-[a-z-]+\s+(call|pairing|match|recommendation|alongside)\b[^.]*\./g,
  },
  // "Works at the table; nothing jostles in this X-on-Y pairing."
  {
    tier: 'Works',
    re: /Works\s+at\s+the\s+table;\s+nothing\s+jostles\s+in\s+this\s+[a-z-]+-on-[a-z-]+\s+pairing\./g,
  },
  // "the X-on-Y call lands without effort." (no tier prefix in some legacy notes)
  // Skip this unless there's a tier label nearby — too risky to blanket-replace
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let totalSwaps = 0;
const swapsByTier = { Strong: 0, Excellent: 0, Works: 0 };

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Quick filter: only check lines containing "X-on-Y" pattern
  if (!/[a-z]-on-[a-z]/.test(line)) continue;
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;

  for (const p of PATTERNS) {
    if (!p.re.test(text)) { p.re.lastIndex = 0; continue; }
    p.re.lastIndex = 0;
    text = text.replace(p.re, () => {
      const pool = CLOSERS[p.tier];
      const canon = key.split('|').sort().join('::');
      const idx = hashPair(canon + '|' + p.tier + '|closer') % pool.length;
      swapsByTier[p.tier]++;
      totalSwaps++;
      return p.tier + '; ' + pool[idx] + '.';
    });
    p.re.lastIndex = 0;
    modified = true;
  }

  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== FIX SLOT-FILL CLOSERS ===');
console.log('Total swaps: ' + totalSwaps);
for (const [t, c] of Object.entries(swapsByTier)) console.log('  ' + c.toString().padStart(5) + '  ' + t);
console.log('Process time: ' + (Date.now()-t0) + 'ms');

if (totalSwaps === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
