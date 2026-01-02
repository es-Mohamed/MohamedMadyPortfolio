import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { projects } from "@/data/projects";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Featured <span className="text-gradient-cyan-orange">Projects</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-card/50 backdrop-blur-sm border border-border rounded-xl overflow-hidden h-full hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 hover:scale-[1.02]">
                  {/* Project Image */}
                  {project.image && (
                    <div className="relative h-48 overflow-hidden bg-black/20">
                      <picture>
                        <source
                          srcSet={project.image}
                          type="image/webp"
                        />
                        <motion.img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          initial={{ scale: 1.05 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.6 }}
                          loading="lazy"
                          decoding="async"
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      </picture>
                      <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                    </div>
                  )}

                  {/* Project Content */}
                  <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{project.period}</p>
                    </div>
                    {project.link && (
                      <Button
                        size="icon"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        asChild
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      </Button>
                    )}
                  </div>

                  <p className="text-muted-foreground mb-4">{project.description}</p>

                  <div className="flex items-center gap-3 mb-4">
                    {project.github && (
                      <Button asChild size="sm" variant="outline">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            <span>GitHub</span>
                          </div>
                        </a>
                      </Button>
                    )}

                    {project.demo && (
                      <Button asChild size="sm" variant="ghost">
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <div className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            <span>Demo</span>
                          </div>
                        </a>
                      </Button>
                    )}
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          duration: 0.3,
                          delay: index * 0.1 + techIndex * 0.05,
                        }}
                        className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>

                  {/* Decorative hexagon corner */}
                  <svg
                    className="absolute bottom-4 right-4 opacity-10 group-hover:opacity-30 transition-opacity"
                    width="40"
                    height="40"
                    viewBox="0 0 40 40"
                  >
                    <polygon
                      points="20,5 35,12.5 35,27.5 20,35 5,27.5 5,12.5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1"
                      className="text-primary"
                    />
                  </svg>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
