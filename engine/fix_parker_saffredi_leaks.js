// Two surgical fixes:
//   1. Parker's Heritage × Vegetable Curry — drop the leaked
//      "Voyage 23's sea-character + anchovy is thematic — salt-meets-salt"
//      and replace with a clean tail.
//   2. Bone-In Filet × Saffredi — replace "peppercorn crust" with the
//      correct Bowdie's prep language ("flame-grilled char").
//
// Both fixes are direct line replacements on the source file (no full
// reload of the 14 MB notes object), atomic write via temp + rename.
'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const notesPath = path.join(repo, 'pairing-notes.js');

let src = fs.readFileSync(notesPath, 'utf8');
let changes = 0;

// ── Fix 1: Parker's Heritage × Vegetable Curry ─────────────────────────────
// Strip the leaked Voyage 23 sentence and replace with a generic clean close
const PARKER_OLD = "Works; Voyage 23's sea-character + anchovy is thematic -- salt-meets-salt.";
const PARKER_NEW = "Works; the bourbon depth carries the curry without overshooting.";
// The actual encoded string in the file uses regular -- (em-dash) — let's check
// both possibilities. JSON.stringify will escape em-dash as itself in UTF-8.
const variants = [
  ["Works; Voyage 23's sea-character + anchovy is thematic -- salt-meets-salt.", PARKER_NEW],
  ["Works; Voyage 23\\u2019s sea-character + anchovy is thematic -- salt-meets-salt.", PARKER_NEW],
];
for (const [old, neu] of variants) {
  if (src.includes(old)) {
    src = src.split(old).join(neu);
    console.log('[OK] Parker\'s Heritage curry leak fixed (' + old.substring(0, 40) + '...)');
    changes++;
  }
}
// Catch-all: any "Voyage 23.*anchovy" sentence inside the Parker's notes
const anyVoyageRe = /Works; Voyage 23[^.]+anchovy[^.]+\./g;
const anyMatches = src.match(anyVoyageRe);
if (anyMatches && anyMatches.length) {
  console.log('  found ' + anyMatches.length + ' Voyage-23 leak occurrence(s) -- replacing all');
  src = src.replace(anyVoyageRe, PARKER_NEW);
  changes += anyMatches.length;
}

// ── Fix 2: Bone-In Filet × Saffredi (peppercorn-crust factual error) ──────
// Replace "peppercorn crust" with "flame-grilled char" inside any Bone-In
// Filet pair-note. (Saffredi uses the phrase; we widen to protect against
// the same leak appearing elsewhere on Bowdie's steaks.)
const STEAKS = ['Bone-In Filet', 'Filet Mignon', 'Kansas City', 'Cowboy Ribeye', 'The Tomahawk', 'Porterhouse'];
const beforePepper = (src.match(/peppercorn crust/g) || []).length;
console.log('Total "peppercorn crust" mentions in file: ' + beforePepper);

// Surgically replace within the two known leaks — Bone-In Filet × Saffredi (mirror)
const SAFFREDI_OLD = 'Mediterranean herbs dovetail the peppercorn crust';
const SAFFREDI_NEW = 'Mediterranean herbs dovetail the flame-grilled char';
if (src.includes(SAFFREDI_OLD)) {
  const occurrences = src.split(SAFFREDI_OLD).length - 1;
  src = src.split(SAFFREDI_OLD).join(SAFFREDI_NEW);
  console.log('[OK] Saffredi peppercorn-crust fixed (' + occurrences + ' occurrence(s))');
  changes += occurrences;
}

if (changes === 0) {
  console.log('[NOOP] no patterns matched — investigate');
  process.exit(1);
}

// ── Backup + atomic write ─────────────────────────────────────────────────
const backup = path.join(repo, 'pairing-notes.js.pre-parker-saffredi-fix.bak');
fs.copyFileSync(notesPath, backup);
console.log('[OK] backup: ' + path.relative(repo, backup));

const tmp = notesPath + '.tmp';
fs.writeFileSync(tmp, src);
fs.renameSync(tmp, notesPath);
console.log('[OK] wrote pairing-notes.js (' + changes + ' total changes)');
