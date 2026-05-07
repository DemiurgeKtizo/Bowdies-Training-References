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

// Patterns of corruption (3 forms based on 6 save-phrase template variants)
//   1. "Reserve the {body} {drink} for {saveFor}." (already fixed in v1)
//   2. "Pour the {body} {drink} on {saveFor} instead."
//   3. "{body} {drink} lands on {saveFor} — not here." (no leading prefix)
const PATTERNS = [
  // "Reserve the X for Y." — the corrupted form has body in X, drink at end
  { re: /^Reserve the (.+) (.+) for (the steak course|another course)\.$/ },
  // "Pour the X on Y instead." — body in X, drink at end
  { re: /^Pour the (.+) (.+) on (the steak course|another course) instead\.$/ },
  // "X lands on Y — not here." — body in X (no prefix)
  { re: /^(.+) (.+) lands on (the steak course|another course) — not here\.$/ },
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

  // Each candidate corruption pattern requires the line to ALSO contain " overpowers "
  // and " Avoid; " — those are the canonical avoid-template markers, used as guard.
  if (text.indexOf(' overpowers ') === -1 || text.indexOf(' Avoid;') === -1) continue;

  let restored = null;
  for (const p of PATTERNS) {
    const cm = p.re.exec(text);
    if (!cm) continue;
    const [, body, drinkName, saveFor] = cm;
    // Sanity: body must end with the avoid closer (Avoid; X.)
    if (!/Avoid;[^.]+\.$/.test(body)) continue;
    restored = body + ' ' + drinkName + ' belongs on ' + saveFor + '.';
    break;
  }
  if (restored === null) continue;

  lines[i] = prefix + JSON.stringify(restored) + comma;
  fixed++;
}

console.log('=== FIX CORRUPTED AVOID NOTES v2 ===');
console.log('Notes restored:', fixed);
console.log('Process time:', (Date.now()-t0) + 'ms');

if (fixed === 0) { console.log('[NOOP]'); process.exit(0); }

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars');
console.log('Total time:', (Date.now()-t0) + 'ms');
