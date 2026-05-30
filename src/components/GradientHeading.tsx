import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const GradientHeading = ({ children, className }: { children: React.ReactNode, className?: string }) => {
  const ref = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.9", "start 0.3"] });
  const backgroundSize = useTransform(scrollYProgress, [0, 1], ["0% 100%", "100% 100%"]);

  return (
    <motion.h2
      ref={ref}
      style={{ 
        backgroundImage: "linear-gradient(to right, hsl(var(--foreground)), hsl(var(--muted-foreground)))", 
        backgroundClip: "text", 
        WebkitBackgroundClip: "text", 
        color: "transparent", 
        backgroundSize, 
        backgroundRepeat: "no-repeat" 
      }}
      className={className}
    >
      {children}
    </motion.h2>
  );
};