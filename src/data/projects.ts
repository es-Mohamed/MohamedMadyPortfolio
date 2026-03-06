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
    id: "inventory-pos",
    title: "Premium Inventory & POS System",
    period: "Apr 2025 – May 2025",
    description: "Built a comprehensive point-of-sale and inventory management system. Implemented real-time stock tracking, sales reporting, and role-based access control to optimize business operations.",
    technologies: ["Django", "Python", "PostgreSQL", "TypeScript", "TailwindCSS"],
    image: "/images/image_one.png",
    github: "https://github.com/es-Mohamed/premium-inventory-pos",
    demo: "https://inventorysystem-lime.vercel.app/",
  },
  {
    id: "khoutwa-ecommerce",
    title: "Khoutwa E-Commerce Platform",
    period: "Jan 2026 – Present",
    description: "Designed and developed a full-featured e-commerce platform for a footwear brand. Built secure user authentication, a dynamic shopping cart, checkout workflows, and a comprehensive admin dashboard.",
    technologies: ["Python", "Django", "PostgreSQL", "REST APIs", "TailwindCSS"],
    image: "/images/image_four.png",
    github: "https://github.com/es-Mohamed/khoutwa-luxury-boutique",
    demo: "https://khoutwa.vercel.app/",
  },
  {
    id: "ecommerce-etl-pipeline",
    title: "Automated ETL Data Pipeline",
    period: "Feb 2026",
    description: "Architected an automated data pipeline to extract real-time e-commerce sales data, perform complex transformations, and generate actionable visual business insights.",
    technologies: ["Python", "Apache Airflow", "Pandas", "Matplotlib", "SQL"],
    image: "/images/image_three.png",
    github: "https://github.com/es-Mohamed/ecommerce-sales-etl-pipeline",
    // demo: "https://example.com/process-simulation",
  },
  {
    id: "scalable-ecommerce-api",
    title: "Scalable E-Commerce Backend",
    period: "2024",
    description: "Developed a high-performance RESTful API for an auto spare parts brand. Engineered dynamic pricing logic, secure data models, and prepared the architecture for background task processing.",
    technologies: ["Django REST Framework", "PostgreSQL", "Celery", "Redis", "Docker"],
    image: "/images/image_two.png",
    github: "https://github.com/es-Mohamed/E-commerce-Platform",
    // demo: "https://example.com/js-projects",
  },
];
