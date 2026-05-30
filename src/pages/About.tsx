import { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring, useInView } from 'framer-motion';
import { CheckCircle, Cloud, Shield, Cpu, Database, Server, Code, Zap, Target, Users, Globe, TrendingUp, Lock, Rocket, Leaf } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import Reveal from '../components/Reveal';
import aboutBg from '../assets/images/about-bg.png';

const values = [
  { icon: Cloud, title: "Cloud-First Architecture", desc: "Enterprise-grade cloud solutions that ensure scalability, reliability, and 99.9% uptime for businesses of all sizes." },
  { icon: Shield, title: "Security by Design", desc: "Every line of code is written with security in mind. OWASP compliant, encrypted APIs, and role-based access control as standard." },
  { icon: Cpu, title: "AI-Driven Innovation", desc: "Leveraging cutting-edge AI and machine learning to automate workflows, predict trends, and deliver intelligent business solutions." },
  { icon: Database, title: "Data Excellence", desc: "Advanced data engineering, real-time analytics, and business intelligence dashboards that turn raw data into actionable insights." },
  { icon: Server, title: "Scalable Infrastructure", desc: "Built to handle enterprise growth — from startup scale to Fortune 500 workloads with auto-scaling and load balancing." },
  { icon: Code, title: "Clean Code Philosophy", desc: "We believe maintainable, documented, and tested code is the foundation of sustainable digital products." },
];

const milestones = [
  { year: "2024", event: "Conceptualization of Arshith Groups — the vision to build a diversified technology group from Andhra Pradesh." },
  { year: "Apr 2025", event: "Arshith Fresh India Private Limited incorporated under MCA (CIN: U46300AP2025PTC119022)." },
  { year: "May 2025", event: "Arshith Tech division launched — offering IT consulting, cloud services, and digital transformation solutions." },
  { year: "Jun 2025", event: "Suntech Solutions established — specializing in custom software development and data engineering." },
  { year: "2025–26", event: "Expanded IT operations across India. Building Arshith Digital, Arshith Logistics, and Arshith Ventures." },
  { year: "2026+", event: "Launch of AI-driven platforms and enterprise solutions — transforming how businesses leverage technology." },
];

// Custom hook for magnetic hover effect
const useMagneticHover = (strength: number = 30) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const moveX = (e.clientX - centerX) / strength;
    const moveY = (e.clientY - centerY) / strength;
    x.set(moveX);
    y.set(moveY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    const element = ref.current;
    if (element) {
      element.addEventListener('mousemove', handleMouseMove as any);
      element.addEventListener('mouseleave', handleMouseLeave);
      return () => {
        element.removeEventListener('mousemove', handleMouseMove as any);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, []);

  return { ref, x: springX, y: springY };
};

// Smooth text reveal animation variant
const letterAnimation = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.03, duration: 0.6, ease: [0.33, 1, 0.68, 1] }
  })
};

// Split text into characters for reveal animation
const AnimatedText = ({ text, className = "" }: { text: string; className?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  
  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {text.split('').map((char, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={letterAnimation}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            style={{ display: 'inline-block', whiteSpace: 'pre-wrap' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </div>
    </div>
  );
};

export default function About() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  // Custom cursor effect
  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      if (!cursorRef.current) return;
      cursorRef.current.style.transform = `translate(${e.clientX - 16}px, ${e.clientY - 16}px)`;
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  const magneticItems = [
    useMagneticHover(25),
    useMagneticHover(25),
    useMagneticHover(25),
    useMagneticHover(25),
    useMagneticHover(25),
    useMagneticHover(25),
  ];

  return (
    <PageTransition>
      {/* Custom Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed w-8 h-8 rounded-full bg-primary/20 backdrop-blur-sm pointer-events-none z-[999] hidden lg:block"
        style={{
          mixBlendMode: 'difference',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 9999,
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      
      <div className="w-full">

        {/* ── HERO SECTION WITH CUBERTO-STYLE TEXT REVEAL ── */}
        <section ref={heroRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0 z-0" style={{ y: yBg, scale: heroScale }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 z-10" />
            <motion.img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2400&q=85" 
              alt="Arshith Groups - Technology & Innovation" 
              className="w-full h-full object-cover object-center"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
          <div className="relative z-20 container mx-auto px-4 text-center mt-16">
            <motion.p 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.6 }}
              className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-400 mb-4"
            >
              Arshith Groups — Technology & Innovation
            </motion.p>
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1, transition: { staggerChildren: 0.05, delayChildren: 0.2 } }
              }}
              className="text-5xl md:text-8xl font-serif font-bold text-white mb-6"
            >
              {["Engineering", "the", "Digital", "Future"].map((word, i) => (
                <motion.span
                  key={i}
                  variants={{
                    hidden: { y: 100, opacity: 0 },
                    visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: [0.33, 1, 0.68, 1] } }
                  }}
                  className="inline-block mr-4"
                >
                  {word}
                </motion.span>
              ))}
            </motion.div>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl text-white/80 max-w-2xl mx-auto"
            >
              Born in Andhra Pradesh. Built for global scale.
            </motion.p>
          </div>
        </section>

        {/* ── THE GENESIS WITH SCROLL-TRIGGERED TEXT ── */}
        <section className="py-32 bg-background relative overflow-hidden">
          {/* Floating gradient orbs */}
          <div className="absolute top-20 -left-20 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 -right-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
          
          <div className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
            <Reveal>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6 text-center">How It Began</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">The Genesis</h2>
            </Reveal>
            <div className="space-y-8 text-xl leading-relaxed text-muted-foreground">
              {[
                "Arshith Groups was born from a simple but powerful observation: the gap between India's immense technical talent and the global digital economy was still too wide. We saw an opportunity to build world-class technology solutions from Andhra Pradesh — for India and the world.",
                "Co-founders Farook Nurubhasha and Pallavi Nelli brought together expertise in engineering, business strategy, and digital transformation. Their vision: to create a diversified technology group that could serve enterprises, startups, and communities alike.",
                "Arshith Tech, launched in 2025, is the first expression of this vision — offering IT consulting, cloud infrastructure, and digital marketing solutions that help businesses scale. Suntech Solutions followed, focusing on custom software development and data engineering.",
                "But Arshith Groups is much larger in ambition. We are building the technology, commerce, digital, logistics, and venture infrastructure that will power India's digital future — from cloud computing to organic e-commerce, from AI platforms to startup incubation.",
              ].map((para, i) => (
                <Reveal key={i}>
                  <motion.p 
                    className={i === 3 ? 'text-foreground font-semibold border-l-4 border-primary pl-6 text-xl' : ''}
                    whileHover={{ x: i === 3 ? 10 : 0, transition: { duration: 0.3 } }}
                  >
                    {para}
                  </motion.p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── THE NAME WITH ANIMATED GRADIENT ── */}
        <section className="py-20 bg-gradient-to-r from-emerald-700 to-teal-700 text-white relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
            animate={{ x: ['-100%', '100%'] }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          />
          <div className="container mx-auto px-4 text-center max-w-3xl relative z-10">
            <Reveal>
              <motion.h2 
                className="text-3xl md:text-4xl font-serif font-bold mb-6"
                animate={{ scale: [1, 1.02, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                The Meaning of <span className="text-emerald-200">"Arshith"</span>
              </motion.h2>
              <div className="w-20 h-0.5 bg-white/30 mx-auto mb-8" />
              <p className="text-xl text-white/90 leading-relaxed">
                In Sanskrit and Telugu, <strong className="text-white">Arshith</strong> means <em className="text-emerald-200">"Blessed"</em> or <em className="text-emerald-200">"Bestowed"</em>. 
                We believe that building honest, innovative technology — solutions that create genuine value for businesses and communities — is itself a blessing. 
                That is the spirit we carry into every line of code, every cloud deployment, and every client partnership.
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── CORE VALUES WITH MAGNETIC HOVER EFFECTS ── */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <Reveal className="text-center mb-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">What We Stand For</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Core Values</h2>
              <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">The principles that guide our technology, partnerships, and people</p>
            </Reveal>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {values.map((val, i) => {
                const magnetic = useMagneticHover(35);
                return (
                  <motion.div
                    key={i}
                    ref={magnetic.ref}
                    style={{ x: magnetic.x, y: magnetic.y }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.6 }}
                    className="bg-card border border-border rounded-[2rem] p-8 hover:shadow-xl transition-all cursor-pointer group"
                    whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-6"
                      whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
                    >
                      <val.icon className="w-6 h-6 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors">{val.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{val.desc}</p>
                    <motion.div 
                      className="mt-4 w-8 h-0.5 bg-primary/0 group-hover:bg-primary transition-all"
                      whileHover={{ width: 32 }}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── MILESTONES TIMELINE WITH PROGRESS BAR ── */}
        <section className="py-32 bg-muted border-y border-border relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
          
          <div className="container mx-auto px-4 max-w-4xl relative z-10">
            <Reveal className="text-center mb-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Our Journey</p>
              <h2 className="text-4xl md:text-5xl font-serif font-bold">Milestones</h2>
            </Reveal>
            
            {/* Scroll progress bar */}
            <div className="relative h-1 bg-border rounded-full mb-16 overflow-hidden">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                style={{ scaleX: useScroll().scrollYProgress, transformOrigin: '0%' }}
              />
            </div>
            
            <div className="relative space-y-0">
              {/* Center Line with pulse animation */}
              <div className="absolute left-[3.5rem] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary/60 to-primary/20 -translate-x-1/2 z-0">
                <motion.div 
                  className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-primary rounded-full"
                  animate={{ y: ['0%', '100%', '0%'] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ top: 'var(--progress, 0%)' }}
                />
              </div>
              
              {milestones.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`relative flex items-center gap-8 pb-12 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-row z-10 group`}
                >
                  <div className={`hidden md:block w-1/2 ${i % 2 === 0 ? 'text-right pr-10' : 'text-left pl-10'}`}>
                    <motion.div 
                      className="text-3xl font-serif font-bold text-primary"
                      whileHover={{ scale: 1.1, x: i % 2 === 0 ? -5 : 5 }}
                    >
                      {m.year}
                    </motion.div>
                  </div>
                  <motion.div 
                    className="z-20 w-8 h-8 rounded-full bg-primary border-4 border-background shadow-lg shrink-0 md:mx-0 ml-[1.75rem] group-hover:scale-125 transition-transform duration-300"
                    whileHover={{ scale: 1.3 }}
                  />
                  <div className={`flex-1 md:w-1/2 ${i % 2 === 0 ? 'md:pl-10 pl-0' : 'md:pr-10 pl-0'}`}>
                    <div className="md:hidden text-xl font-bold text-primary mb-1">{m.year}</div>
                    <motion.div 
                      className="bg-card border border-border rounded-2xl p-5 shadow-md hover:shadow-xl transition-all group-hover:border-primary/30"
                      whileHover={{ x: i % 2 === 0 ? 10 : -10 }}
                    >
                      <p className="text-foreground text-sm leading-relaxed">{m.event}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CORPORATE INFO WITH STAGGER REVEAL ── */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Reveal className="text-center mb-16">
              <h2 className="text-4xl font-serif font-bold">Corporate Information</h2>
            </Reveal>
            <Reveal>
              <motion.div 
                className="bg-card rounded-[3rem] border border-border p-10 md:p-16 shadow-lg"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <dl className="space-y-6">
                  {[
                    { label: "Legal Name", val: "Arshith Fresh India Private Limited" },
                    { label: "Brand / Group Name", val: "Arshith Groups" },
                    { label: "Company Type", val: "Private Limited (Non-Government)" },
                    { label: "CIN", val: "U46300AP2025PTC119022", mono: true },
                    { label: "Incorporation Date", val: "April 24, 2025" },
                    { label: "RoC Jurisdiction", val: "RoC-Vijayawada, Andhra Pradesh" },
                    { label: "Status", val: "Active", status: true },
                    { label: "Directors", val: "Farook Nurubhasha · Pallavi Nelli" },
                    { label: "Email", val: "contact@arshithgroup.com" },
                    { label: "Website", val: "arshithgroup.com" },
                  ].map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="grid md:grid-cols-3 gap-2 border-b border-border/50 pb-6 last:border-0 last:pb-0"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                    >
                      <dt className="font-bold text-foreground">{item.label}</dt>
                      <dd className={`md:col-span-2 ${item.mono ? 'font-mono text-sm' : ''} ${item.status ? 'text-primary font-bold' : 'text-muted-foreground'}`}>
                        {item.val}
                      </dd>
                    </motion.div>
                  ))}
                  <motion.div 
                    className="grid md:grid-cols-3 gap-2 pt-6 border-t border-border/50"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.4 }}
                  >
                    <dt className="font-bold text-foreground">Registered Address</dt>
                    <dd className="md:col-span-2 text-muted-foreground leading-relaxed">
                      D No 10/39, Naguluppalapadu Mandal,<br />
                      Timmasamudram, Prakasam, Chirala,<br />
                      Andhra Pradesh – 523185
                    </dd>
                  </motion.div>
                </dl>
              </motion.div>
            </Reveal>

            <motion.div 
              className="mt-12 flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {["MCA Registered", "ISO Compliant", "Made in India", "Cloud-Native", "AI-First", "Incorporated April 24, 2025"].map((c, i) => (
                <motion.div 
                  key={i} 
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-muted cursor-pointer"
                  whileHover={{ scale: 1.05, backgroundColor: "rgba(var(--primary), 0.1)", borderColor: "rgba(var(--primary), 0.3)" }}
                  transition={{ duration: 0.2 }}
                >
                  <CheckCircle className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium">{c}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}