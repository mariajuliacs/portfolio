/**
 * Education, certificates and languages (language-independent data).
 * Texts live in `locales/<lang>/education.js` → `items.<id>`.
 *
 * - icon:      icon name from src/components/icons.js
 * - certImage: image path (e.g. "assets/img/certs/file.jpg");
 *              leave "" to show "certificate unavailable" in the viewer
 * - status:    "completed" | "in-progress" (in-progress gets a green badge)
 * - main:      large card on the home page
 * - onHome:    also listed on the home page
 */
export const EDUCATION = {
  academic: [
    { id: "ads", icon: "graduation", certImage: "", status: "completed", main: true, onHome: true },
    { id: "dataAnalytics", icon: "chart", certImage: "", status: "in-progress", main: true, onHome: true },
  ],

  /**
   * Add certificates here, e.g.:
   * { id: "powerBi", icon: "award", certImage: "assets/img/certs/power-bi.jpg", onHome: true },
   */
  certificates: [],

  languages: [
    { id: "langPt", icon: "globe", certImage: "", onHome: true },
    { id: "langEn", icon: "globe", certImage: "", onHome: true },
  ],

  learning: [
    { id: "learning", icon: "book", certImage: "", onHome: true },
  ],
};
