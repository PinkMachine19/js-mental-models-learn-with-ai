# JavaScript: Mental Models & Labs

Learn what JavaScript is actually doing, one experiment at a time. An original, hands-on
curriculum for two of us studying together.

## Developer note on sourcing (internal — not shown in the learning UI)

The curriculum's coverage was cross-checked against well-known third-party JavaScript educational
references purely as a *topic/coverage checklist* — which execution-model and language-fundamentals
concepts are worth teaching (execution contexts, call stack, hoisting, closures, `this`,
prototypes, event loop, object/array/function fundamentals, enumeration, currying, memoization,
etc.) — never as a source of wording, examples, structure, or exercises. Older, dated opinions
from that era are not taught as current best practice; where modern JS supersedes an older
recommendation, the lab teaches the underlying concept, then the modern approach.

Every explanation, example, and exercise in `docs/` is written independently. Nothing is copied,
transcribed, or paraphrased from any external source. Modern JavaScript (ES2015+: classes,
modules, `Map`/`Set`, destructuring, optional chaining, async/await, etc.) is covered on equal
footing, not as an afterthought — see the curriculum map for the full audit.

## Structure

- `docs/index.html` — home page, explains the lab format
- `docs/labs/index.html` — curriculum map / lab index (being revised — see chat history for the
  latest lab map audit before regenerating this)
- `docs/labs/lab-XX-*/index.html` — one lab per concept, following a fixed 10-step format:
  mental model → what the engine does internally → tiny experiment → predict → run → explain
  (what you wrote vs. what the engine effectively does) → change one thing → predict again →
  connect to the model → comprehension check
- `src/` — leftover scratch space for any code exercises, not required by the lab format above

Each lab is tagged by relevance: **FOUNDATIONAL**, **MODERN**, **HISTORICAL BUT IMPORTANT**, or
**LEGACY / RECOGNIZE IT** — so it's clear whether a concept is something to write today or just
something to recognize when reading older code.

Styled to match [react-learn-with-ai](https://pinkmachine19.github.io/react-learn-with-ai/sessions/index.html)
(dark background, pink accent).

## How to use this
1. Open `docs/index.html` in a browser (or serve `docs/` — see below).
2. Work through labs in prerequisite order from `docs/labs/index.html`.
3. Predict before revealing/running, actually write code, don't just read.

## Running locally
```
python -m http.server 8080 --directory docs
```
then open `http://localhost:8080/index.html`.

## Publishing (optional)
Push to a GitHub repo, enable Pages pointing at `/docs` — same setup as `react-learn-with-ai`.
