# 300-Pair Audit + Engine Architecture Review

**Date:** 2026-04-27
**Engine version:** v2.8
**Sample:** 300 stratified pairs (60 gold / 60 excellent / 60 strong / 60 works / 60 avoid)
**Seed:** 20260427

---

## Part 1 — 300-Pair Audit Results

### Lint sweep result: effectively clean

| Category | Count | Notes |
|---|---|---|
| Empty/missing slots | 0 | No `{drink}`/`{food}` leaks |
| Bare verdict word ("Strong.") | **3 → 0 (fixed)** | EDITORIAL_PHRASES had `"Strong."` standalone entries; now filtered |
| Lowercase verdict word | 0 | Capitalization pass holds |
| Double possessive ("Vineyards's") | 0 | drinkPossessive() holds |
| `a` before vowel | 0 | Article rule holds |
| `the the` doubling | 0 | foodShortName fixes hold |
| Cross-class drink leak | 0 | DRINK_CLASS_KEYWORDS filter holds |
| Save-for-steak when food IS a steak | 0 | Food-class branch holds |
| Word echo (4+ same stem in one note) | 2 | Both intrinsic identity anchors (rye on rye, soup on potato soup) |

### Bug found and fixed during this audit

`EDITORIAL_PHRASES` had standalone tier-word entries like `"Strong."` and `"Avoid."` (cell `"template": "Strong."`). When picked, they produced notes ending with a bare word and no closer:

> #143 [strong] Blood Oath Pact 10 × Bone-In Filet
> *"...the vanilla softens the cut. **Strong.**"*

Filter added in `_editorialVerdict()`:
```js
entries = entries.filter(e => !/^\s*(Gold standard|Excellent|Strong|Works|Avoid)\.?\s*$/i.test(e.template));
```

After fix, #143 reads:
> *"...the vanilla softens the cut. **Strong; bourbon on the bone-in filet reads cleanly at the table.**"*

#144 picked up an even better corpus phrase:
> *"...the rye edge frames the bowl. **Strong; bold rye cuts the bleu with extra-proof intensity.**"*

### Verdict source distribution (240 non-avoid pairs)

```
VERDICT_PATTERNS (my templates):   199 / 240   (83%)
EDITORIAL_PHRASES (real v9 corpus): 41 / 240   (17%)
```

The 17% that come through corpus produce some of the strongest output — *"ceremonial depth is composed with the dessert"*, *"Courvoisier Cognac oak backbone handles the dessert density"*, *"a balanced pairing at the everyday tier"*. Tableside-quality.

---

## Part 2 — Engine Architecture Review

### State of the engine

```
Entities:           491 (435 drinks, 56 foods)
Pair-notes:         48,914 (mirror-keyed)
Tier-listed pairs:  49,674 across all tiers
Editorial preserved: ~38K  Templated: ~11K (52.9% per health check)

Profile coverage (drinks):
  Inline BOTTLE_PROFILE:    33  ( 7.6%)
  Hand-curated file:        47  (10.8%)
  Mined profile file:       99  (22.8%)
  Falls to CLASS_DEFAULT:   256 (58.9%)

EDITORIAL_PHRASES verdict bank: 662 entries
  strong:    219    works:     237
  avoid:     128    excellent:  78
  gold:        0    ← ZERO gold-tier corpus phrases

Snapshot anchors: 81
Health checks:    9/9 pass
```

### Improvement opportunities — ranked by leverage

#### 1. Bottle profile coverage on high-traffic drinks **(highest leverage)**

256 drinks (59%) have no bottle-specific profile. Each appears in 50-60 tier-listed pairs, so each uncurated drink produces 50-60 generic class-default notes. Top targets, sorted by pair count, all currently using class default:

```
59 pairs   Pierre Gimonnet Special Club Brut (SPARKLING)
59 pairs   Vin Santo (SWEET_WINE)
58 pairs   The Manhattan (COCKTAIL_BOLD)
58 pairs   French 75 (COCKTAIL_LIGHT)
58 pairs   Margarita (COCKTAIL_LIGHT)
58 pairs   Espresso Martini (COCKTAIL_BOLD)
58 pairs   Veuve Clicquot Brut (SPARKLING)
58 pairs   Raventós Cava de NIT Rosé Brut (SPARKLING)
58 pairs   Keenan Chardonnay (WHITE_WINE)
58 pairs   Scavino Barolo (ELEGANT_RED)
58 pairs   Marimar Estate Christina (ELEGANT_RED)
58 pairs   Quilt Cabernet Sauvignon (ELEGANT_RED)
... (top 30 list available in coverage_stats output)
```

**Recommendation:** curate 30 bottles → upgrade ~1,700 pair-notes from generic to specific. Pick the four cocktails first — they're guest-conversation pieces and currently render with bare class defaults.

#### 2. Increase EDITORIAL_PHRASES match rate

Currently 17%. The bucketing is `(tier × drinkClass × foodClass)` — strict 3D match. Many cells are empty.

**Recommendation:** add tier-fallback layer: `(tier × drinkClass × *)` with food-noun whitelist filter. Pull all "any-food" matches that don't conflict with the current pair's food. Keep the existing 11-gate filter stack to prevent class-mismatch leaks.

Conservative estimate: 17% → 35% corpus hit rate. The corpus phrases consistently outperform templates on tableside-readiness.

#### 3. Gold-tier corpus is empty

EDITORIAL_PHRASES has 78 excellent / 219 strong / 237 works / 128 avoid / **0 gold** entries. Every gold-tier note uses VERDICT_PATTERNS (only 7 patterns). Gold is the highest-stakes tier — the recommendation a server actually leads with.

**Recommendation:** mine gold-tier phrases from the preserved editorial portion of `pairing-notes.js`. For every pair where pair-map tier = gold AND `isTemplatedNote(note) === false`, extract the verdict clause and add to EP. Estimated yield: 200-400 new gold corpus phrases.

#### 4. Tier-correction layer is undersized

3 entries. v9 corpus and current tier-list disagree on more pairs than this — and when they do, the verdict text says "gold" while the structural setup says "strong" (or vice versa).

**Recommendation:** write `mine_tier_corrections.js`. For every preserved editorial note, extract the verdict word ("Excellent;", "Strong;", etc.) and compare to pair-map tier. Where they disagree, emit a tier-correction entry. Audit the result; commit non-controversial corrections.

#### 5. Competitor references

1 entry (Fernet Branca on HEARTY_STARTER × BOURBON_BOLD). v9 had more — "this is great, but Fernet still cuts harder" / "Caymus is the call but Opus elevates" / "if it's available, X is the move".

**Recommendation:** mine competitor refs from preserved editorial. Pattern: any verdict containing "still cuts", "elevates", "if available", "harder", and the name of another bottle in the same class.

#### 6. Cocktail profiles are missing entirely

4 of the most-frequently-paired cocktails (Manhattan, French 75, Margarita, Espresso Martini) have no profile. Cocktails carry guest-conversation weight — they're often the table's icebreaker order.

**Recommendation:** hand-curate the cocktail menu. Bowdie's classics:
- Bowdie's Old Fashioned
- The Manhattan
- Bowdie's Boulevardier (already curated? verify)
- French 75
- Margarita
- Espresso Martini
- Bee's Knees
- Negroni

#### 7. Snapshot anchor expansion

81 anchors today. Engine has 48,914 pair-notes. Snapshot regression net is thin — many edge cases in (drink-class × food-class × tier) combinations aren't anchored.

**Recommendation:** expand to ~250 anchors. Cover at least one pair from each (drink-class × food-class × tier) intersection that exists. Locks in current quality for future regen passes.

#### 8. Health check additions

9 checks today. Three useful additions:

- **Vocabulary diversity check** — flag any token (excluding bottle/food names) appearing more than 4× in a single note across the templated portion.
- **Pattern coverage check** — verify every (tier × drinkClass × foodClass) combination either has a corpus phrase or falls cleanly to a VERDICT_PATTERN with all slots fillable.
- **Editorial drift check** — flag preserved editorial notes that contain an outdated cooking term ("seared steak crust" — should be "flame-grilled char" per CLAUDE.md). Pre-empt prep-method drift between menu changes.

#### 9. Smarter "save for X course" closer

Current avoid template: `"Save the {drink} for the steak course"` (or "another course" if food IS a steak).

Could be specific:
- Bourbon × dessert avoid → "save for the cap-fat ribeye"
- Big red × delicate fish avoid → "save for the bone-in filet"
- Light spirit × steak avoid → "save the agave call for the ceviche moment"

**Recommendation:** add `bestFoodFor(drink)` helper using each drink's gold tier-list. If the drink has gold pairs, save-phrase says "save the X for the Y" where Y is the most evocative gold target. Tableside lift: server now knows what dish to upsell instead.

#### 10. Pattern variety in body construction

Currently two body patterns:
- **Pattern A** (em-dash setup with tasting notes) — used for premium-curated bottles with full tastingNotes array
- **Pattern C** (character setup) — used for everything else

Pattern B doesn't exist. A "story-first" pattern would broaden:
- *"Made at the family-owned Detroit Distillery from Michigan barley — Detroit City Gin's urban juniper frames the crab cake..."*

This requires bottle profiles to have an optional `provenance` field. High-effort, low immediate return — file under "after coverage and corpus expansion."

---

## Prioritized roadmap

```
Tier 1 (high leverage, low risk) — ship first:
  □ #1  Curate 30 high-traffic bottles (cocktails first)
  □ #3  Mine gold-tier corpus phrases from preserved editorial
  □ #2  Add tier-fallback layer to EDITORIAL_PHRASES match path

Tier 2 (medium leverage, medium effort):
  □ #4  Auto-mine tier corrections from editorial-vs-pair-map disagreements
  □ #5  Auto-mine competitor references from preserved editorial
  □ #7  Expand snapshot anchors to ~250

Tier 3 (polish — after tiers 1-2 land):
  □ #8  Three new health-check rules
  □ #9  Smarter save-for-X closer
  □ #6  Hand-curate full cocktail menu (overlaps with #1)
  □ #10 Pattern B (provenance-led body construction)
```

---

## Engine state — final snapshot for v2.8

```
Health check:            9 pass | 0 warn | 0 fail
Snapshot test:           81/81 anchors clean
300-pair quality:        298/300 clean (2 intrinsic identity-word echoes)
                         100% structurally clean
Lint sweep categories:   12 monitored, 11 at zero, 1 fixed during this audit

Profile coverage:        179 / 435 drinks (41%)
Verdict source mix:      83% template / 17% corpus
Editorial preserved:     ~38K notes (untouched, hand-written)
Templated (regenerable): ~11K notes
```

The engine is structurally sound. The next phase of quality lift is volume work — expanding profile coverage and corpus depth — not architectural rework.
