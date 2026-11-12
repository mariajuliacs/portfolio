/**
 * Site-wide configuration.
 * Supported languages are listed here; each `code` must have a matching
 * folder in `src/i18n/locales/<code>/`.
 */
export const LANGUAGES = [
  { code: "pt", label: "PT", htmlLang: "pt-BR", name: "Português" },
  { code: "en", label: "EN", htmlLang: "en", name: "English" },
];

export const DEFAULT_LANG = "pt";

/** localStorage key that remembers the visitor's language. */
export const LANG_STORAGE_KEY = "mj-lang";

/** Page ids (from <body data-page="...">) mapped to their files. */
export const PAGES = {
  home: "index.html",
  projects: "projects.html",
  education: "education.html",
};
