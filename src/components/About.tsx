import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      {/* Animated background lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        viewBox="0 0 1000 800"
      >
        <motion.path
          d="M 0 400 Q 250 300 500 400 T 1000 400"
          fill="none"
          stroke="hsl(187, 85%, 55%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2 }}
        />
        <motion.path
          d="M 0 500 Q 250 600 500 500 T 1000 500"
          fill="none"
          stroke="hsl(28, 90%, 60%)"
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={isInView ? { pathLength: 1 } : {}}
          transition={{ duration: 2, delay: 0.5 }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            About <span className="text-gradient-cyan-orange">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-sm">
                {/* Image container */}
                <div className="relative rounded-3xl overflow-hidden border-2 border-primary/50 bg-card/50 backdrop-blur-sm p-1">
                  <img
                    src="images\profileimage.jpg"
                    alt="Mohamed Mady"
                    className="w-full h-full rounded-3xl object-cover shadow-2xl"
                  />
                </div>
              </div>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 space-y-6"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am a Backend Developer and Data Engineer who merges the analytical 
                  rigor of Chemical Engineering with modern software development. 
                  With over two years of hands-on experience, I specialize in building 
                  intelligent, scalable systems and data-driven architectures that solve 
                  complex business challenges.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  My engineering background provides me with a strong foundation 
                  in problem-solving and process optimization. I leverage this mindset 
                  to design efficient RESTful APIs, orchestrate automated data pipelines, 
                  and develop secure e-commerce platforms. My core tech stack includes Python, 
                  Django, PostgreSQL, and Apache Airflow, and I am continuously expanding my 
                  expertise in cloud infrastructure and background task processing.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I am currently open to full-time and remote opportunities where I 
                  can apply my backend architecture skills to build robust software 
                  products and drive technical excellence.
                </p>

                {/* Decorative elements */}
                <div className="flex justify-center gap-6 pt-6">
                  <motion.div
                    className="w-14 h-14 border-2 border-primary rounded-lg flex items-center justify-center"
                    animate={{
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-xl">⚗️</span>
                  </motion.div>
                  <motion.div
                    className="w-14 h-14 border-2 border-secondary rounded-lg flex items-center justify-center"
                    animate={{
                      rotate: [0, -90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.5,
                    }}
                  >
                    <span className="text-xl">💻</span>
                  </motion.div>
                  <motion.div
                    className="w-14 h-14 border-2 border-accent rounded-lg flex items-center justify-center"
                    animate={{
                      rotate: [0, 90, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <span className="text-xl">📊</span>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
