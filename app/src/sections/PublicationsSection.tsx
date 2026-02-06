import { motion } from 'framer-motion';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/AnimatedSection';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, FileText } from 'lucide-react';

const publications = [
  {
    title: 'Navigating Risk: Do LLMs Make the Right Call?',
    venue: 'AAMAS COINE Workshop',
    date: 'March 2025',
    position: 'Co-First Author',
    description: 'Investigating the decision-making capabilities of Large Language Models in risk assessment scenarios.',
  },
  {
    title: 'Weapons of Online Harassment: Menacing and Profiling Users via Social Apps',
    venue: 'IEEE Computers',
    date: 'August 2025',
    position: 'First Author',
    description: 'Comprehensive analysis of misconduct patterns on social networking platforms using ML techniques.',
  },
  {
    title: 'CLOVER: Chained LLMs for Obtaining Validated Entity Relationships in Biomedical Literature',
    venue: 'TBD',
    date: 'TBD',
    position: 'First Author',
    description: 'Novel approach to extracting and validating entity relationships from biomedical papers using chained LLMs and Knowledge Graphs.',
  },
];

export function PublicationsSection() {
  return (
    <section id="publications" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-coral text-sm uppercase tracking-wider font-bold">
              Publications
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4">
              Research <span className="gradient-text">Publications</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto mt-4">
              Peer-reviewed publications in top-tier venues focusing on AI/ML, 
              LLMs, and computational social science.
            </p>
          </AnimatedSection>
        </div>

        {/* Publications Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" staggerDelay={0.15}>
          {publications.map((pub) => (
            <StaggerItem key={pub.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ duration: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
              >
                <Card className="bg-card border border-border hover:border-coral/30 transition-all duration-400 h-full group cursor-pointer shadow-soft hover:shadow-soft-lg">
                  <CardContent className="p-6 flex flex-col h-full">
                    {/* Position Badge */}
                    <div className="flex items-center justify-between mb-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          pub.position === 'First Author'
                            ? 'bg-coral text-white'
                            : 'bg-coral-50 text-coral'
                        } px-3 py-1 text-xs font-bold`}
                      >
                        {pub.position}
                      </Badge>
                      <div className="w-10 h-10 rounded-xl bg-coral-50 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-coral" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-navy font-bold text-lg mb-3 group-hover:text-coral transition-colors line-clamp-3">
                      {pub.title}
                    </h3>

                    {/* Venue & Date */}
                    <div className="flex items-center gap-2 mb-4">
                      <span className="text-coral text-sm font-semibold">{pub.venue}</span>
                      <span className="text-navy-subtle">•</span>
                      <span className="text-navy-muted text-sm">{pub.date}</span>
                    </div>

                    {/* Description */}
                    <p className="text-navy-light text-sm leading-relaxed flex-grow">
                      {pub.description}
                    </p>

                    {/* Link */}
                    <div className="mt-4 pt-4 border-t border-border">
                      <span className="inline-flex items-center gap-2 text-sm text-navy-muted group-hover:text-coral transition-colors font-medium">
                        <span>View Publication</span>
                        <ExternalLink className="w-4 h-4" />
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
