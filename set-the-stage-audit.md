# Set The Stage — Deep Audit

**Date:** 2026-04-22
**Standard applied:** Not "does it work" — *does an FOH or BOH employee actually reach for this every day, or whenever it's helpful?* Anything that feels like internal scaffolding rather than a finished product is flagged.

---

## TL;DR

1. **The pairing engine is the crown jewel.** 187 hand-curated items across four tiers with prose pairing notes is genuinely differentiated. Nothing else in this build is at that level yet.
2. **The seating simulator is a strong demo, but not yet a service tool.** It's disconnected from any reservation, POS, or live-table state, so no one can actually open it during a service and have it match reality. That's the biggest gap between current-state and the "transcend current tools" bar.
3. **Mobile touch targets in the bar strip are below spec** (≈18px on a small phone for 13 fixed seats). This is the single most likely reason a server stops trusting the tool.
4. **Pinch-zoom is disabled site-wide** (viewport meta + global `touch-action`), which is an accessibility anti-pattern and means a 5.5" phone user can't zoom the floor map to read table numbers.
5. **The combine flow is a one-way door** — no cancel, no adjacency validation, easy to enter by accident. Highest-impact UX fix on the seating side.
6. **Visual language is genuinely on-brand for a chophouse** — gold + cream + warm dark surfaces, Playfair Display + Cormorant Garamond + Josefin Sans is the right typographic stack. This is rare for an internal tool and worth protecting.
7. **Repo hygiene needs a pass** — `pairing-map.js` (deprecated v1) and `pairing-map-v2.old.js` are still sitting in the folder. Cache-bust versions across files are wildly inconsistent (v=23 / v=19 / v=2 / v=1).

---

## Lens 1: Layout

**1.1 — Bar strip touch targets fail on small phones (line 54).** `bar-stool-btn` uses `flex:1 1 0` + `aspect-ratio:1/1` + `min-width:0` for 13 fixed seats. On a 320px iPhone SE viewport, after 16px side padding and 12 × 4px gaps, each button lands at ≈18px wide. iOS HIG minimum is 44pt. *Why it matters:* Bar covers can hit 50+ tabs per shift. Mis-taps compound into distrust.

**1.2 — The seat sheet at 52vh starves the floor map on landscape phones (line 122).** A 360px-tall landscape viewport gives the sheet 187px and leaves 173px for floor + tabs combined. Because pinch and pan are blocked, there's no "peek" gesture — the user has to fully close the sheet to verify a table position, then reopen it. *Why it matters:* The two surfaces a server needs to consult most often are mutually exclusive on the device they actually use.

**1.3 — Course tab bar hides scrollbars on every platform (lines 87–88).** `scrollbar-width:none` + `::-webkit-scrollbar{display:none}` removes all scroll affordance. With six tabs, the off-screen ones are invisible until the user happens to swipe. *Why it matters:* "All Food" looks like it doesn't exist unless you've been told it does.

**1.4 — Floor map SVG aspect-ratio is fixed but content density isn't.** `viewBox="0 0 100 60"` (or 64 for event) means the same y-axis range renders at the same height regardless of how many tables are in the section. Patio with sparse tables and Main Dining with dense tables both squish into the same vertical envelope. *Why it matters:* Pattern-matching the room layout from the overview is harder than it should be; the visual doesn't reward density differences.

**1.5 — Top bar is a single back button (line 259).** No active-table indicator, no session label, no "back to overview" affordance once you're deep in a seat sheet. The session has no name in the UI. *Why it matters:* Multi-table sessions feel like wandering — there's no spatial anchor.

---

## Lens 2: Sequencing

**2.1 — Combine flow is a one-way door (modal at line 424–432).** The `modal-options` div is JS-rendered with satellite tables only — no Cancel button. If a user lands here by accident (wrong guest count entered), the only way out is "Reset Table." That's hostile.

**2.2 — Bar group creation has no preview/confirm step (line 998 region).** Tap "Create Group" → groupIDs assigned, mode closed, toast appears. If you grouped the wrong seats, the only undo is reset. A "Confirm grouping?" intermediate state would cost almost nothing.

**2.3 — First-timer return loses seat focus.** After running first-timer for a guest, "← Back to Guest 1" reopens the sheet but `state.activeSeat` may be cleared, breaking the seat highlight. The user has to re-orient. *(Verify before fixing — agent flagged this in `set-the-stage-completion.js` but I didn't read those exact lines.)*

**2.4 — No session naming or recall.** localStorage saves automatically, but the session is anonymous. No "Tuesday lunch rush" label, no list of saved sessions, no export. Once you start a new session, the previous one is overwritten silently. *Why it matters:* The tool can't be used for prep ("walk me through how I'd seat the Henderson party tomorrow") because tomorrow's plan would clobber tonight's.

**2.5 — No empty/zero state with intent.** Opening Set The Stage cold drops you straight into the overview. There's no "What are you doing?" prompt — pre-shift drill, mid-service seating, training a new hire? Each of those wants a different starting flow. The current flow assumes you know.

---

## Lens 3: Functionality

**3.1 — Repo hygiene: dead pairing files in the folder.** `pairing-map.js` (v1, deprecated) and `pairing-map-v2.old.js` both sit in the folder. Only `pairing-map-v2.js?v=2` is loaded (line 443). *Why it matters:* Future-you (or a contributor) will edit the wrong file. Move them to `archive/` or delete.

**3.2 — Cache-bust versions are wildly inconsistent.** `set-the-stage-completion.js?v=23`, `table-defs.js?v=19` (just bumped today), `pairing-map-v2.js?v=2`, `pairing-notes.js?v=1`. The pairing data and notes haven't been bumped in a long time — if you've edited them and not bumped, users are seeing stale cached versions. Standardize a bump policy or drop the manual scheme for content-hashed builds later.

**3.3 — Pinch-zoom is killed at the page level (line 5 + line 9).** `<meta name="viewport" maximum-scale=1.0, user-scalable=no>` plus the global `touch-action: pan-x pan-y` rule means *no* user can pinch-zoom the floor map, the recs panel, or anything else. The touchmove guard the agent flagged (line 2332+) is layered on top but the viewport meta alone already does the damage. *Why it matters:* This is a known accessibility anti-pattern. Low-vision users and anyone trying to read a small table number on a 5.5" phone are stuck.

**3.4 — Pairing recommendation loop is O(n) per render (line 2189–2194 area).** With 187 items today this is fine. At 500 items + a special being added, it becomes a noticeable freeze on a mid-range phone. Worth indexing if/when the catalog grows.

**3.5 — `pairing-notes-generator.html` is unintegrated.** It's a standalone HTML file with no link from `set-the-stage.html`, no documented purpose in the README. If it works, surface it. If it's scaffolded only, document its state or remove it. Right now it looks abandoned.

**3.6 — `getCategoryForDisplay` (line 1834-ish) is a hardcoded label map.** Add a new wine category (`wine-orange`, `wine-rosé-sparkling`) and you get `[undefined]` headers in the recs UI. Two-place edits required to add anything new. Push this into the pairing data structure.

---

## Lens 4: Color & Visual Language

**4.1 — The palette is genuinely on-brand and well-disciplined.** Gold (#C9A84C / #E8C96A / #8A6B2A), three layered dark surfaces (#171513 → #1E1B18 → #242018), warm cream text (#F0E8D8). The noise overlay at line 19 (SVG fractal, 4% opacity) adds a paper-grain feel without eating performance. This is the strongest non-functional aspect of the build. **Don't let anyone "modernize" it.**

**4.2 — Tier badge colors aren't well-separated for colorblind users.** `--tier-strong:#7BA8C4` (muted blue) and `--tier-works:#7A9A8A` (sage green) are similar in luminance and saturation. Under deuteranopia (most common form, ~6% of men), they'd compress toward each other. Color-paired with the small "STRONG" / "WORKS" text labels at 7.5px (line 113), a colorblind reader is doing real cognitive work to differentiate. Consider adding a shape pip or an extra glyph (◆ ◇ ○) so tier reads without color.

**4.3 — Strikethrough on finished items is too quiet (line 150).** `text-decoration-color: rgba(90,82,72,0.6)` against `--surface-3` (#242018) is a near-invisible strike. The line gets visually retired but the strikethrough itself doesn't read. Either bump the alpha to ~0.9, or use a slightly warmer tone so the strike has presence without screaming.

**4.4 — Fine-print sizes are at the bottom edge of legibility.** 7–9px for tier badges, course tabs, and tab eyebrow labels. On a 5.5" phone with the noise overlay at 4% opacity, the 7.5px tier badge is borderline. Bumping these by 1–1.5pt would not break the typographic feel.

**4.5 — Selected-state contrast is gentle by design (line 174, 180).** `rgba(201,168,76,0.06)` background tint + gold border. On a glossy phone in service lighting, the 6% tint disappears entirely and only the border carries the signal. Probably fine for design intent — but pair this with a tactile cue (slightly heavier border, or an inner glow) so it survives ambient glare.

**4.6 — Typography stack is excellent.** Playfair Display (titles) + Cormorant Garamond (body) + Josefin Sans (eyebrows/labels) is the right move for a chophouse. The italic Cormorant for muted body text is particularly nice. Most internal tools never get this far.

---

## Lens 5: Details

**5.1 — Toast undo state is a single global (`toastUndoFn`).** Two rapid actions (add A, add B within 3s) means the second toast overwrites the first's undo handler. Tapping "Undo" reverses B even if the user thought they were undoing A. Use a toast queue with per-toast handlers.

**5.2 — Variable prompt input has no submit and no save indicator (line 346).** Typed text auto-saves via `oninput`, but if focus is lost during typing the save may not commit on the last few keystrokes. No visual "saved ✓" cue. *Why it matters:* Quietly losing a "French Onion" qualifier is the kind of thing that erodes trust without ever generating a bug report.

**5.3 — "First Timer" link is always visible, even when guests are fully booked (line 351).** No disabled state, no contextual tooltip. Easy to mis-tap and trigger a long flow.

**5.4 — Search results have no quick-add path (around line 1850).** Every add is: search → tap → modal → choose lock/consider → confirm. Four taps per item. Adding 4 items to a table = 16 taps. Quick-add (long-press to lock-immediately, or a dedicated "+" affordance) would compress this.

**5.5 — Expanded sheet has no keyboard escape and the collapse arrow is small.** A landscape phone user with the sheet expanded has a tiny target to dismiss. ESC should collapse; tapping the backdrop should at least minimize.

**5.6 — Hover states are present but irrelevant on touch.** Many `:hover` rules (lines 45, 55, 79, etc.) define refined desktop interactions, but the actual user is almost always on a phone. Equivalent `:active` / `:focus-visible` states would matter more.

**5.7 — No animation on state changes for items (lock → consider → finished).** State changes happen instantly. A 150–200ms color transition would communicate causality and feel more polished without slowing anything down.

---

## What's Excellent

- **The pairing data set itself.** This is the most defensible part of the product. 5,000+ lines of hand-curated pairing logic encodes Gabe's curatorial judgment and is genuinely hard for anyone else to replicate.
- **The four-tier system (excellent / strong / works / avoid).** Intuitive on first read, scales across categories, and the tier color system (despite the colorblind issue) reads cleanly for the majority of users.
- **The bottom-sheet seat panel with expand-to-full.** Modern mobile pattern, well-implemented, doesn't fight the OS.
- **The localStorage schema migration (line 526-542).** Backfilling `combinedWith` and `satelliteOf` on load is mature defensive coding for a personal project.
- **The booth-combination connector lines (line 835-841).** Subtle, dashed, rendered behind tables. Quietly elegant.
- **The variable-item system.** "Seasonal Soup" → "French Onion" with a context-aware prompt is flexible without being over-engineered.
- **The fine-dining visual language overall.** This is the rare internal tool that doesn't look like an internal tool.

---

## Strategic Blind Spots

These are the things that, if not solved, will keep Set The Stage in the "interesting reference" category instead of "tool every shift opens."

**SB1 — There is no clearly-named primary user with a clearly-named primary use case.** Right now the tool tries to serve: pre-shift drilling, mid-service seating, new-hire training, and pairing exploration — all from the same entry point with no branching. Each of those users wants different defaults, different surfaces, and different friction tolerances. Without picking one as the *primary* user and optimizing the cold-start flow for them, the tool feels like it's always slightly wrong for whoever opens it.

**SB2 — Zero integration with reservations, POS, or live table state.** Toast or any res system could pre-populate which tables are seated, who's at them, and what's been ordered. Without this, every session is manual entry, which means every session costs the user 60+ seconds of setup before they get value. *That's the central reason no one will reach for this during service.* Even a manual "import seating map" file paste would help bridge the gap.

**SB3 — The pairing engine is invisible to anyone who isn't already in a seating session.** Pairings are arguably more valuable as a standalone reference (a server prepping menu knowledge during a slow Tuesday) than buried inside seat-by-seat assignment. The flow forces a user to pick a table they don't have just to browse pairings. A direct entry into the pairing browser would 5x the daily-touch frequency.

**SB4 — "Avoid" pairings are stored but never surfaced.** The data has avoid lists; the UI never shows them. Servers don't learn *what not to recommend and why*. This is a missed teaching opportunity that the data already supports.

**SB5 — No admin / data-management UI.** Editing the pairing map = editing JS. Marking an item out-of-stock = code change. This guarantees the tool goes stale during real service ("we're out of the special, but it's still in here"). A simple toggle UI to mark items unavailable would dramatically increase trust.

**SB6 — No multi-user / shared state.** Two-person flows (host seats → server gets handoff) require both people to manually re-enter. A shared session URL or a simple QR-code handoff would unlock the use case.

**SB7 — The first-timer questionnaire isn't Bowdie's-specific.** Generic profile questions don't reflect what makes Bowdie's *Bowdie's*. A first-timer module that asks "have you had a dry-aged ribeye before?" or references the wine locker program would feel like Bowdie's, not a wedding-DJ planner.

**SB8 — No telemetry, no learning loop.** Which pairings get tapped? Which get expanded? Which get locked? Without this, the curation can't improve based on actual use. Even a simple `console.log` → localStorage event log would let Gabe review patterns weekly.

**SB9 — Identity question for the product itself.** Is Set The Stage *a training tool* (the implied current frame), *a service-time operational tool*, *a guest-facing menu helper*, or *a recruitment/onboarding asset*? Each of those points to a different next-quarter roadmap. Picking one is more important than building any single feature.

---

## Top 10 Highest-Leverage Fixes

Ranked by *(time-to-implement) × (impact on daily-use likelihood)*.

| # | Fix | Where | Effort | Why it's #N |
|---|-----|-------|--------|-------------|
| 1 | Add Cancel button to combine modal | line 424–432 | 15 min | Removes a one-way door that produces accidental table resets. Highest pain-per-dollar fix in the codebase. |
| 2 | Fix bar seat touch target floor (≥44px) | line 54 | 30 min | `flex: 0 0 auto; min-width: 44px;` + horizontal scroll if overflow. Eliminates the most common error vector on the most common surface. |
| 3 | Re-enable pinch-zoom on the floor map | line 5 + line 9 | 30 min | Drop `maximum-scale` and `user-scalable=no`; scope `touch-action` to specific containers instead of `*`. Restores accessibility floor. |
| 4 | Add quick-add path from search results | ~line 1850 | 1 hr | Long-press = lock immediately; tap = open modal. 4x speed-up on multi-item adds. |
| 5 | Surface "avoid" pairings with a single-tap reveal | recs panel + pairing data | 1–2 hrs | Educates servers, uses data already in the catalog, costs nothing. |
| 6 | Direct-entry pairing browser (decoupled from seating) | new screen | 2–3 hrs | Unblocks the most common standalone use case. Probably 5x daily touches by itself. |
| 7 | Session naming + a "saved sessions" list | localStorage layer | 2–3 hrs | Unlocks pre-shift planning, training scenarios, multi-day prep. |
| 8 | Repo hygiene pass: archive `pairing-map.js` and `pairing-map-v2.old.js`; standardize cache-bust scheme | folder-level | 30 min | Removes ambiguity. Future-you will thank present-you. |
| 9 | Add tactile/shape redundancy to tier pips for colorblind reads | lines 106–116 | 30 min | Add ◆/◇/○ glyphs alongside color. Colorblind-safe in 30 minutes of work. |
| 10 | Bump strikethrough alpha + add 200ms transitions on item state changes | lines 150, 96 | 20 min | Quiet polish that makes finished items actually read as finished. |

**Bonus (won't fit in an afternoon but worth scoping):** A "dry-run from a reservation list" mode — paste a Toast/OpenTable export, get a pre-populated session. This is the single feature that bridges Set The Stage from "interesting" to "necessary."

---

## Closing Read

The build is well above the bar for an internal tool. Visual language, pairing depth, and the bottom-sheet seat panel are all things most restaurant tech vendors *don't* do well, and Gabe has done them well solo.

The gap to "transcend current restaurant tools" is not a quality gap. It's a **product-shape gap.** Right now Set The Stage is shaped like a guided seating simulator. To become a daily-use service tool, it needs to be shaped like *a pairing reference that happens to support seating*, not the inverse. Fix items 1–3 in the list above to remove daily-friction, then make the structural pivot in items 6–7 to change the product's center of gravity.

Once that's done, the SB2 (live data integration) becomes the thing that makes it irreplaceable — but only after the daily-touch frequency is high enough that integration is worth wiring up.
