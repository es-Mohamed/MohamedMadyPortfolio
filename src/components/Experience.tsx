import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { Briefcase } from "lucide-react";

export const Experience = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Work <span className="text-gradient-cyan-orange">Experience</span>
          </h2>

          <div className="max-w-4xl mx-auto relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? "md:pr-[50%] md:pl-0" : "md:pl-[50%] md:pr-0"
                } pl-12`}
              >
                {/* Timeline node */}
                <motion.div
                  className="absolute left-4 md:left-1/2 top-6 w-4 h-4 bg-primary rounded-full border-4 border-background"
                  style={{ marginLeft: "-8px" }}
                  animate={{
                    scale: [1, 1.2, 1],
                    boxShadow: [
                      "0 0 0 0 hsla(187, 85%, 55%, 0.7)",
                      "0 0 0 10px hsla(187, 85%, 55%, 0)",
                      "0 0 0 0 hsla(187, 85%, 55%, 0)",
                    ],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.3,
                  }}
                />

                <div
                  className={`bg-card/50 backdrop-blur-sm border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${
                    index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Briefcase className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-sm text-muted-foreground mb-4">{exp.period}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
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
