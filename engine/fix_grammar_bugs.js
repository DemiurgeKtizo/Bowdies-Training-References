'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let theFixes = 0, possFixes = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.indexOf("'s's") === -1
      && line.indexOf('the The ') === -1) continue;

  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }

  let modified = false;

  // Fix 1: "Save the The X" / "Hold the The X" / "Pour the The X" / "Reserve the The X"
  // → "Save The X" / "Hold The X" / etc.
  text = text.replace(/\b(Save|Hold|Pour|Reserve) the The /g, (m, verb) => {
    theFixes++;
    modified = true;
    return verb + ' The ';
  });

  // Fix 2: "Word's's" → "Word's" (drinkPossessive applied twice on names ending in s)
  text = text.replace(/([A-Za-z])'s's\b/g, (m, ch) => {
    possFixes++;
    modified = true;
    return ch + "'s";
  });

  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== FIX GRAMMAR BUGS ===');
console.log('"the The X" fixes: ' + theFixes);
console.log('"X\'s\'s" fixes: ' + possFixes);

if (theFixes + possFixes === 0) process.exit(0);

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars in ' + (Date.now()-t0) + 'ms');
