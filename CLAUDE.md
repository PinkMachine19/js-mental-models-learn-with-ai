# CLAUDE.md — JavaScript: Mental Models & Labs

Internal build/format spec for this course. Not shown to students — read this before writing
or editing any lab page.

## What this repo is

A static HTML curriculum (`docs/`) teaching JavaScript execution-model concepts through small,
predict-then-run experiments. No build step. Styled dark/pink, matching the visual language of
this user's other `*-learn-with-ai` courses (`react-learn-with-ai`, `csharp-learn-with-ai`).

## Sourcing (keep this out of the student-facing UI)

Coverage was cross-checked against well-known third-party JavaScript educational material as a
topic checklist only — never as a source of wording, examples, structure, or exercises. Every
explanation and example in `docs/` is written independently. Modern JavaScript (ES2015+) is
covered on equal footing, not an afterthought. See the curriculum map (chat history / regenerate
on request) for the full audit and lab list.

**Provenance discipline (do not skip this when writing a new lab):** early in this project a
third-party course's public table of contents (topic/lecture titles only, no code/prose) was
pasted into chat and briefly used to scaffold a lecture-checklist version of the site — since
deleted. Never re-derive a lab's wording, examples, or structure from that material, from any
transcript/notes of it, or from any prior AI-generated draft that might itself have been
influenced by it. When writing a lab: identify the underlying JS concept only, then write the
mental model, examples, SVGs, and quiz questions from scratch, independent of how any other
course frames that same concept. If in doubt whether something might echo prior material, don't
cosmetically rename things — rebuild the explanation and examples from zero. (Lab 01 went through
exactly this rebuild once already — see chat history if you need the precedent.)

## Page structure (locked in — follow exactly, this is not a suggestion)

Every lab page (`docs/labs/lab-XX-slug/index.html`) follows this order:

1. **Head**: `styles.css`, `bookmark-widget.css`, `notes-widget.css`, then `lab.js`,
   `bookmark-widget.js`, `notes-widget.js` as deferred scripts (all relative to `docs/`, so
   `../../` from a lab page).
2. **Nav** + **breadcrumb line** (`&larr; all labs` · prev/next lab links).
3. **Header**: layer badge + lab-number badge, `<h1>` title, one-line subtitle.
4. **`.build-state` strip**: what the lab produces (usually "no files, no commit — concept lab").
5. **`.concept-type` badge**: one of `Common / Universal Concept`, `Common Concept, JavaScript-Specific Rules`,
   `Mostly JavaScript-Specific`, or `JavaScript Quirk`. This maps from the curriculum map's
   relevance tag (FOUNDATIONAL/MODERN/HISTORICAL/LEGACY is a *different* axis — pedagogical
   priority — from concept-type, which is *portability across languages*. A lab can be
   FOUNDATIONAL and still be JavaScript-specific, e.g. the prototype chain).
6. **Mental Models** (`.visual-grid` of 2–3 `.visual-card`s): one small original SVG per card
   (viewBox `0 0 180 120`, stroke-based rects/circles/paths/text, styled via the shared CSS
   variables — never a raster image), a one-line `<h3>`, and a reveal button showing 1–2 sentences
   of explanation. These SVGs must be original per-lab diagrams, not reused/copied art.
7. **Pre-Lab Quiz** (`.quiz-set` of 2–4 `.quiz-card`s, `<details>`-based): intuition-testing
   multiple choice, asked *before* the concept section, radio name `lab{NN}-pre-{i}`. Getting
   these "wrong" is fine and expected — the point is priming a prediction, not gatekeeping.
8. **The Concept** (`article.concept-part` blocks): mental model, cross-language note where it
   earns its place (see below), what-the-engine-does breakdown. Historical-vs-modern framing
   goes here when relevant (e.g. `var` vs `let`/`const`).
9. **Lab** (`[data-step-checkboxes]` wrapping `.step` blocks): each step has a
   `.lab-instruction` — a **comment-style** (`// ...`) instruction paragraph plus a
   `.copy-instruction-button` (`data-copy-instruction`) so it can be pasted directly above code
   as a real comment — then a `<pre><code>` block, a `.predict-box` textarea where a prediction
   is asked for, and (for reveal points) a `.blur-solution` block: button toggles
   `data-revealed`, the `<pre>` inside is blurred until then. Every `<pre>` gets an auto-injected
   `.copy-code-button` via `lab.js` (skipped inside `.blur-solution`, which manages its own).

   **Code-vs-comment rule (important, easy to get wrong):** the `<pre><code>` block after a
   `.lab-instruction` is *only* allowed to be finished, runnable code when it's the lab's
   starting snippet (i.e. Step 1's baseline, something the student didn't write and needs handed
   to them verbatim to begin predicting from). For every step that asks the student to *change*
   or *extend* code, the `<pre><code>` must be **comments describing what to type**, not the
   finished result — e.g. `// Add a new function named steamMilk, with no parameters.` /
   `// Inside it, log the string "milk steamed".`, not the actual `function steamMilk() {...}`.
   The student edits their own file from those comments; nothing gets cut-and-pasted as working
   code except the one given starting point. See Lab 01 Step 1 (full code, it's the baseline) vs.
   Step 3 (comment scaffold, it's a change) for the reference split.
10. **Comprehension Checklist** (`.card` + `<ul class="check-list">`): self-check statements,
    not questions.
11. **Post-Lab Quiz**: same structure as pre-lab, `lab{NN}-post-{i}`, answers now expected correct.
12. **Reflection Questions** (`.card` per question, *not* a bare `<ol>`): each question is its own
    `.card` with the question text, then a `.blur-reflection` block — button toggles
    `data-revealed`, the `.blur-reflection-answer` paragraph inside is blurred until then. Always
    include a one-line prompt above the questions telling the student to write their own answer
    first, since the blurred text is "one possible answer," not the only correct one. 1–2
    questions per lab, often inviting a cross-language comparison from the student's own
    experience.
13. **What Breaks If This Understanding Is Wrong** (`.alert.alert-warning`): which *later* labs
    silently fail to make sense without this one.
14. **What JavaScript Concept Was Learned Today** (`.card`, one paragraph).
15. Lab nav footer (prev/all-labs/next).

## The recurring-concerns map (Class 2) — read this before writing ANY lab from now on

This is the organizing thesis of the whole course, added after Labs 01–07 already existed and
retrofitted onto them: **"Programming languages repeatedly address the same fundamental
problems. JavaScript is one particular set of design choices for addressing them."** We are not
teaching JavaScript as a pile of isolated/weird features — every lab should make the learner
recognize: recurring problem &rarr; languages need some answer &rarr; different languages choose
differently &rarr; what did JavaScript choose &rarr; what follows from that.

**Class 2** (`labs/lab-02-language-design-map/`) is the index page for this — ten landmarks, one
glyph + one-line question + one tiny cross-language pointer each, nothing taught in depth there.
Do not re-explain the full map inside individual labs; point back to it with a badge instead.

### The ten landmarks (glyph is fixed — reuse the *exact same* glyph everywhere, forever)

| # | Glyph | Name | One-line question |
|---|---|---|---|
| 1 of 10 | `◇` | VALUES & TYPES | How does the language represent and distinguish kinds of information? |
| 2 of 10 | `◎` | NAMES & SCOPE | How do we name things, and where are those names visible? |
| 3 of 10 | `↪` | CONTROL FLOW | How do we express decisions, repetition, and order of computation? |
| 4 of 10 | `ƒ` | FUNCTIONS & ABSTRACTION | How do we package, pass around, and reuse computation? |
| 5 of 10 | `▦` | DATA, OBJECTS & REUSE | How do we structure data/behavior, and how does one thing share behavior with another? *(merged from separate "Data/Objects" + "Reuse/Polymorphism" — every lab that touches one touches the other, see Class 2's "Why ten, not eleven" note)* |
| 6 of 10 | `⌛` | MEMORY & LIFETIME | How long do values live, and how are they reclaimed? |
| 7 of 10 | `!` | ERRORS & FAILURE | How does the program represent, propagate, and recover from failure? |
| 8 of 10 | `▣` | MODULES & ORGANIZATION | How do we divide large programs into understandable, isolated pieces? |
| 9 of 10 | `⏱` | ASYNCHRONY & CONCURRENCY | How does the program deal with waiting, overlap, and coordination? |
| 10 of 10 | `▶` | EXECUTION | How does source code ultimately become running computation? |

**N is locked at 10.** Do not add, remove, split, or renumber a landmark without a compelling
reason — the whole point is a small, stable, memorizable set the learner starts recognizing
across languages later. If you think a lab doesn't fit any of the ten, it's more likely you need
a secondary badge or a one-sentence bridge, not an eleventh category.

### Badge markup (copy exactly)

Primary-only:
```html
<div class="concern-badge">
  <div class="concern-glyph">ƒ</div>
  <div class="concern-text">
    <span class="concern-name">FUNCTIONS &amp; ABSTRACTION</span>
    <span class="concern-index">4 of 10</span>
  </div>
</div>
```
Primary + secondary (wrap both in a flex row, secondary gets the `secondary` class):
```html
<div style="display:flex; gap:10px; flex-wrap:wrap;">
  <div class="concern-badge"> ... primary ... </div>
  <div class="concern-badge secondary"> ... secondary ... </div>
</div>
```

### Where badges go in a lab page (inserted right after step 5, the `.concept-type` badge)

1. The badge(s) — **one primary is normal; a second, secondary badge only when the lab
   genuinely sits at an intersection** (e.g. Closures = Functions primary + Scope secondary;
   Hoisting = Execution primary + Scope secondary). Don't reach for five badges because five
   concepts technically touch the lesson — that defeats the whole point.
2. One short connective sentence (`<p class="subtitle">`) framing the general problem, then
   "this lab is JavaScript's answer" — one or two sentences max, never a lecture. See any of
   Labs 03–07 for the exact tone.
3. Then proceed straight into the existing Mental Models section — do not re-litigate the map.

At the **end** of the lab, inside the final "What JavaScript Concept Was Learned Today" card,
add one closing line:
```html
<p class="concern-relate" style="margin-bottom: 0;">
  <strong>Relates to:</strong> ◎ Names &amp; Scope (2 of 10) — one sentence tying the
  experiment back to the landmark's question.
</p>
```

### Index-table glyph chips

Every row in `docs/labs/index.html` — built or not-yet-written — carries a `.concern-chip`
showing its landmark(s), even before the lab itself exists. This is deliberate: the map's promise
("every lab has a landmark") should be visible site-wide immediately, not only once a lab is
written. When a not-yet-built lab is finally written, its chip in the index should already be
correct — just add the matching badge/relate markup inside the new page to match.
```html
<span class="concern-chip"><span class="concern-glyph">◇</span>Values &amp; Types</span>
```
Two landmarks: `<span class="concern-chip"><span class="concern-glyph">ƒ</span>Functions + <span class="concern-glyph">◎</span>Scope</span>`

### The full session &rarr; landmark mapping (reference this, don't re-derive it)

Foundation: 03 Values/Types/typeof→◇ · 04 undefined/null/undeclared→◇ · 05 Execution
Context/Call Stack→▶ · 06 Hoisting→▶+◎ · 07 var/let/const/TDZ→◎+▶ · 08 Global Object→▶ · 09
Scope Chain→◎ · 10 Single-Threaded Execution→▶.
Functions: 11 Functions Are Objects→ƒ · 12 Declarations vs Expressions→ƒ · 13 IIFEs→ƒ · 14
Closures→ƒ+◎ · 15 Factories/Currying/Memoization→ƒ · 16 Callbacks→ƒ · 17 Default/Rest/Destructure→ƒ.
Object Model: 18 this→▶+ƒ · 19 call/apply/bind→ƒ · 20 Arrow Functions→ƒ+◎ · 21 By Value vs
Reference→◇ · 22 Object Creation/Lookup/Enum/Delete→▦ · 23 Shorthand/Getters/Setters→▦ · 24
Optional Chaining/Nullish→◇ · 25 Prototypes→▦ · 26 Object.create→▦ · 27 Constructors/new→▦ · 28
[[Prototype]] vs .prototype→▦ · 29 Classes basics→▦ · 30 Classes extends/super/static→▦.
Values: 31 Coercion→◇ · 32 Equality→◇ · 33 Truthy/Falsy→◇+↪ · 34 Numeric Precision→◇ · 35
JSON→◇+▦.
Collections: 36 Arrays as Objects→▦ · 37 Map/Set→▦ · 38 WeakMap/WeakSet/GC→⌛ · 39
Iterable/Iterator→↪ · 40 Generators→↪+ƒ.
Errors: 41 throw/try/catch→! · 42 Custom Error Classes→!+▦.
Async: 43 Event Loop→⏱+▶ · 44 Microtasks/Macrotasks→⏱ · 45 Promises→⏱+! · 46 async/await→⏱.
Organization: 47 Modules→▣+◎.

(This table is also reproduced with full titles in `docs/labs/index.html`'s glyph chips — that
file is still the live source of truth if the two ever disagree, e.g. after a future reorder.)

## Cross-language scaffolding (use sparingly)

- Add an `.xlang` callout inside the Concept section **only** when it clarifies a shared concept,
  flags an important difference, explains a JS-specific surprise, resolves differing terminology,
  or heads off a wrong expectation carried over from Python. Not every lab needs one.
- Structure: `.xlang-label` "Cross-language note", then `<p><strong>Common concept:</strong> ...`,
  `<p><strong>Python:</strong> ...`, `<p><strong>JavaScript:</strong> ...`. Keep each to 1–2
  sentences. Python is the default comparison language; reach for C#/Java only when it's a
  clearer fit than Python for that specific point.
- The `.concept-type` badge (see step 5) is the compact, always-present version of this — the
  `.xlang` callout is the expanded version, used selectively.

## Known good cross-language spots (use when writing these labs)

TDZ/scope (Labs 03, 07), closures (12), `this`/losing it (16–18), by-value/by-reference (19),
prototypes vs Python's MRO (23–26), `==`/coercion vs Python's stricter equality (29–30),
`Map`/`Set` vs dict/set (33), generators vs Python's `yield` (35), event loop vs `asyncio` (37–38),
promises/async vs `asyncio.gather` (39–40), modules vs Python's `import` (41).

## Shared assets (`docs/`, referenced by every lab page)

- `styles.css` — base theme + all lab-page component styles (badges, quiz cards, visual cards,
  blur-solution, step instructions, etc.) in one file, appended over time. Don't fork per-lab
  `<style>` blocks for anything reusable — add it to `styles.css` instead.
- `lab.js` — generic interactivity: reveal toggles, quiz checking, blur-solution reveal,
  blur-reflection reveal, copy-instruction buttons, copy-code buttons (auto-injected on every
  `<pre>`), step-checkbox progress (persisted to `localStorage` per page path), predict-box
  persistence.
- `bookmark-widget.js`/`.css` — floating single-bookmark FAB (click any paragraph/heading/list
  item to bookmark it, click the FAB to jump back, right-click to clear). `localStorage`-backed,
  one bookmark across the whole site at a time. Lesson ID is parsed from the URL
  (`/labs/(lab-\d{2}[a-z0-9-]*)/`), so every lab page must live at `labs/lab-NN-slug/index.html`
  for this to work.
- `notes-widget.js`/`.css` — floating per-lab notes FAB: modal with a textarea (auto-saves to
  `localStorage`, debounced), "Copy" (notes only, or notes + full lesson text if the checkbox is
  ticked), and "Copy For AI" (wraps notes + optional lesson text in a ready-to-paste prompt asking
  an AI to explain concepts, check misunderstandings, answer questions, and quiz the student).
- Both widgets use `COURSE_ID = 'js-mental-models'` for their storage key prefix — don't change
  this without a migration plan, it'll orphan existing saved bookmarks/notes.

## Curriculum map

45-lab sequence (Foundation → Functions → Object Model → Values → Collections → Errors → Async →
Modules), prerequisite-ordered, tagged FOUNDATIONAL / MODERN / HISTORICAL BUT IMPORTANT / LEGACY —
full table was produced in chat and is not duplicated here to avoid drift; regenerate/reference it
before adding new labs rather than re-deriving lab order from scratch. `docs/labs/index.html`
always reflects current lab numbers/titles/status — treat it, not any older chat message, as the
live index if the two ever disagree.

## Status

- **Class 1** (`labs/lab-01-python-vs-javascript-landscape/`) — built. Orientation lesson:
  programming-language landscape map, multiple-axes framing, two comparison grids, a detailed
  Python-vs-JavaScript side-by-side, "precision note" callouts, two tiny predict/reveal
  experiments. No recurring-concern badge (it predates and sits above the map itself).
- **Class 2** (`labs/lab-02-language-design-map/`) — built. The recurring-concerns map — see the
  dedicated section above. This is the one all later labs point back to via badges.
- Labs 03–07 — built: Values/Types/typeof, undefined/null/Undeclared, Execution Context/Call
  Stack, Creation vs Execution Phase, `var`/`let`/`const`/TDZ. All five now carry
  recurring-concern badges + closing "Relates to" lines (retrofitted, JS content untouched).
- Both Class 1 and Class 2 are structurally `labs/lab-01-.../` and `labs/lab-02-.../` folders
  (widget/routing needs the `lab-NN-slug` shape) but are labeled "Class 1"/"Class 2" in their
  badge/title, not "Lab 01"/"Lab 02", and skip the pre-quiz/post-quiz split — an intentional,
  two-off deviation from the standard lab shape, not a pattern to extend to a "Class 3."
- Labs 08–47 — not yet built (curriculum is now 2 classes + 45 labs = 47 numbered items total).
  Every one of them already has its landmark(s) assigned — see the mapping table above — so
  writing a new lab means adding its badge/relate lines per that table, not deciding fresh.

**Dead-link discipline:** a "not yet built" lab is *never* an `<a>` — reference it as plain text,
e.g. `next lab &rarr; <em>(Lab 08 — not written yet)</em>` (see Lab 07's next-lab line for the
exact pattern). The moment a lab is built, go back and turn every neighboring lab's placeholder
text into a real link (prev/next breadcrumb *and* the bottom nav footer — both need fixing, it's
easy to only catch one). Also update that lab's own row in `docs/labs/index.html` from
`badge-locked`/"Not written" to `badge-current`/"Available" with a real `href` — its landmark
chip is likely already correct from the mapping table, no need to re-derive it.

**Renumbering history (for context, not action needed):** the built labs have shifted twice.
First, Lab 01 (Execution Context) became Lab 03 when Values/Types/typeof was inserted ahead of it
as the new Lab 01. Then, Class 1 was inserted ahead of *everything*, shifting all five built labs
up by one again and taking the `lab-01-...` folder slot. Most recently, Class 2 (the
recurring-concerns map) was inserted right after Class 1, shifting the five built labs up by one
more time (former Lab 01 Values/Types/typeof is now Lab 03) and taking the `lab-02-...` slot.
If the curriculum map is ever reordered again: rename the folder, fix that lab's internal
title/badge/quiz radio-name prefixes (`labNN-pre-`/`labNN-post-`), fix **every** in-body
cross-reference to another lab's number (not just the self-title — this was the easy mistake to
make: grep the whole file for `Lab \d{2}` after any renumber, not just the header), and fix its
neighbors' prev/next links (both breadcrumb and footer). `docs/labs/index.html` is the source of
truth for current
numbers/links.
