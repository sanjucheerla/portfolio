import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { SkillCategory } from '@/components/SkillCategory';
import { Card, CardContent } from '@/components/ui/card';
import { Award, Trophy, Scroll } from 'lucide-react';
import {
  Code2,
  Database,
  Cloud,
  Wrench,
  Brain,
  Layers,
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'Java', 'TypeScript', 'C/C++', 'SQL', 'R', 'HTML/CSS'],
  },
  {
    title: 'AI/ML & Data',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'Keras', 'Scikit-Learn', 'Pandas', 'NumPy', 'NLTK', 'spaCy', 'Transformers'],
  },
  {
    title: 'Frameworks & Tools',
    icon: Layers,
    skills: ['Spring Boot', 'AngularJS', 'Git/GitHub', 'Jenkins', 'AWS', 'Postman', 'JEST'],
  },
  {
    title: 'Databases',
    icon: Database,
    skills: ['MySQL', 'PostgreSQL'],
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'CI/CD', 'Docker', 'Kubernetes'],
  },
  {
    title: 'Development Tools',
    icon: Wrench,
    skills: ['VSCode', 'PyCharm', 'IntelliJ', 'Jupyter', 'Google Colab', 'MATLAB'],
  },
];

const awards = [
  {
    title: 'Best Undergraduate Poster',
    organization: 'HotSoS 2022 (NSA Funded)',
    description: 'First place award for presenting research on a national platform',
    icon: Trophy,
  },
  {
    title: 'NCSU Leadership Certificate',
    organization: 'NC State University',
    description: 'Recognized for exceptional leadership skills',
    date: 'Nov 2023',
    icon: Scroll,
  },
  {
    title: 'Career Essentials Certifications',
    organization: 'Microsoft & LinkedIn',
    description: 'Generative AI and Software Development',
    icon: Award,
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-coral text-sm uppercase tracking-wider font-bold">
              Technical Skills
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4">
              Tools & <span className="gradient-text">Technologies</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto mt-4">
              A comprehensive toolkit built through years of research, internships, 
              and hands-on project development.
            </p>
          </AnimatedSection>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Awards & Certifications */}
        <AnimatedSection>
          <div className="text-center mb-10">
            <h3 className="text-2xl md:text-3xl font-bold text-navy tracking-tight">
              Awards & <span className="gradient-text">Certifications</span>
            </h3>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {awards.map((award, index) => (
            <motion.div
              key={award.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <Card className="bg-card border border-border hover:border-coral/30 transition-all duration-400 h-full group shadow-soft hover:shadow-soft-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center flex-shrink-0">
                      <award.icon className="w-6 h-6 text-coral" />
                    </div>
                    <div>
                      <h4 className="text-navy font-bold group-hover:text-coral transition-colors">
                        {award.title}
                      </h4>
                      <p className="text-coral text-sm font-semibold mt-1">{award.organization}</p>
                      <p className="text-navy-light text-sm mt-2">
                        {award.description}
                      </p>
                      {award.date && (
                        <p className="text-navy-muted text-xs mt-2">{award.date}</p>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
