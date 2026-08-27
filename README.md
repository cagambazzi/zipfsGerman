# Zipf's German

A front-end-only flashcard app for the ~1000 most frequently used German words.

## Running it

No build step, no dependencies, no network calls. Open `index.html` in a browser,
or serve the folder:

```bash
npx http-server -p 8080 .
```

## How it works

- A German word is shown in the middle of the card.
- **Skip** moves to the next word (counts as skipped).
- **Show translation** reveals the English meaning (also counts as skipped).
- Type the English meaning in the text field and press **Check** (or Enter) to
  see whether it was right. Press Enter again for the next card.

Answer checking is forgiving: case and surrounding punctuation are ignored,
leading articles (`to`, `the`, `a`, `an`) are optional, any one of a word's
listed meanings is accepted, a single word out of a multi-word gloss counts,
and a one-character typo (two on longer words) is accepted with a note.

The deck is shuffled on load and reshuffled once you reach the end.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | Markup for the card, buttons, input and scoreboard |
| `styles.css` | Styling, with light and dark colour schemes |
| `app.js` | Deck handling, answer grading and scoring |
| `words.js` | The word list (`german\|translations`, parsed into card objects) |
