// Factual correction script per CLAUDE.md "Editorial CAN be edited when it
// contains a factual error about menu preparation, ingredients, or plating."
//
// Bowdie's actual cut weights (confirmed by GM 2026-04-27):
//   Filet Mignon:   10oz
//   Bone-In Filet:  14oz
//   Kansas City:    18oz
//   Cowboy Ribeye:  26oz
//   Tomahawk:       36oz
//   Porterhouse:    40oz
//
// Old preserved editorial used outdated weights — primarily 22oz for Cowboy and
// 40oz for Tomahawk. This script repairs them across pairing-notes.js plus the
// templated reference files (editorial-phrases.js, mined corpora).

'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');

// Targeted replacements. Order matters — most-specific first.
const REPLACEMENTS = [
  // Cowboy was 22oz, now 26oz. Phrases reference "22oz cap-fat" / "22oz bone-in
  // cap-fat" / "22oz bone-in" almost always for Cowboy in the corpus.
  ['22oz cap-fat',          '26oz cap-fat'],
  ['22oz bone-in cap-fat',  '26oz bone-in cap-fat'],
  ['22oz bone-in',          '26oz bone-in'],
  ['22oz ribeye',           '26oz ribeye'],
  ['22oz Cowboy',           '26oz Cowboy'],
  ['22oz cowboy',           '26oz cowboy'],
  ['22-oz cap-fat',         '26-oz cap-fat'],
  ['22 oz cap-fat',         '26 oz cap-fat'],
  // Tomahawk was 40oz in old editorial, now 36oz. But porterhouse IS 40oz, so
  // we have to be careful — only replace 40oz when context is Tomahawk.
  ['40oz showpiece',        '36oz showpiece'],
  ['40oz bone-on showpiece','36oz bone-on showpiece'],
  ['40oz bone-on',          '36oz bone-on'],
  ['40-oz bone-on',         '36-oz bone-on'],
  ['40 oz bone-on',         '36 oz bone-on'],
  ['40oz Tomahawk',         '36oz Tomahawk'],
  ['40oz tomahawk',         '36oz tomahawk'],
  ['40oz theatrical',       '36oz theatrical'],
];

const TARGETS = [
  'pairing-notes.js',
  'editorial-phrases.js',
  'engine/gold_corpus_mined.js',
  'engine/corpus_mined_all_tiers.js',
];

let totalReplacements = 0;
const fileStats = {};

for (const rel of TARGETS) {
  const full = path.join(repo, rel);
  if (!fs.existsSync(full)) { console.log('SKIP missing: ' + rel); continue; }
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

console.log('=== STEAK WEIGHT CORRECTION ===');
console.log('Replacements applied:');
for (const [k, v] of Object.entries(fileStats)) console.log('  ' + k.padEnd(45) + v);
console.log('  TOTAL:                                       ' + totalReplacements);
