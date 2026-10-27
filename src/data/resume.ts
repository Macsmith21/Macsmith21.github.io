export type ResumeEntry = {
  title: string;
  org: string;
  place: string;
  dates: string;
  points: string[];
};

export const resume = {
  pdf: "",

  experience: [
    {
      title: "Intern / Analyst",
      org: "Vista Site Selection",
      place: "Columbus, OH",
      dates: "May 2023 – Present",
      points: [
        "Created 20+ dashboards and geo-visuals for clients to view data on properties and industries.",
        "Led development of the proprietary Compliance Reporting Tool.",
        "Scraped, cleaned, and organized 10+ large-scale datasets across projects.",
        "Pioneered company geo-server hosting and a proprietary map hosting service.",
      ],
    },
    {
      title: "Stock Team Member",
      org: "Student Managed Investment Fund",
      place: "Columbia, SC",
      dates: "Jan 2024 – May 2024",
      points: [
        "Co-managed a $1.5M investment trust across ETFs, equities, and commodities.",
        "Evaluated holdings and pitched new investments to the fund.",
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
    "Python",
    "SQL",
    "R",
    "Java",
    "JavaScript",
    "HTML / CSS",
    "Unix",
    "QGIS",
    "ArcGIS Pro",
    "Alteryx",
    "Tableau",
    "Power BI",
    "Excel / Power Query",
  ],

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
