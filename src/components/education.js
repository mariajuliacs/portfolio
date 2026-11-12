/** Education, certificate and language cards. */
import { EDUCATION } from "../data/education.js";
import { esc, list } from "./dom.js";
import { icon } from "./icons.js";

export const EDUCATION_GROUPS = ["academic", "certificates", "languages", "learning"];

/** Card; `main` makes it large (home page, first row). */
export function educationCard(item, ctx, { main = false } = {}) {
  const text = ctx.t.education.items[item.id];
  const { actions } = ctx.t.common;
  const badge = text.badge
    ? `<span class="badge${item.status === "in-progress" ? " badge-active" : ""}">${esc(text.badge)}</span>`
    : "";

  return `
    <article class="edu-card${main ? " edu-card-main" : ""}">
      <div class="edu-icon">${icon(item.icon)}</div>
      <h3 class="edu-title">${esc(text.title)}</h3>
      <p class="edu-org">${esc(text.org)}</p>
      <div class="edu-foot">
        <span class="edu-date">${esc(text.date)}</span>
        <div class="edu-actions">
          ${badge}
          <button type="button" class="btn-mini" data-cert-img="${esc(item.certImage)}"
            data-cert-title="${esc(`${text.title} — ${text.org}`)}">${esc(actions.view)} <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>`;
}

/** Cards shown on the home page: academic (large) first, then the others. */
export function renderEducationHomeCards(ctx) {
  return list(EDUCATION_GROUPS, (group) =>
    list(EDUCATION[group].filter((item) => item.onHome), (item) =>
      educationCard(item, ctx, { main: Boolean(item.main) })
    )
  );
}

/** One titled group for the education page (with an empty-state notice). */
export function renderEducationGroup(group, ctx) {
  const items = EDUCATION[group];
  const columns = group === "academic" || group === "languages" ? " edu-grid-2" : "";
  const body = items.length
    ? list(items, (item) => educationCard(item, ctx, { main: group === "academic" }))
    : `<p class="empty-note">${esc(ctx.t.common.status.noCertificates)}</p>`;

  return `
    <h2 class="group-title" id="group-${group}">${esc(ctx.t.education.groups[group])}</h2>
    <div class="edu-grid${columns}" aria-labelledby="group-${group}">${body}</div>`;
}
