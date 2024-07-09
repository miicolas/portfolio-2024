import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const { workExperiences } = {
  workExperiences: [

    {
      image: "/images/celest.webp",
      companyName: "ABR CELEST",
      jobTitle: "Creative Designer",
      startDate: new Date("2024-02"),
      endDate: new Date("2025-06"),
      description: "I was responsible for the design of social media posts and for the creation in the association ABR CELEST. I had the chance to work with clients and to understand their needs and to create a design that would meet the needs of the clients.",
    },
    {
      image: "/images/404_devinci.webp",
      companyName: "404 Devinci",
      jobTitle: "President",
      startDate: new Date("2024-06"),
      endDate: new Date("2025-06"),
      description: "President of the association 404 Devinci which is an association that aims to help to learn web development and to learn web design by creating websites and web applications. We also work for the Pole Leonard de Vinci and the administration of the association.",
    },
    
    {
      image: "/images/iim.webp",
      companyName: "IIM Digital School",
      jobTitle: "Bachelor Project Management",
      startDate: new Date("2023-09"),
      endDate: new Date("2026-08"),
      description: "Bachelor Project Management with the IIM Digital School in Paris suburbs. During my studies, I was able to learn about the basics of project management, development basics, and some frameworks in web development. I als o had the chance to work with some enterprises to understand the needs of the clients and to develop a solution that would meet the needs of the clients.",
    },
    {
      image: "/images/lbs.webp",
      companyName: "Le Bon Sauveur",
      jobTitle: "Baccalaureat in Computer Science x Mathematics",
      startDate: new Date("2008-09"),
      endDate: new Date("2023-07"),
      description: "Baccalauréat in Computer Science and Mathematics with the Lycée Le Bon Sauveur in Paris suburbs. During my studies, I was able to learn about the basics of programming, data structures, algorithms, and basics of mathematics.",
    },
  ],
}
