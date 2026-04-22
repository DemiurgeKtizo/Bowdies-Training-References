// admin.js — v1
//
// Shared OOS / 86 overlay + management admin screen. Loaded by both
// index.html (where the admin screen DOM and home-reference cards live) and
// set-the-stage.html (where PAIRING_MAP rec filtering lives).
//
// Responsibilities:
//  - Persist the 86'd item set under sts_oos_items_v1.
//  - At boot, apply the overlay to PAIRING_MAP (if loaded) AND to DOM cards
//    with [data-name] (if present). Both calls are idempotent.
//  - Render the admin screen (#screen-admin) — lives on index.html post-
//    scope-down. set-the-stage.html doesn't render admin, just respects OOS.
//  - Own the small helpers both the gate and the admin need (showToast,
//    escapeHtml, ssRelTime, getCategoryForDisplay).
//
// Load order expectation:
//   pairing-map-v2.js  → admin.js  → page-specific inline / completion
// On index.html, pairing-map-v2.js is loaded ONLY because the admin screen
// sources its candidate list from PAIRING_MAP. If that ever feels heavy,
// we can swap to a card-DOM-derived candidate list without touching any
// other module.

const OOS_KEY = 'sts_oos_items_v1';

// ── SHARED HELPERS ──────────────────────────────────────────────────────────

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}

function prettifyCategorySlug(cat) {
  if (!cat || typeof cat !== 'string') return '';
  return cat.split(/[-_]/).map(part =>
    part ? part.charAt(0).toUpperCase() + part.slice(1) : ''
  ).join(' ');
}

function getCategoryForDisplay(cat) {
  if (typeof CATEGORY_LABELS !== 'undefined' && CATEGORY_LABELS && CATEGORY_LABELS[cat]) {
    return CATEGORY_LABELS[cat];
  }
  return prettifyCategorySlug(cat) || cat;
}

function ssRelTime(ts) {
  const sec = Math.floor((Date.now() - ts) / 1000);
  if (sec < 60)       return 'Just now';
  if (sec < 3600)     return Math.floor(sec/60) + 'm ago';
  if (sec < 86400)    return Math.floor(sec/3600) + 'h ago';
  if (sec < 86400*7)  return Math.floor(sec/86400) + 'd ago';
  const d = new Date(ts);
  return d.toLocaleDateString('en-US', { month:'short', day:'numeric' });
}

let __toastTimer = null;
function showToast(msg) {
  const t = document.getElementById('add-toast');
  if (!t) return;
  t.innerHTML = msg;
  t.classList.add('show');
  clearTimeout(__toastTimer);
  __toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}

// ── OOS OVERLAY (persistence) ───────────────────────────────────────────────

function loadOosOverlay() {
  try {
    const raw = localStorage.getItem(OOS_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    if (!parsed || typeof parsed !== 'object') return { names: [], updatedAt: 0, updatedBy: null };
    return {
      names: Array.isArray(parsed.names) ? parsed.names : [],
      updatedAt: typeof parsed.updatedAt === 'number' ? parsed.updatedAt : 0,
      updatedBy: parsed.updatedBy || null
    };
  } catch (e) { return { names: [], updatedAt: 0, updatedBy: null }; }
}

function persistOosOverlay(overlay) {
  try { localStorage.setItem(OOS_KEY, JSON.stringify(overlay)); } catch (e) {}
}

// Mutate PAIRING_MAP if it's present on this page. On index.html this is a
// no-op when pairing-map-v2.js hasn't loaded yet — adminBoot() calls this
// after DOMContentLoaded, by which time all scripts have parsed.
function applyOosOverlay() {
  if (typeof PAIRING_MAP === 'undefined') return;
  const overlay = loadOosOverlay();
  const oosSet = new Set(overlay.names || []);
  PAIRING_MAP.forEach(entry => {
    if (entry.variable) return; // Today's Special placeholders aren't 86-able
    entry.oos = oosSet.has(entry.name);
  });
}

// Tag every .card[data-name] in the DOM with .oos + an "86" badge based on
// the persisted overlay. Safe to call repeatedly — it syncs idempotently.
// On set-the-stage.html there are no such cards, so this no-ops cleanly.
function applyOosOverlayToHomeCards() {
  const overlay = loadOosOverlay();
  const oosSet = new Set(overlay.names || []);
  document.querySelectorAll('.card[data-name]').forEach(card => {
    const name = card.dataset.name;
    const shouldBeOos = oosSet.has(name);
    const existingBadge = card.querySelector('.card-86-badge');
    if (shouldBeOos) {
      card.classList.add('oos');
      if (!existingBadge) {
        const badge = document.createElement('span');
        badge.className = 'card-86-badge';
        badge.textContent = '86';
        card.appendChild(badge);
      }
    } else {
      // Only remove the class/badge we added — never stomp hardcoded oos
      // markers baked into the HTML (there are ~35 such cards, e.g. Reyka,
      // Stoli Elit, where the kitchen has flagged permanent unavailability).
      // Those cards don't have our dynamic badge, so this leaves them alone.
      if (existingBadge) {
        card.classList.remove('oos');
        existingBadge.remove();
      }
    }
  });
}

function isItemOos(name) {
  if (typeof PAIRING_MAP !== 'undefined') {
    const entry = PAIRING_MAP.find(e => e.name === name);
    if (entry) return !!entry.oos;
  }
  // Fallback: check overlay directly.
  const overlay = loadOosOverlay();
  return overlay.names.includes(name);
}

function toggleOos(name) {
  const overlay = loadOosOverlay();
  const set = new Set(overlay.names || []);
  if (set.has(name)) set.delete(name); else set.add(name);
  const currentUser = (typeof authCurrentUser === 'function') ? authCurrentUser() : null;
  const nextOverlay = {
    names: Array.from(set).sort(),
    updatedAt: Date.now(),
    updatedBy: currentUser ? { id: currentUser.id, name: currentUser.name } : null
  };
  persistOosOverlay(nextOverlay);
  applyOosOverlay();
  applyOosOverlayToHomeCards();
  const filterInput = document.getElementById('admin-search-input');
  if (filterInput) renderAdminScreen(filterInput.value);
  showToast(set.has(name) ? name + ' \u2014 86\u2019d' : name + ' \u2014 back on');
}

// ── ADMIN SCREEN ────────────────────────────────────────────────────────────

const ADMIN_CAT_ORDER = ['steak','starter','soup-salad','main','side','dessert',
  'cocktail','wine-sparkling','wine-white','wine-red','wine-dessert',
  'bourbon','rye','scotch','irish','japanese','canadian',
  'tequila','mezcal','vodka','gin','rum','cognac','liqueur','singlemalt'];

function openAdmin() {
  if (typeof authIsManagement === 'function' && !authIsManagement()) {
    showToast('Admin is management-only.');
    return;
  }
  const input = document.getElementById('admin-search-input');
  if (input) input.value = '';
  renderAdminScreen('');

  // set-the-stage.html path — the admin screen was moved to index.html,
  // so if we ever ended up here on sts.html, just bounce to index.html.
  if (document.getElementById('screen-pairings') && !document.getElementById('home-screen')) {
    window.location.href = 'index.html#admin';
    return;
  }

  // index.html path — hide whichever root view is currently on screen,
  // remember it so closeAdmin() can restore it.
  const home = document.getElementById('home-screen');
  const main = document.getElementById('main-content');
  const topBar = document.getElementById('top-bar');
  const admin = document.getElementById('screen-admin');
  if (!admin) return;

  const mainVisible = main && main.style.display !== 'none' && getComputedStyle(main).display !== 'none';
  window.__adminReturnTarget = mainVisible ? 'main' : 'home';

  if (home) home.style.display = 'none';
  if (main) main.style.display = 'none';
  if (topBar) topBar.style.display = 'none';
  admin.style.display = 'block';
  window.scrollTo(0, 0);
}

function openAdminFromMenu() {
  if (typeof authHideProfileMenu === 'function') authHideProfileMenu();
  openAdmin();
}

function closeAdmin() {
  const admin = document.getElementById('screen-admin');
  if (admin) admin.style.display = 'none';
  if (window.__adminReturnTarget === 'main') {
    const main = document.getElementById('main-content');
    const topBar = document.getElementById('top-bar');
    if (main) main.style.display = '';
    if (topBar) topBar.style.display = '';
  } else {
    const home = document.getElementById('home-screen');
    if (home) home.style.display = 'flex';
  }
}

function renderAdminScreen(filterRaw) {
  const list = document.getElementById('admin-list');
  if (!list) return;
  const overlay = loadOosOverlay();
  const oosSet = new Set(overlay.names || []);

  const countEl = document.getElementById('admin-oos-count');
  if (countEl) countEl.textContent = oosSet.size;
  const metaEl = document.getElementById('admin-stats-meta');
  if (metaEl) {
    if (!overlay.updatedAt) {
      metaEl.innerHTML = 'Never updated';
    } else {
      const who = overlay.updatedBy && overlay.updatedBy.name ? overlay.updatedBy.name : 'Unknown';
      metaEl.innerHTML = ssRelTime(overlay.updatedAt) + ' \u00b7 <span class="who">' + escapeHtml(who) + '</span>';
    }
  }

  if (typeof PAIRING_MAP === 'undefined') {
    list.innerHTML = '<div class="admin-empty">Pairing data not loaded. Reload the page.</div>';
    return;
  }

  // Candidate items: everything that could appear in a pairing card, minus
  // variable entries (Today's Special placeholders) and spirit-cluster parents
  // (the individual bottles are listed instead, under `members`).
  const candidates = [];
  PAIRING_MAP.forEach(e => {
    if (e.variable) return;
    if (e.spiritCluster) {
      (e.members || []).forEach(m => candidates.push({ name: m, category: e.category }));
      return;
    }
    candidates.push({ name: e.name, category: e.category });
  });

  const filter = (filterRaw || '').trim().toLowerCase();
  const filtered = filter
    ? candidates.filter(c => c.name.toLowerCase().includes(filter)
        || (getCategoryForDisplay(c.category) || '').toLowerCase().includes(filter))
    : candidates;

  if (!filtered.length) {
    list.innerHTML = '<div class="admin-empty">No items match that filter.</div>';
    return;
  }

  const groups = {};
  filtered.forEach(item => {
    const cat = item.category || 'other';
    if (!groups[cat]) groups[cat] = [];
    groups[cat].push(item);
  });
  const orderedCats = ADMIN_CAT_ORDER.filter(c => groups[c])
    .concat(Object.keys(groups).filter(c => !ADMIN_CAT_ORDER.includes(c)));

  let html = '';
  orderedCats.forEach(cat => {
    const items = groups[cat].slice().sort((a, b) => a.name.localeCompare(b.name));
    html += '<div class="admin-group">'
      + '<div class="admin-group-label">' + escapeHtml(getCategoryForDisplay(cat)) + '</div>';
    items.forEach(item => {
      const isOos = oosSet.has(item.name);
      const encName = encodeURIComponent(item.name);
      html += '<div class="admin-item' + (isOos ? ' oos' : '') + '">'
        + '<div class="admin-item-name">' + escapeHtml(item.name) + '</div>'
        + (isOos ? '<span class="admin-86-badge">86</span>' : '')
        + '<button type="button" class="admin-toggle' + (isOos ? ' on' : '') + '"'
        + ' aria-label="Toggle 86 for ' + escapeHtml(item.name) + '"'
        + ' data-oos-toggle="' + encName + '"></button>'
        + '</div>';
    });
    html += '</div>';
  });
  list.innerHTML = html;
}

// ── EVENT DELEGATION ────────────────────────────────────────────────────────
// Admin OOS toggle buttons. Delegated so item names with quotes/apostrophes
// can't break inline onclick attribute escaping.
document.addEventListener('click', e => {
  const oosBtn = e.target.closest('[data-oos-toggle]');
  if (oosBtn) { toggleOos(decodeURIComponent(oosBtn.dataset.oosToggle)); return; }
});

// ── BOOT ────────────────────────────────────────────────────────────────────

function adminBoot() {
  applyOosOverlay();
  applyOosOverlayToHomeCards();
  // Deep-link support: index.html#admin lands straight on admin for management.
  if (window.location.hash === '#admin' && typeof authIsManagement === 'function' && authIsManagement()) {
    openAdmin();
  }
}

// Run after DOM is ready. Other modules can still call applyOosOverlay()
// explicitly (e.g. after merging specials) to re-sync.
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', adminBoot);
} else {
  adminBoot();
}
