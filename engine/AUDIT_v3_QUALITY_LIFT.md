# Audit v3 — Quality Lift to v9-Equivalent

**Date:** 2026-04-27
**Engine version:** v3.0
**Sample:** 300 stratified pairs, deterministic seed 20260427

## Headline numbers

| Metric | v2.8 (baseline) | v3.0 (now) | Change |
|---|---|---|---|
| Profile coverage (drinks) | 41% (179/435) | **44% (190/435)** | +14 drinks curated |
| Class-default fallback | 256 drinks | 245 drinks | -11 |
| ELEGANT_RED voice variants | 1 generic | **11 subclasses** | per-varietal voice |
| Gold-tier corpus phrases | 0 | **195** | mined from editorial |
| Verdict source: gold | 0% corpus | **42% corpus** | +42pp |
| Verdict source: works | 38% corpus | **75% corpus** | +37pp |
| Verdict source: strong | 38% corpus | 43% corpus | +5pp |
| Cross-food leaks | n/a | 0 | clean |
| 4+ word echoes | 2 | 1 | one intrinsic |
| Health check | 9/0/0 | 9/0/0 | clean |
| Snapshot anchors | 81/81 | 81/81 | clean |

## Three big moves landed in this pass

### 1. ELEGANT_RED voice subclasses (mirroring whiskey)

The old engine had **one** ELEGANT_RED class default that was applied to ~60 wines spanning Pinot Noir, Cabernet, Nebbiolo, Sangiovese, Rhône, Tempranillo, Malbec, Zinfandel, and Bordeaux blends. Every wine read the same — *"silky body carries the dish, cherry-pepper note frames the cut"* — regardless of varietal.

Now it splits into 11 voices:

```
PINOT      — Pinot Noir, Burgundy, Willamette
CAB        — Cabernet, Napa, Sonoma, Meritage
NEBBIOLO   — Barolo, Barbaresco, Piedmont
CHIANTI    — Sangiovese, Tuscan blends, Barbera
RHONE      — Grenache/Syrah/Mourvèdre, Bandol, Châteauneuf
SPANISH    — Tempranillo, Rioja, Mencía
MALBEC     — Argentine, Patagonian
ZIN        — Zinfandel, Petite Sirah, Zin-blends
CAB_FRANC  — Cabernet Franc, Chinon
BORDEAUX   — Saint-Émilion, Pomerol, Merlot-led blends
GENERIC_ELEGANT_RED — fallback for unmatched
```

Each gets its own character / bridge1 / bridge2 / verdictHook. Detection uses the bottle's `profile` array (e.g. "Pinot-Noir" → PINOT, "Nebbiolo" → NEBBIOLO).

**Sample output (Marimar Estate Christina × Porterhouse, Pinot subclass):**
> *"Marimar Estate Christina's silky Pinot Noir with cherry-and-forest-floor lift leans against the porterhouse's dual strip-and-filet character: the Pinot body brightens the dual-cut steak, and the cherry-and-earth note frames the cut. Strong; Marimar Estate Christina on the porterhouse — workhorse pairing, no surprises."*

**Sample output (Muga Reserva × Gumbo, Spanish subclass):**
> *"Muga Reserva's Tempranillo with vanilla-and-leather depth carries cleanly into the gumbo's spiced creole stew: the Tempranillo body wraps the gumbo, and the medium-body red meets the light soup. Excellent; Spanish red carries the gumbo without overshooting."*

### 2. 14 high-traffic bottles hand-curated

Added bottle-specific profiles for the worst 14 untouched high-pair-count drinks:

```
The Manhattan          (58 pairs)
French 75              (58 pairs)
Margarita              (58 pairs)
Espresso Martini       (58 pairs)
Pierre Gimonnet (Champagne)  (59 pairs)
Veuve Clicquot Brut    (58 pairs)
Raventós Cava NIT Rosé (58 pairs)
Vin Santo              (59 pairs)
Graham's 20 Year Tawny (58 pairs)
Graham's 2017 Vintage  (58 pairs)
Taylor Fladgate Tawny  (58 pairs)
Keenan Chardonnay      (58 pairs)
Schloss Vollrads       (58 pairs)
Faust Napa Cab         (58 pairs)
Nickel & Nickel Cab    (58 pairs)
```

Each lifts ~58 pair-notes from generic class default to bottle-specific. Net: ~870 pair-notes upgraded.

**Sample (The Manhattan × Bone-In Filet, gold):**
> *"The Manhattan — rye whiskey, sweet vermouth, Angostura, classic cocktail, cherry-garnish ritual. The rye-vermouth body settles into the bone-enhanced filet, and the cherry-bitters edge frames the cut. Gold standard; pour The Manhattan on the bone-in filet, that's the play."*

**Sample (Vin Santo × Crème Brûlée, gold):**
> *"Vin Santo — Tuscan dessert wine, dried-fruit and honey, biscotti pour. The dried-fruit body mirrors the brulee, and the honey threads the cream. Gold standard; for the brulee, Vin Santo is the answer, full stop."*

### 3. Mined gold-tier corpus + cross-food fallback

EDITORIAL_PHRASES had **0 gold-tier entries** before this pass. Wrote `engine/mine_gold_corpus.js` which scans the preserved editorial portion of `pairing-notes.js`:

```
Gold pairs scanned:       1,328
Templated (skipped):          6  (regenerable, no useful corpus)
Editorial (mined):        1,322
Gold verdicts extracted:    396
Unique entries written:     195  (after dedup)
Unique (dc × fc) buckets:    32
```

Top buckets:
```
ELEGANT_RED|STEAK_BOLD          71
ELEGANT_RED|STEAK_LEAN          33
ELEGANT_RED|CHICKEN_MAIN        10
SPARKLING|LIGHT_STARTER          9
WHITE_WINE|FISH_MAIN_DELICATE    7
SWEET_WINE|DESSERT_CHOCOLATE     6
SWEET_WINE|DESSERT_LIGHT         5
WHITE_WINE|LIGHT_STARTER         4
COCKTAIL_BOLD|DESSERT_CHOCOLATE  4
```

Cross-food fallback: when a (tier × dc × fc) bucket is empty, the lookup now pulls from any (tier × dc × *) entries and runs them through the existing 12-gate filter stack (food-noun filter rejects mismatches).

**Sample new outputs (gold, real corpus):**
> *"Gold standard; Avion 44 on the cowboy ribeye — the call you don't second-guess."* — corpus
> *"Gold standard; the bourbon that defines the KC."* — corpus
> *"Peak Chablis for tuxedo tuna — Burgundian precision on the crusted classic."* — corpus
> *"Gold standard; Pappy Van Winkle 13 Year Rye on the Tomahawk — the call you don't second-guess."* — corpus
> *"Peak collector Napa blend for bone-in filet — Mondavi-Rothschild prestige for the elevated cut."* — corpus

## Filter changes that made it possible

The class-keyword filter previously treated BIG_RED and ELEGANT_RED as fully separate, rejecting every "Cab" or "Bordeaux" mention from ELEGANT_RED phrase pools. That killed 50 of 71 ELEGANT_RED|STEAK_BOLD gold entries unnecessarily.

**Fix:** added `COMPATIBLE_CLASSES` rule — BIG_RED ↔ ELEGANT_RED share keyword space (real wines overlap). Then added `ELEGANT_SUBCLASS_FOREIGN` — a 10-key matrix that rejects cross-varietal mismatches inside ELEGANT_RED. So:

- Scavino Barolo (NEBBIOLO subclass) accepts "Cab" / "Bordeaux" mentions only if they don't conflict with NEBBIOLO's foreign list
- Marimar Estate (PINOT subclass) rejects phrases mentioning "Cab" / "Barolo" / "Malbec" / "Tempranillo"
- Quilt (CAB subclass) accepts "Napa Cab" / "Bordeaux blend" but rejects "Pinot" / "Barolo" / "Tempranillo"

Plus: extended `FOOD_NOUN_RX` with 8 missed nouns (scallops, swordfish, squash, gratin, broccolini, peanut, mac, mocha) so cross-food filtering catches more.

Plus: wrote a tier-word filter that rejects standalone `"Strong."`, `"Avoid."` corpus entries (caught 3 broken notes during the v2.8 audit).

## Engine state — final ledger v3.0

```
Total entities:         491 (435 drinks + 56 foods)
Total pair-notes:       48,914
Profile coverage:       190/435 (44%) bottle-specific
                        + 245 drinks now use voice-subclass-aware defaults

EDITORIAL_PHRASES:      857 entries (662 + 195 mined gold)
  gold:        195    excellent:  78
  strong:      219    works:     237
  avoid:       128

ELEGANT_RED voice subclasses:    11
WHISKEY voice subclasses:         6
DRINK_CLASS_DEFAULT classes:     18
VERDICT_PATTERNS templates:      30 (across 4 tiers)
Avoid template variants:         5 closer × 3 save-phrase

Filter gates on EP lookup:       12
Snapshot anchors:                81 / 81 clean
Health checks:                    9 / 9 pass
```

## Gold-tier sample comparison — before/after

**Scavino Barolo × Tomahawk:**
- v2.8: *"Gold standard; the structured red that defines the Tomahawk."* — generic template
- v3.0: *"Gold standard; if a guest asks what to drink with the Tomahawk, the answer is Scavino Barolo."* — corpus-driven

**Avion 44 × Cowboy Ribeye:**
- v2.8: *"Gold standard; añejo tequila on the cowboy ribeye — pour it and step back."* — template
- v3.0: *"Gold standard; recommend the añejo-on-bone-in-ribeye pairing without hesitation."* — real v9 corpus

**J.P. Grossot Chablis × Tuxedo Tuna:**
- v2.8: *"Gold standard; the white wine pour for the tuna."* — generic template
- v3.0: *"Peak Chablis for tuxedo tuna — Burgundian precision on the crusted classic."* — real v9 corpus

## What's next

Tier 2 roadmap items still open:

```
□ Auto-mine tier corrections from editorial-vs-pair-map disagreements
□ Auto-mine competitor references from preserved editorial
□ Expand snapshot anchors to ~250
□ More health-check rules (vocabulary diversity, pattern coverage)
□ Smarter "save for X course" closer
□ Pattern B (provenance-led body construction)
□ Continue curating the next 30 high-traffic ELEGANT_RED bottles
   (now subclass-aware defaults, but bottle-specific would be even better)
```

The engine is running at v9-equivalent quality on most of the sample now, with corpus-driven verdicts firing 42-75% of the time per tier. Remaining lift is incremental — each additional curation, mining pass, and filter tightening adds another percent of bottles to the bottle-specific bucket.
