import { motion } from 'framer-motion';
import { Code, Settings, Database, TrendingUp, ArrowRight, ShieldCheck, Cpu, Layers } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { GradientHeading } from '../components/GradientHeading';
import MagneticCard from '../components/MagneticCard';

const capabilities = [
  {
    title: "Software Production",
    desc: "End-to-end software development lifecycle management, from R&D to production-ready enterprise applications.",
    icon: Code,
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "Data Engineering",
    desc: "Building robust data pipelines and warehousing solutions to turn raw data into actionable business intelligence.",
    icon: Database,
    color: "from-blue-500 to-indigo-500"
  },
  {
    title: "Business Scalability",
    desc: "Designing infrastructure that grows with your business, ensuring back-end efficiency as volumes increase.",
    icon: TrendingUp,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Custom Tools",
    desc: "Specialized software tools engineered to solve niche corporate bottlenecks and maximize output.",
    icon: Settings,
    color: "from-orange-500 to-rose-500"
  }
];

export default function SuntechSolutions() {
  return (
    <PageTransition>
      <div className="pt-32 pb-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* HERO SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-purple-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-purple-600 dark:text-purple-400">The Technical Foundation</span>
            </motion.div>
            <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8">
              Suntech Solutions.
            </GradientHeading>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-serif italic leading-relaxed"
            >
              Providing the technical bedrock for corporate growth through data engineering and business scalability infrastructure.
            </motion.p>
          </div>

          {/* FEATURE IMAGE GRID */}
          <div className="grid md:grid-cols-12 gap-6 mb-16 md:mb-32">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 rounded-2xl md:rounded-[3rem] overflow-hidden aspect-video relative group shadow-xl"
            >
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80" 
                alt="Advanced Software Engineering" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="md:col-span-4 rounded-2xl md:rounded-[3rem] bg-muted p-6 sm:p-10 flex flex-col justify-center border border-border"
            >
              <div className="text-4xl font-serif font-bold text-primary mb-4">99.9%</div>
              <h4 className="text-xl font-bold mb-4">System Reliability</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">We design custom software tools to maximize corporate output and back-end efficiency, ensuring your growth is never limited by technology.</p>
            </motion.div>
          </div>

          {/* CAPABILITIES GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 md:mb-32">
            {capabilities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="bg-card border border-border p-6 sm:p-8 rounded-2xl md:rounded-[2rem] h-full hover:shadow-xl transition-all border-b-4 border-b-transparent hover:border-b-purple-500">
                  <item.icon className="w-10 h-10 text-primary mb-6" />
                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA SECTION */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-primary text-primary-foreground rounded-2xl md:rounded-[3.5rem] p-6 sm:p-12 md:p-24 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-transparent" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">Technical Excellence.</h2>
              <p className="text-xl md:text-2xl text-white/80 max-w-2xl mx-auto mb-12">
                Build a technical foundation that supports your most ambitious goals.
              </p>
              <div className="flex flex-wrap justify-center gap-6">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  className="px-10 py-5 bg-white text-primary rounded-full font-bold shadow-lg"
                >
                  Start Engineering
                </motion.button>
                <div className="flex -space-x-4">
                   {[1,2,3,4].map(i => (
                     <div key={i} className="w-12 h-12 rounded-full border-2 border-primary bg-muted flex items-center justify-center text-xs font-bold text-primary">DEV</div>
                   ))}
                </div>
              </div>
              <div className="mt-12 flex justify-center gap-12 text-sm font-bold tracking-widest text-white/40 uppercase">
                 <div className="flex items-center gap-2"><Cpu className="w-4 h-4"/> Hardware-Aware</div>
                 <div className="flex items-center gap-2"><Layers className="w-4 h-4"/> Multi-Stack</div>
                 <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4"/> Secure-First</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}