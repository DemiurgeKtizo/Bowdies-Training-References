// ── BOWDIE'S CHOPHOUSE — TABLE DEFINITIONS ──
// Spatial positions are normalized (0–100) within each section's coordinate space.
// Used by Set The Stage for selection UI and overview spatial rendering.

// ── GROUP COLORS (for bar seat grouping) ──
const GROUP_COLORS = [
  '#7BA8C4', // blue
  '#A87CC4', // purple
  '#7CC48A', // mint
  '#C47C8A', // rose
  '#C4A07C', // amber
  '#7CC4C4', // teal
];

// ── SECTION DEFINITIONS ──
// viewBox is always "0 0 100 [svgH]" — svgH controls the aspect ratio of each section's canvas.
const SECTION_DEFS = [
  { id: 'main',  label: 'Main Dining Room', svgH: 92 },
  { id: 'patio', label: 'Patio',            svgH: 85 },
  { id: 'event', label: 'Event Room',       svgH: 92 },
];

// ── TABLE DEFINITIONS ──
// shape values:
//   'round-lg'  — large round  (24, 52, 55)
//   'round-md'  — medium round (51)
//   'round-sm'  — small round  (70–73)
//   'square'    — 4-top square (most dining tables)
//   'rect-h'    — landscape rectangle, 6-top (43, 44, 60–63)
//   'rect-sm'   — small 2-top rectangle (53, 54, 57)
//   'square-sm' — small 2-top square (50, 56, 42)
//
// pos: { x, y } — center of table in section's 0–100 coordinate space

const TABLE_DEFS = [

  // ── MAIN DINING ROOM ─────────────────────────────────────────────────────────

  { id: 20, label: '20', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x:  8, y: 77 } },
  { id: 21, label: '21', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x:  8, y: 57 } },
  { id: 22, label: '22', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x:  8, y: 37 } },
  { id: 23, label: '23', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x:  8, y: 17 } },
  { id: 24, label: '24', section: 'main', shape: 'round-lg',  defaultSeats: 8, pos: { x: 30, y: 13 } },

  { id: 30, label: '30', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 33, y: 69 } },
  { id: 31, label: '31', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 48, y: 69 } },
  { id: 32, label: '32', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 63, y: 69 } },
  { id: 33, label: '33', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 63, y: 44 } },
  { id: 34, label: '34', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 48, y: 44 } },
  { id: 35, label: '35', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 33, y: 44 } },

  { id: 40, label: '40', section: 'main', shape: 'square',    defaultSeats: 4, pos: { x: 86, y: 69 } },
  { id: 42, label: '42', section: 'main', shape: 'square-sm', defaultSeats: 2, pos: { x: 86, y: 35 } },
  { id: 43, label: '43', section: 'main', shape: 'rect-h',    defaultSeats: 6, pos: { x: 86, y: 11 } },
  { id: 44, label: '44', section: 'main', shape: 'rect-h',    defaultSeats: 6, pos: { x: 62, y: 11 } },

  // ── PATIO ─────────────────────────────────────────────────────────────────────

  { id: 50, label: '50', section: 'patio', shape: 'square-sm', defaultSeats: 2, pos: { x: 71, y: 70 } },
  { id: 51, label: '51', section: 'patio', shape: 'round-md',  defaultSeats: 4, pos: { x: 91, y: 36 } },
  { id: 52, label: '52', section: 'patio', shape: 'round-lg',  defaultSeats: 6, pos: { x: 72, y: 24 } },
  { id: 53, label: '53', section: 'patio', shape: 'rect-sm',   defaultSeats: 2, pos: { x: 52, y: 20 } },
  { id: 54, label: '54', section: 'patio', shape: 'rect-sm',   defaultSeats: 2, pos: { x: 36, y:  9 } },
  { id: 55, label: '55', section: 'patio', shape: 'round-lg',  defaultSeats: 6, pos: { x: 16, y: 17 } },
  { id: 56, label: '56', section: 'patio', shape: 'square-sm', defaultSeats: 2, pos: { x: 16, y: 48 } },
  { id: 57, label: '57', section: 'patio', shape: 'rect-sm',   defaultSeats: 4, pos: { x: 34, y: 69 } },

  // ── EVENT ROOM ────────────────────────────────────────────────────────────────

  { id: 60, label: '60', section: 'event', shape: 'rect-h',   defaultSeats: 6, pos: { x: 90, y: 75 } },
  { id: 61, label: '61', section: 'event', shape: 'rect-h',   defaultSeats: 6, pos: { x: 64, y: 75 } },
  { id: 62, label: '62', section: 'event', shape: 'rect-h',   defaultSeats: 6, pos: { x: 36, y: 75 } },
  { id: 63, label: '63', section: 'event', shape: 'rect-h',   defaultSeats: 6, pos: { x: 10, y: 75 } },

  { id: 64, label: '64', section: 'event', shape: 'square',   defaultSeats: 4, pos: { x: 10, y: 43 } },
  { id: 65, label: '65', section: 'event', shape: 'square',   defaultSeats: 4, pos: { x: 36, y: 43 } },
  { id: 66, label: '66', section: 'event', shape: 'square',   defaultSeats: 4, pos: { x: 64, y: 43 } },
  { id: 67, label: '67', section: 'event', shape: 'square',   defaultSeats: 4, pos: { x: 90, y: 43 } },

  { id: 70, label: '70', section: 'event', shape: 'round-sm', defaultSeats: 2, pos: { x: 91, y: 16 } },
  { id: 71, label: '71', section: 'event', shape: 'round-sm', defaultSeats: 2, pos: { x: 64, y: 16 } },
  { id: 72, label: '72', section: 'event', shape: 'round-sm', defaultSeats: 2, pos: { x: 36, y: 16 } },
  { id: 73, label: '73', section: 'event', shape: 'round-sm', defaultSeats: 2, pos: { x: 10, y: 16 } },

];

// ── HELPERS ───────────────────────────────────────────────────────────────────

function getTableDef(id) {
  return TABLE_DEFS.find(t => t.id === id) || null;
}

function getTablesBySection(sectionId) {
  return TABLE_DEFS.filter(t => t.section === sectionId);
}

// SVG half-dimensions for each shape — sized for the 0–100 overview coordinate space.
// No external scaling factor needed; these values produce proportionate display sizes
// that match the actual floor plan images.
const SHAPE_DIMS = {
  'round-lg':  { type: 'circle', r: 7   },
  'round-md':  { type: 'circle', r: 5.5 },
  'round-sm':  { type: 'circle', r: 4   },
  'square':    { type: 'rect',   w: 5.5, h: 5.5 },
  'rect-h':    { type: 'rect',   w: 7.5, h: 5.5 },
  'rect-sm':   { type: 'rect',   w: 5,   h: 3.5 },
  'square-sm': { type: 'rect',   w: 3.5, h: 3.5 },
};