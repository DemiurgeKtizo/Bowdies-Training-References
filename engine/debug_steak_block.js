'use strict';
const fs = require('fs');
const path = require('path');
const file = path.resolve(__dirname, '..', 'pairing-map-v2.js');
const src = fs.readFileSync(file, 'utf8');

const startMarker = 'name: "Filet Mignon"';
const startIdx = src.indexOf(startMarker);
console.log('startIdx:', startIdx);
const tail = src.slice(startIdx);
const nextEntryRel = tail.search(/\n\s*\},\s*\n\s*\{\s*\n\s*name:/);
console.log('nextEntryRel:', nextEntryRel);

const endIdx = (nextEntryRel === -1) ? src.length : startIdx + nextEntryRel + 2;
const block = src.slice(startIdx, endIdx);
console.log('Block length:', block.length);
console.log('Block tail (last 200 chars):');
console.log(block.slice(-200));
console.log('---');

// Try the strong tier match
const tier = 'strong';
const tierRe = new RegExp('(' + tier + ':\\s*\\[)([^\\]]*)(\\])');
const m = block.match(tierRe);
console.log('strong tier match:', m ? 'YES (length ' + m[0].length + ')' : 'NO');
if (m) console.log('  first 200 chars of match:', m[0].slice(0, 200));
