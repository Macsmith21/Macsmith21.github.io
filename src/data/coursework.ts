export type CourseworkItem = {
  title: string;
  blurb: string;
  href: string;
  image: string;
};

export const coursework = {
  course: "CSCE 242: Web Applications",
  school: "University of South Carolina",
  summary: "Front-end and back-end web development, from plain HTML to Node and Express apps deployed on Render.",
  all: "/CSCE242/index.html",

  highlights: [
    {
      title: "Final Project",
      blurb: "Multi-page media site with a Node and Express backend",
      href: "https://finalproject-by5g.onrender.com",
      image: "/CSCE242/images/FinalImage.png",
    },
    {
      title: "Server-side Forms",
      blurb: "Express form handling and validation",
      href: "/CSCE242/project/part%203/contactPage/index.html",
      image: "/CSCE242/images/part6.png",
    },
    {
      title: "Assignment 18",
      blurb: "Crafts buy-and-sell app with full CRUD",
      href: "https://assignment18-n24g.onrender.com/",
      image: "/CSCE242/images/Assign18.png",
    },
    {
      title: "Assignment 12",
      blurb: "Building pages from JSON",
      href: "/CSCE242/assignments/12/index.html",
      image: "/CSCE242/images/assign12.png",
    },
    {
      title: "Assignment 11",
      blurb: "Array-driven modals",
      href: "/CSCE242/assignments/11/index.html",
      image: "/CSCE242/images/assign11.png",
    },
    {
      title: "Assignment 10",
      blurb: "Rendering HTML from JavaScript arrays",
      href: "/CSCE242/assignments/10/index.html",
      image: "/CSCE242/images/assign10.png",
    },
  ] as CourseworkItem[],
};
