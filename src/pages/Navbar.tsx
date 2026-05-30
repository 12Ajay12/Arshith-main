import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X, Globe, Cpu, Leaf } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Divisions', href: '/divisions' },
  {
    name: 'Businesses',
    dropdown: [
      { name: 'Arshith Infotech', href: '/arshith-infotech', icon: Globe },
      { name: 'Suntech Solutions', href: '/suntech-solutions', icon: Cpu },
      { name: 'Arshith Fresh', href: '/arshith-fresh', icon: Leaf },
    ],
  },
  { name: 'Leadership', href: '/team' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Navbar() {
  const [location] = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsDropdownOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/80 backdrop-blur-md border-b py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-foreground">Arshith Groups</Link>

        {/* DESKTOP LINKS */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              {link.dropdown ? (
                <div 
                  className="flex items-center gap-1 font-bold text-sm cursor-pointer hover:text-primary transition-colors"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                >
                  {link.name} <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
                </div>
              ) : (
                <Link href={link.href} className={`font-bold text-sm hover:text-primary transition-colors ${location === link.href ? 'text-primary' : 'text-muted-foreground'}`}>
                  {link.name}
                </Link>
              )}

              {/* DROPDOWN MENU */}
              {link.dropdown && (
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                      className="absolute top-full left-0 mt-4 w-64 bg-card border border-border rounded-2xl p-4 shadow-2xl"
                    >
                      {link.dropdown.map((sub) => (
                        <Link key={sub.name} href={sub.href} className="flex items-center gap-3 p-3 rounded-xl hover:bg-muted transition-colors">
                          <sub.icon className="w-4 h-4 text-primary" />
                          <span className="text-sm font-bold">{sub.name}</span>
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }} className="fixed inset-0 bg-background z-40 lg:hidden flex flex-col p-8 pt-24 gap-6">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <div className="flex flex-col gap-4">
                    <p className="text-2xl font-serif font-bold text-muted-foreground">{link.name}</p>
                    {link.dropdown.map(sub => (
                      <Link key={sub.name} href={sub.href} className="text-xl font-bold pl-4 border-l-2 border-primary">{sub.name}</Link>
                    ))}
                  </div>
                ) : (
                  <Link href={link.href} className="text-2xl font-serif font-bold">{link.name}</Link>
                )}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}