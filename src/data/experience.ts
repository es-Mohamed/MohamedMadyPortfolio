export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "backend-intern",
    title: "Backend Developer Intern",
    company: "[Placeholder Company]",
    period: "Jan 2025 – Present",
    description: "Worked on backend API development, database optimization, debugging, and building logic for scalable engineering-related applications.",
  },
  {
    id: "chem-trainee",
    title: "Chemical Engineering Trainee",
    company: "[Placeholder Plant/Factory]",
    period: "Jul 2024 – Sep 2024",
    description: "Performed chemical process simulation tasks, helped analyze industrial data logs, and supported workflow improvements.",
  },
];
