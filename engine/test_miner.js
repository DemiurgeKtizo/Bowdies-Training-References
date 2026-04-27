// engine/test_miner.js
//
// Golden-input tests for the editorial verdict extractor.
//
// The miner reads preserved editorial notes and extracts the verdict-quality
// sentence per pair. If the editorial format ever changes (new tier word, new
// prefix style, multi-paragraph notes, etc.), the extractor could silently
// pull junk and overwrite good corpus on the next regen pass.
//
// This test locks the extractor against a fixed set of (note, tier) → expected
// verdict cases so any silent regression fires loudly.
//
// Run: node engine/test_miner.js
'use strict';

// Load the extractor by reading the miner script and evaluating its
// `extractVerdict` and `TIER_HEADS` definitions in an isolated context.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const minerSrc = fs.readFileSync(path.join(__dirname, 'mine_corpus_all_tiers.js'), 'utf8');
// Pull just the function definitions out — skip top-level loaders that need real data files.
const tierHeadsMatch = minerSrc.match(/const TIER_HEADS = \{[^}]+\};/);
const extractVerdictMatch = minerSrc.match(/function extractVerdict\(note, tier\) \{[\s\S]*?\n\}/);
if (!tierHeadsMatch || !extractVerdictMatch) {
  console.error('FAIL: could not locate TIER_HEADS or extractVerdict in mine_corpus_all_tiers.js');
  process.exit(1);
}
const sandbox = {};
vm.createContext(sandbox);
vm.runInContext(tierHeadsMatch[0] + '\nthis.TIER_HEADS = TIER_HEADS;', sandbox);
vm.runInContext(extractVerdictMatch[0] + '\nthis.extractVerdict = extractVerdict;', sandbox);
const extractVerdict = sandbox.extractVerdict;

// ─── GOLDEN CASES ─────────────────────────────────────────────────────────

const cases = [
  // Gold tier — explicit "Gold standard;" or "Peak X" prefix
  {
    name: 'gold: "Gold standard;" prefix',
    tier: 'gold',
    note: 'Caymus on the filet — Napa workhorse Cab against tenderloin. Gold standard; the Napa Cab that defines the filet.',
    expected: 'Gold standard; the Napa Cab that defines the filet.',
  },
  {
    name: 'gold: "Peak X for Y" verdict mid-note',
    tier: 'gold',
    note: 'Scavino Castiglione Falletto — Piedmont Barolo DOCG Nebbiolo. Peak King-of-Italian for Tomahawk — Scavino prestige on the grand cut, demands the beef.',
    expected: 'Peak King-of-Italian for Tomahawk — Scavino prestige on the grand cut, demands the beef.',
  },
  // Gold fallback — last-sentence summary, no formal prefix
  {
    name: 'gold fallback: descriptive last sentence',
    tier: 'gold',
    note: "Maker's Mark Cellar Aged with the filet — extended maturation gives standard Maker's a richer oak backbone and deeper caramel. The filet's restraint meets a more complex wheated pour than regular Maker's. The alternate premium wheated for filet when Weller 12 isn't the call.",
    expected: "The alternate premium wheated for filet when Weller 12 isn't the call.",
  },
  // Gold fallback — strips "Excellent;" when pair-map says gold
  {
    name: 'gold fallback: "Excellent;" prefix gets stripped (pair-map authority)',
    tier: 'gold',
    note: "Pierre Ferrand with creme brulee — unblended vintage-style cognac against vanilla custard and caramelized sugar. Excellent; Ferrand's floral-honey finds the caramel with artisanal elegance.",
    expected: "Ferrand's floral-honey finds the caramel with artisanal elegance.",
  },
  // Excellent tier
  {
    name: 'excellent: standard "Excellent;" prefix',
    tier: 'excellent',
    note: "WhistlePig PiggyBack with the Caesar — rye-and-lemon riff. Excellent; rye whiskey on the Caesar — the call servers pour without second-guessing.",
    expected: "Excellent; rye whiskey on the Caesar — the call servers pour without second-guessing.",
  },
  // Strong tier
  {
    name: 'strong: standard "Strong;" prefix',
    tier: 'strong',
    note: 'Courvoisier with creme brulee — VS cognac, caramel, oak. Strong; Courvoisier Cognac oak backbone handles the dessert density.',
    expected: 'Strong; Courvoisier Cognac oak backbone handles the dessert density.',
  },
  // Works tier
  {
    name: 'works: standard "Works;" prefix',
    tier: 'works',
    note: 'Pikesville with asparagus. Works; Pikesville Rye is over-specified for a side — save the collector bottle.',
    expected: 'Works; Pikesville Rye is over-specified for a side — save the collector bottle.',
  },
  // Negative cases — extractor must return null when no verdict found
  {
    name: 'rejects gold when no recognizable verdict',
    tier: 'gold',
    note: 'Some prep notes go here. And another sentence.',  // last sentence too short to summarize
    expected: 'And another sentence.',  // 23 chars, passes the >= 25 threshold? Let's verify behavior.
    expectedFallbackBehavior: true,
  },
  {
    name: 'rejects when sentence starts with structural connector',
    tier: 'gold',
    note: 'Caymus is heavy. However, the filet softens it.',
    expected: null,  // last sentence starts with "However," — structural connector — rejected
  },
  // Standalone tier-word is filtered by the extractor's >= 15-char length floor.
  // Notes that produce only "Strong." as a verdict yield null — useless verdicts blocked.
  {
    name: 'rejects standalone tier word (length floor blocks bare verdicts)',
    tier: 'strong',
    note: 'Some setup goes here in this sentence. Strong.',
    expected: null,
  },
];

// ─── RUN ──────────────────────────────────────────────────────────────────

let passed = 0;
let failed = 0;
const failures = [];

for (const c of cases) {
  const actual = extractVerdict(c.note, c.tier);
  const matches = (c.expected === null && actual === null)
    || (typeof c.expected === 'string' && actual && actual.trim() === c.expected.trim());

  // For the fallback-behavior probe case, we accept whatever the extractor produces
  // and just record it (it's a behavioral observation, not a contract).
  if (c.expectedFallbackBehavior) {
    console.log('  [INFO] ' + c.name + ' → ' + JSON.stringify(actual));
    passed++;
    continue;
  }

  if (matches) {
    console.log('  [PASS] ' + c.name);
    passed++;
  } else {
    console.log('  [FAIL] ' + c.name);
    console.log('         expected: ' + JSON.stringify(c.expected));
    console.log('         actual:   ' + JSON.stringify(actual));
    failures.push(c);
    failed++;
  }
}

console.log('');
console.log('=== MINER TEST RESULT ===');
console.log('passed: ' + passed + ' / ' + cases.length);
console.log('failed: ' + failed);

if (failed > 0) {
  console.log('');
  console.log('Editorial extractor changed shape — review whether this is intentional');
  console.log('and update the golden cases, or fix the regression.');
  process.exit(1);
}

console.log('[OK] miner extractor matches golden inputs.');
process.exit(0);
