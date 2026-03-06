import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Linkedin, Github, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  // ✅ تم إضافة تعريف حالة التحميل هنا
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true); // ✅ الآن سيعمل هذا السطر بشكل صحيح

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      date: new Date().toLocaleString(),
    };

    try {
      await emailjs.send(
        'service_ju19a6c',
        'template_wdhlv5p',
        templateParams,
        'TUK2uZViKux04it4i'
      );

      toast({
        title: "Message sent! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Oops! Something went wrong",
        description: error instanceof Error 
          ? error.message 
          : "Couldn't send your message. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false); // ✅ وسيتم إيقاف التحميل هنا
    }
  };

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Animated network background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1000 800"
      >
        <motion.circle
          cx="200"
          cy="200"
          r="100"
          fill="none"
          stroke="hsl(187, 85%, 55%)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1 }}
        />
        <motion.circle
          cx="800"
          cy="600"
          r="100"
          fill="none"
          stroke="hsl(28, 90%, 60%)"
          strokeWidth="2"
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.3 }}
        />
      </svg>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-12 text-center">
            Get In <span className="text-gradient-cyan-orange">Touch</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <div>
                <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
                <p className="text-muted-foreground mb-8">
                  I'm always open to discussing new engineering challenges, 
                  full-time opportunities, or tech collaborations. Feel free to reach out!
                </p>
              </div>

              <div className="space-y-4">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Location</p>
                    <p className="text-sm text-muted-foreground">
                      Alexandria, Egypt
                    </p>
                  </div>
                </motion.div>

                <motion.a
                  href="mailto:mohamedmady.software@gmail.com"
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-sm text-muted-foreground">
                      mohamedmady.software@gmail.com
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://linkedin.com/in/mohamed-mady-940b87264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">LinkedIn</p>
                    <p className="text-sm text-muted-foreground">
                      [Mohamed Mady]
                    </p>
                  </div>
                </motion.a>

                <motion.a
                  href="https://github.com/es-Mohamed"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card/50 backdrop-blur-sm border border-border rounded-xl hover:border-primary/50 transition-all block"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Github className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">GitHub</p>
                    <p className="text-sm text-muted-foreground">
                      [Mohamed Mady]
                    </p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <form
                onSubmit={handleSubmit}
                className="bg-card/50 backdrop-blur-sm border border-border rounded-xl p-8 space-y-6"
              >
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input
                    id="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="bg-background/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="bg-background/50 focus:ring-2 focus:ring-primary transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message..."
                    rows={6}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    className="bg-background/50 focus:ring-2 focus:ring-primary transition-all resize-none"
                  />
                </div>

                {/* ✅ تم تحديث الزر ليدعم حالة التحميل */}
                <Button
                  type="submit"
                  size="lg"
                  disabled={isLoading}
                  className="w-full glow-cyan hover:scale-105 transition-transform"
                >
                  {isLoading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};