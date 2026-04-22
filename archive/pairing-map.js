// ── BOWDIE'S CHOPHOUSE — PAIRING MAP ──
// Source of truth for Set The Stage simulator pairing logic.
// Each entry: { name, category, profile[], excellent[], strong[], works[], avoid[] }
// 'category' values: 'steak' | 'starter' | 'soup-salad' | 'main' | 'side' | 'dessert' |
//                    'cocktail' | 'wine-sparkling' | 'wine-white' | 'wine-red' | 'wine-dessert' |
//                    'bourbon' | 'rye' | 'scotch' | 'irish' | 'japanese' | 'canadian' |
//                    'tequila' | 'mezcal' | 'vodka' | 'gin' | 'rum' | 'cognac' | 'liqueur'

const PAIRING_MAP = [

  // ── STEAKS ──────────────────────────────────────────────────────────────────

  {
    name: 'Filet Mignon',
    category: 'steak',
    profile: ['lean','tender','mild','buttery','delicate'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Far Niente Cabernet Sauvignon','Evening Land Seven Springs','Scavino Barolo','Escargot Butter','Truffle Fries','Lobster Mac'],
    strong: ['Silver Oak Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Shrimp Bisque','The Manhattan','Frias Block 5','Lail Vineyards Blueprint'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Château de Rouillac','Au Gratin Potatoes','Mushrooms','Creme Brulee','Cheesecake','Beignets','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Stoneleigh Sauvignon Blanc','G.D. Vajra Moscato d\'Asti','Il Colle Prosecco Superiore','Faroe Island Salmon']
  },
  {
    name: 'Bone-In Filet',
    category: 'steak',
    profile: ['lean','tender','mild','buttery','delicate','bone-enhanced'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Far Niente Cabernet Sauvignon','Evening Land Seven Springs','Scavino Barolo','Escargot Butter','Truffle Fries','Lobster Mac'],
    strong: ['Silver Oak Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Shrimp Bisque','The Manhattan','Bowdie\'s Old Fashioned','Frias Block 5'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Château de Rouillac','Au Gratin Potatoes','Mushrooms','Creme Brulee','Cheesecake','Beignets','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Stoneleigh Sauvignon Blanc','G.D. Vajra Moscato d\'Asti','Il Colle Prosecco Superiore']
  },
  {
    name: 'Kansas City',
    category: 'steak',
    profile: ['lean','bold','beefy','firm','savory','well-marbled'],
    excellent: ['Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon','Scavino Barolo','The Manhattan','Lail Vineyards Blueprint'],
    strong: ['Ghost Block Cabernet Sauvignon','Austin Hope Cabernet Sauvignon','Peju Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Creamed Spinach','Truffle Fries'],
    works: ['Quilt Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','RAEN Royal St Robert','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Stoneleigh Sauvignon Blanc']
  },
  {
    name: 'Cowboy Ribeye',
    category: 'steak',
    profile: ['fatty','rich','bold','marbled','beefy','bone-in'],
    excellent: ['Silver Oak Cabernet Sauvignon','Shafer Hillside Select','Opus One','Scavino Barolo','Darioush Cabernet Sauvignon','Bowdie\'s Old Fashioned','Espresso Old Fashioned'],
    strong: ['Caymus Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Nickel & Nickel Cabernet','Creamed Spinach','Brussels and Belly','Venge Silencieux'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Marimar Estate Christina','Truffle Fries','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Le Garenne Rosé','Crab Cake','Seared Scallops']
  },
  {
    name: 'The Tomahawk',
    category: 'steak',
    profile: ['fatty','rich','bold','marbled','smoky','beefy','theatrical'],
    excellent: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Scavino Barolo','Bowdie\'s Old Fashioned','Espresso Old Fashioned','Bone Marrow'],
    strong: ['Darioush Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Venge Family Reserve','Lail Vineyards Blueprint','Creamed Spinach','Brussels and Belly'],
    works: ['Ghost Block Cabernet Sauvignon','Nickel & Nickel Cabernet','Truffle Fries','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Raventós Cava de NIT Rosé Brut','Stoneleigh Sauvignon Blanc','Crab Cake','Seared Scallops','Burrata']
  },
  {
    name: 'Porterhouse',
    category: 'steak',
    profile: ['lean','fatty','bold','beefy','dual-texture','rich'],
    excellent: ['Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Scavino Barolo','The Manhattan','Truffle Fries','Creamed Spinach'],
    strong: ['Ghost Block Cabernet Sauvignon','Lail Vineyards Blueprint','Far Niente Cabernet Sauvignon','Brussels and Belly','Bowdie\'s Old Fashioned','Lobster Mac'],
    works: ['Faust Napa Valley Cabernet','Peju Cabernet Sauvignon','House Wedge','RAEN Royal St Robert','Mushrooms','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Schloss Vollrads Riesling','Stoneleigh Sauvignon Blanc','Crab Cake','Seared Scallops']
  },

  // ── STARTERS ─────────────────────────────────────────────────────────────────

  {
    name: 'Prime Tartare',
    category: 'starter',
    profile: ['umami','rich','raw','bold','fatty','delicate'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Jean-Pierre Grossot Chablis','Bowdie\'s Old Fashioned','Joseph Mellot Sancerre'],
    strong: ['Elk Cove Pinot Blanc','St Supéry Sauvignon Blanc','Domaine de Berthiers Pouilly-Fumé','Espresso Old Fashioned','Negroni'],
    works: ['Lingua Franca Avni Pinot Noir','Fisher Unity Pinot Noir','House Wedge'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Caymus Cabernet Sauvignon']
  },
  {
    name: 'Bone Marrow',
    category: 'starter',
    profile: ['rich','fatty','umami','smoky','indulgent','bold'],
    excellent: ['Bowdie\'s Old Fashioned','Espresso Old Fashioned','Scavino Barolo','Caymus Cabernet Sauvignon','The Manhattan'],
    strong: ['Silver Oak Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Venge Silencieux','Brussels and Belly','Creamed Spinach'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','House Wedge','Chocolate Brownie','Peanut Butter Brownie','Cheesecake'],
    avoid: ['Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Lingua Franca Avni Pinot Noir']
  },
  {
    name: 'Crab Cake',
    category: 'starter',
    profile: ['delicate','sweet','seafood','crispy','light'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Raventós Cava de NIT Rosé Brut','St Supéry Sauvignon Blanc'],
    strong: ['Lingua Franca Avni Pinot Noir','Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Cucumber Gimlet','French 75'],
    works: ['Le Garenne Rosé','Evening Land Seven Springs','Bee\'s Knees'],
    avoid: ['Opus One','Shafer Hillside Select','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','The Manhattan']
  },
  {
    name: 'Seafood Tower',
    category: 'starter',
    profile: ['seafood','delicate','briny','fresh','celebratory','varied'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Paul Bara Grand Rosé Brut','Jean-Pierre Grossot Chablis','French 75'],
    strong: ['Elk Cove Pinot Blanc','Joseph Mellot Sancerre','St Supéry Sauvignon Blanc','Veuve Clicquot Brut'],
    works: ['Le Garenne Rosé','Cucumber Gimlet','Bee\'s Knees'],
    avoid: ['Opus One','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Shrimp Cocktail',
    category: 'starter',
    profile: ['seafood','delicate','briny','chilled','classic'],
    excellent: ['Laurent Perrier Le Cuvée Brut','Jean-Pierre Grossot Chablis','St Supéry Sauvignon Blanc','Raventós Cava de NIT Rosé Brut'],
    strong: ['Elk Cove Pinot Blanc','Stoneleigh Sauvignon Blanc','Cucumber Gimlet','French 75','The Happy Wife'],
    works: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Bee\'s Knees','Transfusion'],
    avoid: ['Opus One','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Seared Scallops',
    category: 'starter',
    profile: ['seafood','delicate','sweet','seared','rich','light'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Elk Cove Pinot Blanc'],
    strong: ['Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Lingua Franca Avni Pinot Noir','Cucumber Gimlet'],
    works: ['Le Garenne Rosé','Fisher Unity Pinot Noir','Bee\'s Knees'],
    avoid: ['Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo','Opus One']
  },
  {
    name: 'Escargot',
    category: 'starter',
    profile: ['rich','buttery','herbaceous','garlic','French','indulgent'],
    excellent: ['Jean-Pierre Grossot Chablis','Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','French 75','Bee\'s Knees'],
    strong: ['Elk Cove Pinot Blanc','Laurent Perrier Le Cuvée Brut','Corpse Reviver','Keenan Chardonnay'],
    works: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Cucumber Gimlet'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Burrata',
    category: 'starter',
    profile: ['creamy','mild','fresh','delicate','dairy-rich'],
    excellent: ['Le Garenne Rosé','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Bee\'s Knees'],
    strong: ['Elk Cove Pinot Blanc','St Supéry Sauvignon Blanc','Stoneleigh Sauvignon Blanc','Cucumber Gimlet','French 75'],
    works: ['Lingua Franca Avni Pinot Noir','G.D. Vajra Moscato d\'Asti','Domaine de Berthiers Pouilly-Fumé'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Scavino Barolo']
  },

  // ── SOUPS & SALADS ────────────────────────────────────────────────────────────

  {
    name: 'Shrimp Bisque',
    category: 'soup-salad',
    profile: ['rich','creamy','seafood','sweet','warm','indulgent'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut'],
    strong: ['Elk Cove Pinot Blanc','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut'],
    works: ['Le Garenne Rosé','Jordan Cabernet Sauvignon','Fisher Unity Pinot Noir'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'House Wedge',
    category: 'soup-salad',
    profile: ['crisp','creamy','fresh','classic','approachable'],
    excellent: ['Le Garenne Rosé','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut','St Supéry Sauvignon Blanc'],
    strong: ['Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Elk Cove Pinot Blanc','Cucumber Gimlet'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','Fisher Unity Pinot Noir','French 75'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard']
  },
  {
    name: 'Grilled Caesar',
    category: 'soup-salad',
    profile: ['smoky','umami','creamy','bold','anchovy','charred'],
    excellent: ['Jean-Pierre Grossot Chablis','Scavino Barolo','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir'],
    strong: ['Keenan Chardonnay','Jordan Cabernet Sauvignon','Raventós Cava de NIT Rosé Brut','Corpse Reviver'],
    works: ['Laurent Perrier Le Cuvée Brut','Faust Napa Valley Cabernet'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Opus One']
  },
  {
    name: 'Seasonal Soup',
    category: 'soup-salad',
    profile: ['variable','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Lingua Franca Avni Pinot Noir','Le Garenne Rosé','Elk Cove Pinot Blanc'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What is today\'s soup? (e.g. French onion, butternut squash, tomato basil)'
  },

  // ── MAINS ─────────────────────────────────────────────────────────────────────

  {
    name: 'Faroe Island Salmon',
    category: 'main',
    profile: ['seafood','rich','fatty','delicate','fresh','seasonal'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir','Evening Land Seven Springs'],
    strong: ['Domaine de Berthiers Pouilly-Fumé','Joseph Mellot Sancerre','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Cucumber Gimlet','The Happy Wife','Transfusion'],
    works: ['Le Garenne Rosé','Fisher Unity Pinot Noir','Cristom Mt Jefferson Cuvée','Bee\'s Knees','Paloma','Creme Brulee','Beignets','Cheesecake'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Shafer Hillside Select','Bowdie\'s Old Fashioned','Scavino Barolo','The Manhattan']
  },
  {
    name: 'Market Fish',
    category: 'main',
    profile: ['seafood','variable','delicate','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Laurent Perrier Le Cuvée Brut','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What is today\'s market fish and preparation?'
  },
  {
    name: 'Roast Half Chicken',
    category: 'main',
    profile: ['poultry','rich','savory','roasted','seasonal','approachable'],
    excellent: ['Keenan Chardonnay','Far Niente Chardonnay','Lingua Franca Avni Pinot Noir','Cristom Mt Jefferson Cuvée','Muga Reserva'],
    strong: ['Jean-Pierre Grossot Chablis','Evening Land Seven Springs','Alexander Valley Chardonnay','The Happy Wife','Paloma','The BG'],
    works: ['Jordan Cabernet Sauvignon','Faust Napa Valley Cabernet','Le Garenne Rosé','Raventós Cava de NIT Rosé Brut','Margarita','Creme Brulee','Beignets','Cheesecake','Carrot Cake'],
    avoid: ['Opus One','Shafer Hillside Select','Heitz Martha\'s Vineyard','Bowdie\'s Old Fashioned','The Manhattan']
  },

  // ── SIDES ─────────────────────────────────────────────────────────────────────

  {
    name: 'Truffle Fries',
    category: 'side',
    profile: ['rich','umami','earthy','indulgent','fatty','savory'],
    excellent: ['Caymus Cabernet Sauvignon','Scavino Barolo','Jordan Cabernet Sauvignon','The Manhattan','Bowdie\'s Old Fashioned','Silver Oak Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Vieux Carré','Not a Paper Plane','Mushrooms'],
    works: ['Lingua Franca Avni Pinot Noir','Evening Land Seven Springs','Espresso Old Fashioned'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Stoneleigh Sauvignon Blanc','Laurent Perrier Le Cuvée Brut','French 75','Head Fake']
  },
  {
    name: 'Lobster Mac',
    category: 'side',
    profile: ['rich','creamy','seafood','indulgent','umami','dairy-rich'],
    excellent: ['Far Niente Chardonnay','Keenan Chardonnay','Laurent Perrier Le Cuvée Brut','Jordan Cabernet Sauvignon'],
    strong: ['Jean-Pierre Grossot Chablis','Elk Cove Pinot Blanc','Lingua Franca Avni Pinot Noir','Raventós Cava de NIT Rosé Brut','The Manhattan'],
    works: ['Caymus Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Cucumber Gimlet'],
    avoid: ['Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Espresso Old Fashioned','Negroni']
  },
  {
    name: 'Au Gratin Potatoes',
    category: 'side',
    profile: ['rich','creamy','dairy-rich','savory','manchego','indulgent'],
    excellent: ['Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Scavino Barolo','The Manhattan','Vieux Carré'],
    works: ['Lingua Franca Avni Pinot Noir','Faust Napa Valley Cabernet','Truffle Fries'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Paloma']
  },
  {
    name: 'Brussels and Belly',
    category: 'side',
    profile: ['smoky','sweet','bitter','pork','rich','umami','bold'],
    excellent: ['Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned','Scavino Barolo','Espresso Old Fashioned','Silver Oak Cabernet Sauvignon'],
    strong: ['Jordan Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','The BG','Not a Paper Plane'],
    works: ['Lingua Franca Avni Pinot Noir','Negroni','Vieux Carré'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Cucumber Gimlet']
  },
  {
    name: 'Creamed Spinach',
    category: 'side',
    profile: ['rich','creamy','dairy-rich','savory','garlic','indulgent'],
    excellent: ['Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Caymus Cabernet Sauvignon'],
    strong: ['Far Niente Cabernet Sauvignon','Scavino Barolo','The Manhattan','Bowdie\'s Old Fashioned'],
    works: ['Lingua Franca Avni Pinot Noir','Faust Napa Valley Cabernet','Evening Land Seven Springs','Vieux Carré'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Paloma','Margarita']
  },
  {
    name: 'Sauteed Garlic Spinach',
    category: 'side',
    profile: ['savory','garlic','light','vegetable','clean'],
    excellent: ['Jean-Pierre Grossot Chablis','Domaine de Berthiers Pouilly-Fumé','Lingua Franca Avni Pinot Noir','Evening Land Seven Springs'],
    strong: ['Elk Cove Pinot Blanc','Le Garenne Rosé','Cristom Mt Jefferson Cuvée','Cucumber Gimlet','Bee\'s Knees'],
    works: ['Jordan Cabernet Sauvignon','Faroe Island Salmon','Roast Half Chicken','French 75'],
    avoid: ['Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned','Espresso Old Fashioned']
  },
  {
    name: 'Mushrooms',
    category: 'side',
    profile: ['umami','earthy','savory','rich','meaty'],
    excellent: ['Scavino Barolo','Caymus Cabernet Sauvignon','Jordan Cabernet Sauvignon','Silver Oak Cabernet Sauvignon','Bowdie\'s Old Fashioned','The Manhattan'],
    strong: ['Far Niente Cabernet Sauvignon','Ghost Block Cabernet Sauvignon','Lingua Franca Avni Pinot Noir','Not a Paper Plane','Vieux Carré','Negroni'],
    works: ['Evening Land Seven Springs','Faust Napa Valley Cabernet','Truffle Fries'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Stoneleigh Sauvignon Blanc','Head Fake','Paloma']
  },
  {
    name: 'Seasonal Vegetables',
    category: 'side',
    profile: ['variable','light','vegetable','seasonal'],
    excellent: [],
    strong: ['Jean-Pierre Grossot Chablis','Lingua Franca Avni Pinot Noir','Le Garenne Rosé','Elk Cove Pinot Blanc'],
    works: [],
    avoid: [],
    variable: true,
    variablePrompt: 'What are today\'s seasonal vegetables?'
  },

  // ── DESSERTS ──────────────────────────────────────────────────────────────────

  {
    name: 'Creme Brulee',
    category: 'dessert',
    profile: ['sweet','creamy','vanilla','delicate','classic','dairy-rich'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Vin Santo','Sauternes Glass','Graham\'s 10 Year Tawny','Graham\'s 20 Year Tawny'],
    strong: ['Inhibited','Espresso Martini','Baileys Irish Cream','Frangelico','Taylor Fladgate Tawny'],
    works: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Beignets'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni']
  },
  {
    name: 'Cheesecake',
    category: 'dessert',
    profile: ['sweet','creamy','rich','tangy','dairy-rich','dense'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Vin Santo','Graham\'s 10 Year Tawny','Sauternes Glass','Espresso Martini'],
    strong: ['Inhibited','Graham\'s 20 Year Tawny','Frangelico','Baileys Irish Cream','Taylor Fladgate Tawny'],
    works: ['Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Il Colle Prosecco Superiore'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni']
  },
  {
    name: 'Carrot Cake',
    category: 'dessert',
    profile: ['sweet','spiced','warm','cream-cheese','dense','earthy'],
    excellent: ['Graham\'s 10 Year Tawny','Graham\'s 20 Year Tawny','G.D. Vajra Moscato d\'Asti','Espresso Martini','Frangelico'],
    strong: ['Inhibited','Vin Santo','Sauternes Glass','Baileys Irish Cream','Espresso Old Fashioned'],
    works: ['Beignets','Il Colle Prosecco Superiore'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned','Negroni','Sazerac']
  },
  {
    name: 'Chocolate Brownie',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','dense','indulgent'],
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Graham\'s 10 Year Tawny'],
    works: ['Vin Santo','Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },
  {
    name: 'Peanut Butter Brownie',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','nutty','dense','indulgent'],
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Graham\'s 10 Year Tawny'],
    works: ['Vin Santo','Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },
  {
    name: 'Beignets',
    category: 'dessert',
    profile: ['sweet','light','fried','powdered-sugar','airy','approachable'],
    excellent: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Raventós Cava de NIT Rosé Brut','Il Colle Prosecco Superiore','Frangelico'],
    strong: ['Graham\'s 10 Year Tawny','Sauternes Glass','Espresso Martini','Baileys Irish Cream'],
    works: ['Vin Santo','Inhibited'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned','Negroni','Sazerac']
  },
  {
    name: 'Chocolate Cake',
    category: 'dessert',
    profile: ['sweet','rich','chocolate','layered','indulgent','bold'],
    oos: true,
    excellent: ['Espresso Martini','Inhibited','Graham\'s 20 Year Tawny','Espresso Old Fashioned','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Vin Santo'],
    works: ['Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },
  {
    name: 'Mocha Creme',
    category: 'dessert',
    profile: ['sweet','coffee','chocolate','creamy','rich','dessert'],
    oos: true,
    excellent: ['Espresso Martini','Inhibited','Espresso Old Fashioned','Graham\'s 20 Year Tawny','Frangelico'],
    strong: ['G.D. Vajra Moscato d\'Asti','Kahlua','Baileys Irish Cream','Vin Santo'],
    works: ['Sauternes Glass'],
    avoid: ['Caymus Cabernet Sauvignon','Scavino Barolo','Sazerac','Negroni','Stoneleigh Sauvignon Blanc']
  },

  // ── COCKTAILS ─────────────────────────────────────────────────────────────────

  {
    name: 'Bowdie\'s Old Fashioned',
    category: 'cocktail',
    profile: ['bold','whiskey','sweet','oak','smoky','spirit-forward'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Prime Tartare','Brussels and Belly'],
    strong: ['Kansas City','Filet Mignon','Truffle Fries','Caymus Cabernet Sauvignon','Lardons','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Creamed Spinach','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  },
  {
    name: 'Espresso Old Fashioned',
    category: 'cocktail',
    profile: ['bold','whiskey','coffee','sweet','rich','dark'],
    excellent: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Brussels and Belly','Lardons','Chocolate Cake','Chocolate Brownie'],
    strong: ['Kansas City','Filet Mignon','Truffle Fries','Creamed Spinach','Peanut Butter Brownie','Mocha Creme'],
    works: ['House Wedge','Shrimp Bisque','Beignets'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata','Seafood Tower']
  },
  {
    name: 'The Manhattan',
    category: 'cocktail',
    profile: ['bold','whiskey','bitter','sweet','spirit-forward','classic'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Truffle Fries','Bone Marrow','Lobster Mac'],
    strong: ['Cowboy Ribeye','Prime Tartare','Creamed Spinach','Mushrooms','Au Gratin Potatoes'],
    works: ['House Wedge','Brussels and Belly'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  },
  {
    name: 'Vieux Carré',
    category: 'cocktail',
    profile: ['bold','whiskey','cognac','herbal','complex','spirit-forward'],
    excellent: ['Filet Mignon','Kansas City','Bone Marrow','Prime Tartare','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Brussels and Belly','Grilled Caesar','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  },
  {
    name: 'Sazerac',
    category: 'cocktail',
    profile: ['bold','rye','herbal','anise','spirit-forward','classic'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','Bone Marrow','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Grilled Caesar','Mushrooms'],
    works: ['House Wedge','Brussels and Belly','Shrimp Bisque','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'The BG',
    category: 'cocktail',
    profile: ['whiskey','grapefruit','citrus','honey','floral','ginger','refreshing','sessionable'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow'],
    strong: ['Porterhouse','Brussels and Belly','House Wedge','Grilled Caesar','Shrimp Bisque'],
    works: ['Filet Mignon','Truffle Fries','Prime Tartare'],
    avoid: ['Opus One','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'French 75',
    category: 'cocktail',
    profile: ['sparkling','gin','citrus','light','celebratory','effervescent'],
    excellent: ['Crab Cake','Seafood Tower','Shrimp Cocktail','Burrata','Escargot','Seared Scallops'],
    strong: ['Prime Tartare','House Wedge','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Bee\'s Knees',
    category: 'cocktail',
    profile: ['gin','honey','citrus','light','sweet','approachable'],
    excellent: ['Crab Cake','Burrata','Escargot','Shrimp Cocktail','Seared Scallops'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Opus One']
  },
  {
    name: 'Cucumber Gimlet',
    category: 'cocktail',
    profile: ['gin','cucumber','citrus','fresh','light','herbaceous'],
    excellent: ['Crab Cake','Burrata','Seared Scallops','Shrimp Cocktail','House Wedge'],
    strong: ['Escargot','Seafood Tower','Prime Tartare','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Bone Marrow']
  },
  {
    name: 'Vesper',
    category: 'cocktail',
    profile: ['gin','vodka','citrus','dry','spirit-forward','classic'],
    excellent: ['Seared Scallops','Crab Cake','Seafood Tower','Shrimp Cocktail','Prime Tartare'],
    strong: ['Burrata','House Wedge','Escargot','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  },
  {
    name: 'Corpse Reviver',
    category: 'cocktail',
    profile: ['gin','citrus','absinthe','dry','complex','light'],
    excellent: ['Seared Scallops','Crab Cake','Escargot','Shrimp Cocktail','Burrata'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Grilled Caesar'],
    works: ['Filet Mignon','Shrimp Bisque'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Aviation',
    category: 'cocktail',
    profile: ['gin','floral','cherry','citrus','light','unique'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Paloma',
    category: 'cocktail',
    profile: ['tequila','grapefruit','citrus','light','refreshing','approachable'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata','House Wedge'],
    strong: ['Prime Tartare','Seafood Tower','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  },
  {
    name: 'Pablo Sour',
    category: 'cocktail',
    profile: ['tequila','citrus','sour','egg-white','balanced','medium'],
    excellent: ['Crab Cake','Seared Scallops','Prime Tartare','House Wedge','Shrimp Bisque'],
    strong: ['Burrata','Seafood Tower','Grilled Caesar','Filet Mignon'],
    works: ['Kansas City','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bone Marrow']
  },
  {
    name: 'Margarita',
    category: 'cocktail',
    profile: ['tequila','citrus','salt','bright','refreshing','approachable'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge','Burrata'],
    strong: ['Prime Tartare','Seafood Tower','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo']
  },
  {
    name: 'Espresso Martini',
    category: 'cocktail',
    profile: ['vodka','coffee','rich','sweet','bold','dessert-adjacent'],
    excellent: ['Chocolate Cake','Chocolate Brownie','Peanut Butter Brownie','Mocha Creme','Cheesecake'],
    strong: ['Bone Marrow','Brussels and Belly','Truffle Fries','Creamed Spinach','Beignets','Carrot Cake'],
    works: ['Kansas City','Filet Mignon','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut','Seafood Tower']
  },
  {
    name: 'The Happy Wife',
    category: 'cocktail',
    profile: ['vodka','orange','citrus','ginger','light','approachable','simple'],
    excellent: ['Shrimp Cocktail','Roast Half Chicken','Crab Cake'],
    strong: ['Burrata','House Wedge','Seared Scallops','Faroe Island Salmon','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Opus One','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Transfusion',
    category: 'cocktail',
    profile: ['vodka','grape','ginger','light','refreshing','approachable'],
    excellent: ['House Wedge','Burrata','Shrimp Cocktail','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Shrimp Bisque','Grilled Caesar'],
    works: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Head Fake',
    category: 'cocktail',
    profile: ['vodka','lemon','citrus','sweet','limoncello','bright','approachable'],
    excellent: ['Shrimp Cocktail','Seared Scallops','Burrata'],
    strong: ['Crab Cake','House Wedge','Seafood Tower','Shrimp Bisque','Escargot'],
    works: ['Filet Mignon','Prime Tartare','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo']
  },
  {
    name: 'Negroni',
    category: 'cocktail',
    offMenu: true,
    profile: ['gin','bitter','herbal','citrus','spirit-forward','complex'],
    excellent: ['Prime Tartare','Bone Marrow','Escargot','Grilled Caesar','Kansas City'],
    strong: ['Filet Mignon','Cowboy Ribeye','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Inhibited',
    category: 'cocktail',
    offMenu: true,
    profile: ['vodka','coffee','chocolate','rich','sweet','dessert','indulgent'],
    excellent: ['Chocolate Cake','Chocolate Brownie','Peanut Butter Brownie','Mocha Creme','Cheesecake','Creme Brulee','Carrot Cake','Beignets'],
    strong: ['Truffle Fries','Lobster Mac','Au Gratin Potatoes'],
    works: ['Creme Brulee','Brussels and Belly','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Seafood Tower','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Lemon Lavender Gin Martini',
    category: 'cocktail',
    offMenu: true,
    profile: ['gin','floral','citrus','light','delicate'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot'],
    strong: ['House Wedge','Prime Tartare','Seafood Tower','Shrimp Bisque'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'New York Sour',
    category: 'cocktail',
    offMenu: true,
    profile: ['whiskey','citrus','sour','wine-float','medium','balanced'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','House Wedge','Crab Cake'],
    strong: ['Porterhouse','Shrimp Bisque','Grilled Caesar'],
    works: ['Cowboy Ribeye','Brussels and Belly','Truffle Fries'],
    avoid: ['The Tomahawk','Laurent Perrier Le Cuvée Brut','Seared Scallops','Burrata']
  },
  {
    name: 'Not a Paper Plane',
    category: 'cocktail',
    offMenu: true,
    profile: ['whiskey','amaro','citrus','herbal','balanced','medium'],
    excellent: ['Filet Mignon','Kansas City','Prime Tartare','Bone Marrow','Grilled Caesar'],
    strong: ['Porterhouse','Cowboy Ribeye','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries'],
    avoid: ['Laurent Perrier Le Cuvée Brut','Seared Scallops','Crab Cake','Burrata']
  },

  // ── WINES — SPARKLING ─────────────────────────────────────────────────────────

  {
    name: 'G.D. Vajra Moscato d\'Asti',
    category: 'wine-sparkling',
    profile: ['sparkling','sweet','low-alcohol','peach','floral','delicate','dessert'],
    price: '$12 / $48',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Carrot Cake','Burrata'],
    strong: ['Peanut Butter Brownie','Chocolate Brownie','Shrimp Cocktail','Crab Cake'],
    works: ['House Wedge','Seared Scallops','Prime Tartare'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Il Colle Prosecco Superiore',
    category: 'wine-sparkling',
    profile: ['sparkling','light','crisp','apple','pear','approachable'],
    price: '$13 / $52',
    excellent: ['Burrata','Crab Cake','Shrimp Cocktail','Beignets','Cheesecake'],
    strong: ['Seared Scallops','House Wedge','Prime Tartare','Seafood Tower','Escargot'],
    works: ['Filet Mignon','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Opus One','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Raventós Cava de NIT Rosé Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','crisp','red-fruit','dry','versatile'],
    price: '$18 / $72',
    excellent: ['Prime Tartare','Crab Cake','Seafood Tower','Shrimp Cocktail','Burrata','Beignets'],
    strong: ['Seared Scallops','House Wedge','Filet Mignon','Grilled Caesar','Escargot'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Laurent Perrier Le Cuvée Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','crisp','citrus','toasty','celebratory','versatile'],
    price: '$25 / $100',
    excellent: ['Prime Tartare','Crab Cake','Shrimp Bisque','Seafood Tower','Shrimp Cocktail','Seared Scallops','Burrata','Escargot'],
    strong: ['Filet Mignon','House Wedge','Grilled Caesar','Bone-In Filet','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Bowdie\'s Old Fashioned','Bone Marrow']
  },
  {
    name: 'Laurent Perrier Brut Rosé',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','premium','strawberry','elegant','celebratory'],
    price: '$120',
    excellent: ['Prime Tartare','Crab Cake','Seafood Tower','Seared Scallops','Burrata','Shrimp Cocktail'],
    strong: ['Filet Mignon','House Wedge','Escargot','Grilled Caesar','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Veuve Clicquot Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','premium','toasty','citrus','rich','celebratory'],
    price: '$120',
    excellent: ['Seafood Tower','Prime Tartare','Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata'],
    strong: ['Filet Mignon','Escargot','House Wedge','Grilled Caesar','Beignets'],
    works: ['Faroe Island Salmon','Roast Half Chicken','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Paul Bara Grand Rosé Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','rosé','premium','pinot-driven','structured','rich'],
    price: '$150',
    excellent: ['Seafood Tower','Prime Tartare','Crab Cake','Seared Scallops','Filet Mignon'],
    strong: ['Shrimp Cocktail','Burrata','Escargot','House Wedge','Bone-In Filet'],
    works: ['Faroe Island Salmon','Grilled Caesar','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Robert Moncuit Les Grand Blancs',
    category: 'wine-sparkling',
    profile: ['sparkling','blanc-de-blancs','chardonnay-driven','mineral','crisp','elegant'],
    price: '$160',
    excellent: ['Seafood Tower','Seared Scallops','Crab Cake','Shrimp Cocktail','Escargot','Burrata'],
    strong: ['Prime Tartare','House Wedge','Filet Mignon','Grilled Caesar','Faroe Island Salmon'],
    works: ['Beignets','Roast Half Chicken','Lobster Mac'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Pierre Gimonnet Special Club Brut',
    category: 'wine-sparkling',
    profile: ['sparkling','blanc-de-blancs','premium','mineral','chardonnay-driven','complex'],
    price: '$200',
    excellent: ['Seafood Tower','Seared Scallops','Crab Cake','Prime Tartare','Filet Mignon','Escargot'],
    strong: ['Shrimp Cocktail','Burrata','House Wedge','Faroe Island Salmon','Grilled Caesar'],
    works: ['Beignets','Lobster Mac','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Opus One']
  },
  {
    name: 'Pommery Cuvée Louise',
    category: 'wine-sparkling',
    profile: ['sparkling','prestige','complex','toasty','mineral','celebratory','blanc-de-blancs'],
    price: '$300',
    excellent: ['Seafood Tower','Seared Scallops','Filet Mignon','Crab Cake','Prime Tartare','Escargot'],
    strong: ['Shrimp Cocktail','Burrata','House Wedge','Faroe Island Salmon','Bone-In Filet'],
    works: ['Lobster Mac','Beignets','Grilled Caesar'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },

  // ── WINES — WHITE ────────────────────────────────────────────────────────────

  {
    name: 'Stoneleigh Sauvignon Blanc',
    category: 'wine-white',
    profile: ['crisp','citrus','grassy','light','approachable','New-Zealand'],
    price: '$10 / $40',
    excellent: ['House Wedge','Burrata','Crab Cake','Shrimp Cocktail','Seared Scallops'],
    strong: ['Grilled Caesar','Escargot','Prime Tartare','Seafood Tower','Sauteed Garlic Spinach'],
    works: ['Faroe Island Salmon','Shrimp Bisque','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Alexander Valley Chardonnay',
    category: 'wine-white',
    profile: ['medium-bodied','oak','butter','apple','approachable','California'],
    price: '$12 / $48',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Shrimp Bisque','Lobster Mac'],
    strong: ['Crab Cake','Seared Scallops','House Wedge','Escargot','Burrata'],
    works: ['Filet Mignon','Grilled Caesar','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'St Supéry Sauvignon Blanc',
    category: 'wine-white',
    profile: ['crisp','citrus','grassy','grapefruit','clean','Napa'],
    price: '$12 / $48',
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge','Burrata'],
    strong: ['Escargot','Prime Tartare','Seafood Tower','Grilled Caesar','Sauteed Garlic Spinach'],
    works: ['Faroe Island Salmon','Shrimp Bisque','Roast Half Chicken'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Elk Cove Pinot Blanc',
    category: 'wine-white',
    profile: ['crisp','apple','pear','mineral','light','Oregon'],
    price: '$13 / $52',
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot','Burrata','Shrimp Bisque'],
    strong: ['Prime Tartare','House Wedge','Seafood Tower','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Jean-Pierre Grossot Chablis',
    category: 'wine-white',
    profile: ['crisp','mineral','citrus','oyster-shell','Burgundy','elegant'],
    price: '$16 / $64',
    excellent: ['Seared Scallops','Escargot','Crab Cake','Shrimp Bisque','Faroe Island Salmon','Prime Tartare'],
    strong: ['Shrimp Cocktail','House Wedge','Grilled Caesar','Sauteed Garlic Spinach','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Schloss Vollrads Riesling',
    category: 'wine-white',
    profile: ['off-dry','stone-fruit','mineral','floral','German','delicate'],
    price: '$16 / $64',
    excellent: ['Shrimp Bisque','Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata'],
    strong: ['Escargot','House Wedge','Faroe Island Salmon','Roast Half Chicken','Beignets'],
    works: ['Prime Tartare','Grilled Caesar','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Le Garenne Rosé',
    category: 'wine-white',
    profile: ['rosé','dry','fresh','red-fruit','light','Provence-style'],
    price: '$17 / $68',
    excellent: ['Burrata','House Wedge','Crab Cake','Seared Scallops','Shrimp Cocktail'],
    strong: ['Grilled Caesar','Escargot','Prime Tartare','Seafood Tower','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Domaine de Berthiers Pouilly-Fumé',
    category: 'wine-white',
    profile: ['crisp','mineral','flint','citrus','herbaceous','Loire'],
    price: '$19 / $76',
    excellent: ['Seared Scallops','Escargot','Crab Cake','Shrimp Bisque','Faroe Island Salmon'],
    strong: ['Prime Tartare','Shrimp Cocktail','House Wedge','Grilled Caesar','Sauteed Garlic Spinach'],
    works: ['Filet Mignon','Roast Half Chicken','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Our Lady of Guadalupe Acolytes',
    category: 'wine-white',
    profile: ['white-blend','complex','Oregon','herbal','structured'],
    price: '$20 / $80',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Seared Scallops','Shrimp Bisque'],
    strong: ['Crab Cake','Escargot','House Wedge','Grilled Caesar','Burrata'],
    works: ['Filet Mignon','Prime Tartare','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Joseph Mellot Sancerre',
    category: 'wine-white',
    profile: ['crisp','mineral','citrus','grassy','Loire','Sauvignon-Blanc','premium'],
    price: '$76',
    excellent: ['Seared Scallops','Crab Cake','Shrimp Cocktail','Prime Tartare','Escargot','Faroe Island Salmon'],
    strong: ['House Wedge','Burrata','Shrimp Bisque','Grilled Caesar','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Keenan Chardonnay',
    category: 'wine-white',
    profile: ['rich','oak','butter','tropical','full-bodied','Napa','premium'],
    price: '$120',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Lobster Mac','Shrimp Bisque','Seared Scallops'],
    strong: ['Crab Cake','Escargot','Grilled Caesar','Filet Mignon','Burrata'],
    works: ['House Wedge','Au Gratin Potatoes','Creamed Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Far Niente Chardonnay',
    category: 'wine-white',
    profile: ['rich','oak','butter','stone-fruit','full-bodied','Napa','prestige'],
    price: '$140',
    excellent: ['Faroe Island Salmon','Lobster Mac','Seared Scallops','Shrimp Bisque','Roast Half Chicken'],
    strong: ['Crab Cake','Escargot','Filet Mignon','Grilled Caesar','Burrata'],
    works: ['House Wedge','Creamed Spinach','Au Gratin Potatoes'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Scavino Barolo','Bowdie\'s Old Fashioned']
  },

  // ── WINES — BY THE GLASS (RED) ────────────────────────────────────────────────

  {
    name: 'Lunaria Coste di Moro',
    category: 'wine-red',
    profile: ['Montepulciano','medium-bodied','dark-fruit','earthy','Italian','approachable'],
    price: '$12 / $48',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Kermit Lynch Côtes du Rhône',
    category: 'wine-red',
    profile: ['Grenache-Syrah','medium-bodied','spice','red-fruit','earthy','Rhône','approachable'],
    price: '$12 / $48',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','Grilled Caesar','Kansas City'],
    strong: ['Filet Mignon','Brussels and Belly','Creamed Spinach','House Wedge','Sauteed Garlic Spinach'],
    works: ['Cowboy Ribeye','Porterhouse','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Alexander Valley Homestead Red',
    category: 'wine-red',
    profile: ['red-blend','approachable','medium-bodied','fruit-forward','California'],
    price: '$13 / $52',
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Filet Mignon','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Brussels and Belly','Truffle Fries','House Wedge','Au Gratin Potatoes'],
    works: ['Porterhouse','Creamed Spinach','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Scotto Cellars The Lost Chapters',
    category: 'wine-red',
    profile: ['red-blend','approachable','fruit-forward','soft','California','easy-drinking'],
    price: '$13 / $52',
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Filet Mignon','Brussels and Belly','Truffle Fries','Creamed Spinach','Au Gratin Potatoes'],
    works: ['Cowboy Ribeye','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Corazón del Sol Malbec',
    category: 'wine-red',
    profile: ['Malbec','bold','plum','dark-fruit','smooth','Argentina'],
    price: '$15 / $60',
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Mushrooms','Truffle Fries'],
    strong: ['Porterhouse','Filet Mignon','Brussels and Belly','Lardons','Creamed Spinach'],
    works: ['Grilled Caesar','Au Gratin Potatoes','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Fento Ollo de Sapo Mencía',
    category: 'wine-red',
    profile: ['Mencía','medium-bodied','earthy','floral','mineral','Spanish','unique'],
    price: '$15 / $60',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Filet Mignon','Kansas City','Sauteed Garlic Spinach','Brussels and Belly','Escargot'],
    works: ['Cowboy Ribeye','Shrimp Bisque','Burrata'],
    avoid: ['Crab Cake','Seared Scallops','The Tomahawk','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Lingua Franca Avni Pinot Noir',
    category: 'wine-red',
    profile: ['light','fruity','cherry','silky','approachable','Oregon'],
    price: '$18 / $72',
    excellent: ['Filet Mignon','House Wedge','Shrimp Bisque','Prime Tartare','Crab Cake','Seared Scallops'],
    strong: ['Kansas City','Faroe Island Salmon','Roast Half Chicken','Creamed Spinach','Brussels and Belly'],
    works: ['Cowboy Ribeye','Bone Marrow','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Fisher Unity Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','medium-bodied','cherry','earthy','Oregon','approachable'],
    price: '$19 / $76',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','House Wedge','Filet Mignon','Crab Cake'],
    strong: ['Seared Scallops','Grilled Caesar','Prime Tartare','Shrimp Bisque','Sauteed Garlic Spinach'],
    works: ['Kansas City','Lobster Mac','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Château de Rouillac',
    category: 'wine-red',
    profile: ['Bordeaux-blend','structured','cedar','dark-fruit','medium-full','French'],
    price: '$20 / $80',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'St Supéry Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','medium-full','blackcurrant','cedar','approachable','Napa'],
    price: '$20 / $80',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Au Gratin Potatoes','Grilled Caesar'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Quilt Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','approachable','jammy','smooth','Napa','fruit-forward'],
    price: '$22 / $88',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Scavino Barolo',
    category: 'wine-red',
    profile: ['bold','tannic','earthy','cherry','leather','structured','Piedmont'],
    price: '$25 / $100',
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','The Tomahawk','Truffle Fries','Bone Marrow','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Lardons','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Caymus Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','rich','jammy','oak','smooth','approachable'],
    price: '$28 / $180',
    excellent: ['Cowboy Ribeye','Kansas City','Filet Mignon','Truffle Fries','Creamed Spinach','Brussels and Belly','Bone Marrow'],
    strong: ['The Tomahawk','Porterhouse','Au Gratin Potatoes','Mushrooms','Lobster Mac'],
    works: ['Shrimp Bisque','Lardons','Grilled Caesar','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Shrimp Cocktail']
  },

  // ── WINES — PINOT NOIR (bottle) ───────────────────────────────────────────────

  {
    name: 'Cristom Mt Jefferson Cuvée',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','cherry','spice','medium-bodied','Oregon','structured'],
    price: '$75',
    excellent: ['Faroe Island Salmon','Roast Half Chicken','Filet Mignon','Crab Cake','House Wedge'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Daniel Chotard Sancerre Rouge',
    category: 'wine-red',
    profile: ['Pinot-Noir','Loire','earthy','mineral','light','French','unique'],
    price: '$90',
    excellent: ['Faroe Island Salmon','Crab Cake','Seared Scallops','House Wedge','Escargot'],
    strong: ['Prime Tartare','Roast Half Chicken','Grilled Caesar','Shrimp Bisque','Burrata'],
    works: ['Filet Mignon','Sauteed Garlic Spinach','Mushrooms'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Caymus Cabernet Sauvignon','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Evening Land Seven Springs',
    category: 'wine-red',
    profile: ['light','earthy','cherry','elegant','delicate','Oregon'],
    price: '$100',
    excellent: ['Filet Mignon','Bone-In Filet','Prime Tartare','Shrimp Bisque','House Wedge','Crab Cake','Seared Scallops'],
    strong: ['Kansas City','Faroe Island Salmon','Roast Half Chicken','Creamed Spinach','Grilled Caesar'],
    works: ['Cowboy Ribeye','Brussels and Belly'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Marimar Estate Christina',
    category: 'wine-red',
    profile: ['Pinot-Noir','elegant','cherry','earth','Russian-River','California','structured'],
    price: '$110',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','House Wedge','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Jax Calesa Vineyard Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','fruit-forward','cherry','smooth','California','approachable'],
    price: '$120',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','House Wedge','Crab Cake'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Sauteed Garlic Spinach','Burrata'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Macauley Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','rich','dark-cherry','structured','California','premium'],
    price: '$120',
    excellent: ['Filet Mignon','Kansas City','Roast Half Chicken','Faroe Island Salmon','Mushrooms'],
    strong: ['Crab Cake','House Wedge','Grilled Caesar','Seared Scallops','Brussels and Belly'],
    works: ['Cowboy Ribeye','Shrimp Bisque','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Elk Cove Five Mountain',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','cherry','spice','Oregon','structured','premium'],
    price: '$125',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Crab Cake','House Wedge'],
    strong: ['Seared Scallops','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'RAEN Royal St Robert',
    category: 'wine-red',
    profile: ['Pinot-Noir','coastal','mineral','elegant','Sonoma','complex'],
    price: '$125',
    excellent: ['Filet Mignon','Faroe Island Salmon','Seared Scallops','Crab Cake','House Wedge'],
    strong: ['Roast Half Chicken','Prime Tartare','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Sanford & Benedict Pinot Noir',
    category: 'wine-red',
    profile: ['Pinot-Noir','earthy','elegant','Sta-Rita-Hills','structured','premium'],
    price: '$130',
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Crab Cake','Seared Scallops'],
    strong: ['Prime Tartare','House Wedge','Grilled Caesar','Shrimp Bisque','Mushrooms'],
    works: ['Kansas City','Burrata','Sauteed Garlic Spinach'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'J Davies Ferrington Vineyards',
    category: 'wine-red',
    profile: ['Pinot-Noir','structured','dark-cherry','Sonoma','premium','age-worthy'],
    price: '$140',
    excellent: ['Filet Mignon','Kansas City','Faroe Island Salmon','Roast Half Chicken','Mushrooms'],
    strong: ['Crab Cake','Seared Scallops','House Wedge','Grilled Caesar','Shrimp Bisque'],
    works: ['Cowboy Ribeye','Burrata','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },

  // ── WINES — CABERNET (bottle) ─────────────────────────────────────────────────

  {
    name: '1881 Napa Valley',
    category: 'wine-red',
    profile: ['Cab','approachable','dark-fruit','smooth','Napa','entry-premium'],
    price: '$85',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Au Gratin Potatoes','Bone Marrow'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Faust Napa Valley Cabernet',
    category: 'wine-red',
    profile: ['Cab','bold','dark-fruit','structured','Napa','approachable'],
    price: '$100',
    excellent: ['Kansas City','Cowboy Ribeye','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Gundlach Bundschu Cabernet',
    category: 'wine-red',
    profile: ['Cab','structured','dark-fruit','earth','Sonoma','medium-full'],
    price: '$115',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Venge Silencieux',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','dark-fruit','Napa','structured'],
    price: '$120',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Austin Hope Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','rich','dark-fruit','Paso-Robles','full-bodied'],
    price: '$135',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Brussels and Belly'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Jordan Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['elegant','balanced','cedar','dark-cherry','smooth','approachable'],
    price: '$145',
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Shrimp Bisque','Brussels and Belly','Lobster Mac'],
    works: ['House Wedge','Bone Marrow','Lardons','Mushrooms','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops']
  },
  {
    name: 'Peju Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','approachable','fruit-forward','smooth','Napa','medium-full'],
    price: '$140',
    excellent: ['Kansas City','Filet Mignon','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Teeter Totter Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','structured','dark-fruit','Napa','premium'],
    price: '$150',
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'J. Davies Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','structured','elegant','dark-cherry','Napa','Diamond-Mountain','premium'],
    price: '$150',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Silver Oak Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','structured','cedar','blackberry','tobacco','elegant'],
    price: '$160',
    excellent: ['Cowboy Ribeye','Kansas City','The Tomahawk','Truffle Fries','Creamed Spinach','Porterhouse'],
    strong: ['Filet Mignon','Ghost Block Cabernet Sauvignon','Bone Marrow','Brussels and Belly','Mushrooms'],
    works: ['Shrimp Bisque','House Wedge','Lardons','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  },
  {
    name: 'Ghost Block Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','dark-fruit','structured','Oakville','Napa','premium'],
    price: '$160',
    excellent: ['Cowboy Ribeye','Kansas City','The Tomahawk','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Brandlin Estate Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','volcanic','structured','Mt-Veeder','Napa','premium'],
    price: '$175',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Lail Vineyards Blueprint',
    category: 'wine-red',
    profile: ['Cab','structured','dark-fruit','cedar','elegant','Napa','premium'],
    price: '$175',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','The Tomahawk','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Spottswoode Lyndenhurst',
    category: 'wine-red',
    profile: ['Cab','elegant','structured','cedar','St-Helena','Napa','premium'],
    price: '$175',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Nickel & Nickel Cabernet',
    category: 'wine-red',
    profile: ['Cab','single-vineyard','bold','concentrated','Napa','premium'],
    price: '$195',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Shafer 1.5',
    category: 'wine-red',
    profile: ['Cab','bold','Merlot-blended','rich','Stags-Leap','Napa','premium'],
    price: '$195',
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Cade Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','structured','Howell-Mountain','Napa','premium','organic'],
    price: '$210',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Darioush Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','bold','plush','Napa','premium','structured'],
    price: '$215',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Heitz Trailside Vineyard',
    category: 'wine-red',
    profile: ['Cab','structured','mint','cedar','Rutherford','Napa','premium'],
    price: '$220',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Frias Block 5',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Spring-Mountain','Napa','premium','structured'],
    price: '$225',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Far Niente Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['bold','rich','blackcurrant','vanilla','structured','polished'],
    price: '$250',
    excellent: ['Filet Mignon','Bone-In Filet','Cowboy Ribeye','Truffle Fries','Bone Marrow','Lobster Mac'],
    strong: ['Kansas City','The Tomahawk','Creamed Spinach','Brussels and Belly','Mushrooms'],
    works: ['House Wedge','Shrimp Bisque','Au Gratin Potatoes','Chocolate Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  },
  {
    name: 'Odette Cabernet Sauvignon',
    category: 'wine-red',
    profile: ['Cab','polished','dark-fruit','Stags-Leap','Napa','prestige','elegant'],
    price: '$275',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Bone Marrow','Mushrooms'],
    strong: ['Cowboy Ribeye','The Tomahawk','Porterhouse','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Macauley Stagecoach Vineyard',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Vaca-Mountains','Napa','prestige'],
    price: '$295',
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Freemark Abbey Bosché',
    category: 'wine-red',
    profile: ['Cab','historic','structured','Rutherford','Napa','prestige','age-worthy'],
    price: '$300',
    excellent: ['Filet Mignon','The Tomahawk','Kansas City','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Venge Family Reserve',
    category: 'wine-red',
    profile: ['Cab','bold','concentrated','Oakville','Napa','prestige'],
    price: '$325',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Lail Vineyards Daniel Cuvée',
    category: 'wine-red',
    profile: ['Cab','prestige','complex','structured','Napa','icon'],
    price: '$350',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone Marrow','Truffle Fries'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Heitz Martha\'s Vineyard',
    category: 'wine-red',
    profile: ['Cab','iconic','mint','cedar','Rutherford','Napa','legendary'],
    price: '$400',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Bone-In Filet','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Brussels and Belly'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Simon Family Estate Reserve',
    category: 'wine-red',
    profile: ['Cab','prestige','bold','structured','Napa','icon'],
    price: '$400',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Shafer Hillside Select',
    category: 'wine-red',
    profile: ['bold','concentrated','plum','mocha','structured','prestige'],
    price: '$450',
    excellent: ['The Tomahawk','Cowboy Ribeye','Truffle Fries','Bone Marrow','Brussels and Belly'],
    strong: ['Kansas City','Filet Mignon','Porterhouse','Creamed Spinach','Mushrooms'],
    works: ['House Wedge','Au Gratin Potatoes'],
    avoid: ['Prime Tartare','Seared Scallops','Burrata','lighter apps']
  },
  {
    name: 'Opus One',
    category: 'wine-red',
    profile: ['bold','complex','structured','dark-fruit','cedar','velvety','prestige'],
    price: '$475',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone-In Filet','Truffle Fries','Bone Marrow'],
    strong: ['Kansas City','Porterhouse','Creamed Spinach','Brussels and Belly','Lobster Mac'],
    works: ['House Wedge','Mushrooms','Au Gratin Potatoes','Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee'],
    avoid: ['Prime Tartare','Crab Cake','Seared Scallops','Burrata']
  },
  {
    name: 'Jubilation by Colgin',
    category: 'wine-red',
    profile: ['Cab-blend','icon','Napa','prestige','complex','structured','legendary'],
    price: '$475',
    excellent: ['The Tomahawk','Filet Mignon','Bone-In Filet','Bone Marrow','Truffle Fries'],
    strong: ['Cowboy Ribeye','Kansas City','Porterhouse','Mushrooms','Creamed Spinach'],
    works: ['House Wedge','Brussels and Belly','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },

  // ── WINES — OLD WORLD ─────────────────────────────────────────────────────────

  {
    name: 'Marc Brédif Chinon',
    category: 'wine-red',
    profile: ['Cabernet-Franc','Loire','earthy','red-fruit','herbaceous','light-medium'],
    price: '$60',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','House Wedge','Grilled Caesar'],
    strong: ['Filet Mignon','Escargot','Sauteed Garlic Spinach','Burrata','Prime Tartare'],
    works: ['Kansas City','Shrimp Bisque','Crab Cake'],
    avoid: ['The Tomahawk','Caymus Cabernet Sauvignon','Opus One','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Braida Montebruna Barbera',
    category: 'wine-red',
    profile: ['Barbera-d\'Asti','medium-bodied','cherry','earthy','Italian','food-friendly'],
    price: '$70',
    excellent: ['Roast Half Chicken','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Filet Mignon','Faroe Island Salmon','Brussels and Belly','Creamed Spinach','House Wedge'],
    works: ['Cowboy Ribeye','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Les Pallières Raciné',
    category: 'wine-red',
    profile: ['Gigondas','Grenache-dominant','bold','earthy','spice','Rhône','structured'],
    price: '$90',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Grilled Caesar','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Le Volte dell\'Ornellaia',
    category: 'wine-red',
    profile: ['Tuscan-blend','medium-full','dark-fruit','Merlot-driven','Italian','structured'],
    price: '$80',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Grilled Caesar','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Muga Reserva',
    category: 'wine-red',
    profile: ['Rioja','Tempranillo','earthy','vanilla','structured','Spanish'],
    price: '$80',
    excellent: ['Roast Half Chicken','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Filet Mignon','Cowboy Ribeye','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Faroe Island Salmon'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Tenuta di Arceno Chianti Classico',
    category: 'wine-red',
    profile: ['Chianti','Sangiovese','earthy','cherry','acidic','Italian','structured'],
    price: '$95',
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Château Haut Segottes',
    category: 'wine-red',
    profile: ['Saint-Émilion','Merlot-dominant','plush','dark-fruit','French','structured'],
    price: '$100',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Bone Marrow','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Clos Petit Ona Grenache',
    category: 'wine-red',
    profile: ['Grenache','medium-bodied','red-fruit','earthy','Spanish','approachable'],
    price: '$105',
    excellent: ['Roast Half Chicken','Faroe Island Salmon','Mushrooms','House Wedge','Grilled Caesar'],
    strong: ['Filet Mignon','Kansas City','Brussels and Belly','Sauteed Garlic Spinach','Shrimp Bisque'],
    works: ['Cowboy Ribeye','Burrata','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'G.D. Vajra Albe Nebbiolo',
    category: 'wine-red',
    profile: ['Nebbiolo','earthy','cherry','floral','Piedmont','medium-bodied','Italian'],
    price: '$110',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Bone Marrow','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Domaine Tempier Bandol',
    category: 'wine-red',
    profile: ['Mourvèdre-dominant','bold','earthy','dark-fruit','Provence','structured'],
    price: '$120',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Grilled Caesar','Lardons'],
    works: ['House Wedge','Creamed Spinach','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Domaine du Grand Tinel',
    category: 'wine-red',
    profile: ['Châteauneuf-du-Pape','Grenache-dominant','bold','earthy','spice','Rhône'],
    price: '$125',
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Grilled Caesar','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Pio Cesare Barbaresco',
    category: 'wine-red',
    profile: ['Nebbiolo','Barbaresco','structured','earthy','floral','Piedmont','premium'],
    price: '$130',
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Au Gratin Potatoes','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Château Batailley',
    category: 'wine-red',
    profile: ['Pauillac','Cab-dominant','structured','cedar','classic-Bordeaux','premium'],
    price: '$140',
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Château Beaucastel',
    category: 'wine-red',
    profile: ['Châteauneuf-du-Pape','Mourvèdre-heavy','bold','complex','earthy','prestige'],
    price: '$175',
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Mushrooms'],
    strong: ['Filet Mignon','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Poderi Aldo Conterno Nebbiolo',
    category: 'wine-red',
    profile: ['Nebbiolo','Piedmont','structured','earthy','premium','age-worthy'],
    price: '$180',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Le Ragnaie Brunello',
    category: 'wine-red',
    profile: ['Brunello','Sangiovese-Grosso','bold','structured','earthy','Tuscany','prestige'],
    price: '$200',
    excellent: ['Filet Mignon','Kansas City','The Tomahawk','Bone Marrow','Mushrooms'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Sesti Brunello di Montalcino',
    category: 'wine-red',
    profile: ['Brunello','Sangiovese','bold','earthy','structured','Tuscany','icon'],
    price: '$250',
    excellent: ['The Tomahawk','Cowboy Ribeye','Filet Mignon','Bone Marrow','Truffle Fries'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Creamed Spinach','Brussels and Belly'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },

  // ── WINES — BLENDS & OTHERS ───────────────────────────────────────────────────

  {
    name: 'Bodega Noemia A Lisa',
    category: 'wine-red',
    profile: ['Malbec-blend','Argentina','medium-full','dark-fruit','earthy','structured'],
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Ghost Block Zinfandel',
    category: 'wine-red',
    profile: ['Zinfandel','bold','jammy','spice','Oakville','Napa','full-bodied'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Brussels and Belly','Lardons'],
    strong: ['The Tomahawk','Filet Mignon','Mushrooms','Truffle Fries','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'The Prisoner Red Blend',
    category: 'wine-red',
    profile: ['red-blend','Zinfandel-led','bold','jammy','approachable','California'],
    excellent: ['Kansas City','Cowboy Ribeye','Mushrooms','Bone Marrow','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Macauley Petite Syrah',
    category: 'wine-red',
    profile: ['Petite-Sirah','bold','inky','dark-fruit','tannic','California','full-bodied'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Kansas City','Lardons'],
    strong: ['Filet Mignon','Porterhouse','Brussels and Belly','Mushrooms','Truffle Fries'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Alexander Valley Cyrus',
    category: 'wine-red',
    profile: ['Bordeaux-style-blend','bold','structured','dark-fruit','Alexander-Valley','premium'],
    excellent: ['Kansas City','Cowboy Ribeye','Bone Marrow','Truffle Fries','Mushrooms'],
    strong: ['The Tomahawk','Filet Mignon','Porterhouse','Brussels and Belly','Creamed Spinach'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Epoch Ingenuity',
    category: 'wine-red',
    profile: ['Rhône-style-blend','Paso-Robles','bold','spice','dark-fruit','structured'],
    excellent: ['Cowboy Ribeye','Kansas City','Bone Marrow','Mushrooms','Truffle Fries'],
    strong: ['The Tomahawk','Filet Mignon','Brussels and Belly','Creamed Spinach','Lardons'],
    works: ['House Wedge','Au Gratin Potatoes','Grilled Caesar'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'San Simeon Stormwatch',
    category: 'wine-red',
    profile: ['red-blend','approachable','medium-full','fruit-forward','Paso-Robles'],
    excellent: ['Kansas City','Roast Half Chicken','Mushrooms','Truffle Fries','Creamed Spinach'],
    strong: ['Filet Mignon','Cowboy Ribeye','Brussels and Belly','Au Gratin Potatoes','Grilled Caesar'],
    works: ['House Wedge','Porterhouse','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Domaine Serene Grand Cheval',
    category: 'wine-red',
    profile: ['Pinot-Noir-Chardonnay-blend','Oregon','elegant','complex','premium'],
    excellent: ['Filet Mignon','Faroe Island Salmon','Roast Half Chicken','Seared Scallops','House Wedge'],
    strong: ['Crab Cake','Shrimp Bisque','Grilled Caesar','Mushrooms','Prime Tartare'],
    works: ['Kansas City','Burrata','Lobster Mac'],
    avoid: ['The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Caymus Cabernet Sauvignon']
  },
  {
    name: 'St Supéry Élu Meritage',
    category: 'wine-red',
    profile: ['Bordeaux-blend','Cab-dominant','structured','Napa','premium'],
    excellent: ['Filet Mignon','Kansas City','Truffle Fries','Mushrooms','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Lardons'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Darioush Cabernet Franc',
    category: 'wine-red',
    profile: ['Cab-Franc','Napa','herbaceous','dark-fruit','structured','premium'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Au Gratin Potatoes','Roast Half Chicken'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },
  {
    name: 'Keenan Mernet',
    category: 'wine-red',
    profile: ['Merlot-Cab-Franc-blend','Napa','Spring-Mountain','structured','earthy','unique'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Bone Marrow'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Brussels and Belly','Grilled Caesar'],
    works: ['House Wedge','Roast Half Chicken','Au Gratin Potatoes'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail']
  },

  // ── WINES — DESSERT / PORT ────────────────────────────────────────────────────

  {
    name: 'Graham\'s 10 Year Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','nutty','caramel','dried-fruit','sweet','oxidative'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Peanut Butter Brownie','Chocolate Brownie'],
    strong: ['Beignets','Chocolate Cake','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Graham\'s 20 Year Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','premium','nutty','complex','dried-fruit','sweet','oxidative'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Chocolate Brownie','Peanut Butter Brownie','Chocolate Cake'],
    strong: ['Beignets','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Graham\'s 2017 Vintage Port',
    category: 'wine-dessert',
    profile: ['vintage-port','bold','structured','dark-fruit','sweet','prestige'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Chocolate Cake','Peanut Butter Brownie','Cheesecake','Mocha Creme'],
    strong: ['Creme Brulee','Carrot Cake','Beignets'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Taylor Fladgate Tawny',
    category: 'wine-dessert',
    profile: ['tawny-port','classic','nutty','caramel','sweet'],
    price: 'Port',
    excellent: ['Creme Brulee','Cheesecake','Carrot Cake','Chocolate Brownie','Beignets'],
    strong: ['Peanut Butter Brownie','Chocolate Cake','Mocha Creme'],
    works: ['Frangelico'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Taylor Fladgate Vintage Bottle',
    category: 'wine-dessert',
    profile: ['vintage-port','structured','dark-fruit','bold','sweet','prestige'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Chocolate Cake','Cheesecake','Peanut Butter Brownie','Mocha Creme'],
    strong: ['Creme Brulee','Carrot Cake','Beignets'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Casa LBV Port',
    category: 'wine-dessert',
    profile: ['late-bottled-vintage','approachable','dark-fruit','sweet','structured'],
    price: 'Port',
    excellent: ['Chocolate Brownie','Cheesecake','Peanut Butter Brownie','Carrot Cake','Creme Brulee'],
    strong: ['Beignets','Chocolate Cake','Mocha Creme'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Pineau des Charentes',
    category: 'wine-dessert',
    profile: ['fortified','Cognac-based','sweet','grape','French','aperitif-or-dessert'],
    price: 'Dessert',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Burrata','Shrimp Cocktail'],
    strong: ['Carrot Cake','Seared Scallops','House Wedge','Prime Tartare','Escargot'],
    works: ['Grilled Caesar','Shrimp Bisque','Crab Cake'],
    avoid: ['The Tomahawk','Cowboy Ribeye','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Vin Santo',
    category: 'wine-dessert',
    profile: ['dessert-wine','Italian','sweet','dried-fruit','nutty','oxidative'],
    price: 'Dessert',
    excellent: ['Beignets','Cheesecake','Creme Brulee','Carrot Cake','Peanut Butter Brownie'],
    strong: ['Chocolate Brownie','Chocolate Cake','Mocha Creme'],
    works: [],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  },
  {
    name: 'Sauternes Glass',
    category: 'wine-dessert',
    profile: ['Sauternes','sweet','botrytis','honey','stone-fruit','French','dessert'],
    price: 'Dessert',
    excellent: ['Creme Brulee','Cheesecake','Beignets','Carrot Cake'],
    strong: ['Peanut Butter Brownie','Chocolate Brownie','Burrata','Shrimp Bisque'],
    works: ['Chocolate Cake','Mocha Creme'],
    avoid: ['Cowboy Ribeye','The Tomahawk','Bone Marrow','Bowdie\'s Old Fashioned','Scavino Barolo']
  },

  // ── SPIRITS — BOURBON ─────────────────────────────────────────────────────────

  {
    name: 'Light / Wheated Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Weller Special Reserve','Weller 107','Weller 12 Year','Weller Millennium','Maker\'s Mark','Maker\'s Mark Cellar Aged','Bowdie\'s Private Select — Maker\'s Mark','Larceny Small Batch','Basil Hayden\'s','Basil Hayden\'s Toast','Basil Hayden\'s Red Wine Cask','Basil Hayden\'s 10 Year','Basil Hayden\'s Malted Rye','Four Roses Yellow Label','Jim Beam White Label','Jim Beam Black Label','Jefferson\'s Reserve','Jefferson\'s Reserve VR Twin Oak','Woodford Reserve','Knob Creek','Knob Creek Bourbon/Rye','Willett Pot Still Reserve','Buffalo Trace','Russell\'s Reserve 10 Year','Heaven Hill Bottled in Bond','Old Fitzgerald 7 Year','Old Fitzgerald 9 Year','Bulleit Bourbon','Blade & Bow','Clermont Steep','1792 Sweet Wheat'],
    profile: ['bourbon','wheated','caramel','vanilla','approachable','medium-bodied'],
    excellent: ['Filet Mignon','Kansas City','Bone Marrow','Truffle Fries','Mushrooms','Brussels and Belly'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Au Gratin Potatoes','Lardons','Carrot Cake'],
    works: ['House Wedge','Grilled Caesar','Cheesecake','Chocolate Brownie','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Bold / High-Proof Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Booker\'s','George T. Stagg','Stagg Jr. Batch #15','E.H. Taylor Full Proof','E.H. Taylor Small Batch','Elijah Craig 18 Year','Elijah Craig Single Barrel','Elijah Craig Private Barrel','Knob Creek 12 Year','Knob Creek 15 Year','Knob Creek 18 Year','Baker\'s','Heaven Hill 20 Year','Old Grand-Dad 16 Year','Parker\'s Heritage Collection 16th Edition','Blanton\'s Straight from the Barrel','I.W. Harper 15 Year','Michter\'s 10 Year Bourbon','Remus 15 Year Gatsby Reserve','Little Book','Bardstown Discovery #6','Bardstown Fusion #7','Bardstown Founders KBS','Bardstown Rishi\'s Single Barrel','Blood Oath Pact 8','Blood Oath Pact 9','Blood Oath Pact 10','Mister Sam Tribute Whiskey','Rishi\'s Old Antique','Hancock\'s Reserve Single Barrel','Elmer T. Lee','1792 Small Batch'],
    profile: ['bourbon','high-proof','bold','oak','spice','complex','rich'],
    excellent: ['Cowboy Ribeye','The Tomahawk','Kansas City','Bone Marrow','Brussels and Belly','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Lardons','Au Gratin Potatoes'],
    works: ['House Wedge','Grilled Caesar','Chocolate Brownie','Peanut Butter Brownie','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },
  {
    name: 'Finished / Special Character Bourbon',
    category: 'bourbon',
    spiritCluster: true,
    members: ['Angel\'s Envy','Angel\'s Envy Cask Strength','Angel\'s Envy Triple Cask','Isaac Bowman Port Finish','Jefferson\'s Ocean Voyage 23','Jefferson\'s Ocean Marian McLain L.E.','Basil Hayden\'s Red Wine Cask','Bardstown Château Laboude','Bardstown Foursquare','Fox & Oden','Fox & Oden Double Oaked','Thomas S. Moore Chardonnay Cask','New Holland Beer Barrel Bourbon','Ironfish Bourbon in Mezcal Casks','Old Elk Cigar Cut','A Midnight\'s Winter Dram','Heaven\'s Door 10 Year','Blanton\'s Original','Blanton\'s Gold','Bowman Brothers Small Batch','Four Roses Small Batch Select','Henry McKenna 10 Year Bottled in Bond'],
    profile: ['bourbon','finished','sweet','complex','fruit-forward','wine-influenced','distinctive'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Bone Marrow','Truffle Fries','Chocolate Brownie'],
    strong: ['Cowboy Ribeye','Mushrooms','Creamed Spinach','Carrot Cake','Peanut Butter Brownie','Brussels and Belly'],
    works: ['House Wedge','Cheesecake','Creme Brulee','Grilled Caesar','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },

  // ── SPIRITS — RYE ─────────────────────────────────────────────────────────────

  {
    name: 'Approachable Rye',
    category: 'rye',
    spiritCluster: true,
    members: ['Sazerac Rye','Michter\'s US*1 Rye','Elijah Craig Straight Rye','Knob Creek Rye','Woodford Reserve Rye','Doc Swinson\'s Alter Ego Rye','Never Say Die Rye','Pikesville Rye','Woodinville Rye','E.H. Taylor Rye','WhistlePig PiggyBack 6 Year'],
    profile: ['rye','spice','pepper','herbal','medium-bodied','approachable'],
    excellent: ['Kansas City','Filet Mignon','Bone Marrow','Prime Tartare','Grilled Caesar','Truffle Fries'],
    strong: ['Cowboy Ribeye','Porterhouse','Mushrooms','Brussels and Belly','Creamed Spinach','House Wedge'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Lardons','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Bold / Premium Rye',
    category: 'rye',
    spiritCluster: true,
    members: ['WhistlePig 10 Year Single Barrel Rye','WhistlePig 12 Year Old World','WhistlePig 15 Year','WhistlePig Boss Hog IX 17 Year','WhistlePig Boss Hog X Commandments','Thomas H. Handy Sazerac Rye','Pappy Van Winkle 13 Year Rye','Kentucky Owl 10 Year Rye','Mammoth 16 Year Single Barrel Rye','Lock Stock & Barrel Rye','Michter\'s 10 Year Rye','Never Say Die Rye'],
    profile: ['rye','bold','high-proof','spice','complex','oak','premium'],
    excellent: ['The Tomahawk','Cowboy Ribeye','Kansas City','Bone Marrow','Brussels and Belly','Truffle Fries'],
    strong: ['Filet Mignon','Porterhouse','Mushrooms','Creamed Spinach','Lardons','Prime Tartare'],
    works: ['House Wedge','Grilled Caesar','Chocolate Brownie','Peanut Butter Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','Laurent Perrier Le Cuvée Brut','G.D. Vajra Moscato d\'Asti']
  },

  // ── SPIRITS — SCOTCH ──────────────────────────────────────────────────────────

  {
    name: 'Blended Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Dewar\'s White Label','Dewar\'s 15','Johnnie Walker Red','Johnnie Walker Black','Johnnie Walker Blue','Monkey Shoulder'],
    profile: ['scotch','blended','approachable','light-smoke','grain','versatile'],
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Grilled Caesar','House Wedge'],
    strong: ['Cowboy Ribeye','Porterhouse','Truffle Fries','Brussels and Belly','Creamed Spinach'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Bone Marrow','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Highland Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Dalmore 12','Glenmorangie 10','Glenmorangie 18','Oban 14','Oban 18','Glenglassaugh 12','Loch Lomond 20 Year'],
    profile: ['scotch','highland','honey','heather','light-fruit','medium-bodied','coastal-or-floral'],
    excellent: ['Filet Mignon','Kansas City','Mushrooms','Truffle Fries','Grilled Caesar'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Creamed Spinach','House Wedge','Carrot Cake'],
    works: ['Shrimp Bisque','Au Gratin Potatoes','Brussels and Belly','Cheesecake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Speyside Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Glenfiddich 12','Glenfiddich 14','Glenfiddich 18','Glenfiddich Gran Cru 23','Glenlivet 12','Macallan 12 Sherry','Macallan 18','Macallan Estate','Balvenie 12 American Oak','Balvenie 14 Caribbean Cask','Balvenie 16 Single Barrel','Balvenie 21 Portwood','Aberlour 16','Cragganmore 12'],
    profile: ['scotch','speyside','fruit','sherry','honey','elegant','approachable'],
    excellent: ['Filet Mignon','Bone-In Filet','Kansas City','Mushrooms','Truffle Fries','Carrot Cake'],
    strong: ['Cowboy Ribeye','Porterhouse','Bone Marrow','Creamed Spinach','Au Gratin Potatoes','Cheesecake'],
    works: ['House Wedge','Grilled Caesar','Shrimp Bisque','Brussels and Belly','Peanut Butter Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Islay Scotch',
    category: 'scotch',
    spiritCluster: true,
    members: ['Lagavulin 8','Laphroaig 10','Bowmore 12','Bruichladdich'],
    profile: ['scotch','islay','peated','smoky','medicinal','bold','coastal','distinctive'],
    excellent: ['Bone Marrow','The Tomahawk','Cowboy Ribeye','Lardons','Brussels and Belly','Grilled Caesar'],
    strong: ['Kansas City','Porterhouse','Mushrooms','Truffle Fries','Prime Tartare','Shrimp Bisque'],
    works: ['House Wedge','Creamed Spinach','Chocolate Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Cheesecake']
  },

  // ── SPIRITS — IRISH ───────────────────────────────────────────────────────────

  {
    name: 'Irish Whiskey',
    category: 'irish',
    spiritCluster: true,
    members: ['Jameson Irish Whiskey','Tullamore D.E.W.','Garavogue Irish Whiskey','Redbreast 12 Year','Redbreast 21 Year','Kentucky Owl St. Patrick\'s'],
    profile: ['irish','smooth','light','grain','approachable','triple-distilled'],
    excellent: ['Roast Half Chicken','Faroe Island Salmon','House Wedge','Kansas City','Filet Mignon'],
    strong: ['Mushrooms','Grilled Caesar','Truffle Fries','Shrimp Bisque','Brussels and Belly'],
    works: ['Crab Cake','Seared Scallops','Creamed Spinach','Carrot Cake'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — JAPANESE ────────────────────────────────────────────────────────

  {
    name: 'Japanese Whisky',
    category: 'japanese',
    spiritCluster: true,
    members: ['Toki Suntory Japanese Whisky','Hibiki Japanese Harmony','Hakushu 12 Year','Yamazaki 12 Year','Yamazaki 18 Year'],
    profile: ['japanese','delicate','floral','fruit','elegant','complex','balanced'],
    excellent: ['Filet Mignon','Bone-In Filet','Faroe Island Salmon','Roast Half Chicken','Seared Scallops','Mushrooms'],
    strong: ['Kansas City','House Wedge','Grilled Caesar','Shrimp Bisque','Truffle Fries','Prime Tartare'],
    works: ['Crab Cake','Creamed Spinach','Lobster Mac','Burrata'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — CANADIAN ────────────────────────────────────────────────────────

  {
    name: 'Canadian Whisky',
    category: 'canadian',
    spiritCluster: true,
    members: ['Crown Royal','Canadian Club','Canadian Club 43 Year','Caribou Crossing'],
    profile: ['canadian','smooth','light','grain','approachable','versatile'],
    excellent: ['Roast Half Chicken','House Wedge','Filet Mignon','Kansas City','Mushrooms'],
    strong: ['Grilled Caesar','Truffle Fries','Brussels and Belly','Creamed Spinach','Shrimp Bisque'],
    works: ['Crab Cake','Cowboy Ribeye','Au Gratin Potatoes','Carrot Cake'],
    avoid: ['G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Burrata','Seared Scallops']
  },

  // ── SPIRITS — SINGLE MALT / OTHER ────────────────────────────────────────────

  {
    name: 'American Single Malt / Tennessee',
    category: 'singlemalt',
    spiritCluster: true,
    members: ['Jack Daniel\'s Old No. 7','Jack Daniel\'s Bonded','Jack Daniel\'s 12 Year','Jack Daniel\'s Sinatra Select','Dunville\'s Single Malt','Scapegrace Fortuna','Old Emmer'],
    profile: ['american-single-malt','charcoal-filtered','vanilla','caramel','approachable','medium'],
    excellent: ['Kansas City','Filet Mignon','Mushrooms','Truffle Fries','Brussels and Belly'],
    strong: ['Cowboy Ribeye','Porterhouse','Creamed Spinach','Bone Marrow','House Wedge','Grilled Caesar'],
    works: ['Au Gratin Potatoes','Lardons','Carrot Cake','Shrimp Bisque'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — TEQUILA ─────────────────────────────────────────────────────────

  {
    name: 'Blanco Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio Blanco','Patron Silver','Avion Silver','Clase Azul Plata','Don Fulano Blanco','G4 Blanco','Lalo Silver','Mijenta Blanco','Gran Patron Platinum','Siete Leguas Blanco','Corazon Blanco','Adictivo Cristalino'],
    profile: ['tequila','blanco','agave-forward','citrus','clean','crisp','bright'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','House Wedge','Prime Tartare','Burrata'],
    strong: ['Seafood Tower','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Opus One','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Reposado Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio Reposado','Don Julio 70th','El Mayor Reposado','Milagro Reposado','Siete Leguas Reposado','Corazon Reposado','Don Fulano Reposado','Adictivo Reposado','El Cabo','G4 High Proof','Trombo Cedano Reposado','Komos Rosa Reposado','Codigo 1530 Rosa'],
    profile: ['tequila','reposado','agave','vanilla','oak','medium-bodied','balanced'],
    excellent: ['Kansas City','Filet Mignon','Crab Cake','Seared Scallops','House Wedge','Shrimp Cocktail'],
    strong: ['Cowboy Ribeye','Bone Marrow','Shrimp Bisque','Grilled Caesar','Faroe Island Salmon','Mushrooms'],
    works: ['Truffle Fries','Roast Half Chicken','Brussels and Belly','Prime Tartare'],
    avoid: ['The Tomahawk','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Scavino Barolo']
  },
  {
    name: 'Añejo / Extra Añejo Tequila',
    category: 'tequila',
    spiritCluster: true,
    members: ['Don Julio 1942','Clase Azul Anejo','Clase Azul Durango','Clase Azul Gold','Clase Azul Ultra','Patron Anejo','Avion 44','El Mayor Extra Anejo','Milagro Anejo','Komos Anejo Reserva','Komos Crystallino Anejo','Komos Extra Anejo','Don Fulano Anejo','Ocho Anejo','Rey Sol Anejo','Corazon Sazerac','Corazon Stagg','Corazon Weller'],
    profile: ['tequila','anejo','oak','vanilla','caramel','smooth','spirit-forward','sipping'],
    excellent: ['Kansas City','Filet Mignon','Bone Marrow','Truffle Fries','Mushrooms','Chocolate Brownie'],
    strong: ['Cowboy Ribeye','Porterhouse','Brussels and Belly','Creamed Spinach','Carrot Cake','Peanut Butter Brownie'],
    works: ['House Wedge','Grilled Caesar','Au Gratin Potatoes','Cheesecake'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Mezcal',
    category: 'mezcal',
    spiritCluster: true,
    members: ['Casamigos Mezcal','Clase Azul Guerrero Mezcal','Los Vecinos Mezcal','Tears of Llorona','Camarena Tequila','Patron XO Cafe'],
    profile: ['mezcal','smoky','agave','earthy','bold','distinctive','complex'],
    excellent: ['Bone Marrow','Cowboy Ribeye','The Tomahawk','Prime Tartare','Brussels and Belly','Lardons'],
    strong: ['Kansas City','Mushrooms','Truffle Fries','Grilled Caesar','Shrimp Bisque'],
    works: ['House Wedge','Creamed Spinach','Filet Mignon','Chocolate Brownie'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut','Cheesecake']
  },

  // ── SPIRITS — VODKA ───────────────────────────────────────────────────────────

  {
    name: 'Classic Vodka',
    category: 'vodka',
    spiritCluster: true,
    members: ['Tito\'s Handmade Vodka','Grey Goose Vodka','Ketel One Vodka','Belvedere Vodka','Chopin Vodka','Stoli Elit Vodka','Reyka Vodka','Wheatley Vodka'],
    profile: ['vodka','neutral','clean','crisp','versatile','minimal-influence'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','Burrata','House Wedge','Seafood Tower'],
    strong: ['Prime Tartare','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish','Cheesecake'],
    avoid: []
  },
  {
    name: 'Craft Vodka',
    category: 'vodka',
    spiritCluster: true,
    members: ['Detroit City Vodka','HDW 100 Vodka','Hangar 1 Vodka'],
    profile: ['vodka','craft','slight-character','clean','approachable'],
    excellent: ['Crab Cake','Shrimp Cocktail','Seared Scallops','Burrata','House Wedge'],
    strong: ['Prime Tartare','Shrimp Bisque','Escargot','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: []
  },

  // ── SPIRITS — GIN ─────────────────────────────────────────────────────────────

  {
    name: 'London Dry Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Tanqueray Gin','Tanq 10 Gin','Beefeater Gin','Bombay Dry Gin','Bombay Sapphire Gin','Plymouth Gin','Nolets Dry Gin','2 James Gin'],
    profile: ['gin','london-dry','juniper-forward','citrus','herbal','classic','crisp'],
    excellent: ['Crab Cake','Seared Scallops','Shrimp Cocktail','Burrata','Escargot','Seafood Tower'],
    strong: ['Prime Tartare','House Wedge','Shrimp Bisque','Faroe Island Salmon','Grilled Caesar'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish','Beignets'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Contemporary / Craft Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Hendricks Gin','Hendricks Flora Adora','Hendricks Grand Cabaret','Hendricks Neptunia','Hendricks Orbium','Aviation Gin','Bluecoat Gin','Botanist Gin','Empress 1908 Gin','Gray Whale Gin','Inverroche Gin','Liberator Gin','Mahon Gin','Monkey 47 Gin'],
    profile: ['gin','contemporary','floral-or-fruit-forward','botanical','unique','approachable'],
    excellent: ['Burrata','Crab Cake','Seared Scallops','Shrimp Cocktail','Escargot','Beignets'],
    strong: ['Prime Tartare','House Wedge','Seafood Tower','Shrimp Bisque','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Grilled Caesar','Cheesecake'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Local Michigan Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Detroit City Gin','Eastern Kille Dry Gin','Iron Fish Gin','Knickerbocker Gin','Long Road Gin'],
    profile: ['gin','local','varied-botanical','approachable','craft'],
    excellent: ['Burrata','Crab Cake','Shrimp Cocktail','Seared Scallops','House Wedge'],
    strong: ['Prime Tartare','Escargot','Seafood Tower','Shrimp Bisque','Faroe Island Salmon'],
    works: ['Filet Mignon','Roast Half Chicken','Grilled Caesar'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo']
  },
  {
    name: 'Japanese Gin',
    category: 'gin',
    spiritCluster: true,
    members: ['Roku Gin'],
    profile: ['gin','japanese','floral','yuzu','sakura','delicate','unique'],
    excellent: ['Seared Scallops','Crab Cake','Burrata','Shrimp Cocktail','Faroe Island Salmon'],
    strong: ['Escargot','House Wedge','Prime Tartare','Shrimp Bisque','Seafood Tower'],
    works: ['Filet Mignon','Roast Half Chicken','Market Fish'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },

  // ── SPIRITS — RUM ─────────────────────────────────────────────────────────────

  {
    name: 'White / Light Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Bacardi Rum','Mount Gay Rum'],
    profile: ['rum','white','light','clean','sugarcane','tropical','approachable'],
    excellent: ['Shrimp Cocktail','Crab Cake','Burrata','House Wedge','Seared Scallops'],
    strong: ['Seafood Tower','Shrimp Bisque','Faroe Island Salmon','Beignets','Grilled Caesar'],
    works: ['Roast Half Chicken','Market Fish','Prime Tartare'],
    avoid: ['The Tomahawk','Bone Marrow','Caymus Cabernet Sauvignon','Scavino Barolo','Bowdie\'s Old Fashioned']
  },
  {
    name: 'Dark / Aged Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Ron Zacapa Rum','Doctor Bird Jamaica Rum','Jung and Wulff Guyana','Jung and Wulff Trinidad','Myers\'s Rum'],
    profile: ['rum','dark','aged','molasses','vanilla','caramel','bold','complex'],
    excellent: ['Chocolate Brownie','Peanut Butter Brownie','Carrot Cake','Cheesecake','Bone Marrow'],
    strong: ['Cowboy Ribeye','Kansas City','Brussels and Belly','Truffle Fries','Mushrooms','Beignets'],
    works: ['House Wedge','Grilled Caesar','Creamed Spinach','Creme Brulee'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','Shrimp Cocktail','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Spiced / Flavored Rum',
    category: 'rum',
    spiritCluster: true,
    members: ['Captain Morgan Rum','Malibu Rum'],
    profile: ['rum','spiced-or-flavored','sweet','approachable','casual'],
    excellent: ['Beignets','Cheesecake','Carrot Cake','House Wedge'],
    strong: ['Shrimp Cocktail','Crab Cake','Chocolate Brownie','Peanut Butter Brownie'],
    works: ['Burrata','Faroe Island Salmon','Roast Half Chicken'],
    avoid: ['The Tomahawk','Scavino Barolo','Opus One','Bone Marrow']
  },

  // ── SPIRITS — COGNAC ──────────────────────────────────────────────────────────

  {
    name: 'Cognac / Brandy',
    category: 'cognac',
    spiritCluster: true,
    members: ['Hennessy Cognac','Courvoisier Cognac','Remy VSOP Cognac','Pierre Ferrand Cognac','Villon Cognac','Christian Bros Brandy','Louis XIII Cognac'],
    profile: ['cognac','brandy','grape-distilled','vanilla','dried-fruit','oak','complex','elegant'],
    excellent: ['Filet Mignon','Bone Marrow','Truffle Fries','Cheesecake','Chocolate Brownie','Carrot Cake'],
    strong: ['Kansas City','Mushrooms','Creamed Spinach','Creme Brulee','Peanut Butter Brownie','Lobster Mac'],
    works: ['House Wedge','Grilled Caesar','Au Gratin Potatoes','Beignets'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },

  // ── SPIRITS — LIQUEURS ────────────────────────────────────────────────────────

  {
    name: 'Amaro / Bitter Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Amaro Nonino','Averna Amaro','Lucano Amaro','Montenegro Amaro','Fernet Branca','Fernet Menta','Campari','Aperol'],
    profile: ['amaro','bitter','herbal','digestif','complex','Italian'],
    excellent: ['Chocolate Brownie','Peanut Butter Brownie','Cheesecake','Creme Brulee','Carrot Cake'],
    strong: ['Bone Marrow','Kansas City','Grilled Caesar','Mushrooms','Prime Tartare'],
    works: ['House Wedge','Brussels and Belly','Truffle Fries','Beignets'],
    avoid: ['Crab Cake','Seared Scallops','Burrata','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Herbal / Anise Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Green Chartreuse','Yellow Chartreuse','Sambuca','Drambuie','Mata Hari Absinthe','Ancho Reyes','Contratto Vermouth'],
    profile: ['herbal','anise-or-botanical','sweet-or-bitter','digestif-or-modifier'],
    excellent: ['Cheesecake','Creme Brulee','Chocolate Brownie','Beignets','Escargot','Grilled Caesar'],
    strong: ['House Wedge','Shrimp Bisque','Prime Tartare','Mushrooms','Brussels and Belly'],
    works: ['Filet Mignon','Kansas City','Carrot Cake'],
    avoid: ['Crab Cake','Seared Scallops','G.D. Vajra Moscato d\'Asti','Laurent Perrier Le Cuvée Brut']
  },
  {
    name: 'Sweet / Cream Liqueur',
    category: 'liqueur',
    spiritCluster: true,
    members: ['Baileys Irish Cream','Buffalo Trace Cream','Frangelico','Kahlua','Disaronno','Grand Marnier','Chambord','Licor 43','Limoncello','Fireball Whisky','Patron XO Cafe'],
    profile: ['sweet','cream-or-fruit-or-coffee','dessert-adjacent','low-ABV','approachable'],
    excellent: ['Creme Brulee','Cheesecake','Chocolate Brownie','Peanut Butter Brownie','Carrot Cake','Beignets','Mocha Creme'],
    strong: ['Chocolate Cake','Espresso Martini'],
    works: ['Shrimp Cocktail','Crab Cake','House Wedge'],
    avoid: ['The Tomahawk','Bone Marrow','Scavino Barolo','Opus One','Bowdie\'s Old Fashioned']
  }

];

// ── SCORING ENGINE ────────────────────────────────────────────────────────────
// Takes an array of selected item names, returns ranked recommendations
// with intersection scoring across all selections.

// ── WEIGHTED SCORING ENGINE ───────────────────────────────────────────────────
// selections: array of { name: string, weight: number }
//   weight 1.0 = active/locked in
//   weight 0.5 = considering (steers but doesn't dominate)
//   weight 0.0 = finished+declined (excluded from scoring)

function scoreItem(candidateName, weightedSelections) {
  let score = 0;
  let totalWeight = 0;

  for (const sel of weightedSelections) {
    if (sel.weight <= 0) continue; // finished+declined — skip entirely
    const entry = PAIRING_MAP.find(e => {
      if (e.spiritCluster) return e.members && e.members.includes(sel.name);
      return e.name === sel.name;
    });
    if (!entry) continue;

    const w = sel.weight;
    if (entry.avoid && entry.avoid.includes(candidateName)) { score -= 4 * w; }
    else if (entry.excellent && entry.excellent.includes(candidateName)) { score += 3 * w; totalWeight += w; }
    else if (entry.strong && entry.strong.includes(candidateName)) { score += 2 * w; totalWeight += w; }
    else if (entry.works && entry.works.includes(candidateName)) { score += 1 * w; totalWeight += w; }
  }

  return { score, totalWeight };
}

function getTier(score, totalWeight) {
  if (totalWeight <= 0) return null;
  const avg = score / totalWeight;
  if (avg >= 2.5) return 'excellent';
  if (avg >= 1.5) return 'strong';
  if (avg >= 0.5) return 'works';
  return null;
}

// weightedSelections: [{ name, weight }]
// Backwards compatible: also accepts plain string array (all weight 1.0)
function getRecommendations(selectionsRaw, excludeCategories = [], includeOOS = false) {
  if (!selectionsRaw || selectionsRaw.length === 0) return [];

  // Normalise — accept both [{name,weight}] and ['name']
  const weighted = selectionsRaw.map(s =>
    typeof s === 'string' ? { name: s, weight: 1.0 } : s
  ).filter(s => s.weight > 0);

  if (weighted.length === 0) return [];

  // seenNames includes ALL items on the table regardless of weight
  // so finished/declined items don't re-appear as recommendations
  const seenNames = new Set(selectionsRaw.map(s => typeof s === 'string' ? s : s.name));
  const results = [];

  for (const entry of PAIRING_MAP) {
    if (entry.variable) continue;
    if (!includeOOS && entry.oos) continue;
    if (excludeCategories.includes(entry.category)) continue;
    if (seenNames.has(entry.name)) continue;

    const { score, totalWeight } = scoreItem(entry.name, weighted);
    if (score <= 0) continue;

    const tier = getTier(score, totalWeight);
    if (!tier) continue;

    results.push({
      name: entry.name,
      category: entry.category,
      tier,
      score,
      price: entry.price || null,
      offMenu: entry.offMenu || false,
      oos: entry.oos || false,
      spiritCluster: entry.spiritCluster || false,
      members: entry.members || null,
      profile: entry.profile
    });
  }

  const tierOrder = { excellent: 0, strong: 1, works: 2 };
  results.sort((a, b) => {
    if (tierOrder[a.tier] !== tierOrder[b.tier]) return tierOrder[a.tier] - tierOrder[b.tier];
    return b.score - a.score;
  });

  return results;
}

// ── FIRST TIMER PROFILE → PAIRING TAGS ───────────────────────────────────────
// Maps guest answers to profile tags used for initial recommendations

const FIRST_TIMER_PROFILES = {
  drinkingYes: ['bold','approachable','spirit-forward'],
  drinkingWineOnly: ['wine-red','wine-white','wine-sparkling','wine-dessert'],
  drinkingCocktailsOnly: ['cocktail'],
  drinkingNo: [],
  proteinRareMR: ['lean','fatty','rich','beefy'],
  proteinMedium: ['medium','savory','approachable'],
  proteinMWWell: ['approachable','light'],
  proteinNoRed: ['seafood','poultry','delicate'],
  boldAndRich: ['bold','rich','fatty','umami','smoky','indulgent'],
  middle: ['medium-bodied','balanced','approachable'],
  lightAndFresh: ['light','crisp','delicate','fresh'],
  sweetFlavor: ['sweet','fruity','floral'],
  savoryFlavor: ['umami','earthy','smoky','bold'],
  bothFlavors: ['balanced','approachable','medium-bodied'],
  wineExpert: [],
  wineGuided: ['approachable','fruit-forward','smooth'],
  celebrating: ['celebratory','prestige','sparkling'],
  budgetApproachable: ['approachable','entry-premium'],
  budgetMid: ['premium','structured'],
  budgetSky: ['prestige','icon','legendary']
};

function getFirstTimerRecommendations(answers) {
  const tags = [];
  for (const answer of answers) {
    if (FIRST_TIMER_PROFILES[answer]) tags.push(...FIRST_TIMER_PROFILES[answer]);
  }

  const results = [];
  for (const entry of PAIRING_MAP) {
    if (entry.variable || entry.oos) continue;
    const overlap = entry.profile.filter(p => tags.includes(p)).length;
    if (overlap === 0) continue;
    results.push({ ...entry, overlapScore: overlap });
  }

  results.sort((a, b) => b.overlapScore - a.overlapScore);
  return results.slice(0, 20);
}

// Export for use in set-the-stage.js
if (typeof module !== 'undefined') {
  module.exports = { PAIRING_MAP, getRecommendations, getFirstTimerRecommendations, scoreItem, getTier };
}