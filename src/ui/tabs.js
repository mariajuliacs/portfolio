/**
 * Accessible tabs (WAI-ARIA pattern) using event delegation, so they keep
 * working after the page is re-rendered in another language.
 * Click selects a tab; ↑/↓/←/→, Home and End move between tabs.
 */
function select(tab) {
  const tablist = tab.closest('[role="tablist"]');
  tablist.querySelectorAll('[role="tab"]').forEach((t) => {
    const active = t === tab;
    t.setAttribute("aria-selected", String(active));
    t.tabIndex = active ? 0 : -1;
    const panel = document.getElementById(t.getAttribute("aria-controls"));
    if (panel) panel.hidden = !active;
  });
  tab.focus();
}

const KEYS = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };

export function initTabs() {
  document.addEventListener("click", (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (tab) select(tab);
  });

  document.addEventListener("keydown", (event) => {
    const tab = event.target.closest('[role="tab"]');
    if (!tab) return;
    const tabs = [...tab.closest('[role="tablist"]').querySelectorAll('[role="tab"]')];
    const index = tabs.indexOf(tab);
    let next;
    if (event.key in KEYS) next = tabs[(index + KEYS[event.key] + tabs.length) % tabs.length];
    else if (event.key === "Home") next = tabs[0];
    else if (event.key === "End") next = tabs[tabs.length - 1];
    if (next) {
      event.preventDefault();
      select(next);
    }
  });
}
