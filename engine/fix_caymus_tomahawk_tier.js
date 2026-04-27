// Factual tier correction per CLAUDE.md "Editorial CAN be edited when it
// contains a factual error" — same principle applies in reverse for the
// pair-map: when editorial says STRONG and pair-map says GOLD, the editorial
// is the source of truth (it's the tableside reasoning) and the tier-list is
// what needs updating.
//
// Caymus Cabernet Sauvignon × The Tomahawk:
//   editorial verdict: "Strong Caymus for Tomahawk — Opus, Shafer, or
//                       Heitz Martha's peak higher for theatrical bone-in."
//   pair-map current:  GOLD on both sides
//   pair-map should be: STRONG on both sides
//
// Surgical fix — only touches these two specific tier lists. Logs counts
// of removals/additions so you can confirm exactly what changed.
'use strict';

const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const file = path.join(repo, 'pairing-map-v2.js');
let src = fs.readFileSync(file, 'utf8');

// Backup
const backup = file + '.pre-caymus-fix.bak';
fs.writeFileSync(backup, src);
console.log('[OK] backup: ' + path.relative(repo, backup));

let totalChanges = 0;

// 1. Tomahawk gold list — remove "Caymus Cabernet Sauvignon"
//    The pair-map uses block format like:  gold: ["Opus One", "Caymus Cabernet Sauvignon", ...],
//    We do a targeted replace inside The Tomahawk's entry.
function withinEntry(entryName, op) {
  // Find the entry block: from `name: "..."` to next `name:` or end of array
  const startMarker = 'name: "' + entryName + '"';
  const startIdx = src.indexOf(startMarker);
  if (startIdx === -1) { console.log('[ERR] not found: ' + entryName); return false; }
  // End of this entry: find the next "  {" or "  }," opening of the next entry
  const tail = src.slice(startIdx);
  const nextEntryRel = tail.search(/\n\s*\},\s*\n\s*\{\s*\n\s*name:/);
  const endIdx = (nextEntryRel === -1) ? src.length : startIdx + nextEntryRel + 2; // include the closing `},`
  const block = src.slice(startIdx, endIdx);
  const newBlock = op(block);
  if (newBlock !== null && newBlock !== block) {
    src = src.slice(0, startIdx) + newBlock + src.slice(endIdx);
    return true;
  }
  return false;
}

// Tomahawk: remove Caymus from gold, add to strong
if (withinEntry('The Tomahawk', (block) => {
  let b = block;
  // Remove "Caymus Cabernet Sauvignon" from the gold array
  const goldMatch = b.match(/(gold:\s*\[)([^\]]*)(\])/);
  if (!goldMatch) { console.log('[ERR] Tomahawk gold list not found'); return null; }
  let goldList = goldMatch[2];
  const before = goldList;
  goldList = goldList.replace(/\s*"Caymus Cabernet Sauvignon"\s*,?/, '').replace(/,\s*\]/, ']');
  if (goldList !== before) {
    console.log('  Tomahawk gold: removed Caymus Cabernet Sauvignon');
    totalChanges++;
  }
  b = b.replace(goldMatch[0], goldMatch[1] + goldList + goldMatch[3]);
  // Add to strong array (if not already there)
  const strongMatch = b.match(/(strong:\s*\[)([^\]]*)(\])/);
  if (!strongMatch) { console.log('[ERR] Tomahawk strong list not found'); return null; }
  let strongList = strongMatch[2];
  if (!strongList.includes('"Caymus Cabernet Sauvignon"')) {
    strongList = strongList.replace(/^(\s*)/, '$1"Caymus Cabernet Sauvignon", ');
    console.log('  Tomahawk strong: added Caymus Cabernet Sauvignon');
    totalChanges++;
    b = b.replace(strongMatch[0], strongMatch[1] + strongList + strongMatch[3]);
  }
  return b;
})) { /* applied */ }

// Caymus: remove Tomahawk from gold AND excellent, add to strong
if (withinEntry('Caymus Cabernet Sauvignon', (block) => {
  let b = block;
  for (const tierName of ['gold', 'excellent']) {
    const re = new RegExp('(' + tierName + ':\\s*\\[)([^\\]]*)(\\])');
    const m = b.match(re);
    if (!m) continue;
    let list = m[2];
    const before = list;
    list = list.replace(/\s*"The Tomahawk"\s*,?/, '').replace(/,\s*\]/, ']');
    if (list !== before) {
      console.log('  Caymus ' + tierName + ': removed The Tomahawk');
      totalChanges++;
    }
    b = b.replace(m[0], m[1] + list + m[3]);
  }
  // Add to strong (if not already)
  const strongMatch = b.match(/(strong:\s*\[)([^\]]*)(\])/);
  if (strongMatch) {
    let strongList = strongMatch[2];
    if (!strongList.includes('"The Tomahawk"')) {
      strongList = strongList.replace(/^(\s*)/, '$1"The Tomahawk", ');
      console.log('  Caymus strong: added The Tomahawk');
      totalChanges++;
      b = b.replace(strongMatch[0], strongMatch[1] + strongList + strongMatch[3]);
    }
  }
  return b;
})) { /* applied */ }

if (totalChanges === 0) {
  console.log('[NOOP] no changes needed.');
  process.exit(0);
}

fs.writeFileSync(file, src);
console.log('');
console.log('[OK] ' + totalChanges + ' tier-list changes written to pairing-map-v2.js');
console.log('Next: re-run the regen pipeline (or rerun the dxf regen for these specific pairs)');
