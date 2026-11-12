/** Home page (index.html). */
import { esc, pageHref, sectionHeading } from "../components/dom.js";
import { renderHero } from "../components/hero.js";
import { renderTech } from "../components/tech.js";
import { renderProjectGrid } from "../components/projects.js";
import { renderExperience } from "../components/timeline.js";
import { renderEducationHomeCards } from "../components/education.js";
import { renderAbout } from "../components/about.js";
import { renderContact } from "../components/contact.js";

function projectsSection(ctx) {
  return `
    <section id="projects" class="section">
      <div class="container">
        ${sectionHeading(ctx.t.home.sections.projects)}
        <div class="projects-grid">${renderProjectGrid(ctx, "home")}</div>
        <div class="center">
          <a href="${pageHref("projects", { lang: ctx.lang })}" class="btn btn-primary">
            ${esc(ctx.t.common.actions.seeAllProjects)} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>`;
}

function educationSection(ctx) {
  return `
    <section id="education" class="section">
      <div class="container">
        ${sectionHeading(ctx.t.home.sections.education)}
        <div class="edu-grid edu-grid-featured">${renderEducationHomeCards(ctx)}</div>
        <div class="center">
          <a href="${pageHref("education", { lang: ctx.lang })}" class="btn btn-primary">
            ${esc(ctx.t.common.actions.seeAll)} <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>`;
}

export function renderHomePage(ctx) {
  return [
    renderHero(ctx),
    renderTech(ctx),
    projectsSection(ctx),
    renderExperience(ctx),
    educationSection(ctx),
    renderAbout(ctx),
    renderContact(ctx),
  ].join("");
}
