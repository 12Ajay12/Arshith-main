import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, CheckCircle } from 'lucide-react';

export default function DivisionCard({ div }: { div: any }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, delay: 0.1 }}
      className="border border-border rounded-[2.5rem] overflow-hidden bg-card shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className={`h-2 bg-gradient-to-r ${div.color}`} />
      <div className="p-8 md:p-12">
        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="shrink-0">
            <div className={`w-16 h-16 rounded-2xl ${div.bg} flex items-center justify-center`}>
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${div.color} flex items-center justify-center`}>
                <div.icon className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="flex-1">
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <span className="text-xs font-bold tracking-[0.2em] text-muted-foreground uppercase">{div.number}</span>
              <span className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${div.color} text-white`}>{div.entity}</span>
              <span className="text-xs font-medium text-muted-foreground border border-border rounded-full px-3 py-1">{div.status}</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">{div.name}</h2>
            <p className="text-primary font-semibold italic mb-4">{div.tagline}</p>
            <p className="text-muted-foreground leading-relaxed mb-8">{div.desc}</p>

            <ul className="space-y-2 mb-8">
              {div.highlights.map((h: string, i: number) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{h}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4">
              <Link href={div.link}>
                <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full text-sm cursor-pointer">
                  {div.link === '/arshith-fresh' ? 'Explore Division' : 'Partner With Us'}
                  <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              {div.external && (
                <a href={div.external} target="_blank" rel="noreferrer">
                  <motion.span whileHover={{ scale: 1.03 }} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-border text-foreground font-bold rounded-full text-sm">
                    arshithfresh.com <ArrowUpRight className="w-4 h-4" />
                  </motion.span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}