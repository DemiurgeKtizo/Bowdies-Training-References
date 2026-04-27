// engine/fix_seared_beef_in_editorial.js
//
// Surgical correction pass: replaces the phrase "seared beef" with
// "grilled beef" in any pair-note containing it. CLAUDE.md prohibits
// describing Bowdie's steaks as seared -- they are flame-grilled, rested,
// and oven-finished. The pre-grilled cleanup pass caught most of the drift
// but left these 15 unique pair-notes (30 mirror-keyed) untouched because
// they use the generic phrase "seared beef" rather than a steak-specific
// word.
//
// This is the canonical pattern for editorial fixes per CLAUDE.md:
//   "Edits should be applied via a script (e.g., fix_*_in_editorial.js)
//    that pattern-matches the specific factual error and replaces it
//    cleanly. Never blanket-edit editorial -- match the specific phrase,
//    replace with the correct phrase, log the count."
//
// Usage:
//   node engine/fix_seared_beef_in_editorial.js              # apply
//   node engine/fix_seared_beef_in_editorial.js --dry-run    # preview
//
// Pre-flight: writes pairing-notes.js.pre-seared-fix.bak before modifying.
// Post-flight: prints a count + diff sample, recommends re-running the
// health check.

'use strict';

const fs = require('fs');
const path = require('path');

const PHRASE = /\bseared beef\b/g;        // word-bounded, case-sensitive
const REPLACEMENT = 'grilled beef';

const REPO_ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(REPO_ROOT, 'pairing-notes.js');
const BACKUP_FILE = path.join(REPO_ROOT, 'pairing-notes.js.pre-seared-fix.bak');

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.indexOf('--dry-run') !== -1;

  const original = fs.readFileSync(NOTES_FILE, 'utf8');
  const matches = original.match(PHRASE) || [];
  console.log('=== fix_seared_beef_in_editorial ===');
  console.log('');
  console.log('matches found: ' + matches.length + ' (mirror-keyed; expect ~30 = ~15 unique pairs)');

  if (matches.length === 0) {
    console.log('Nothing to do.');
    process.exit(0);
  }

  // Sample diff lines BEFORE applying
  const beforeLines = original.split('\n');
  const sampleBefore = [];
  for (let i = 0; i < beforeLines.length && sampleBefore.length < 5; i++) {
    if (PHRASE.test(beforeLines[i])) {
      PHRASE.lastIndex = 0;  // reset regex state
      sampleBefore.push({ line: i + 1, text: beforeLines[i].trim() });
    }
  }
  PHRASE.lastIndex = 0;

  console.log('');
  console.log('Sample before (first 5):');
  for (const s of sampleBefore) {
    console.log('  L' + s.line + ': ' + s.text.slice(0, 180) + (s.text.length > 180 ? '...' : ''));
  }

  // Apply replacement
  PHRASE.lastIndex = 0;
  const updated = original.replace(PHRASE, REPLACEMENT);

  // Recount to verify
  const remaining = (updated.match(PHRASE) || []).length;
  console.log('');
  console.log('after replacement:');
  console.log('  replaced:           ' + matches.length);
  console.log('  remaining matches:  ' + remaining + ' (should be 0)');

  // Sample after
  const afterLines = updated.split('\n');
  const sampleAfter = [];
  for (const s of sampleBefore) {
    sampleAfter.push({ line: s.line, text: afterLines[s.line - 1].trim() });
  }
  console.log('');
  console.log('Sample after (same lines):');
  for (const s of sampleAfter) {
    console.log('  L' + s.line + ': ' + s.text.slice(0, 180) + (s.text.length > 180 ? '...' : ''));
  }

  if (dryRun) {
    console.log('');
    console.log('[DRY-RUN] no files modified.');
    process.exit(0);
  }

  // Backup, then write
  fs.writeFileSync(BACKUP_FILE, original);
  fs.writeFileSync(NOTES_FILE, updated);
  console.log('');
  console.log('[OK] backup written to: ' + path.relative(REPO_ROOT, BACKUP_FILE));
  console.log('[OK] pairing-notes.js updated.');
  console.log('');
  console.log('Next: run `node engine/engine_health_check.js` to confirm');
  console.log('      language drift warning clears, and `node engine/engine_snapshot_test.js`');
  console.log('      to confirm no anchor drift (none expected -- all 15 affected pairs');
  console.log('      are outside the 81-anchor set).');
}

main();
