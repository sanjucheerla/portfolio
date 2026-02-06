import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { TimelineItem } from '@/components/TimelineItem';

const experiences = [
  {
    company: 'Amazon Web Services',
    role: 'SWE/GenAI Intern',
    period: 'Summer 2025',
    description: [
      'Designed automated log and ticket root cause analysis system with 2 unsupervised Isolation Forests for log anomaly detection',
      'Implemented Retrieval Augmented Generation with Claude Amazon Bedrock (LLMs) and AWS',
      'Reduced on-call load by 80% - manual analysis takes 30 min, system performs RCA in 6 minutes average',
    ],
  },
  {
    company: 'Credit Karma',
    role: 'SWE/GenAI Intern',
    period: 'Summer 2024',
    description: [
      'Implemented membership service connecting users with tax/financial advisors (production by 2025)',
      'Engineered LLM prompts to detect 2 new intents for triggering membership service',
      'Developed guided consent flow for PII sharing with advisors',
      'Improved Intuit Assist chat speed by 3 seconds by splitting back-end API endpoints',
    ],
  },
  {
    company: 'NC State University',
    role: 'Graduate Research Assistant',
    period: 'Spring 2022 - Current',
    description: [
      'Curated dataset of ~3 million reviews and 200 apps; authored comprehensive report on misconduct in social networking platforms',
      'Created high-scoring multi-label AI model for identifying online misbehavior (85%+ precision, recall, F-1)',
      'Collaborating with CTD (Chemical Toxicology Database) to extract entity relationships from PubMed papers using LLMs and KGs',
      'Generating reliable human-readable summaries from extensive biomedical tabular data',
    ],
  },
  {
    company: 'NC State University',
    role: 'President, CSC Graduate Student Association',
    period: 'Spring 2022 - Current',
    description: [
      'Supported and mentored 100+ graduate students for personal & professional growth',
      'Oversee planning and execution of seminars and workshops',
    ],
  },
  {
    company: 'NC State University',
    role: 'Teaching Assistant',
    period: 'Fall 2023 - Current',
    description: [
      'Automated Learning & Data Analysis: Wrote theory and programming ML homework for 40 students',
      'Software Engineering: Facilitated two lab sessions, taught SE principles and debugging for 50 students',
    ],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <AnimatedSection>
            <span className="text-coral text-sm uppercase tracking-wider font-bold">
              Experience
            </span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4">
              My Professional <span className="gradient-text">Journey</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="text-navy-light text-base md:text-lg max-w-2xl mx-auto mt-4">
              From industry internships at top tech companies to cutting-edge research 
              at NC State, here's my path so far.
            </p>
          </AnimatedSection>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 1, ease: [0.34, 1.56, 0.64, 1] }}
            className="absolute left-2 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coral via-coral/50 to-transparent origin-top"
          />

          {/* Timeline Items */}
          <div className="space-y-8 md:space-y-12">
            {experiences.map((exp, index) => (
              <TimelineItem
                key={`${exp.company}-${exp.role}`}
                company={exp.company}
                role={exp.role}
                period={exp.period}
                description={exp.description}
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
