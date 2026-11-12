/** Site header: brand · navigation · language switch · mobile menu button. */
import { LANGUAGES } from "../config.js";
import { esc, list, pageHref, sectionHref } from "./dom.js";

const NAV_SECTIONS = ["home", "tech", "projects", "experience", "education", "about", "contact"];

export const brand = (tag = "span") =>
  `<${tag} class="brand"><span class="brand-text">MJ<span class="brand-accent">.data</span></span></${tag}>`;

function langSwitch(ctx) {
  const { a11y } = ctx.t.common;
  return `
    <div class="lang-switch" role="group" aria-label="${esc(a11y.language)}">
      ${list(
        LANGUAGES,
        (l) => `<button type="button" data-lang="${l.code}" lang="${l.htmlLang}"
          aria-pressed="${l.code === ctx.lang}" title="${esc(l.name)}">${esc(l.label)}</button>`
      )}
    </div>`;
}

export function renderHeader(ctx) {
  const { nav, a11y } = ctx.t.common;
  const homeHref = ctx.page === "home" ? "#home" : pageHref("home", { lang: ctx.lang });

  return `
    <div class="nav-inner">
      <a href="${homeHref}" class="brand-link" aria-label="MJ.data — ${esc(nav.home)}">${brand()}</a>
      <nav class="nav-links" id="nav-links" aria-label="${esc(a11y.mainNav)}">
        ${list(NAV_SECTIONS, (id) => `<a href="${sectionHref(id, ctx)}" data-section="${id}">${esc(nav[id])}</a>`)}
      </nav>
      <div class="nav-actions">
        ${langSwitch(ctx)}
        <button class="nav-toggle" type="button" aria-label="${esc(a11y.openMenu)}"
          aria-controls="nav-links" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>`;
}
