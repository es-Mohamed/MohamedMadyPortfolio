export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  description: string;
}

export const experiences: Experience[] = [
  {
    id: "backend-developer",
    title: "Backend Developer",
    company: "Faster (Auto Parts E-Commerce)",
    period: "Jan 2024 – Present", 
    description: "Spearheaded the backend development of a scalable e-commerce platform using Python and Django. Designed RESTful APIs, optimized PostgreSQL databases, and developed automated data pipelines to extract and analyze business metrics.",
  },
  {
    id: "chem-data-analyst",
    title: "Process Engineering Trainee",
    company: "GUPCO - Gulf of Suez Petroleum",
    period: "Jul 2024 – Sep 2024",
    description: "Analyzed large sets of industrial data logs to optimize chemical processes. Applied strong analytical problem-solving to simulate workflows, identify bottlenecks, and propose data-driven efficiency improvements.",
  }
];
