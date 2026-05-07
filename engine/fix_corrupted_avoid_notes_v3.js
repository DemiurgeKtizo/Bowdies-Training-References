'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let fixed = 0;

// Anchor body match on Avoid; closer to split correctly
const PATTERNS = [
  /^Reserve the (.+? Avoid;[^.]+\.) (.+) for (the steak course|another course)\.$/,
  /^Pour the (.+? Avoid;[^.]+\.) (.+) on (the steak course|another course) instead\.$/,
  /^(.+? Avoid;[^.]+\.) (.+) lands on (the steak course|another course) — not here\.$/,
];

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.indexOf('Reserve the ') === -1
      && line.indexOf('Pour the ') === -1
      && line.indexOf('lands on') === -1) continue;

  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  if (text.indexOf(' overpowers ') === -1) continue;

  let restored = null;
  for (const p of PATTERNS) {
    const cm = p.exec(text);
    if (!cm) continue;
    const [, body, drinkName, saveFor] = cm;
    restored = body + ' ' + drinkName + ' belongs on ' + saveFor + '.';
    break;
  }
  if (restored === null) continue;
  lines[i] = prefix + JSON.stringify(restored) + comma;
  fixed++;
}

console.log('=== FIX CORRUPTED AVOID NOTES v3 ===');
console.log('Notes restored:', fixed);

if (fixed === 0) process.exit(0);
const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
