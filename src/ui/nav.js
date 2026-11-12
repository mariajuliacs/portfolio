/**
 * Header behaviour.
 * - initMobileMenu(): bound once with event delegation (survives re-renders).
 * - observeActiveSection(): highlights the nav link of the visible section;
 *   returns a cleanup function to call before the next render.
 */
export function initMobileMenu() {
  document.addEventListener("click", (event) => {
    const nav = document.querySelector(".nav");
    const toggle = nav?.querySelector(".nav-toggle");
    if (!nav || !toggle) return;

    if (event.target.closest(".nav-toggle")) {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
    } else if (event.target.closest(".nav-links a") || !event.target.closest(".nav")) {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}

export function observeActiveSection() {
  const sections = document.querySelectorAll("main section[id]");
  const links = document.querySelectorAll(".nav-links a[data-section]");
  if (!sections.length) return () => {};

  const setActive = (id) =>
    links.forEach((link) => {
      const active = link.dataset.section === id;
      link.classList.toggle("is-active", active);
      if (active) link.setAttribute("aria-current", "true");
      else link.removeAttribute("aria-current");
    });

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    },
    { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.25, 0.6] }
  );
  sections.forEach((s) => observer.observe(s));
  return () => observer.disconnect();
}
