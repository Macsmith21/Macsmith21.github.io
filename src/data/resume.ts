export type ResumeEntry = {
  title: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
};

export type SkillGroup = {
  group: string;
  items: string[];
};

export const resume = {
  pdf: "/resume.pdf",

  experience: [
    {
      title: "Data Scientist and AI Czar",
      org: "Vista Site Selection",
      place: "Columbus, OH (Remote)",
      dates: "May 2024 – Present",
      points: [
        "Company AI Czar: led Vista's adoption of AI, trained 3 teammates on APIs, AI tools, and AI-assisted development with a company-wide rollout underway, and built a multi-agent AI system that plans, codes, reviews, and ships work.",
        "Shipped 330+ merged pull requests across 23 company repositories in 2026, spanning client dashboards, data apps, the core platform, and infrastructure.",
        "Consulted on 20+ winning applications to Ohio's Transformational Mixed-Use Development (TMUD) tax credit program.",
        "Replaced Tableau and ArcGIS with in-house web dashboards, a company geo-server, and proprietary map hosting.",
        "Ran production and staging servers end to end: Linux administration, systemd services, deployments, a branch-based promote-to-production pipeline, and infrastructure-as-code in a single source-of-truth repo.",
        "Secured client dashboards and internal tools behind Cloudflare Access single sign-on, locked servers to a private Tailscale network, and managed secrets with encrypted, version-controlled config.",
        "Helped redesign the company website and led its migration from Wix to Cloudflare Pages with CI/CD, scheduled publishing, and bot protection.",
        "Administered PostgreSQL databases, including roles, access grants, and the data contracts behind client apps.",
        "Built and automated large-scale data pulls feeding client research across aerospace and defense, retail, and mixed-use development projects.",
        "Built authentication, admin tools, and Stripe billing for a client-facing segmentation app launching to paying customers, and contributed to Vista's in-house spatial-intelligence platform.",
      ],
    },
    {
      title: "Data Analyst Intern",
      org: "Vista Site Selection",
      place: "Columbus, OH",
      dates: "May 2023 – May 2024",
      points: [
        "Created 20+ dashboards and geo-visuals giving clients a view of property and industry data.",
        "Led development of the proprietary Compliance Reporting Tool.",
        "Scraped, cleaned, and organized 10+ large-scale datasets across client projects.",
        "Pioneered the company's geo-server and proprietary map hosting service.",
      ],
    },
    {
      title: "Head of Research, Stock Team",
      org: "Student Managed Investment Fund",
      place: "Columbia, SC",
      dates: "Jan 2024 – May 2024",
      points: [
        "Led research for the stock team of a $1.5M student-managed investment trust spanning ETFs, equities, and commodities.",
        "Directed evaluation of current holdings and vetted new investment pitches before they went to the fund.",
      ],
    },
    {
      title: "Barback / Busser",
      org: "Crooked Can Brewing Company",
      place: "Hilliard, OH",
      dates: "May 2023 – Aug 2023",
      points: [],
    },
    {
      title: "Utility / Food Runner",
      org: "North High Brewing Company",
      place: "Dublin, OH",
      dates: "May 2022 – Aug 2022",
      points: [],
    },
  ] as ResumeEntry[],

  education: [
    {
      title: "BS Business Administration",
      org: "Darla Moore School of Business, University of South Carolina",
      place: "Columbia, SC",
      dates: "May 2024",
      points: [
        "Finance major, Computer Science minor, Business Analytics concentration. GPA 3.6.",
        "President's List (2), Dean's List (5), Capstone Scholar.",
      ],
    },
  ] as ResumeEntry[],

  skills: [
    {
      group: "AI",
      items: ["AI-assisted development", "Multi-agent systems", "Claude Code", "LLM APIs", "Prompt and workflow design"],
    },
    {
      group: "Data",
      items: ["Python", "SQL", "PostgreSQL", "DuckDB", "R", "Web scraping", "API integration", "Alteryx", "Excel / Power Query"],
    },
    {
      group: "Maps and BI",
      items: ["QGIS", "ArcGIS Pro", "Web mapping", "Tableau", "Power BI"],
    },
    {
      group: "Infrastructure",
      items: ["Linux", "Unix", "systemd", "Cloudflare (Pages, Access, Workers)", "Tailscale", "CI/CD", "GitHub Actions", "Secrets management"],
    },
    {
      group: "Web and code",
      items: ["Git / GitHub", "JavaScript / TypeScript", "Node.js", "Next.js", "Astro", "HTML / CSS", "Java", "Auth0", "Stripe"],
    },
  ] as SkillGroup[],

  projects: [
    {
      title: "Personal AI agent system",
      org: "Hub-and-spoke Claude Code agents",
      place: "GitHub",
      dates: "2026",
      points: [
        "Designed a routing hub plus specialist agents for coding, infrastructure, data analysis, research, review, and email, each with scoped tools and guardrails.",
        "Built in rules for review before merge, read-only lanes, and model fallback, versioned and installed from one repo.",
      ],
    },
    {
      title: "Home lab",
      org: "Self-hosted Linux server",
      place: "Personal",
      dates: "2026",
      points: [
        "Run a home media server.",
        "Host a dedicated Counter-Strike 2 game server for friends.",
      ],
    },
    {
      title: "Personal website",
      org: "macsmith21.github.io",
      place: "GitHub Pages",
      dates: "2026",
      points: ["This site: Astro, built with AI-assisted development, deployed by GitHub Actions."],
    },
  ] as ResumeEntry[],

  community: [
    {
      title: "Congregant, Volunteer",
      org: "Indian Run United Methodist Church",
      place: "Dublin, OH",
      dates: "2002 – Present",
      points: ["Breakfast service for neighbors in need, Welcome Warehouse, and Toys for Tots drives."],
    },
  ] as ResumeEntry[],
};
