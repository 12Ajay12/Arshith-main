import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Leaf, Cpu, BarChart2, Megaphone, Truck, Lightbulb, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const divisions = [
  {
    icon: Leaf,
    number: "01",
    name: "Agriculture & Agri-Tech",
    entity: "Arshith Fresh",
    tagline: "From Field to Family — Pure, Honest Food.",
    desc: "Our flagship division, Arshith Fresh India Private Limited, sources pure chemical-free food directly from small farmers across Andhra Pradesh. From bilona ghee and cold-pressed oils to heritage spices and natural honey — every product is crafted without preservatives, artificial colors, or industrial shortcuts.",
    highlights: [
      "Direct farmer partnerships across Andhra Pradesh",
      "8+ product categories: Ghee, Honey, Oils, Spices, Pickles, Dry Fruits, Seeds, Sweets",
      "Traditional processing: Bilona method, stone-grinding, sun-drying",
      "FSSAI compliant · Chemical-free promise · No preservatives",
      "B2B wholesale supply for restaurants & exporters",
    ],
    link: "/arshith-fresh",
    external: "https://arshithfresh.com",
    color: "from-emerald-500 to-teal-600",
    bg: "bg-emerald-50 dark:bg-emerald-950/20",
    status: "Active & Operational",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=2400&q=85",
  },
  {
    icon: Cpu,
    number: "02",
    name: "Information Technology",
    entity: "Arshith Tech",
    tagline: "Technology Built for India's Real Problems.",
    desc: "Arshith Tech focuses on building custom software solutions, enterprise platforms, and tech-driven tools for agriculture, commerce, and beyond. Our engineering team develops products that bridge the digital gap for India's growing SME sector.",
    highlights: [
      "Custom software development for agri and commerce sectors",
      "Enterprise platform development and system integrations",
      "Mobile application development (iOS & Android)",
      "Cloud infrastructure and DevOps consulting",
      "Tech-driven supply chain and logistics platforms",
    ],
    link: "/suntech-solutions",
    color: "from-blue-500 to-indigo-600",
    bg: "bg-blue-50 dark:bg-blue-950/20",
    status: "Building",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=85",
  },
  {
    icon: BarChart2,
    number: "03",
    name: "Commerce & Finance",
    entity: "Arshith Commerce",
    tagline: "Enabling Fair Trade at Every Scale.",
    desc: "Arshith Commerce facilitates B2B trade, e-commerce platform development, and financial services for Indian businesses — particularly in the agricultural and food sector. We believe fair commerce creates resilient communities.",
    highlights: [
      "B2B trade facilitation and marketplace solutions",
      "E-commerce store development and management",
      "Supply chain financing for small producers",
      "Financial advisory for agri-startups and SMEs",
      "Import-export compliance and documentation support",
    ],
    link: "/contact",
    color: "from-violet-500 to-purple-600",
    bg: "bg-violet-50 dark:bg-violet-950/20",
    status: "Building",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=2400&q=85",
  },
  {
    icon: Megaphone,
    number: "04",
    name: "Digital Marketing & Design",
    entity: "Arshith Digital",
    tagline: "Stories That Connect Brands to People.",
    desc: "Arshith Digital is our creative and performance marketing arm. We build brand identities, run data-driven campaigns, create visual design systems, and help purpose-driven brands reach their audiences across digital channels.",
    highlights: [
      "Brand identity design and visual strategy",
      "Performance marketing: Meta, Google, YouTube ads",
      "Social media management and content creation",
      "SEO, SEM, and organic growth strategy",
      "Video production and motion graphics",
    ],
    link: "/arshith-infotech",
    color: "from-rose-500 to-pink-600",
    bg: "bg-rose-50 dark:bg-rose-950/20",
    status: "Building",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=2400&q=85",
  },
  {
    icon: Truck,
    number: "05",
    name: "Supply Chain Management",
    entity: "Arshith Logistics",
    tagline: "Moving the Right Products, the Right Way.",
    desc: "Arshith Logistics develops and manages supply chains for the food and agriculture sector. Our focus is on building cold-chain infrastructure, last-mile delivery solutions, and technology-enabled warehouse management.",
    highlights: [
      "Cold-chain logistics for perishable food products",
      "Farm-to-consumer and farm-to-business fulfillment",
      "Multi-city warehousing and inventory management",
      "Last-mile delivery network across Andhra Pradesh",
      "B2B distribution partnerships with retailers and restaurants",
    ],
    link: "/contact",
    color: "from-amber-500 to-orange-600",
    bg: "bg-amber-50 dark:bg-amber-950/20",
    status: "Building",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=2400&q=85",
  },
  {
    icon: Lightbulb,
    number: "06",
    name: "Ventures & Incubation",
    entity: "Arshith Ventures",
    tagline: "Backing Bold Ideas. Building the Future.",
    desc: "Arshith Ventures is our investment and incubation arm. We identify, invest in, and build early-stage companies that align with our vision — purpose-led businesses in agriculture, food-tech, sustainability, and the Indian consumer economy.",
    highlights: [
      "Early-stage startup incubation and mentorship",
      "Seed investments in agri-tech and food-tech",
      "Strategic partnerships with universities and accelerators",
      "Access to Arshith Groups' distribution and technology ecosystem",
      "Focus on Tier 2 and Tier 3 city entrepreneurs",
    ],
    link: "/arshith-infotech",
    color: "from-slate-500 to-gray-700",
    bg: "bg-slate-50 dark:bg-slate-950/20",
    status: "Planning",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=2400&q=85",
  },
];

export default function Divisions() {
  const heroRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);

  const nextDivision = () => {
    setActiveIndex((prev) => (prev + 1) % divisions.length);
  };

  const prevDivision = () => {
    setActiveIndex((prev) => (prev - 1 + divisions.length) % divisions.length);
  };

  return (
    <PageTransition>
      <div className="w-full overflow-hidden">

        {/* ── ADANI-STYLE HERO SECTION ── */}
        <section ref={heroRef} className="relative min-h-[60vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800">
          <motion.div className="absolute inset-0" style={{ y: yBg }}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2400&q=85" 
              alt="Divisions"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 container mx-auto px-5 sm:px-6 py-20">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium tracking-wider text-white/70 uppercase">Arshith Groups · Divisions</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                Six Divisions.
                <br />
                <span className="text-emerald-400">One Vision.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              >
                Arshith Groups operates across six interconnected business domains, each building towards a stronger, more self-reliant India.
              </motion.p>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/40 flex flex-col items-center gap-1 cursor-pointer"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-[10px] font-mono tracking-wider">SCROLL</span>
            <ChevronDown className="w-3 h-3" />
          </motion.div>
        </section>

        {/* ── PREMIUM DIVISION CAROUSEL / SHOWCASE ── */}
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Explore Divisions</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Each Division, A Powerhouse</h2>
              <p className="text-muted-foreground">Six interconnected businesses building a stronger India</p>
            </div>

            {/* Interactive Division Cards Grid - Premium Layout */}
            <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {divisions.map((div, idx) => (
                <motion.div
                  key={div.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.08, duration: 0.6 }}
                  className="group relative bg-white dark:bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer border border-gray-100 dark:border-border/30"
                >
                  {/* Image Background */}
                  <div className="relative h-48 xs:h-56 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{ backgroundImage: `url('${div.image}')` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${div.color} flex items-center justify-center shadow-lg`}>
                        <div.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${div.bg} ${div.color.split(' ')[1]?.replace('to-', 'text-') || 'text-primary'} mb-2`}>
                        {div.number} / 06
                      </div>
                      <h3 className="text-xl font-serif font-bold text-white mb-1">{div.name}</h3>
                      <p className="text-white/70 text-xs uppercase tracking-wider">{div.entity}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                        div.status === 'Active & Operational' 
                          ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-950/40 dark:text-emerald-400' 
                          : div.status === 'Building' 
                          ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400'
                          : 'bg-gray-100 text-gray-600 dark:bg-muted dark:text-muted-foreground'
                      }`}>
                        {div.status}
                      </span>
                      <span className="text-xs text-muted-foreground">{div.tagline}</span>
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-3">{div.desc}</p>
                    
                    <div className="space-y-2 mb-4">
                      {div.highlights.slice(0, 3).map((highlight, i) => (
                        <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle className="w-3 h-3 text-primary shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                      {div.highlights.length > 3 && (
                        <p className="text-xs text-primary mt-1">+{div.highlights.length - 3} more features</p>
                      )}
                    </div>
                    
                    <Link href={div.link}>
                      <motion.span 
                        whileHover={{ x: 5 }}
                        className={`inline-flex items-center gap-2 text-sm font-bold bg-gradient-to-r ${div.color} bg-clip-text text-transparent hover:gap-3 transition-all cursor-pointer`}
                      >
                        Explore Division <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── STATISTICS SECTION ── */}
        <section className="py-20 bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">6</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Business Divisions</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">500+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Farmers Partnered</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">50+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Tech Experts</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-emerald-400 mb-2">10K+</div>
                <div className="text-sm text-white/60 uppercase tracking-wider">Customers Served</div>
              </div>
            </div>
          </div>
        </section>

        {/* ── INTERCONNECTED ECOSYSTEM ── */}
        <section className="py-24 bg-gray-50 dark:bg-card">
          <div className="container mx-auto px-5 sm:px-6 text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Synergy</span>
              </div>
              <h2 className="text-3xl md:text-5xl font-serif font-bold">An Interconnected Ecosystem</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                While each division operates with independent expertise, they share data, logistics, technology, and a common purpose. 
                Arshith Fresh supplies the food. Arshith Tech builds the platforms. Arshith Commerce enables the trade. 
                Arshith Digital tells the story. Arshith Logistics moves the products. Arshith Ventures funds the future.
              </p>
              <div className="pt-8">
                <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* ── PREMIUM CTA ── */}
        <section className="py-24 bg-primary">
          <div className="container mx-auto px-5 sm:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Partner With Us</h2>
              <p className="text-xl text-white/80 mb-10">
                Whether you're a farmer, investor, enterprise buyer, or entrepreneur — there's a place for you in our ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold rounded-full cursor-pointer transition-all shadow-lg hover:shadow-xl"
                  >
                    Get in Touch <ArrowRight className="w-4 h-4" />
                  </motion.span>
                </Link>
                <Link href="/arshith-fresh">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full cursor-pointer hover:bg-white/20 transition-all"
                  >
                    Explore Arshith Fresh
                  </motion.span>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}