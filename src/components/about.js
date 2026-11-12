/** About section: text, quick facts and focus areas. */
import { esc, list, sectionHeading } from "./dom.js";
import { icon } from "./icons.js";

export function renderAbout(ctx) {
  const { about, sections } = ctx.t.home;
  return `
    <section id="about" class="section">
      <div class="container">
        ${sectionHeading(sections.about)}
        <div class="about-grid">
          <div class="about-text">
            ${list(about.paragraphs, (p) => `<p>${esc(p)}</p>`)}
            <ul class="about-facts">
              ${list(about.facts, (f) => `<li class="fact">${icon(f.icon)} ${esc(f.text)}</li>`)}
            </ul>
          </div>
          <div class="about-cards">
            ${list(
              about.areas,
              (a) => `
              <article class="about-card">
                <h3>${esc(a.title)}</h3>
                <p>${esc(a.text)}</p>
              </article>`
            )}
          </div>
        </div>
      </div>
    </section>`;
}
