/** Tech stack section: accessible tabs (sidebar) + panels. */
import { esc, list, sectionHeading } from "./dom.js";

const pad = (n) => String(n).padStart(2, "0");

export function renderTech(ctx) {
  const { categories } = ctx.t.tech;
  const [first] = categories;

  const tab = (cat, i) => `
    <button class="tech-tab" type="button" role="tab" id="tab-${cat.id}"
      aria-controls="panel-${cat.id}" aria-selected="${cat === first}" tabindex="${cat === first ? 0 : -1}">
      <span class="tech-tab-num">${pad(i + 1)}</span><span>${esc(cat.label)}</span>
    </button>`;

  const panel = (cat) => `
    <div class="tech-panel" role="tabpanel" id="panel-${cat.id}" aria-labelledby="tab-${cat.id}"
      tabindex="0" ${cat === first ? "" : "hidden"}>
      <h3 class="tech-panel-title">${esc(cat.title)}</h3>
      <ul class="tech-items">
        ${list(cat.items, (item) => `<li class="tech-item">${esc(item)}</li>`)}
      </ul>
    </div>`;

  return `
    <section id="tech" class="section">
      <div class="container">
        ${sectionHeading(ctx.t.home.sections.tech)}
        <div class="tech-layout">
          <div class="tech-sidebar" role="tablist" aria-orientation="vertical">
            ${list(categories, tab)}
          </div>
          <div class="tech-content">
            ${list(categories, panel)}
          </div>
        </div>
      </div>
    </section>`;
}
