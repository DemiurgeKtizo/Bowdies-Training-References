// engine/food_profiles_curated.js
//
// Curated per-food profiles — the FxF analogue to bottle_profiles_curated.js.
//
// Each entry feeds three layers of the generator:
//   - tastingStyle   : a kitchen-spec'd tasting line (3-5 attributes), used as
//                      Pattern A opener material (mirrors DxF bottle tasting notes).
//   - prepNotes      : how Bowdie's actually prepares the dish. Anchored to the
//                      cooking-method conventions in CLAUDE.md (flame-grilled
//                      steaks, seared scallops, pan-finished salmon, etc.).
//   - subjects / targets : 4-6 each, expanded from the 2-each in
//                      pairing_engine_generator.js BRIDGE_PARTS. Lets the body
//                      composer vary clauses across hundreds of pairs without
//                      recycling the same six shape phrases.
//   - verdictHooks   : tier-specific characterization phrases that REPLACE the
//                      recycled "the side sits without pulling focus" /
//                      "safe opener, the meal builds without crowding"
//                      closers. One hook per tier per food category combo.
//   - axes           : weight + register descriptors. Used by the generator
//                      to pick body-sentence shapes contextually.
//
// Voice exemplar: the 16 hand-curated FxF AVOID notes in pairing-notes.js
// (Cowboy Ribeye × Crab Cake, Filet × Salmon, etc.) — sommelier-grade, kitchen-
// grounded, server-deliverable. Profiles here should make those AVOID notes
// look natural, not exceptional.
//
// See CLAUDE.md > "Cooking method reference" for prep terminology.

'use strict';

const FOOD_PROFILES = {

  // ── STEAKS (6) ──────────────────────────────────────────────────────────
  // Bowdie's prep: flame-grilled, rested, oven-finished. Never seared.

  'Filet Mignon': {
    category: 'steak',
    shortName: 'the filet',
    character: 'lean buttery tenderness',
    prepNotes: 'flame-grilled 10oz center-cut tenderloin, rested and oven-finished, butter-basted to plate',
    tastingStyle: 'lean butter-tender beef, mild grilled char, restrained finish',
    weight: 'medium',
    register: 'restrained-rich',
    axes: ['lean', 'tender', 'buttery'],
    subjects: [
      'the lean cut',
      'the buttery beef',
      'the butter-tender filet',
      'the 10oz tenderloin',
      'the restrained center-cut'
    ],
    targets: [
      'the lean buttery filet',
      'the delicate restraint of the cut',
      'the butter-tender center cut',
      'the steakhouse benchmark filet',
      'the 10oz lean-tender plate'
    ],
    verdictHooks: {
      gold:      'the filet pairing the steak course is built around',
      excellent: 'a headline call for the filet',
      strong:    'reliable on the filet plate',
      works:     'sits cleanly with the filet'
    }
  },

  'Bone-In Filet': {
    category: 'steak',
    shortName: 'the bone-in filet',
    character: 'bone-enhanced buttery tenderness',
    prepNotes: 'flame-grilled bone-in tenderloin, rested and oven-finished, marrow-edged from the bone-on prep',
    tastingStyle: 'butter-tender beef with bone depth, grilled char, marrow-laced finish',
    weight: 'medium-plus',
    register: 'restrained-rich with depth',
    axes: ['tender', 'buttery', 'bone-laced', 'mineral'],
    subjects: [
      'the bone-enhanced cut',
      'the buttery beef',
      'the bone-in filet',
      'the marrow-edged tenderloin',
      'the elevated filet'
    ],
    targets: [
      'the bone-enhanced filet',
      'the marrow-edged tenderness',
      'the bone-in center cut',
      'the elevated steakhouse cut',
      'the marrow-depth filet'
    ],
    verdictHooks: {
      gold:      'the bone-in filet at full register',
      excellent: 'a headline call for the elevated filet',
      strong:    'reliable on the bone-in cut',
      works:     'sits cleanly with the bone-in filet'
    }
  },

  'Kansas City': {
    category: 'steak',
    shortName: 'the KC',
    character: 'lean-bold strip with savory grain',
    prepNotes: 'flame-grilled bone-in strip, rested and oven-finished — well-marbled, beefy, firm grain',
    tastingStyle: 'lean-bold strip beef, firm grilled crust, savory-grain depth',
    weight: 'medium-plus',
    register: 'lean-bold',
    axes: ['lean-bold', 'firm', 'savory', 'grain-tight'],
    subjects: [
      'the lean-bold strip',
      'the savory grain',
      'the bone-in strip',
      'the firm-grain KC',
      'the marbled strip'
    ],
    targets: [
      'the strip steak',
      'the firm savory cut',
      'the bone-in KC',
      'the well-marbled strip',
      'the grain-tight strip plate'
    ],
    verdictHooks: {
      gold:      'the KC at peak — lean-bold strip on the plate',
      excellent: 'a headline call for the strip',
      strong:    'reliable on the KC',
      works:     'sits cleanly with the strip'
    }
  },

  'Cowboy Ribeye': {
    category: 'steak',
    shortName: 'the cowboy ribeye',
    character: 'marbled char-and-fat richness',
    prepNotes: 'flame-grilled 26oz bone-in ribeye, rested and oven-finished, cap-fat rendered against the flame',
    tastingStyle: 'heavy marbled beef, charred crust, rendered cap-fat, full-throated finish',
    weight: 'heavy',
    register: 'bold-rich',
    axes: ['marbled', 'charred', 'fatty', 'bold'],
    subjects: [
      'the marbled char',
      'the rendered fat',
      'the bone-in ribeye',
      'the cap-fat ribeye',
      'the 26oz cut'
    ],
    targets: [
      'the cap-fat ribeye',
      'the bold marbled cut',
      'the 26oz bone-in',
      'the char-and-fat cowboy',
      'the heavy ribeye plate'
    ],
    verdictHooks: {
      gold:      'the cowboy ribeye where char-and-fat earns the headline',
      excellent: 'a headline call for the marbled cut',
      strong:    'reliable on the bone-in ribeye',
      works:     'sits with the cowboy ribeye'
    }
  },

  'The Tomahawk': {
    category: 'steak',
    shortName: 'the Tomahawk',
    character: 'theatrical bone-in marbling and smoky char',
    prepNotes: 'flame-grilled 36oz long-bone tomahawk, rested and oven-finished, plated tableside as the showpiece',
    tastingStyle: 'heavy smoky beef, charred crust, deep marbling, theatrical presentation',
    weight: 'heaviest',
    register: 'showpiece-bold',
    axes: ['theatrical', 'smoky', 'marbled', 'heaviest'],
    subjects: [
      'the marbled char',
      'the smoky bone-in weight',
      'the 36oz showpiece',
      'the long-bone Tomahawk',
      'the rendered fat'
    ],
    targets: [
      'the 36oz showpiece',
      'the theatrical bone-in cut',
      'the long-bone Tomahawk',
      'the smoky char-and-fat plate',
      'the table-defining cut'
    ],
    verdictHooks: {
      gold:      'the Tomahawk at full theatrical register',
      excellent: 'a headline call for the 36oz',
      strong:    'reliable on the Tomahawk',
      works:     'sits with the Tomahawk plate'
    }
  },

  'Porterhouse': {
    category: 'steak',
    shortName: 'the Porterhouse',
    character: 'dual strip-and-filet character',
    prepNotes: 'flame-grilled bone-in T-bone, rested and oven-finished — strip on one side, filet on the other',
    tastingStyle: 'dual-texture beef, strip-and-tender on the same plate, grilled crust across both',
    weight: 'medium-plus',
    register: 'dual-character',
    axes: ['dual-texture', 'strip-and-filet', 'crowd-pleasing'],
    subjects: [
      'the dual strip-and-filet',
      'the bold beefy character',
      'the bone-in T-bone',
      'the strip-and-tender',
      'the dual-cut Porterhouse'
    ],
    targets: [
      'the dual-cut steak',
      'the strip-and-tender pairing',
      'the dual-character T-bone',
      'the table-share Porterhouse',
      'the strip-and-filet plate'
    ],
    verdictHooks: {
      gold:      'the Porterhouse split — strip and tender on the plate',
      excellent: 'a headline call for the dual-cut',
      strong:    'reliable on the Porterhouse',
      works:     'sits with the Porterhouse plate'
    }
  },

  // ── STARTERS (8) ────────────────────────────────────────────────────────

  'Bone Marrow': {
    category: 'starter',
    shortName: 'the bone marrow',
    character: 'unctuous rendered-marrow richness',
    prepNotes: 'roasted beef femur, marrow rendered hot, served with grilled bread and herb gremolata',
    tastingStyle: 'rich rendered marrow, beefy depth, herb-bright finish from the gremolata',
    weight: 'rich',
    register: 'unctuous-savory',
    axes: ['unctuous', 'rendered', 'beefy', 'rich'],
    subjects: [
      'the unctuous marrow',
      'the rendered fat',
      'the roasted bone',
      'the marrow-and-gremolata plate',
      'the beefy bone-broth richness'
    ],
    targets: [
      'the rich marrow',
      'the bone-enhanced richness',
      'the rendered-marrow plate',
      'the marrow-and-bread starter',
      'the beefy unctuous opener'
    ],
    verdictHooks: {
      gold:      'the marrow primes the steak course at full register',
      excellent: 'a headline opener for the marrow',
      strong:    'reliable on the marrow plate',
      works:     'sits with the marrow opener'
    }
  },

  'Escargot': {
    category: 'starter',
    shortName: 'the escargot',
    character: 'garlic-herb-butter savory weight',
    prepNotes: 'classic Burgundian escargot, butter-and-garlic sauce, parsley-finished, served bubbling',
    tastingStyle: 'garlic-butter intensity, herb-bright parsley, savory snail richness',
    weight: 'rich',
    register: 'savory-buttered',
    axes: ['garlicky', 'buttery', 'herb-bright', 'savory'],
    subjects: [
      'the garlic-herb butter',
      'the savory weight',
      'the buttered escargot',
      'the parsley-finished plate',
      'the bubbling butter-and-garlic'
    ],
    targets: [
      'the buttered escargot',
      'the garlic-and-parsley plate',
      'the butter-bath starter',
      'the herb-bright snail plate',
      'the bubbling escargot'
    ],
    verdictHooks: {
      gold:      'the escargot opens the meal at full register',
      excellent: 'a headline opener for the escargot',
      strong:    'reliable on the escargot',
      works:     'sits with the escargot'
    }
  },

  'Prime Tartare': {
    category: 'starter',
    shortName: 'the tartare',
    character: 'raw beef-and-brine umami',
    prepNotes: 'hand-cut prime tenderloin, capers, shallots, mustard, raw yolk on top, served chilled',
    tastingStyle: 'raw beef minerality, briny capers, sharp shallot edge, yolk-rich finish',
    weight: 'medium',
    register: 'cool-umami',
    axes: ['raw', 'briny', 'umami', 'sharp'],
    subjects: [
      'the raw beef',
      'the briny umami',
      'the hand-cut tartare',
      'the caper-and-shallot edge',
      'the yolk-bound tartare'
    ],
    targets: [
      'the tartare',
      'the raw-beef plate',
      'the cool tartare opener',
      'the briny tartare',
      'the chilled raw-beef starter'
    ],
    verdictHooks: {
      gold:      'the tartare opens the cut at full register',
      excellent: 'a headline opener for the tartare',
      strong:    'reliable on the tartare',
      works:     'sits with the tartare'
    }
  },

  'Brussels and Belly': {
    category: 'starter',
    shortName: 'Brussels + Belly',
    character: 'maple-pork-belly glaze over charred sprouts',
    prepNotes: 'charred Brussels sprouts under braised pork belly, maple-bourbon glaze, served hot',
    tastingStyle: 'sweet-glazed pork belly, charred sprout bitterness, maple-bourbon finish',
    weight: 'medium-plus',
    register: 'sweet-savory-charred',
    axes: ['glazed', 'charred', 'sweet-savory', 'pork'],
    subjects: [
      'the maple-glazed belly',
      'the charred sprouts',
      'the pork-belly plate',
      'the sweet-savory build',
      'the bourbon-maple glaze'
    ],
    targets: [
      'the pork-belly plate',
      'the sweet-savory build',
      'the maple-glazed belly',
      'the charred-sprouts-and-belly opener',
      'the glazed pork starter'
    ],
    verdictHooks: {
      gold:      'the belly opener at full register',
      excellent: 'a headline opener for the belly',
      strong:    'reliable on the belly plate',
      works:     'sits with the belly'
    }
  },

  'Crab Cake': {
    category: 'starter',
    shortName: 'the crab cake',
    character: 'delicate sweet crab in a crisp crust',
    prepNotes: 'jumbo lump crab cake, light bind, panko crust, pan-finished, lemon-aioli on the side',
    tastingStyle: 'sweet jumbo lump crab, crisp panko crust, bright lemon finish',
    weight: 'light',
    register: 'delicate-sweet',
    axes: ['delicate', 'sweet', 'crisp', 'shellfish'],
    subjects: [
      'the sweet crab',
      'the crisp crust',
      'the jumbo-lump cake',
      'the panko-crusted crab',
      'the lemon-bright crab cake'
    ],
    targets: [
      'the delicate crab cake',
      'the sweet shellfish plate',
      'the panko-and-lump crab cake',
      'the crisp-crusted crab',
      'the lemon-finished crab plate'
    ],
    verdictHooks: {
      gold:      'the crab cake at full register',
      excellent: 'a headline opener for the crab',
      strong:    'reliable on the crab cake',
      works:     'sits with the crab cake'
    }
  },

  'Shrimp Cocktail': {
    category: 'starter',
    shortName: 'the shrimp cocktail',
    character: 'cool brine-and-citrus shellfish',
    prepNotes: 'jumbo poached shrimp, classic cocktail sauce with horseradish, lemon, served chilled',
    tastingStyle: 'cool poached shrimp, briny ocean lift, horseradish-citrus cocktail edge',
    weight: 'light',
    register: 'cool-bright',
    axes: ['cool', 'briny', 'citrusy', 'classic'],
    subjects: [
      'the cool brine',
      'the cocktail citrus',
      'the chilled shrimp',
      'the horseradish-bright shrimp',
      'the classic cocktail plate'
    ],
    targets: [
      'the chilled shrimp',
      'the cocktail-citrus plate',
      'the cool brine starter',
      'the horseradish-and-shrimp opener',
      'the classic shrimp cocktail'
    ],
    verdictHooks: {
      gold:      'the shrimp cocktail opens cleanly at full register',
      excellent: 'a headline opener for the shrimp',
      strong:    'reliable on the cocktail',
      works:     'sits with the shrimp cocktail'
    }
  },

  'Burrata': {
    category: 'starter',
    shortName: 'the burrata',
    character: 'fresh basil-tomato-cream delicacy',
    prepNotes: 'whole burrata over heirloom tomato and basil, olive oil, sea salt, balsamic finish',
    tastingStyle: 'milky burrata cream, heirloom-tomato sweetness, basil-bright finish',
    weight: 'light',
    register: 'fresh-creamy',
    axes: ['milky', 'fresh', 'tomato', 'basil'],
    subjects: [
      'the fresh cream',
      'the basil-tomato edge',
      'the milky burrata',
      'the heirloom-tomato plate',
      'the basil-finished burrata'
    ],
    targets: [
      'the burrata',
      'the milky cheese plate',
      'the basil-tomato burrata',
      'the fresh-cream-and-tomato opener',
      'the heirloom burrata plate'
    ],
    verdictHooks: {
      gold:      'the burrata opens the meal at full register',
      excellent: 'a headline opener for the burrata',
      strong:    'reliable on the burrata',
      works:     'sits with the burrata'
    }
  },

  'Seafood Tower': {
    category: 'starter',
    shortName: 'the seafood tower',
    character: 'chilled shellfish lineup',
    prepNotes: 'oysters, jumbo shrimp, lobster, king crab, ceviche — iced tower presentation, mignonette and cocktail sauce',
    tastingStyle: 'cold ocean-brine across shellfish, mignonette acid, citrus brightness',
    weight: 'medium',
    register: 'cool-briny',
    axes: ['chilled', 'briny', 'multi-shellfish', 'showpiece'],
    subjects: [
      'the chilled shellfish',
      'the cool brine',
      'the iced tower',
      'the multi-shellfish lineup',
      'the mignonette-and-citrus tower'
    ],
    targets: [
      'the seafood tower',
      'the chilled shellfish lineup',
      'the iced shellfish tower',
      'the showpiece tower',
      'the cool-brine opener'
    ],
    verdictHooks: {
      gold:      'the tower opens the table at full register',
      excellent: 'a headline opener for the tower',
      strong:    'reliable on the tower',
      works:     'sits with the tower'
    }
  },

  // ── SOUP / SALAD (15) ──────────────────────────────────────────────────

  'French Onion': {
    category: 'soup-salad',
    shortName: 'the French onion',
    character: 'beef-broth-and-gruyere depth',
    prepNotes: 'caramelized onion in deep beef broth, gruyere crust, broiled crouton, served bubbling',
    tastingStyle: 'beef-broth depth, caramelized onion sweetness, browned gruyere crust',
    weight: 'medium',
    register: 'savory-deep',
    axes: ['beefy', 'caramelized', 'cheesy', 'crouton-bound'],
    subjects: [
      'the beef-broth depth',
      'the gruyere crust',
      'the caramelized onion',
      'the broiled crouton',
      'the savory broth'
    ],
    targets: [
      'the French onion',
      'the broth-and-cheese soup',
      'the gruyere-crusted onion',
      'the beef-broth bowl',
      'the broiled-cheese opener'
    ],
    verdictHooks: {
      gold:      'the French onion frames the cut at full register',
      excellent: 'a headline opener for the steak course',
      strong:    'reliable on the French onion',
      works:     'sits with the French onion'
    }
  },

  'Mushroom Bisque': {
    category: 'soup-salad',
    shortName: 'the mushroom bisque',
    character: 'silky earthy mushroom cream',
    prepNotes: 'wild mushroom bisque, cream-finished, sherry note, truffle oil on top',
    tastingStyle: 'earthy mushroom cream, silky body, sherry-and-truffle lift',
    weight: 'medium-rich',
    register: 'creamy-earthy',
    axes: ['earthy', 'creamy', 'umami', 'truffle-laced'],
    subjects: [
      'the silky cream',
      'the earthy mushroom',
      'the wild-mushroom body',
      'the sherry-laced bisque',
      'the truffle-finished cream'
    ],
    targets: [
      'the mushroom bisque',
      'the earthy cream',
      'the silky mushroom soup',
      'the truffle-edged bisque',
      'the wild-mushroom bowl'
    ],
    verdictHooks: {
      gold:      'the mushroom bisque sets the cut up at full register',
      excellent: 'a headline opener for the steak course',
      strong:    'reliable on the bisque',
      works:     'sits with the mushroom bisque'
    }
  },

  'Gumbo': {
    category: 'soup-salad',
    shortName: 'the gumbo',
    character: 'spiced creole stew',
    prepNotes: 'dark roux base, andouille and chicken, holy trinity, file powder finish, rice in the bowl',
    tastingStyle: 'spiced creole stew, dark roux depth, andouille richness, file finish',
    weight: 'medium-rich',
    register: 'spiced-savory',
    axes: ['spiced', 'creole', 'andouille-rich', 'rouxed'],
    subjects: [
      'the spiced stew',
      'the creole heat',
      'the dark roux',
      'the andouille-laced gumbo',
      'the file-finished bowl'
    ],
    targets: [
      'the gumbo',
      'the spiced creole bowl',
      'the dark-roux gumbo',
      'the andouille-and-chicken stew',
      'the file-touched bowl'
    ],
    verdictHooks: {
      gold:      'the gumbo opens the meal at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the gumbo',
      works:     'sits with the gumbo'
    }
  },

  'Shrimp Bisque': {
    category: 'soup-salad',
    shortName: 'the shrimp bisque',
    character: 'creamy shellfish soup',
    prepNotes: 'shrimp-shell stock reduction, cream-finished, sherry, brunoise garnish',
    tastingStyle: 'creamy shellfish depth, sherry-and-shrimp body, silky finish',
    weight: 'medium-rich',
    register: 'creamy-shellfish',
    axes: ['creamy', 'shellfish', 'sherry-laced', 'rich'],
    subjects: [
      'the creamy shellfish',
      'the silky body',
      'the shrimp-stock cream',
      'the sherry-finished bisque',
      'the rich shellfish soup'
    ],
    targets: [
      'the shrimp bisque',
      'the rich shellfish soup',
      'the silky shrimp cream',
      'the sherry-bisque bowl',
      'the cream-finished bisque'
    ],
    verdictHooks: {
      gold:      'the shrimp bisque opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the bisque',
      works:     'sits with the shrimp bisque'
    }
  },

  'Loaded Potato': {
    category: 'soup-salad',
    shortName: 'the loaded potato',
    character: 'rich loaded-potato soup',
    prepNotes: 'cream-and-stock potato soup, bacon, cheddar, scallion, sour cream — fully loaded',
    tastingStyle: 'rich potato cream, bacon savory, cheddar weight, scallion-and-sour-cream finish',
    weight: 'rich',
    register: 'loaded-creamy',
    axes: ['rich', 'creamy', 'bacon-laced', 'cheddar'],
    subjects: [
      'the rich potato',
      'the loaded toppings',
      'the bacon-and-cheddar cream',
      'the loaded-potato body',
      'the scallion-finished soup'
    ],
    targets: [
      'the loaded potato soup',
      'the indulgent potato bowl',
      'the bacon-cheddar potato',
      'the loaded-cream bowl',
      'the indulgent loaded soup'
    ],
    verdictHooks: {
      gold:      'the loaded potato sets the table at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the loaded potato',
      works:     'sits with the loaded potato'
    }
  },

  'Clam Chowder': {
    category: 'soup-salad',
    shortName: 'the chowder',
    character: 'creamy clam-and-potato base',
    prepNotes: 'New England chowder, sweet clams, potato, bacon, cream-finished, oyster cracker',
    tastingStyle: 'sweet clam brine, cream depth, potato body, bacon savory edge',
    weight: 'medium-rich',
    register: 'creamy-shellfish',
    axes: ['creamy', 'briny-clam', 'potato', 'classic'],
    subjects: [
      'the creamy clam',
      'the silky chowder',
      'the New England base',
      'the bacon-laced cream',
      'the clam-and-potato body'
    ],
    targets: [
      'the chowder',
      'the clam-and-potato cream',
      'the New England chowder',
      'the silky chowder bowl',
      'the cream-finished clam soup'
    ],
    verdictHooks: {
      gold:      'the chowder opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the chowder',
      works:     'sits with the chowder'
    }
  },

  'Tomato Basil': {
    category: 'soup-salad',
    shortName: 'the tomato basil',
    character: 'bright tomato-basil acid',
    prepNotes: 'roasted tomato base, fresh basil chiffonade, cream-light finish, olive oil drizzle',
    tastingStyle: 'bright tomato acid, fresh basil lift, light cream-rounded finish',
    weight: 'light',
    register: 'bright-acidic',
    axes: ['bright', 'acidic', 'herb-fresh', 'light'],
    subjects: [
      'the bright acid',
      'the herbed tomato',
      'the basil-finished soup',
      'the roasted-tomato body',
      'the cream-rounded acid'
    ],
    targets: [
      'the tomato basil',
      'the bright soup',
      'the basil-and-tomato bowl',
      'the roasted-tomato bisque',
      'the herb-bright soup'
    ],
    verdictHooks: {
      gold:      'the tomato basil opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the tomato basil',
      works:     'sits with the tomato basil'
    }
  },

  'Butternut Squash': {
    category: 'soup-salad',
    shortName: 'the butternut squash',
    character: 'silky sweet squash cream',
    prepNotes: 'roasted butternut squash, brown butter, cream, nutmeg, sage finish',
    tastingStyle: 'silky sweet squash, brown-butter depth, nutmeg-and-sage finish',
    weight: 'medium',
    register: 'sweet-creamy',
    axes: ['sweet', 'creamy', 'spiced', 'autumnal'],
    subjects: [
      'the silky cream',
      'the sweet squash',
      'the brown-butter body',
      'the nutmeg-finished squash',
      'the sage-bright bisque'
    ],
    targets: [
      'the squash bisque',
      'the silky sweet bowl',
      'the brown-butter squash',
      'the autumnal squash soup',
      'the cream-and-squash bowl'
    ],
    verdictHooks: {
      gold:      'the squash bisque opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the squash',
      works:     'sits with the butternut squash'
    }
  },

  'Seasonal Soup': {
    category: 'soup-salad',
    shortName: 'the seasonal soup',
    character: 'house seasonal build',
    prepNotes: 'rotating seasonal recipe — varies by quarter, generally a vegetable or grain forward bowl',
    tastingStyle: 'seasonal vegetables, house-made stock, kitchen-driven finish',
    weight: 'medium',
    register: 'house-driven',
    axes: ['seasonal', 'house', 'rotating'],
    subjects: [
      'the house build',
      'the seasonal body',
      'the kitchen-driven soup',
      'the rotating seasonal recipe',
      'the chef\'s seasonal bowl'
    ],
    targets: [
      'the seasonal soup',
      'the house bowl',
      'the kitchen seasonal',
      'the rotating soup',
      'the house seasonal bowl'
    ],
    verdictHooks: {
      gold:      'the seasonal soup opens at full register',
      excellent: 'a headline opener when in season',
      strong:    'reliable on the seasonal soup',
      works:     'sits with the seasonal soup'
    }
  },

  'Creamy Potato': {
    category: 'soup-salad',
    shortName: 'the potato soup',
    character: 'silky-bodied potato cream',
    prepNotes: 'pureed potato-leek base, cream-finished, chive garnish, simple and clean',
    tastingStyle: 'silky potato cream, leek-rounded body, chive-bright finish',
    weight: 'medium',
    register: 'creamy-clean',
    axes: ['creamy', 'silky', 'potato', 'clean'],
    subjects: [
      'the silky body',
      'the potato cream',
      'the leek-rounded soup',
      'the chive-finished cream',
      'the smooth potato base'
    ],
    targets: [
      'the potato soup',
      'the silky bowl',
      'the leek-and-potato cream',
      'the cream-finished potato',
      'the chive-touched soup'
    ],
    verdictHooks: {
      gold:      'the potato soup opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the potato soup',
      works:     'sits with the potato soup'
    }
  },

  'Broccoli Cheddar': {
    category: 'soup-salad',
    shortName: 'the broccoli cheddar',
    character: 'cheddar-and-broccoli cream',
    prepNotes: 'sharp cheddar in cream base, tender broccoli, simmered until silky',
    tastingStyle: 'sharp cheddar weight, tender broccoli, silky cream body',
    weight: 'medium-rich',
    register: 'cheesy-creamy',
    axes: ['cheesy', 'creamy', 'broccoli', 'rich'],
    subjects: [
      'the cheddar cream',
      'the broccoli weight',
      'the sharp cheddar',
      'the broccoli-and-cheese body',
      'the silky cheddar base'
    ],
    targets: [
      'the broccoli cheddar',
      'the cheese-and-broccoli soup',
      'the sharp cheddar soup',
      'the broccoli cheddar bowl',
      'the cream-and-cheddar soup'
    ],
    verdictHooks: {
      gold:      'the broccoli cheddar opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the broccoli cheddar',
      works:     'sits with the broccoli cheddar'
    }
  },

  'Roasted Red Pepper Chickpea': {
    category: 'soup-salad',
    shortName: 'the chickpea soup',
    character: 'roasted-pepper chickpea warmth',
    prepNotes: 'roasted red pepper, chickpea, smoked paprika, lemon-bright finish',
    tastingStyle: 'roasted-pepper sweetness, chickpea body, smoked paprika, lemon lift',
    weight: 'medium',
    register: 'spiced-warm',
    axes: ['roasted', 'spiced', 'chickpea', 'warm'],
    subjects: [
      'the roasted pepper',
      'the chickpea warmth',
      'the smoked-paprika body',
      'the lemon-bright soup',
      'the roasted-and-chickpea base'
    ],
    targets: [
      'the chickpea soup',
      'the pepper-and-chickpea bowl',
      'the roasted-pepper soup',
      'the smoked-paprika chickpea',
      'the warm chickpea bowl'
    ],
    verdictHooks: {
      gold:      'the chickpea soup opens at full register',
      excellent: 'a headline opener',
      strong:    'reliable on the chickpea',
      works:     'sits with the chickpea soup'
    }
  },

  'Grilled Caesar': {
    category: 'soup-salad',
    shortName: 'the Caesar',
    character: 'charred-romaine and anchovy edge',
    prepNotes: 'romaine hearts grilled to char, anchovy-garlic dressing, parmesan, crouton',
    tastingStyle: 'grilled-romaine char, anchovy umami, garlic-and-parmesan weight',
    weight: 'medium',
    register: 'charred-savory',
    axes: ['charred', 'anchovy', 'parmesan', 'classic'],
    subjects: [
      'the charred romaine',
      'the anchovy edge',
      'the grilled-Caesar dressing',
      'the parmesan-laced romaine',
      'the garlic-bright Caesar'
    ],
    targets: [
      'the grilled Caesar',
      'the charred-and-anchovy salad',
      'the anchovy-Caesar plate',
      'the grilled-romaine salad',
      'the parmesan-Caesar plate'
    ],
    verdictHooks: {
      gold:      'the Caesar primes the cut at full register',
      excellent: 'a headline opener for the steak course',
      strong:    'reliable on the Caesar',
      works:     'sits with the Caesar'
    }
  },

  'House Wedge': {
    category: 'soup-salad',
    shortName: 'the wedge',
    character: 'iceberg-and-bleu cool crunch',
    prepNotes: 'iceberg quarter, bleu cheese dressing, bleu crumbles, bacon, tomato, red onion',
    tastingStyle: 'cool iceberg crunch, bleu cheese funk, bacon savory, tomato-and-onion lift',
    weight: 'medium',
    register: 'cool-classic',
    axes: ['cool', 'crunchy', 'bleu', 'classic'],
    subjects: [
      'the cool crunch',
      'the bleu dressing',
      'the iceberg wedge',
      'the bleu-and-bacon plate',
      'the chilled wedge'
    ],
    targets: [
      'the wedge',
      'the iceberg-and-bleu salad',
      'the bleu-cheese wedge',
      'the cool wedge plate',
      'the classic wedge'
    ],
    verdictHooks: {
      gold:      'the wedge primes the steak at full register',
      excellent: 'a headline opener for the steak course',
      strong:    'reliable on the wedge',
      works:     'sits with the wedge'
    }
  },

  // ── SIDES (11) ──────────────────────────────────────────────────────────

  'Au Gratin Potatoes': {
    category: 'side',
    shortName: 'the au gratin',
    character: 'cheese-and-cream golden crust',
    prepNotes: 'sliced potato in cream, gruyere and parmesan, baked to golden crust',
    tastingStyle: 'cream-and-cheese weight, gruyere-and-parmesan crust, browned potato edge',
    weight: 'rich',
    register: 'creamy-cheesy',
    axes: ['cheesy', 'creamy', 'crusty', 'rich'],
    subjects: [
      'the cheese cream',
      'the golden crust',
      'the gruyere-laced potato',
      'the baked-cream side',
      'the browned-cheese top'
    ],
    targets: [
      'the au gratin',
      'the cheese-and-cream side',
      'the golden-crust gratin',
      'the rich potato side',
      'the gruyere-baked potato'
    ],
    verdictHooks: {
      gold:      'the au gratin completes the steak plate at full register',
      excellent: 'a headline side for the steak course',
      strong:    'reliable on the au gratin',
      works:     'sits with the au gratin'
    }
  },

  'Creamed Spinach': {
    category: 'side',
    shortName: 'the creamed spinach',
    character: 'rich bechamel-laced greens',
    prepNotes: 'spinach in bechamel, parmesan-finished, classic steakhouse build',
    tastingStyle: 'bechamel-rich greens, parmesan weight, classic steakhouse register',
    weight: 'rich',
    register: 'creamy-classic',
    axes: ['creamy', 'classic', 'spinach', 'parmesan-laced'],
    subjects: [
      'the rich bechamel',
      'the laced greens',
      'the parmesan-finished spinach',
      'the bechamel-bound spinach',
      'the steakhouse cream'
    ],
    targets: [
      'the creamed spinach',
      'the rich greens',
      'the bechamel-laced spinach',
      'the classic creamed-spinach side',
      'the parmesan-creamed spinach'
    ],
    verdictHooks: {
      gold:      'the creamed spinach earns the steak plate at full register',
      excellent: 'a headline side for the steak course',
      strong:    'reliable on the creamed spinach',
      works:     'sits with the creamed spinach'
    }
  },

  'Lobster Mac': {
    category: 'side',
    shortName: 'the lobster mac',
    character: 'shellfish-in-cream indulgence',
    prepNotes: 'lobster meat in cheese-and-cream macaroni, panko crust, baked golden',
    tastingStyle: 'lobster sweetness, cream-and-cheese weight, panko-crisp top',
    weight: 'rich',
    register: 'indulgent-shellfish',
    axes: ['indulgent', 'shellfish', 'cheesy', 'rich'],
    subjects: [
      'the shellfish cream',
      'the dairy weight',
      'the lobster-and-cheese mac',
      'the panko-crusted mac',
      'the indulgent lobster side'
    ],
    targets: [
      'the lobster mac',
      'the indulgent shellfish-and-cream side',
      'the lobster-cheese-cream build',
      'the rich shellfish side',
      'the cream-and-lobster mac'
    ],
    verdictHooks: {
      gold:      'the lobster mac completes the plate at full register',
      excellent: 'a headline side for the cut',
      strong:    'reliable on the lobster mac',
      works:     'sits with the lobster mac'
    }
  },

  'Asparagus': {
    category: 'side',
    shortName: 'the asparagus',
    character: 'green-vegetal edge',
    prepNotes: 'pencil asparagus, lightly grilled, lemon-butter finish, salt',
    tastingStyle: 'green-vegetal lift, light grill char, lemon-butter finish',
    weight: 'light',
    register: 'bright-green',
    axes: ['green', 'bright', 'lemon-laced', 'clean'],
    subjects: [
      'the green spear',
      'the vegetal edge',
      'the grilled asparagus',
      'the lemon-buttered asparagus',
      'the bright green spear'
    ],
    targets: [
      'the asparagus',
      'the bright green side',
      'the grilled-and-lemon asparagus',
      'the vegetal asparagus side',
      'the lemon-bright asparagus'
    ],
    verdictHooks: {
      gold:      'the asparagus brightens the plate at full register',
      excellent: 'a headline green for the steak plate',
      strong:    'reliable on the asparagus',
      works:     'sits with the asparagus'
    }
  },

  'Broccolini': {
    category: 'side',
    shortName: 'the broccolini',
    character: 'tender green stalks',
    prepNotes: 'broccolini sauteed in olive oil and garlic, finished with red pepper flake and lemon',
    tastingStyle: 'tender broccolini, garlic-and-oil edge, red-pepper-flake heat, lemon finish',
    weight: 'light',
    register: 'bright-green-spicy',
    axes: ['green', 'tender', 'garlic-laced', 'spicy'],
    subjects: [
      'the tender green',
      'the bright stem',
      'the garlic-sauteed broccolini',
      'the red-pepper-flake green',
      'the lemon-finished broccolini'
    ],
    targets: [
      'the broccolini',
      'the tender green side',
      'the garlic-and-broccolini side',
      'the bright broccolini',
      'the lemon-pepper broccolini'
    ],
    verdictHooks: {
      gold:      'the broccolini brightens the plate at full register',
      excellent: 'a headline green for the plate',
      strong:    'reliable on the broccolini',
      works:     'sits with the broccolini'
    }
  },

  'Sauteed Garlic Spinach': {
    category: 'side',
    shortName: 'the garlic spinach',
    character: 'garlic-buttered greens',
    prepNotes: 'baby spinach wilted in garlic-butter, salt-finished',
    tastingStyle: 'wilted spinach, garlic-butter weight, clean salt edge',
    weight: 'medium',
    register: 'savory-green',
    axes: ['garlic-laced', 'buttery', 'green', 'classic'],
    subjects: [
      'the buttered greens',
      'the garlic edge',
      'the wilted spinach',
      'the garlic-and-butter spinach',
      'the salt-finished greens'
    ],
    targets: [
      'the garlic spinach',
      'the green-and-garlic side',
      'the buttered-spinach side',
      'the wilted spinach plate',
      'the garlic-laced greens'
    ],
    verdictHooks: {
      gold:      'the garlic spinach holds the plate at full register',
      excellent: 'a headline green for the plate',
      strong:    'reliable on the garlic spinach',
      works:     'sits with the garlic spinach'
    }
  },

  'Honey Roasted Carrots': {
    category: 'side',
    shortName: 'the honey carrots',
    character: 'honey-glazed carrot sweetness',
    prepNotes: 'whole carrots roasted with honey-butter glaze, thyme, finishing salt',
    tastingStyle: 'honey-glazed carrot, butter-rounded sweetness, thyme-bright finish',
    weight: 'medium',
    register: 'sweet-roasted',
    axes: ['sweet', 'roasted', 'honey-laced', 'thyme'],
    subjects: [
      'the honey glaze',
      'the roasted sweetness',
      'the honey-buttered carrot',
      'the thyme-finished carrot',
      'the glazed carrot side'
    ],
    targets: [
      'the honey carrots',
      'the glazed carrot side',
      'the honey-roasted carrot',
      'the thyme-bright carrots',
      'the sweet-glazed side'
    ],
    verdictHooks: {
      gold:      'the honey carrots round the plate at full register',
      excellent: 'a headline sweet side for the plate',
      strong:    'reliable on the honey carrots',
      works:     'sits with the honey carrots'
    }
  },

  'Seasonal Vegetables': {
    category: 'side',
    shortName: 'the seasonal vegetables',
    character: 'seasonal garden plate',
    prepNotes: 'rotating seasonal vegetable mix, butter or olive-oil finished, herb-touched',
    tastingStyle: 'seasonal garden vegetables, butter or oil finish, herb-bright',
    weight: 'light',
    register: 'seasonal-clean',
    axes: ['seasonal', 'green', 'rotating', 'clean'],
    subjects: [
      'the garden plate',
      'the seasonal mix',
      'the rotating vegetables',
      'the herb-touched garden',
      'the kitchen seasonal'
    ],
    targets: [
      'the seasonal vegetables',
      'the garden side',
      'the seasonal garden plate',
      'the rotating-vegetable side',
      'the kitchen-driven vegetables'
    ],
    verdictHooks: {
      gold:      'the seasonal vegetables round the plate at full register',
      excellent: 'a headline green-side',
      strong:    'reliable on the seasonal vegetables',
      works:     'sits with the seasonal vegetables'
    }
  },

  'Truffle Fries': {
    category: 'side',
    shortName: 'the truffle fries',
    character: 'parmesan-and-truffle fry weight',
    prepNotes: 'shoestring fries tossed with parmesan, truffle oil, parsley, sea salt',
    tastingStyle: 'truffle-oil aroma, parmesan weight, parsley brightness, salt-edged fry',
    weight: 'rich',
    register: 'savory-fragrant',
    axes: ['truffled', 'parmesan-laced', 'fried', 'aromatic'],
    subjects: [
      'the parmesan-and-truffle weight',
      'the savory fry',
      'the truffle-oil-finished fry',
      'the parmesan-laced fries',
      'the parsley-bright fries'
    ],
    targets: [
      'the truffle fries',
      'the parmesan-and-truffle side',
      'the truffle-oil fries',
      'the parmesan-fry side',
      'the parsley-finished fries'
    ],
    verdictHooks: {
      gold:      'the truffle fries earn the steak plate at full register',
      excellent: 'a headline side for the steak course',
      strong:    'reliable on the truffle fries',
      works:     'sits with the truffle fries'
    }
  },

  'Mushrooms': {
    category: 'side',
    shortName: 'the mushrooms',
    character: 'earthy umami weight',
    prepNotes: 'mixed mushrooms sauteed in garlic-butter, finished with herbs',
    tastingStyle: 'earthy umami mushroom, garlic-butter glaze, herb-bright finish',
    weight: 'medium',
    register: 'earthy-buttered',
    axes: ['earthy', 'umami', 'buttery', 'savory'],
    subjects: [
      'the earthy mushroom',
      'the umami depth',
      'the garlic-butter mushroom',
      'the herb-finished mushroom',
      'the savory mushroom side'
    ],
    targets: [
      'the mushrooms',
      'the earthy umami side',
      'the garlic-butter mushroom side',
      'the umami-mushroom plate',
      'the savory mushroom side'
    ],
    verdictHooks: {
      gold:      'the mushrooms anchor the steak plate at full register',
      excellent: 'a headline side for the cut',
      strong:    'reliable on the mushrooms',
      works:     'sits with the mushrooms'
    }
  },

  // ── MAINS (8 — 1 chicken + 7 fish/seafood/curry/scallops) ────────────────

  'Roast Half Chicken': {
    category: 'main',
    shortName: 'the chicken',
    character: 'herbed crisp-skin roast',
    prepNotes: 'half chicken roasted to crisp skin, herb-butter under skin, jus',
    tastingStyle: 'roast chicken, crisp herb-butter skin, savory jus',
    weight: 'medium',
    register: 'roasted-clean',
    axes: ['roasted', 'crispy-skin', 'herbed', 'classic'],
    subjects: [
      'the herbed crisp skin',
      'the roast bird',
      'the half-chicken plate',
      'the herb-butter chicken',
      'the jus-finished bird'
    ],
    targets: [
      'the roast chicken',
      'the herbed bird',
      'the crisp-skin chicken',
      'the half-chicken plate',
      'the herb-butter roast'
    ],
    verdictHooks: {
      gold:      'the roast chicken at full register',
      excellent: 'a headline call for the bird',
      strong:    'reliable on the chicken',
      works:     'sits with the chicken'
    }
  },

  'Faroe Island Salmon': {
    category: 'main',
    shortName: 'the salmon',
    character: 'rich oily flesh',
    prepNotes: 'Faroe Island Atlantic salmon, pan-finished, served medium with rich oily flesh',
    tastingStyle: 'rich oily salmon, pan-finished crust, clean Atlantic flavor',
    weight: 'medium',
    register: 'oily-rich',
    axes: ['oily', 'rich', 'fish', 'clean'],
    subjects: [
      'the rich oily flesh',
      'the buttery salmon',
      'the pan-finished salmon',
      'the Atlantic salmon plate',
      'the oil-rich fish'
    ],
    targets: [
      'the salmon',
      'the oily-rich fish',
      'the Faroe-Atlantic salmon',
      'the pan-finished salmon plate',
      'the rich-flesh salmon'
    ],
    verdictHooks: {
      gold:      'the salmon at full register',
      excellent: 'a headline call for the salmon',
      strong:    'reliable on the salmon',
      works:     'sits with the salmon'
    }
  },

  'Swordfish': {
    category: 'main',
    shortName: 'the swordfish',
    character: 'meaty swordfish steak',
    prepNotes: 'swordfish steak, grilled or pan-finished, meaty texture, lemon-bright finish',
    tastingStyle: 'meaty swordfish, light char, lemon-bright finish',
    weight: 'medium',
    register: 'meaty-clean',
    axes: ['meaty', 'firm', 'fish', 'grilled'],
    subjects: [
      'the meaty steak',
      'the firm-fish flesh',
      'the grilled swordfish',
      'the lemon-bright swordfish',
      'the dense fish steak'
    ],
    targets: [
      'the swordfish',
      'the meaty fish',
      'the grilled swordfish steak',
      'the firm-flesh fish',
      'the lemon-finished swordfish'
    ],
    verdictHooks: {
      gold:      'the swordfish at full register',
      excellent: 'a headline call for the swordfish',
      strong:    'reliable on the swordfish',
      works:     'sits with the swordfish'
    }
  },

  'Chilean Seabass': {
    category: 'main',
    shortName: 'the seabass',
    character: 'buttery seabass flesh',
    prepNotes: 'Chilean seabass, pan-finished, butter-rich flesh, miso or beurre blanc',
    tastingStyle: 'butter-rich seabass, silky flesh, miso-or-beurre depth',
    weight: 'medium-rich',
    register: 'buttery-fish',
    axes: ['buttery', 'silky', 'fish', 'rich'],
    subjects: [
      'the buttery flesh',
      'the rich seabass',
      'the pan-finished seabass',
      'the silky-flesh seabass',
      'the miso-glazed seabass'
    ],
    targets: [
      'the seabass',
      'the rich-buttered fish',
      'the silky-flesh fish',
      'the buttered seabass plate',
      'the miso-touched seabass'
    ],
    verdictHooks: {
      gold:      'the seabass at full register',
      excellent: 'a headline call for the seabass',
      strong:    'reliable on the seabass',
      works:     'sits with the seabass'
    }
  },

  'Tuxedo-Crusted Yellowfin Tuna': {
    category: 'main',
    shortName: 'the tuna',
    character: 'seared-rare flesh with sesame crust',
    prepNotes: 'yellowfin tuna with black-and-white sesame tuxedo crust, seared rare, served sliced',
    tastingStyle: 'seared-rare tuna, sesame tuxedo crust, clean ocean flesh',
    weight: 'medium',
    register: 'rare-clean',
    axes: ['seared-rare', 'sesame-crusted', 'ocean-clean', 'crowd-favorite'],
    subjects: [
      'the seared-rare flesh',
      'the sesame crust',
      'the tuxedo-crusted tuna',
      'the seared-rare yellowfin',
      'the sesame-edged tuna'
    ],
    targets: [
      'the tuna',
      'the seared-rare tuna plate',
      'the tuxedo-crusted yellowfin',
      'the sesame-crusted tuna',
      'the rare yellowfin plate'
    ],
    verdictHooks: {
      gold:      'the tuxedo tuna at full register',
      excellent: 'a headline call for the tuna',
      strong:    'reliable on the tuna',
      works:     'sits with the tuna'
    }
  },

  'Rainbow Trout': {
    category: 'main',
    shortName: 'the trout',
    character: 'delicate trout flesh',
    prepNotes: 'whole or filet rainbow trout, pan-finished, lemon-and-herb finish',
    tastingStyle: 'delicate trout, light pan crust, lemon-and-herb finish',
    weight: 'light',
    register: 'delicate-clean',
    axes: ['delicate', 'flaky', 'fish', 'clean'],
    subjects: [
      'the delicate flesh',
      'the trout body',
      'the pan-finished trout',
      'the lemon-bright trout',
      'the herb-finished trout'
    ],
    targets: [
      'the trout',
      'the delicate fish',
      'the pan-finished trout plate',
      'the rainbow trout filet',
      'the lemon-finished trout'
    ],
    verdictHooks: {
      gold:      'the trout at full register',
      excellent: 'a headline call for the trout',
      strong:    'reliable on the trout',
      works:     'sits with the trout'
    }
  },

  'Market Fish': {
    category: 'main',
    shortName: 'the market fish',
    character: 'clean white-fish flesh',
    prepNotes: 'rotating market white fish, simply prepared, kitchen-driven finish',
    tastingStyle: 'clean white fish, simple kitchen prep, rotating finish',
    weight: 'light',
    register: 'clean-rotating',
    axes: ['white-fish', 'rotating', 'clean', 'kitchen-driven'],
    subjects: [
      'the clean flesh',
      'the white-fish body',
      'the rotating market fish',
      'the kitchen-driven fish',
      'the simply-prepared fish'
    ],
    targets: [
      'the market fish',
      'the clean white-fish',
      'the rotating fish plate',
      'the simply-prepared market fish',
      'the kitchen-driven fish plate'
    ],
    verdictHooks: {
      gold:      'the market fish at full register when in form',
      excellent: 'a headline call when the fish is in',
      strong:    'reliable on the market fish',
      works:     'sits with the market fish'
    }
  },

  'Salt-Cured Halibut': {
    category: 'main',
    shortName: 'the halibut',
    character: 'salt-cured halibut flesh',
    prepNotes: 'salt-cured halibut, pan-finished, firm flesh, lemon-and-butter finish',
    tastingStyle: 'salt-cured halibut, firm flesh, butter-and-lemon finish',
    weight: 'medium',
    register: 'firm-clean',
    axes: ['cured', 'firm', 'fish', 'clean'],
    subjects: [
      'the salt-cured flesh',
      'the firm halibut',
      'the cured-and-finished halibut',
      'the butter-laced halibut',
      'the firm-flesh fish'
    ],
    targets: [
      'the halibut',
      'the salt-cured fish',
      'the cured halibut plate',
      'the firm-flesh halibut',
      'the butter-finished halibut'
    ],
    verdictHooks: {
      gold:      'the halibut at full register',
      excellent: 'a headline call for the halibut',
      strong:    'reliable on the halibut',
      works:     'sits with the halibut'
    }
  },

  'Vegetable Curry with Chickpeas': {
    category: 'main',
    shortName: 'the curry',
    character: 'spiced chickpea-curry warmth',
    prepNotes: 'mixed seasonal vegetables and chickpeas in a spiced coconut-curry sauce, basmati on the side',
    tastingStyle: 'spiced curry, coconut-rounded sauce, vegetable-and-chickpea body, warming finish',
    weight: 'medium',
    register: 'spiced-warm',
    axes: ['spiced', 'curried', 'plant-based', 'warming'],
    subjects: [
      'the spiced curry',
      'the chickpea warmth',
      'the coconut-curry sauce',
      'the vegetable-curry plate',
      'the spice-built bowl'
    ],
    targets: [
      'the curry',
      'the spiced vegetable plate',
      'the chickpea curry plate',
      'the coconut-curry main',
      'the vegetable-and-chickpea bowl'
    ],
    verdictHooks: {
      gold:      'the curry at full register',
      excellent: 'a headline call for the curry',
      strong:    'reliable on the curry',
      works:     'sits with the curry'
    }
  },

  'Seared Scallops': {
    category: 'main',
    shortName: 'the scallops',
    character: 'caramelized sear-and-sweet richness',
    prepNotes: 'jumbo sea scallops, dry-seared to caramelized crust, served rare-center, butter-and-lemon finish',
    tastingStyle: 'caramelized scallop sear, sweet sea richness, butter-finish',
    weight: 'medium',
    register: 'sweet-seared',
    axes: ['seared', 'caramelized', 'sweet', 'shellfish'],
    subjects: [
      'the caramelized sear',
      'the scallop sweetness',
      'the seared scallops',
      'the rare-center scallop',
      'the butter-finished scallop'
    ],
    targets: [
      'the scallops',
      'the seared-rare scallop plate',
      'the caramelized scallop',
      'the sweet scallop plate',
      'the butter-laced scallops'
    ],
    verdictHooks: {
      gold:      'the scallops at full register',
      excellent: 'a headline call for the scallops',
      strong:    'reliable on the scallops',
      works:     'sits with the scallops'
    }
  },

  // ── DESSERTS (8) ────────────────────────────────────────────────────────

  'Chocolate Cake': {
    category: 'dessert',
    shortName: 'the chocolate cake',
    character: 'layered chocolate body',
    prepNotes: 'multi-layer chocolate cake, dark chocolate ganache, served with vanilla ice cream',
    tastingStyle: 'layered chocolate cake, dark ganache, vanilla-ice-cream contrast',
    weight: 'rich',
    register: 'rich-classic',
    axes: ['chocolate', 'layered', 'rich', 'classic'],
    subjects: [
      'the layered chocolate',
      'the cocoa weight',
      'the dark-ganache cake',
      'the layered chocolate body',
      'the vanilla-paired cake'
    ],
    targets: [
      'the chocolate cake',
      'the layered cocoa dessert',
      'the dark-chocolate cake',
      'the chocolate layer cake',
      'the rich chocolate close'
    ],
    verdictHooks: {
      gold:      'the chocolate cake closes the meal at full register',
      excellent: 'a headline close',
      strong:    'reliable on the chocolate cake',
      works:     'sits with the chocolate cake'
    }
  },

  'Chocolate Brownie': {
    category: 'dessert',
    shortName: 'the brownie',
    character: 'fudgy cocoa-and-chocolate weight',
    prepNotes: 'dense fudgy brownie, dark chocolate, served warm with vanilla ice cream',
    tastingStyle: 'fudgy chocolate brownie, dense cocoa weight, warm vanilla-paired close',
    weight: 'rich',
    register: 'fudgy-rich',
    axes: ['chocolate', 'fudgy', 'rich', 'warm'],
    subjects: [
      'the fudgy cocoa',
      'the brownie weight',
      'the warm fudge brownie',
      'the dark-chocolate brownie',
      'the vanilla-paired brownie'
    ],
    targets: [
      'the brownie',
      'the cocoa-fudge dessert',
      'the warm-fudge brownie',
      'the rich chocolate brownie',
      'the dense brownie close'
    ],
    verdictHooks: {
      gold:      'the brownie closes the meal at full register',
      excellent: 'a headline close',
      strong:    'reliable on the brownie',
      works:     'sits with the brownie'
    }
  },

  'Peanut Butter Brownie': {
    category: 'dessert',
    shortName: 'the PB brownie',
    character: 'peanut-butter-and-chocolate fudge',
    prepNotes: 'fudgy chocolate brownie with peanut butter swirl, served warm with vanilla ice cream',
    tastingStyle: 'peanut-butter-and-chocolate fudge, warm brownie weight, vanilla contrast',
    weight: 'rich',
    register: 'fudgy-nutty',
    axes: ['chocolate', 'peanut-butter', 'fudgy', 'rich'],
    subjects: [
      'the peanut-butter fudge',
      'the cocoa stack',
      'the warm PB brownie',
      'the peanut-and-chocolate brownie',
      'the dense PB-cocoa close'
    ],
    targets: [
      'the PB brownie',
      'the peanut-cocoa dessert',
      'the warm peanut-butter brownie',
      'the rich PB-chocolate close',
      'the fudgy peanut brownie'
    ],
    verdictHooks: {
      gold:      'the PB brownie closes the meal at full register',
      excellent: 'a headline close',
      strong:    'reliable on the PB brownie',
      works:     'sits with the PB brownie'
    }
  },

  'Mocha Creme': {
    category: 'dessert',
    shortName: 'the mocha creme',
    character: 'coffee-chocolate richness',
    prepNotes: 'silky chocolate-coffee creme, layered with whipped cream, espresso-finished',
    tastingStyle: 'coffee-chocolate creme, espresso depth, silky cream body',
    weight: 'medium-rich',
    register: 'creamy-coffee',
    axes: ['coffee', 'chocolate', 'creamy', 'silky'],
    subjects: [
      'the coffee-chocolate cream',
      'the mocha depth',
      'the espresso-laced creme',
      'the silky mocha creme',
      'the layered cream close'
    ],
    targets: [
      'the mocha creme',
      'the coffee-chocolate dessert',
      'the espresso creme',
      'the silky mocha close',
      'the cream-and-coffee dessert'
    ],
    verdictHooks: {
      gold:      'the mocha creme closes at full register',
      excellent: 'a headline close',
      strong:    'reliable on the mocha creme',
      works:     'sits with the mocha creme'
    }
  },

  'Creme Brulee': {
    category: 'dessert',
    shortName: 'the brulee',
    character: 'burnt-sugar custard',
    prepNotes: 'classic vanilla-bean custard, torched-sugar crust, served with berries',
    tastingStyle: 'silky vanilla-bean custard, torched-sugar crust, berry-bright finish',
    weight: 'medium-rich',
    register: 'silky-classic',
    axes: ['custard', 'caramelized', 'vanilla', 'classic'],
    subjects: [
      'the burnt-sugar crust',
      'the silky custard',
      'the vanilla-bean custard',
      'the torched-sugar crust',
      'the berry-finished brulee'
    ],
    targets: [
      'the brulee',
      'the burnt-sugar dessert',
      'the vanilla-and-cream brulee',
      'the silky brulee close',
      'the torched-sugar custard'
    ],
    verdictHooks: {
      gold:      'the brulee closes at full register',
      excellent: 'a headline close',
      strong:    'reliable on the brulee',
      works:     'sits with the brulee'
    }
  },

  'Cheesecake': {
    category: 'dessert',
    shortName: 'the cheesecake',
    character: 'dense tangy dairy custard',
    prepNotes: 'New York-style cream cheese cake, graham crust, berry compote',
    tastingStyle: 'dense cream-cheese custard, graham crust, berry-compote finish',
    weight: 'rich',
    register: 'dense-tangy',
    axes: ['cream-cheese', 'dense', 'tangy', 'classic'],
    subjects: [
      'the tangy custard',
      'the dairy weight',
      'the New York cheesecake',
      'the graham-crusted cheesecake',
      'the berry-finished cheesecake'
    ],
    targets: [
      'the cheesecake',
      'the dense dairy dessert',
      'the New York-style cheesecake',
      'the graham-cheesecake close',
      'the cream-cheese cake'
    ],
    verdictHooks: {
      gold:      'the cheesecake closes at full register',
      excellent: 'a headline close',
      strong:    'reliable on the cheesecake',
      works:     'sits with the cheesecake'
    }
  },

  'Beignets': {
    category: 'dessert',
    shortName: 'the beignets',
    character: 'warm sugar-dusted pastry',
    prepNotes: 'fresh-fried choux beignets, dusted heavy with powdered sugar, chocolate or raspberry sauce',
    tastingStyle: 'warm fried choux, powdered-sugar dust, chocolate-or-raspberry sauce',
    weight: 'medium',
    register: 'warm-sweet',
    axes: ['fried', 'sugary', 'warm', 'pastry'],
    subjects: [
      'the warm pastry',
      'the sugar dust',
      'the choux-and-sugar beignets',
      'the fried choux',
      'the powdered-sugar beignets'
    ],
    targets: [
      'the beignets',
      'the choux-and-sugar dessert',
      'the warm-fried beignets',
      'the powdered beignets',
      'the sauce-paired beignets'
    ],
    verdictHooks: {
      gold:      'the beignets close at full register',
      excellent: 'a headline close',
      strong:    'reliable on the beignets',
      works:     'sits with the beignets'
    }
  },

  'Carrot Cake': {
    category: 'dessert',
    shortName: 'the carrot cake',
    character: 'cream-cheese-frosted spice cake',
    prepNotes: 'spiced carrot cake with cream cheese frosting, walnut, served with vanilla ice cream',
    tastingStyle: 'spiced carrot cake, cream-cheese frosting, walnut crunch',
    weight: 'medium-rich',
    register: 'spiced-frosted',
    axes: ['spiced', 'frosted', 'cake', 'walnut'],
    subjects: [
      'the spice cake',
      'the cream-cheese frosting',
      'the walnut-laced carrot cake',
      'the spiced carrot body',
      'the frosted carrot cake'
    ],
    targets: [
      'the carrot cake',
      'the spice-and-cream dessert',
      'the cream-cheese-frosted cake',
      'the spiced carrot close',
      'the walnut-and-spice cake'
    ],
    verdictHooks: {
      gold:      'the carrot cake closes at full register',
      excellent: 'a headline close',
      strong:    'reliable on the carrot cake',
      works:     'sits with the carrot cake'
    }
  },

};

// ── HELPER FUNCTIONS ────────────────────────────────────────────────────────

function getProfile(food) {
  const name = (food && food.name) ? food.name : food;
  return FOOD_PROFILES[name] || null;
}

function getSubjects(food) {
  const p = getProfile(food);
  return p ? p.subjects : null;
}

function getTargets(food) {
  const p = getProfile(food);
  return p ? p.targets : null;
}

function getTastingStyle(food) {
  const p = getProfile(food);
  return p ? p.tastingStyle : null;
}

function getPrepNotes(food) {
  const p = getProfile(food);
  return p ? p.prepNotes : null;
}

function getVerdictHook(food, tier) {
  const p = getProfile(food);
  if (!p || !p.verdictHooks) return null;
  return p.verdictHooks[tier] || p.verdictHooks.works || null;
}

function getAxes(food) {
  const p = getProfile(food);
  return p ? (p.axes || []) : [];
}

function getRegister(food) {
  const p = getProfile(food);
  return p ? p.register : null;
}

function getWeight(food) {
  const p = getProfile(food);
  return p ? p.weight : null;
}

module.exports = {
  FOOD_PROFILES,
  getProfile,
  getSubjects,
  getTargets,
  getTastingStyle,
  getPrepNotes,
  getVerdictHook,
  getAxes,
  getRegister,
  getWeight,
};
