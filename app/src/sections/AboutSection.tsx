import { motion } from 'framer-motion';
import { AnimatedSection } from '@/components/AnimatedSection';
import { StatCard } from '@/components/StatCard';

const stats = [
  { value: '3.9', label: 'GPA' },
  { value: '3', label: 'Publications' },
  { value: '5', label: 'Years Experience' },
  { value: '2', label: 'Industry Internships' },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div>
            <AnimatedSection>
              <span className="text-coral text-sm uppercase tracking-wider font-bold">
                About Me
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-navy tracking-tight mt-4 mb-6">
                Building the Future with{' '}
                <span className="gradient-text">AI</span>
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-navy-light text-base md:text-lg leading-relaxed mb-6">
                As a Ph.D. student in Computer Science at NC State University, I'm passionate 
                about pushing the boundaries of AI/ML research. My work spans from extracting 
                information from scientific papers using LLMs and Knowledge Graphs to developing 
                production-ready systems at AWS and Credit Karma.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <p className="text-navy-light text-base md:text-lg leading-relaxed mb-8">
                With a strong foundation in both academia and industry, I bring a unique 
                perspective to solving complex problems. My research focuses on leveraging 
                cutting-edge technologies to create meaningful impact in the world of 
                artificial intelligence.
              </p>
            </AnimatedSection>

            {/* Stats */}
            <AnimatedSection delay={0.4}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8 border-t border-border">
                {stats.map((stat, index) => (
                  <StatCard
                    key={stat.label}
                    value={stat.value}
                    label={stat.label}
                    delay={0.5 + index * 0.1}
                  />
                ))}
              </div>
            </AnimatedSection>
          </div>

          {/* Right Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-soft-lg">
              <img
                src="/about-visual.jpg"
                alt="AI and Machine Learning Visualization"
                className="w-full h-auto rounded-3xl"
              />
            </div>

            {/* Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-5 shadow-soft-xl border border-border"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-coral to-coral-light flex items-center justify-center">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
                <div>
                  <p className="text-navy font-bold">NC State University</p>
                  <p className="text-navy-muted text-sm">Ph.D. Computer Science</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
