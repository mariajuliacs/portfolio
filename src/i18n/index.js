/**
 * i18n core: picks the language, loads its locale package and persists the choice.
 *
 * Language priority: ?lang= in the URL → saved choice → browser language → default.
 * Locale packages are loaded on demand (one request per language) and cached.
 */
import { LANGUAGES, DEFAULT_LANG, LANG_STORAGE_KEY } from "../config.js";

const cache = new Map();

export const isSupported = (code) => LANGUAGES.some((l) => l.code === code);

export const getLanguage = (code) =>
  LANGUAGES.find((l) => l.code === code) ?? LANGUAGES.find((l) => l.code === DEFAULT_LANG);

function readStorage() {
  try {
    return localStorage.getItem(LANG_STORAGE_KEY);
  } catch {
    return null; // storage blocked (private mode, strict settings)
  }
}

function writeStorage(code) {
  try {
    localStorage.setItem(LANG_STORAGE_KEY, code);
  } catch {
    /* ignore: the choice just won't be remembered */
  }
}

export function getInitialLang() {
  const fromUrl = new URLSearchParams(window.location.search).get("lang");
  if (isSupported(fromUrl)) return fromUrl;

  const saved = readStorage();
  if (isSupported(saved)) return saved;

  const browser = (navigator.language || "").slice(0, 2).toLowerCase();
  return isSupported(browser) ? browser : DEFAULT_LANG;
}

/** Saves the language and keeps the URL shareable (?lang=en; default language has no param). */
export function persistLang(code) {
  writeStorage(code);
  const url = new URL(window.location.href);
  if (code === DEFAULT_LANG) url.searchParams.delete("lang");
  else url.searchParams.set("lang", code);
  window.history.replaceState(null, "", url);
}

export async function loadLocale(code) {
  if (!cache.has(code)) {
    cache.set(code, import(`./locales/${code}/index.js`).then((m) => m.default));
  }
  return cache.get(code);
}

/**
 * Development helper: warns in the console when a locale is missing keys
 * that the default locale has (or has extra ones). Runs only on localhost.
 */
export async function validateLocales() {
  const host = window.location.hostname;
  if (host !== "localhost" && host !== "127.0.0.1") return;

  const reference = await loadLocale(DEFAULT_LANG);
  for (const { code } of LANGUAGES) {
    if (code === DEFAULT_LANG) continue;
    const other = await loadLocale(code);
    const problems = diffShape(reference, other);
    if (problems.length) {
      console.warn(`[i18n] "${code}" differs from "${DEFAULT_LANG}":\n- ${problems.join("\n- ")}`);
    }
  }
}

function diffShape(a, b, path = "") {
  const problems = [];
  if (Array.isArray(a) || Array.isArray(b)) {
    if (!Array.isArray(a) || !Array.isArray(b)) return [`${path}: type mismatch`];
    if (a.length !== b.length) problems.push(`${path}: ${a.length} vs ${b.length} items`);
    a.forEach((item, i) => {
      if (i < b.length) problems.push(...diffShape(item, b[i], `${path}[${i}]`));
    });
    return problems;
  }
  if (a && typeof a === "object") {
    if (!b || typeof b !== "object") return [`${path}: type mismatch`];
    const keys = new Set([...Object.keys(a), ...Object.keys(b)]);
    for (const key of keys) {
      const p = path ? `${path}.${key}` : key;
      if (!(key in b)) problems.push(`${p}: missing`);
      else if (!(key in a)) problems.push(`${p}: extra`);
      else problems.push(...diffShape(a[key], b[key], p));
    }
  }
  return problems;
}
