// set-the-stage-completion.js — v4

function ftNext() {
  if (!state.ftAnswers[state.ftCurrentQ]) state.ftAnswers[state.ftCurrentQ] = 'none';
  if (state.ftCurrentQ < ftQuestions.length - 1) {
    state.ftCurrentQ++;
    renderFTQuestion();
  } else {
    renderFTRecs();
  }
}

function ftPrev() {
  if (state.ftCurrentQ > 0) { state.ftCurrentQ--; renderFTQuestion(); }
}

function renderFTRecs() {
  const answers = state.ftAnswers.filter(a => a && a !== 'none');
  const recs = getFirstTimerRecommendations(answers);

  document.getElementById('ft-recs-area').style.display = 'block';
  document.getElementById('ft-recs-count').textContent = ' — ' + recs.length + ' suggestions';

  const total = ftQuestions.length;
  document.getElementById('ft-progress').innerHTML =
    Array.from({length:total}, () => '<div class="ft-progress-pip done"></div>').join('');

  const nextBtn = document.getElementById('ft-next-btn');
  nextBtn.textContent = 'Restart';
  nextBtn.onclick = () => {
    state.ftAnswers = []; state.ftCurrentQ = 0;
    document.getElementById('ft-recs-area').style.display = 'none';
    nextBtn.onclick = ftNext;
    renderFTQuestion();
  };
  document.getElementById('ft-prev-btn').style.display = 'none';

  if (!recs.length) {
    document.getElementById('ft-recs-content').innerHTML =
      '<div class="empty-state">Not enough information. Try answering more questions.</div>';
    document.getElementById('ft-recs-area').scrollIntoView({behavior:'smooth',block:'start'});
    return;
  }

  const maxScore = recs[0].overlapScore || 1;
  const groups = {};
  recs.slice(0, 30).forEach(rec => {
    if (!groups[rec.category]) groups[rec.category] = [];
    groups[rec.category].push(rec);
  });

  const CATEGORY_ORDER = ['steak','starter','soup-salad','main','side','dessert','cocktail',
    'wine-sparkling','wine-white','wine-red','wine-dessert','bourbon','rye','scotch','irish',
    'japanese','canadian','tequila','mezcal','vodka','gin','rum','cognac','liqueur','singlemalt'];

  let html = '';
  CATEGORY_ORDER.forEach(cat => {
    if (!groups[cat]) return;
    html += '<div class="rec-group"><div class="rec-group-label">' + getCategoryForDisplay(cat) + '</div>';
    groups[cat].forEach(rec => {
      const tier = rec.overlapScore >= maxScore*0.75 ? 'excellent'
                 : rec.overlapScore >= maxScore*0.4  ? 'strong' : 'works';
      html += '<div class="rec-item"><div class="tier-pip ' + tier + '"></div>'
            + '<div class="rec-info"><div class="rec-name">' + rec.name + '</div>'
            + (rec.price ? '<div class="rec-meta">' + rec.price + '</div>' : '')
            + '</div><div class="tier-badge ' + tier + '">' + tier + '</div></div>';
    });
    html += '</div>';
  });

  document.getElementById('ft-recs-content').innerHTML = html;
  document.getElementById('ft-recs-area').scrollIntoView({behavior:'smooth',block:'start'});

  // If this was for a specific seat, offer to apply to that seat
  if (state.ftForSeat !== null) {
    const seatIdx = state.ftForSeat;
    const applyBtn = document.createElement('button');
    applyBtn.className = 'btn-secondary';
    applyBtn.style.marginTop = '16px';
    applyBtn.textContent = '← Back to Guest ' + (seatIdx + 1);
    applyBtn.onclick = () => {
      state.ftForSeat = null;
      showScreen('screen-session');
      openSeatSheet(seatIdx);
    };
    document.getElementById('ft-recs-area').appendChild(applyBtn);
  }
}

// ── RESET ──────────────────────────────────────────────────────────────────────

function confirmReset() {
  state.seats = [];
  state.activeSeat = null;
  state.activeCourseTab = 'starters';
  state.specials = [];
  state.guestCount = 2;
  state.ftDepth = 'short';
  state.ftAnswers = [];
  state.ftCurrentQ = 0;
  state.ftForSeat = null;

  for (let i = PAIRING_MAP.length - 1; i >= 0; i--) {
    if (PAIRING_MAP[i].special) PAIRING_MAP.splice(i, 1);
  }

  document.querySelectorAll('.modal-overlay.open').forEach(m => m.classList.remove('open'));
  document.getElementById('seat-sheet').classList.remove('open');
  document.getElementById('guest-count-display').textContent = '2';
  document.getElementById('ft-recs-area').style.display = 'none';
  document.getElementById('ft-short-btn').classList.add('active');
  document.getElementById('ft-deep-btn').classList.remove('active');
  document.getElementById('ft-question-area').innerHTML = '';
  document.getElementById('ft-progress').innerHTML = '';

  try { localStorage.removeItem('sts_v4'); } catch(e) {}
  showScreen('screen-landing');
}

// ── RESTORE ────────────────────────────────────────────────────────────────────

function restoreSession() {
  if (!loadState()) return;

  document.getElementById('guest-count-display').textContent = state.guestCount;

  if (state.seats && state.seats.length > 0) {
    // Rebuild specials
    (state.specials || []).forEach(s => {
      if (PAIRING_MAP.find(e => e.name === s.name && e.special)) return;
      const entry = { name:s.name, category:s.category, profile:s.profile||[],
        excellent:[], strong:[], works:[], avoid:[], special:true };
      PAIRING_MAP.forEach(e => {
        if (e.variable || e.oos) return;
        const overlap = e.profile.filter(p => (s.profile||[]).includes(p)).length;
        if (overlap >= 2) entry.excellent.push(e.name);
        else if (overlap === 1) entry.strong.push(e.name);
      });
      PAIRING_MAP.push(entry);
    });

    document.getElementById('session-heading').textContent = 'Table of ' + state.guestCount;
    showScreen('screen-session');
    renderTable();
    renderTableRecs();
  }
}

// ── INIT ────────────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  restoreSession();
});