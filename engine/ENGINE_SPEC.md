# Bowdie's Pairing Engine — State of the System (2026-04-28)

A spec sheet covering what the engine is, how it composes notes, what data
layers feed it, and how it scales as you keep curating editorial. Companion
to `AUDIT_FxF_v1.md` (which covers the v6 → v6.2 progression specifically).

---

## 1. What the engine is

A pairing-note generator for Bowdie's Chophouse. Given any two items
(drink × food, or food × food), it produces a server-grade tasting note
explaining whether the pair is a Gold standard / Excellent / Strong / Works
or Avoid call, with kitchen-grounded reasoning.

**Two parallel engines:**

- **DxF (drink × food)** — 491 entities → ~48,720 notes. Mature (v3.5),
  100% corpus-backed verdicts, voice modeled on professional sommelier
  recommendations.
- **FxF (food × food)** — 56 food entities → 2,534 directed pair entries.
  Brought to v6.2 in this session: profile layer + corpus mining + variant
  pool + hand-curated AVOID/gold/dessert backfills.

Total in `pairing-notes.js`: **51,242 notes**, average 35.0 words.

---

## 2. The note format

Every note follows a recognizable shape:

```
[Opener] -- [body with kitchen-grounded flavor reasoning]. [Tier]; [verdict].
```

### Examples by tier

**Gold standard (FxF):**
> \* The Tomahawk alongside the truffle fries -- the 36oz long-bone showpiece
> carries cleanly into the parmesan-and-truffle fry weight: the smoky char
> meets the truffle-oil aroma, and the rendered cap-fat anchors the
> parmesan-laced fries. Gold standard; the side the table pairs with the
> Tomahawk every time.

**Avoid (FxF, hand-curated benchmark):**
> The cowboy ribeye's marbled char-and-fat richness obliterates the crab
> cake's delicate sweet crab in a crisp crust: the cap-fat ribeye overshadows
> the panko-and-lump crab cake, and the marbled char crowds out the
> lemon-finished crab plate. Avoid; the cut is too bold for the delicate
> starter. Stand the crab cake on its own course -- pair the crab cake with
> Joseph Mellot Sancerre, Domaine de Berthiers Pouilly-Fumé, or Tanqueray
> Gin -- and pour Caymus Cabernet Sauvignon, Silver Oak Cabernet Sauvignon,
> or Shafer Hillside Select for the cowboy ribeye.

**Strong (DxF):**
> Caymus -- Napa Cab, concentrated black fruit, cocoa, mocha, velvety
> tannin. The opulent body frames Porterhouse's dual-texture strip-and-filet
> and the cocoa plays against both lean and fatty sides. Strong iconic Napa
> Cab for Porterhouse -- crowd-pleasing lushness on the dual-cut classic.

**Works (FxF, post-v6.2):**
> The KC closes with the cheesecake -- the firm savory grain hands off to
> dense cream-cheese custard, berry compote brightening the graham-crust
> base. Works; the meal closes substantial, neither course pulling against
> the other.

The Gold standard pattern starts with `* ` so the UI can highlight it.

---

## 3. Data layers

The engine reads from **eight** files. Tracing what feeds what:

| Layer | File | Purpose | Size |
|-------|------|---------|------|
| Tier graph | `pairing-map-v2.js` | Each entity has `gold/excellent/strong/works/avoid` arrays of pair targets. Source of truth for "what tier is this pair?" | 491 entities, 1.5MB |
| Note output | `pairing-notes.js` | Final rendered notes keyed by `"A\|B"`. Mirror integrity: `A\|B` always equals `B\|A`. | 51,242 notes, 14MB |
| Taxonomy | `engine/pairing_engine_taxonomy.js` | `drinkClassFor`, `foodClassFor`, `tierFor`, `FOOD_CATS`, `DRINK_CATS`. **Single source of truth** — never duplicate. | 491 classifications |
| Bottle profiles (DxF) | `engine/bottle_profiles_curated.js` (47) + `engine/bottle_profiles_mined.js` (99) | Per-bottle character, tasting notes, verdict hooks. Powers DxF voice. | 146 profiles |
| Food profiles (FxF) | `engine/food_profiles_curated.js` | Per-food character, prep notes, tasting style, 4-6 subjects/targets, tier-specific verdict hooks. | 56 profiles, 60KB |
| Chemistry claims | `chemistry-claims.js` | Per-flavor-pair clauses ("the smoke meets the char", "the cocoa plays against both"). Used as bridge clauses in body composition. | 147 entries |
| Mined editorial corpus (FxF) | `engine/food_corpus_mined.js` | Auto-generated from hand-curated editorial. Verdict snippets indexed by archetype × tier. **The engine-scaling layer.** | 4,584 fragments, 25 verdict slots |
| Flavor patterns | `engine/flavor_relationships.js` | Ingredient duplication detection (severe = forced AVOID) + flavor-register multi-variant readings (29 pattern kinds × 4-5 variants each). | 29 pattern kinds |

---

## 4. FxF generator architecture (v6.2)

The FxF generator (`engine/pairing_engine_generator.js`) composes a note in
five stages:

```
canonicalize(a, b)               // category-weight + alphabetical ordering
    ↓
duplicationKindFor(a, b)         // shellfish×shellfish, etc. → forced AVOID
    ↓
archetypeFor(a, b)               // STEAK_SIDE, COURSE_TO_DESSERT, etc.
    ↓
bodyBridge(a, b, tier, ctx)      // pull subjects/targets from food_profiles,
                                  // verbs from BRIDGE_VERBS, optional chemistry clause
    ↓
pickTemplate(archetype, tier)    // template per (archetype × tier)
    ↓
render(...)                      // substitute {a}, {body}, {patternReading}, {altsA}
    ↓
pickMinedVerdict()               // if corpus has ≥3 entries for slot, swap
                                  // templated verdict for a mined editorial verdict
```

### Why this matters for scaling

The `pickMinedVerdict` step is the **engine-scaling layer**. Every time you
hand-write a new editorial note, the next `mine_food_corpus.js` run captures
its verdict snippet and adds it to the corpus. The next regen pass picks it
up automatically — so future templated pairs in the same archetype × tier
slot draw from a richer pool.

**Concrete proof of scaling:** before this session's backfills,
`COURSE_TO_DESSERT.works` had 3 mined verdict snippets. After hand-curating
112 course-to-dessert pairs, the corpus has **48** snippets in that slot
— a 16× expansion the generator can pull from.

---

## 5. The regen pipeline (10 steps)

Documented in `CLAUDE.md`. Run in order before shipping changes:

```bash
node engine/engine_health_check.js          # 1. Surface blockers
node engine/engine_snapshot_test.js         # 2. DxF anchor regression net (250)
node engine/engine_fxf_snapshot.js          # 3. FxF anchor regression net (24)
node engine/regenerate_templated_notes.js   # 4. DxF templated rewrite
node engine/mine_food_corpus.js             # 5. Re-mine FxF editorial
node engine/regenerate_food_x_food.js       # 6. FxF templated rewrite
node engine/sync_mirrors_v2.js              # 7. FxF mirror sync (A|B == B|A)
node engine/audit_tier_note_mismatches.js   # 8. Verify note verdict matches map tier
# 9. (If editorial needs factual correction) write fix_*_in_editorial.js
node engine/engine_snapshot_test.js --update # 10. Lock in changes
node engine/engine_fxf_snapshot.js --update
```

---

## 6. Numbers (current state)

### Note inventory

| Bucket | Count | Avg length |
|--------|-------|------------|
| Total notes | 51,242 | 35.0w |
| FxF notes | 2,534 | 33.6w (templated) / 31.8w (editorial) |
| Templated overall | 12,093 (47.2%) | — |
| Editorial overall | 13,528 (52.8%) | — |
| Hand-curated AVOIDs (FxF) | 16 | 76-87w (sommelier-grade) |
| Gold pairs (FxF) | 6 (12 mirrored) | — |

### FxF tier breakdown (post-v6.2 cleanup)

| Tier | Count | Templated / Editorial |
|------|-------|----------------------|
| Gold | 6 (×2 directions) | 0 / 12 |
| Excellent | 64 | 26 / 38 |
| Strong | 584 | 220 / 364 |
| Works | 1,768 | 436 / 1,332 |
| Avoid | 118 | 102 / 16 |

### COURSE_TO_DESSERT (the recently completed archetype)

- **0 templated, 112 editorial** — fully hand-curated
- Avg length: 33.8w
- All 112 pairs voice-matched to the AVOID-note benchmark

### Phrase recycling reduction (over the session)

| Phrase | Pre-v6 | Post-v6.2 | Δ |
|--------|--------|-----------|---|
| "savory gives way to sweet, the close lands cleanly" | 140 | 16 | -89% |
| "cream meets protein, the meal builds with weight" | 106 | 32 | -70% |
| "the bright cuts the rich cleanly" | 100 | 16 | -84% |
| "protein meets umami, the table builds substance" | 84 | 22 | -74% |
| "different registers compose without clash" | 42 | 10 | -76% |
| **Top-5 sum** | **472** | **96** | **-80%** |

---

## 7. Health invariants (9 checks, all currently PASS)

The health check (`engine/engine_health_check.js`) enforces:

1. **Taxonomy coverage** — Every entity classifies cleanly (no DEFAULT bucket).
2. **Profile parity** — All entities with profiles match the map.
3. **Pair-note references** — Every key in `pairing-notes.js` references known entities.
4. **Mirror integrity** — Every `A|B` matches `B|A` byte-for-byte.
5. **Tier-list consistency** — Every pair listed in a tier has a note.
6. **Tier uniqueness** — No item appears in multiple non-overlapping tiers (gold⊂excellent allowed).
7. **Language drift** — No "seared crust" / "pan-seared" on Bowdie's flame-grilled steaks.
8. **Templated/editorial split** — Sanity check on signature matching.
9. **Chemistry claims** — All chemistry index entries valid.

**Step 8 of the regen pipeline** (`audit_tier_note_mismatches.js`) is now
also a permanent invariant: every note's verdict label ("Strong;",
"Excellent;", etc.) matches the tier the pairing-map assigns.

---

## 8. Snapshot protection (regression nets)

Two parallel snapshot tests lock in voice quality:

**DxF snapshot** (`engine/engine_snapshot_test.js`)
- 250 anchors covering every (drink class × food class × tier) combination
- Verifies templated DxF output doesn't drift unexpectedly
- 248 unchanged / 2 drifted (pre-existing Beignets pairs unrelated to this work)

**FxF snapshot** (`engine/engine_fxf_snapshot.js`)
- 24 hand-picked anchors:
  - 6 Gold pairs (Tomahawk × Truffle Fries, etc.)
  - 8 Hand-curated AVOIDs (Cowboy Ribeye × Crab Cake, Filet × Salmon, etc.)
  - 10 representative excellent/strong/works pairs
- All 24 currently stable

---

## 9. Tools available (engine/ inventory)

135 files in `engine/`. The load-bearing ones:

### Generators

- `pairing_engine_generator.js` — FxF generator (v6, profile + corpus wired)
- `drink_x_food_generator.js` — DxF generator (v3.5)
- `pairing_engine_taxonomy.js` — single source of truth for entity classification

### Data layers

- `food_profiles_curated.js` — 56 entries (you, this session)
- `food_corpus_mined.js` — auto-generated, 4,584 fragments
- `bottle_profiles_curated.js` — 47 entries (DxF)
- `bottle_profiles_mined.js` — 99 entries (DxF)
- `flavor_relationships.js` — duplication + 29-pattern variant pool

### Pipeline scripts

- `regenerate_food_x_food.js` — FxF templated regen
- `regenerate_templated_notes.js` — DxF templated regen
- `regenerate_dxf_notes.js` — DxF alternative regen
- `mine_food_corpus.js` — FxF editorial → corpus
- `mine_corpus_all_tiers.js`, `mine_gold_corpus.js`, `mine_bottle_profiles.js` — DxF mining
- `mine_chemistry_claims.js` — chemistry-claims mining
- `sync_mirrors_v2.js` — FxF mirror integrity post-pass

### Audits

- `engine_health_check.js` — 9-check health invariants
- `engine_snapshot_test.js` — DxF anchor regression
- `engine_fxf_snapshot.js` — FxF anchor regression
- `audit_tier_note_mismatches.js` — verdict label vs map tier
- `audit_fxf_coverage.js` — per-archetype FxF coverage stats
- `audit_full_food_matrix.js`, `audit_food_pairing_coverage.js`, `audit_steak_side_coverage.js`,
  `audit_dessert_entree_tiers.js`, `audit_entree_side_coverage.js`, `audit_works_quality.js` — DxF audits

### Backfills (hand-curated content)

- `backfill_steak_dessert_notes.js` — 48 pairs (this session)
- `backfill_main_dessert_notes.js` — 64 pairs (this session)
- `backfill_steak_side_notes.js`, `backfill_entree_side_notes.js`, `backfill_dessert_entree_notes.js`,
  `backfill_food_pairing_notes.js`, `backfill_remaining_food_notes.js` — earlier DxF/FxF backfills

### Editorial fixes (factual corrections)

- `fix_steak_weights_in_editorial.js` — cut weight canon (10/14/18/26/36/40 oz)
- `fix_agave_smoke_in_chemistry.js` — neutralized chemistry clauses for grilled smoke
- `fix_seared_beef_in_editorial.js` — cooking method drift (steaks are flame-grilled, not seared)
- `fix_food_noun_leaks.js`, `fix_food_pairing_gaps.js`, `fix_steak_side_gaps.js`,
  `fix_dessert_entree_gaps.js`, `fix_entree_side_gaps.js`, `fix_remaining_food_gaps.js`,
  `fix_caymus_tomahawk_tier.js`, `fix_parker_saffredi_leaks.js`, `fix_tier_corrections_v1-v5.js` — targeted corrections

### Documentation

- `ARCHITECTURE.md` — high-level system architecture
- `AUDIT_FxF_v1.md` — v6 → v6.2 progression detail
- `AUDIT_v3.5_PERFECT.md`, `AUDIT_v3_QUALITY_LIFT.md`, `AUDIT_v22_vs_v9.md`, etc. — DxF audit history
- `ENGINE_SPEC.md` — this document

---

## 10. Future expansion paths

Ranked by likely impact-per-hour:

### High leverage

1. **Backfill MAIN × side and STEAK × side templated pairs.** Both sides of
   the entrée plate are still templated-heavy. The voice template is now
   established and the corpus has 48 mined verdicts to draw from. Estimated
   2-3 hours per archetype × 2 archetypes = 4-6 hours total.

2. **MAIN × starter and STEAK × starter backfills.** Less common server
   conversations but still 80+ templated pairs per archetype.

3. **Dessert pair AVOIDs.** Most dessert × dessert pairs are templated.
   Several should be AVOIDs (chocolate × chocolate, sweet × sweet) — the
   duplication detector handles some, but explicit hand-curated AVOIDs with
   substitution recommendations would add real server value.

### Medium leverage

4. **Promote select strong pairs to excellent / gold.** A second pass
   through the strong tier might surface 10-15 pairs that earn an upgrade
   (e.g., Cowboy Ribeye × Au Gratin Potatoes is currently excellent — could
   it be gold? Same question for Bone-In Filet × Truffle Fries).

5. **Drop variant-0 from `flavor_relationships.PATTERN_VARIANTS`.** The
   original recycled phrases ("savory gives way to sweet", etc.) are still
   variant 0 of each kind. Removing them entirely would force the engine to
   only pick from the 3-4 newer variants per pattern. Phrase recycling drops
   to ~0 in templated output.

6. **Expand the 16 hand-curated AVOID notes to 30-40.** Common-sense AVOIDs
   that aren't shellfish/cheese/lettuce duplications: bold-cut × delicate-
   starter pairings, oily-fish × oily-fish (Salmon × Tuna), sweet-savory
   conflicts that the duplication detector misses.

### Lower leverage / maintenance

7. **Ports DxF tooling into FxF parity.** DxF has 6+ audit scripts; FxF has
   1. Adding `audit_fxf_full_matrix.js`, `audit_fxf_works_quality.js` etc.
   would surface drift earlier.

8. **Expand BRIDGE_VERBS pool further.** Current 8-12 verbs per tier could
   reasonably grow to 15-20 each.

9. **Per-side and per-soup-salad profiles refinement.** The 56 food profiles
   work but vary in depth — Mushrooms is a 4-line entry while Tomahawk has
   the full profile treatment. Bringing the lighter entries up to parity
   would tighten body composition.

### Engineering

10. **Snapshot-anchor expansion.** 24 FxF anchors covers gold + AVOID + a
    sample of each tier, but doesn't cover every category combo. 50-60
    anchors would catch more drift.

11. **Mining expansion.** Currently mines verdict snippets and openers.
    Could also mine: connectives by tier, body shapes (pre-em-dash patterns),
    closer hooks. Each adds a corpus layer the generator can pull from.

12. **DxF voice could absorb FxF mining.** The DxF generator is fully built
    out, but it doesn't currently pull from `food_corpus_mined.js`. Cross-
    pollination might lift DxF closers in archetypes where FxF has richer
    editorial.

---

## 11. The "engine scaling" property — why this all matters

The most important property the engine has, that the user kept returning to:

> **Hand-curated editorial flows back into templated output.**

The mechanism:

1. You hand-write a note.
2. `mine_food_corpus.js` extracts its verdict snippet, opener phrase, and
   connective vocabulary into `food_corpus_mined.js`.
3. The next time `regenerate_food_x_food.js` runs, the generator's
   `pickMinedVerdict()` step pulls from the refreshed corpus when the
   archetype × tier slot has 3+ entries.
4. Templated pairs in that slot now read in your voice instead of the
   generic templated voice.

This means **every hour you spend writing editorial multiplies across
hundreds of templated pairs.** You don't have to hand-curate everything —
you just have to hand-curate enough that the corpus has 3+ entries in each
archetype × tier slot, and the generator does the rest.

Current corpus state: 25 archetype-tier slots populated. The biggest slot
(`COURSE_TO_DESSERT.works`) has 48 entries. Most other slots have 1-3.
**The next high-leverage move is filling out underpopulated slots until
every common archetype × tier has 5+ entries.** Once you cross that
threshold, templated FxF output stops being recognizable as templated.

---

## 12. What changed in this session (v6 → v6.2)

| Change | Impact |
|--------|--------|
| Created `food_profiles_curated.js` (56 entries) | Unlocked profile-aware body composition |
| Created `food_corpus_mined.js` + mining pipeline | Enabled hand-editorial → templated feedback loop |
| Multi-variant `flavor_relationships.PATTERN_VARIANTS` (29 kinds × 4-5 variants) | Phrase recycling -80% |
| Generator v6 with `pickMinedVerdict()`, `_bridgeParts(food)` profile-aware, expanded BRIDGE_VERBS | Item-specific bodies, mined-verdict substitution |
| Mirror integrity fix (canonical sort + sync_mirrors_v2.js) | 49 mismatches → 0 |
| 6 gold-tier FxF pairs seeded with hand-curated editorial | First gold tier in FxF |
| 24-anchor FxF snapshot test | Regression net for the most important pairs |
| 48 steak × dessert + 64 main × dessert hand-curated pairs (224 mirrored entries) | Full COURSE_TO_DESSERT archetype is now editorial |
| Steak weight canon corrected (10/14/18/26/36/40 oz) | 102 factual corrections across editorial |
| Tier-note mismatch audit + auto-bumps | 184 pairing-map edits to align note verdicts with map tiers |
| Agave smoke chemistry leak fixed | Steak chars no longer reference "agave smoke" |
| File hygiene cleanups | 4 corruption fragments removed, paths portabilized |
| Updated `CLAUDE.md` with v6.2 conventions, cut weight canon, expanded pipeline | Documentation matches reality |
| Wrote `AUDIT_FxF_v1.md` (now with v6.1 + v6.2 numbers) | Full audit trail of the session |

**29 tasks completed across the session. All 9 health checks pass.
24/24 FxF snapshot anchors stable. 0 tier-note mismatches across 2,522
FxF pairs.**

---

*Generated 2026-04-28. Update this file when: a new generator version
ships, a new data layer is added, or the engine scaling property changes.*
