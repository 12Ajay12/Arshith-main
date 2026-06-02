import { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Globe, ShoppingBag, Leaf, Briefcase, Plus, Minus, Send, CheckCircle, ArrowRight, Star, Users, Package, Award, Clock, Shield, ExternalLink, Instagram, Twitter, Facebook, Building2, ChevronDown, Sparkles, Headphones, MessageCircle, Zap } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import PageTransition from '../components/PageTransition';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

const faqs = [
  { q: "Do you deliver pan-India?", a: "Yes, we deliver across India through our online store at arshithfresh.com. Free delivery above a minimum order value." },
  { q: "Are your products FSSAI certified?", a: "Yes, Arshith Fresh complies with all FSSAI (Food Safety and Standards Authority of India) food safety standards and regulations." },
  { q: "Do you offer white-label or private label?", a: "Yes. We offer private label manufacturing for bulk buyers. Contact us with your requirements." },
  { q: "How do I sell my produce to Arshith?", a: "Fill out the Farmer Partnership form above. We contact you within 2 business days to discuss your produce, pricing, and partnership structure." },
  { q: "What packaging do your products come in?", a: "Currently in food-grade packaging. We are transitioning to glass jars and biodegradable packaging by end of 2025." },
  { q: "Can I visit your facility?", a: "We welcome farm and facility visits by appointment. Contact us to schedule." }
];

const quickLinks = [
  { name: "Arshith Infotech", url: "/arshith-infotech", icon: "💻", desc: "IT Consulting & Digital Transformation" },
  { name: "Suntech Solutions", url: "/suntech-solutions", icon: "⚙️", desc: "Software Engineering" },
  { name: "Arshith Fresh", url: "/arshith-fresh", icon: "🌿", desc: "Organic Marketplace" },
  { name: "Arshith Digital", url: "/divisions", icon: "📱", desc: "Digital Marketing" },
  { name: "Arshith Logistics", url: "/divisions", icon: "🚚", desc: "Supply Chain" },
  { name: "Arshith Ventures", url: "/divisions", icon: "💡", desc: "Startup Incubation" },
];

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ['start start', 'end start'] });
  const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 3000);
  };

  return (
    <PageTransition>
      <div className="w-full overflow-hidden">

        {/* ── PREMIUM CINEMATIC HERO SECTION ── */}
        <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Video/Image Background with Parallax */}
          <motion.div className="absolute inset-0" style={{ y: yBg }}>
            <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/50 z-10" />
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2400&q=85"
            >
              <source src="https://cdn.pixabay.com/video/2023/06/26/169927-841902989_large.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40 z-10" />
          </motion.div>

          {/* Animated Particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
            {[...Array(30)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-white/20 rounded-full"
                initial={{
                  x: Math.random() * window.innerWidth,
                  y: Math.random() * window.innerHeight,
                  opacity: 0
                }}
                animate={{
                  y: [null, Math.random() * -100],
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
          <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />

          <div className="relative z-20 container mx-auto px-4 md:px-6">
            <motion.div
              style={{ opacity: heroOpacity }}
              className="text-center max-w-4xl mx-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-sm mb-6"
              >
                <Sparkles className="w-4 h-4 text-emerald-400" />
                <span className="text-xs font-bold tracking-wider text-white uppercase">Arshith Group · Global Headquarters</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-bold text-white mb-6 leading-[1.1] tracking-tight"
              >
                Let's Build
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                  Together
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl text-white/70 max-w-2xl mx-auto leading-relaxed"
              >
                Whether you're buying, farming, or partnering — we want to hear from you.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex flex-wrap justify-center gap-6 mt-12"
              >
                {[
                  { value: "100+", label: "Products", icon: Package },
                  { value: "5.0/5", label: "Rating", icon: Star },
                  { value: "500+", label: "Farmers", icon: Users },
                  { value: "24/7", label: "Support", icon: Headphones }
                ].map((stat, idx) => (
                  <div key={idx} className="text-center px-6 py-3 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                    <div className="flex items-center gap-2 justify-center mb-1">
                      <stat.icon className="w-4 h-4 text-emerald-400" />
                      <span className="text-2xl font-bold text-white">{stat.value}</span>
                    </div>
                    <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 text-white/60 flex flex-col items-center gap-1 cursor-pointer"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            onClick={() => window.scrollTo({ top: window.innerHeight, behavior: 'smooth' })}
          >
            <span className="text-xs font-mono tracking-wider font-semibold">EXPLORE</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </section>

        {/* ── STATS BAR ── */}
        <div className="bg-gradient-to-r from-emerald-700 to-teal-700 py-5 overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center gap-12 md:gap-20">
              {[
                { icon: Package, label: "Products", value: "100+" },
                { icon: Star, label: "Rating", value: "5.0/5" },
                { icon: Users, label: "Farmers", value: "500+" },
                { icon: Award, label: "Certified", value: "FSSAI" }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <item.icon className="w-5 h-5 text-white/80" />
                  <div>
                    <span className="text-white font-bold text-lg">{item.value}</span>
                    <span className="text-white/60 text-sm ml-1">{item.label}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ── PARTNERSHIP CARDS ── */}
        <section className="py-28 bg-gradient-to-b from-white to-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
              >
                <Zap className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">How Can We Help?</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">Choose Your Path</h2>
              <p className="text-muted-foreground text-lg">Select the option that best describes your needs</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                { id: 'general', title: 'Buy Our Products', icon: ShoppingBag, desc: 'Discover 100+ preservative-free groceries at arshithfresh.com or inquire for bulk/wholesale pricing.', cta: 'Visit Store', link: 'https://arshithfresh.com', gradient: 'from-emerald-500 to-teal-600', bgLight: 'bg-emerald-50' },
                { id: 'farmer', title: 'Partner as a Farmer', icon: Leaf, desc: 'Supply your natural harvest to Arshith. We offer above-MSP pricing, direct relationships, and a platform to reach urban India.', cta: 'Register as Partner', link: '#', gradient: 'from-blue-500 to-indigo-600', bgLight: 'bg-blue-50' },
                { id: 'business', title: 'B2B / Bulk / Export', icon: Briefcase, desc: 'Source at scale for your restaurant, FMCG brand, or export business. Premium quality, volume discounts, FSSAI compliant.', cta: 'Request Quote', link: '#', gradient: 'from-violet-500 to-purple-600', bgLight: 'bg-violet-50' }
              ].map((type, idx) => (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  whileHover={{ y: -8 }}
                  onClick={() => setInquiryType(type.id)}
                  className={`group cursor-pointer rounded-2xl p-8 transition-all duration-500 ${inquiryType === type.id
                      ? `bg-gradient-to-br ${type.gradient} shadow-2xl scale-105`
                      : `bg-white border border-gray-200 hover:shadow-xl hover:border-${type.gradient.split(' ')[1]}`
                    }`}
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 ${inquiryType === type.id
                      ? 'bg-white/20'
                      : type.bgLight
                    }`}>
                    <type.icon className={`w-8 h-8 ${inquiryType === type.id ? 'text-white' : `text-${type.gradient.split(' ')[1].replace('to-', '')}`}`} />
                  </div>
                  <h3 className={`text-2xl font-serif font-bold mb-3 ${inquiryType === type.id ? 'text-white' : 'text-foreground'}`}>{type.title}</h3>
                  <p className={`mb-6 leading-relaxed ${inquiryType === type.id ? 'text-white/80' : 'text-muted-foreground'}`}>{type.desc}</p>
                  {type.link && type.link !== '#' ? (
                    <a href={type.link} target="_blank" rel="noopener noreferrer" className={`inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3 ${inquiryType === type.id ? 'text-white' : 'text-primary'}`}>
                      {type.cta} <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className={`inline-flex items-center gap-2 font-semibold text-sm transition-all group-hover:gap-3 ${inquiryType === type.id ? 'text-white' : 'text-primary'}`}>
                      {type.cta} <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CONTACT SECTION ── */}
        <section className="py-28 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid lg:grid-cols-12 gap-12">
              {/* Left Column - Contact Info */}
              <div className="lg:col-span-5">
                <div className="sticky top-32 space-y-8">
                  <div>
                    <h3 className="text-2xl font-serif font-bold mb-6">Get in Touch</h3>
                    <div className="space-y-4">
                      {[
                        { icon: MapPin, text: "#45, Brigade Road, Ashok Nagar, Bengaluru, Karnataka – 560001", label: "Visit Us" },
                        { icon: Mail, text: "contact@arshithfresh.com", label: "Email Us", href: "mailto:contact@arshithfresh.com" },
                        { icon: Globe, text: "arshithfresh.com", label: "Website", href: "https://arshithfresh.com" }
                      ].map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-start gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-colors group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                            <item.icon className="w-5 h-5 text-emerald-600" />
                          </div>
                          <div>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} className="text-foreground font-medium hover:text-emerald-600 transition-colors">{item.text}</a>
                            ) : (
                              <address className="not-italic text-foreground font-medium leading-relaxed">{item.text}</address>
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Quick Links to Divisions */}
                  <div>
                    <h4 className="font-bold text-foreground mb-4 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-emerald-600" />
                      Our Divisions
                    </h4>
                    <div className="grid grid-cols-1 xs:grid-cols-2 gap-3">
                      {quickLinks.map((link, idx) => (
                        <motion.a
                          key={idx}
                          href={link.url}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: idx * 0.05 }}
                          whileHover={{ x: 5 }}
                          className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-emerald-50 transition-all group"
                        >
                          <span className="text-2xl">{link.icon}</span>
                          <div>
                            <p className="text-sm font-semibold text-foreground group-hover:text-emerald-600 transition-colors">{link.name}</p>
                            <p className="text-xs text-muted-foreground">{link.desc}</p>
                          </div>
                        </motion.a>
                      ))}
                    </div>
                  </div>

                  {/* Social Links */}
                  <div>
                    <h4 className="font-bold text-foreground mb-4">Connect With Us</h4>
                    <div className="flex gap-3">
                      {[
                        { icon: Linkedin, href: "https://linkedin.com/company/arshith-fresh-india-pvt-ltd", color: "hover:bg-[#0077b5]" },
                        { icon: Instagram, href: "#", color: "hover:bg-[#E4405F]" },
                        { icon: Twitter, href: "#", color: "hover:bg-[#1DA1F2]" },
                        { icon: Facebook, href: "#", color: "hover:bg-[#1877F2]" }
                      ].map((social, idx) => (
                        <motion.a
                          key={idx}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ y: -3, scale: 1.05 }}
                          className={`w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center transition-all ${social.color} hover:text-white`}
                        >
                          <social.icon className="w-4 h-4" />
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Form */}
              <div className="lg:col-span-7" id="contact-form">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-2xl md:rounded-3xl shadow-2xl p-5 sm:p-8 md:p-12 border border-gray-100"
                >
                  <div className="mb-8">
                    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full mb-4 ${inquiryType === 'general' ? 'bg-emerald-100' : inquiryType === 'farmer' ? 'bg-blue-100' : 'bg-violet-100'
                      }`}>
                      <span className={`text-xs font-bold uppercase ${inquiryType === 'general' ? 'text-emerald-700' : inquiryType === 'farmer' ? 'text-blue-700' : 'text-violet-700'
                        }`}>
                        {inquiryType === 'general' ? 'General Inquiry' : inquiryType === 'farmer' ? 'Farmer Partnership' : 'B2B Inquiry'}
                      </span>
                    </div>
                    <h3 className="text-3xl font-serif font-bold mb-2">Send us a message</h3>
                    <p className="text-muted-foreground">We'll get back to you within 24 hours</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="font-semibold">Full Name <span className="text-red-500">*</span></Label>
                        <Input id="name" placeholder="Enter your full name" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="font-semibold">Company / Farm Name</Label>
                        <Input id="company" placeholder="Optional" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="font-semibold">Email Address <span className="text-red-500">*</span></Label>
                        <Input id="email" type="email" placeholder="you@example.com" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="font-semibold">Phone Number <span className="text-red-500">*</span></Label>
                        <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" required />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="state" className="font-semibold">State / District</Label>
                      <Input id="state" placeholder="Where are you located?" className="rounded-xl h-12 bg-gray-50 border-gray-200 focus:bg-white" />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="font-semibold">Message <span className="text-red-500">*</span></Label>
                      <Textarea id="message" placeholder="Tell us how we can help..." className="min-h-[150px] rounded-xl bg-gray-50 border-gray-200 focus:bg-white resize-none" required />
                    </div>

                    <Button type="submit" className="w-full h-14 text-lg rounded-xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 transition-all group shadow-lg hover:shadow-xl">
                      {formSubmitted ? (
                        <span className="flex items-center gap-2">
                          <CheckCircle className="w-5 h-5" /> Message Sent Successfully!
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Send Message <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="py-28 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <div className="text-center mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 mb-4"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span className="text-xs font-bold tracking-[0.3em] uppercase text-emerald-700">FAQ</span>
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">Frequently Asked Questions</h2>
              <p className="text-muted-foreground text-lg">Everything you need to know about Arshith Group</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Collapsible
                  key={i}
                  open={openFaq === i}
                  onOpenChange={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-4 sm:p-6 text-left bg-white rounded-xl sm:rounded-2xl hover:shadow-md transition-all border border-gray-100">
                    <span className="text-lg sm:text-xl font-serif font-bold pr-8 text-foreground">{faq.q}</span>
                    <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
                      {openFaq === i ? <Minus className="w-5 h-5 text-emerald-600" /> : <Plus className="w-5 h-5 text-gray-600" />}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-4 sm:px-6 pb-4 sm:pb-6 pt-2">
                    <p className="text-lg text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>
        </section>

        {/* ── PREMIUM CTA SECTION ── */}
        <section className="py-28 bg-gradient-to-r from-emerald-700 via-teal-700 to-emerald-700 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-0 left-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-[100px]" />
          </div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto"
            >
              <Building2 className="w-16 h-16 text-white/30 mx-auto mb-6" />
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6">Ready to Partner With Us?</h2>
              <p className="text-xl text-white/80 mb-10">
                Whether you're a farmer, business, or individual — there's a place for you in the Arshith ecosystem.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <motion.a
                  href="https://arshithfresh.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  className="px-8 py-4 bg-white text-emerald-700 font-bold rounded-full shadow-xl inline-flex items-center gap-2 hover:shadow-2xl transition-all"
                >
                  Visit Arshith Fresh <ExternalLink className="w-4 h-4" />
                </motion.a>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-white/10 border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all backdrop-blur-sm"
                >
                  Contact Our Team
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </PageTransition>
  );
}