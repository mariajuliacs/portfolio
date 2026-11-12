/** "All projects" page (projects.html). */
import { renderProjectGrid } from "../components/projects.js";
import { renderSubpage } from "./layout.js";

export function renderProjectsPage(ctx) {
  const { page } = ctx.t.projects;
  return renderSubpage(ctx, {
    heading: page,
    lead: page.lead,
    backHash: "projects",
    content: `<div class="projects-grid projects-grid-page">${renderProjectGrid(ctx, "page")}</div>`,
  });
}
