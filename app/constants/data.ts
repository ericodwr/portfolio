import { Contact, Project } from "@/app/types";

export const iconData: string[] = [
  "nextjs",
  "angularjs",
  "react",
  "js",
  "tailwindcss",
  "redux",
  "nodejs",
  "springboot",
  "prisma",
];

export const contactsData: Contact[] = [
  {
    imgUrl: "ig",
    link: "https://www.instagram.com/ericodwr?igsh=NWcxZmNmNXkxZnBv&utm_source=qr",
  },
  { imgUrl: "linkedin", link: "https://www.linkedin.com/in/ericodwir/" },
  { imgUrl: "github", link: "https://github.com/ericodwr" },
];

export const projects: Project[][] = [
  [
    {
      title: "Busana90s",
      tech: ["Next Js", "Express JS", "MySQL"],
      imgUrl: "projects/busana90s.svg",
      large: false,
      link: "https://busana90s.shop/",
    },
    {
      title: "Mitra Lancar",
      tech: ["Next Js", "Tailwind CSS"],
      imgUrl: "projects/mitralancar.svg",
      large: true,
      link: "https://mitralancar.com/",
    },
  ],
  [
    {
      title: "Job Finder",
      tech: ["Angular JS", "Spring Boot", "PostgreSQL"],
      imgUrl: "projects/jobfinder.svg",
      large: true,
      link: "https://github.com/orgs/jera-work/repositories",
    },
    {
      title: "Bootcamp Test",
      tech: ["Angular JS", "Spring Boot", "PostgreSQL"],
      imgUrl: "projects/bootcamp.svg",
      large: false,
      link: "https://github.com/ericodwr/bootcamp",
    },
  ],
  [
    {
      title: "Crownsco",
      tech: ["React Js", "Redux", "Firebase"],
      imgUrl: "projects/crowns.svg",
      large: false,
      link: "https://crowns-clot.netlify.app/",
    },
    {
      title: "Open Table",
      tech: ["Next Js", "Prisma", "Tailwind CSS"],
      imgUrl: "projects/openTable.svg",
      large: true,
      link: "https://open-table-sigma.vercel.app/",
    },
  ],
];
