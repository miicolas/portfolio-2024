import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const { workExperiences } = {
  workExperiences: [
    {
      companyName: "Company Name",
      jobTitle: "Job Title",
      startDate: new Date(),
      endDate: new Date("2024-01-01"),
      description: "Description",
    },
    {
      companyName: "IIM Digital School",
      jobTitle: "Master Managment of Digital Transformation",
      startDate: new Date("2023-09"),
      endDate: new Date("2028-08"),
      description: "Master 2 in Management of Digital Transformation with ESILV x IIM Digital School. The main focus of this master is to learn how to manage a digital transformation in a company.",
    },
    {
      companyName: "Le Bon Sauveur",
      jobTitle: "Student ",
      startDate: new Date("2008-09"),
      endDate: new Date("2023-07"),
      description: "Baccalauréat général en informatique",
    },
  ],
}
