/**
 * Projects (language-independent data).
 * Texts live in `locales/<lang>/projects.js` → `items.<id>`.
 *
 * - stack:  technologies shown as chips
 * - repo:   GitHub URL; leave "" to show "repository unavailable"
 * - wide:   card spans two columns
 * - onHome: also listed on the home page (in this order)
 */
export const PROJECTS = [
  {
    id: "incentives",
    stack: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    pageStack: ["Python", "FastAPI", "PostgreSQL", "Docker", "bcrypt"],
    repo: "https://github.com/mariajuliacs/commission-incentive-engine",
    wide: true,
    onHome: true,
  },
  {
    id: "pipelines",
    stack: ["Python", "SQL", "PostgreSQL", "Web Scraping"],
    repo: "",
    onHome: true,
  },
  {
    id: "reportAutomation",
    stack: ["Python", "Playwright", "Airflow"],
    repo: "",
    onHome: true,
  },
  {
    id: "dashboards",
    stack: ["Power BI", "DAX", "Power Query"],
    repo: "",
    onHome: true,
  },
  {
    id: "deliveryMonitoring",
    stack: ["Python", "Power Automate", "Power BI"],
    repo: "",
    wide: true,
  },
  {
    id: "postgres",
    stack: ["PostgreSQL", "SQL", "DBeaver"],
    repo: "",
  },
];

/** Project shown in the gradient "featured" card, placed after the first card. */
export const FEATURED_PROJECT_ID = "incentives";
