// engine/pairing_engine_generator.js (v3 — chemistry-wired)
//
// Templated pair-note generator -- food x food only.
// Now consults CHEMISTRY_CLAIMS for flavor-pair-specific bridge clauses
// when a match exists for the pair under construction. Otherwise falls back
// to the verb-template body bridges from v2.

'use strict';

const fs = require('fs');
const vm = require('vm');
const path = require('path');
const crypto = require('crypto');

const taxonomy = require('./pairing_engine_taxonomy');

// ── COURSE WEIGHT ──────────────────────────────────────────────────────────
const CATEGORY_WEIGHT = { 'steak':1, 'main':2, 'starter':3, 'soup-salad':4, 'side':5, 'dessert':6 };
function canonicalize(foodA, foodB) {
  const wA = CATEGORY_WEIGHT[foodA.category] || 99;
  const wB = CATEGORY_WEIGHT[foodB.category] || 99;
  return wA <= wB ? [foodA, foodB] : [foodB, foodA];
}

// ── ARCHETYPE ──────────────────────────────────────────────────────────────
function archetypeFor(foodA, foodB) {
  const a = foodA.category, b = foodB.category;
  if (b === 'dessert' && (a === 'steak' || a === 'main')) return 'COURSE_TO_DESSERT';
  if (a === 'dessert' && b === 'dessert') return 'DESSERT_PAIR';
  if (a === 'steak' && b === 'side') return 'STEAK_SIDE';
  if (a === 'main'  && b === 'side') return 'MAIN_SIDE';
  if (a === 'side'  && b === 'side') return 'SIDE_PAIR';
  if (a === 'steak' && b === 'starter')      return 'STEAK_STARTER';
  if (a === 'steak' && b === 'soup-salad')   return 'STEAK_SOUP_SALAD';
  if (a === 'starter' && b === 'soup-salad') return 'STARTER_SOUP_SALAD';
  if (a === 'starter' && b === 'side')       return 'STARTER_SIDE';
  if (a === 'starter' && b === 'dessert')    return 'STARTER_TO_DESSERT';
  if (a === 'main' && b === 'steak')         return 'MAIN_STEAK';
  return 'GENERIC_FOOD_PAIR';
}

// ── FOOD CHARACTER (for setup/avoid clauses) ───────────────────────────────
const FOOD_CHARACTER = {
  'Filet Mignon':'lean buttery tenderness','Bone-In Filet':'bone-enhanced buttery tenderness',
  'Kansas City':'lean-bold strip with savory grain','Cowboy Ribeye':'marbled char-and-fat richness',
  'The Tomahawk':'theatrical bone-in marbling and smoky char','Porterhouse':'dual strip-and-filet character',
  'Bone Marrow':'unctuous rendered-marrow richness','Escargot':'garlic-herb-butter savory weight',
  'Prime Tartare':'raw beef-and-brine umami','Brussels and Belly':'maple-pork-belly glaze over charred sprouts',
  'Crab Cake':'delicate sweet crab in a crisp crust','Shrimp Cocktail':'cool brine-and-citrus shellfish',
  'Burrata':'fresh basil-tomato-cream delicacy','Seafood Tower':'chilled shellfish lineup',
  'French Onion':'beef-broth-and-gruyere depth','Mushroom Bisque':'silky earthy mushroom cream',
  'Gumbo':'spiced creole stew','Shrimp Bisque':'creamy shellfish soup',
  'Loaded Potato':'rich loaded-potato soup','Clam Chowder':'creamy clam-and-potato base',
  'Tomato Basil':'bright tomato-basil acid','Butternut Squash':'silky sweet squash cream',
  'Seasonal Soup':'house seasonal build','Creamy Potato':'silky-bodied cream',
  'Broccoli Cheddar':'cheddar-and-broccoli cream','Roasted Red Pepper Chickpea':'roasted-pepper chickpea warmth',
  'Grilled Caesar':'charred-romaine and anchovy edge','House Wedge':'iceberg-and-bleu cool crunch',
  'Au Gratin Potatoes':'cheese-and-cream golden crust','Creamed Spinach':'rich bechamel-laced greens',
  'Lobster Mac':'shellfish-in-cream indulgence','Asparagus':'green-vegetal edge',
  'Broccolini':'tender green stalks','Sauteed Garlic Spinach':'garlic-buttered greens',
  'Honey Roasted Carrots':'honey-glazed carrot sweetness','Seasonal Vegetables':'seasonal garden plate',
  'Truffle Fries':'parmesan-and-truffle fry weight','Mushrooms':'earthy umami weight',
  'Roast Half Chicken':'herbed crisp-skin roast','Faroe Island Salmon':'rich oily flesh',
  'Swordfish':'meaty swordfish steak','Chilean Seabass':'buttery seabass flesh',
  'Tuxedo-Crusted Yellowfin Tuna':'seared-rare flesh with sesame crust','Rainbow Trout':'delicate flesh',
  'Market Fish':'clean white-fish flesh','Salt-Cured Halibut':'salt-cured flesh',
  'Vegetable Curry with Chickpeas':'spiced chickpea-curry warmth','Seared Scallops':'caramelized sear-and-sweet richness',
  'Chocolate Cake':'layered chocolate body','Chocolate Brownie':'fudgy cocoa-and-chocolate weight',
  'Peanut Butter Brownie':'peanut-butter-and-chocolate fudge','Mocha Creme':'coffee-chocolate richness',
  'Creme Brulee':'burnt-sugar custard','Cheesecake':'dense tangy dairy custard',
  'Beignets':'warm sugar-dusted pastry','Carrot Cake':'cream-cheese-frosted spice cake',
};

function characterFor(food) {
  if (FOOD_CHARACTER[food.name]) return FOOD_CHARACTER[food.name];
  const prof = food.profile || [];
  if (prof.length) return prof.slice(0,2).join(' and ');
  return food.name.toLowerCase();
}

// ── FOOD FLAVORS (chemistry-claims index keys per food) ────────────────────
//
// Each food maps to flavor head-words that may match keys in CHEMISTRY_CLAIMS.
// Order matters: leftmost flavors are tried first when looking for a match.
// Includes both "drink-side" flavors (smoke, char, vanilla-like notes the
// kitchen produces) and "food-side" flavors (butter, cream, fat, umami).

const FOOD_FLAVORS = {
  // Steaks
  'Filet Mignon':         ['butter','fat','beef','tenderloin','meat'],
  'Bone-In Filet':        ['butter','fat','beef','tenderloin','meat'],
  'Kansas City':          ['char','fat','savory','strip','meat'],
  'Cowboy Ribeye':        ['char','smoke','fat','cap-fat','meat','marbled'],
  'The Tomahawk':         ['smoke','char','fat','cap-fat','meat','marbled'],
  'Porterhouse':          ['char','fat','strip','meat','beef'],
  // Starters
  'Bone Marrow':          ['fat','butter','meat','marrow','richness'],
  'Escargot':             ['butter','herbs','savory'],
  'Prime Tartare':        ['meat','umami','savory','brine'],
  'Brussels and Belly':   ['char','fat','sugar','sweet','savory'],
  'Crab Cake':            ['shellfish','sweet','crust'],
  'Shrimp Cocktail':      ['shellfish','citrus','brine'],
  'Burrata':              ['cream','butter','herbs'],
  'Seafood Tower':        ['shellfish','brine'],
  // Soup / Salad
  'French Onion':         ['broth','cheese','sauce'],
  'Mushroom Bisque':      ['cream','earthy','bisque','umami'],
  'Gumbo':                ['spice','sauce','soup'],
  'Shrimp Bisque':        ['shellfish','cream','bisque'],
  'Loaded Potato':        ['cream','soup','richness'],
  'Clam Chowder':         ['shellfish','cream','soup'],
  'Tomato Basil':         ['herbs','soup','green'],
  'Butternut Squash':     ['cream','sugar','soup'],
  'Seasonal Soup':        ['soup'],
  'Creamy Potato':        ['cream','soup'],
  'Broccoli Cheddar':     ['cheese','cream','green'],
  'Roasted Red Pepper Chickpea': ['soup','spice'],
  'Grilled Caesar':       ['char','green','herbs'],
  'House Wedge':          ['cheese','green'],
  // Sides
  'Au Gratin Potatoes':   ['cream','cheese','crust'],
  'Creamed Spinach':      ['cream','butter','green'],
  'Lobster Mac':          ['shellfish','cream','cheese'],
  'Asparagus':            ['green','edge'],
  'Broccolini':           ['green'],
  'Sauteed Garlic Spinach': ['butter','green','herbs'],
  'Honey Roasted Carrots':['honey','sugar','sweet'],
  'Seasonal Vegetables':  ['green'],
  'Truffle Fries':        ['fat','umami','earthy','savory'],
  'Mushrooms':            ['earthy','umami'],
  // Mains
  'Roast Half Chicken':   ['bird','herbs','crust'],
  'Faroe Island Salmon':  ['fish','fat','oil'],
  'Swordfish':            ['fish','meat'],
  'Chilean Seabass':      ['fish','butter','richness'],
  'Tuxedo-Crusted Yellowfin Tuna': ['fish','char','crust','sesame'],
  'Rainbow Trout':        ['fish'],
  'Market Fish':          ['fish'],
  'Salt-Cured Halibut':   ['fish'],
  'Vegetable Curry with Chickpeas': ['spice','sauce'],
  'Seared Scallops':      ['shellfish','char','sweet'],
  // Desserts
  'Chocolate Cake':       ['chocolate','cocoa','sugar','dessert'],
  'Chocolate Brownie':    ['chocolate','cocoa','sugar','dessert'],
  'Peanut Butter Brownie':['chocolate','cocoa','sugar','dessert'],
  'Mocha Creme':          ['coffee','chocolate','cream','mocha','dessert'],
  'Creme Brulee':         ['sugar','cream','dessert'],
  'Cheesecake':           ['cheese','cream','dairy','dessert','sugar'],
  'Beignets':             ['sugar','dessert'],
  'Carrot Cake':          ['spice','sugar','dessert'],
};

function flavorsFor(food) { return FOOD_FLAVORS[food.name] || []; }

// ── BRIDGE PARTS (for fallback verb-template body) ─────────────────────────
const BRIDGE_PARTS = {
  'Filet Mignon':{subjects:['the lean cut','the buttery beef'],targets:['the lean buttery filet','the delicate restraint of the cut']},
  'Bone-In Filet':{subjects:['the bone-enhanced cut','the buttery beef'],targets:['the bone-enhanced filet','the marrow-edged tenderness']},
  'Kansas City':{subjects:['the lean-bold strip','the savory grain'],targets:['the strip steak','the firm savory cut']},
  'Cowboy Ribeye':{subjects:['the marbled char','the rendered fat'],targets:['the cap-fat ribeye','the bold marbled cut']},
  'The Tomahawk':{subjects:['the marbled char','the smoky bone-in weight'],targets:['the 36oz showpiece','the theatrical bone-in cut']},
  'Porterhouse':{subjects:['the dual strip-and-filet','the bold beefy character'],targets:['the dual-cut steak','the strip-and-tender pairing']},
  'Bone Marrow':{subjects:['the unctuous marrow','the rendered fat'],targets:['the rich marrow','the bone-enhanced richness']},
  'Escargot':{subjects:['the garlic-herb butter','the savory weight'],targets:['the buttered escargot','the garlic-and-parsley plate']},
  'Prime Tartare':{subjects:['the raw beef','the briny umami'],targets:['the tartare','the raw-beef plate']},
  'Brussels and Belly':{subjects:['the maple-glazed belly','the charred sprouts'],targets:['the pork-belly plate','the sweet-savory build']},
  'Crab Cake':{subjects:['the sweet crab','the crisp crust'],targets:['the delicate crab cake','the sweet shellfish plate']},
  'Shrimp Cocktail':{subjects:['the cool brine','the cocktail citrus'],targets:['the chilled shrimp','the cocktail-citrus plate']},
  'Burrata':{subjects:['the fresh cream','the basil-tomato edge'],targets:['the burrata','the milky cheese plate']},
  'Seafood Tower':{subjects:['the chilled shellfish','the cool brine'],targets:['the seafood tower','the chilled shellfish lineup']},
  'French Onion':{subjects:['the beef-broth depth','the gruyere crust'],targets:['the French onion','the broth-and-cheese soup']},
  'Mushroom Bisque':{subjects:['the silky cream','the earthy mushroom'],targets:['the mushroom bisque','the earthy cream']},
  'Gumbo':{subjects:['the spiced stew','the creole heat'],targets:['the gumbo','the spiced creole bowl']},
  'Shrimp Bisque':{subjects:['the creamy shellfish','the silky body'],targets:['the shrimp bisque','the rich shellfish soup']},
  'Loaded Potato':{subjects:['the rich potato','the loaded toppings'],targets:['the loaded potato soup','the indulgent potato bowl']},
  'Clam Chowder':{subjects:['the creamy clam','the silky chowder'],targets:['the chowder','the clam-and-potato cream']},
  'Tomato Basil':{subjects:['the bright acid','the herbed tomato'],targets:['the tomato basil','the bright soup']},
  'Butternut Squash':{subjects:['the silky cream','the sweet squash'],targets:['the squash bisque','the silky sweet bowl']},
  'Seasonal Soup':{subjects:['the house build','the seasonal body'],targets:['the seasonal soup','the house bowl']},
  'Creamy Potato':{subjects:['the silky body','the potato cream'],targets:['the potato soup','the silky bowl']},
  'Broccoli Cheddar':{subjects:['the cheddar cream','the broccoli weight'],targets:['the broccoli cheddar','the cheese-and-broccoli soup']},
  'Roasted Red Pepper Chickpea':{subjects:['the roasted pepper','the chickpea warmth'],targets:['the chickpea soup','the pepper-and-chickpea bowl']},
  'Grilled Caesar':{subjects:['the charred romaine','the anchovy edge'],targets:['the grilled Caesar','the charred-and-anchovy salad']},
  'House Wedge':{subjects:['the cool crunch','the bleu dressing'],targets:['the wedge','the iceberg-and-bleu salad']},
  'Au Gratin Potatoes':{subjects:['the cheese cream','the golden crust'],targets:['the au gratin','the cheese-and-cream side']},
  'Creamed Spinach':{subjects:['the rich bechamel','the laced greens'],targets:['the creamed spinach','the rich greens']},
  'Lobster Mac':{subjects:['the shellfish cream','the dairy weight'],targets:['the lobster mac','the indulgent shellfish-and-cream side']},
  'Asparagus':{subjects:['the green spear','the vegetal edge'],targets:['the asparagus','the bright green side']},
  'Broccolini':{subjects:['the tender green','the bright stem'],targets:['the broccolini','the tender green side']},
  'Sauteed Garlic Spinach':{subjects:['the buttered greens','the garlic edge'],targets:['the garlic spinach','the green-and-garlic side']},
  'Honey Roasted Carrots':{subjects:['the honey glaze','the roasted sweetness'],targets:['the honey carrots','the glazed carrot side']},
  'Seasonal Vegetables':{subjects:['the garden plate','the seasonal mix'],targets:['the seasonal vegetables','the garden side']},
  'Truffle Fries':{subjects:['the parmesan-and-truffle weight','the savory fry'],targets:['the truffle fries','the parmesan-and-truffle side']},
  'Mushrooms':{subjects:['the earthy mushroom','the umami depth'],targets:['the mushrooms','the earthy umami side']},
  'Roast Half Chicken':{subjects:['the herbed crisp skin','the roast bird'],targets:['the roast chicken','the herbed bird']},
  'Faroe Island Salmon':{subjects:['the rich oily flesh','the buttery salmon'],targets:['the salmon','the oily-rich fish']},
  'Swordfish':{subjects:['the meaty steak','the firm-fish flesh'],targets:['the swordfish','the meaty fish']},
  'Chilean Seabass':{subjects:['the buttery flesh','the rich seabass'],targets:['the seabass','the rich-buttered fish']},
  'Tuxedo-Crusted Yellowfin Tuna':{subjects:['the seared-rare flesh','the sesame crust'],targets:['the tuna','the seared-rare tuna plate']},
  'Rainbow Trout':{subjects:['the delicate flesh','the trout body'],targets:['the trout','the delicate fish']},
  'Market Fish':{subjects:['the clean flesh','the white-fish body'],targets:['the market fish','the clean white-fish']},
  'Salt-Cured Halibut':{subjects:['the salt-cured flesh','the firm halibut'],targets:['the halibut','the salt-cured fish']},
  'Vegetable Curry with Chickpeas':{subjects:['the spiced curry','the chickpea warmth'],targets:['the curry','the spiced vegetable plate']},
  'Seared Scallops':{subjects:['the caramelized sear','the scallop sweetness'],targets:['the scallops','the seared-rare scallop plate']},
  'Chocolate Cake':{subjects:['the layered chocolate','the cocoa weight'],targets:['the chocolate cake','the layered cocoa dessert']},
  'Chocolate Brownie':{subjects:['the fudgy cocoa','the brownie weight'],targets:['the brownie','the cocoa-fudge dessert']},
  'Peanut Butter Brownie':{subjects:['the peanut-butter fudge','the cocoa stack'],targets:['the PB brownie','the peanut-cocoa dessert']},
  'Mocha Creme':{subjects:['the coffee-chocolate cream','the mocha depth'],targets:['the mocha creme','the coffee-chocolate dessert']},
  'Creme Brulee':{subjects:['the burnt-sugar crust','the silky custard'],targets:['the brulee','the burnt-sugar dessert']},
  'Cheesecake':{subjects:['the tangy custard','the dairy weight'],targets:['the cheesecake','the dense dairy dessert']},
  'Beignets':{subjects:['the warm pastry','the sugar dust'],targets:['the beignets','the choux-and-sugar dessert']},
  'Carrot Cake':{subjects:['the spice cake','the cream-cheese frosting'],targets:['the carrot cake','the spice-and-cream dessert']},
};

function _bridgeParts(food) {
  return BRIDGE_PARTS[food.name] || {
    subjects: ['the ' + characterFor(food)],
    targets:  ['the ' + characterFor(food)],
  };
}

// ── SHORT NAME / POSSESSIVE ────────────────────────────────────────────────
const SHORT_NAME = {
  'Filet Mignon':'the filet','Bone-In Filet':'the bone-in filet','Kansas City':'the KC',
  'Cowboy Ribeye':'the cowboy ribeye','The Tomahawk':'the Tomahawk','Porterhouse':'the porterhouse',
  'Bone Marrow':'the bone marrow','Escargot':'the escargot','Prime Tartare':'the tartare',
  'Brussels and Belly':'Brussels + Belly','Crab Cake':'the crab cake','Shrimp Cocktail':'the shrimp cocktail',
  'Burrata':'the burrata','Seafood Tower':'the seafood tower','French Onion':'the French onion',
  'Mushroom Bisque':'the mushroom bisque','Gumbo':'the gumbo','Shrimp Bisque':'the shrimp bisque',
  'Loaded Potato':'the loaded potato','Clam Chowder':'the chowder','Tomato Basil':'the tomato basil',
  'Butternut Squash':'the butternut squash','Seasonal Soup':'the seasonal soup','Creamy Potato':'the potato soup',
  'Broccoli Cheddar':'the broccoli cheddar','Roasted Red Pepper Chickpea':'the chickpea soup',
  'Grilled Caesar':'the Caesar','House Wedge':'the wedge','Au Gratin Potatoes':'the au gratin',
  'Creamed Spinach':'the creamed spinach','Lobster Mac':'the lobster mac','Asparagus':'the asparagus',
  'Broccolini':'the broccolini','Sauteed Garlic Spinach':'the garlic spinach',
  'Honey Roasted Carrots':'the honey carrots','Seasonal Vegetables':'the seasonal vegetables',
  'Truffle Fries':'the truffle fries','Mushrooms':'the mushrooms','Roast Half Chicken':'the chicken',
  'Faroe Island Salmon':'the salmon','Swordfish':'the swordfish','Chilean Seabass':'the seabass',
  'Tuxedo-Crusted Yellowfin Tuna':'the tuna','Rainbow Trout':'the trout','Market Fish':'the market fish',
  'Salt-Cured Halibut':'the halibut','Vegetable Curry with Chickpeas':'the curry','Seared Scallops':'the scallops',
  'Chocolate Cake':'the chocolate cake','Chocolate Brownie':'the brownie','Peanut Butter Brownie':'the PB brownie',
  'Mocha Creme':'the mocha creme','Creme Brulee':'the brulee','Cheesecake':'the cheesecake',
  'Beignets':'the beignets','Carrot Cake':'the carrot cake',
};
function shortNameFor(food) { return SHORT_NAME[food.name] || food.name.replace(/^The\s+/i,'').toLowerCase(); }
function possessiveFor(food) {
  const sn = shortNameFor(food);
  return sn.endsWith('s') ? sn + "'" : sn + "'s";
}

// ── BODY BRIDGE COMPOSER (chemistry-aware) ─────────────────────────────────

const BRIDGE_VERBS = {
  gold:['handles cleanly','carries cleanly into','frames'],
  excellent:['handles','carries into','frames','lifts'],
  strong:['meets','holds with','matches'],
  works:['sits with','reads alongside','holds against'],
  avoid:['obliterates','overwhelms','crowds out','overshadows'],
};
const BRIDGE_VERBS_2 = {
  gold:['threads','softens','underlines','rounds'],
  excellent:['threads','softens','underlines','rounds'],
  strong:['sits with','frames','underlines'],
  works:['reads quietly against','composes against','sits beside'],
  avoid:['drowns out','fights','crowds out'],
};

// Look up a chemistry clause matching foodA's flavors x foodB's flavors.
// Returns the FIRST best match (by chemistry-claims count) or null. Tries
// both directions: (foodA-flavor as drink-side, foodB-flavor as food-side)
// AND the reverse, since for food x food either food can occupy either
// slot of the chemistry library.
function findChemistryClause(foodA, foodB, claims) {
  if (!claims) return null;
  const flavA = flavorsFor(foodA);
  const flavB = flavorsFor(foodB);

  let bestClause = null;
  let bestCount = 0;
  for (const fa of flavA) {
    for (const fb of flavB) {
      // Direction 1: A as drink-side, B as food-side
      if (claims[fa] && claims[fa][fb] && claims[fa][fb].count > bestCount) {
        bestClause = claims[fa][fb].clause;
        bestCount  = claims[fa][fb].count;
      }
      // Direction 2: B as drink-side, A as food-side
      if (claims[fb] && claims[fb][fa] && claims[fb][fa].count > bestCount) {
        bestClause = claims[fb][fa].clause;
        bestCount  = claims[fb][fa].count;
      }
    }
  }
  return bestClause;
}

function bodyBridge(foodA, foodB, tier, ctx) {
  const partsA = _bridgeParts(foodA);
  const partsB = _bridgeParts(foodB);
  const verbs1 = BRIDGE_VERBS[tier] || BRIDGE_VERBS.works;
  const verbs2 = BRIDGE_VERBS_2[tier] || BRIDGE_VERBS_2.works;
  const sig = foodA.name + '|' + foodB.name + '|' + tier;
  const h = crypto.createHash('md5').update(sig).digest();
  const i1 = h.readUInt8(0) % partsA.subjects.length;
  const j1 = h.readUInt8(1) % partsB.targets.length;
  const v1 = h.readUInt8(2) % verbs1.length;
  const i2 = (i1 + 1) % partsA.subjects.length;
  const j2 = (j1 + 1) % partsB.targets.length;
  const v2 = h.readUInt8(3) % verbs2.length;
  const subA1 = partsA.subjects[i1], tgtB1 = partsB.targets[j1];
  const subA2 = partsA.subjects[i2], tgtB2 = partsB.targets[j2];

  const templateClause1 = subA1 + ' ' + verbs1[v1] + ' ' + tgtB1;
  const templateClause2 = subA2 + ' ' + verbs2[v2] + ' ' + tgtB2;

  // For non-avoid tiers, try to use a real chemistry clause as the
  // SECOND clause (the first stays as the per-food-bridge template, which
  // names the foods specifically; the chemistry clause adds genuine
  // flavor-pair detail).
  const claims = ctx && ctx.CHEMISTRY_CLAIMS;
  if (claims && tier !== 'avoid') {
    const chemClause = findChemistryClause(foodA, foodB, claims);
    if (chemClause) {
      // Only use chemistry if the second template clause would be a near-
      // duplicate (same subject+target as first), to keep the clause
      // pulling its weight instead of being flavor decoration.
      return templateClause1 + ', and ' + chemClause;
    }
  }

  if (subA1 === subA2 && tgtB1 === tgtB2) return templateClause1;
  return templateClause1 + ', and ' + templateClause2;
}

// ── AVOID ALTERNATIVES ─────────────────────────────────────────────────────
function alternativesFor(food, pairingMap, n) {
  if (!pairingMap) return [];
  const entry = pairingMap.find(e => e.name === food.name);
  if (!entry) return [];
  const out = [];
  for (const tier of ['gold','excellent']) {
    const list = entry[tier];
    if (!Array.isArray(list)) continue;
    for (const name of list) if (!out.includes(name)) out.push(name);
  }
  return out.slice(0, n || 3);
}

// ── TEMPLATES ──────────────────────────────────────────────────────────────
const TEMPLATES = {
  'STEAK_SIDE.gold':[
    "* {A} alongside {b} -- {aPos} {charA} carries cleanly into {bPos} {charB}: {body}. Gold standard; the side-on-steak pairing the menu was built around.",
    "* {aCap} with {b} -- {aPos} {charA} frames {bPos} {charB}: {body}. Gold standard; the side that defines the steak course."
  ],
  'STEAK_SIDE.excellent':[
    "{A} alongside {b} -- {aPos} {charA} carries cleanly into {bPos} {charB}: {body}. Excellent; the headline side pairing for {a}.",
    "{aCap} into {b} -- {aPos} {charA} meets {bPos} {charB}: {body}. Excellent; reliable headline side for the steak course.",
    "{A} with {b} -- {body}. Excellent; the side that completes the steak plate.",
    "{aCap} alongside {b} -- {aPos} {charA} frames {bPos} {charB}: {body}. Excellent; the side-on-steak call lands at full register."
  ],
  'STEAK_SIDE.strong':[
    "{A} alongside {b} -- {body}. Strong; reliable side-on-steak match.",
    "{aCap} with {b} -- {aPos} {charA} meets {bPos} {charB} cleanly: {body}. Strong; the side carries its register against the cut.",
    "{A} into {b} -- {body}. Strong; the side composes cleanly with the cut.",
    "{aCap} and {b} on the plate -- {body}. Strong; the side holds the steak's weight without competing."
  ],
  'STEAK_SIDE.works':[
    "{A} with {b} -- {body}. Works; the side call holds at neutral register.",
    "{aCap} into {b} -- {body}. Works; safe alongside, but not the headline pick.",
    "{A} alongside {b} -- {body}. Works; the side reads as a measured plate companion.",
    "{aCap} with {b} -- {body}. Works; the side sits without pulling focus."
  ],
  'STEAK_SIDE.avoid':[
    "{aPosCap} {charA} overshadows {bPos} {charB}: {body}. Avoid; the cut overshadows the side. Pair {b} with a lighter cut, and pour {altsA} for {a}."
  ],
  'COURSE_TO_DESSERT.gold':[
    "* After {a}, {b} -- {aPos} {charA} gives way to {bPos} {charB}: {body}. Gold standard; the textbook close to a steak meal.",
    "* {aCap} into {b} -- {body}. Gold standard; the dessert that defines the close after {a}."
  ],
  'COURSE_TO_DESSERT.excellent':[
    "After {a}, {b} -- {body}. Excellent; classic steak-house transition into {b}.",
    "{aCap} closes with {b} -- {body}. Excellent; the dessert picks up where the cut leaves off.",
    "{aCap} closes with {b} -- {body}. Excellent; the meal resolves into the dessert at full register.",
    "After {a}, {b} -- {aPos} {charA} resolves into {bPos} {charB}: {body}. Excellent; reliable headline close for the steak course."
  ],
  'COURSE_TO_DESSERT.strong':[
    "After {a}, {b} -- {body}. Strong; reliable steak-house finish.",
    "{aCap} closes with {b} -- {body}. Strong; the dessert carries the close at full register.",
    "{aCap} closes with {b} -- {body}. Strong; the close composes without strain.",
    "After {a}, {b} -- {aPos} {charA} settles into {bPos} {charB}: {body}. Strong; the dessert lands without competing with the cut."
  ],
  'COURSE_TO_DESSERT.works':[
    "After {a}, {b} -- {body}. Works; a measured close to the meal.",
    "{aCap} closes with {b} -- {body}. Works; the close holds, neither soars nor fights.",
    "{aCap} closes with {b} -- {body}. Works; the dessert sits cleanly against the meal's register.",
    "After {a}, {b} -- the close composes neutrally: {body}. Works; the dessert closes without crowding."
  ],
  'COURSE_TO_DESSERT.avoid':[
    "{aPosCap} {charA} doesn't resolve into {bPos} {charB}: {body}. Avoid; the close clashes with the meal. After {a}, reach for a lighter dessert -- pour {altsA} alongside {a} and route {b} to a different night."
  ],
  'STEAK_STARTER.gold':[
    "* {A} preceded by {b} -- {bPos} {charB} sets up {aPos} {charA} cleanly: {body}. Gold standard; the starter that primes the cut."
  ],
  'STEAK_STARTER.excellent':[
    "{A} preceded by {b} -- {body}. Excellent; the starter sets up the cut at full register.",
    "{aCap} after {b} -- {bPos} {charB} primes the palate for {aPos} {charA}: {body}. Excellent; reliable opener for the steak course."
  ],
  'STEAK_STARTER.strong':[
    "{A} preceded by {b} -- {body}. Strong; reliable opener for the steak course.",
    "{aCap} after {b} -- {body}. Strong; the starter composes cleanly before the cut."
  ],
  'STEAK_STARTER.works':[
    "{A} preceded by {b} -- {body}. Works; the call holds, neither soars nor fights.",
    "{aCap} after {b} -- {body}. Works; the starter sits without crowding the cut."
  ],
  'STEAK_STARTER.avoid':[
    "{aPosCap} {charA} obliterates {bPos} {charB}: {body}. Avoid; the cut is too bold for the delicate starter. Stand {b} on its own course -- pair {b} with {altsB} -- and pour {altsA} for {a}.",
    "{aPosCap} {charA} overwhelms {bPos} {charB}: {body}. Avoid; the courses can't share a meal cleanly. Pair {b} with {altsB} on a different visit; pour {altsA} alongside {a}."
  ],
  'STEAK_SOUP_SALAD.excellent':[
    "{A} preceded by {b} -- {body}. Excellent; the soup-or-salad frames the steak course cleanly.",
    "{aCap} after {b} -- {bPos} {charB} sets the table for {aPos} {charA}: {body}. Excellent; the headline opener for the cut."
  ],
  'STEAK_SOUP_SALAD.strong':[
    "{A} into {b} -- {body}. Strong; reliable opener for the cut.",
    "{aCap} preceded by {b} -- {body}. Strong; the opener composes cleanly before the cut."
  ],
  'STEAK_SOUP_SALAD.works':[
    "{A} preceded by {b} -- {body}. Works; the call holds at neutral register.",
    "{A} with {b} alongside -- {body}. Works; the side-salad call holds.",
    "{aCap} after {b} -- {body}. Works; the opener sits without competing."
  ],
  'STEAK_SOUP_SALAD.avoid':[
    "{aPosCap} {charA} crowds out {bPos} {charB}: {body}. Avoid; the courses don't compose together. Pair {b} with {altsB}; pour {altsA} for {a}."
  ],
  'MAIN_SIDE.excellent':[
    "{A} alongside {b} -- {aPos} {charA} carries cleanly into {bPos} {charB}: {body}. Excellent; the headline side pairing for {a}."
  ],
  'MAIN_SIDE.strong':[
    "{A} with {b} -- {body}. Strong; reliable side for the main."
  ],
  'MAIN_SIDE.works':[
    "{A} alongside {b} -- {body}. Works; the call holds at neutral register."
  ],
  'MAIN_SIDE.avoid':[
    "{aPosCap} {charA} overwhelms {bPos} {charB}: {body}. Avoid; the side can't hold its register against the main. Pair {b} with {altsB}; pour {altsA} for {a}."
  ],
  'MAIN_STEAK.works':[
    "{A} alongside {b} -- two protein courses on one table. {body}. Works; the meal carries two cuts cleanly."
  ],
  'MAIN_STEAK.avoid':[
    "{aPosCap} {charA} clashes with {bPos} {charB}: {body}. Avoid; the two protein courses pull in different directions. Order one or the other -- pour {altsA} for {a}, or {altsB} for {b}."
  ],
  'DESSERT_PAIR.works':[
    "{A} and {b} together -- {body}. Works; the two desserts share the close without crowding."
  ],
  'DESSERT_PAIR.avoid':[
    "{A} and {b} together overlap on the close -- {body}. Avoid; pick one or the other. Pair {a} with {altsA}, or {b} with {altsB}."
  ],
  'STARTER_TO_DESSERT.works':[
    "{aCap} closes with {b} -- {body}. Works; the close composes without strain."
  ],
  'STARTER_TO_DESSERT.avoid':[
    "{aPosCap} {charA} doesn't carry into {bPos} {charB}: {body}. Avoid; the meal's bookends don't compose. Pair {a} with {altsA}; pair {b} with {altsB}."
  ],
  'STARTER_SOUP_SALAD.works':[
    "{A} alongside {b} -- {body}. Works; the courses share the table without crowding."
  ],
  'STARTER_SOUP_SALAD.avoid':[
    "{aPosCap} {charA} clashes with {bPos} {charB}: {body}. Avoid; the opening courses don't compose together. Pair {a} with {altsA}; pair {b} with {altsB}."
  ],
  'STARTER_SIDE.works':[
    "{A} alongside {b} -- {body}. Works; the call holds at neutral register."
  ],
  'STARTER_SIDE.avoid':[
    "{aPosCap} {charA} overwhelms {bPos} {charB}: {body}. Avoid; the courses can't share register. Pair {b} with {altsB}; pair {a} with {altsA}."
  ],
  'SIDE_PAIR.works':[
    "{A} and {b} together -- {body}. Works; the two sides share the meal without competing."
  ],
  'SIDE_PAIR.avoid':[
    "{A} and {b} together overlap -- {body}. Avoid; pick one side or the other."
  ],
  'GENERIC_FOOD_PAIR.gold':[
    "* {A} with {b} -- {body}. Gold standard; the pairing that defines the meal."
  ],
  'GENERIC_FOOD_PAIR.excellent':[
    "{A} with {b} -- {body}. Excellent; the headline call."
  ],
  'GENERIC_FOOD_PAIR.strong':[
    "{A} with {b} -- {body}. Strong; reliable match across the courses."
  ],
  'GENERIC_FOOD_PAIR.works':[
    "{A} with {b} -- {body}. Works; the call holds at neutral register."
  ],
  'GENERIC_FOOD_PAIR.avoid':[
    "{aPosCap} {charA} clashes with {bPos} {charB}: {body}. Avoid; the courses don't share register. Pair {a} with {altsA}; pair {b} with {altsB}."
  ],
};

// ── PICKER ─────────────────────────────────────────────────────────────────
function pickTemplate(archetype, tier, foodA, foodB) {
  const key = archetype + '.' + tier;
  let variants = TEMPLATES[key];
  if (!variants || variants.length === 0) variants = TEMPLATES['GENERIC_FOOD_PAIR.' + tier];
  if (!variants || variants.length === 0) throw new Error('No template for archetype ' + archetype + ' tier ' + tier);
  const sig = foodA.name + '|' + foodB.name + '|' + tier;
  const h = crypto.createHash('md5').update(sig).digest();
  return variants[h.readUInt32BE(0) % variants.length];
}

// ── RENDER ─────────────────────────────────────────────────────────────────
function render(template, foodA, foodB, charA, charB, body, altsA, altsB) {
  const a = shortNameFor(foodA), b = shortNameFor(foodB);
  const aPos = possessiveFor(foodA), bPos = possessiveFor(foodB);
  const aCap = a.charAt(0).toUpperCase() + a.slice(1);
  const aPosCap = aPos.charAt(0).toUpperCase() + aPos.slice(1);
  const bCap = b.charAt(0).toUpperCase() + b.slice(1);
  const formatList = (arr) => {
    if (!arr || !arr.length) return '';
    if (arr.length === 1) return arr[0];
    if (arr.length === 2) return arr[0] + ' or ' + arr[1];
    return arr.slice(0,-1).join(', ') + ', or ' + arr[arr.length-1];
  };
  return template
    .replace(/\{A\}/g, foodA.name).replace(/\{B\}/g, foodB.name)
    .replace(/\{aCap\}/g, aCap).replace(/\{bCap\}/g, bCap)
    .replace(/\{aPosCap\}/g, aPosCap).replace(/\{aPos\}/g, aPos).replace(/\{bPos\}/g, bPos)
    .replace(/\{a\}/g, a).replace(/\{b\}/g, b)
    .replace(/\{charA\}/g, charA).replace(/\{charB\}/g, charB)
    .replace(/\{body\}/g, body || '')
    .replace(/\{altsA\}/g, formatList(altsA)).replace(/\{altsB\}/g, formatList(altsB));
}

// ── MAIN ENTRY ─────────────────────────────────────────────────────────────
function generate(foodA, foodB, tier, ctx) {
  if (!foodA || !foodB) throw new Error('generate: foodA and foodB required');
  if (!taxonomy.FOOD_CATS.has(foodA.category)) throw new Error('generate: foodA must be a food (got ' + foodA.category + ')');
  if (!taxonomy.FOOD_CATS.has(foodB.category)) throw new Error('generate: foodB must be a food (got ' + foodB.category + ')');
  if (!['gold','excellent','strong','works','avoid'].includes(tier)) throw new Error('generate: invalid tier ' + tier);
  const [a, b] = canonicalize(foodA, foodB);
  const archetype = archetypeFor(a, b);
  const charA = characterFor(a), charB = characterFor(b);
  const body  = bodyBridge(a, b, tier, ctx);
  const altsA = alternativesFor(a, ctx.PAIRING_MAP, 3);
  const altsB = alternativesFor(b, ctx.PAIRING_MAP, 3);
  const template = pickTemplate(archetype, tier, a, b);
  return render(template, a, b, charA, charB, body, altsA, altsB);
}

module.exports = {
  generate, archetypeFor, characterFor, canonicalize, bodyBridge,
  alternativesFor, findChemistryClause, flavorsFor,
  TEMPLATES, FOOD_CHARACTER, BRIDGE_PARTS, FOOD_FLAVORS,
};

// ── SELF-TEST ──────────────────────────────────────────────────────────────
if (require.main === module) {
  const repoRoot = path.resolve(__dirname, '..');
  const ctx = {};
  vm.createContext(ctx);
  const load = (f, n) => vm.runInContext(fs.readFileSync(path.join(repoRoot, f), 'utf8') + '\nthis.' + n + ' = ' + n + ';', ctx);
  load('pairing-map-v2.js',     'PAIRING_MAP');
  load('chemistry-claims.js',   'CHEMISTRY_CLAIMS');
  const byName = {};
  for (const e of ctx.PAIRING_MAP) byName[e.name] = e;
  const samples = [
    ['Filet Mignon','Truffle Fries','excellent'],
    ['Filet Mignon','Lobster Mac','excellent'],
    ['Filet Mignon','Creamed Spinach','strong'],
    ['Filet Mignon','House Wedge','works'],
    ['Filet Mignon','Cheesecake','works'],
    ['Filet Mignon','Chocolate Brownie','works'],
    ['The Tomahawk','Truffle Fries','strong'],
    ['Cowboy Ribeye','Mocha Creme','works'],
    ['The Tomahawk','Mocha Creme','works'],
    ['Bone-In Filet','Lobster Mac','excellent'],
    ['Porterhouse','Brussels and Belly','strong'],
    ['Bone Marrow','The Tomahawk','excellent'],
    ['The Tomahawk','Burrata','avoid'],
    ['Cowboy Ribeye','Seared Scallops','avoid'],
    ['Filet Mignon','Faroe Island Salmon','avoid'],
  ];
  console.log('=== SAMPLE GENERATIONS (v3 -- chemistry-wired) ===');
  for (const [aName, bName, tier] of samples) {
    const a = byName[aName], b = byName[bName];
    if (!a || !b) continue;
    const note = generate(a, b, tier, ctx);
    const arch = archetypeFor.apply(null, canonicalize(a, b));
    console.log('');
    console.log('[' + tier.padEnd(9) + '][' + arch.padEnd(20) + '] ' + aName + ' x ' + bName);
    console.log('  ' + note);
  }
}
