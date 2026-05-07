'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');

function hashPair(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = ((h << 5) - h + seed.charCodeAt(i)) | 0;
  return Math.abs(h);
}

// Old closers (5) → distribute across 7 NEW variants (excluding the 5 existing,
// since hash distribution on 5 of 12 still leaves recycling). For best variety,
// rewrite each existing closer to a random one of the 7 new ones.
const NEW_CLOSERS = [
  'Avoid; route the table to a better-fit pour.',
  'Avoid; redirect the order — the alternatives carry it.',
  'Avoid; lead with the alternatives instead.',
  'Avoid; the better calls are above.',
  'Avoid; the listed alts pair where this does not.',
  'Avoid; recommend one of the alternatives.',
  'Avoid; offer the alts at the table — they fit.',
];

const NEW_SAVES_TPL = [
  'Pour the {drink} on {saveFor} instead.',
  'Reserve the {drink} for {saveFor}.',
  '{drink} lands on {saveFor} — not here.',
];

// Match each old closer; we'll rewrite ~half of them to new variants per pair
// (deterministic hash), keeping the other half as-is for backwards consistency.
const CLOSER_PATTERNS = [
  /Avoid; reach for any of those instead\./g,
  /Avoid; the alts above are the call\./g,
  /Avoid; pick from the alternatives\./g,
  /Avoid; one of those is the move\./g,
  /Avoid; steer the table to the alternatives\./g,
];

// Match save phrases — capture drink name and saveFor
const SAVE_PATTERNS = [
  /Save the (.+?) for (the steak course|another course)\./g,
  /(.+?) belongs on (the steak course|another course)\./g,
  /Hold the (.+?) for (the steak course|another course)\./g,
];

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');
const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;

let closerSwaps = 0, saveSwaps = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (line.indexOf('Avoid;') === -1 && line.indexOf('belongs on the steak course') === -1
      && line.indexOf('Save the') === -1 && line.indexOf('Hold the') === -1
      && line.indexOf('belongs on another course') === -1) continue;

  const m = lineRe.exec(line);
  if (!m) continue;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  let modified = false;
  const canon = key.split('|').sort().join('::');

  // Closer rewriting: ~50% chance of swap (hash-based) per pair
  for (const p of CLOSER_PATTERNS) {
    if (!p.test(text)) { p.lastIndex = 0; continue; }
    p.lastIndex = 0;
    text = text.replace(p, (orig) => {
      // Hash decides if we keep original or pick new
      const h = hashPair(canon + '|closer');
      // Distribute across the original 5 + 7 new = 12 variants
      // For backwards compat, half stay as original; half rotate to new
      if ((h & 0xff) >= 100) {  // ~60% keep original
        return orig;
      }
      const idx = (h >> 8) % NEW_CLOSERS.length;
      closerSwaps++;
      return NEW_CLOSERS[idx];
    });
    modified = true;
  }

  // Save-phrase rewriting: ~50% chance of swap
  for (const p of SAVE_PATTERNS) {
    if (!p.test(text)) { p.lastIndex = 0; continue; }
    p.lastIndex = 0;
    text = text.replace(p, (orig, drink, saveFor) => {
      const h = hashPair(canon + '|save');
      if ((h & 0xff) >= 100) return orig;
      const idx = (h >> 8) % NEW_SAVES_TPL.length;
      saveSwaps++;
      return NEW_SAVES_TPL[idx].replace('{drink}', drink).replace('{saveFor}', saveFor);
    });
    modified = true;
  }

  if (modified) lines[i] = prefix + JSON.stringify(text) + comma;
}

console.log('=== BREAK AVOID CLOSER RECYCLING ===');
console.log('Closer swaps:', closerSwaps);
console.log('Save phrase swaps:', saveSwaps);
console.log('Process time:', (Date.now()-t0) + 'ms');

if (closerSwaps + saveSwaps === 0) { console.log('[NOOP]'); process.exit(0); }

const out = lines.join('\n');
const tmp = NOTES_FILE + '.tmp.' + process.pid;
fs.writeFileSync(tmp, out);
fs.renameSync(tmp, NOTES_FILE);
console.log('[OK] wrote ' + out.length + ' chars');
console.log('Total: ' + (Date.now()-t0) + 'ms');
