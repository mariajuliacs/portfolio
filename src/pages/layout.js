/** Shared layout for secondary pages: back button, heading and "back to home" link. */
import { esc, pageHref, sectionHeading } from "../components/dom.js";
import { icon } from "../components/icons.js";

export function renderSubpage(ctx, { heading, lead, backHash, content }) {
  const { actions } = ctx.t.common;
  const back = pageHref("home", { lang: ctx.lang, hash: backHash });

  return `
    <section class="section section-page">
      <div class="container">
        <a href="${back}" class="back-btn">${icon("arrowLeft", 1.8)} <span>${esc(actions.back)}</span></a>
        ${sectionHeading(heading, "h1")}
        <p class="page-lead">${esc(lead)}</p>
        ${content}
        <div class="center">
          <a href="${back}" class="btn btn-ghost">${icon("arrowLeft", 1.8)} <span>${esc(actions.backHome)}</span></a>
        </div>
      </div>
    </section>`;
}
