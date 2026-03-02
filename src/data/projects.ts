export interface Project {
  id: string;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  link?: string;
  image?: string;
  github?: string;
  demo?: string;
}

export const projects: Project[] = [
  {
    id: "puddle",
    title: "inventorysystem-local",
    period: "Apr 2025 – May 2025",
    description: "A fully functional Django-based e-commerce platform with user accounts, product management, shopping cart, and admin tools.",
    technologies: ["Django", "Python", "SQLite", "HTML", "tailwindcss", "typeScript"],
    image: "/images/image_one.png",
    github: "https://github.com/es-Mohamed/premium-inventory-pos",
    demo: "https://inventorysystem-lime.vercel.app/",
  },
  {
    id: "data-analysis",
    title: "Technical Data Analysis",
    period: "2024",
    description: "Data analysis project on engineering datasets for pattern recognition and optimization.",
    technologies: ["Python", "Pandas", "NumPy", "Matplotlib"],
    image: "/images/image_four.png",
    github: "https://github.com/es-Mohamed/khoutwa-luxury-boutique",
    demo: "https://khoutwa.vercel.app/",
  },
  {
    id: "process-simulation",
    title: "Chemical Process Simulation",
    period: "2024",
    description: "Simulation of chemical systems using engineering principles and data methods.",
    technologies: ["Python", "Chemical Engineering", "Data Analysis"],
    image: "/images/image_three.png",
    github: "https://github.com/es-Mohamed/ecommerce-sales-etl-pipeline",
    // demo: "https://example.com/process-simulation",
  },
  {
    id: "js-projects",
    title: "JavaScript Mini Projects",
    period: "2024",
    description: "Interactive components built for practice and UI development.",
    technologies: ["JavaScript", "HTML", "CSS", "DOM Manipulation"],
    image: "/images/image_two.png",
    github: "https://github.com/es-Mohamed/E-commerce-Platform",
    // demo: "https://example.com/js-projects",
  },
];
