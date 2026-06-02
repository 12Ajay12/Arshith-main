import { motion } from 'framer-motion';
import { Leaf, RefreshCcw, Sun, TreeDeciduous, ShieldCheck, CheckCircle2 } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { GradientHeading } from '../components/GradientHeading';

export default function Sustainability() {
  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
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
          <div className="text-center max-w-4xl mx-auto mb-32">
            <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8">
              Our Earth.<br/>Our Responsibility.
            </GradientHeading>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-3xl text-muted-foreground font-serif italic"
            >
              Sustainability isn't an initiative at Arshith — it is our fundamental operating principle.
            </motion.p>
          </div>

          {/* TRADITIONAL METHODS */}
          <motion.div 
            className="mb-40"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 text-center">
              Why Traditional Methods Are Sustainable
            </h2>

            <div className="grid lg:grid-cols-3 gap-8">
              {[
                { 
                  title: "Sun-Drying", 
                  icon: Sun, 
                  desc: "Sun-drying uses zero electricity. Exposing raw materials to direct sunlight naturally dehydrates, concentrates flavors, and preserves enzymes that industrial dryers destroy. Our spices, grains, and dried products are entirely sun-processed — reducing energy consumption and preserving full nutritional profiles. The sun has been a food processor for 5,000 years. We trust it more than machines." 
                },
                { 
                  title: "Stone-Grinding (Chakki)", 
                  icon: RefreshCcw, 
                  desc: "Stone chakki grinding generates no heat. Industrial grinding mills heat up to 80°C+ — destroying heat-sensitive B vitamins, antioxidants, and essential oils. Our stone grinders operate at ambient temperature, preserving every nutrient. The coarser texture also retains natural bran and fiber — making our flours and spice powders genuinely more nutritious than anything commercially ground." 
                },
                { 
                  title: "Bilona Churning (Ghee)", 
                  icon: Leaf, 
                  desc: "The bilona method is a 5,000-year-old process. Milk → curd (fermentation) → hand-churned butter (bilona) → slow-cooked ghee. This process reverses the butter fat, creating what Ayurveda calls 'ghruta' — ghee that aids digestion, supports liver function, and provides fat-soluble vitamins A, D, E, and K2. Industrial ghee skips the fermentation and hand-churning steps entirely. The result is a fundamentally different product." 
                }
              ].map((method, i) => (
                <motion.div key={i} variants={itemVariants} className="bg-card rounded-2xl md:rounded-[2.5rem] p-6 sm:p-10 border border-border shadow-sm hover:shadow-xl transition-all group hover:-translate-y-2">
                  <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-primary/10 flex items-center justify-center mb-6 sm:mb-8">
                    <method.icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-4 sm:mb-6">{method.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-base sm:text-lg">{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* COLD PRESS TECHNOLOGY */}
          <div className="mb-16 md:mb-40 grid md:grid-cols-2 gap-8 md:gap-12 items-center bg-muted rounded-2xl md:rounded-[3rem] p-6 sm:p-12 md:p-20 border border-border">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl md:text-5xl font-serif font-bold mb-6 md:mb-8">Cold-Press Technology</h2>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                Cold pressing extracts oil using mechanical pressure at temperatures below 50°C — retaining natural antioxidants, omega fatty acids, and the distinct flavor of each oil. Refined oils are extracted using hexane (a petroleum solvent) at 200°C+ — destroying all natural compounds. Our cold-pressed oils are simply different on a molecular level.
              </p>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} className="relative aspect-square max-w-[280px] mx-auto w-full">
               <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
               <div className="absolute inset-4 sm:inset-8 bg-background rounded-full flex flex-col items-center justify-center border-4 sm:border-8 border-primary shadow-2xl z-10">
                 <span className="text-3xl sm:text-5xl font-bold text-primary mb-2">&lt; 50°C</span>
                 <span className="text-sm sm:text-lg font-bold uppercase tracking-wider text-muted-foreground">Extraction Temp</span>
               </div>
            </motion.div>
          </div>

          {/* OUR FIVE COMMITMENTS */}
          <motion.div 
            className="mb-40 max-w-4xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <GradientHeading className="text-4xl md:text-6xl font-serif font-bold mb-16 text-center">
              Our Five Commitments
            </GradientHeading>

            <div className="space-y-6">
              {[
                { title: "Zero Artificial Additives", desc: "No preservatives, colors, flavors, or enhancers. Not in any product. Not ever." },
                { title: "Farmer-First Pricing", desc: "We pay above MSP (Minimum Support Price) to ensure farmers earn a dignified livelihood from every harvest." },
                { title: "Plastic Reduction", desc: "We are actively transitioning our entire product line to glass jars, clay pots, and biodegradable packaging materials." },
                { title: "Water Conservation", desc: "Traditional processing methods — sun-drying, hand-churning, stone-grinding — consume up to 80% less water than industrial alternatives." },
                { title: "Chemical-Free Agriculture", desc: "We partner exclusively with farmers who practice natural, chemical-free cultivation. No synthetic pesticides. No GMO crops." }
              ].map((item, i) => (
                <motion.div key={i} variants={itemVariants} className="flex gap-4 sm:gap-8 items-start bg-card p-6 sm:p-10 rounded-2xl sm:rounded-3xl border border-border overflow-hidden relative group">
                  <div className="absolute -right-4 -top-4 sm:-top-8 text-[80px] sm:text-[150px] font-bold font-serif text-muted/30 select-none pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    0{i+1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl sm:text-3xl font-serif font-bold mb-2 sm:mb-4 text-foreground">{item.title}</h3>
                    <p className="text-base sm:text-xl text-muted-foreground">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CERTIFICATIONS GRID */}
          <div className="mb-40 text-center">
            <h2 className="text-2xl font-mono tracking-widest uppercase text-muted-foreground mb-10">Verified Standards</h2>
            <motion.div 
              className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {["FSSAI Compliant", "MCA Registered", "Made in India", "Chemical-Free Promise", "Ethical Sourcing"].map((cert, i) => (
                <motion.div key={i} variants={itemVariants} className="flex items-center gap-3 px-8 py-4 bg-background border border-primary/20 rounded-full shadow-sm">
                  <CheckCircle2 className="w-6 h-6 text-primary" />
                  <span className="text-lg font-bold text-foreground">{cert}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* ECOSYSTEM VISION */}
          <motion.div 
            className="bg-foreground text-background rounded-2xl md:rounded-[3rem] p-6 sm:p-12 md:p-24 text-center border border-border"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-6xl font-serif font-bold mb-6 md:mb-10 text-white">The Ecosystem Vision</h2>
            <p className="text-lg md:text-2xl text-muted/90 max-w-4xl mx-auto leading-relaxed font-serif">
              "Arshith Group is building more than a food brand. We are building the infrastructure for responsible entrepreneurship in Indian agri-food. A digital ecosystem where technology enables clean e-commerce, where supply chains are transparent, where small producers can scale without compromising values. This is what we mean by 'powering tech-driven growth with sustainable innovation.'"
            </p>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}