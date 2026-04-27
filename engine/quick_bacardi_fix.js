// Direct line replacement on pairing-notes.js — no VM context, no full reload.
// The new note text was verified clean by test_bacardi_regen.js.
'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const notesPath = path.join(repo, 'pairing-notes.js');

const NEW_NOTE = "Bacardi Rum -- Carta Blanca, workhorse light rum, clean. The crisp body lifts the seafood tower, and the clean profile carries the starter. Excellent; workhorse light rum on the seafood tower -- the kind of pour that earns a regular.";

let src = fs.readFileSync(notesPath, 'utf8');
const beforeSize = src.length;

const newJsonValue = JSON.stringify(NEW_NOTE);

const fwdRe = /^(\s*"Bacardi Rum\|Seafood Tower":\s*)"(?:[^"\\]|\\.)*",$/m;
const revRe = /^(\s*"Seafood Tower\|Bacardi Rum":\s*)"(?:[^"\\]|\\.)*",$/m;

const m1 = src.match(fwdRe);
const m2 = src.match(revRe);
console.log('Forward match:', m1 ? 'YES' : 'NO');
console.log('Reverse match:', m2 ? 'YES' : 'NO');
if (!m1 || !m2) { console.log('[ABORT] missing match'); process.exit(1); }

src = src.replace(fwdRe, '$1' + newJsonValue + ',');
src = src.replace(revRe, '$1' + newJsonValue + ',');

console.log('Size: ' + beforeSize + ' -> ' + src.length);

const backup = path.join(repo, 'pairing-notes.js.pre-bacardi-fix.bak');
fs.copyFileSync(notesPath, backup);
console.log('[OK] backup');

const tmp = notesPath + '.tmp';
fs.writeFileSync(tmp, src);
fs.renameSync(tmp, notesPath);
console.log('[OK] wrote pairing-notes.js');
