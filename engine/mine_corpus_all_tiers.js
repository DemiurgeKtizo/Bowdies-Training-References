// Mines verdicts from preserved editorial across ALL tiers, including the
// wine/cocktail classes that v9's EDITORIAL_PHRASES never indexed.
'use strict';
const fs = require('fs');
const vm = require('vm');
const path = require('path');
const taxonomy = require('./pairing_engine_taxonomy');

const repo = path.resolve(__dirname, '..');
const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js','PAIRING_MAP');
load('pairing-notes.js','PAIRING_NOTES');

// Build tier lookup: pair-key -> tier
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['avoid','works','strong','excellent','gold']) {
    if (!Array.isArray(e[tier])) continue;
    for (const target of e[tier]) {
      tierByKey.set(e.name + '|' + target, tier);
      tierByKey.set(target + '|' + e.name, tier);
    }
  }
}

function isTemplatedNote(note) {
  if (!note) return true;
  const sig = [
    /runs straight into/, /meets at register with/, /that defines /,
    /the call you don't second-guess/, /the call servers pour without second-guessing/,
    /reads cleanly at the table/, /reach for any of those/, /pick from the alternatives/,
    /elegance meets the plate/, /sits in the pocket on/, /earns a regular/,
    /dials in cleanly/, /workhorse pairing/, /keeps pace with/,
    /Save the .+ for the steak/, /Save the .+ for another course/,
    /belongs on (the steak|another) course/, /Hold the .+ for /,
    /that's the play/, /-- textbook\./, /the answer is /, /pour it and step back/,
    /if a guest asks what to drink with/, /is fine on .+ -- fine, not memorable/,
    /doesn't fight .+, but doesn't lift it either/, /pulls neither way against/,
    /backup when the strong calls/, /save the storytelling/, /spoken for/,
    /without asking for attention/, /is the answer, full stop/,
    /when a guest asks what works/,
  ];
  return sig.some(r => r.test(note));
}

// Tier word patterns to extract
const TIER_HEADS = {
  gold:      /Gold standard|^Peak\s/i,
  excellent: /Excellent[;\.]/i,
  strong:    /Strong[;\.]/i,
  works:     /Works[;\.]/i,
};

function extractVerdict(note, tier) {
  const sents = note.split(/(?<=[.!?])\s+/).map(s => s.trim()).filter(s => s.length >= 15);
  const head = TIER_HEADS[tier];
  if (head) {
    for (const s of sents) {
      if (head.test(s)) return s;
    }
  }
  // Gold fallback: editorial gold notes often close with a quotable summary
  // ("the absolute top-shelf rye for strip when it's the table's special occasion.").
  // Take the last sentence if it looks summary-like.
  if (tier === 'gold' && sents.length >= 2) {
    const last = sents[sents.length - 1];
    if (last.length >= 25 && last.length <= 280
        && !/^(See|Note|Also|And|However|But)\b/i.test(last)
        && !/^(Excellent|Strong|Works|Avoid)/i.test(last)) {
      return last;
    }
  }
  return null;
}

const corpus = {};  // tier -> dc|fc -> [{template, source}, ...]
const stats = { total:0, templated:0, editorial:0, extracted: {} };

const notes = ctx.PAIRING_NOTES;
const byName = {}; for (const e of ctx.PAIRING_MAP) byName[e.name] = e;

for (const key of Object.keys(notes)) {
  const tier = tierByKey.get(key);
  if (!tier || tier === 'avoid') continue;
  stats.total++;
  const note = notes[key];
  if (isTemplatedNote(note)) { stats.templated++; continue; }
  stats.editorial++;
  const v = extractVerdict(note, tier);
  if (!v) continue;
  // Reject standalone tier-word entries
  if (/^\s*(Gold standard|Excellent|Strong|Works|Avoid)\.?\s*$/i.test(v)) continue;
  stats.extracted[tier] = (stats.extracted[tier] || 0) + 1;
  const [a, b] = key.split('|');
  const A = byName[a], B = byName[b]; if (!A || !B) continue;
  const drink = taxonomy.FOOD_CATS.has(A.category) ? B : A;
  const food  = taxonomy.FOOD_CATS.has(A.category) ? A : B;
  const dc = taxonomy.drinkClassFor(drink) || 'DEFAULT';
  const fc = taxonomy.foodClassFor(food)   || 'DEFAULT';
  const ck = dc + '|' + fc;
  if (!corpus[tier]) corpus[tier] = {};
  if (!corpus[tier][ck]) corpus[tier][ck] = [];
  corpus[tier][ck].push({ template: v, source: key });
}

// Dedupe per bucket
const out = {};
let totalEntries = 0;
for (const tier of Object.keys(corpus)) {
  out[tier] = {};
  for (const ck of Object.keys(corpus[tier])) {
    const seen = new Set();
    out[tier][ck] = [];
    for (const e of corpus[tier][ck]) {
      if (seen.has(e.template)) continue;
      seen.add(e.template);
      out[tier][ck].push(e);
      totalEntries++;
    }
  }
}

console.log('=== CORPUS MINING (all non-avoid tiers) ===');
console.log('Total non-avoid pairs scanned:', stats.total);
console.log('Templated (skipped):           ', stats.templated);
console.log('Editorial (mined):             ', stats.editorial);
console.log('Extracted per tier:            ', stats.extracted);
console.log('Unique entries written:        ', totalEntries);
console.log('');
for (const tier of Object.keys(out)) {
  const buckets = Object.entries(out[tier]).sort((a,b)=>b[1].length-a[1].length);
  console.log(`\n--- ${tier} (${buckets.length} buckets) ---`);
  for (const [k, arr] of buckets.slice(0, 8)) console.log('  '+k.padEnd(35)+arr.length);
}

const outPath = path.join(__dirname, 'corpus_mined_all_tiers.js');
fs.writeFileSync(outPath,
  '// AUTO-GENERATED by engine/mine_corpus_all_tiers.js -- do not edit by hand.\n' +
  'const CORPUS_MINED = ' + JSON.stringify(out, null, 2) + ';\n' +
  'module.exports = { CORPUS_MINED };\n'
);
console.log('\nWritten: '+outPath);
