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

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Quick reject: only check lines that begin (after possessive opening) with corruption prefix
  if (line.indexOf('Reserve the ') === -1 && line.indexOf('Pour the ') === -1) continue;

  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }

  // Detect corruption: starts with "Reserve the " or "Pour the " followed by a possessive
  // and ends with " {drink} for {saveFor}."
  const corruptRe = /^(Reserve the |Pour the )(.+) (.+) for (the steak course|another course)\.$/;
  const cm = corruptRe.exec(text);
  if (!cm) continue;
  const [, prefixWord, body, drinkName, saveFor] = cm;

  // Body should END with a closing period (Avoid; X.) so split correctly
  // Strip the "Reserve the " or "Pour the " prefix
  // Restore "X belongs on Y." save phrase
  const restored = body + ' ' + drinkName + ' belongs on ' + saveFor + '.';
  lines[i] = prefix + JSON.stringify(restored) + comma;
  fixed++;
}

console.log('=== FIX CORRUPTED AVOID NOTES ===');
console.log('Notes restored:', fixed);
console.log('Process time:', (Date.now()-t0) + 'ms');

if (fixed === 0) { console.log('[NOOP]'); process.exit(0); }

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars');
console.log('Total time:', (Date.now()-t0) + 'ms');
