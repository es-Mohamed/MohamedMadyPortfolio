import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const HeroIllustration = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check initial theme
    const isDark = !document.documentElement.classList.contains("light");
    setIsDarkMode(isDark);

    // Listen for theme changes
    const observer = new MutationObserver(() => {
      const isDark = !document.documentElement.classList.contains("light");
      setIsDarkMode(isDark);
    });

    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  const cyanColor = isDarkMode ? "hsl(187, 85%, 55%)" : "hsl(187, 85%, 43%)";
  const purpleColor = isDarkMode ? "hsl(270, 70%, 60%)" : "hsl(270, 70%, 50%)";
  const orangeColor = isDarkMode ? "hsl(28, 90%, 60%)" : "hsl(28, 90%, 50%)";

  return (
    <div className="relative w-full aspect-square max-w-lg mx-auto">
      {/* Central hexagon */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <svg width="300" height="300" viewBox="0 0 300 300" className="opacity-30">
          <polygon
            points="150,30 250,90 250,210 150,270 50,210 50,90"
            fill="none"
            stroke={cyanColor}
            strokeWidth="2"
          />
          <polygon
            points="150,60 220,105 220,195 150,240 80,195 80,105"
            fill="none"
            stroke={purpleColor}
            strokeWidth="2"
          />
        </svg>
      </motion.div>

      {/* Floating atoms */}
      {[...Array(6)].map((_, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        const radius = 120;
        const x = 150 + radius * Math.cos(angle);
        const y = 150 + radius * Math.sin(angle);

        return (
          <motion.div
            key={i}
            className="absolute w-4 h-4 rounded-full bg-primary glow-cyan"
            style={{
              left: `${(x / 300) * 100}%`,
              top: `${(y / 300) * 100}%`,
              marginLeft: "-8px",
              marginTop: "-8px",
            }}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        );
      })}

      {/* Code brackets */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-6xl font-bold text-secondary opacity-20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      >
        {"</>"}
      </motion.div>

      {/* Chemical formula */}
      <motion.div
        className="absolute bottom-1/4 right-1/4 text-4xl font-bold text-accent opacity-20"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1.5,
        }}
      >
        {"H₂O"}
      </motion.div>

      {/* Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-20"
        viewBox="0 0 300 300"
      >
        <motion.path
          d="M 50 150 L 100 150 L 100 100 L 200 100 L 200 150 L 250 150"
          fill="none"
          stroke={orangeColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
        <motion.path
          d="M 150 50 L 150 100 L 200 150 L 200 250"
          fill="none"
          stroke={cyanColor}
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1,
          }}
        />
      </svg>

      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/10 rounded-full blur-3xl" />
    </div>
  );
};
