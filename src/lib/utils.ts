import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const { workExperiences } = {
  workExperiences: [
    {
      image: "/images/celest.webp",
      name_experience: "ABR CELEST",
      title: "Creative Designer",
      startDate: new Date("2024-02"),
      endDate: null,
      description:
        "I'm responsible for the design of social media posts and for the creation in the association ABR CELEST. I had the chance to work with clients and to understand their needs and to create a design that would meet the needs of the clients.",
    },
    {
      image: "/images/404_devinci.webp",
      name_experience: "404 Devinci",
      title: "President",
      startDate: new Date("2024-06"),
      endDate: null,
      description:
        "President of the association 404 Devinci which is an association that aims to help to learn web development and to learn web design by creating websites and web applications. We also work for the Pole Leonard de Vinci and the administration of the association.",
    },
  ],
};

export const { educationExperiences } = {
  educationExperiences: [
    {
      image: "/images/iim.webp",
      name_experience: "IIM Digital School",
      title: "Bachelor Project Management",
      startDate: new Date("2023-09"),
      endDate: null,
    },
    {
      image: "/images/lbs.webp",
      name_experience: "Le Bon Sauveur",
      title: "Baccalaureat in Computer Science x Mathematics",
      startDate: new Date("2008-09"),
      endDate: new Date("2023-07"),
    },
  ],
};

export const skills = [
  {
    name: "React",
  },
  {
    name: "Next.js",
  },
  {
    name: "TypeScript",
  },
  {
    name: "Tailwind CSS",
  },
  {
    name: "Node.js",
  },
  {
    name: "Express",
  },
  {
    name: "Python",
  },
  {
    name: "Supabase",
  },
  {
    name: "Figma",
  },
];

export const projects = [
  {
    name: "Learn404",
    description: "Learn404 is a website that helps to learn web development. ",
    image: "/images/projects/learn404.png",
    date: "Jan 2024 - Present",
    skills: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "Figma",
    ],
    website: true,
    github: false,
    websiteurl: "https://learn404.com",
    githuburl: null,
  },
  {
    name: "Harry Potter",
    description:
      "Harry Potter trading card game is a game that allows you to trade cards with other players.",
    image: "/images/projects/learn404.png",
    date: "Jan 2023 - May 2023",
    skills: ["HTML", "CSS", "JavaScript", "Node.js", "Express", "Prisma"],
    website: false,
    github: true,
    websiteurl: null,
    githuburl: "https://github.com/miicolas/CDI-HarryPotter",
  },
];

export const sideProjects = [
  {
    name: "npmBytes",
    type: "Web Development",
    description:
      "npmBytes is a plateform where you can find articles about web developement, design, and more. It's a project that I made to help me to learn more about web developement and to understand the basics of web developement with Astro",
    startDate: new Date("2023-03"),
    endDate: new Date("2023-06"),
    gitHubLink: "https://github.com/miicolas/npmBytes",
  },
  {
    name: "IOT Project",
    type: "Web Development",
    description:
      "This project is a discovery of the IOT world and to understand how to use the IoT devices and the sensors to create a project that can connect with a api and interact with the website",
    startDate: new Date("2024-04"),
    endDate: new Date("2024-04"),
    gitHubLink: "https://github.com/miicolas/Data-IOTB1",
  },
  {
    name: "Twitter clone",
    type: "Web Development",
    description:
      "The goal of the project is to create a clone of X, a social media platform with the help of the PHP and the SQL",
    startDate: new Date("2024-03"),
    endDate: new Date("2024-03"),
    gitHubLink: "https://github.com/miicolas/php-sql-B1",
  },
  {
    name: "Algorithmic Javascript",
    type: "Web Development",
    description:
      "This project is a discovery of the algorithmic world and to understand how to use the algorithm with the help of the Javascript language",
    startDate: new Date("2023-10"),
    endDate: new Date("2023-10"),
    gitHubLink: "https://github.com/miicolas/AlgorithmieJS-IIM-B1",
  },
 
  {
    name: "Ecoswing",
    type: "Hackathon - Web Development",
    description:
      "Ecoswing is a solution for the problem of the environment which offers eco-responsible turf for golf to reduce water consumption and to improve the quality of the water.",
    startDate: new Date("2024-03"),
    endDate: new Date("2024-06"),
    gitHubLink: "https://github.com/miicolas/ecoswing",
    apiLink: "https://github.com/miicolas/ecoswing-api",
  },
];
