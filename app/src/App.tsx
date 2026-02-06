import { ThemeProvider } from '@/contexts/ThemeContext';
import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { HeroSection } from '@/sections/HeroSection';
import { AboutSection } from '@/sections/AboutSection';
import { ExperienceSection } from '@/sections/ExperienceSection';
import { PublicationsSection } from '@/sections/PublicationsSection';
import { ProjectsSection } from '@/sections/ProjectsSection';
import { SkillsSection } from '@/sections/SkillsSection';
import { ContactSection } from '@/sections/ContactSection';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background transition-colors duration-300">
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ExperienceSection />
          <PublicationsSection />
          <ProjectsSection />
          <SkillsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
