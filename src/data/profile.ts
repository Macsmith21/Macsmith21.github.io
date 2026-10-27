export type MusicPick = {
  title: string;
  artist: string;
  spotify?: string;
  appleMusic?: string;
};

export type GalleryPhoto = {
  src: string;
  alt: string;
};

export const profile = {
  name: "Mac Smith",
  fullName: "Theodore M. Smith",
  oneLiner: "Data, maps, and the infrastructure underneath them.",
  location: "Dublin, OH",
  email: "smithmac405@gmail.com",

  bio: [
    "I'm Mac. I like turning messy data into something people can actually look at, usually a map, a dashboard, or a small tool that saves someone an afternoon.",
    "Since 2023 I've been at Vista Site Selection in Columbus. I started on dashboards and geo-visuals, built our Compliance Reporting Tool, spent a lot of hours scraping and cleaning data, stood up the company geo-server and map hosting, and eventually ran production infrastructure.",
    "Now I'm shifting toward business and data science work for my own clients, coaching people on AI workflows, and the cross-team projects that never fit neatly in one lane.",
  ],

  now: "Taking on business and data science projects. Say hello.",

  facts: [
    { label: "Based in", value: "Dublin, Ohio" },
    { label: "Work", value: "Vista Site Selection, since 2023" },
    {
      label: "Studied",
      value:
        "USC Darla Moore School of Business, BS Business Administration in Finance, CS minor, Business Analytics concentration, 2024",
    },
  ],

  skills: [
    "Python",
    "SQL",
    "R",
    "JavaScript",
    "QGIS",
    "ArcGIS",
    "Tableau",
    "Power BI",
    "Linux",
    "Infrastructure",
  ],

  links: {
    linkedin: "https://www.linkedin.com/in/theodoremsmith/",
    github: "https://github.com/Macsmith21",
    resume: "/resume.pdf",
    spotify: "",
    appleMusic: "",
    letterboxd: "",
    instagram: "",
    strava: "",
    goodreads: "",
    coursework: "/CSCE242/index.html",
  },

  letterboxdUsername: "",

  music: [] as MusicPick[],

  photos: {
    portrait: "/images/portrait.jpg",
    portraitAlt: "Portrait of Mac Smith",
    gallery: [] as GalleryPhoto[],
  },
};

export type Profile = typeof profile;
