"use strict";

const { Plugin } = require("obsidian");

module.exports = class HomepageTaskGracePeriod extends Plugin {
  onload() {
    this.pending = new Map();
    this.handleTaskClick = this.handleTaskClick.bind(this);
    this.registerDomEvent(document, "click", this.handleTaskClick, {
      capture: true,
    });
  }

  onunload() {
    for (const checkbox of [...this.pending.keys()]) {
      this.commit(checkbox);
    }
  }

  isHomepageTodo(checkbox) {
    const todo = checkbox.closest('.callout[data-callout="todo"]');
    return Boolean(todo?.closest(".home"));
  }

  handleTaskClick(event) {
    const checkbox = event.target.closest?.(
      'input.task-list-item-checkbox[type="checkbox"]',
    );

    if (!checkbox || !this.isHomepageTodo(checkbox)) return;

    if (checkbox.dataset.hpGraceBypass === "1") {
      delete checkbox.dataset.hpGraceBypass;
      return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    if (this.pending.has(checkbox)) {
      this.cancel(checkbox);
      return;
    }

    if (checkbox.checked) {
      queueMicrotask(() => {
        checkbox.checked = true;
      });
      this.begin(checkbox);
    }
  }

  begin(checkbox) {
    const item = checkbox.closest(".task-list-item");
    if (!item) return;

    const feedback = document.createElement("span");
    feedback.className = "hp-task-grace-feedback";
    item.appendChild(feedback);
    item.classList.add("hp-task-grace-active");

    const state = {
      item,
      feedback,
      seconds: 10,
      intervalId: null,
      timeoutId: null,
    };

    const updateFeedback = () => {
      feedback.textContent = `已完成 · ${state.seconds} 秒内再次点击可撤销`;
    };

    updateFeedback();
    state.intervalId = window.setInterval(() => {
      state.seconds = Math.max(1, state.seconds - 1);
      updateFeedback();
    }, 1000);
    state.timeoutId = window.setTimeout(() => this.commit(checkbox), 10000);
    this.pending.set(checkbox, state);
  }

  cancel(checkbox) {
    const state = this.pending.get(checkbox);
    if (!state) return;

    window.clearInterval(state.intervalId);
    window.clearTimeout(state.timeoutId);
    state.feedback.remove();
    state.item.classList.remove("hp-task-grace-active");
    this.pending.delete(checkbox);

    queueMicrotask(() => {
      checkbox.checked = false;
      checkbox.disabled = false;
    });
  }

  commit(checkbox) {
    const state = this.pending.get(checkbox);
    if (!state) return;

    window.clearInterval(state.intervalId);
    window.clearTimeout(state.timeoutId);
    state.feedback.remove();
    state.item.classList.remove("hp-task-grace-active");
    this.pending.delete(checkbox);

    checkbox.checked = false;
    checkbox.disabled = false;
    checkbox.dataset.hpGraceBypass = "1";
    checkbox.click();
  }
};
