// Fix legacy gold-format notes (* {Bottle} -- ...) where mid-note text mentions
// a different bottle as if it were the subject.
//
// Pattern: gold notes that start with "* {Bottle} --" and contain a sentence
// where another bottle is the subject of the verdict text.

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

const BOTTLES = [];
for (const e of PM) {
  if (['steak','starter','soup-salad','main','side','dessert'].includes(e.category)) continue;
  if (e.name.length < 5) continue;
  BOTTLES.push(e.name);
}

const VERBS = ['handles','frames','threads','carries','wraps','sits','leans','reads','holds','lifts','cuts','matches','meets','brightens','softens','grips','brings','dovetails','pushes'];
const verbAlt = '(?:' + VERBS.join('|') + ')';

// Tier-appropriate gold closers — replacing the leaked sentence
const GOLD_CLOSERS = [
  'A textbook gold-tier match — pour without second-guessing.',
  'One of the great pairings on the list — recommend confidently.',
  'A headline gold call the table will remember.',
  'Peak match for this combination — the kind of pour that earns a regular.',
  'A definitive recommendation — Gold standard.',
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let fixed = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Quick filter: legacy gold notes start with "* "
  if (line.indexOf('"* ') === -1) continue;
  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  if (!/^\* /.test(text)) continue;

  const [a, b] = key.split('|');

  // Look for a sentence in the note where another bottle is the subject
  // Find sentences (split by ". ") and check each
  const sentences = text.split(/\.\s+/);
  let leakSentenceIdx = -1;
  let leakedBottle = null;

  for (let s = 0; s < sentences.length; s++) {
    const sent = sentences[s];
    for (const bn of BOTTLES) {
      if (bn === a || bn === b) continue;
      if (a.indexOf(bn) !== -1 || b.indexOf(bn) !== -1) continue;
      if (sent.indexOf(bn) === -1) continue;
      const escName = bn.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      // Bottle is subject of sentence: starts with "{Bottle}'s" or "{Bottle} {verb}"
      if (new RegExp("^" + escName + "'s\\s+\\w+").test(sent)
          || new RegExp("^" + escName + "\\s+" + verbAlt).test(sent)) {
        leakSentenceIdx = s;
        leakedBottle = bn;
        break;
      }
    }
    if (leakSentenceIdx >= 0) break;
  }

  if (leakSentenceIdx < 0) continue;

  // Strip the leaked sentence and any subsequent sentences (they were probably part of the leak)
  // Then append a clean gold closer
  const kept = sentences.slice(0, leakSentenceIdx).join('. ');
  const canon = key.split('|').sort().join('::');
  const idx = hashPair(canon + '|legacy-gold-fix') % GOLD_CLOSERS.length;
  const restored = (kept.endsWith('.') ? kept : kept + '.') + ' ' + GOLD_CLOSERS[idx];

  lines[i] = prefix + JSON.stringify(restored) + comma;
  fixed++;
}

console.log('=== FIX LEGACY GOLD LEAKS ===');
console.log('Notes restored:', fixed);
console.log('Process time:', (Date.now()-t0) + 'ms');

if (fixed === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
