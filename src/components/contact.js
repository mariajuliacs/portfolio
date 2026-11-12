/** Contact section: availability, résumé download and contact channels. */
import { PROFILE } from "../data/profile.js";
import { esc, sectionHeading } from "./dom.js";
import { icon } from "./icons.js";

function contactItem({ iconName, label, value, href, external, ctaLabel }) {
  const target = external ? ' target="_blank" rel="noopener noreferrer"' : "";
  const valueHtml = href
    ? `<a class="contact-value" href="${esc(href)}"${target}>${esc(value)}</a>`
    : `<span class="contact-value">${esc(value)}</span>`;
  const cta = href
    ? `<a href="${esc(href)}"${target} class="contact-cta" aria-label="${esc(ctaLabel)}"><span aria-hidden="true">↗</span></a>`
    : "";
  return `
    <li>
      <span class="contact-icon">${icon(iconName)}</span>
      <div>
        <p class="contact-label">${esc(label)}</p>
        ${valueHtml}
      </div>
      ${cta}
    </li>`;
}

export function renderContact(ctx) {
  const { contact, sections } = ctx.t.home;
  const { actions, a11y } = ctx.t.common;
  const resume = PROFILE.resume[ctx.lang] ?? PROFILE.resume.pt;

  return `
    <section id="contact" class="section">
      <div class="container contact-grid">
        <div>
          ${sectionHeading(sections.contact)}
          <p class="hero-lead">${esc(contact.lead)}</p>
          <div class="contact-actions">
            <span class="status-pill"><span class="pulse" aria-hidden="true"></span> ${esc(contact.status)}</span>
            <a href="${esc(resume.file)}" class="cv-link" download="${esc(resume.downloadName)}"
              type="application/pdf" hreflang="${ctx.lang}">
              ${icon("download", 1.8)} ${esc(actions.downloadResume)}
            </a>
          </div>
        </div>
        <ul class="contact-list">
          ${contactItem({
            iconName: "mail",
            label: contact.labels.email,
            value: PROFILE.email,
            href: `mailto:${PROFILE.email}`,
            ctaLabel: a11y.sendEmail,
          })}
          ${contactItem({
            iconName: "github",
            label: contact.labels.github,
            value: PROFILE.github.label,
            href: PROFILE.github.url,
            external: true,
            ctaLabel: a11y.openGithub,
          })}
          ${contactItem({
            iconName: "linkedin",
            label: contact.labels.linkedin,
            value: PROFILE.linkedin.label,
            href: PROFILE.linkedin.url,
            external: true,
            ctaLabel: a11y.openLinkedin,
          })}
          ${contactItem({ iconName: "pin", label: contact.labels.location, value: contact.location })}
        </ul>
      </div>
    </section>`;
}
