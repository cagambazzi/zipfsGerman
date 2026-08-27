/* Zipf's German — flashcards over the ~1000 most frequent German words.
   Front end only: no build step, no network, no storage. */

const els = {
  word: document.getElementById('word'),
  translation: document.getElementById('translation'),
  feedback: document.getElementById('feedback'),
  form: document.getElementById('answer-form'),
  input: document.getElementById('answer-input'),
  check: document.getElementById('btn-check'),
  skip: document.getElementById('btn-skip'),
  reveal: document.getElementById('btn-reveal'),
  shuffle: document.getElementById('btn-shuffle'),
  reset: document.getElementById('btn-reset'),
  cardIndex: document.getElementById('card-index'),
  cardTotal: document.getElementById('card-total'),
  deckSize: document.getElementById('deck-size'),
  seen: document.getElementById('stat-seen'),
  correct: document.getElementById('stat-correct'),
  wrong: document.getElementById('stat-wrong'),
  skipped: document.getElementById('stat-skipped'),
  streak: document.getElementById('stat-streak'),
};

const state = {
  deck: [],
  position: 0,
  graded: false,   // the current card has been checked (right or wrong)
  resolved: false, // the current card is done; Enter now moves on
  score: { seen: 0, correct: 0, wrong: 0, skipped: 0, streak: 0 },
};

/* ---------- answer matching ---------- */

const ARTICLES = ['to ', 'the ', 'a ', 'an ', 'some '];

/** Lowercases, drops hints in parentheses, punctuation and leading articles. */
function normalise(text) {
  let out = String(text)
    .toLowerCase()
    .replace(/\([^)]*\)/g, ' ')
    .replace(/[^\p{L}\p{N}\s'-]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  let changed = true;
  while (changed) {
    changed = false;
    for (const article of ARTICLES) {
      if (out.startsWith(article)) {
        out = out.slice(article.length).trim();
        changed = true;
      }
    }
  }
  return out;
}

/** Levenshtein distance, capped early once it exceeds `max`. */
function editDistance(a, b, max) {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const curr = [i];
    let rowMin = i;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      curr[j] = Math.min(prev[j] + 1, curr[j - 1] + 1, prev[j - 1] + cost);
      rowMin = Math.min(rowMin, curr[j]);
    }
    if (rowMin > max) return max + 1;
    prev = curr;
  }
  return prev[b.length];
}

/** Tolerates one typo in words of four letters or more. */
function isCloseEnough(guess, target) {
  if (target.length < 4) return false;
  const allowed = target.length >= 8 ? 2 : 1;
  return editDistance(guess, target, allowed) <= allowed;
}

/**
 * Grades a guess against a card.
 * Returns { status: 'correct' | 'typo' | 'wrong', matched }.
 */
function grade(guess, card) {
  const attempt = normalise(guess);
  if (!attempt) return { status: 'wrong', matched: null };

  const targets = card.answers.map((answer) => ({ raw: answer, key: normalise(answer) }));

  for (const target of targets) {
    if (target.key && attempt === target.key) return { status: 'correct', matched: target.raw };
  }
  // A single word out of a multi-word gloss ("bill" for "bill, invoice") counts.
  for (const target of targets) {
    const parts = target.key.split(' ').filter((p) => p.length > 2);
    if (parts.length > 1 && parts.includes(attempt)) return { status: 'correct', matched: target.raw };
  }
  for (const target of targets) {
    if (target.key && isCloseEnough(attempt, target.key)) return { status: 'typo', matched: target.raw };
  }
  return { status: 'wrong', matched: null };
}

/* ---------- deck ---------- */

function shuffled(items) {
  const copy = items.slice();
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function currentCard() {
  return state.deck[state.position];
}

/* ---------- rendering ---------- */

function renderScore() {
  els.seen.textContent = state.score.seen;
  els.correct.textContent = state.score.correct;
  els.wrong.textContent = state.score.wrong;
  els.skipped.textContent = state.score.skipped;
  els.streak.textContent = state.score.streak;
}

function setFeedback(message, tone) {
  if (!message) {
    els.feedback.hidden = true;
    els.feedback.textContent = '';
    return;
  }
  els.feedback.hidden = false;
  els.feedback.textContent = message;
  els.feedback.className = 'feedback ' + (tone ? 'is-' + tone : '');
}

function renderCard() {
  const card = currentCard();
  els.word.textContent = card.german;
  els.translation.textContent = card.english;
  els.translation.hidden = true;
  setFeedback('');
  els.input.value = '';
  els.input.className = 'answer-input';
  els.input.disabled = false;
  els.check.textContent = 'Check';
  els.cardIndex.textContent = state.position + 1;
  els.input.focus();
}

/* ---------- flow ---------- */

function revealTranslation() {
  els.translation.hidden = false;
}

function checkAnswer() {
  if (state.resolved) { nextCard(); return; }

  const card = currentCard();
  const guess = els.input.value;
  if (!normalise(guess)) {
    setFeedback('Type a meaning first, or use Skip.', 'neutral');
    return;
  }

  const result = grade(guess, card);
  revealTranslation();
  state.graded = true;
  state.resolved = true;
  state.score.seen += 1;
  els.check.textContent = 'Next';

  if (result.status === 'wrong') {
    state.score.wrong += 1;
    state.score.streak = 0;
    els.input.className = 'answer-input is-wrong';
    setFeedback('Not quite — it means "' + card.english + '".', 'wrong');
  } else {
    state.score.correct += 1;
    state.score.streak += 1;
    els.input.className = 'answer-input is-correct';
    setFeedback(
      result.status === 'typo'
        ? 'Correct — small typo, we meant "' + result.matched + '".'
        : 'Correct!',
      'correct'
    );
  }
  renderScore();
}

function skipCard() {
  if (!state.graded) {
    state.score.seen += 1;
    state.score.skipped += 1;
    state.score.streak = 0;
    renderScore();
  }
  nextCard();
}

function onReveal() {
  if (state.resolved) return;
  revealTranslation();
  state.resolved = true;
  els.check.textContent = 'Next';
  els.input.disabled = true;
  state.score.seen += 1;
  state.score.skipped += 1;
  state.score.streak = 0;
  renderScore();
  setFeedback('Revealed — this one counts as skipped.', 'neutral');
}

function nextCard() {
  state.graded = false;
  state.resolved = false;
  state.position += 1;
  if (state.position >= state.deck.length) {
    state.deck = shuffled(WORDS);
    state.position = 0;
    renderCard();
    setFeedback('Deck finished — reshuffled, going again.', 'neutral');
    return;
  }
  renderCard();
}

function resetScore() {
  state.score = { seen: 0, correct: 0, wrong: 0, skipped: 0, streak: 0 };
  renderScore();
}

function newDeck() {
  state.deck = shuffled(WORDS);
  state.position = 0;
  state.graded = false;
  state.resolved = false;
  renderCard();
}

/* ---------- wiring ---------- */

els.form.addEventListener('submit', (event) => {
  event.preventDefault();
  checkAnswer();
});

els.skip.addEventListener('click', skipCard);
els.reveal.addEventListener('click', onReveal);
els.shuffle.addEventListener('click', () => {
  newDeck();
  setFeedback('Deck shuffled.', 'neutral');
});
els.reset.addEventListener('click', resetScore);

document.addEventListener('keydown', (event) => {
  if (event.key === 'Enter' && state.resolved) {
    event.preventDefault();
    nextCard();
  }
});

els.cardTotal.textContent = WORDS.length;
els.deckSize.textContent = WORDS.length;
renderScore();
newDeck();
