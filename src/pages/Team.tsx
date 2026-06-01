import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useInView } from 'framer-motion';
import { Linkedin, Mail, ChevronDown, Quote, Award, TrendingUp, Users, Globe, Calendar, Newspaper, ExternalLink, Briefcase, Heart, Target, Eye, Sparkles, Star } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { GradientHeading } from '../components/GradientHeading';

export default function Team() {
  const [activeTab, setActiveTab] = useState<'farook' | 'pallavi'>('farook');
  const heroRef = useRef(null);
  const visionRef = useRef(null);
  const isVisionInView = useInView(visionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Founder data with enhanced information
  const founders = {
    farook: {
      name: "Farook Nurubhasha",
      role: "Co-Founder & Managing Director",
      location: "Prakasam, Andhra Pradesh",
      linkedin: "https://www.linkedin.com/in/farook-n-2bb2b5344/",
      email: "farook@arshithgroup.com",
      quote: "India's farmers are its greatest asset. Our job is simply to get out of the way and let their work speak — pure, unchanged, honest.",
      fullBio: "Farook Nurubhasha is a visionary leader with an engineering background and a deep-rooted commitment to social impact through enterprise. Growing up in the agricultural heartland of Prakasam district, he developed an intimate understanding of the systemic challenges within India's food supply chain. His mission is to bridge the gap between rural producers and urban consumers by leveraging technology as a tool for transparency and equity. As the Managing Director of Arshith Groups, Farook oversees the strategic trajectory of all six divisions. He is the architect of the group's 'Value-Driven Sourcing' model, which ensures that farmers receive fair compensation while consumers receive products of uncompromised purity.",
      expertise: ["Strategic Leadership", "Supply Chain Engineering", "Agri-Tech Platforms", "Farmer Relations", "Operations", "Rural Economy"],
      stats: [
        { label: "Years Experience", value: "10+" },
        { label: "Farmers Impacted", value: "500+" },
        { label: "Divisions Led", value: "6" }
      ],
      latestNews: [
        { date: "May 2026", title: "Arshith Group Expands Farmer Network to 500+ Partners", source: "Business Today" },
        { date: "April 2026", title: "Farook Nurubhasha Speaks at Agri-Tech Summit 2026", source: "Economic Times" },
        { date: "March 2026", title: "Revolutionizing Farm-to-Fork Supply Chain", source: "Forbes India" }
      ]
    },
    pallavi: {
      name: "Pallavi Nelli",
      role: "Co-Founder & Director",
      location: "Andhra Pradesh",
      linkedin: "https://www.linkedin.com/in/pallavi-n-4578033ab/",
      email: "pallavi@arshithgroup.com",
      quote: "When you hold a jar of our ghee, you're holding the work of a farmer, the wisdom of a grandmother, and the promise of a brand that refuses to compromise.",
      fullBio: "Pallavi Nelli serves as the Director and the philosophical anchor of Arshith Groups. Her vision is rooted in the 'Modernization of Heritage'—finding ways to bring ancient, healthy food processing traditions into the digital age without compromising their nutritional soul. She believes that traditional Indian wisdom, from Ayurveda to stone-grinding, is our greatest competitive advantage in a globalized economy. Pallavi spearheads Product R&D and Brand Architecture, ensuring that every product from Arshith Fresh is an authentic representation of its roots. Beyond agriculture, she leads the Digital and Ventures arms of the group, focusing on purpose-led brand storytelling.",
      expertise: ["Brand Architecture", "Heritage Food Science", "Product R&D", "Digital Strategy", "Startup Incubation", "Consumer Trust Systems"],
      stats: [
        { label: "Product Launches", value: "50+" },
        { label: "Brands Incubated", value: "8" },
        { label: "Customer Reach", value: "10K+" }
      ],
      latestNews: [
        { date: "May 2026", title: "Arshith Fresh Wins Best Organic Brand Award", source: "FICCI" },
        { date: "April 2026", title: "Pallavi Nelli on Preserving Heritage Through Modern Commerce", source: "YourStory" },
        { date: "March 2026", title: "Women in Business: Pallavi's Journey", source: "SheThePeople" }
      ]
    }
  };

  const currentFounder = founders[activeTab];

  return (
    <PageTransition>
      <div className="w-full overflow-hidden">

        {/* ── ADANI-STYLE HERO SECTION ── */}
        <section ref={heroRef} className="relative min-h-[70vh] flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <motion.div className="absolute inset-0" style={{ y: yBg }}>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2400&q=85" 
              alt="Leadership"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <div className="relative z-20 container mx-auto px-5 sm:px-6 py-20">
            <motion.div style={{ opacity }} className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm mb-6"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-medium tracking-wider text-white/70 uppercase">Arshith Group · Leadership</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                The Visionaries
                <br />
                <span className="text-emerald-400">Behind Arshith</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg md:text-xl text-white/60 max-w-2xl leading-relaxed"
              >
                Two entrepreneurs from Andhra Pradesh, united by a single mission: to build purpose-led businesses that serve India.
              </motion.p>
            </motion.div>
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

        {/* ── FOUNDER SHOWCASE ── */}
        <section className="py-24 bg-white dark:bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            {/* Founder Tabs - Premium Style */}
            <div className="flex justify-center mb-16">
              <div className="inline-flex bg-gray-100 dark:bg-muted rounded-full p-1 max-w-full overflow-x-auto">
                <button
                  onClick={() => setActiveTab('farook')}
                  className={`px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ${
                    activeTab === 'farook'
                      ? 'bg-blue-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground'
                  }`}
                >
                  Farook Nurubhasha
                </button>
                <button
                  onClick={() => setActiveTab('pallavi')}
                  className={`px-4 xs:px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-xs xs:text-sm sm:text-base transition-all duration-300 ${
                    activeTab === 'pallavi'
                      ? 'bg-rose-600 text-white shadow-lg'
                      : 'text-gray-600 dark:text-muted-foreground hover:text-gray-900 dark:hover:text-foreground'
                  }`}
                >
                  Pallavi Nelli
                </button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-start"
              >
                {/* Left Column - Profile Card */}
                <div className={`relative rounded-3xl overflow-hidden shadow-2xl ${
                  activeTab === 'farook' ? 'bg-gradient-to-br from-blue-50 to-white dark:from-blue-950/20 dark:to-card' : 'bg-gradient-to-br from-rose-50 to-white dark:from-rose-950/20 dark:to-card'
                }`}>
                  <div className="p-5 xs:p-6 sm:p-8 md:p-10">
                    <div className="flex items-center gap-6 mb-8">
                      <div className={`w-28 h-28 rounded-full flex items-center justify-center border-4 shadow-xl ${
                        activeTab === 'farook' ? 'border-blue-500/30 bg-blue-100 dark:bg-blue-950/40' : 'border-rose-500/30 bg-rose-100 dark:bg-rose-950/40'
                      }`}>
                        <span className={`text-4xl font-serif font-bold ${
                          activeTab === 'farook' ? 'text-blue-600' : 'text-rose-600'
                        }`}>
                          {activeTab === 'farook' ? 'FN' : 'PN'}
                        </span>
                      </div>
                      <div>
                        <h2 className="text-3xl font-serif font-bold text-foreground">{currentFounder.name}</h2>
                        <p className={`font-bold uppercase tracking-wider text-sm mb-1 ${
                          activeTab === 'farook' ? 'text-blue-600' : 'text-rose-600'
                        }`}>
                          {currentFounder.role}
                        </p>
                        <p className="text-muted-foreground text-sm">{currentFounder.location}</p>
                      </div>
                    </div>

                    <div className={`mb-8 pl-6 border-l-4 ${
                      activeTab === 'farook' ? 'border-blue-500/50' : 'border-rose-500/50'
                    }`}>
                      <Quote className="w-8 h-8 text-muted-foreground/30 mb-2" />
                      <p className="text-xl font-serif italic text-foreground leading-relaxed">
                        "{currentFounder.quote}"
                      </p>
                    </div>

                    <div className="space-y-4 text-muted-foreground text-base leading-relaxed mb-8">
                      <p>{currentFounder.fullBio}</p>
                    </div>

                    <div className="mb-8">
                      <h4 className="font-bold text-foreground mb-4 uppercase tracking-wider text-sm">Core Expertise</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentFounder.expertise.map((tag: string, i: number) => (
                          <span key={i} className={`px-3 py-1 rounded-full text-sm font-bold ${
                            activeTab === 'farook' 
                              ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400' 
                              : 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400'
                          }`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-8">
                      {currentFounder.stats.map((stat: any, idx: number) => (
                        <div key={idx} className="text-center p-3 rounded-xl bg-gray-50 dark:bg-muted/50">
                          <div className={`text-xl font-bold ${
                            activeTab === 'farook' ? 'text-blue-600' : 'text-rose-600'
                          }`}>
                            {stat.value}
                          </div>
                          <div className="text-xs text-muted-foreground">{stat.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="flex gap-4">
                      <a href={currentFounder.linkedin} target="_blank" rel="noopener noreferrer" className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        activeTab === 'farook' 
                          ? 'bg-blue-600 text-white hover:bg-blue-700' 
                          : 'bg-rose-600 text-white hover:bg-rose-700'
                      }`}>
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a href={`mailto:${currentFounder.email}`} className={`w-12 h-12 rounded-full flex items-center justify-center transition-all ${
                        activeTab === 'farook' 
                          ? 'bg-blue-100 text-blue-600 hover:bg-blue-200' 
                          : 'bg-rose-100 text-rose-600 hover:bg-rose-200'
                      }`}>
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Right Column - Latest News & Insights */}
                <div className="space-y-8">
                  <div>
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-muted mb-4">
                      <Newspaper className="w-4 h-4" />
                      <span className="text-xs font-bold tracking-wider uppercase">Latest News & Insights</span>
                    </div>
                    <h3 className="text-2xl font-serif font-bold mb-6">Recent Updates</h3>
                    
                    <div className="space-y-4">
                      {currentFounder.latestNews.map((news: any, idx: number) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group p-5 rounded-xl border border-gray-100 dark:border-border hover:border-gray-200 dark:hover:border-border/80 hover:shadow-md transition-all cursor-pointer"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <span className="text-xs font-medium text-muted-foreground">{news.date}</span>
                            <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                              activeTab === 'farook' ? 'bg-blue-100 text-blue-700 dark:bg-blue-950/40 dark:text-blue-400' : 'bg-rose-100 text-rose-700 dark:bg-rose-950/40 dark:text-rose-400'
                            }`}>
                              {news.source}
                            </span>
                          </div>
                          <p className="font-semibold text-foreground mb-2 group-hover:underline">{news.title}</p>
                          <div className="flex items-center gap-1 text-sm text-primary">
                            Read more <ExternalLink className="w-3 h-3" />
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Vision & Mission Cards */}
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-50 to-white dark:from-indigo-950/20 dark:to-card border border-indigo-100 dark:border-indigo-900/30">
                      <Target className="w-8 h-8 text-indigo-600 mb-3" />
                      <h4 className="font-bold mb-2">Vision</h4>
                      <p className="text-sm text-muted-foreground">Build India's most trusted ecosystem for ethical commerce and technology.</p>
                    </div>
                    <div className="p-5 rounded-xl bg-gradient-to-br from-emerald-50 to-white dark:from-emerald-950/20 dark:to-card border border-emerald-100 dark:border-emerald-900/30">
                      <Heart className="w-8 h-8 text-emerald-600 mb-3" />
                      <h4 className="font-bold mb-2">Mission</h4>
                      <p className="text-sm text-muted-foreground">Empower farmers, preserve heritage, and deliver purity through technology.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* ── SHARED VISION SECTION WITH PROFESSIONAL ANIMATIONS ── */}
        <section ref={visionRef} className="py-24 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
          {/* Animated Background Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-emerald-400/20 rounded-full"
                initial={{ 
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  scale: 0
                }}
                animate={{ 
                  y: [null, Math.random() * -200],
                  scale: [0, 1, 0],
                  opacity: [0, 0.5, 0]
                }}
                transition={{ 
                  duration: Math.random() * 5 + 3,
                  repeat: Infinity,
                  delay: Math.random() * 5
                }}
              />
            ))}
          </div>

          {/* Floating Orbs */}
          <motion.div 
            className="absolute top-20 left-10 w-72 h-72 bg-emerald-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ duration: 6, repeat: Infinity }}
          />
          <motion.div 
            className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ duration: 8, repeat: Infinity, delay: 1 }}
          />

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center max-w-5xl mx-auto"
            >
              {/* Animated Quote Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={isVisionInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
                className="flex justify-center mb-8"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl animate-pulse" />
                  <Quote className="w-16 h-16 text-emerald-400 relative z-10" />
                </div>
              </motion.div>

              {/* Animated Title with Stagger Effect */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={isVisionInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-8 leading-tight">
                  A Shared
                  <motion.span 
                    className="text-emerald-400 block mt-2"
                    initial={{ width: 0 }}
                    animate={isVisionInView ? { width: "100%" } : {}}
                    transition={{ duration: 0.8, delay: 0.5 }}
                  >
                    Vision
                  </motion.span>
                </h2>
              </motion.div>

              {/* Animated Quote Text */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={isVisionInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="relative"
              >
                <div className="absolute -left-4 -top-4 text-6xl text-emerald-400/20 font-serif">"</div>
                <div className="absolute -right-4 -bottom-4 text-6xl text-emerald-400/20 font-serif">"</div>
                <p className="text-xl md:text-2xl lg:text-3xl font-light italic leading-relaxed max-w-4xl mx-auto px-8 py-4">
                  To build an ecosystem where technology enables clean commerce, where farmers earn fair prices, and where every Indian family can access the food their ancestors trusted.
                </p>
              </motion.div>

              {/* Animated Decorative Line */}
              <motion.div
                initial={{ width: 0 }}
                animate={isVisionInView ? { width: "120px" } : {}}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="w-32 h-0.5 bg-gradient-to-r from-emerald-400 to-transparent mx-auto mt-10"
              />

              {/* Animated Signature/Footer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isVisionInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="mt-8 flex items-center justify-center gap-3 text-emerald-400/70"
              >
                <Sparkles className="w-4 h-4" />
                <span className="text-sm font-mono tracking-wider">— Farook & Pallavi, Co-Founders —</span>
                <Sparkles className="w-4 h-4" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── THE ARSHITH WAY ── */}
        <section className="py-20 bg-white dark:bg-background">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-primary">Core Principles</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">The Arshith Way</h2>
              <p className="text-muted-foreground text-lg">Five principles that guide every decision we make</p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
              {["Uncompromising Purity", "Farmer Empathy", "Radical Transparency", "Heritage Preservation", "Sustainable Scale"].map((principle, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-8 py-4 rounded-full bg-gradient-to-r from-gray-50 to-gray-100 dark:from-muted dark:to-card border border-gray-200 dark:border-border shadow-sm text-lg font-semibold text-foreground hover:shadow-md transition-all cursor-pointer"
                >
                  {principle}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP PILLARS ── */}
        <section className="py-20 bg-gray-50 dark:bg-card">
          <div className="container mx-auto px-5 sm:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Three Leadership Pillars</h2>
              <p className="text-muted-foreground">The foundational principles that drive our leadership approach</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
              {[
                { 
                  icon: <Users className="w-8 h-8" />, 
                  title: "Farmer Equity", 
                  desc: "Ensuring that the growth of Arshith Groups directly translates into dignified livelihoods for our 500+ partner farmers.",
                  color: "from-emerald-500 to-teal-600"
                },
                { 
                  icon: <TrendingUp className="w-8 h-8" />, 
                  title: "Tech-Led Purity", 
                  desc: "Using advanced supply chain tracking to monitor and guarantee zero-chemical processing at every stage of production.",
                  color: "from-blue-500 to-indigo-600"
                },
                { 
                  icon: <Award className="w-8 h-8" />, 
                  title: "Heritage Preservation", 
                  desc: "Giving ancient knowledge a modern, scalable digital platform to reach health-conscious families globally.",
                  color: "from-rose-500 to-pink-600"
                }
              ].map((pillar, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group p-5 xs:p-6 sm:p-8 bg-white dark:bg-background rounded-2xl shadow-md hover:shadow-xl transition-all hover:-translate-y-1 border border-gray-100 dark:border-border/30"
                >
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${pillar.color} flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3">{pillar.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{pillar.desc}</p>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Join Our Journey</h2>
              <p className="text-xl text-white/80 mb-10">
                Whether you're an ethical farmer, a conscious buyer, or looking to partner for scale, we are always building bridges.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-primary font-bold rounded-full hover:scale-105 transition-transform shadow-xl">
                  Partner With Us
                </button>
                <button className="px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full hover:bg-white/20 transition-all">
                  Explore Careers
                </button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}