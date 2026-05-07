// engine/regenerate_dxf_chunked.js
//
// Chunked DxF regen with line-offset tracking. Each call processes lines
// starting at --offset, regenerates up to --chunk templated notes, writes the
// file atomically, and reports the line position to resume from.
//
// Usage:
//   node engine/regenerate_dxf_chunked.js --offset 0 --chunk 500
//   (next call uses the printed "next offset" value)
//
// Without --offset, starts from offset 0.

'use strict';
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..');
const NOTES_FILE = path.join(ROOT, 'pairing-notes.js');
const BACKUP = path.join(ROOT, 'pairing-notes.js.pre-fullregen.bak');
const STATE = path.join(ROOT, 'engine/.regen_state.json');

const args = process.argv.slice(2);
function arg(name, def) {
  const idx = args.indexOf(name);
  if (idx === -1) return def;
  return args[idx+1];
}

let offset = parseInt(arg('--offset', '-1'), 10);
const chunk = parseInt(arg('--chunk', '500'), 10);
const isDry = args.includes('--dry-run');
const useState = args.includes('--use-state');

if (useState && offset < 0 && fs.existsSync(STATE)) {
  const s = JSON.parse(fs.readFileSync(STATE, 'utf8'));
  offset = s.offset || 0;
  console.log('[STATE] resuming from offset ' + offset);
}
if (offset < 0) offset = 0;

const taxonomy = require('./pairing_engine_taxonomy');
const dxf = require('./drink_x_food_generator');
const { isTemplatedNote } = require('./templated_detection');
const PM = require(path.join(ROOT, 'pairing-map-v2.js')).PAIRING_MAP;
const CHEM = require(path.join(ROOT, 'chemistry-claims.js')).CHEMISTRY_CLAIMS || require(path.join(ROOT, 'chemistry-claims.js'));
const ENRICHED = require(path.join(ROOT, 'enriched-profiles.js')).ENRICHED_PROFILES || require(path.join(ROOT, 'enriched-profiles.js'));
const SNIPPETS = require(path.join(ROOT, 'editorial-snippets.js')).EDITORIAL_SNIPPETS || require(path.join(ROOT, 'editorial-snippets.js'));
const ctx = { PAIRING_MAP: PM, CHEMISTRY_CLAIMS: CHEM, ENRICHED_PROFILES: ENRICHED, EDITORIAL_SNIPPETS: SNIPPETS };

const byName = {};
for (const e of PM) byName[e.name] = e;
const tierByKey = new Map();
for (const e of PM) for (const tier of ['avoid','works','strong','excellent','gold']) {
  if (!Array.isArray(e[tier])) continue;
  for (const t of e[tier]) {
    tierByKey.set(e.name + '|' + t, tier);
    tierByKey.set(t + '|' + e.name, tier);
  }
}

const t0 = Date.now();
const src = fs.readFileSync(NOTES_FILE, 'utf8');
const lines = src.split('\n');

if (!isDry && !fs.existsSync(BACKUP)) {
  fs.copyFileSync(NOTES_FILE, BACKUP);
  console.log('[OK] backup: ' + path.relative(ROOT, BACKUP));
}

const lineRe = /^(\s*"([^"]+)":\s*)"((?:[^"\\]|\\.)*)"(,?)\s*$/;
const stats = { regenChanged: 0, regenUnchanged: 0, errors: 0, skippedEditorial: 0, skippedNonDxf: 0, skippedNoTier: 0, scanned: 0 };
const updates = new Map();
const seen = new Set();

let processedTemplated = 0;
let lastLineProcessed = offset;

for (let i = offset; i < lines.length; i++) {
  if (processedTemplated >= chunk) { lastLineProcessed = i; break; }
  lastLineProcessed = i;
  const m = lineRe.exec(lines[i]);
  if (!m) continue;
  stats.scanned++;
  const [, prefix, key, raw, comma] = m;
  let text;
  try { text = JSON.parse('"' + raw + '"'); } catch (e) { continue; }
  if (!isTemplatedNote(text)) { stats.skippedEditorial++; continue; }

  const idx = key.indexOf('|');
  const a = key.slice(0, idx), b = key.slice(idx+1);
  const canonKey = (a < b) ? (a + '|' + b) : (b + '|' + a);
  if (seen.has(canonKey)) {
    if (updates.has(canonKey)) updates.set(key, updates.get(canonKey));
    continue;
  }
  seen.add(canonKey);

  const A = byName[a], B = byName[b];
  if (!A || !B) { stats.errors++; continue; }
  const isAFood = taxonomy.FOOD_CATS.has(A.category);
  const isBFood = taxonomy.FOOD_CATS.has(B.category);
  if (isAFood === isBFood) { stats.skippedNonDxf++; continue; }

  const drink = isAFood ? B : A;
  const food = isAFood ? A : B;
  const tier = tierByKey.get(canonKey) || tierByKey.get(a + '|' + b) || tierByKey.get(b + '|' + a);
  if (!tier) { stats.skippedNoTier++; continue; }

  let newNote;
  try { newNote = dxf.generate(drink, food, tier, ctx); }
  catch (e) { stats.errors++; continue; }

  processedTemplated++;
  if (newNote === text) { stats.regenUnchanged++; continue; }
  stats.regenChanged++;
  updates.set(canonKey, newNote);
  updates.set(a + '|' + b, newNote);
  updates.set(b + '|' + a, newNote);
}

if (processedTemplated < chunk && lastLineProcessed >= lines.length - 1) {
  console.log('[DONE] reached end of file');
}

const nextOffset = (processedTemplated >= chunk) ? lastLineProcessed : lines.length;

console.log('=== CHUNKED REGEN ===');
console.log('Start offset: ' + offset);
console.log('End line: ' + lastLineProcessed);
console.log('Templated regen: ' + (stats.regenChanged + stats.regenUnchanged) + ' (' + stats.regenChanged + ' changed, ' + stats.regenUnchanged + ' unchanged)');
console.log('Skipped editorial: ' + stats.skippedEditorial);
console.log('Skipped non-DxF: ' + stats.skippedNonDxf);
console.log('Skipped no-tier: ' + stats.skippedNoTier);
console.log('Errors: ' + stats.errors);
console.log('Process time: ' + (Date.now()-t0) + 'ms');
console.log('NEXT_OFFSET=' + nextOffset);

if (isDry) { console.log('[DRY RUN]'); process.exit(0); }

if (updates.size > 0) {
  for (let i = 0; i < lines.length; i++) {
    const m = lineRe.exec(lines[i]);
    if (!m) continue;
    if (updates.has(m[2])) {
      lines[i] = m[1] + JSON.stringify(updates.get(m[2])) + m[4];
    }
  }
  const out = lines.join('\n');
  const tmp = NOTES_FILE + '.tmp.regen.' + process.pid;
  fs.writeFileSync(tmp, out);
  fs.renameSync(tmp, NOTES_FILE);
  console.log('[OK] wrote pairing-notes.js (' + out.length + ' chars)');
}

// Persist state
fs.writeFileSync(STATE, JSON.stringify({offset: nextOffset, ts: Date.now()}, null, 2));
console.log('[STATE] saved next offset: ' + nextOffset);
console.log('Total time: ' + (Date.now()-t0) + 'ms');
