// engine/templated_detection.js
//
// SINGLE SOURCE OF TRUTH for "is this note engine-templated?"
//
// Used by:
//   engine_health_check.js              (templated/editorial split metric)
//   regenerate_dxf_notes.js             (which DxF notes to rewrite)
//   regenerate_templated_notes.js
//   regenerate_food_x_food.js           (FxF regen)
//   mine_corpus_all_tiers.js            (filter from mining)
//   mine_gold_corpus.js
//   mine_food_corpus.js
//   fix_food_noun_leaks.js
//
// Catches both:
//   (a) Current engine output patterns (DxF and FxF generators)
//   (b) Recycled body phrases that escape (a) but are clearly engine-shaped
//       and have been baked into the corpus by prior regen passes.
//
// Authored 2026-05-06 to consolidate the divergent isTemplatedNote()
// implementations that had drifted between health-check (over-broad,
// caught ~47% of corpus including human editorial) and regen-script
// (over-narrow, caught only ~7%, leaving 22K+ recycled notes frozen).

'use strict';

const SIGS = [
  // === Avoid-tier closers REMOVED 2026-05-06 — these are structural
  // recommendation language, not recycled templating. Avoid notes intentionally
  // emit "Save the X for the steak course" / "Hold the X for ..." / etc. as
  // their actionable closer. Counting them as "templated" inflated the metric
  // without indicating any quality issue. The engine still generates them
  // identically; isTemplatedNote() simply doesn't flag them as needing regen.
  // /Save the .+ for the steak/,
  // /Save the .+ for another course/,
  // /Hold the .+ for /,
  // /belongs on (the steak|another) course/,
  // /Avoid; Reach for/,
  // /Pour the .+ after the meal/,
  //
  //

  // === Universal verdict-template tells ===
  /Gold standard;.*lock that sells itself/,
  /runs straight into [^—]+— the/,
  /meets at register with/,
  / that defines /,
  /the call you don't second-guess/,
  /the call servers pour without second-guessing/,
  /reads cleanly at the table/,
  /elegance meets the plate/,
  /sits in the pocket on/,
  /earns a regular/,
  /dials in cleanly/,
  /workhorse pairing/,
  /keeps pace with/,
  /that's the play/,
  /-- textbook\./,
  /the answer is /,
  /pour it and step back/,
  /if a guest asks what to drink with/,
  /is fine on .+ -- fine, not memorable/,
  /doesn't fight .+, but doesn't lift it either/,
  /pulls neither way against/,
  /backup when the strong calls/,
  /save the storytelling/,
  /spoken for/,
  /without asking for attention/,
  /is the answer, full stop/,
  /when a guest asks what works/,
  /-- the kind of pour that earns a regular/,
  /carries .+ without overshooting/,

  // === Recycled body skeletons (2026-05-06 audit additions) ===
  // These were classified as editorial under the old detector but appear
  // thousands of times — clearly engine-shaped, must be regenerated.
  /the bourbon depth settles on the plate/,
  /vanilla layers into the cream/,
  /pairing sits at neutral register without/,
  /call lands as a measured alongside/,
  /call holds neither soars nor fights/,
  /pairing reads as a quiet alongside/,
  /the side carries its register/,
  /Works alongside; nothing fights in this/,
  /the bourbon-on-light-soup call/,
  /the bourbon-on-light-side call/,
  /the bourbon-on-dessert pairing/,
  /the bourbon character meets the dessert at digestif register/,

  // === Compound bridge-verb skeletons (DxF body) ===
  // Pattern: "X's [character] [verb] the [food]'s [edge] — the [tail]"
  // The bridge verb + recycled tail "the bourbon depth..." or
  // "the [class] depth..." identifies templated body construction.
  /character (?:sits alongside|leans against|reads alongside|stays alongside|holds with|finds neutral with|plays cleanly against|sits beside) the .+ — the/,
];

function isTemplatedNote(note) {
  if (!note) return true;
  return SIGS.some(rx => rx.test(note));
}

module.exports = { isTemplatedNote, SIGS };
