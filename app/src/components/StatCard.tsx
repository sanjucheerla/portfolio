import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';

interface StatCardProps {
  value: string;
  label: string;
  delay?: number;
}

function useCountUp(end: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startCounting) return;

    let startTime: number | null = null;
    let animationFrame: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      
      // Easing function (easeOutQuart)
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, startCounting]);

  return count;
}

export function StatCard({ value, label, delay = 0 }: StatCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  
  // Extract numeric value and suffix
  const numericMatch = value.match(/^([\d.]+)(.*)$/);
  const numericValue = numericMatch ? parseFloat(numericMatch[1]) : 0;
  const suffix = numericMatch ? numericMatch[2] : value;
  
  const count = useCountUp(numericValue, 2000, isInView);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay, ease: [0.34, 1.56, 0.64, 1] }}
      className="text-center p-4 bg-card rounded-2xl shadow-soft border border-border"
    >
      <div className="text-3xl md:text-4xl font-bold gradient-text tracking-tight">
        {isInView ? count : 0}{suffix}
      </div>
      <div className="text-sm text-navy-muted mt-1 font-medium">{label}</div>
    </motion.div>
  );
}
