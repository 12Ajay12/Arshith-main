import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Leaf, Cpu, BarChart2, Megaphone, Truck, Lightbulb, ChevronDown, ChevronLeft, ChevronRight, Building2, Cloud, Database, Shield, Globe, Zap, TrendingUp, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import AnimatedCounter from '../components/AnimatedCounter';
import ParticleBackground from '../components/ParticleBackground';
import heroBg from '../assets/images/hero-bg.png';
import gheeImg from '../assets/images/ghee.png';
import honeyImg from '../assets/images/honey.png';
import spicesImg from '../assets/images/spices.png';

const divisions = [
  {
    icon: Leaf,
    name: "Agriculture & Agri-Tech",
    entity: "Arshith Fresh",
    desc: "Pure, chemical-free food products sourced directly from Andhra Pradesh farmers. Bilona ghee, cold-pressed oils, heritage spices & more.",
    href: "/arshith-fresh",
    external: "https://arshithfresh.com",
    color: "from-emerald-500 to-teal-600",
    accent: "bg-emerald-50 dark:bg-emerald-950/30",
  },
  {
    icon: Cpu,
    name: "Information Technology",
    entity: "Arshith Tech",
    desc: "Custom software development, enterprise technology solutions, and tech-driven platforms for the agricultural and commerce sectors.",
    href: "/divisions",
    color: "from-blue-500 to-indigo-600",
    accent: "bg-blue-50 dark:bg-blue-950/30",
  },
  {
    icon: BarChart2,
    name: "Commerce & Finance",
    entity: "Arshith Commerce",
    desc: "E-commerce platforms, B2B trade facilitation, supply chain financing, and financial advisory for agri-startups and SMEs.",
    href: "/divisions",
    color: "from-violet-500 to-purple-600",
    accent: "bg-violet-50 dark:bg-violet-950/30",
  },
  {
    icon: Megaphone,
    name: "Digital Marketing & Design",
    entity: "Arshith Digital",
    desc: "Brand identity, digital campaigns, social media strategy, and creative content that connects purpose-driven brands to their audiences.",
    href: "/divisions",
    color: "from-rose-500 to-pink-600",
    accent: "bg-rose-50 dark:bg-rose-950/30",
  },
  {
    icon: Truck,
    name: "Supply Chain Management",
    entity: "Arshith Logistics",
    desc: "End-to-end cold-chain logistics, farm-to-consumer fulfillment, warehousing, and B2B distribution networks across India.",
    href: "/divisions",
    color: "from-amber-500 to-orange-600",
    accent: "bg-amber-50 dark:bg-amber-950/30",
  },
  {
    icon: Lightbulb,
    name: "Ventures & Incubation",
    entity: "Arshith Ventures",
    desc: "Startup incubation, strategic investments, and new business development — building the next generation of purpose-led Indian companies.",
    href: "/divisions",
    color: "from-slate-500 to-gray-600",
    accent: "bg-slate-50 dark:bg-slate-950/30",
  },
];

const stats = [
  { value: 6, suffix: '', label: 'Business Divisions' },
  { value: 2, suffix: '', label: 'Founding Leaders' },
  { value: 50, suffix: '+', label: 'Farmers Partnered' },
  { value: 8, suffix: '+', label: 'Product Categories' },
];

const freshProducts = [
  { img: gheeImg, name: "Pure Desi Ghee", price: "from ₹165", tag: "Best Seller" },
  { img: honeyImg, name: "Forest Honey", price: "from ₹222", tag: "Natural" },
  { img: spicesImg, name: "Heritage Spices", price: "from ₹65", tag: "Stone-ground" },
];

// Three Pillars Data - Infosys Style (with images)
const threePillars = [
  {
    icon: "💻",
    name: "Arshith Infotech",
    number: "01",
    tagline: "IT Consulting & Digital Transformation",
    desc: "Global IT consulting, enterprise automation, cloud transformation, and digital marketing solutions that help businesses scale in the digital ecosystem.",
    href: "/arshith-infotech",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",
    iconClass: "fa-laptop-code",
    color: "blue",
    gradient: "from-blue-500 to-indigo-600",
    lightBg: "bg-blue-50",
    borderHover: "group-hover:border-blue-300"
  },
  {
    icon: "⚙️",
    name: "Suntech Solutions",
    number: "02",
    tagline: "Software Engineering & Scalability",
    desc: "Advanced software development, data engineering, and business infrastructure solutions built to maximize operational efficiency and enterprise growth.",
    href: "/suntech-solutions",
    bgImage: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
    iconClass: "fa-microchip",
    color: "purple",
    gradient: "from-purple-500 to-pink-600",
    lightBg: "bg-purple-50",
    borderHover: "group-hover:border-purple-300"
  },
  {
    icon: "🌿",
    name: "Arshith Fresh",
    number: "03",
    tagline: "Organic E-Commerce Marketplace",
    desc: "A modern organic e-commerce marketplace connecting consumers directly with trusted farms for chemical-free, traditional, and wellness-focused products.",
    href: "/arshith-fresh",
    bgImage: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80",
    iconClass: "fa-leaf",
    color: "emerald",
    gradient: "from-emerald-500 to-teal-600",
    lightBg: "bg-emerald-50",
    borderHover: "group-hover:border-emerald-300"
  }
];

// Hero Business Data
const heroSlides = [
  {
    id: 1,
    title: "Arshith Infotech",
    subtitle: "IT Consulting & Digital Transformation",
    description: "Global IT consulting, enterprise automation, cloud transformation, and digital marketing solutions that help businesses scale in the digital ecosystem.",
    image: "https://static.vecteezy.com/system/resources/thumbnails/002/883/759/small/illustration-of-world-and-network-photo.jpg",
    stats: [
      { label: "Projects", value: "150+" },
      { label: "Satisfaction", value: "98%" },
      { label: "Support", value: "24/7" }
    ],
    gradient: "from-blue-500 to-indigo-600",
    href: "/arshith-infotech"
  },
  {
    id: 2,
    title: "Suntech Solutions",
    subtitle: "Software Engineering & Scalability",
    description: "Advanced software development, data engineering, and business infrastructure solutions built to maximize operational efficiency and enterprise growth.",
    image: "https://news-images.dhan.co/indian-infotech-software-limited-schedules-board-meeting-for-february-11-2026-to-review-q3-fy26-results.jpg",
    stats: [
      { label: "Products", value: "50+" },
      { label: "Data", value: "2PB+" },
      { label: "Uptime", value: "99.9%" }
    ],
    gradient: "from-purple-500 to-pink-600",
    href: "/suntech-solutions"
  },
  {
    id: 3,
    title: "Arshith Fresh",
    subtitle: "Organic E-Commerce Marketplace",
    description: "A modern organic e-commerce marketplace connecting consumers directly with trusted farms for chemical-free, traditional, and wellness-focused products.",
    image: "https://static.vecteezy.com/system/resources/previews/049/047/167/large_2x/selection-of-healthy-food-products-lying-on-dark-background-photo.jpg",
    stats: [
      { label: "Farmers", value: "50+" },
      { label: "Products", value: "200+" },
      { label: "Customers", value: "10K+" }
    ],
    gradient: "from-emerald-500 to-teal-600",
    href: "/arshith-fresh"
  }
];

function Section({ children, className = '' }: { children: React.ReactNode, className?: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Home() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoplay, setAutoplay] = useState(true);
  const [progress, setProgress] = useState(0);
  const slideDuration = 5000;

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(nextSlide, slideDuration);
    return () => clearInterval(interval);
  }, [autoplay, activeIndex]);

  useEffect(() => {
    if (!autoplay) {
      setProgress(0);
      return;
    }
    
    setProgress(0);
    const startTime = Date.now();
    
    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / slideDuration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress < 100) {
        requestAnimationFrame(updateProgress);
      }
    };
    
    const frame = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(frame);
  }, [activeIndex, autoplay]);

  return (
    <PageTransition>
      <div className="w-full overflow-hidden">

        {/* ── HERO SECTION WITH BOLD TEXT ── */}
        <div className="relative h-screen w-full overflow-hidden bg-black">
          <div className="absolute inset-0">
            {heroSlides.map((slide, idx) => (
              <motion.div
                key={slide.id}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: idx === activeIndex ? 1 : 0,
                  scale: idx === activeIndex ? 1.1 : 1.05
                }}
                transition={{ 
                  opacity: { duration: 0.8, ease: "easeInOut" },
                  scale: { duration: 5, ease: "linear" }
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/60 z-10" />
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>

          <div className="relative z-20 h-full flex flex-col justify-center">
            <div className="container mx-auto px-6 md:px-12 lg:px-16">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="max-w-3xl"
                >
                  {/* Badge */}
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-xs font-bold tracking-wider text-white uppercase">Arshith Group</span>
                  </div>

                  {/* Main Title */}
                  <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-5 leading-[1.1] tracking-tight drop-shadow-lg">
                    {heroSlides[activeIndex].title}
                  </h1>
                  
                  {/* Subtitle - BOLD & VISIBLE */}
                  <p className="text-lg md:text-xl font-bold text-white/90 mb-5 tracking-wide drop-shadow-md">
                    {heroSlides[activeIndex].subtitle}
                  </p>
                  
                  {/* Description - BOLD & VISIBLE */}
                  <p className="text-white/85 text-base md:text-lg font-medium max-w-xl leading-relaxed mb-8 drop-shadow-sm">
                    {heroSlides[activeIndex].description}
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-10">
                    {heroSlides[activeIndex].stats.map((stat, idx) => (
                      <div key={idx} className="border-l border-white/30 pl-4">
                        <div className={`text-xl md:text-2xl font-bold bg-gradient-to-r ${heroSlides[activeIndex].gradient} bg-clip-text text-transparent drop-shadow-sm`}>
                          {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-white/60 uppercase tracking-wider">{stat.label}</div>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="flex gap-4">
                    <Link href={heroSlides[activeIndex].href}>
                      <motion.span
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className={`inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r ${heroSlides[activeIndex].gradient} text-white font-bold rounded-full text-sm cursor-pointer transition-all shadow-lg hover:shadow-xl`}
                      >
                        Explore <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                    <Link href="/contact">
                      <motion.span
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center gap-2 px-6 py-3 bg-white/15 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full text-sm cursor-pointer hover:bg-white/25 transition-all"
                      >
                        Contact Us
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="absolute bottom-8 right-8 z-30 flex gap-2">
            <button onClick={prevSlide} className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group cursor-pointer">
              <ChevronLeft className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
            </button>
            <button onClick={nextSlide} className="w-10 h-10 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 flex items-center justify-center hover:bg-white/30 transition-all group cursor-pointer">
              <ChevronRight className="w-5 h-5 text-white group-hover:text-emerald-400 transition-colors" />
            </button>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex gap-3">
            {heroSlides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setActiveIndex(idx);
                  setProgress(0);
                }}
                className={`h-0.5 rounded-full transition-all duration-500 cursor-pointer ${
                  activeIndex === idx ? 'w-12 bg-white' : 'w-6 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>

          {/* Progress Bar */}
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white/20 z-30">
            <motion.div
              key={activeIndex}
              className={`h-full bg-gradient-to-r ${heroSlides[activeIndex].gradient}`}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.05, ease: "linear" }}
            />
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-8 z-30 text-white/50 flex flex-col items-center gap-1 cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] font-mono tracking-wider font-bold">SCROLL</span>
            <ChevronDown className="w-3 h-3" />
          </motion.div>
        </div>

        {/* ── MARQUEE BAR ─────────────────────────── */}
        <div className="bg-primary text-primary-foreground py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...Array(3)].flatMap(() => [
              'Agriculture & Agri-Tech', '·', 'Information Technology', '·',
              'Commerce & Finance', '·', 'Digital Marketing & Design', '·',
              'Supply Chain Management', '·', 'Ventures & Incubation', '·',
            ]).map((item, i) => (
              <span key={i} className="text-xs font-bold tracking-[0.2em] uppercase opacity-90">{item}</span>
            ))}
          </div>
        </div>

        {/* ── STATS ────────────────────────────────── */}
        <section className="py-24 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <Section>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
                {stats.map((s, i) => (
                  <div key={i} className="text-center">
                    <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                      <AnimatedCounter value={s.value} suffix={s.suffix} />
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">{s.label}</div>
                  </div>
                ))}
              </div>
            </Section>
          </div>
        </section>

        {/* ── INFOSYS-STYLE THREE PILLARS SECTION ── */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Our Businesses</span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">Three Pillars of Growth</h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Arshith Group manages its diverse portfolio through three distinct verticals — each addressing a critical dimension of modern industry.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {threePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ 
                    y: -12,
                    scale: 1.02,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  className="group relative bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100"
                >
                  {/* Image Container */}
                  <div className="relative h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${pillar.bgImage}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="text-4xl">{pillar.icon}</div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary mb-3">
                      {pillar.number} / Pillar
                    </div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-1">{pillar.name}</h3>
                    <p className="text-sm font-medium text-muted-foreground mb-3">{pillar.tagline}</p>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pillar.desc}</p>
                    <Link href={pillar.href}>
                      <motion.span 
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${pillar.gradient} bg-clip-text text-transparent hover:gap-3 transition-all cursor-pointer`}
                      >
                        Learn More <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ARSHITH INFOTECH FEATURE SECTION ── */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200">
                  <Cpu className="w-4 h-4 text-blue-600" />
                  <span className="text-xs font-bold tracking-wider text-blue-700 uppercase">Arshith Groups</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight">
                  ENGINEERING A<br />
                  <span className="text-blue-600">DIGITAL FUTURE</span>
                </h2>
                
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Raising the bar to the next level, Arshith Groups is undertaking ambitious goals related to Enterprise Digital Transformation and AI Integration. We aim to achieve 100% cloud-native operations by 2028, ahead of industry standards.
                </p>
                
                <p className="text-muted-foreground text-base leading-relaxed">
                  Digital innovation is embedded in our vision, culture, strategy, and business processes. We are committed to technological growth, and integrate cutting-edge IT solutions, scalable cloud infrastructure, and AI-driven automation in all aspects of our enterprise delivery.
                </p>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <div>
                    <div className="text-2xl font-bold text-blue-600">150+</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Projects Delivered</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">98%</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Client Satisfaction</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-blue-600">24/7</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-wider">Enterprise Support</div>
                  </div>
                </div>
                
                <Link href="/arshith-infotech">
                  <motion.span
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white font-bold rounded-full text-sm cursor-pointer transition-all shadow-lg hover:shadow-xl hover:bg-blue-700"
                  >
                    Know More <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl group"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-10" />
                <img 
                  src="https://www.larsentoubro.com/_next/image?url=https%3A%2F%2F2025prodstorageaccount-eqdyc8g8hpccdfez.a02.azurefd.net%2Fltprod%2Fmedia%2Fvr0lpwhh%2Fhomepage-sustainability.webp&w=2048&q=75"
                  alt="Arshith Infotech - Digital Transformation"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  style={{ minHeight: "400px" }}
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80";
                  }}
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── DIVISIONS GRID ───────────────────────── */}
        <section className="py-32 bg-muted/40">
          <div className="container mx-auto px-4 md:px-6">
            <Section className="text-center max-w-2xl mx-auto mb-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">What We Do</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-6">Six Divisions.<br />One Purpose.</h2>
              <p className="text-muted-foreground text-lg">Each division operates with independence and expertise, powered by the shared values of the Arshith Groups ecosystem.</p>
            </Section>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {divisions.map((div, i) => (
                <motion.div
                  key={div.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08, duration: 0.6 }}
                  whileHover={{ y: -4 }}
                  className="group relative bg-card border border-border rounded-[2rem] p-8 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${div.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  <div className={`w-12 h-12 rounded-2xl ${div.accent} flex items-center justify-center mb-6`}>
                    <div className={`bg-gradient-to-br ${div.color} rounded-xl w-10 h-10 flex items-center justify-center`}>
                      <div.icon className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <p className="text-xs font-bold tracking-widest uppercase text-primary mb-1">{div.entity}</p>
                  <h3 className="text-xl font-serif font-bold mb-3">{div.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">{div.desc}</p>
                  <Link href={div.href} className="inline-flex items-center gap-1 text-sm font-bold text-primary group-hover:gap-2 transition-all">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── GROUP STORY ──────────────────────────── */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
              <Section>
                <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-6">Who We Are</p>
                <h2 className="text-4xl md:text-5xl font-serif font-bold mb-8 leading-tight">
                  Born in the Fields<br />of Andhra Pradesh
                </h2>
                <div className="space-y-5 text-muted-foreground text-lg leading-relaxed">
                  <p>
                    Arshith Groups is a diversified business group incorporated in 2025 and headquartered in Chirala, Andhra Pradesh. We build companies, platforms, and ecosystems that serve India.
                  </p>
                  <p>
                    Our flagship division, Arshith Fresh, is already connecting thousands of families with pure, chemical-free food directly sourced from farmers. The same philosophy — transparency, fairness, and quality — guides every division we build.
                  </p>
                  <p className="text-foreground font-semibold border-l-4 border-primary pl-5">
                    "We are not just building businesses. We are building a system where every Indian entrepreneur, farmer, and family can thrive."
                  </p>
                </div>
                <div className="mt-10 flex gap-4">
                  <Link href="/about">
                    <motion.span
                      whileHover={{ scale: 1.03 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-bold rounded-full text-sm cursor-pointer"
                    >
                      Our Full Story <ArrowRight className="w-4 h-4" />
                    </motion.span>
                  </Link>
                </div>
              </Section>

              <Section>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Founded", value: "April 2025", sub: "Chirala, Andhra Pradesh" },
                    { label: "Registered", value: "MCA, India", sub: "CIN: U46300AP2025PTC119022" },
                    { label: "Vision", value: "Build India", sub: "Across 6 business domains" },
                    { label: "Status", value: "Active & Growing", sub: "FSSAI Compliant" },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-muted rounded-[1.5rem] p-6"
                    >
                      <div className="text-xs text-muted-foreground font-bold uppercase tracking-widest mb-2">{item.label}</div>
                      <div className="text-lg font-bold font-serif mb-1">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.sub}</div>
                    </motion.div>
                  ))}
                </div>
              </Section>
            </div>
          </div>
        </section>

        {/* ── VISION & MISSION ─────────────────────── */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6 max-w-5xl">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  label: "Vision",
                  title: "An India where enterprise, tradition and technology grow together.",
                  desc: "We envision a new India — where farmers are entrepreneurs, where traditional knowledge powers modern commerce, and where every region of this country can build world-class companies.",
                  bg: "bg-primary text-white",
                },
                {
                  label: "Mission",
                  title: "Build diverse, purpose-driven businesses that create lasting value.",
                  desc: "Our mission is to build a group of companies that collectively address India's most important growth opportunities — in food, technology, commerce, and beyond — with transparency, quality, and ethical intent.",
                  bg: "bg-muted",
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`${item.bg} rounded-[2.5rem] p-10 md:p-12`}
                >
                  <p className={`text-xs font-bold tracking-[0.25em] uppercase mb-6 ${i === 0 ? 'text-white/60' : 'text-muted-foreground'}`}>{item.label}</p>
                  <h3 className={`text-2xl font-serif font-bold mb-5 leading-tight ${i === 0 ? 'text-white' : 'text-foreground'}`}>{item.title}</h3>
                  <p className={`text-sm leading-relaxed ${i === 0 ? 'text-white/75' : 'text-muted-foreground'}`}>{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TEAM TEASER ──────────────────────────── */}
        <section className="py-24 bg-muted/40 border-t border-border">
          <div className="container mx-auto px-4 text-center">
            <Section>
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">Leadership</p>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6">Guided by Founders Who Care</h2>
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10">
                Farook Nurubhasha and Pallavi Nelli co-founded Arshith Groups with the goal of building purpose-led businesses from Andhra Pradesh for India.
              </p>
              <Link href="/team">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary font-bold rounded-full cursor-pointer">
                  Meet the Leadership <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </Section>
          </div>
        </section>

        {/* ── CAREERS CTA ──────────────────────────── */}
        <section className="py-20 bg-primary">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-4">Ready to Build India With Us?</h2>
              <p className="text-white/75 text-lg mb-8">We're hiring across divisions. Internships and full-time roles available.</p>
              <Link href="/careers">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full cursor-pointer text-sm shadow-xl">
                  View Open Positions <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}