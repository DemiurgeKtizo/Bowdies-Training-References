'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');

const REPLACEMENTS = [
  ['22oz cap-fat',          '26oz cap-fat'],
  ['22oz bone-in cap-fat',  '26oz bone-in cap-fat'],
  ['22oz bone-in',          '26oz bone-in'],
  ['22oz ribeye',           '26oz ribeye'],
  ['22oz Cowboy',           '26oz Cowboy'],
  ['22oz cowboy',           '26oz cowboy'],
  ['22-oz cap-fat',         '26-oz cap-fat'],
  ['22 oz cap-fat',         '26 oz cap-fat'],
  ['the 22oz cut',          'the 26oz cut'],
  ['the 22oz',              'the 26oz'],
  ['40oz showpiece',        '36oz showpiece'],
  ['40oz bone-on showpiece','36oz bone-on showpiece'],
  ['40oz bone-on',          '36oz bone-on'],
  ['40-oz bone-on',         '36-oz bone-on'],
  ['40 oz bone-on',         '36 oz bone-on'],
  ['40oz Tomahawk',         '36oz Tomahawk'],
  ['40oz tomahawk',         '36oz tomahawk'],
  ['40oz theatrical',       '36oz theatrical'],
  ['40oz long-bone',        '36oz long-bone'],
  ['the 40oz cut',          'the 36oz cut'],
  ['massive 40oz bone-in',  'massive 36oz bone-in'],
  ['40oz bone-in ribeye',   '36oz bone-in ribeye'],
  ["40oz bone-in's smoky-char", "36oz bone-in's smoky-char"],
  ["Tomahawk's 40oz",       "Tomahawk's 36oz"],
  ['butter-tender 6oz',     'butter-tender 10oz'],
  ['lean butter-tender 6oz','lean butter-tender 10oz'],
  ['the 6oz tenderloin',    'the 10oz tenderloin'],
  ['the 6oz lean',          'the 10oz lean'],
  ['the lean 6oz',          'the lean 10oz'],
  ['the 6oz center-cut',    'the 10oz center-cut'],
  ['the restrained 6oz',    'the restrained 10oz'],
  ['the 6oz lean-tender',   'the 10oz lean-tender'],
  ['flame-grilled 6oz',     'flame-grilled 10oz'],
  ['6oz center-cut tenderloin', '10oz center-cut tenderloin'],
  ['against the 8oz cut',   'against the 10oz cut'],
  ['the 8oz center-cut',    'the 10oz center-cut'],
  ['the 8oz cut meets',     'the 10oz cut meets'],
  ['the 8oz cut',           'the 10oz cut'],
  ['8oz center-cut tenderloin', '10oz center-cut tenderloin'],
  ['the 8oz tenderloin',    'the 10oz tenderloin'],
  ['8oz lean-tender',       '10oz lean-tender'],
  ['butter-tender 8oz',     'butter-tender 10oz'],
  ['lean butter-tender 8oz','lean butter-tender 10oz'],
  ['flame-grilled 8oz',     'flame-grilled 10oz'],
  ['against a 16oz strip',  'against an 18oz strip'],
  ['against the 16oz strip','against the 18oz strip'],
  ['the 16oz strip',        'the 18oz strip'],
  ['16oz strip steak',      '18oz strip steak'],
  ['a 16oz strip',          'an 18oz strip'],
  ['16-oz strip',           '18-oz strip'],
  ['16 oz strip',           '18 oz strip'],
  ['the 16oz KC',           'the 18oz KC'],
  ['the 16oz Kansas',       'the 18oz Kansas'],
];

const TARGETS = [
  'pairing-notes.js',
  'editorial-phrases.js',
  'engine/gold_corpus_mined.js',
  'engine/corpus_mined_all_tiers.js',
  'engine/food_corpus_mined.js',
  'engine/food_profiles_curated.js',
  'engine/backfill_steak_dessert_notes.js',
  'engine/backfill_main_dessert_notes.js',
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
    const tmp = full + '.tmp.' + process.pid;
    fs.writeFileSync(tmp, src);
    fs.renameSync(tmp, full);
  }
}

console.log('=== STEAK WEIGHT CORRECTION ===');
console.log('Replacements applied:');
for (const [k, v] of Object.entries(fileStats)) console.log('  ' + k.padEnd(45) + v);
console.log('  TOTAL: ' + totalReplacements);
