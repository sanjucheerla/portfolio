import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import type { LucideIcon } from 'lucide-react';

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: LucideIcon;
  delay?: number;
}

export function SkillCategory({ title, skills, icon: Icon, delay = 0 }: SkillCategoryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="bg-card border border-border rounded-2xl p-6 shadow-soft hover:shadow-soft-lg transition-all duration-400"
    >
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-xl bg-coral-50 flex items-center justify-center">
          <Icon className="w-6 h-6 text-coral" />
        </div>
        <h3 className="text-navy font-bold text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + index * 0.05 }}
          >
            <Badge
              variant="secondary"
              className="bg-coral-50 text-coral hover:bg-coral hover:text-white transition-all duration-300 cursor-default px-3 py-1.5 text-sm font-medium"
            >
              {skill}
            </Badge>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
