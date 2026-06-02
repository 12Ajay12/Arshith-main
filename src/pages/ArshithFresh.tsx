import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Truck, Building2, Globe, CheckCircle, Star, Shield, Sparkles, TrendingUp, Award, Zap, Package, Users, Leaf } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import MagneticCard from '../components/MagneticCard';
import gheeImg from '../assets/images/ghee.png';
import honeyImg from '../assets/images/honey.png';
import spicesImg from '../assets/images/spices.png';
import grainsImg from '../assets/images/grains.png';
import heroBg from '../assets/images/hero-bg.png';

const sesameOilImg = spicesImg;
const picklesImg = grainsImg;

const categories = [
  { id: "ghee-honey", title: "Ghee & Honey", badge: "Best Seller", price: "from ₹165", desc: "Pure bilona cow ghee and natural forest honey with no added sugar or preservatives.", tags: ["Preservative-Free", "Made in India"], color: "from-amber-600 to-amber-400" },
  { id: "oils", title: "Cold-Pressed Oils", price: "from ₹59", desc: "Extracted slowly using the traditional cold-pressed method — no heat, no chemicals, full nutrition.", tags: ["Chemical-Free", "Traditional"], color: "from-yellow-500 to-yellow-300" },
  { id: "pickles", title: "Veg Pickles", badge: "⭐ 5.0/5", price: "from ₹249", desc: "Fresh homemade Avakaya and veg pickles made with cold-pressed oils only. Grandmother's recipe.", tags: ["Zero Preservatives", "Handmade"], color: "from-green-600 to-emerald-500" },
  { id: "spices", title: "Spices & Podulu", badge: "Best Seller", price: "from ₹65", desc: "Authentic stone-ground spice powders (podulu) and premium spices for traditional Telugu cooking.", tags: ["Stone-ground", "Traditional"], color: "from-red-700 to-rose-600" },
  { id: "sweets", title: "Sweets & Snacks", price: "from ₹199", desc: "Sunnundalu, laddus, and traditional Telugu snacks made using time-honored recipes — no refined sugar.", tags: ["No Refined Sugar", "Traditional"], color: "from-orange-600 to-orange-400" },
  { id: "dry-fruits", title: "Dry Fruits & Nuts", badge: "Premium", price: "from ₹299", desc: "Handpicked cashews, almonds, walnuts, raisins, and dates — no preservatives, no chemical treatment.", tags: ["Premium", "Preservative-Free"], color: "from-stone-600 to-stone-400" },
  { id: "seeds", title: "Seeds", badge: "Superfood", price: "from ₹99", desc: "Nutrient-dense seeds for health-conscious families. Full nutritional profiles retained.", tags: ["Superfood", "Chemical-Free"], color: "from-emerald-500 to-teal-400" },
  { id: "essentials", title: "Cooking Essentials", price: "from ₹49", desc: "Heritage grains, pulses, and pantry staples — the backbone of authentic South Indian kitchens.", tags: ["Heritage", "Natural"], color: "from-orange-800 to-amber-700" },
];

const reviews = [
  { text: "The Avakaya pickle tasted exactly like my grandmother made it. No added preservatives, just pure flavour.", author: "Priya K.", loc: "Hyderabad" },
  { text: "Their cold-pressed sesame oil has become a kitchen staple. Rich, pure, and genuinely different.", author: "Ramesh V.", loc: "Bangalore" },
  { text: "Sunnundalu made with honey and ghee — my kids love them. Finally a healthy snack with no sugar.", author: "Anitha S.", loc: "Chennai" },
];

const b2bFeatures = [
  {
    icon: Package,
    title: "Wholesale Supply",
    description: "Bulk quantities with consistent quality control",
    points: ["Bulk quantities with bulk pricing", "Custom packaging options", "Consistent quality across batches", "Year-round supply assurance"],
    stat: "500+",
    statLabel: "B2B Partners"
  },
  {
    icon: Building2,
    title: "Restaurant Partnerships",
    description: "Premium ingredients for discerning chefs",
    points: ["Chef-grade ingredients", "Heritage spices & podulu", "Pure bilona ghee", "Cold-pressed oils for kitchens"],
    stat: "200+",
    statLabel: "Restaurants Served"
  },
  {
    icon: Globe,
    title: "Export Inquiry",
    description: "Taking Indian heritage global",
    points: ["FSSAI & International compliant", "Preservative-free guarantee", "Secure temperature-controlled logistics", "End-to-end quality certification"],
    stat: "15+",
    statLabel: "Countries"
  },
];

export default function ArshithFresh() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '25%']);

  return (
    <PageTransition>
      <div className="w-full bg-background">

        {/* ── HERO ─────────────────────────────────── */}
        <section ref={heroRef} className="relative h-[70vh] flex items-center justify-center overflow-hidden">
          <motion.div className="absolute inset-0" style={{ y: yBg }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/50 z-10" />
            <img src={heroBg} alt="Andhra Pradesh farms" className="w-full h-full object-cover" />
          </motion.div>
          <div className="relative z-20 container mx-auto px-4 text-center mt-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm">
              <Leaf className="w-3 h-3 text-emerald-400" />
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/90">A Division of Arshith Groups</span>
            </motion.div>
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif font-bold text-white mb-4 drop-shadow-lg">
              Arshith Fresh
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="text-xl text-white/85 max-w-xl mx-auto mb-8 drop-shadow-md">
              India's purest food, delivered to your door. Direct from Andhra Pradesh farmers.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 justify-center">
              <a href="https://arshithfresh.com" target="_blank" rel="noreferrer">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full text-sm cursor-pointer shadow-xl hover:shadow-2xl transition-all">
                  Shop at arshithfresh.com <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </a>
              <Link href="/sustainability">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white font-bold rounded-full text-sm cursor-pointer hover:bg-white/20 transition-all">
                  Our Methods
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────── */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-700 text-white py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...Array(3)].flatMap(() => [
              '✓ Chemical-Free', '·', '✓ Preservative-Free', '·', '✓ No Artificial Colors', '·',
              '✓ Farmer-Direct', '·', '✓ FSSAI Compliant', '·', '✓ Made in Andhra Pradesh', '·',
            ]).map((t, i) => (
              <span key={i} className="text-xs font-bold tracking-[0.2em] uppercase">{t}</span>
            ))}
          </div>
        </div>

        {/* ── PRODUCT CATEGORIES ────────────────────── */}
        <section className="py-20 sm:py-24 md:py-32">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16 md:mb-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">8 Product Categories</p>
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif font-bold mb-4">Pure. Natural. Yours.</h2>
              <p className="text-base sm:text-xl text-muted-foreground italic font-serif">"Preservative-free groceries crafted with tradition."</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <MagneticCard className="h-full">
                    <div className={`h-full group relative rounded-xl sm:rounded-2xl md:rounded-[2rem] bg-gradient-to-br ${cat.color} p-px shadow-md hover:shadow-2xl transition-all duration-300`}>
                      <div className="bg-card h-full rounded-[calc(1.9rem-2px)] p-5 sm:p-6 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-6 sm:mb-8">
                          {cat.badge ? (
                            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold uppercase tracking-wide">{cat.badge}</span>
                          ) : <span />}
                          <span className="text-xs sm:text-sm font-bold bg-muted px-2.5 sm:px-3 py-1 rounded-full ml-auto">{cat.price}</span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-lg sm:text-xl font-serif font-bold mb-2 sm:mb-3">{cat.title}</h3>
                          <p className="text-muted-foreground text-xs sm:text-sm mb-4 sm:mb-5 leading-relaxed">{cat.desc}</p>
                          <div className="flex flex-wrap gap-1.5 sm:gap-2 mb-5 sm:mb-6">
                            {cat.tags.map(t => (
                              <span key={t} className="px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-full border border-border text-[10px] sm:text-xs font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-3 sm:pt-4 border-t border-border">
                          <a href="https://arshithfresh.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-bold text-xs sm:text-sm group-hover:gap-2 gap-1 transition-all">
                            Shop on arshithfresh.com <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </MagneticCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── SPOTLIGHTS ────────────────────────────── */}
        <section className="py-20 sm:py-24 md:py-32 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4 sm:px-6 md:px-8 space-y-20 sm:space-y-24 md:space-y-32">
            {[
              {
                img: gheeImg, alt: "Pure Desi Ghee", side: 'left',
                price: "from ₹165", title: "Pure Desi Ghee", subtitle: "The Bilona Difference",
                desc1: "Our ghee is crafted using the 5,000-year-old bilona method — starting with A2 cow milk, naturally fermented into curd, hand-churned into butter, and slow-cooked over a low flame.",
                desc2: "This process retains fat-soluble vitamins A, D, E, and K — creating what Ayurveda calls 'ghruta': ghee that aids digestion and boosts immunity.",
              },
              {
                img: sesameOilImg, alt: "Cold Pressed Sesame Oil", side: 'right',
                price: "from ₹101", title: "Cold-Pressed Sesame Oil", subtitle: "The Cold-Press Method",
                desc1: "Extracted mechanically at temperatures below 50°C — no hexane, no solvents. Industrial refining uses petroleum solvents at 200°C+, destroying all natural compounds.",
                desc2: "Our oil preserves oleic acid, polyunsaturated fats, and natural antioxidants. Deep golden hue, rich nutty aroma — perfect for cooking and skincare.",
              },
              {
                img: picklesImg, alt: "Avakaya Mango Pickle", side: 'left',
                price: "from ₹249 · ⭐ 5.0/5", title: "Avakaya Mango Pickle", subtitle: "Grandmother's Recipe, Preserved",
                desc1: "Handmade with sun-dried raw mangoes and cold-pressed oils. Zero chemical preservatives. Traditional spice blends from Andhra Pradesh.",
                desc2: "Our pickle follows the exact recipes passed down through generations in Prakasam district — every jar delivers unadulterated home flavour.",
              },
            ].map((s, i) => (
              <div key={i} className={`grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-center`}>
                <motion.div
                  initial={{ opacity: 0, x: s.side === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-xl sm:rounded-2xl md:rounded-[3rem] overflow-hidden bg-card border border-border aspect-[4/3] ${s.side === 'right' ? 'lg:order-2' : ''}`}
                >
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: s.side === 'left' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={s.side === 'right' ? 'lg:order-1' : ''}
                >
                  <span className="text-primary font-bold tracking-widest uppercase text-xs sm:text-sm mb-3 block">{s.price}</span>
                  <h2 className="text-3xl sm:text-4xl font-serif font-bold mb-2">{s.title}</h2>
                  <h3 className="text-lg sm:text-xl font-semibold text-muted-foreground mb-5 sm:mb-6">{s.subtitle}</h3>
                  <div className="space-y-3 sm:space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
                    <p>{s.desc1}</p>
                    <p>{s.desc2}</p>
                  </div>
                  <a href="https://arshithfresh.com" target="_blank" rel="noreferrer">
                    <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-600 to-teal-600 text-white font-bold rounded-full text-sm cursor-pointer shadow-lg hover:shadow-xl transition-all">
                      Shop Now <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS ──────────────────────────────── */}
        <section className="py-20 sm:py-24 md:py-32 bg-background">
          <div className="container mx-auto px-4 sm:px-6 md:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-current" />)}
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold mb-2">Loved Across India</h2>
              <p className="text-muted-foreground text-sm sm:text-base">5.0/5 Average Rating for our Veg Pickles</p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-xl sm:rounded-2xl md:rounded-[2rem] p-5 sm:p-6 md:p-8"
                >
                  <div className="flex gap-1 text-yellow-400 mb-3 sm:mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-5 sm:mb-6 italic">"{r.text}"</p>
                  <div>
                    <p className="font-bold text-sm sm:text-base">{r.author}</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">{r.loc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ADVANCED B2B SECTION - FIXED FOR DARK MODE ── */}
        <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden">
          {/* Premium Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-emerald-950 dark:from-emerald-950 dark:via-teal-950 dark:to-emerald-950" />

          {/* Animated Pattern Overlay */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          {/* Floating Particles Effect */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              animate={{ y: [0, -100, 0], x: [0, 50, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-10 left-[10%] w-32 h-32 bg-emerald-400/10 rounded-full blur-3xl"
            />
            <motion.div
              animate={{ y: [0, 100, 0], x: [0, -50, 0] }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute bottom-10 right-[10%] w-40 h-40 bg-teal-400/10 rounded-full blur-3xl"
            />
          </div>

          <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8">
            {/* Section Header - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20"
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-5 sm:mb-6">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-[10px] sm:text-xs font-bold tracking-[0.3em] uppercase text-white">B2B Partnerships</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 sm:mb-6">
                Scale With{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                  Arshith Fresh
                </span>
              </h2>

              <p className="text-white/80 text-base sm:text-lg max-w-2xl mx-auto">
                Premium quality, preservative-free agri products for discerning businesses worldwide
              </p>
            </motion.div>

            {/* B2B Features Grid - Advanced Card Design */}
            <div className="grid lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
              {b2bFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="relative h-full bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl md:rounded-[2rem] overflow-hidden hover:border-emerald-400/50 transition-all duration-300">
                    {/* Glow Effect on Hover */}
                    <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-teal-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    <div className="relative p-5 sm:p-6 md:p-8">
                      {/* Icon with Premium Ring */}
                      <div className="relative inline-block mb-5 sm:mb-6">
                        <div className="absolute inset-0 bg-emerald-400/20 rounded-full blur-xl group-hover:blur-2xl transition-all duration-500" />
                        <feature.icon className="relative w-10 h-10 sm:w-12 sm:h-12 text-emerald-400" strokeWidth={1.5} />
                      </div>

                      {/* Title & Stat */}
                      <div className="flex justify-between items-start mb-3 sm:mb-4">
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-white">
                          {feature.title}
                        </h3>
                        <div className="text-right">
                          <div className="text-2xl sm:text-3xl font-bold text-emerald-400">
                            {feature.stat}
                          </div>
                          <div className="text-[10px] sm:text-xs text-white/60 uppercase tracking-wider">
                            {feature.statLabel}
                          </div>
                        </div>
                      </div>

                      <p className="text-white/70 text-xs sm:text-sm mb-5 sm:mb-6">
                        {feature.description}
                      </p>

                      {/* Feature Points */}
                      <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                        {feature.points.map((point, idx) => (
                          <motion.li
                            key={idx}
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 + idx * 0.05 }}
                            className="flex items-start gap-2 text-white/70 text-xs sm:text-sm"
                          >
                            <CheckCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{point}</span>
                          </motion.li>
                        ))}
                      </ul>

                      {/* Decorative Line */}
                      <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-emerald-400/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom CTA - Premium Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 sm:gap-6 p-6 sm:p-8 rounded-2xl md:rounded-3xl bg-white/5 backdrop-blur-sm border border-white/20">
                <div className="flex items-center gap-3">
                  <Award className="w-8 h-8 sm:w-10 sm:h-10 text-emerald-400" />
                  <div className="text-left">
                    <p className="text-white font-bold text-sm sm:text-base">Trusted by Businesses Across India</p>
                    <p className="text-white/60 text-xs sm:text-sm">Join our growing network of partners</p>
                  </div>
                </div>

                <Link href="/contact">
                  <motion.span
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-bold rounded-full text-sm cursor-pointer shadow-lg hover:shadow-2xl transition-all whitespace-nowrap"
                  >
                    Contact Us for B2B
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
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
