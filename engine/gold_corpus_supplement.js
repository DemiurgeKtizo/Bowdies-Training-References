// Hand-written gold-tier corpus phrases for sparse (dc × fc) combos that
// fell to template even after mining. Each phrase is generic enough to apply
// to any bottle in the class — no varietal/brand specifics that would trigger
// the bottle-name catalog filter.
const GOLD_CORPUS_SUPPLEMENT = {
  'COGNAC|DESSERT_LIGHT': [
    { template: 'Peak cognac for the dessert — caramel-on-caramel match with a digestif close.', source: 'hand-written' },
    { template: 'Peak after-dinner cognac for the plate — barrel depth meets the sweet course at the close.', source: 'hand-written' },
  ],
  'HEAVY_SPIRIT|DESSERT_CHOCOLATE': [
    { template: 'Peak rich-spirit pour for the chocolate — heavy-spirit weight meets dark-cocoa depth at the digestif register.', source: 'hand-written' },
    { template: 'Peak heavy pour for the chocolate course — molasses-and-spice depth threads the dessert without losing the cocoa.', source: 'hand-written' },
  ],
  'HEAVY_SPIRIT|DESSERT_LIGHT': [
    { template: 'Peak heavy-spirit pour for the dessert — the rich-spirit depth lets the sweet course close the meal.', source: 'hand-written' },
  ],
  'VODKA|LIGHT_STARTER': [
    { template: 'Peak vodka for the starter — clean neutrality lets the cold-app proteins lead.', source: 'hand-written' },
  ],
  'ELEGANT_RED|RICH_SIDE': [
    { template: 'Peak red for the side — earth-on-earth match between bottle and plate.', source: 'hand-written' },
  ],
};
module.exports = { GOLD_CORPUS_SUPPLEMENT };
