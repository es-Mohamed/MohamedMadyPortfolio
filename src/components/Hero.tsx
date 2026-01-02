import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Download, Mail, Linkedin, Github, MessageCircle } from "lucide-react";
import { HeroIllustration } from "./HeroIllustration";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-lg md:text-xl text-primary font-medium mb-2">
                Hello, I'm
              </h2>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4">
                Mohamed Mady
              </h1>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gradient-cyan-orange mb-4">
                Backend Developer (Python) & Chemical Engineer
              </h3>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed"
            >
              I merge chemical engineering logic with backend development to build
              intelligent, scalable, and data-driven systems.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="text-base md:text-lg text-muted-foreground max-w-2xl"
            >
              I build backend systems using Python, Django, and Flask, and develop
              engineering-focused software solutions that optimize, automate, and
              analyze industrial workflows.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col items-center gap-6 pt-4"
            >
              {/* Buttons */}
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="gap-2 glow-cyan hover:scale-105 transition-transform"
                  asChild
                >
                  <a href="/Mohamed_Mady_Backend_Developer.pdf" download="Mohamed_Mady_Backend_Developer.pdf">
                    <Download className="w-5 h-5" />
                    Download CV
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 hover:scale-105 transition-transform border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  asChild
                >
                  <a href="#contact">
                    <Mail className="w-5 h-5" />
                    Contact Me
                  </a>
                </Button>
              </div>

              {/* Social Media Icons - Centered Below Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
                className="flex items-center justify-center gap-3"
              >
                {/* LinkedIn */}
                <motion.a
                  href="https://linkedin.com/in/mohamed-mady-940b87264"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-lg hover:shadow-primary/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href="https://github.com/es-Mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-secondary/10 border-2 border-secondary flex items-center justify-center text-secondary hover:bg-secondary hover:text-secondary-foreground transition-all duration-300 shadow-lg hover:shadow-secondary/50"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </motion.a>

                {/* WhatsApp */}
                <motion.a
                  href="https://wa.me/+201505471068"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-9 h-9 rounded-full bg-green-500/10 border-2 border-green-500 flex items-center justify-center text-green-500 hover:bg-green-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-green-500/50"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <HeroIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
