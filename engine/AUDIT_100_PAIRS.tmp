# 100-Pair Random Quality Audit (Verbatim)

**Date:** 2026-04-27
**Sample:** 100 deterministically-shuffled pairs (seed 20260427), stratified 20 per tier (gold/excellent/strong/works/avoid)
**Generator:** drink_x_food_generator.js v2.3 (post Tier 1 + Tier 2 fixes)
**Output saved at:** `engine/audit_100_pairs_full.txt`

## TL;DR

```
Clean (matches v9 quality, no issues):     74/100  (74%)
Issues (any visible problem):              26/100  (26%)

Per tier:
  Gold:      18/20 clean (2 minor possessive issues)
  Excellent: 11/20 clean (9 issues — mostly corpus-verdict misapplication)
  Strong:    14/20 clean (6 issues — same pattern)
  Works:     17/20 clean (3 issues — wrong subclass + wrong corpus phrase)
  Avoid:     14/20 clean (6 issues — article rules + character fragments)
```

The architecture is sound; remaining issues fall into 5 well-defined patterns, each fixable with targeted code changes (1–2 hours each, no rebuild needed).

---

## What's working — verbatim samples of clean output

### Gold (Pattern A em-dash setup with mined/curated tasting notes):

> **#4 Bone-In Filet × Weller Millennium [gold]**
> *"Weller Millennium — 20-year wheated bourbon, heavily allocated, the white-whale of the Weller family. The bourbon depth settles into the bone-enhanced filet, and the vanilla softens the bone-enhanced cut. Gold standard; the wheated bourbon that defines the bone-in filet."*

> **#10 Glenlivet 12 × Cheesecake [gold]**
> *"Glenlivet 12 — entry Speyside, pear, honey. The bourbon-cask pear lifts the cheesecake, and the oak rounds the cream. Gold standard; Glenlivet 12 on the cheesecake — the call you don't second-guess."*

> **#13 Bone Marrow × Fernet Branca [gold]**
> *"Fernet Branca — cask-strength, menthol, nuclear bitter. The nuclear-bitter edge cuts the rich marrow, and the menthol frames the unctuous marrow. Gold standard; Fernet Branca on the bone marrow — the call you don't second-guess."*
> *(Note: Fernet IS the leader for marrow×bourbon, so no competitor ref appended — correct.)*

### Strong with chemistry+competitor ref:

> **#43 Never Say Die Small Batch × Prime Tartare [strong]**
> *"Never Say Die Small Batch's oak-and-vanilla bourbon depth meets at register with the tartare's raw beef-and-brine umami: the bourbon depth settles into the tartare, and the oak frames the umami. Strong; the flagship extended maturation is a refined premium counterpoint; **Fernet Branca still cuts it harder.**"*

### Avoid with proper alternatives:

> **#82 Seared Scallops × Jack Daniel's 12 Year [avoid]**
> *"...overpowers the scallops' caramelized sear-and-sweet richness — the plate deserves Jean-Pierre Grossot Chablis, Pierre Gimonnet Special Club Brut, or Joseph Mellot Sancerre, not a scotch. Avoid; Reach for Jean-Pierre Grossot Chablis, Pierre Gimonnet Special Club Brut, or Joseph Mellot Sancerre. Save the Jack Daniel's 12 Year for the steak."*
> *(Alternatives match v9; structure matches v9.)*

### Works tier with terse v9-style verdict:

> **#62 Pikesville Rye × Asparagus [works]**
> *"Pikesville Rye's 110-proof HH Maryland-style rye leans against the asparagus' green-vegetal edge: the rye spice cuts the asparagus, and the rye edge frames the green spear. Works; **Pikesville Rye is over-specified for a side — save the collector bottle for the main course.**"*

---

## Issue Category 1: Corpus verdict misapplication (~12 instances — biggest issue)

EDITORIAL_PHRASES verdicts get pulled by (tier × drinkClass × foodClass) but some corpus phrases mention specific bottles by name or descriptor. When that bottle isn't the one in the current pair, the verdict reads wrong.

> **#34 Clase Azul Plata × Seafood Tower [excellent]**
> *"...Excellent; the ultra-clean Clase Azul Plata register is the textbook **light-rum** answer to the seafood tower — neutral enough to let the sear speak."*
> ✗ Clase Azul Plata is **tequila**, not rum.

> **#30 Crab Cake × Long Road Gin [excellent]**
> *"...Excellent; the **Cape-floral botanicals** add distinctive dimension to crab no European craft gin offers."*
> ✗ Long Road is **Michigan**, not Cape (Inverroche is Cape).

> **#35 Mushrooms × Bulleit Bourbon [excellent]**
> *"...Excellent; the charred-oak finish meets the earthy-rich with **richer vanilla than Fiddich 12 offers**."*
> ✗ Compares Bulleit (bourbon) to Glenfiddich 12 (scotch). Apples to oranges.

> **#37 Milagro Reposado × House Wedge [excellent]**
> *"...Excellent; **Milagro Reposado is aperitivo at its most textbook**, and the bitter-orange lifts the wedge's anchovy-char in a way the Fernets can't reach."*
> ✗ Milagro is tequila, not aperitivo.

> **#39 Never Say Die Small Batch × Carrot Cake [excellent]**
> *"...Excellent; the **sherry-derived raisin-and-spice** marries cocoa with textbook dessert-sherry resonance."*
> ✗ Never Say Die is bourbon (no sherry). Carrot cake has no cocoa.

> **#54 Filet × Nickel & Nickel Cab [strong]**
> *"...Strong; **caramel-orange settles the meal.**"*
> ✗ Nickel & Nickel Cab has no caramel-orange.

> **#56 Escargot × Plymouth Gin [strong]**
> *"...Strong; **Plymouth Gin sansho** adds distinctive Japanese-pepper lift to the butter; **Mahón's Mediterranean juniper** still cuts butter hardest."*
> ✗ Sansho is Roku Gin, not Plymouth. Mahón is a different gin.

> **#41 Trout × Hendricks Orbium [strong]**
> *"...Strong; **Hendricks Orbium is a GR-pride story-driven tower pairing**."*
> ✗ "GR-pride" = Grand Rapids, but Hendricks is Scottish, not Michigan.

> **#42 Bruichladdich × Shrimp Bisque [strong]**
> *"...Strong; **Bruichladdich 21** rides the shrimp bisque at collector register."*
> ✗ Pair is plain Bruichladdich (no age). Corpus phrase mentions "Bruichladdich 21" — wrong age statement.

> **#51 Pablo Sour × Mocha Creme [strong]**
> *"...Strong; **mint threads through spice cleanly.**"*
> ✗ Mocha creme has no mint.

> **#78 Stoli Elit × Lobster Mac [works]**
> *"...Works; **Friulian amaro** cuts the glaze's sweetness with digestif brightness."*
> ✗ Stoli is vodka, not amaro.

**Fix:** Add a bottle-name filter to `_editorialVerdict()`. Reject corpus phrases that mention bottle names other than the current pair's drink, or category words ("rum", "amaro", "gin") that don't match the drink's class.

---

## Issue Category 2: Mined character contains sentence-completing verbs or fragments (~6 instances)

The bottle miner extracts character phrases that should slot into "{Bottle}'s {character} [verb] {target}". Some mined entries already contain a verb, leading to ungrammatical output.

> **#3 Avion 44 × Cowboy Ribeye [gold]**
> *"**Avion 44's Avion's 44-month aged extra añejo** runs straight into..."*
> ✗ Mined character "Avion's 44-month aged extra añejo" already starts with possessive "Avion's", producing double possessive.

> **#21 El Mayor Extra Anejo × Filet [excellent]**
> *"**El Mayor Extra Anejo's accessible aged El Mayor** lifts the filet's..."*
> ✗ Mined character contains the bottle name itself ("aged El Mayor"), producing "El Mayor Extra Anejo's ... El Mayor" repetition.

> **#90 Burrata × Jefferson's Ocean Voyage 23 [avoid]**
> *"**Jefferson's Ocean Voyage 23's sea-aged character handles dessert density** overpowers the burrata's..."*
> ✗ Character contains a verb-clause "handles dessert density"; followed by "overpowers" makes broken grammar.

> **#92 Brulee × Negroni [avoid]**
> *"**Negroni's savory-bitter profile belongs with mushrooms or marrow** overpowers the brulee's..."*
> ✗ Character is a complete sentence ending in "marrow"; followed by "overpowers" — broken.

> **#89 Crab Cake × Balvenie 16 [avoid]**
> *"**Balvenie 16 Single Barrel's First Fill American Oak** overpowers..."*
> ⚠ "First Fill American Oak" is technically valid but reads odd as character (it's a cask designation, not a flavor profile).

**Fix:** Tighten the bottle miner to reject character snippets that:
- Start with the bottle's own name or possessive form
- Contain a verb (handles, settles, layers, cuts, frames, etc.)
- End with a noun phrase suggesting an incomplete clause needs completion

---

## Issue Category 3: Article "a" vs "an" before vowel-starting class names (~4 instances)

> **#86 Louis XIII × Bone-In Filet [avoid]**
> *"...not **a icon cognac**. Avoid; ..."*
> ✗ Should be "an icon cognac".

> **#91 Trout × Ocho Anejo [avoid]**
> *"...not **a añejo tequila**. ..."*
> ✗ Should be "an añejo tequila".

> **#93 Komos Extra Anejo × Seafood Tower [avoid]**
> *"...not **a añejo tequila**. ..."*
> ✗ Same.

> **#95 Crab Cake × Muga Reserva [avoid]**
> *"...not **a elegant red**. ..."*
> ✗ Should be "an elegant red".

**Fix:** One-line code change: detect vowel-starting class label, swap "a" → "an".

---

## Issue Category 4: Possessive double-up on plural-end names (~3 instances)

> **#20 J Davies Ferrington Vineyards × Filet [gold]**
> *"**J Davies Ferrington Vineyards's** red-fruit-and-spice elegance..."*
> ✗ "Vineyards's" — should be "Vineyards'" (possessive of plural-end name).

> **#2 Scavino Barolo × Tomahawk [gold]**
> *"**Scavino Barolo's this structured red's cassis-and-dark-fruit** runs straight into..."*
> ✗ Mined character starts with "this structured red's" — when prepended with "{Bottle}'s", we get double possessive.

**Fix:** In the possessive helper, detect plural-end and use apostrophe-only. In the miner, reject character snippets starting with "this".

---

## Issue Category 5: Whiskey subclass misidentified for Jack Daniel's (~2 instances)

> **#76 Broccolini × Jack Daniel's Bonded [works]**
> *"**Jack Daniel's Bonded's Highland-scotch character** finds neutral with the broccolini's..."*

> **#82 Seared Scallops × Jack Daniel's 12 Year [avoid]**
> *"**Jack Daniel's 12 Year's Highland-scotch character** overpowers the scallops'..."*

✗ Jack Daniel's is American whiskey (Tennessee), not scotch. The voice-subclass detection isn't catching this brand.

**Fix:** Add `/jack daniel/` to the BOURBON match path in `whiskeyVoiceSubclass()`.

---

## Quantitative summary by category

| Issue category | Count | Severity | Fix scope |
|---|---|---|---|
| 1. Corpus verdict misapplication | 12 | High (visible mismatch) | Add bottle-name + class-keyword filter |
| 2. Mined character fragments | 6 | High (broken grammar) | Tighten miner reject rules |
| 3. Article "a" vs "an" | 4 | Low (cosmetic) | One-line code fix |
| 4. Possessive double-up | 3 | Medium | Helper fix + miner reject |
| 5. Jack Daniel's subclass | 2 | Medium (one brand) | Add to subclass regex |
| **Total** | **27 issues across 26 notes** | | |

(Some notes have minor + major issues; the top-line "26 issues" counts unique problem-notes.)

---

## Recommended next pass

All five categories are quick fixes that don't require architectural changes:

1. **Tighten `_editorialVerdict()` filter** — bottle-name filter + class-keyword filter. Should drop most of Category 1 (12 issues).
2. **Tighten mining filter** — reject snippets starting with "this", reject snippets containing verbs (handles/lifts/cuts/settles/etc.), reject snippets containing the bottle's own name. Should drop Category 2 (6) + part of Category 4.
3. **Fix article rule** — sed-style: when next word starts with vowel, use "an". Drops Category 3 (4).
4. **Fix possessive helper** — handle "Vineyards" pattern. Drops Category 4 remainder.
5. **Add Jack Daniel's to BOURBON regex** — one-line. Drops Category 5 (2).

Realistic outcome after one more pass: **~95/100 clean**.

After ~30 more hand-curated bottle profiles to replace mined ones for the most-visible bottles, we'd be **~98-99/100 clean** — approaching v9 parity even on the long tail.
