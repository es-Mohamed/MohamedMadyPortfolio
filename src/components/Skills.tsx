import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Wrench, Beaker, Languages, Server, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Backend Development",
    icon: Server,
    skills: ["Python", "Django", "RESTful APIs", "Flask", "Celery", "Redis", "JavaScript"],
    color: "primary",
  },
  {
    title: "Data Engineering & DB",
    icon: Database,
    skills: ["PostgreSQL", "Apache Airflow", "Pandas", "ETL Pipelines", "MySQL", "Data Automation"],
    color: "accent",
  },
  {
    ttitle: "DevOps & Infrastructure",
    icon: Wrench,
    skills: ["Docker", "Linux", "Git & GitHub", "AWS (EC2, RDS, S3)", "CI/CD"],
    color: "secondary",
  },
  {
    title: "Domain Knowledge & Languages",
    icon: Languages,
    skills: ["Chemical Engineering Logic", "Analytical Thinking", "English (Fluent)", "Arabic (Native)"],
    color: "primary",
  },
];

export const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Skills & <span className="text-gradient-cyan-orange">Expertise</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-105">
                    <motion.div
                      className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                      whileHover={{ rotate: [0, -10, 10, -10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className={`w-6 h-6 text-${category.color}`} />
                    </motion.div>

                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>

                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : {}}
                          transition={{
                            duration: 0.4,
                            delay: index * 0.1 + skillIndex * 0.05,
                          }}
                          className="flex items-center gap-2"
                        >
                          <div className={`w-2 h-2 rounded-full bg-${category.color}`} />
                          <span className="text-sm text-muted-foreground">{skill}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
