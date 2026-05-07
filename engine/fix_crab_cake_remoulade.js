// Factual correction script per CLAUDE.md "Editorial CAN be edited when it
// contains a factual error about menu preparation, ingredients, or plating."
//
// Bowdie's Crab Cake is served with house romesco (roasted red pepper and
// jalapeño blended with parmesan, shallot, and garlic), NOT remoulade.
// See index.html lines 8924-8966 — confirmed 2026-05-06.
//
// Old preserved editorial referenced "remoulade" in 184 places (182 in
// pairing-notes.js, 2 in editorial-phrases.js). All occurrences are in
// Crab Cake context — no other dish on the menu uses remoulade — so a
// global token replacement is safe.

'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');

// Targeted replacements — match the most common compound forms first to
// preserve hyphenation, then catch the bare token.
const REPLACEMENTS = [
  // Compound forms seen in the corpus
  ['remoulade-and-crab',    'romesco-and-crab'],
  ['remoulade and crab',    'romesco and crab'],
  ['lump-crab delicacy and remoulade cream', 'lump-crab delicacy and romesco cream'],
  ['the light remoulade',   'the light romesco'],
  ['the remoulade',         'the romesco'],
  ['crab\'s remoulade',     'crab\'s romesco'],
  // Bare token — must come last so the compound forms win
  ['remoulade',             'romesco'],
];

const TARGETS = [
  'pairing-notes.js',
  'editorial-phrases.js',
];

let totalReplacements = 0;
const fileStats = {};

for (const rel of TARGETS) {
  const full = path.join(repo, rel);
  if (!fs.existsSync(full)) { console.log('SKIP missing: ' + rel); continue; }
  // Backup once before first write
  const bak = full + '.pre-remoulade-fix.bak';
  if (!fs.existsSync(bak)) fs.copyFileSync(full, bak);
  let src = fs.readFileSync(full, 'utf8');
  let count = 0;
  for (const [from, to] of REPLACEMENTS) {
    const re = new RegExp(from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const m = src.match(re);
    if (m) { count += m.length; src = src.replace(re, to); }
  }
  fileStats[rel] = count;
  totalReplacements += count;
  if (count > 0) {
    fs.writeFileSync(full, src);
  }
}

console.log('=== CRAB CAKE REMOULADE → ROMESCO ===');
console.log('Replacements applied:');
for (const [k, v] of Object.entries(fileStats)) console.log('  ' + k.padEnd(30) + v);
console.log('  TOTAL: ' + totalReplacements);
