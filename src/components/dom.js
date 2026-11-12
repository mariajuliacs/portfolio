/**
 * Small helpers shared by the components.
 * Every text that comes from data or locales goes through `esc()` before
 * reaching innerHTML, so content can never inject markup.
 */
import { DEFAULT_LANG, PAGES } from "../config.js";

const ESCAPES = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" };

export const esc = (value = "") => String(value).replace(/[&<>"']/g, (c) => ESCAPES[c]);

/** Joins a list of HTML strings. */
export const list = (items, render) => items.map(render).join("");

/** "Title <span class="grad">highlight</span>" from a { title, highlight } pair. */
export const titleWithHighlight = ({ title, highlight }) =>
  `${esc(title)} <span class="grad">${esc(highlight)}</span>`;

/**
 * Link to a page of the site, keeping the current language in the URL
 * (so the choice survives even when localStorage is unavailable).
 */
export function pageHref(pageId, { lang, hash = "" } = {}) {
  const file = PAGES[pageId];
  const query = lang && lang !== DEFAULT_LANG ? `?lang=${lang}` : "";
  return `${file}${query}${hash ? `#${hash}` : ""}`;
}

/** Link to a section: same-page anchor on the home page, full link elsewhere. */
export const sectionHref = (sectionId, ctx) =>
  ctx.page === "home" ? `#${sectionId}` : pageHref("home", { lang: ctx.lang, hash: sectionId });

/** Section eyebrow + title block. */
export const sectionHeading = ({ eyebrow, ...title }, tag = "h2") =>
  `<p class="eyebrow">${esc(eyebrow)}</p>
   <${tag} class="section-title">${titleWithHighlight(title)}</${tag}>`;
