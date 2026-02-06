import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Github, ExternalLink, Bot, Database, Brain } from 'lucide-react';

const projects = [
  {
    name: 'Passel',
    description: 'A public Discord bot allowing servers to surpass the 50 pinned messages per channel limit. Added in 1200+ servers, solely responsible for programming and design. Open-sourced project.',
    tech: ['Python', 'Discord API', 'OAuth', 'Google Drive/Sheets API'],
    period: 'June 2020 - August 2022',
    icon: Bot,
    github: 'https://github.com/sanjanacheerla',
    featured: true,
  },
  {
    name: 'Social Network Misconduct Analysis',
    description: 'Large-scale analysis of misconduct on social networking platforms using ML techniques. Curated dataset of 3M+ reviews across 200 apps.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'NLP', 'Neural Networks'],
    result: 'Multi-label AI model with 85%+ precision, recall, and F-1 scores',
    icon: Database,
    github: 'https://github.com/sanjanacheerla',
    featured: true,
  },
  {
    name: 'CLOVER - Biomedical Knowledge Extraction',
    description: 'System for extracting validated entity relationships from biomedical literature using chained LLMs and Knowledge Graphs.',
    tech: ['LLMs', 'Knowledge Graphs', 'Prompt Engineering', 'Python'],
    result: 'Published in Journal of Bioinformatics',
    icon: Brain,
    github: 'https://github.com/sanjanacheerla',
    featured: true,
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-coral text-sm uppercase tracking-wider font-bold">
              Featured Projects
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4">
              Things I've <span className="gradient-text">Built</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto mt-4">
              From production Discord bots to research systems, here are some of my 
              most impactful projects.
            </p>
          </AnimatedSection>
        </div>

        {/* Projects List */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1],
              }}
            >
              <Card className="bg-card border border-border hover:border-coral/30 transition-all duration-400 overflow-hidden group shadow-soft hover:shadow-soft-lg">
                <CardContent className="p-0">
                  <div className={`grid grid-cols-1 lg:grid-cols-12 gap-0 ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}>
                    {/* Content */}
                    <div className={`lg:col-span-7 p-6 md:p-8 ${
                      index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'
                    }`}>
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-4">
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center">
                            <project.icon className="w-7 h-7 text-white" />
                          </div>
                          <div>
                            <h3 className="text-navy font-bold text-xl group-hover:text-coral transition-colors">
                              {project.name}
                            </h3>
                            <span className="text-navy-muted text-sm">{project.period}</span>
                          </div>
                        </div>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-xl bg-cream flex items-center justify-center text-navy-muted hover:text-coral hover:bg-coral-50 transition-all duration-300"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      </div>

                      <p className="text-navy-light leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {project.result && (
                        <div className="mb-4 p-4 bg-teal-50 rounded-xl border border-teal/20">
                          <span className="text-teal text-sm font-bold">Result: </span>
                          <span className="text-navy-light text-sm">{project.result}</span>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="bg-cream text-navy-light hover:bg-coral hover:text-white transition-all duration-300 font-medium"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Visual Placeholder */}
                    <div className={`lg:col-span-5 bg-gradient-to-br from-coral-50 to-teal-50 flex items-center justify-center min-h-[200px] ${
                      index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'
                    }`}>
                      <div className="text-center">
                        <project.icon className="w-16 h-16 text-coral/30 mx-auto mb-4" />
                        <span className="text-navy-subtle text-sm">Project Visualization</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <AnimatedSection delay={0.5}>
          <div className="text-center mt-12">
            <a
              href="https://github.com/sanjanacheerla"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-coral hover:text-coral-dark transition-colors font-semibold"
            >
              <span>View More on GitHub</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
