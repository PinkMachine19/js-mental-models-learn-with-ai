// Shared interactivity for lab pages: reveal toggles, quiz checking,
// blurred-solution reveal, copy buttons, and step-checkbox progress.

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      // fall through to the textarea fallback below
    }
  }
  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.left = "-9999px";
  document.body.append(textArea);
  textArea.select();
  let copied = false;
  try {
    copied = document.execCommand("copy");
  } finally {
    textArea.remove();
  }
  return copied;
}

// Visual-card and reveal-card toggle buttons
document.querySelectorAll(".visual-card > button, .reveal-card > button").forEach((button) => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    const expanded = button.getAttribute("aria-expanded") === "true";
    button.setAttribute("aria-expanded", String(!expanded));
    panel.hidden = expanded;
    const hint = button.querySelector("small");
    if (hint) hint.textContent = expanded ? "Reveal" : "Hide";
  });
});

// Quiz answer checking
document.querySelectorAll("[data-check-answer]").forEach((button) => {
  button.addEventListener("click", () => {
    const quiz = button.closest("[data-quiz]");
    const chosen = quiz?.querySelector("input:checked");
    const feedback = quiz?.querySelector(".quiz-feedback");
    if (!feedback) return;
    if (!chosen) {
      feedback.textContent = "Choose an answer before checking.";
      feedback.dataset.state = "notice";
      return;
    }
    const correct = chosen.value === button.dataset.correct;
    const explanation = feedback.dataset.explanation;
    feedback.textContent = explanation
      ? `${correct ? "Correct." : "Not quite."} ${explanation}`
      : correct ? "Correct." : "Not quite.";
    feedback.dataset.state = correct ? "correct" : "incorrect";
  });
});

// Blurred solution reveal
document.querySelectorAll(".blur-solution > button").forEach((button) => {
  button.addEventListener("click", () => {
    const solution = button.closest(".blur-solution");
    const code = solution?.querySelector("pre");
    const revealed = solution?.hasAttribute("data-revealed");
    solution?.toggleAttribute("data-revealed", !revealed);
    button.setAttribute("aria-expanded", String(!revealed));
    code?.setAttribute("aria-hidden", String(revealed));
    const hint = button.querySelector("small");
    if (hint) hint.textContent = revealed ? "Reveal" : "Hide";
  });
});

// Blurred reflection-answer reveal
document.querySelectorAll(".blur-reflection > button").forEach((button) => {
  button.addEventListener("click", () => {
    const reflection = button.closest(".blur-reflection");
    const answer = reflection?.querySelector(".blur-reflection-answer");
    const revealed = reflection?.hasAttribute("data-revealed");
    reflection?.toggleAttribute("data-revealed", !revealed);
    button.setAttribute("aria-expanded", String(!revealed));
    answer?.setAttribute("aria-hidden", String(revealed));
    const hint = button.querySelector("small");
    if (hint) hint.textContent = revealed ? "Reveal" : "Hide";
  });
});

// Copy-instruction buttons (comment-style lab instructions)
document.querySelectorAll("[data-copy-instruction]").forEach((button) => {
  button.addEventListener("click", async () => {
    const instruction = button.closest(".lab-instruction")?.querySelector("p")?.textContent?.trim();
    if (!instruction) return;
    const copied = await copyTextToClipboard(instruction);
    button.textContent = copied ? "Copied!" : "Could not copy";
    window.setTimeout(() => { button.textContent = "Copy"; }, 1600);
  });
});

// Step-checkbox progress, persisted per page
document.querySelectorAll("[data-step-checkboxes]").forEach((stepList, listIndex) => {
  const storageKey = `lab-step-progress:${window.location.pathname}:${listIndex}`;
  let completedSteps = [];
  try {
    completedSteps = JSON.parse(localStorage.getItem(storageKey) || "[]");
  } catch {
    completedSteps = [];
  }
  stepList.querySelectorAll("[data-step-checkbox]").forEach((checkbox) => {
    checkbox.checked = completedSteps.includes(checkbox.dataset.stepCheckbox);
    checkbox.closest(".step")?.classList.toggle("step-completed", checkbox.checked);
    checkbox.addEventListener("change", () => {
      checkbox.closest(".step")?.classList.toggle("step-completed", checkbox.checked);
      const checked = [...stepList.querySelectorAll("[data-step-checkbox]:checked")]
        .map((item) => item.dataset.stepCheckbox);
      localStorage.setItem(storageKey, JSON.stringify(checked));
    });
  });
});

// Copy button on every code block
document.querySelectorAll("pre").forEach((block) => {
  const code = block.querySelector("code");
  if (!code || block.closest(".blur-solution")) return; // blur-solution handles its own copy visibility
  const button = document.createElement("button");
  button.type = "button";
  button.className = "copy-code-button";
  button.textContent = "Copy";
  button.setAttribute("aria-label", "Copy code to clipboard");
  button.addEventListener("click", async () => {
    const copied = await copyTextToClipboard(code.textContent);
    button.textContent = copied ? "Copied!" : "Could not copy";
    window.setTimeout(() => { button.textContent = "Copy"; }, 1600);
  });
  block.append(button);
});

// Predict-box textareas: persist per-page so a prediction survives a refresh
document.querySelectorAll(".predict-box").forEach((ta, i) => {
  const key = `predict:${window.location.pathname}:${i}`;
  ta.value = localStorage.getItem(key) || "";
  ta.addEventListener("input", () => localStorage.setItem(key, ta.value));
});
