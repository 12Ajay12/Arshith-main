import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { useTheme } from 'next-themes';
import { Sun, Moon, Menu, X, ChevronDown, Globe, Cpu, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { 
    setMobileOpen(false); 
    setDropdownOpen(false);
  }, [location]);

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/divisions', label: 'Divisions' },
    { 
      label: 'Businesses',
      dropdown: [
        { href: '/arshith-infotech', label: 'Arshith Infotech', icon: Globe },
        { href: '/suntech-solutions', label: 'Suntech Solutions', icon: Cpu },
        { href: '/arshith-fresh', label: 'Arshith Fresh', icon: Leaf },
      ]
    },
    { href: '/team', label: 'Leadership' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 md:px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col leading-none">
          <span className="font-serif text-xl font-bold tracking-widest text-primary uppercase">Arshith</span>
          <span className="text-[10px] font-bold tracking-[0.35em] text-muted-foreground uppercase">Groups</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <div key={link.label} className="relative">
              {link.dropdown ? (
                <div
                  className="relative"
                  onMouseEnter={() => setDropdownOpen(true)}
                  onMouseLeave={() => setDropdownOpen(false)}
                >
                  <button
                    className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-primary hover:bg-primary/8 flex items-center gap-1 ${
                      link.dropdown.some(item => location === item.href) ? 'text-primary font-bold' : 'text-foreground/75'
                    }`}
                  >
                    {link.label} 
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-background/95 backdrop-blur-xl border border-border rounded-2xl p-2 shadow-2xl z-50"
                      >
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-300 ${
                              location === item.href ? 'bg-primary/10 text-primary' : 'hover:bg-primary/5 text-foreground/80'
                            }`}
                          >
                            <item.icon className="w-4 h-4" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link
                  href={link.href!}
                  className={`px-4 py-2 text-sm font-medium rounded-full transition-colors hover:text-primary hover:bg-primary/8 ${location === link.href ? 'text-primary font-bold' : 'text-foreground/75'}`}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="ml-2 w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
        </nav>

        <div className="lg:hidden flex items-center gap-3">
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            {theme === 'dark' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-9 h-9 rounded-full border border-border flex items-center justify-center text-foreground hover:text-primary transition-colors"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/98 backdrop-blur-xl border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-6 py-8 flex flex-col gap-1">
              {links.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  {link.dropdown ? (
                    <div className="py-4 border-b border-border/40">
                      <p className="text-[10px] font-bold tracking-[0.3em] text-muted-foreground uppercase mb-4">
                        {link.label}
                      </p>
                      <div className="flex flex-col gap-4 pl-2">
                        {link.dropdown.map(item => (
                          <Link key={item.href} href={item.href} className={`flex items-center gap-3 text-lg font-serif transition-colors ${location === item.href ? 'text-primary' : 'text-foreground/70'}`}>
                            <item.icon className="w-5 h-5 text-primary" />
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      className={`block py-3 text-lg font-serif font-medium border-b border-border/40 last:border-0 transition-colors hover:text-primary ${location === link.href ? 'text-primary' : 'text-foreground/80'}`}
                    >
                      {link.label}
                    </Link>
                  )}
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
