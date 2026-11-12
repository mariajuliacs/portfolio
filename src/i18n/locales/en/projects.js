/**
 * Project strings (en).
 * Keys in `items` match the ids in src/data/projects.js.
 */
export default {
  page: {
    eyebrow: "// portfolio · projects",
    title: "All",
    highlight: "Projects",
    lead:
      "Projects built in the Data & Automation department at Grupo Vilarouca — from data pipelines to web applications in production.",
  },

  featured: {
    tag: "featured project",
    title: "Incentive & Commission Engine",
    metrics: [
      { value: "1 day", label: "to launch an incentive (was ~1 month)" },
      { value: "200+", label: "people impacted" },
      { value: "~15k", label: "lines of code", pageOnly: true },
    ],
  },

  items: {
    incentives: {
      tag: "web application · 2026",
      title: "Incentive & Commission Engine",
      summary:
        "Internal web system to create, approve and track incentives and commissions, built from requirements gathering to deployment. It replaced a spreadsheet-based process, with role-based access control, a three-step approval workflow and a calculation engine configurable by end users.",
      description:
        "Internal web system to create, approve and track incentives and commissions, built entirely by me, from requirements gathering to deployment.",
      highlights: [
        "FastAPI (Python) backend with PostgreSQL, containerized with Docker; roughly 15,000 lines of code.",
        "Two-database architecture: the application's own database plus a read-only connection to the sales database, preserving the integrity of the data source.",
        "Access control with three permission roles, bcrypt password hashing and an audit trail.",
        "Three-step approval workflow (draft, pending, approved) with automatic email notifications and Excel exports.",
        "Calculation engine configurable by end users, allowing incentive and commission rules to be built without code changes.",
      ],
    },
    pipelines: {
      tag: "data engineering",
      title: "ETL/ELT Pipelines — 3 ERPs",
      summary:
        "8 pipelines in Python and SQL integrating three ERPs, APIs, web scraping and spreadsheets into PostgreSQL, with daily D-1 loads and history since 2024.",
      description:
        "8 pipelines in Python and SQL integrating three ERP systems, APIs, web scraping and spreadsheets into PostgreSQL, with daily D-1 loads of historical data since 2024, serving more than 200 business users.",
    },
    reportAutomation: {
      tag: "automation",
      title: "Operational Report Extraction",
      summary:
        "Python and Playwright automation that cut processing time from 20 to 2 minutes (-90%), scheduled with Apache Airflow.",
      description:
        "Python and Playwright automation that cut processing time from 20 to 2 minutes (-90%). Scheduled with Apache Airflow, which I proposed adopting in the department.",
    },
    dashboards: {
      tag: "analytics",
      title: "Power BI Dashboards",
      summary:
        "5 dashboards for Logistics, Sales, HR and Leadership. The discount analysis supported measures that reduced the indicator by more than 20%.",
      description:
        "5 dashboards for Logistics, Sales, HR/Payroll and Executive leadership. The commercial discount analysis supported measures that reduced the indicator by more than 20%.",
    },
    deliveryMonitoring: {
      tag: "automation · logistics",
      title: "Delivery Flow Monitoring",
      summary:
        "Order report automations and a delivery-flow monitoring dashboard for Procurement and Logistics, tracking suppliers' delivery schedules and supporting stock-out control. It replaced most manual spreadsheet controls.",
    },
    postgres: {
      tag: "databases",
      title: "PostgreSQL Environment",
      summary:
        "Maintaining, with the team, an environment of about 50 tables, covering relational modeling, standardization and data cleansing.",
    },
  },
};
