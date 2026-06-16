import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#about' },
    { name: 'Tours', href: '#tours' },
    { name: 'Safari Packages', href: '#safaris' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-safari-light/95 backdrop-blur-sm shadow-sm py-4' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <img src="/logo.jpeg" alt="Logo" className="w-12 h-12 object-contain" onError={(e) => (e.currentTarget.style.display = 'none')} />
          <div className="flex flex-col">
            <span className={`font-serif text-xl sm:text-2xl font-bold tracking-wide ${isScrolled ? 'text-safari-dark' : 'text-white'}`}>
              KakamegaForest
            </span>
            <span className={`text-[10px] sm:text-xs font-bold tracking-[0.1em] uppercase ${isScrolled ? 'text-green-700' : 'text-green-400'}`}>
              Eco-Guides
            </span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6 xl:gap-8">
          <div className="flex items-center gap-4 xl:gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors ${
                  isScrolled ? 'text-safari-dark hover:text-green-700' : 'text-white hover:text-green-300'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>
          <Button 
            variant={isScrolled ? "default" : "outline"}
            className={!isScrolled ? "text-white border-white hover:bg-white hover:text-safari-dark bg-transparent" : "bg-green-700 hover:bg-green-800 text-white"}
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Book a Tour
          </Button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`lg:hidden ${isScrolled ? 'text-safari-dark' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-safari-light shadow-xl border-t border-safari-dark/5 p-6 flex flex-col gap-6 lg:hidden"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-serif text-safari-dark hover:text-green-700"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-green-700/20" />
            <div className="flex flex-col gap-4 text-sm text-safari-dark/70">
              <span className="flex items-center gap-2"><Phone size={16} /> +254 712 767 753</span>
              <span className="flex items-center gap-2"><Phone size={16} /> +254 762 015 157</span>
            </div>
            <Button className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white" onClick={() => {
              setMobileMenuOpen(false);
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}>
              Book a Tour
            </Button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
