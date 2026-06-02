import { motion } from 'framer-motion';
import { Globe, Cloud, Database, ArrowRight, CheckCircle, Zap, Shield, Laptop } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { GradientHeading } from '../components/GradientHeading';
import MagneticCard from '../components/MagneticCard';

const services = [
  {
    title: "IT Consulting",
    desc: "Global technology consulting to help corporations navigate complex digital landscapes and adopt emerging technologies.",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
    alt: "IT Consulting - Global technology strategy"
  },
  {
    title: "Digital Transformation",
    desc: "Transitioning traditional business models into automated, high-efficiency digital workflows.",
    icon: Zap,
    color: "from-indigo-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    alt: "Digital Transformation - Business automation"
  },
  {
    title: "Cloud Infrastructure",
    desc: "Deploying and managing scalable enterprise cloud solutions that ensure uptime and global accessibility.",
    icon: Cloud,
    color: "from-blue-600 to-indigo-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    alt: "Cloud Infrastructure - Enterprise cloud solutions"
  },
  {
    title: "Digital Marketing",
    desc: "Data-driven growth strategies and performance marketing to scale your presence in the modern web ecosystem.",
    icon: Laptop,
    color: "from-cyan-500 to-blue-500",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
    alt: "Digital Marketing - Performance marketing strategy"
  }
];

export default function ArshithInfotech() {
  return (
    <PageTransition>
      <div className="pt-32 pb-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">
          
          {/* HERO SECTION */}
          <div className="text-center max-w-4xl mx-auto mb-24">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
              <span className="text-xs font-bold tracking-widest uppercase text-blue-600 dark:text-blue-400">Arshith Infotech</span>
            </motion.div>
            <GradientHeading className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-8">
              Engineering a Digital Future.
            </GradientHeading>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-serif italic leading-relaxed"
            >
              Empowering global enterprises with automated workflows, cloud-native infrastructure, and performance-driven growth strategies.
            </motion.p>
          </div>

          {/* FEATURE IMAGE */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[3rem] overflow-hidden aspect-[21/9] mb-32 shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10" />
            <img 
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=2000&q=80" 
              alt="Global Technology Infrastructure" 
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-12 left-12 z-20 text-white max-w-lg">
              <h2 className="text-3xl font-serif font-bold mb-4">Enterprise-Grade Reliability</h2>
              <p className="text-white/80 leading-relaxed">We assist corporations in transitioning to automated workflows and executing growth strategies in the web ecosystem.</p>
            </div>
          </motion.div>

          {/* SERVICES GRID WITH IMAGES */}
          <div className="grid md:grid-cols-2 gap-8 mb-32">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <MagneticCard className="h-full">
                  <div className="bg-card border border-border rounded-[2.5rem] overflow-hidden h-full flex flex-col group hover:border-blue-500/50 transition-all duration-300">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent z-10" />
                      <img 
                        src={service.image} 
                        alt={service.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className={`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg z-20`}>
                        <service.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-8 flex flex-col flex-grow">
                      <h3 className="text-2xl font-serif font-bold mb-3">{service.title}</h3>
                      <p className="text-muted-foreground leading-relaxed flex-grow">{service.desc}</p>
                      <div className="mt-6 pt-6 border-t border-border flex items-center gap-2 text-blue-600 font-bold group-hover:gap-3 transition-all cursor-pointer">
                        Learn More <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </MagneticCard>
              </motion.div>
            ))}
          </div>

          {/* COMMITMENT SECTION - FIXED FOR DARK MODE */}
          <div className="relative rounded-[3rem] p-12 md:p-24 overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800 shadow-2xl">
            {/* Animated Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] -mr-48 -mt-48 animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px] -ml-48 -mb-48 animate-pulse" style={{ animationDelay: '1s' }} />
            
            <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 mb-6">
                  <Zap className="w-4 h-4 text-blue-400" />
                  <span className="text-xs font-bold tracking-wider text-blue-300 uppercase">Ready to Scale?</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">
                  Ready to Scale?
                </h2>
                <div className="space-y-5">
                  {[
                    "100% Cloud-Native Strategy",
                    "AI-Driven Process Automation",
                    "Data-Centric Performance Marketing",
                    "Round-the-clock Enterprise Support"
                  ].map((text) => (
                    <div key={text} className="flex items-center gap-4">
                      <div className="w-7 h-7 rounded-full bg-blue-500/20 flex items-center justify-center">
                        <CheckCircle className="w-4 h-4 text-blue-400" />
                      </div>
                      <span className="text-white/80 text-lg font-medium">{text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                  <p className="text-xl text-white/70 mb-6 leading-relaxed font-serif italic">
                    "Digital innovation is embedded in our vision, culture, strategy, and business processes."
                  </p>
                  <motion.button 
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full text-lg font-bold shadow-xl shadow-blue-900/30 hover:shadow-2xl transition-all inline-flex items-center gap-2"
                  >
                    Request Strategy Consult <ArrowRight className="w-4 h-4" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}
