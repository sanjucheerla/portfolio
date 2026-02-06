import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import { useTheme } from '@/contexts/ThemeContext';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { theme } = useTheme();

  return (
    <footer className={`py-12 transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0a0a14]' : 'bg-navy'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo/Name */}
          <div className="text-center md:text-left">
            <a
              href="#top"
              onClick={e => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="text-white font-bold text-xl tracking-tight hover:text-coral transition-colors"
            >
              Sanjana<span className="text-coral">.</span>
            </a>
            <p className="text-navy-subtle text-sm mt-1">
              Ph.D. Computer Science | AI/ML Researcher
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/sanjanacheerla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-coral hover:bg-white/20 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/sanjanacheerla"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-coral hover:bg-white/20 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:sanjanacheerla00@gmail.com"
              className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white hover:text-coral hover:bg-white/20 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
            {/* Phone contact removed */}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-navy-subtle text-sm">
            © {currentYear} Sanjana Cheerla. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
