import { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail, MapPin, Phone, Linkedin, Globe, ShoppingBag, Leaf, Briefcase, Plus, Minus } from 'lucide-react';
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

export default function Contact() {
  const [inquiryType, setInquiryType] = useState('general');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const containerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.1 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <PageTransition>
      <div className="pt-32 pb-32 bg-background min-h-screen">
        <div className="container mx-auto px-5 sm:px-6">
          {/* HERO */}
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
            >
              Let's Build Together
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl md:text-2xl text-muted-foreground font-serif italic"
            >
              Whether you're buying, farming, or partnering — we want to hear from you.
            </motion.p>
          </div>

          {/* PARTNERSHIP TYPES */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-24"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { id: 'general', title: 'Buy Our Products', icon: ShoppingBag, desc: 'Discover 100+ preservative-free groceries at arshithfresh.com or inquire for bulk/wholesale pricing.', cta: 'Visit arshithfresh.com' },
              { id: 'farmer', title: 'Partner as a Farmer/Producer', icon: Leaf, desc: 'Supply your natural harvest to Arshith. We offer above-MSP pricing, direct relationships, and a platform to reach urban India.', cta: 'Register as Partner' },
              { id: 'business', title: 'B2B / Bulk / Export', icon: Briefcase, desc: 'Source at scale for your restaurant, FMCG brand, or export business. Premium quality, volume discounts, FSSAI compliant.', cta: 'Request Quote' }
            ].map((type) => (
              <motion.div 
                key={type.id} 
                variants={itemVariants}
                onClick={() => setInquiryType(type.id)}
                className={`cursor-pointer rounded-[2rem] p-5 xs:p-6 sm:p-10 border transition-all ${inquiryType === type.id ? 'bg-primary/5 border-primary shadow-lg' : 'bg-card border-border hover:border-primary/50 hover:shadow-md'}`}
              >
                <type.icon className={`w-12 h-12 mb-6 ${inquiryType === type.id ? 'text-primary' : 'text-muted-foreground'}`} />
                <h3 className="text-2xl font-bold font-serif mb-4 text-foreground">{type.title}</h3>
                <p className="text-muted-foreground mb-8 min-h-[80px]">{type.desc}</p>
                <span className={`font-bold text-sm uppercase tracking-wider ${inquiryType === type.id ? 'text-primary' : 'text-muted-foreground'}`}>{type.cta} →</span>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 mb-40">
            {/* LEFT COLUMN: INFO & MAP */}
            <div className="lg:col-span-4 space-y-12">
              <div>
                <h3 className="text-3xl font-serif font-bold mb-8">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
                    <address className="not-italic text-lg text-muted-foreground">
                      #45, Brigade Road,<br/>
                      Ashok Nagar, Bengaluru,<br/>
                      Karnataka – 560001
                    </address>
                  </div>
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-primary shrink-0" />
                    <a href="mailto:contact@arshithfresh.com" className="text-lg font-bold text-foreground hover:text-primary">contact@arshithfresh.com</a>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe className="w-6 h-6 text-primary shrink-0" />
                    <a href="https://arshithfresh.com" target="_blank" rel="noreferrer" className="text-lg font-bold text-foreground hover:text-primary">arshithfresh.com</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <a href="https://linkedin.com/company/arshith-fresh-india-pvt-ltd" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="https://indiamart.com/company/255248482/aboutus.html" target="_blank" rel="noreferrer" className="w-14 h-14 rounded-full bg-muted flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                  <span className="font-bold">IM</span>
                </a>
              </div>

              {/* MAP SVG - Updated to Bengaluru location */}
              <div className="bg-card border border-border rounded-3xl p-8 relative overflow-hidden aspect-[4/3] flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-full h-full opacity-10 text-primary absolute">
                  <path fill="currentColor" d="M30,20 C40,10 60,15 70,30 C80,45 75,65 60,80 C45,95 20,85 10,65 C0,45 15,35 30,20 Z" />
                </svg>
                <div className="relative z-10 text-center">
                  <div className="w-4 h-4 bg-primary rounded-full mx-auto mb-4 animate-ping" />
                  <h4 className="font-bold text-xl mb-1">Bengaluru, Karnataka</h4>
                  <p className="text-muted-foreground text-sm uppercase tracking-widest">Corporate Headquarters</p>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: FORM */}
            <div className="lg:col-span-8">
              <div className="bg-card border border-border rounded-[3rem] p-6 xs:p-8 md:p-16 shadow-xl">
                <div className="mb-10 flex items-center gap-4">
                  <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-bold uppercase tracking-wider">
                    {inquiryType === 'general' ? 'General Inquiry' : inquiryType === 'farmer' ? 'Farmer Partnership' : 'B2B Inquiry'}
                  </span>
                </div>

                <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="name" className="text-lg">Full Name</Label>
                      <Input id="name" className="h-16 text-lg rounded-2xl bg-background border-border" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="company" className="text-lg">Company / Farm Name</Label>
                      <Input id="company" className="h-16 text-lg rounded-2xl bg-background border-border" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <Label htmlFor="email" className="text-lg">Email Address</Label>
                      <Input id="email" type="email" className="h-16 text-lg rounded-2xl bg-background border-border" />
                    </div>
                    <div className="space-y-3">
                      <Label htmlFor="phone" className="text-lg">Phone Number</Label>
                      <Input id="phone" type="tel" className="h-16 text-lg rounded-2xl bg-background border-border" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="state" className="text-lg">State / District</Label>
                    <Input id="state" className="h-16 text-lg rounded-2xl bg-background border-border" />
                  </div>

                  <div className="space-y-3">
                    <Label htmlFor="message" className="text-lg">Message</Label>
                    <Textarea id="message" className="min-h-[200px] text-lg rounded-2xl bg-background border-border resize-none p-6" />
                  </div>

                  <Button size="lg" className="w-full h-16 text-xl rounded-2xl font-bold hover:scale-[1.02] transition-transform">
                    Send Your Message →
                  </Button>
                </form>
              </div>
            </div>
          </div>

          {/* FAQ SECTION */}
          <div className="max-w-4xl mx-auto mb-40">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-center mb-16">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <Collapsible 
                  key={i} 
                  open={openFaq === i} 
                  onOpenChange={() => setOpenFaq(openFaq === i ? null : i)}
                  className="bg-card border border-border rounded-3xl overflow-hidden"
                >
                  <CollapsibleTrigger className="flex items-center justify-between w-full p-8 text-left hover:bg-muted/50 transition-colors">
                    <span className="text-2xl font-serif font-bold pr-8 text-foreground">{faq.q}</span>
                    <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center shrink-0">
                      {openFaq === i ? <Minus className="w-5 h-5 text-primary" /> : <Plus className="w-5 h-5 text-foreground" />}
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent className="px-8 pb-8 pt-0">
                    <p className="text-xl text-muted-foreground leading-relaxed">{faq.a}</p>
                  </CollapsibleContent>
                </Collapsible>
              ))}
            </div>
          </div>

          {/* SOCIAL PROOF STRIP */}
          <div className="bg-[#0e1713] dark:bg-[#050807] text-white/80 rounded-[2rem] sm:rounded-full py-8 px-8 border border-white/10">
            <div className="flex flex-wrap justify-center gap-8 md:gap-24 text-center">
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">100+ Products</span>
              <span className="text-xl md:text-3xl font-serif font-bold text-primary">⭐ 5.0/5 Rating</span>
              <span className="text-2xl md:text-3xl font-serif font-bold text-white">500+ Farmers Supported</span>
            </div>
          </div>

        </div>
      </div>
    </PageTransition>
  );
}