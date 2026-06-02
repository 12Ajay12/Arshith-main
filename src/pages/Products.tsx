import { useRef } from 'react';
import { Link } from 'wouter';
import { motion, useMotionValue, useSpring, useTransform, useScroll } from 'framer-motion';
import { ArrowRight, Truck, Building2, Globe } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import MagneticCard from '../components/MagneticCard';
import { GradientHeading } from '../components/GradientHeading';

import gheeImg from '../assets/images/ghee.png';
import honeyImg from '../assets/images/honey.png';
import spicesImg from '../assets/images/spices.png';
import grainsImg from '../assets/images/grains.png';

const sesameOilImg = spicesImg;
const picklesImg = grainsImg;
const sunnundaluImg = honeyImg;
const dryFruitsImg = grainsImg;
const seedsImg = spicesImg;

const categories = [
  { id: "ghee-honey", title: "Ghee & Honey", badge: "Best Seller", desc: "Buy pure ghee and natural honey online from Arshith Fresh — premium quality cow ghee and honey with no added sugar or preservatives.", price: "from ₹165", color: "from-amber-600 to-amber-400" },
  { id: "oils", title: "Cold-Pressed Oils", badge: "", desc: "Extracted slowly using the traditional cold-pressed method, preserving full nutrition — no heat, no chemicals.", price: "from ₹59", color: "from-yellow-500 to-yellow-300" },
  { id: "pickles", title: "Veg Pickles", badge: "NEW", desc: "Newly arrived fresh homemade veg pickles made with natural ingredients & cold-pressed oils only. Just grandmother's recipes.", price: "from ₹249", color: "from-green-600 to-emerald-500" },
  { id: "spices", title: "Spices & Podulu", badge: "Best Seller", desc: "Authentic spice powders (podulu) and premium spices to bring traditional flavors to your cooking. Stone-ground.", price: "from ₹65", color: "from-red-700 to-rose-600" },
  { id: "sweets", title: "Sweets & Snacks", badge: "", desc: "Authentic traditional Telugu sweets and snacks prepared using time-honored recipes — fresh and premium quality.", price: "from ₹199", color: "from-orange-600 to-orange-400" },
  { id: "dry-fruits", title: "Dry Fruits & Nuts", badge: "Premium", desc: "Handpicked premium dry fruits and nuts. Cashews, almonds, walnuts, raisins, dates — no preservatives.", price: "from ₹299", color: "from-stone-600 to-stone-400" },
  { id: "seeds", title: "Seeds", badge: "Superfood", desc: "Nutrient-dense seeds for health-conscious families. No chemical treatment, full nutritional profiles retained.", price: "from ₹99", color: "from-emerald-500 to-teal-400" },
  { id: "essentials", title: "Cooking Essentials", badge: "", desc: "Heritage grains, pulses, and pantry staples — the backbone of authentic South Indian kitchens.", price: "from ₹49", color: "from-orange-800 to-amber-700" },
  { id: "podulu", title: "Specialty Podulu", badge: "", desc: "Five traditional karam podis combo. A curated collection crafted from time-honored recipes.", price: "from ₹65", color: "from-red-800 to-red-600" }
];

export default function Products() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.08 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto mb-16">
            <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8">
              Pure. Natural. Yours.
            </GradientHeading>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-serif italic"
            >
              Discover preservative-free groceries crafted with tradition at Arshith Fresh.
            </motion.p>
          </div>

          {/* FAKE TABS */}
          <div className="flex flex-wrap justify-center gap-2 mb-20">
            {["All", "Oils", "Ghee & Honey", "Pickles", "Spices", "Sweets", "Dry Fruits", "Seeds", "Essentials"].map((tab, i) => (
              <span key={i} className={`px-4 py-2 rounded-full text-sm font-bold cursor-pointer transition-colors ${i === 0 ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground hover:bg-primary/20'}`}>
                {tab}
              </span>
            ))}
          </div>

          {/* PRODUCT GRID */}
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-[350px] mb-40"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
          >
            {categories.map((cat) => (
              <motion.div key={cat.id} variants={itemVariants} className="perspective-1000">
                <MagneticCard className={`h-full group relative rounded-2xl md:rounded-[2.5rem] overflow-hidden bg-gradient-to-br ${cat.color} p-5 sm:p-8 flex flex-col cursor-pointer shadow-lg hover:shadow-2xl transition-all border border-black/10`}>
                  
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-500" />
                  
                  <div className="relative z-10 flex justify-between items-start mb-auto text-white">
                    {cat.badge ? (
                      <span className="px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-bold uppercase tracking-wider border border-white/30">
                        {cat.badge}
                      </span>
                    ) : <span />}
                    <span className="font-bold text-xl drop-shadow-md">{cat.price}</span>
                  </div>

                  <div className="relative z-20 mt-auto text-white" style={{ transform: 'translateZ(30px)' }}>
                    <h3 className="text-3xl font-serif font-bold mb-3 drop-shadow-md">{cat.title}</h3>
                    <p className="text-white/90 text-sm md:text-base mb-4 line-clamp-2 drop-shadow-sm">{cat.desc}</p>
                    
                    <div className="flex gap-2 mb-6">
                      <span className="text-[10px] uppercase font-bold bg-black/20 px-2 py-1 rounded border border-white/10">Preservative-Free</span>
                      <span className="text-[10px] uppercase font-bold bg-black/20 px-2 py-1 rounded border border-white/10">Chemical-Free</span>
                    </div>

                    <div className="overflow-hidden">
                      <div className="h-0 group-hover:h-auto opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                        <a href="https://arshithfresh.com" target="_blank" rel="noreferrer" className="inline-flex items-center font-bold bg-white text-black px-5 py-2 rounded-full text-sm hover:scale-105 transition-transform">
                          Shop on arshithfresh.com <ArrowRight className="ml-2 w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </motion.div>

          {/* SPOTLIGHTS */}
          <div className="space-y-32 mb-40">
            {/* Spotlight 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl md:rounded-[3rem] overflow-hidden bg-muted aspect-square">
                <img src={gheeImg} alt="Pure Desi Ghee" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">from ₹165</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Pure Desi Ghee</h3>
                <h4 className="text-2xl font-bold mb-4">The Bilona Difference</h4>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Our ghee is crafted using the ancient bilona method. Milk is cultured into curd, hand-churned into butter, and then slow-cooked. This rigorous fermentation process retains fat-soluble vitamins A, D, E, and K, creating a product that aids digestion and boosts immunity.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform">Buy Now</button>
              </motion.div>
            </div>

            {/* Spotlight 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="order-2 md:order-1">
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">from ₹101</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Cold-Pressed Sesame Oil</h3>
                <h4 className="text-2xl font-bold mb-4">The Cold-Press Method</h4>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Extracted mechanically below 50°C without the use of hexane or chemicals. This preserves oleic acid, polyunsaturated fats, and natural antioxidants. With its deep golden hue and nutty aroma, it is perfect for everyday cooking and exceptionally beneficial for skincare.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform">Buy Now</button>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl md:rounded-[3rem] overflow-hidden bg-muted aspect-square order-1 md:order-2">
                <img src={sesameOilImg} alt="Sesame Oil" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            {/* Spotlight 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="rounded-2xl md:rounded-[3rem] overflow-hidden bg-muted aspect-square">
                <img src={picklesImg} alt="Mango Pickle" className="w-full h-full object-cover" />
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
                <span className="text-primary font-bold tracking-widest uppercase text-sm mb-4 block">from ₹249 • ⭐ 5.0/5 Rating</span>
                <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6">Avakaya Mango Pickle</h3>
                <h4 className="text-2xl font-bold mb-4">Grandmother's Recipe, Preserved</h4>
                <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
                  Handmade with sun-dried mangoes and cold-pressed oils. Zero chemical preservatives. We follow the exact recipes passed down through generations in Andhra Pradesh to ensure every jar delivers pure, unadulterated flavor.
                </p>
                <button className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-bold hover:scale-105 transition-transform">Buy Now</button>
              </motion.div>
            </div>
          </div>

          {/* B2B SECTION */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="rounded-2xl md:rounded-[3rem] overflow-hidden bg-foreground text-background border border-border p-6 sm:p-12 md:p-24"
          >
            <div className="text-center mb-16">
              <GradientHeading className="text-4xl md:text-6xl font-serif font-bold mb-6 text-white">Partner For Scale</GradientHeading>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Source premium, authentic ingredients for your business.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <motion.div variants={itemVariants} className="bg-background/5 border border-white/10 p-5 sm:p-8 rounded-2xl md:rounded-[2rem]">
                <Truck className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-serif mb-4 text-white">Wholesale Supply</h3>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Bulk quantities available</li>
                  <li>Custom packaging options</li>
                  <li>FSSAI compliant products</li>
                  <li>Dedicated account manager</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-background/5 border border-white/10 p-5 sm:p-8 rounded-2xl md:rounded-[2rem]">
                <Building2 className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-serif mb-4 text-white">Restaurant Partnerships</h3>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>Chef-grade authentic spices</li>
                  <li>Pure bilona ghee & oils</li>
                  <li>Consistent quality supply</li>
                  <li>Volume discounts</li>
                </ul>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-background/5 border border-white/10 p-5 sm:p-8 rounded-2xl md:rounded-[2rem]">
                <Globe className="w-10 h-10 text-primary mb-6" />
                <h3 className="text-2xl font-bold font-serif mb-4 text-white">Export Inquiry</h3>
                <ul className="space-y-3 text-muted-foreground list-disc list-inside">
                  <li>International compliance</li>
                  <li>Secure global logistics</li>
                  <li>Preservative-free guarantee</li>
                  <li>Private label capabilities</li>
                </ul>
              </motion.div>
            </div>
            
            <div className="text-center">
               <Link href="/contact" className="inline-block px-10 py-5 bg-primary text-primary-foreground text-lg font-bold rounded-full hover:scale-105 transition-transform">
                 Contact Us
               </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}