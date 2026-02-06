import { motion } from 'framer-motion';

interface TimelineItemProps {
  company: string;
  role: string;
  period: string;
  description: string[];
  index: number;
  isLeft?: boolean;
}

export function TimelineItem({ company, role, period, description, index, isLeft = false }: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.34, 1.56, 0.64, 1],
      }}
      className={`relative flex items-start gap-4 md:gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      } flex-row`}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-4 h-4 bg-coral rounded-full border-4 border-background shadow-soft z-10 mt-2" />
      
      {/* Content */}
      <div className={`ml-8 md:ml-0 md:w-[45%] ${isLeft ? 'md:text-right md:pr-8' : 'md:pl-8'}`}>
        <div className="bg-card rounded-2xl p-5 md:p-6 shadow-soft hover:shadow-soft-lg transition-all duration-400 border border-border">
          <div className={`flex flex-col ${isLeft ? 'md:items-end' : 'md:items-start'} items-start gap-1`}>
            <span className="text-coral font-semibold text-sm">{company}</span>
            <h3 className="text-navy font-bold text-lg">{role}</h3>
            <span className="text-navy-muted text-sm font-medium">{period}</span>
          </div>
          <ul className={`mt-4 space-y-2 ${isLeft ? 'md:text-right' : ''}`}>
            {description.map((item, i) => (
              <li key={i} className="text-navy-light text-sm leading-relaxed flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-teal mt-2 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Spacer for alternating layout */}
      <div className="hidden md:block md:w-[45%]" />
    </motion.div>
  );
}
