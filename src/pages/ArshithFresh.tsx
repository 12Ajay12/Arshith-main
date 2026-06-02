import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, ArrowUpRight, Truck, Building2, Globe, CheckCircle, Star } from 'lucide-react';
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
            <div className="absolute inset-0 bg-black/35 z-10" />
            <img src={heroBg} alt="Andhra Pradesh farms" className="w-full h-full object-cover" />
          </motion.div>
          <div className="relative z-20 container mx-auto px-4 text-center mt-16">
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border border-white/20 bg-white/5">
              <span className="text-xs font-bold tracking-[0.2em] uppercase text-white/70">A Division of Arshith Groups</span>
            </motion.div>
            <motion.h1 initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif font-bold text-white mb-4">
              Arshith Fresh
            </motion.h1>
            <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.25 }} className="text-xl text-white/75 max-w-xl mx-auto mb-8">
              India's purest food, delivered to your door. Direct from Andhra Pradesh farmers.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="flex flex-wrap gap-4 justify-center">
              <a href="https://arshithfresh.com" target="_blank" rel="noreferrer">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full text-sm cursor-pointer shadow-xl">
                  Shop at arshithfresh.com <ArrowUpRight className="w-4 h-4" />
                </motion.span>
              </a>
              <Link href="/sustainability">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 border border-white/20 text-white font-bold rounded-full text-sm cursor-pointer">
                  Our Methods
                </motion.span>
              </Link>
            </motion.div>
          </div>
        </section>

        {/* ── TRUST BAR ────────────────────────────── */}
        <div className="bg-primary text-white py-3 overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap gap-12">
            {[...Array(3)].flatMap(() => [
              'Chemical-Free', '·', 'Preservative-Free', '·', 'No Artificial Colors', '·',
              'Farmer-Direct', '·', 'FSSAI Compliant', '·', 'Made in Andhra Pradesh', '·',
            ]).map((t, i) => (
              <span key={i} className="text-xs font-bold tracking-[0.2em] uppercase">{t}</span>
            ))}
          </div>
        </div>

        {/* ── PRODUCT CATEGORIES ────────────────────── */}
        <section className="py-32">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-20">
              <p className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">8 Product Categories</p>
              <h2 className="text-4xl md:text-6xl font-serif font-bold mb-4">Pure. Natural. Yours.</h2>
              <p className="text-xl text-muted-foreground italic font-serif">"Preservative-free groceries crafted with tradition."</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((cat, i) => (
                <motion.div
                  key={cat.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07 }}
                >
                  <MagneticCard className="h-full">
                    <div className={`h-full group relative rounded-[2rem] bg-gradient-to-br ${cat.color} p-px shadow-md hover:shadow-2xl transition-all duration-300`}>
                      <div className="bg-card h-full rounded-[1.9rem] p-6 flex flex-col relative overflow-hidden">
                        <div className="flex justify-between items-start mb-8">
                          {cat.badge ? (
                            <span className="px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide">{cat.badge}</span>
                          ) : <span />}
                          <span className="text-sm font-bold bg-muted px-3 py-1 rounded-full ml-auto">{cat.price}</span>
                        </div>
                        <div className="flex-grow">
                          <h3 className="text-xl font-serif font-bold mb-3">{cat.title}</h3>
                          <p className="text-muted-foreground text-sm mb-5 leading-relaxed">{cat.desc}</p>
                          <div className="flex flex-wrap gap-2 mb-6">
                            {cat.tags.map(t => (
                              <span key={t} className="px-2.5 py-1 rounded-full border border-border text-xs font-medium">{t}</span>
                            ))}
                          </div>
                        </div>
                        <div className="mt-auto pt-4 border-t border-border">
                          <a href="https://arshithfresh.com" target="_blank" rel="noreferrer" className="inline-flex items-center text-primary font-bold text-sm group-hover:gap-2 gap-1 transition-all">
                            Shop on arshithfresh.com <ArrowRight className="w-4 h-4" />
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
        <section className="py-32 bg-muted/40 border-y border-border">
          <div className="container mx-auto px-4 md:px-6 space-y-32">
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
              <div key={i} className={`grid lg:grid-cols-2 gap-16 items-center ${s.side === 'right' ? '' : ''}`}>
                <motion.div
                  initial={{ opacity: 0, x: s.side === 'left' ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`rounded-[3rem] overflow-hidden bg-card border border-border aspect-[4/3] ${s.side === 'right' ? 'order-2' : ''}`}
                >
                  <img src={s.img} alt={s.alt} className="w-full h-full object-cover" />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: s.side === 'left' ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={s.side === 'right' ? 'order-1' : ''}
                >
                  <span className="text-primary font-bold tracking-widest uppercase text-sm mb-3 block">{s.price}</span>
                  <h2 className="text-4xl font-serif font-bold mb-2">{s.title}</h2>
                  <h3 className="text-xl font-semibold text-muted-foreground mb-6">{s.subtitle}</h3>
                  <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
                    <p>{s.desc1}</p>
                    <p>{s.desc2}</p>
                  </div>
                  <a href="https://arshithfresh.com" target="_blank" rel="noreferrer">
                    <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full cursor-pointer">
                      Shop Now <ArrowUpRight className="w-4 h-4" />
                    </motion.span>
                  </a>
                </motion.div>
              </div>
            ))}
          </div>
        </section>

        {/* ── REVIEWS ──────────────────────────────── */}
        <section className="py-32 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-16">
              <div className="flex justify-center gap-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-2">Loved Across India</h2>
              <p className="text-muted-foreground">5.0/5 Average Rating for our Veg Pickles</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {reviews.map((r, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-card border border-border rounded-2xl md:rounded-[2rem] p-5 sm:p-8"
                >
                  <div className="flex gap-1 text-yellow-400 mb-4">
                    {[...Array(5)].map((_, j) => <Star key={j} className="w-4 h-4 fill-current" />)}
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6 italic">"{r.text}"</p>
                  <div>
                    <p className="font-bold">{r.author}</p>
                    <p className="text-sm text-muted-foreground">{r.loc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── B2B ──────────────────────────────────── */}
        <section className="py-32 bg-foreground text-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-4">Scale With Arshith Fresh</h2>
              <p className="text-white/60 text-lg">Premium quality, preservative-free agri products for B2B buyers.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                { icon: Truck, title: "Wholesale Supply", points: ["Bulk quantities", "Custom packaging", "Consistent quality", "Year-round supply"] },
                { icon: Building2, title: "Restaurant Partnerships", points: ["Chef-grade ingredients", "Heritage spices & podulu", "Pure bilona ghee", "Cold-pressed oils"] },
                { icon: Globe, title: "Export Inquiry", points: ["FSSAI compliant", "Preservative-free guarantee", "International standards", "Secure logistics"] },
              ].map((c, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white/5 border border-white/10 p-5 sm:p-8 rounded-2xl md:rounded-[2rem]">
                  <c.icon className="w-8 h-8 text-primary mb-5" />
                  <h3 className="text-xl font-serif font-bold text-white mb-4">{c.title}</h3>
                  <ul className="space-y-2">
                    {c.points.map((pt) => (
                      <li key={pt} className="flex items-center gap-2 text-white/70 text-sm">
                        <CheckCircle className="w-4 h-4 text-primary shrink-0" />
                        {pt}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
            <div className="text-center">
              <Link href="/contact">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full cursor-pointer">
                  Contact Us for B2B <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
            </div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}
