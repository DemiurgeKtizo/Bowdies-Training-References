// 58 gold pairs still lack a gold-tier verdict label. Append a hash-picked
// "Gold standard;" closer to bring them in line.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = '/sessions/jolly-epic-hypatia/mnt/Bowdies-Training-References';
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');
const PM = require(path.join(ROOT, 'pairing-map-v2.js')).PAIRING_MAP;

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

const tierByKey = new Map();
for (const e of PM) {
  for (const tier of ['gold','excellent','strong','works','avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) {
      if (!tierByKey.has(e.name + '|' + t)) tierByKey.set(e.name + '|' + t, tier);
      if (!tierByKey.has(t + '|' + e.name)) tierByKey.set(t + '|' + e.name, tier);
    }
  }
}

const GOLD_CLOSERS = [
  'Gold standard; the headline call at the table.',
  'Gold standard; pour without second-guessing.',
  'Gold standard; the call that earns the regular.',
  'Gold standard; the pairing that defines the moment.',
  'Gold standard; a confident headline pour.',
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const m = lineRe.exec(lines[i]);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  if (tierByKey.get(key) !== 'gold') continue;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  if (/Gold standard;|Peak [a-z][^;]*?\bfor\b/.test(text)) continue;

  // Append gold closer
  const canon = key.split('|').sort().join('::');
  const idx = hashPair(canon + '|gold-promote-final') % GOLD_CLOSERS.length;
  const trimmed = text.trim().replace(/[\s.,;]+$/, '');
  text = trimmed + '. ' + GOLD_CLOSERS[idx];
  lines[i] = prefix + JSON.stringify(text) + comma;
  fixed++;
}

console.log('=== FINAL UNDER-PROMOTED GOLD FIX ===');
console.log('Notes promoted:', fixed);

if (fixed === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
