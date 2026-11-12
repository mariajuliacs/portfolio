/** Home hero: name, pitch, calls to action and stat cards. */
import { PROFILE } from "../data/profile.js";
import { STATS } from "../data/stats.js";
import { esc, list } from "./dom.js";
import { icon } from "./icons.js";

const statCard = (stat, text) => `
  <article class="stat-card">
    <div class="stat-icon">${icon(stat.icon)}</div>
    <p class="stat-label">${esc(text.label)}</p>
    <p class="stat-value">${esc(stat.value)}</p>
    <p class="stat-sub">${esc(text.sub)}</p>
  </article>`;

export function renderHero(ctx) {
  const { hero, stats } = ctx.t.home;
  return `
    <section id="home" class="section section-hero">
      <div class="container hero-grid">
        <div>
          <p class="eyebrow">${esc(hero.eyebrow)}</p>
          <h1 class="hero-title">
            ${esc(PROFILE.firstName.toUpperCase())}
            <span class="grad">${esc(PROFILE.middleName.toUpperCase())}</span>
          </h1>
          <p class="hero-lead">${esc(hero.lead)}</p>
          <div class="hero-cta">
            <a href="#contact" class="btn btn-primary">${esc(hero.ctaContact)} <span aria-hidden="true">→</span></a>
            <a href="#projects" class="btn btn-ghost">${esc(hero.ctaProjects)}</a>
          </div>
        </div>
        <div class="hero-stats">
          ${list(STATS, (stat) => statCard(stat, stats[stat.id]))}
        </div>
      </div>
    </section>`;
}
