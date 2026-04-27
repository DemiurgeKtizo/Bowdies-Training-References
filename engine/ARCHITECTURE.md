# Engine Architecture

This document captures the request flow end-to-end: how a (drink, food, tier) triple becomes a finished pair-note. Read this first when debugging an unexpected output, or before making structural changes.

---

## Top-level flow

```
generate(drink, food, tier, ctx)
    │
    ├── enrich both (axes from enriched-profiles.js)
    ├── apply tier corrections if any
    ├── resolve drink profile  →  profileFor(drink)
    │
    ├── if tier === 'avoid':
    │       build avoid-template note (custom builder, 5 closer × 3 save variants)
    │       return
    │
    ├── pickAction(tier, drink, food)            ← deterministic verb picker
    ├── buildBody(drink, food, tier, ctx)        ← prose body using bridges + chemistry claim
    ├── pickVerdict(tier, drink, food, profile)  ← corpus-first verdict pick
    ├── apply COMPETITOR_REFS suffix if any
    │
    └── assemble final note (Pattern A or Pattern C)
```

---

## Profile resolution — `profileFor(drink)`

Five-layer precedence, first hit wins:

```
1. BOTTLE_PROFILE          (inline in drink_x_food_generator.js — 33 entries)
2. CURATED                 (engine/bottle_profiles_curated.js — 47 entries)
3. MINED                   (engine/bottle_profiles_mined.js — 99 entries, auto-generated)
4. WHISKEY_VOICE_DEFAULTS  (when drink class = BOURBON_BOLD; subclass: BOURBON / SCOTCH / IRISH / JAPANESE / CANADIAN / RYE)
5. ELEGANT_RED_VOICE_DEFAULTS (when drink class = ELEGANT_RED or BIG_RED; subclass: PINOT / CAB / NEBBIOLO / CHIANTI / RHONE / SPANISH / MALBEC / ZIN / CAB_FRANC / BORDEAUX / GENERIC_ELEGANT_RED)
6. DRINK_CLASS_DEFAULT      (catchall — 18 classes)
```

A profile contains: `tastingNotes` (optional array), `character` (string), `bridge1` (template with `{foodTarget}`), `bridge2` (template with `{foodSubj}`), `verdictHook` (string), optional `avoidLabel`.

When a bottle has both a curated profile AND a class-default base, the curated fields override. Mining produces partial profiles (no bridges) which fall back to class-default bridges.

---

## Body construction — `buildBody`

Two structural patterns, picked by whether the bottle has `tastingNotes`:

**Pattern A (em-dash setup)** — curated bottles with full tasting notes:
```
{Bottle name} -- {tastingNote1, tastingNote2, tastingNote3}.
The {bridge1 with foodTarget}, and {bridge2 with foodSubj}.
{verdict}
```

**Pattern C (character-led)** — uncurated bottles or `tier='works'`:
```
{Bottle name}'s {character} {action} {food}'s {foodCharacter}:
the {bridge1}, and the {bridge2}.
{verdict}
```

Pattern A reads as a tableside story (provenance first); Pattern C reads as a direct match-up (drink-character meets food-character).

The `bridge2` clause uses chemistry claims from `chemistry-claims.js` when (drinkFlavor × foodFlavor) match, otherwise falls back to the profile's bridge2 with `{foodSubj}` replaced by `FOOD_GENERIC_SHORT[foodCategory]` ("the cut" / "the side" / "the dessert" / etc.). Generic short-form is used in clause 2 to avoid modifier repetition like "bone-enhanced filet ... bone-enhanced cut".

---

## Verdict resolution — `pickVerdict`

Two-layer waterfall:

```
1. _editorialVerdict(tier, drink, food, profile)
   └── corpus-first: 12-gate filter stack on a pool merged from
       up to 4 source buckets. Returns null if pool empty after filtering.

2. VERDICT_PATTERNS[tier] + price-tier extras
   └── 30 base templates plus PREMIUM-only or BTG-only extras based
       on priceTierFor(drink). Deterministic md5 pick.
```

### Corpus pool merge order

```js
let entries = [];
add((tierBucket[dc] || {})[fc]);            // engine-class direct (mined corpus)
add((tierBucket[v9dc] || {})[v9fc]);        // v9-class direct (legacy EP)
add((tierBucket.DEFAULT || {})[v9fc]);      // DEFAULT class fallback
for (const fk of Object.keys(tierBucket[dc] || {})) if (fk !== fc) add(...);  // cross-food
if (v9dc !== dc) for (const fk in tierBucket[v9dc]) if (fk !== v9fc) add(...);  // cross-food v9
```

Filters reject mismatches. More candidates in the pool = higher corpus hit rate.

### The 12 filter gates (in order)

1. **Standalone tier word** — rejects bare `"Strong."` / `"Excellent."` corpus entries
2. **Slot validity** — rejects `{DRINK}-X` compound substitutions
3. **Food-noun filter** — rejects phrases mentioning a food noun not in the current pair (FOOD_NOUN_RX includes `marrow|crab|filet|ribeye|cowboy|tomahawk|...|strip|tenderloin|...`)
4. **Class-keyword filter** — rejects phrases mentioning a foreign drink class (BIG_RED ↔ ELEGANT_RED treated as compatible)
5. **ELEGANT_RED subclass filter** — rejects cross-varietal mismatches (a Pinot bottle won't get a Barolo phrase, a Cab won't get a Malbec phrase)
6. **BIG_RED subclass filter** — same as ELEGANT_RED via shared subclass detection
7. **Whiskey subclass filter** — rejects scotch phrases on bourbon, etc.
8. **Tequila/rum cross-class filter** — inside LIGHT_SPIRIT only
9. **`{DRINK}-X` compound rejection** — pre-substitution
10. **Bottle-name catalog filter** — rejects phrases naming a bottle not in current drink (~150 brand fragments — Pappy, Macallan, Caymus, Hillside Select, Jubilation, etc.)
11. **Age-variant template rejection** — `"{DRINK} 21 rides..."` rejected unless current bottle's name contains "21"
12. **Brand-stem age-variant filter** — post-substitution catch for the same pattern
13. **Flavor-noun validation** — flavor nouns mentioned in phrase must intersect drink tasting notes or food key flavors (catches "mint threads through spice" appearing on a non-mint, non-spice pair)

### Price-tier extras (`pickVerdict` only)

When corpus path returns null and we fall to templates, `priceTierFor(drink)` (from `engine/price_tiers.js`) gates which extras get mixed into the pool:

- `PREMIUM` → adds 6 collector/luxury templates ("the bottle the staff talks about", "the special-occasion call")
- `BTG` → adds 7 workhorse templates ("the value-pour fit", "the table's first pour")
- `MID` → no extras

Premium and BTG templates are tier-distributed (gold/excellent for PREMIUM, strong/works/excellent for BTG). The deterministic md5 pick spreads selection across all eligible variants.

---

## Avoid template — `if (tier === 'avoid')`

Custom branch separate from corpus lookup. Builds:

```
{Drink possessive} {character} overpowers {food possessive} {foodCharacter}
   -- the plate deserves {altsList}, not {a/an} {dcLabel}.
{closer} {save-clause}
```

Where:
- `altsList` = top 3 alternatives from food's tier-list (gold > excellent > strong) joined as `"X, Y, or Z"`
- `closer` = deterministic pick from 5 variants ("Avoid; reach for any of those instead.", "Avoid; the alts above are the call.", etc.)
- `save-clause` = deterministic pick from 3 variants ("Save the {drink} for {savefor}.", "{drink} belongs on {savefor}.", "Hold the {drink} for {savefor}.")
- `savefor` = "another course" if food IS a steak, else "the steak course"

Alternatives appear ONCE (not duplicated like the old template). Closer + save together produces 5×3 = 15 unique avoid forms.

---

## Mining pipeline

### `engine/mine_bottle_profiles.js`

Reads `pairing-notes.js` and `editorial-snippets.js`, extracts bottle-character paragraphs from preserved editorial. Output: `engine/bottle_profiles_mined.js`.

### `engine/mine_chemistry_claims.js`

Reads `editorial-snippets.js` and identifies (drinkFlavor × foodFlavor) intersection clauses. Output: `chemistry-claims.js` (147 entries).

### `engine/mine_gold_corpus.js`

Reads `pairing-notes.js`, filters to gold-tier pairs, classifies each via `_enrich → drinkClassFor / foodClassFor`, extracts the verdict-quality sentence per note (using `extractVerdict()` — same logic as the all-tier miner). Output: `engine/gold_corpus_mined.js`.

### `engine/mine_corpus_all_tiers.js`

Same as gold but covers excellent / strong / works / gold tiers. The tier iteration order (`['avoid','works','strong','excellent','gold']`) ensures gold-tier writes win when the same pair is in multiple tier lists. Output: `engine/corpus_mined_all_tiers.js`.

### Manual supplement

`engine/gold_corpus_supplement.js` — 7 hand-written gold-tier phrases for sparse (dc × fc) buckets where mining couldn't produce content (HEAVY_SPIRIT × DESSERT, COGNAC × DESSERT_LIGHT, etc.).

### Merge into EDITORIAL_PHRASES

At runtime, `_loadEditorialPhrases()` merges all four sources (v9 base + gold mined + all-tier mined + supplement) into a single tier-keyed corpus structure. Total active pool: ~6,094 unique entries.

---

## Critical invariants

These conditions must hold; the test scripts verify them.

### 1. Mining ↔ runtime classification parity

Both `mine_*_corpus.js` and runtime `_editorialVerdict` must classify entities identically. Both call `_enrich()` then `drinkClassFor()` / `foodClassFor()`. If one side skips enrichment, ELEGANT_RED bottles whose enriched weight pushes them to BIG_RED will land in the wrong bucket and be invisible to lookup.

Verified by `engine/consistency_check.js`. Run as part of regen pipeline.

### 2. Snapshot anchors must remain stable

`engine/.snapshot.json` locks 250 anchor pair-notes by sha256 hash. One anchor per (drink-class × food-class × tier) cell that exists, plus extras for diversification. Any unintentional drift is a regression.

Verified by `engine/engine_snapshot_test.js`.

### 3. Editorial extractor format stability

The miner's `extractVerdict()` function applies a fixed set of rules (TIER_HEADS regex + last-sentence gold fallback + prefix stripping). If the editorial format changes upstream (e.g., new verdict prefix style), the extractor could silently degrade.

Verified by `engine/test_miner.js` (10 golden cases).

### 4. Health checks

`engine/engine_health_check.js` runs 9 checks: taxonomy coverage, profile parity, pair-note refs, mirror integrity, tier-list consistency, tier uniqueness, language drift (cooking method), templated/editorial split, chemistry claims indexed.

---

## Regen pipeline

Run before any commit that touches the engine or pair-data:

```
1. node engine/engine_health_check.js
2. node engine/consistency_check.js
3. node engine/test_miner.js
4. node engine/engine_snapshot_test.js
5. (if mining inputs changed)
   node engine/mine_bottle_profiles.js
   node engine/mine_chemistry_claims.js
   node engine/mine_gold_corpus.js
   node engine/mine_corpus_all_tiers.js
6. node engine/regenerate_templated_notes.js
7. node engine/engine_snapshot_test.js   # verify regen didn't drift anchors
8. (if intended) node engine/engine_snapshot_test.js --update
9. node /path/to/sample_300.js   # optional 300-pair quality audit
```

---

## File map

```
engine/
  pairing_engine_taxonomy.js         single source of truth for class membership
  pairing_engine_generator.js        food×food generator (97 unique fxf pairs)
  drink_x_food_generator.js          drink×food generator (the main one)
  regenerate_templated_notes.js      rewrites templated portion of pairing-notes.js
  prune_drink_x_drink_in_map.js      one-time util — already run

  mine_bottle_profiles.js            → bottle_profiles_mined.js
  mine_chemistry_claims.js           → chemistry-claims.js
  mine_gold_corpus.js                → gold_corpus_mined.js
  mine_corpus_all_tiers.js           → corpus_mined_all_tiers.js

  bottle_profiles_curated.js         hand-curated bottle profiles (47 + 15 = 62)
  bottle_profiles_mined.js           auto-generated, do not edit
  gold_corpus_mined.js               auto-generated
  corpus_mined_all_tiers.js          auto-generated
  gold_corpus_supplement.js          hand-written sparse-bucket fillers
  tier_corrections.js                pair-map ↔ corpus tier disagreements (3 entries)
  competitor_refs.js                 "X still cuts harder" suffixes (1 entry)
  price_tiers.js                     PREMIUM / MID / BTG classification + overrides

  engine_health_check.js             9 structural integrity checks
  engine_snapshot_test.js            250 hash-locked anchor pair-notes
  consistency_check.js               mining ↔ runtime parity
  test_miner.js                      golden-input tests for editorial extractor
  fix_steak_weights_in_editorial.js  one-time util — already run

  ARCHITECTURE.md                    this file
  AUDIT_*.md                         historical audit reports
```

---

## Mental model for the hot path

When a verdict reads wrong, work backwards through the gates:

1. Is `drinkClassFor(_enrich(drink))` returning what you expect? (`consistency_check.js` will tell you)
2. Is the (dc × fc × tier) bucket populated? Look in `corpus_mined_all_tiers.js` and `gold_corpus_mined.js` for `dc|fc` keys.
3. Are filters rejecting valid candidates? The 12 gates run in order; instrument `_editorialVerdict` with `if (process.env.DXF_TRACE) console.log(...)` at each stage to find which gate dropped your phrase.
4. Is the phrase mentioning another bottle's name? Check `otherBottlePatterns` — bottle-name catalog filter is the most common silent rejection cause.
5. Is the phrase mentioning a foreign varietal/subclass keyword? Check `ELEGANT_SUBCLASS_FOREIGN[sub]` — applied for both ELEGANT_RED and BIG_RED bottles.

The full filter stack and merge logic is in `_editorialVerdict()` in `engine/drink_x_food_generator.js` around line 760.
