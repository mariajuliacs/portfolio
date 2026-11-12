/** Professional experience timeline. */
import { esc, list, sectionHeading } from "./dom.js";

const timelineItem = (job) => `
  <li class="timeline-item">
    <div class="timeline-dot" aria-hidden="true"></div>
    <article class="timeline-card">
      <header class="timeline-head">
        <div>
          <h3 class="timeline-role">${esc(job.role)}</h3>
          <p class="timeline-company">${esc(job.company)}</p>
        </div>
        <div class="timeline-meta">
          <span class="timeline-date">${esc(job.period)}</span>
          <span class="badge${job.current ? " badge-active" : ""}">${esc(job.badge)}</span>
        </div>
      </header>
      ${job.description ? `<p class="timeline-desc">${esc(job.description)}</p>` : ""}
      <ul class="bullets">
        ${list(job.bullets, (b) => `<li>${esc(b)}</li>`)}
      </ul>
    </article>
  </li>`;

export function renderExperience(ctx) {
  return `
    <section id="experience" class="section">
      <div class="container">
        ${sectionHeading(ctx.t.home.sections.experience)}
        <ol class="timeline">
          ${list(ctx.t.experience.items, timelineItem)}
        </ol>
      </div>
    </section>`;
}
