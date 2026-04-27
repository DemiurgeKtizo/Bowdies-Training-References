'use strict';
const {PAIRING_NOTES} = require('../pairing-notes.js');

// Distinctive food phrases that should only appear on their host pair
const PHRASES = {
  'iceberg with bacon': ['House Wedge'],
  'iceberg-and-bleu': ['House Wedge'],
  'crisp lardons': ['House Wedge'],
  'parmesan crisp': ['Grilled Caesar'],
  'anchovy': ['Grilled Caesar', 'House Wedge'],
  'romaine': ['Grilled Caesar'],
  'brussels and belly': ['Brussels and Belly'],
  'pork belly': ['Brussels and Belly', 'Pork Belly Bites'],
  'sesame crust': ['Tuxedo-Crusted Yellowfin Tuna'],
  'oyster mushroom': [],   // not a Bowdie's prep — flag any occurrence
  'truffle oil': [],       // not used by Bowdie's kitchen
  'peppercorn crust': [],  // steaks are flame-grilled, not crusted
};

let totalLeaks = 0;
const byPhrase = {};

for (const [phrase, hosts] of Object.entries(PHRASES)) {
  byPhrase[phrase] = [];
  for (const [key, note] of Object.entries(PAIRING_NOTES)) {
    if (!note.toLowerCase().includes(phrase)) continue;
    const [a, b] = key.split('|');
    if (hosts.length > 0 && hosts.some(h => a === h || b === h)) continue;
    byPhrase[phrase].push(key);
    totalLeaks++;
  }
}

for (const [phrase, leaks] of Object.entries(byPhrase)) {
  if (leaks.length === 0) continue;
  console.log('=== "' + phrase + '" (' + leaks.length + ' leaks) ===');
  leaks.slice(0, 10).forEach(k => console.log('  ' + k));
  if (leaks.length > 10) console.log('  ... +' + (leaks.length - 10) + ' more');
  console.log('');
}
console.log('TOTAL LEAKS: ' + totalLeaks);
