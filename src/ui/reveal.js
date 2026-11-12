/**
 * Fade-in on scroll. On re-renders (language switch) elements are shown
 * immediately so the page doesn't "blink". Returns a cleanup function.
 */
const TARGETS = [
  ".eyebrow",
  ".section-title",
  ".hero-title",
  ".hero-lead",
  ".hero-cta",
  ".stat-card",
  ".project-card",
  ".timeline-item",
  ".edu-card",
  ".about-card",
  ".contact-list li",
].join(",");

export function observeReveal({ animate }) {
  const elements = document.querySelectorAll(TARGETS);
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!animate || reduceMotion || !("IntersectionObserver" in window)) {
    return () => {};
  }

  elements.forEach((el) => el.classList.add("reveal"));
  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      }),
    { threshold: 0.12 }
  );
  elements.forEach((el) => observer.observe(el));
  return () => observer.disconnect();
}
