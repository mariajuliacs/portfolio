/** Project cards, the featured card and the project grid. */
import { PROJECTS, FEATURED_PROJECT_ID } from "../data/projects.js";
import { esc, list } from "./dom.js";

function repoLink(repo, ctx) {
  const { actions, status, a11y } = ctx.t.common;
  if (!repo) {
    return `<span class="project-link is-unavailable">${esc(status.repoUnavailable)}</span>`;
  }
  return `<a class="project-link" href="${esc(repo)}" target="_blank" rel="noopener noreferrer"
    aria-label="${esc(a11y.openRepo)}">${esc(actions.github)} <span aria-hidden="true">↗</span></a>`;
}

/** variant: "home" (short summary) | "page" (full description + highlights) */
function projectCard(project, ctx, variant) {
  const text = ctx.t.projects.items[project.id];
  const isPage = variant === "page";
  const description = isPage ? text.description ?? text.summary : text.summary;
  const stack = isPage ? project.pageStack ?? project.stack : project.stack;
  const highlights = isPage && text.highlights?.length
    ? `<ul class="bullets">${list(text.highlights, (h) => `<li>${esc(h)}</li>`)}</ul>`
    : "";

  return `
    <article class="project-card${project.wide ? " project-card-wide" : ""}">
      <p class="project-tag">${esc(text.tag)}</p>
      <h3 class="project-title">${esc(text.title)}</h3>
      <p class="project-desc">${esc(description)}</p>
      ${highlights}
      <ul class="chips">
        ${list(stack, (tech) => `<li class="chip">${esc(tech)}</li>`)}
      </ul>
      ${repoLink(project.repo, ctx)}
    </article>`;
}

function featuredCard(ctx, variant) {
  const { featured } = ctx.t.projects;
  const metrics = featured.metrics.filter((m) => variant === "page" || !m.pageOnly);
  return `
    <article class="project-card project-card-highlight">
      <p class="highlight-tag">${esc(featured.tag)}</p>
      <h3 class="highlight-title">${esc(featured.title)}</h3>
      ${metrics
        .map(
          (m) => `
        <div class="metric-row">
          <span class="metric-value">${esc(m.value)}</span>
          <span class="metric-label">${esc(m.label)}</span>
        </div>`
        )
        .join('<div class="metric-divider"></div>')}
    </article>`;
}

/** Grid of projects; the featured card is inserted right after its project. */
export function renderProjectGrid(ctx, variant) {
  const projects = variant === "home" ? PROJECTS.filter((p) => p.onHome) : PROJECTS;
  return projects
    .map((p) => projectCard(p, ctx, variant) + (p.id === FEATURED_PROJECT_ID ? featuredCard(ctx, variant) : ""))
    .join("");
}
