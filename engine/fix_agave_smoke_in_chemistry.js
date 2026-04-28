// engine/fix_agave_smoke_in_chemistry.js
//
// Replaces "agave smoke" with neutral "smoke" / "grilled smoke" in
// chemistry-claims.js. The original phrasing was mined from mezcal-DxF notes
// where it's accurate, but the clauses are shared across all "smoke" flavor
// matches — including FxF (Cowboy Ribeye × herb butter, Tomahawk × herb
// butter, etc.) where "agave" is wrong because the smoke is from the
// flame-grill, not from agave.
//
// Replacement strategy: drop "agave " before "smoke" so the clauses read as
// flavor-neutral. Both DxF (mezcal) and FxF (grilled char) read clean.
//
// Run: node engine/fix_agave_smoke_in_chemistry.js

'use strict';
const fs = require('fs');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const target = path.join(repo, 'chemistry-claims.js');

let src = fs.readFileSync(target, 'utf8');
fs.writeFileSync(target + '.pre-agave-fix.bak', src);

const before = src.match(/agave smoke/g) || [];
const beforeCount = before.length;

// Replace "agave smoke" -> "smoke" in clause strings.
// Keep "agave" intact in non-smoke clauses (e.g. "the clean additive-free
// agave lifts the burrata" stays — that's a valid mezcal reference).
src = src.replace(/agave smoke/g, 'smoke');

const after = src.match(/agave smoke/g) || [];
const afterCount = after.length;

// Also de-double "the smoke" if "agave " was the only modifier in front.
// e.g. "the agave smoke" -> "the smoke" already from above replace.

fs.writeFileSync(target, src);

console.log('Replacements: ' + (beforeCount - afterCount));
console.log('"agave smoke" remaining: ' + afterCount);

// Verify the file still parses
try {
  delete require.cache[target];
  require(target);
  console.log('chemistry-claims.js parses cleanly.');
} catch (err) {
  console.log('PARSE ERROR after fix: ' + err.message);
  process.exit(1);
}
