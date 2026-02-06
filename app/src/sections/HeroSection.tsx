import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';

export function HeroSection() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-coral-50/20 to-teal-50/20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Blob 1 - Large coral blob top right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.5, 
            scale: 1,
            x: [0, 30, -20, 0],
            y: [0, -40, 20, 0],
          }}
          transition={{ 
            opacity: { duration: 1 },
            scale: { duration: 1 },
            x: { duration: 15, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 12, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-coral/20 blob blur-3xl"
        />
        
        {/* Blob 2 - Teal blob left side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.4, 
            scale: 1,
            x: [0, -40, 30, 0],
            y: [0, 50, -30, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.2 },
            scale: { duration: 1, delay: 0.2 },
            x: { duration: 18, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 14, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/4 -left-40 w-[400px] h-[400px] bg-teal/20 blob-reverse blur-3xl"
        />
        
        {/* Blob 3 - Small coral blob bottom */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.3, 
            scale: 1,
            x: [0, 60, -40, 0],
            y: [0, -30, 50, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.4 },
            scale: { duration: 1, delay: 0.4 },
            x: { duration: 20, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 16, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute bottom-20 right-1/4 w-[300px] h-[300px] bg-coral/15 blob-alt blur-2xl"
        />
        
        {/* Blob 4 - Teal blob bottom left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ 
            opacity: 0.35, 
            scale: 1,
            x: [0, -30, 40, 0],
            y: [0, 40, -50, 0],
          }}
          transition={{ 
            opacity: { duration: 1, delay: 0.6 },
            scale: { duration: 1, delay: 0.6 },
            x: { duration: 17, repeat: Infinity, ease: "easeInOut" },
            y: { duration: 13, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute -bottom-20 left-1/4 w-[350px] h-[350px] bg-teal/15 blob blur-2xl"
        />

        {/* Blob 5 - Center subtle blob */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.2, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            opacity: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            scale: { duration: 10, repeat: Infinity, ease: "easeInOut" },
          }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-coral/10 to-teal/10 blob blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 text-center pt-20">
        
        {/* Profile Picture Frame */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
          className="mb-6"
        >
          <div className="relative inline-block">
            {/* Animated ring around profile */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-1 rounded-full bg-gradient-to-r from-coral via-teal to-coral opacity-70"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -inset-2 rounded-full bg-gradient-to-r from-teal via-coral to-teal opacity-40"
            />
            
            {/* Profile Picture Container */}
            <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden border-4 border-white shadow-soft-lg bg-cream">
              <img
                src="/profile-photo.jpg"
                alt="Sanjana Cheerla"
                className="w-full h-full object-cover"
                onError={(e) => {
                  // If image fails to load, show placeholder
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  const parent = target.parentElement;
                  if (parent) {
                    parent.innerHTML = `
                      <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-coral/20 to-teal/20">
                        <span class="text-3xl md:text-4xl font-bold text-coral">SC</span>
                      </div>
                    `;
                  }
                }}
              />
            </div>
            
            {/* Status indicator */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5, duration: 0.3 }}
              className="absolute bottom-1 right-1 w-6 h-6 md:w-8 md:h-8 bg-teal rounded-full border-4 border-white flex items-center justify-center"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-2 h-2 md:w-3 md:h-3 bg-white rounded-full"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.34, 1.56, 0.64, 1] }}
        >
          <span className="inline-block px-5 py-2.5 rounded-xl bg-coral-50 text-coral text-sm font-semibold mb-4">
            👋 Ph.D. Computer Science Student
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4"
        >
          <span className="text-navy">Sanjana </span>
          <span className="gradient-text">Cheerla</span>
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-xl md:text-2xl text-navy-light font-medium mb-6"
        >
          AI/ML Researcher & Software Engineer
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.34, 1.56, 0.64, 1] }}
          className="text-base md:text-lg text-navy-muted max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Passionate about advancing AI/ML in academia and industry. Specializing in LLMs, 
          Knowledge Graphs, and automated learning systems.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
        >
          <Button
            onClick={() => scrollToSection('#projects')}
            className="bg-coral text-white hover:bg-coral-dark rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-coral w-full sm:w-auto"
          >
            View My Work
          </Button>
          <Button
            onClick={() => scrollToSection('#contact')}
            variant="outline"
            className="border-2 border-border text-navy hover:border-coral hover:text-coral hover:bg-coral-50 rounded-xl px-8 py-6 text-base font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            Get In Touch
          </Button>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: [0.34, 1.56, 0.64, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 md:gap-8 text-sm text-navy-muted"
        >
          <a
            href="mailto:sanjanacheerla00@gmail.com"
            className="flex items-center gap-2 hover:text-coral transition-colors font-medium"
          >
            <Mail className="w-4 h-4" />
            <span>sanjanacheerla00@gmail.com</span>
          </a>
          <a
            href="https://linkedin.com/in/sanjanacheerla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-coral transition-colors font-medium"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://github.com/sanjanacheerla"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-coral transition-colors font-medium"
          >
            <Github className="w-4 h-4" />
            <span>GitHub</span>
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Raleigh, NC</span>
          </span>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="cursor-pointer"
          onClick={() => scrollToSection('#about')}
        >
          <ChevronDown className="w-6 h-6 text-navy-muted hover:text-coral transition-colors" />
        </motion.div>
      </motion.div>
    </section>
  );
}
