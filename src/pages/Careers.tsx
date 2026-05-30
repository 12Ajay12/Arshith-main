import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Link } from 'wouter';
import { ArrowRight, Briefcase, GraduationCap, Leaf, Cpu, Megaphone, Truck, BarChart2, Lightbulb, MapPin, Clock, CheckCircle, QrCode, Mail, Phone, Linkedin, Globe, Users, Target, Zap, Award, Sparkles, Building2, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

// QR Code Image - Dynamic QR that directs to careers page
const qrCodeUrl = "https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=https://arshithgroup.com/careers";

const openings = [
  {
    role: "Web Developer",
    division: "Arshith Tech",
    icon: Cpu,
    type: "Full-Time",
    location: "Remote / Chirala, AP",
    desc: "Build and maintain websites for Arshith Fresh and other group brands. Experience with modern frameworks and responsive design required.",
    skills: ["HTML/CSS", "JavaScript", "React", "Responsive Design"],
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Frontend Developer",
    division: "Arshith Tech",
    icon: Cpu,
    type: "Full-Time",
    location: "Remote / Chirala, AP",
    desc: "Create engaging user interfaces for our e-commerce platform and internal tools. Strong knowledge of React and Tailwind CSS required.",
    skills: ["React", "TypeScript", "Tailwind CSS", "UI/UX"],
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Mobile App Developer",
    division: "Arshith Tech",
    icon: Cpu,
    type: "Full-Time",
    location: "Remote",
    desc: "Develop and maintain mobile applications for Arshith Fresh and other group ventures. Experience with React Native or Flutter preferred.",
    skills: ["React Native", "Flutter", "iOS/Android", "REST APIs"],
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: ".NET & Azure Developer",
    division: "Arshith Tech",
    icon: Cpu,
    type: "Full-Time",
    location: "Remote",
    desc: "Build enterprise-grade backend solutions using .NET Core and Azure cloud services. Strong understanding of microservices architecture required.",
    skills: [".NET Core", "Azure", "C#", "Microservices"],
    color: "from-blue-500 to-indigo-600",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Social Media Manager & PR",
    division: "Arshith Digital",
    icon: Megaphone,
    type: "Full-Time",
    location: "Remote / Chirala, AP",
    desc: "Manage social media presence across all Arshith Group brands. Create engaging content and build brand reputation.",
    skills: ["Content Creation", "Social Media Strategy", "PR", "Analytics"],
    color: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Digital Marketing Executive",
    division: "Arshith Digital",
    icon: Megaphone,
    type: "Full-Time",
    location: "Remote / Chirala, AP",
    desc: "Drive social media, SEO, and content strategy for Arshith Fresh and other group brands. Experience with Meta Ads and Instagram preferred.",
    skills: ["Meta Ads", "Instagram / Reels", "SEO Basics", "Content Writing"],
    color: "from-rose-500 to-pink-600",
    image: "https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "E-Commerce Manager",
    division: "Arshith Commerce",
    icon: BarChart2,
    type: "Full-Time",
    location: "Chirala, Andhra Pradesh",
    desc: "Manage and grow the Arshith Fresh e-commerce storefront. Handle product listings, catalog management, orders, and customer experience.",
    skills: ["E-commerce platforms", "Product Cataloguing", "Customer Service", "Analytics"],
    color: "from-violet-500 to-purple-600",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Supply Chain Coordinator",
    division: "Arshith Logistics",
    icon: Truck,
    type: "Full-Time",
    location: "Chirala / Prakasam, AP",
    desc: "Coordinate procurement from farmers, manage inventory, and oversee dispatch. Knowledge of agricultural produce supply chains is a plus.",
    skills: ["Logistics Coordination", "Inventory Management", "Vendor Relations", "MS Excel"],
    color: "from-amber-500 to-orange-600",
    image: "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Agri-Sourcing Executive",
    division: "Arshith Fresh",
    icon: Leaf,
    type: "Full-Time",
    location: "Prakasam District, AP",
    desc: "Identify and partner with small farmers across Andhra Pradesh. Ensure consistent quality procurement of raw agricultural produce.",
    skills: ["Farmer Relations", "Quality Assessment", "Telugu Language", "Regional Travel"],
    color: "from-emerald-500 to-teal-600",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80",
  },
  {
    role: "Business Development Intern",
    division: "Arshith Groups",
    icon: Lightbulb,
    type: "Internship (3–6 months)",
    location: "Remote / Chirala, AP",
    desc: "Support business development across divisions. Research new markets, identify partnerships, and assist leadership with strategic projects.",
    skills: ["Research", "Communication", "MS Office", "Business Acumen"],
    color: "from-slate-500 to-gray-600",
    image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
  },
];

const perks = [
  "Work directly with founding leadership",
  "Real impact from day one — not just internship tasks",
  "Exposure to multiple business divisions",
  "Remote-friendly for technology and digital roles",
  "Mentorship from experienced entrepreneurs",
  "Equity consideration for key hires",
  "Contribute to building an ethical business from the ground up",
  "Strong references and recommendation letters for interns",
];

function Card({ job, i }: { job: typeof openings[0]; i: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: i * 0.08, duration: 0.6 }}
      className="bg-card border border-border rounded-[2rem] overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
    >
      <div className={`h-1.5 bg-gradient-to-r ${job.color}`} />
      <div className="relative h-40 overflow-hidden">
        <img 
          src={job.image} 
          alt={job.role}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className={`absolute bottom-3 left-3 w-10 h-10 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center shadow-lg`}>
          <job.icon className="w-5 h-5 text-white" />
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-start justify-between gap-3 mb-3">
          <div>
            <h3 className="text-lg font-serif font-bold mb-0.5">{job.role}</h3>
            <p className="text-xs font-bold text-primary tracking-widest uppercase">{job.division}</p>
          </div>
          <span className={`text-xs font-bold px-2 py-1 rounded-full shrink-0 ${job.type.includes('Internship') ? 'bg-amber-100 text-amber-700' : 'bg-primary/10 text-primary'}`}>
            {job.type}
          </span>
        </div>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">{job.desc}</p>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {job.skills.slice(0, 3).map(s => (
            <span key={s} className="text-xs bg-muted px-2 py-0.5 rounded-full">{s}</span>
          ))}
          {job.skills.length > 3 && (
            <span className="text-xs text-muted-foreground">+{job.skills.length - 3}</span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <span className="flex items-center gap-0.5"><MapPin className="w-3 h-3" />{job.location.split(',')[0]}</span>
          </div>
          <Link href="/contact">
            <motion.span
              whileHover={{ x: 3 }}
              className="text-xs font-bold text-primary flex items-center gap-1 cursor-pointer"
            >
              Apply <ArrowRight className="w-3 h-3" />
            </motion.span>
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function Careers() {
  return (
    <PageTransition>
      <div className="pt-32 pb-32 bg-background min-h-screen">
        <div className="container mx-auto px-4 md:px-6">

          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-xs font-bold tracking-[0.3em] uppercase text-primary mb-4">
              Join the Team
            </motion.p>
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="text-5xl md:text-7xl font-serif font-bold mb-6">
              Build India<br />With Us.
            </motion.h1>
            <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="text-xl text-muted-foreground mb-8">
              We're a young, ambitious group building across 6 business divisions. Every role here has real impact — and real visibility.
            </motion.p>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }} className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border">
                <Briefcase className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Full-Time Roles</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Internship Programmes</span>
              </div>
              <div className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-muted border border-border">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Remote & On-site</span>
              </div>
            </motion.div>
          </div>

          {/* PREMIUM WE ARE HIRING SECTION with Image Background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-[2.5rem] mb-24"
          >
            {/* Background Image */}
            <div className="absolute inset-0">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=85"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-900/95 via-indigo-900/90 to-purple-900/85" />
            </div>

            {/* Animated Glow Effects */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-[100px] animate-pulse" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />

            {/* Content */}
            <div className="relative z-10 p-8 md:p-12 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text Content */}
                <div className="text-white">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-6">
                    <Sparkles className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-bold tracking-wider uppercase">Arshith Group</span>
                  </div>
                  
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4">
                    WE ARE <span className="text-emerald-400">HIRING!</span>
                  </h2>
                  
                  <p className="text-lg text-white/80 mb-8 max-w-md">
                    Join our team and build your future with us. Be part of something meaningful.
                  </p>

                  {/* Stats */}
                  <div className="flex gap-6 mb-8">
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">10+</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Open Positions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">6</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Divisions</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-emerald-400">Remote</div>
                      <div className="text-xs text-white/60 uppercase tracking-wider">Work Available</div>
                    </div>
                  </div>

                  {/* Contact Info Grid */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Mail className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">EMAIL</p>
                        <p className="text-sm font-medium">support@arshithfresh.com</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Phone className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">PHONE</p>
                        <p className="text-sm font-medium">8618471424</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Linkedin className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">LINKEDIN</p>
                        <p className="text-sm font-medium">Arshithgroup</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center">
                        <Globe className="w-4 h-4 text-emerald-400" />
                      </div>
                      <div>
                        <p className="text-xs text-white/50">WEBSITE</p>
                        <p className="text-sm font-medium">arshithgroup.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Right Side - QR Code Card */}
                <div className="flex flex-col items-center justify-center">
                  <motion.div 
                    whileHover={{ scale: 1.05 }}
                    className="bg-white rounded-3xl p-6 shadow-2xl text-center max-w-[260px] mx-auto"
                  >
                    <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-3 rounded-2xl mb-4">
                      <img 
                        src={qrCodeUrl} 
                        alt="QR Code to Apply" 
                        className="w-40 h-40 mx-auto"
                      />
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 mb-3">
                      <QrCode className="w-3 h-3 text-emerald-600" />
                      <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-wider">Scan to Apply</span>
                    </div>
                    <p className="font-bold text-gray-800 text-sm">SCAN TO REGISTER</p>
                    <p className="text-xs text-gray-500 mt-1">Great Opportunities · Better Future</p>
                  </motion.div>
                </div>
              </div>

              {/* Bottom Tagline */}
              <div className="mt-10 pt-6 border-t border-white/10 text-center">
                <p className="text-white/70 text-sm flex items-center justify-center gap-2">
                  <Award className="w-4 h-4 text-emerald-400" />
                  Grow Together. Succeed Together.
                  <Award className="w-4 h-4 text-emerald-400" />
                </p>
              </div>
            </div>
          </motion.div>

          {/* Featured Positions Grid */}
          <div className="mb-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-serif font-bold mb-2">Featured Positions</h2>
              <p className="text-muted-foreground">Current opportunities across our divisions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3">
              {["Web Developer", "Frontend Developer", "Mobile App Developer", ".NET & Azure Developer", "Social Media Manager & PR"].map((role, idx) => (
                <motion.div
                  key={role}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="group bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-xl p-3 text-center hover:from-primary/10 hover:to-primary/20 transition-all cursor-pointer"
                >
                  <p className="text-sm font-semibold text-primary group-hover:scale-105 transition-transform">{role}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Why Join - Premium Version */}
          <div className="bg-gradient-to-br from-primary via-primary/90 to-primary/95 rounded-[3rem] p-10 md:p-16 mb-24 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 mb-4">
                  <Users className="w-4 h-4 text-white/80" />
                  <span className="text-xs font-bold tracking-wider text-white/80 uppercase">Why Join Us</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-white mb-6">Work Where Your Ideas Actually Matter.</h2>
                <p className="text-white/70 leading-relaxed text-lg">
                  We're not a large corporation with slow processes. We're a founding-stage group where the right people get real ownership of real problems. If you want to learn fast, impact directly, and grow with an organisation that is building something meaningful — you're in the right place.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-3">
                {perks.map((perk, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-start gap-3 p-2 rounded-xl hover:bg-white/5 transition-colors"
                  >
                    <CheckCircle className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                    <span className="text-white/80 text-sm">{perk}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Open Positions</h2>
              <p className="text-muted-foreground">Across all divisions of Arshith Groups</p>
            </div>
            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
              {openings.map((job, i) => <Card key={job.role} job={job} i={i} />)}
            </div>
          </div>

          {/* Apply CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-muted to-muted/50 border border-border rounded-[3rem] p-12 md:p-16 text-center"
          >
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
              We're always open to exceptional people across all domains. Send us your CV and a short note about how you'd like to contribute.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/contact">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-bold rounded-full cursor-pointer shadow-lg hover:shadow-xl transition-all">
                  Send Your Application <ArrowRight className="w-4 h-4" />
                </motion.span>
              </Link>
              <a href="mailto:support@arshithfresh.com">
                <motion.span whileHover={{ scale: 1.04 }} className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border font-bold rounded-full cursor-pointer hover:border-primary hover:bg-primary/5 transition-all">
                  Email Us Directly
                </motion.span>
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </PageTransition>
  );
}