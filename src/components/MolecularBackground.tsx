import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

interface Node {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export const MolecularBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const nodesRef = useRef<Node[]>([]);
  const animationFrameRef = useRef<number>();
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

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    // Initialize nodes
    const nodeCount = Math.min(50, Math.floor(window.innerWidth / 30));
    nodesRef.current = Array.from({ length: nodeCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1,
    }));

    // Colors based on theme
    const nodeColor = isDarkMode ? "hsl(187, 85%, 55%)" : "hsl(187, 85%, 43%)";
    const glowColorStart = isDarkMode ? "hsla(187, 85%, 55%, 0.4)" : "hsla(187, 85%, 43%, 0.6)";
    const glowColorEnd = isDarkMode ? "hsla(187, 85%, 55%, 0)" : "hsla(187, 85%, 43%, 0)";
    const lineColor = isDarkMode ? "187, 85%, 55%" : "187, 85%, 43%";

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and draw nodes
      nodesRef.current.forEach((node) => {
        node.x += node.vx;
        node.y += node.vy;

        // Bounce off walls
        if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
        if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = nodeColor;
        ctx.fill();

        // Draw glow
        const gradient = ctx.createRadialGradient(
          node.x,
          node.y,
          0,
          node.x,
          node.y,
          node.radius * 3
        );
        gradient.addColorStop(0, glowColorStart);
        gradient.addColorStop(1, glowColorEnd);
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      // Draw connections
      nodesRef.current.forEach((node, i) => {
        nodesRef.current.slice(i + 1).forEach((otherNode) => {
          const dx = node.x - otherNode.x;
          const dy = node.y - otherNode.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(otherNode.x, otherNode.y);
            const opacity = isDarkMode ? 1 - distance / 150 : 1.2 - distance / 150;
            ctx.strokeStyle = `hsla(${lineColor}, ${Math.min(opacity, 1)})`;
            ctx.lineWidth = isDarkMode ? 0.5 : 0.7;
            ctx.stroke();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };

    animate();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDarkMode]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-30"
      style={{ zIndex: 0 }}
    />
  );
};
