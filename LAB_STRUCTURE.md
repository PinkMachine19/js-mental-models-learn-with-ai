# Lab Structure — v1 (APPROVED, applied to Labs 03–07)

Status: **approved and applied.** This is the standard used for Labs 03–07. Open questions from
the draft have been resolved (see §13) and section order has been finalized (see §12).

Scope of this pass: **Labs 03–07 only** (Values/Types/typeof → var/let/const/TDZ). Class 1,
Class 2, and the C#-bonus class are a different shape (orientation/index pages) and are not
touched by this spec. Labs 08+ are not touched until this group is reviewed and approved.

---

## 0. What changes from the current format, in one paragraph

Current Labs 03–07 are too compressed: ~3 mental models, a 3-question pre-quiz that just gets
repeated verbatim as the post-quiz, and a Concepts section that introduces jargon without always
unpacking it in plain English first. This pass expands all of that — more mental models (5–6),
a real 5-question pre-quiz, a *different* 5-question post-quiz that tests post-experiment
understanding, an expanded Concepts section that never uses a term without immediately explaining
it in plain English, and explicit "N of N" position indicators everywhere there's a sequence. Two
sections from the general spec (**Expected File Changes**, **Commit Checkpoint**) do not apply —
these labs produce no files and there is nothing to commit; see §9.

---

## 1. "N of N" — apply everywhere there's a sequence

The learner should always be able to answer: where am I, how many are there, how many are left.
Applies to:

- Learning Objectives: `Objective 1 of 5`
- Mental Models: `Mental Model 1 of 6` (small badge/label per card, or in the card heading)
- Pre-Lab Quiz: `Question 1 of 5`
- Lab Steps: `Step 1 of 7` (**we already do this** — keep the existing `.step-num` badge, just
  make sure the count is accurate)
- Post-Lab Quiz: `Question 1 of 5`
- Reflection Questions: `Reflection 1 of 3`

Implementation note: this is a small CSS/markup addition, not a new component — extend the
existing badge patterns (`.step-num`, `.quiz-label`) rather than inventing a new visual language.

---

## 2. Learning Objectives — placed AFTER Mental Models, before the Pre-Lab Quiz

**Resolved:** objectives come after the mental-model cards, not right after the header. Order is
Mental Models → Learning Objectives → Pre-Lab Quiz → Concepts. List 3–5 concrete objectives
numbered `Objective X of N`. Concrete = "the learner can predict X" or "the learner can explain
why Y," not vague verbs like "understand hoisting."

---

## 3. Mental Models — expand from ~3 to 5–6, never force the count

**Resolved:** 5–6 is the target, not a requirement — if a concept is honestly thin at 5, ship 5.
Never invent a 6th mental model just to pad the count. Keep the existing `.visual-card` SVG
format for the ones that benefit from a diagram, but not every mental model needs an SVG — some
can be a `.card` with just text if that's the clearer format for that particular angle. Vary the
*kind* of mental model rather than restating the same idea six ways. Useful angles to mix:

1. Plain-English explanation of the core idea
2. An analogy (physical-world comparison)
3. What the code is doing (mechanics)
4. What the engine/runtime is doing underneath (already a strength of our labs — keep it)
5. A common misconception, named and corrected
6. A comparison back to something already taught in an earlier lab (03→07 should reference each
   other more, per §8)

Not all six are mandatory for every lab — pick 5–6 that are genuinely useful for that specific
concept, not padding to hit a number.

---

## 4. Pre-Lab Quiz — 5 questions, testing pre-experiment intuition

Expand from 3 to 5. Keep the existing mechanic (intuition-testing, "wrong" is fine and expected,
`data-quiz`/`data-check-answer` wiring already built in `lab.js`). Don't make all 5 trivial
rewordings of one idea — they should probe genuinely different angles of the same upcoming
experiment.

---

## 5. Concepts — expand significantly, unpack every term

This is the biggest gap in the current labs. Rule: **a learner should never have to look up a
term this section just introduced.** Pattern to apply throughout:

> technical term → immediate plain-English translation → concrete example (often a tiny code
> snippet)

For each concept covered, work through, where relevant: what is it? why does it exist / what
problem does it solve? what's actually happening (mechanically)? what would happen without it?
what does it look like in code? Do not compress this to save space — length here is not the
enemy, vagueness is. Continue using `article.concept-part` blocks, `.xlang` cross-language notes
where they earn their place, and the existing concern badges from Class 2 (§ unchanged from
current format).

---

## 6. Coding Lab / Experiment — tighten the instruction/solution split

We already have the right mechanic (`.lab-instruction` comment-style step text +
`.copy-instruction-button`, then a `<pre><code>` block, then `.blur-solution` for the reveal).
What needs tightening:

- Every step's instruction must be **specific enough to attempt without seeing the solution**,
  never "update the code" — say exactly what behavior to produce or observe.
- The instruction text must be literally usable as a pasted code comment (this is already our
  rule from `CLAUDE.md`'s code-vs-comment rule — keep enforcing it, it already matches this spec).
- Each step gets `Lab Step X of N` (already have this via `.step-num` — just verify counts).
- The full worked solution goes in `.blur-solution`, hidden until revealed — for steps that are a
  predict-then-reveal experiment (not a "type this yourself" step), this is already how Labs 03–07
  work; keep that split intact rather than turning every step into a blurred-solution reveal.

---

## 7. Sections that do NOT apply here (differs from the general spec)

- **Expected File Changes** — skip. These labs create no files.
- **Commit Checkpoint** (`git add`/`git commit`) — skip. There is nothing to commit; the
  `.build-state` strip already tells the learner this is a no-file, no-commit concept lab.
- **Code Review Checklist** — keep our existing equivalent, **Comprehension Checklist**, but per
  the general spec's spirit, make sure each item is specific to what that lab actually taught, not
  generic boilerplate that could apply to any lesson.

---

## 8. Post-Lab Quiz — must NOT repeat the pre-quiz

This is the second-biggest gap. Currently our post-quiz questions are close paraphrases of the
pre-quiz questions. Fix: write 5 *different* questions that test post-experiment understanding —
what happened, why it happened, predicting a variation not directly run in the lab, interpreting
a new small snippet, or applying the concept in a slightly different situation than the one
demonstrated.

---

## 9. Reflection — keep our blur mechanic, drop the generic template

We already blur/hide suggested answers correctly (`.blur-reflection`/`.blur-reflection-answer`) —
keep that exactly as-is, it already matches the "think first, then reveal" workflow this spec
wants. What changes: **stop using "what breaks if this understanding is wrong" as a reflection
question** — that stays as its own separate, non-reflection section (`.alert.alert-warning`,
already present) exactly as it is today. Reflection questions themselves should be genuinely
tailored per-lab — predicting outcomes, explaining the concept in the learner's own words,
connecting to a related idea — not a recurring generic template.

3 reflections per lab, `Reflection X of 3`.

---

## 10. Next (unchanged)

Keep the closing nav/next-lab pointer as-is — already correctly linked across Labs 03–07.

---

## 11. Five-lab arc — Labs 03 → 07 as a connected progression

Audit before editing (do this once, not per-lab):

- **03 (Values, Types & typeof)** establishes: every value has a type; types belong to values,
  not variables.
- **04 (undefined/null/undeclared)** builds on 03 directly: it's about *which* value/type shows
  up in the "nothing" case, and explicitly should reference 03's type model rather than repeating
  it.
- **05 (Execution Context & Call Stack)** shifts to a new axis (how code runs, not what values
  are) — a deliberate "new problem" per the "project continuity must never interfere with concept
  demonstration" rule. No need to force a link back to 03/04 here beyond what already exists.
- **06 (Creation vs Execution Phase / Hoisting)** builds directly on 05's execution-context model
  — already does this well, keep the connective tissue.
- **07 (var/let/const/TDZ)** builds on 06's creation-phase model *and* revisits 03/04's
  values/types framing (a `let` in the TDZ is a specific value-state question) — bring the "we
  saw a value/type distinction back in Lab 03" thread back explicitly here, since right now that
  callback isn't made.

Each lab keeps its own concept-map badge(s) from Class 2 (§ already correct, no change) — the arc
above is about connective *prose*, not about merging concerns.

---

## 12. Structure checklist (apply top to bottom per lab) — FINAL ORDER

```
LAB TITLE
Concern badge(s) (unchanged from current)
Mental Models
    5-6 cards/blocks when it's honest, 5 when a 6th would be padding — Mental Model X of N
Learning Objectives          <- placed here, AFTER mental models
    Objective 1 of N .. N of N
Pre-Lab Quiz
    Question 1 of 5 .. 5 of 5
Concepts
    expanded, jargon unpacked inline, code examples
Coding Lab / Experiment
    Lab Step 1 of N .. N of N
    (instruction-as-comment -> attempt -> blurred solution, where applicable)
Comprehension Checklist       <- lab-specific, not generic
Post-Lab Quiz
    Question 1 of 5 .. 5 of 5   <- DIFFERENT from pre-quiz
Reflection
    Reflection 1 of 3 .. 3 of 3, each with a blurred suggested answer
What Breaks If This Understanding Is Wrong   <- stays a separate section, not a reflection
What JavaScript Concept Was Learned Today
Next
```

---

## 13. Resolved decisions

- **Mental model count:** 5–6 is a target, never a requirement. Ship 5 when a 6th would be
  padding.
- **Learning Objectives placement:** after Mental Models, before the Pre-Lab Quiz (not right
  after the header).
- **Scope:** apply this structure to Labs 03–07 all at once, then review as a group.

---

## 14. Once this doc is approved

1. Apply this structure to Lab 03 first as the new reference implementation (replacing Lab 05's
   old role as "the reference lab" in `CLAUDE.md`).
2. Get sign-off on Lab 03 specifically before touching 04–07, since it's the template.
3. Apply the same structure to 04–07, respecting the five-lab-arc connective tissue in §11.
4. Update `CLAUDE.md`'s "Page structure" section to reflect this as the new standard, and update
   its "Status" section once all five are done.
5. Only then consider whether/how to extend this to Labs 08+.
