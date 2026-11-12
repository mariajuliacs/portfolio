/**
 * Entry point. Renders the current page (from <body data-page="...">)
 * in the selected language and wires up the UI.
 *
 * Flow: pick language → load locale package → render header/main/footer/modal
 *       → attach observers. Switching language re-renders in place.
 */
import { getInitialLang, getLanguage, loadLocale, persistLang, validateLocales } from "./i18n/index.js";
import { renderHeader } from "./components/header.js";
import { renderFooter } from "./components/footer.js";
import { renderModal } from "./components/modal.js";
import { renderHomePage } from "./pages/home.js";
import { renderProjectsPage } from "./pages/projects.js";
import { renderEducationPage } from "./pages/education.js";
import { initMobileMenu, observeActiveSection } from "./ui/nav.js";
import { initTabs } from "./ui/tabs.js";
import { initModal } from "./ui/modal.js";
import { observeReveal } from "./ui/reveal.js";

const PAGE_RENDERERS = {
  home: renderHomePage,
  projects: renderProjectsPage,
  education: renderEducationPage,
};

const page = document.body.dataset.page;
const slots = {
  header: document.getElementById("site-header"),
  main: document.getElementById("main"),
  footer: document.getElementById("site-footer"),
  modal: document.getElementById("modal-root"),
  skip: document.querySelector(".skip-link"),
};

let currentLang = null;
let cleanups = [];

function updateHead(ctx) {
  const { title, description } = ctx.t.common.meta[page];
  document.documentElement.lang = getLanguage(ctx.lang).htmlLang;
  document.title = title;
  document.querySelector('meta[name="description"]')?.setAttribute("content", description);
  document.querySelector('meta[property="og:title"]')?.setAttribute("content", title);
  document.querySelector('meta[property="og:description"]')?.setAttribute("content", description);
}

async function render(lang, { firstRender = false } = {}) {
  const t = await loadLocale(lang);
  const ctx = { lang, t, page };

  cleanups.forEach((fn) => fn());
  updateHead(ctx);
  slots.skip.textContent = t.common.a11y.skipToContent;
  slots.header.innerHTML = renderHeader(ctx);
  slots.main.innerHTML = PAGE_RENDERERS[page](ctx);
  slots.footer.innerHTML = renderFooter(ctx);
  slots.modal.innerHTML = renderModal(ctx);

  cleanups = [observeActiveSection(), observeReveal({ animate: firstRender })];
  currentLang = lang;
}

async function switchLanguage(lang) {
  if (lang === currentLang) return;
  const scrollY = window.scrollY;
  persistLang(lang);
  await render(lang);
  window.scrollTo({ top: scrollY, behavior: "instant" });
  document.querySelector(`.lang-switch [data-lang="${lang}"]`)?.focus();
}

function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1));
  if (id) document.getElementById(id)?.scrollIntoView({ behavior: "instant" });
}

async function start() {
  if (!PAGE_RENDERERS[page]) {
    console.error(`[main] unknown page "${page}"`);
    return;
  }

  initMobileMenu();
  initTabs();
  initModal();
  document.addEventListener("click", (event) => {
    const button = event.target.closest(".lang-switch [data-lang]");
    if (button) switchLanguage(button.dataset.lang);
  });

  const lang = getInitialLang();
  persistLang(lang);
  await render(lang, { firstRender: true });
  scrollToHash();
  validateLocales();
}

start();
