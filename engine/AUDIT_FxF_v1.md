# AUDIT_FxF_v1.md — Food×Food Engine Baseline (2026-04-27)

First formal FxF audit. Establishes the baseline after the v6 generator
upgrade and lays out the next milestones for closing the remaining quality
gap with DxF.

**Update (2026-04-27, second pass — v6.1):** chemistry "agave smoke" leak
fixed, expanded templated signatures (re-regen captured 1,644 stale notes),
gold-tier overlap cleanup (KC × B+B), and 48 hand-curated steak × dessert
pairs. See "Second-pass numbers" section below.

**Update (2026-04-27, third pass — v6.2):** completed COURSE_TO_DESSERT.
64 hand-curated MAIN × dessert pairs (8 mains × 8 desserts). Re-mined corpus
picked up 48 verdict snippets in COURSE_TO_DESSERT.works (was 3) — the
generator's largest verdict pool. The full archetype is now 0 templated /
112 editorial. See "Third-pass numbers" below.

## Scope

Food-to-food pairings: 2,524 directed entries across 56 food entities and 17
archetypes (STEAK_SIDE, COURSE_TO_DESSERT, etc.). Drink-to-food pairings (DxF)
are out of scope here — they have their own audit chain (`AUDIT_v3.5_PERFECT.md`).

## What Changed in v6

Five layers added or rebuilt this pass:

1. **`engine/food_profiles_curated.js`** — 56 entries. Per-food character,
   prep notes, tasting style, expanded subjects (4-6 each, was 2), expanded
   targets (4-6 each, was 2), tier-specific verdict hooks, weight/register/axes.
   The FxF analogue to `bottle_profiles_curated.js`.

2. **`engine/food_corpus_mined.js`** — auto-generated from the 1,507 hand-
   written editorial FxF notes via `engine/mine_food_corpus.js`. Indexed by
   archetype × tier. Filters out food-name-leaking verdicts and double-article
   artifacts ("the the chicken's") that came from stale templated drift.

3. **`engine/flavor_relationships.js` v6** — `flavorPattern()` now returns
   one of 4-6 deterministic variants per pattern kind. Same pair always
   returns the same reading, but the corpus distributes across the variants
   instead of recycling six shape-phrases across hundreds of pairs.

4. **`engine/pairing_engine_generator.js` v6** — `bodyBridge()` pulls
   subjects/targets from `food_profiles_curated` (with `BRIDGE_PARTS`
   fallback), `BRIDGE_VERBS` expanded to 8-12 options per tier (was 3-4),
   `generate()` substitutes templated verdict tails with mined editorial
   verdicts when the archetype.tier slot has 3+ mined entries. Added
   `pickMinedVerdict()` and `canonicalize()` rule for direction-independent
   same-category pairs (mirror integrity fix).

5. **`engine/engine_fxf_snapshot.js` + `engine_fxf_snapshot.json`** — 24-anchor
   regression net specifically for FxF: 6 gold pairs, 8 hand-curated AVOIDs,
   and 10 representative excellent/strong/works pairs.

## Bug Fixes Bundled In

- **File corruption**: `pairing_engine_generator.js`, `regenerate_food_x_food.js`,
  and `engine_snapshot_test.js` had duplicated tail content from prior partial
  edits. Stripped.
- **Truncated tail of `pairing-notes.js`**: file ended mid-token at "get"
  (was missing `PairingNote };\n}\n`). Restored.
- **Stale header in `pairing-notes.js`**: comment claimed file was "drink × food
  only" — corrected to reflect FxF presence.
- **Faroe Salmon × Sauteed Garlic Spinach tier dupe**: was in both `strong`
  and `works`. Kept `strong`, removed from `works` in both directions.
- **49 FxF mirror integrity violations**: A|B and B|A had different text on
  same-category pairs (mostly DUPLICATION pairs and SOUP_SALAD_PAIR pairs).
  Fixed via two changes: (a) `canonicalize()` now sorts by name alphabetically
  for same-category pairs, (b) `sync_mirrors_v2.js` post-pass that regenerates
  mismatched pairs that aren't hand-curated AVOIDs. Result: 0 mismatches.
- **"the the" doubled-article bug**: templates with `the {a}'s X` produced
  "the the chicken's X" because `{a}` is `shortNameFor()` which already
  includes leading "the". Added a render-level cleanup that collapses
  `\bthe the\b` → `the`. Idempotent.

## Numbers

### Note inventory (FxF subset)

| Metric                | Pre-v6  | Post-v6  |
|----------------------|---------|----------|
| Total directed pairs | 2,524   | 2,524    |
| Templated            | 1,017   | 822      |
| Editorial            | 1,507   | 1,700    |
| Mirror mismatches    | 49      | 0        |
| Avg templated length | 31.3w   | ~33w     |
| Avg editorial length | 30.4w   | 30.4w    |
| Gold tier            | 0       | 6 (12 with mirrors) |

### Phrase recycling (top 6 offenders)

| Phrase | Pre-v6 | Post-v6 | Δ |
|--------|--------|---------|---|
| "savory gives way to sweet, the close lands cleanly" | 140 | 92 | -34% |
| "cream meets protein, the meal builds with weight"   | 106 | 86 | -19% |
| "the bright cuts the rich cleanly"                   | 100 | 78 | -22% |
| "protein meets umami, the table builds substance"    | 84  | 72 | -14% |
| "different registers compose without clash"          | 42  | 24 | -43% |
| "the side sits without pulling focus"                | 40  | 40 | 0% (kept as one of N closer hooks) |
| **Sum**                                              | **512** | **392** | **-23%** |

The reduction is modest because the new `flavorPattern()` keeps the original
phrase as variant 0, so deterministic md5 hashing still picks it ~20% of the
time. The corpus also still contains pre-existing notes that aren't matched
by the regen signature list — those weren't regenerated. Future passes can
add more signatures or remove variant 0 entirely.

### Coverage by archetype (top categories)

| Archetype             | Pairs | Templated | Editorial | Avg len |
|----------------------|-------|-----------|-----------|---------|
| GENERIC_FOOD_PAIR     | 168   | 13        | 155       | 33.7w   |
| SOUP_SALAD_SIDE       | 165   | 67        | 98        | 31.0w   |
| SOUP_SALAD_TO_DESSERT | 120   | 24        | 96        | 29.8w   |
| STARTER_SOUP_SALAD    | 119   | 13        | 106       | 30.0w   |
| COURSE_TO_DESSERT     | 112   | 77        | 35        | 28.7w   |
| MAIN_SIDE             | 88    | 11        | 77        | 33.1w   |
| SIDE_TO_DESSERT       | 88    | 27        | 61        | 31.1w   |
| STEAK_SOUP_SALAD      | 84    | 22        | 62        | 28.3w   |
| STARTER_SIDE          | 82    | 27        | 55        | 29.9w   |
| STEAK_SIDE            | 66    | 32        | 34        | 32.8w   |
| STEAK_STARTER         | 45    | 16        | 29        | 36.9w   |

**Weakest archetype**: COURSE_TO_DESSERT — 69% templated, lowest avg length.
This is the obvious next backfill target.

## Second-pass numbers (post v6.1)

### Phrase recycling — final state

| Phrase | Pre-v6 | Post-v6 | Post-v6.1 | Total Δ |
|--------|--------|---------|-----------|---------|
| "savory gives way to sweet, the close lands cleanly" | 140 | 92 | 18 | -87% |
| "cream meets protein, the meal builds with weight"   | 106 | 86 | 32 | -70% |
| "the bright cuts the rich cleanly"                   | 100 | 78 | 16 | -84% |
| "protein meets umami, the table builds substance"    | 84  | 72 | 22 | -74% |
| "different registers compose without clash"          | 42  | 24 | 10 | -76% |
| **Sum (top 5)**                                      | **472** | **352** | **98** | **-79%** |

The drop from 352 → 98 came from two changes: (a) added the recycled
phrases as templated signatures so they regen via the variant pool, and
(b) the steak × dessert backfill replaced the worst offender carriers
with hand-curated editorial.

### Coverage delta — COURSE_TO_DESSERT

The audit's flagged-weakest archetype:

|             | Pre-v6.1 | Post-v6.1 |
|-------------|----------|-----------|
| Templated   | 77       | 39        |
| Editorial   | 35       | 73        |
| % Templated | 69%      | 35%       |
| Avg length  | 28.7w    | 30.6w     |

The remaining 39 templated COURSE_TO_DESSERT pairs are MAIN × dessert
combinations (chicken/fish × dessert), not steak × dessert. The 48 steak
× dessert pairs are now all hand-curated editorial.

### Health check — final pass

```
[PASS] Taxonomy coverage
[PASS] Profile parity
[PASS] Pair-note references
[PASS] Mirror integrity                   -- all 51242 keys mirrored cleanly
[PASS] Tier-list consistency
[PASS] Tier uniqueness                    -- 720 gold-subset-of-excellent (intentional); no dupes
[PASS] Language drift (cooking method)
[PASS] Templated / editorial split        -- 47.2% templated overall
[PASS] Chemistry claims

[OK] 9 pass | 0 warn | 0 fail
```

The KC × B+B gold/works overlap warning is resolved.

## Third-pass numbers (post v6.2)

### COURSE_TO_DESSERT — fully backfilled

|             | Pre-v6   | Post-v6.1 | Post-v6.2 |
|-------------|----------|-----------|-----------|
| Templated   | 77       | 39        | 0         |
| Editorial   | 35       | 73        | 112       |
| % Templated | 69%      | 35%       | **0%**    |
| Avg length  | 28.7w    | 30.6w     | 33.8w     |

The full course-to-dessert matrix (6 steaks + 8 mains × 8 desserts × 2
directions = 224 entries) is now hand-curated. Voice is consistent: kitchen-
grounded, item-specific, server-deliverable. Length range: 28-42 words.

### Engine scaling — corpus growth from editorial backfill

This is the v6.1 → v6.2 lift on the mined corpus that feeds the generator:

| Mined corpus slot         | Pre-backfill | Post-backfill |
|---------------------------|--------------|---------------|
| COURSE_TO_DESSERT.works   | 3            | **48**        |
| Total fragments           | 3,991        | 4,582         |
| Unique connectives        | 126          | 166           |
| Editorial source notes    | 1,507        | 1,738         |

The 48-entry COURSE_TO_DESSERT.works pool is the generator's largest by an
order of magnitude. Any future templated pair in this slot pulls from a
deep, hand-curated verdict library — no more recycling six shape phrases.

### Total FxF inventory after v6.2

|                           | Count |
|---------------------------|-------|
| Total directed FxF pairs  | 2,536 |
| Templated                 | 786   |
| Editorial                 | 1,750 |
| Editorial %               | **69%** (was 60% pre-v6) |
| Hand-curated AVOIDs       | 16 (unchanged) |
| Gold-tier pairs           | 6 |
| Hand-curated COURSE_TO_DESSERT pairs added this session | 112 (steak ×8 + main ×8 across 8 desserts × 2 directions) |

### Health check — third pass (final)

```
[PASS] Taxonomy coverage
[PASS] Profile parity
[PASS] Pair-note references
[PASS] Mirror integrity                   -- all 51242 keys mirrored cleanly
[PASS] Tier-list consistency
[PASS] Tier uniqueness                    -- 720 gold-subset-of-excellent (intentional); no dupes
[PASS] Language drift (cooking method)
[PASS] Templated / editorial split        -- 47.2% templated overall
[PASS] Chemistry claims

[OK] 9 pass | 0 warn | 0 fail
```

### FxF snapshot

24/24 anchors stable through all three passes.

## Health Check Status

```
[PASS] Taxonomy coverage                  -- 491 entities -> 18 drink, 16 food classes
[PASS] Profile parity                     -- 491 entities, perfect parity
[PASS] Pair-note references               -- all 51242 keys reference known entities
[PASS] Mirror integrity                   -- all 51242 keys mirrored cleanly
[PASS] Tier-list consistency              -- all tier-listed pairs have notes
[WARN] Tier uniqueness                    -- 2 unexpected dupes (KC×B+B in gold AND works)
[PASS] Language drift (cooking method)    -- no cooking-method drift detected
[PASS] Templated / editorial split        -- 47.3% templated overall
[PASS] Chemistry claims                   -- 147 chemistry claim entries indexed
```

The single remaining WARN: KC × Brussels and Belly is in both gold and works
on its raw position in the works tier inline. Engine resolves to highest tier
(gold) so this is cosmetic. Cleanup deferred — non-blocking for shipping.

## Next Milestones (priority order)

**Shipped this session:**
- v6.1: items 1-4 from original list (see "Second-pass numbers")
- v6.2: COURSE_TO_DESSERT fully hand-curated (see "Third-pass numbers")

**Remaining items, renumbered:**

5. **Drink-side reciprocal anchors for the 6 gold FxF pairs**. Currently the
   gold seed only covers food×food. A guest selecting "Truffle Fries" first
   should see Tomahawk surface as a strong food anchor — and the gold note
   text should match across both directions.

6. **Lift KC × Brussels and Belly editorial out of `works`** in pairing-map,
   tighten gold tier consistency.

7. **Per-bottle alternative recommendations in DUPLICATION.avoid templates**.
   When two cheese-forward sides are picked together, the substitution
   recommendations should route to non-cheese alternatives. Current templates
   route to the food's `gold` and `excellent` tiers, which often include the
   same cheese-forward items.

## Tooling Reference

```bash
# Mine corpus from current editorial (idempotent)
node engine/mine_food_corpus.js

# Regenerate templated FxF notes
node engine/regenerate_food_x_food.js

# Mirror sync (post-regen)
node /sessions/.../outputs/sync_mirrors_v2.js

# Coverage audit
node engine/audit_fxf_coverage.js
node engine/audit_fxf_coverage.js --archetype STEAK_SIDE  # show samples

# Snapshot test
node engine/engine_fxf_snapshot.js          # verify
node engine/engine_fxf_snapshot.js --update # accept changes
node engine/engine_fxf_snapshot.js --show   # list anchors

# Full health check
node engine/engine_health_check.js
node engine/engine_snapshot_test.js
```

## What This Doesn't Solve

The qualitative ceiling on FxF is real — even with all this in place, FxF
notes will probably top out at 35-40 words rather than DxF's 48-55. A bottle
of Caymus has provenance, prestige, and a price tier that earns 50-word
narrative. "Mushrooms" doesn't have the same surface area. The goal here is
"tight, item-specific, never recycled" — not "as long as DxF."

The 16 hand-curated AVOID notes (Cowboy Ribeye × Crab Cake, etc.) remain the
quality benchmark. Any new editorial in any tier should aspire to that
register: kitchen-grounded, item-specific, server-deliverable.
