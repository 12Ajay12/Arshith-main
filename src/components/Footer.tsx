import { Link } from 'wouter';
import { ArrowUpRight } from 'lucide-react';

const divisions = [
  { name: "Agriculture & Agri-Tech", via: "Arshith Fresh" },
  { name: "Information Technology", via: "Arshith Tech" },
  { name: "Commerce & Finance", via: "Arshith Commerce" },
  { name: "Digital Marketing & Design", via: "Arshith Digital" },
  { name: "Supply Chain Management", via: "Arshith Logistics" },
  { name: "Ventures & Incubation", via: "Arshith Ventures" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0e1713] dark:bg-[#050807] text-white/80 border-t border-border/10">
      <div className="container mx-auto px-4 md:px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="font-serif text-2xl font-bold tracking-widest text-white uppercase">Arshith</div>
              <div className="text-[10px] font-bold tracking-[0.35em] text-white/40 uppercase">Groups</div>
            </div>
            <p className="text-white/60 text-sm leading-relaxed mb-8">
              A diversified group building ecosystems across agriculture, technology, commerce, and beyond. Based in Bangalore, built for India.
            </p>
            <div className="space-y-2">
              <a
                href="https://linkedin.com/company/arshith-fresh-india-pvt-ltd"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold">in</span>
                <span>LinkedIn — Arshith Fresh</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://arshithfresh.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors group"
              >
                <span className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-[10px] font-bold">↗</span>
                <span>arshithfresh.com</span>
                <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Business Divisions</h4>
            <ul className="space-y-4">
              {divisions.map((d) => (
                <li key={d.name}>
                  <Link href="/divisions" className="group block">
                    <div className="text-sm text-white/80 group-hover:text-white transition-colors">{d.name}</div>
                    <div className="text-xs text-white/30">{d.via}</div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Navigate</h4>
            <ul className="space-y-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Arshith Groups' },
                { href: '/divisions', label: 'Our Divisions' },
                { href: '/arshith-fresh', label: 'Arshith Fresh' },
                { href: '/team', label: 'Leadership' },
                { href: '/sustainability', label: 'Sustainability' },
                { href: '/careers', label: 'Careers & Internships' },
                { href: '/contact', label: 'Contact Us' },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="text-sm text-white/60 hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold tracking-[0.2em] uppercase text-white/40 mb-6">Corporate</h4>
            <address className="text-sm text-white/60 not-italic leading-relaxed space-y-1 mb-6">
              <div className="font-medium text-white/80">Arshith Fresh India Private Limited</div>
              <div>#308, 3rd Floor, Brigade Tower</div>
              <div>135, Brigade Road, Ashok Nagar</div>
              <div>Bangalore, Karnataka – 560025</div>
            </address>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@arshithfresh.com" className="text-white/60 hover:text-white transition-colors">
                  contact@arshithfresh.com
                </a>
              </li>
              <li className="text-white/40 font-mono text-xs">CIN: U46300AP2025PTC119022</li>
              <li className="text-white/40 text-xs">Incorporated April 24, 2025</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Arshith Fresh India Private Limited. All rights reserved.
          </p>
          <p className="text-xs text-white/20">
            FSSAI Compliant · MCA Registered · Made in India
          </p>
        </div>
      </div>
    </footer>
  );
}
