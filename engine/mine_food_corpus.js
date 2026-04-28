// engine/mine_food_corpus.js
//
// Scans the editorial (non-templated) FxF notes in pairing-notes.js, extracts
// reusable phrase fragments grouped by tier and shape, and writes
// engine/food_corpus_mined.js — the FxF analogue to corpus_mined_all_tiers.js
// (which feeds DxF). The generator can then pull verdict snippets, transition
// phrases, and body shapes from the mined corpus instead of recycling six
// hardcoded shape phrases.
//
// Mining heuristics:
//
//   1. Verdict snippets: the clause AFTER the tier label in editorial notes.
//      e.g. "Strong; reliable on the truffle fries" → "reliable on the
//      truffle fries". Index by archetype + tier so the corpus can return
//      varied closers when the generator needs one.
//
//   2. Transition phrases: the clause that opens an editorial body, before
//      the first em-dash or colon. e.g. "The filet's lean buttery tenderness
//      meets the truffle fries' parmesan-and-truffle fry weight" — these are
//      the "tasting-note-led" openers DxF uses heavily and FxF does not.
//
//   3. Verb / connective vocabulary: extract verbs that connect two
//      kitchen-spec'd subjects. Used to expand BRIDGE_VERBS in the generator.
//
//   4. Severity language for AVOID: extract substitution patterns from the
//      16 hand-curated AVOID notes (Cowboy Ribeye × Crab Cake, etc.) so the
//      DUPLICATION templates can mirror that voice.
//
// Output: a structured corpus keyed by archetype × tier × shape.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');

const repo = path.resolve(__dirname, '..');
const taxonomy = require('./pairing_engine_taxonomy');

const ctx = {}; vm.createContext(ctx);
const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repo, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
load('pairing-map-v2.js', 'PAIRING_MAP');
load('pairing-notes.js', 'PAIRING_NOTES');

const FOOD_CATS = taxonomy.FOOD_CATS;
const allFoods = ctx.PAIRING_MAP.filter(e => FOOD_CATS.has(e.category));
const foodNames = new Set(allFoods.map(f => f.name));
const foodByName = {};
for (const f of allFoods) foodByName[f.name] = f;

// Templated signatures (kept in sync with regenerate_food_x_food.js).
// Mining inverts this — anything that DOES NOT match is editorial.
const TEMPLATED_SIGS = [
  /the call holds at neutral register/,
  /the courses share the table without crowding/,
  /the courses share the meal without competing/,
  /two desserts share the close without crowding/,
  /the close composes without strain/,
  /the meal's bookends/,
  /side composes cleanly with the cut/,
  /side carries its register against the cut/,
  /headline side pairing for/,
  /the side that completes the steak plate/,
  /side-on-steak call lands at full register/,
  /reliable side-on-steak match/,
  /side reads as a measured plate companion/,
  /side sits without pulling focus/,
  /the dessert that defines the close/,
  /the textbook close to a steak meal/,
  /classic steak-house transition into/,
  /reliable steak-house finish/,
  /a measured close to the meal/,
  /soup-or-salad frames the steak course cleanly/,
  /reliable opener for the steak course/,
  /reliable opener for the cut/,
  /the starter sets up the cut at full register/,
  /the starter composes cleanly before the cut/,
  /the starter sits without crowding the cut/,
  /the side reads as a measured plate companion/,
  /two protein courses on one table/,
  /two cuts on one table/,
  /two mains on one table/,
  /the bookends compose at neutral register/,
  /the close lands without conflict/,
  /the close holds without crowding/,
  /the close composes neutrally/,
  /the side hands off cleanly to the close/,
  /both proteins land without crowding/,
  /the meal carries the cut and the main cleanly/,
  /both cuts land cleanly when the table splits/,
  /both proteins share the meal/,
  /the table opens with both courses cleanly/,
  /the split-starter call composes without crowding/,
  /the opening pair holds at table register/,
  /the dessert split composes cleanly/,
  /the dessert split holds at neutral register/,
  /the dessert pair frames the close cleanly/,
  /the close lands at full register when the table splits desserts/,
  /both desserts hold the close at full register/,
  /the headline call/,
  /reliable match across the courses/,
  /the pairing that defines the meal/,
  /the courses don't share register/,
  /the courses can't share register/,
  /the meal arc carries from opener to dessert/,
  /the meal arc lands at full register/,
  /the bookends earn their place together/,
  /the close composes from the opener/,
  /the openers compose cleanly together/,
  /the opening courses compose at full register/,
  /the headline opener pair for the meal/,
  /the openers frame the meal cleanly/,
  /both openers earn their place on the meal/,
  /both openers sit cleanly without pulling focus/,
  /the table-set call pairs the opener with the side/,
  /the starter and the side compose into the meal cleanly/,
  /the starter and the side carry the table cleanly/,
  /the opener and the side compose without crowding/,
  /the starter sets up cleanly for the side-on-main course/,
  /the starter and the side share the meal without crowding/,
  /the side is plated for the main course/,
  /both items hold their register/,
  /the soup-or-salad and the side share the table/,
  /the opener and the side hold their register together/,
  /the soup-or-salad and the side hold at neutral register/,
  /both items earn their place without pulling focus/,
  /safe call, neither soars nor fights/,
  /the meal resolves without strain/,
  /both sides hold at neutral register/,
  /the call composes without crowding/,
  /safe call when the table doubles up on sides/,
  /both sides earn their place on the meal/,
  /the two sides hold the plate at full register/,
  /the side composes neutrally into the dessert/,
  /the close lands cleanly after the side/,
  /the call holds, neither soars nor fights/,
  /the meal arc holds without crowding/,
  /the side gives way to the dessert/,
  /reliable side for the main/,
  /reliable opener for the main/,
  /the soup-or-salad sets the table/,
  /no interaction at the table, no conflict/,
  /both belong on the meal without interacting at the table/,
  /the table carries both cleanly/,
  /both earn their place without crossing paths/,
  /different courses, both belong on the meal/,
  /no flavor clash either way/,
  /nothing crosses from the side to the dessert/,
  /the close lands without carryover from the side/,
  /clean transition into the close/,
  /the close opens fresh/,
  /the bookends compose without interaction at the table/,
  /the bookends share the table without crossing paths/,
  /clean arc from open to close, no interaction between/,
  /no flavor conflict, sequence them or share the table/,
  /the table can build them together or in order/,
  /no conflict however the table orders them/,
  /sequence them or share, neither reads off/,
  /no flavor conflict, sequence or share the table/,
  /the table builds either way/,
  /either timing holds/,
  /clean transition or together if the table wants/,
  /sequence them or share, neither overshadows/,
  /the meal closes without strain from the side/,
  /sequence them as opener and close or share the table/,
  /\bno clash\b/,
  /no conflict across the meal/,
  /both bookends earn their place without conflict/,
  /share the meal without strain/,
  /the table doubles up on/,
  /the meal goes redundant/,
  /both bring \w+ as the headline/,
  /share \w+ as the primary character/,
  /the meal doubles down without contrast/,
  /the side call holds at neutral register/,
  /the opener sits without competing/,
  /both belong on the meal, no flavor clash/,
  /safe alongside, but not the headline pick/,
  /safe opener, but not the headline pick/,
  /safe alongside, but neither course defines the meal/,
];

function isTemplated(note) {
  if (!note) return false;
  return TEMPLATED_SIGS.some(re => re.test(note));
}

// Build (a|b -> tier) lookup
const tierByKey = new Map();
for (const e of ctx.PAIRING_MAP) {
  for (const tier of ['gold', 'excellent', 'strong', 'works', 'avoid']) {
    if (!Array.isArray(e[tier])) continue;
    for (const t of e[tier]) tierByKey.set(e.name + '|' + t, tier);
  }
}

// Archetype mapping (mirrors pairing_engine_generator.js logic)
const CATEGORY_WEIGHT = { 'steak': 1, 'main': 2, 'starter': 3, 'soup-salad': 4, 'side': 5, 'dessert': 6 };
function archetypeFor(catA, catB) {
  if (catA === catB) {
    return ({
      'steak': 'STEAK_PAIR', 'main': 'MAIN_PAIR', 'starter': 'STARTER_PAIR',
      'soup-salad': 'SOUP_SALAD_PAIR', 'side': 'SIDE_PAIR', 'dessert': 'DESSERT_PAIR'
    })[catA];
  }
  const a = CATEGORY_WEIGHT[catA] <= CATEGORY_WEIGHT[catB] ? catA : catB;
  const b = a === catA ? catB : catA;
  if (a === 'steak' && b === 'main') return 'STEAK_MAIN';
  if (a === 'steak' && b === 'starter') return 'STEAK_STARTER';
  if (a === 'steak' && b === 'soup-salad') return 'STEAK_SOUP_SALAD';
  if (a === 'steak' && b === 'side') return 'STEAK_SIDE';
  if (a === 'steak' && b === 'dessert') return 'COURSE_TO_DESSERT';
  if (a === 'main' && b === 'starter') return 'MAIN_STARTER';
  if (a === 'main' && b === 'soup-salad') return 'MAIN_SOUP_SALAD';
  if (a === 'main' && b === 'side') return 'MAIN_SIDE';
  if (a === 'main' && b === 'dessert') return 'COURSE_TO_DESSERT';
  if (a === 'starter' && b === 'soup-salad') return 'STARTER_SOUP_SALAD';
  if (a === 'starter' && b === 'side') return 'STARTER_SIDE';
  if (a === 'starter' && b === 'dessert') return 'STARTER_TO_DESSERT';
  if (a === 'soup-salad' && b === 'side') return 'SOUP_SALAD_SIDE';
  if (a === 'soup-salad' && b === 'dessert') return 'SOUP_SALAD_TO_DESSERT';
  if (a === 'side' && b === 'dessert') return 'SIDE_TO_DESSERT';
  return 'GENERIC_FOOD_PAIR';
}

// ── EXTRACT VERDICT SNIPPETS ────────────────────────────────────────────
// Editorial verdict pattern: "[tier label]; <verdict snippet>"
// We grab the snippet (up to 90 chars) for each tier × archetype combo.
function extractVerdict(note, tierLabel) {
  // Look for the tier label at sentence start (most common form)
  // e.g. "Strong; reliable opener for the cut." → "reliable opener for the cut"
  const re = new RegExp('\\b' + tierLabel + ';\\s+([^.]+?)(?:\\.|$)', 'i');
  const m = note.match(re);
  if (!m) return null;
  let v = m[1].trim();
  // Don't capture follow-on "Pair X with Y..." substitution clauses
  v = v.replace(/\s+(?:Pair|Pour|Stand|Hold|Order|Save|Suggest|Reach|Steer|Route)\b.*$/i, '');
  if (v.length < 6 || v.length > 110) return null;
  return v;
}

// Tier label canonical form per tier
const TIER_LABEL = { gold: 'Gold standard', excellent: 'Excellent', strong: 'Strong', works: 'Works', avoid: 'Avoid' };

// Food-name leak guard: verdicts that mention specific food names cannot be
// safely reused across different pairs (e.g. a verdict ending "reliable side
// for the trout" cannot drop into a salmon pair). Skip any extracted verdict
// whose normalized text contains any of these food-identifying tokens.
const FOOD_LEAK_TOKENS = (function () {
  const out = new Set();
  for (const f of allFoods) {
    const n = f.name.toLowerCase();
    out.add(n);
    // Also add the canonical short-form references the engine uses
    if (n.includes(' ')) {
      const parts = n.split(/[\s-]+/).filter(p => p.length > 3 && !['with','and','the','for','plate'].includes(p));
      for (const p of parts) out.add(p);
    }
  }
  // Whitelist items that are too generic to be food-name-leaks. "chicken",
  // "fish", "beef" stay IN the leak set because they're SHORT_NAME references
  // to specific dishes (the chicken = Roast Half Chicken, the fish = Market Fish, etc.).
  for (const w of ['main','side','close','meal','table','course','plate','soup','salad','starter','opener','dessert','cut']) {
    out.delete(w);
  }
  return out;
})();

function leaksFoodName(verdict) {
  const v = verdict.toLowerCase();
  // Reject double-article artifacts ("the the chicken") that come from old
  // templated notes mis-classified as editorial.
  if (/\bthe the\b/.test(v)) return true;
  for (const token of FOOD_LEAK_TOKENS) {
    if (v.includes(token)) return true;
  }
  return false;
}

// ── EXTRACT BODY-OPENER (Pattern A material) ───────────────────────────
// Pattern: "<Item A> <verb-phrase> <Item B>" before the first em-dash or colon.
// Used to seed the new tasting-note-led opener for the upgraded generator.
function extractOpener(note) {
  // Strip the verdict tail
  const stripped = note
    .replace(/\b(?:Gold standard|Excellent|Strong|Works|Avoid)[;:].*$/, '')
    .trim();
  // Take first 1-2 clauses
  const firstClause = stripped.split(/\s+--\s+|\s+—\s+|:\s+/)[0];
  if (!firstClause) return null;
  if (firstClause.length < 12 || firstClause.length > 140) return null;
  return firstClause.trim();
}

// ── EXTRACT BODY-CONNECTIVES ────────────────────────────────────────────
// Phrases between subject and target that aren't the recycled six.
// e.g. "frames", "settles into", "primes the palate for", "doesn't carry into"
const RECYCLED = new Set([
  'meets', 'sits with', 'sits beside', 'reads alongside', 'holds against',
  'composes against', 'reads quietly against'
]);

function extractConnectives(note) {
  const out = [];
  // Look for "<the X-ish> <verb> <the Y-ish>" patterns (very rough)
  const m = note.match(/\bthe\s+[\w\-]+(?:\s+[\w\-]+){0,3}\s+([\w][\w\-]*(?:\s+[\w][\w\-]*){0,3})\s+the\s+[\w\-]+/);
  if (m && m[1] && m[1].length < 40 && !RECYCLED.has(m[1].toLowerCase())) {
    out.push(m[1].trim());
  }
  return out;
}

// ── MAIN MINING PASS ────────────────────────────────────────────────────

const corpus = {
  meta: {
    generatedAt: new Date().toISOString(),
    sourceCount: 0,        // editorial notes scanned
    extractedCount: 0,     // total fragments extracted
  },
  // Indexed by archetype.tier — list of mined verdict snippets per slot
  verdicts: {},
  // Indexed by archetype.tier — list of body-opener phrases (Pattern A material)
  openers: {},
  // Free-form connective vocabulary (deduped, sorted)
  connectives: new Set(),
  // AVOID-with-substitution exemplars (16 expected)
  avoidExemplars: [],
};

let editorialCount = 0;
let templatedCount = 0;

for (const k of Object.keys(ctx.PAIRING_NOTES)) {
  const idx = k.indexOf('|');
  const a = k.slice(0, idx);
  const b = k.slice(idx + 1);
  if (!foodNames.has(a) || !foodNames.has(b)) continue;
  const note = ctx.PAIRING_NOTES[k];
  if (!note) continue;
  if (isTemplated(note)) { templatedCount++; continue; }
  editorialCount++;

  const tier = tierByKey.get(k);
  if (!tier) continue;
  const archetype = archetypeFor(foodByName[a].category, foodByName[b].category);
  const slot = archetype + '.' + tier;

  // Verdict snippets — filter out anything that names a specific food, since
  // those can't be safely reused across other pairs.
  const v = extractVerdict(note, TIER_LABEL[tier]);
  if (v && !leaksFoodName(v)) {
    corpus.verdicts[slot] = corpus.verdicts[slot] || [];
    corpus.verdicts[slot].push(v);
    corpus.meta.extractedCount++;
  }
  // Openers
  const o = extractOpener(note);
  if (o) {
    corpus.openers[slot] = corpus.openers[slot] || [];
    corpus.openers[slot].push(o);
    corpus.meta.extractedCount++;
  }
  // Connectives
  for (const c of extractConnectives(note)) {
    corpus.connectives.add(c);
    corpus.meta.extractedCount++;
  }
  // AVOID exemplars
  if (tier === 'avoid' && /Pair\s.+\swith\s|Pour\s.+\sfor\s|Save\s.+\sfor\s|Stand\s.+\son its own/.test(note)) {
    corpus.avoidExemplars.push({ pair: k, archetype, note });
  }
}

corpus.meta.sourceCount = editorialCount;
corpus.meta.templatedSeen = templatedCount;

// Dedupe verdict snippets
for (const slot of Object.keys(corpus.verdicts)) {
  const seen = new Set();
  corpus.verdicts[slot] = corpus.verdicts[slot].filter(v => {
    const k = v.toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
// Dedupe openers
for (const slot of Object.keys(corpus.openers)) {
  const seen = new Set();
  corpus.openers[slot] = corpus.openers[slot].filter(o => {
    const k = o.toLowerCase().replace(/\s+/g, ' ');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
// Sort connectives
const connectivesArr = Array.from(corpus.connectives).sort();

// Build output
const out = {
  meta: corpus.meta,
  verdicts: corpus.verdicts,
  openers: corpus.openers,
  connectives: connectivesArr,
  avoidExemplars: corpus.avoidExemplars,
};

const outPath = path.join(repo, 'engine/food_corpus_mined.js');
const lines = [
  '// engine/food_corpus_mined.js',
  '// AUTO-GENERATED by mine_food_corpus.js -- do not hand-edit.',
  '// Regenerate: node engine/mine_food_corpus.js',
  '//',
  '// Sources: ' + editorialCount + ' editorial FxF notes scanned.',
  '// Generated: ' + corpus.meta.generatedAt,
  '',
  "'use strict';",
  '',
  'const FOOD_CORPUS = ' + JSON.stringify(out, null, 2) + ';',
  '',
  'module.exports = FOOD_CORPUS;',
  '',
];
fs.writeFileSync(outPath, lines.join('\n'));

console.log('=== FOOD CORPUS MINING ===');
console.log('Editorial scanned:    ' + editorialCount);
console.log('Templated skipped:    ' + templatedCount);
console.log('Total fragments:      ' + corpus.meta.extractedCount);
console.log('Verdict slots:        ' + Object.keys(corpus.verdicts).length);
console.log('Opener slots:         ' + Object.keys(corpus.openers).length);
console.log('Unique connectives:   ' + connectivesArr.length);
console.log('AVOID exemplars:      ' + corpus.avoidExemplars.length);
console.log('Wrote: ' + path.relative(repo, outPath));

const slotSizes = Object.entries(corpus.verdicts).map(([s, arr]) => [s, arr.length]).sort((a, b) => b[1] - a[1]);
console.log('\nTop 10 verdict slots by count:');
for (const [s, n] of slotSizes.slice(0, 10)) console.log('  ' + s + ': ' + n);Exemplars.length);
console.log('Wrote: ' + path.relative(repo, outPath));

const slotSizes = Object.entries(corpus.verdicts).map(([s, arr]) => [s, arr.length]).sort((a, b) => b[1] - a[1]);
console.log('\nTop 10 verdict slots by count:');
for (const [s, n] of slotSizes.slice(0, 10)) console.log('  ' + s + ': ' + n);
Exemplars.length);
console.log('Wrote: ' + path.relative(repo, outPath));

const slotSizes = Object.entries(corpus.verdicts).map(([s, arr]) => [s, arr.length]).sort((a, b) => b[1] - a[1]);
console.log('\nTop 10 verdict slots by count:');
for (const [s, n] of slotSizes.slice(0, 10)) console.log('  ' + s + ': ' + n);
