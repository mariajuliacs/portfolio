/** Site footer: brand, role and social links. */
import { PROFILE } from "../data/profile.js";
import { esc } from "./dom.js";
import { brand } from "./header.js";
import { icon } from "./icons.js";

export function renderFooter(ctx) {
  const { footer, a11y } = ctx.t.common;
  return `
    <div class="container footer-inner">
      <div>
        ${brand("p")}
        <p class="footer-sub">${esc(PROFILE.name)} — ${esc(footer.role)}</p>
      </div>
      <div class="footer-icons" role="group" aria-label="${esc(a11y.social)}">
        <a href="${PROFILE.github.url}" target="_blank" rel="noopener noreferrer" aria-label="GitHub">${icon("github")}</a>
        <a href="${PROFILE.linkedin.url}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">${icon("linkedin")}</a>
        <a href="mailto:${PROFILE.email}" aria-label="${esc(a11y.sendEmail)}">${icon("mail")}</a>
      </div>
    </div>`;
}
