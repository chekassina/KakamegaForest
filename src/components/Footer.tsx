import { MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';
import { Button } from './ui/button';

export function Footer() {
  return (
    <footer className="bg-safari-dark text-white/80 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="flex flex-col">
            <span className="font-serif text-2xl font-semibold tracking-wide text-white mb-2">
              KakamegaForest
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-green-400 mb-6 font-bold">
              Eco-Guides
            </span>
            <p className="text-sm leading-relaxed mb-6">
              Discover Kakamega Forest Like Never Before. Specializing in guided rainforest walks, bird watching, and unforgettable Kenyan safaris.
            </p>
            <div className="flex gap-4">
              <a href="#" className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-sm hover:bg-green-700 hover:border-green-700 transition-colors"><Facebook size={18} /></a>
              <a href="#" className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-sm hover:bg-green-700 hover:border-green-700 transition-colors"><Instagram size={18} /></a>
              <a href="#" className="h-10 w-10 border border-white/20 flex items-center justify-center rounded-sm hover:bg-green-700 hover:border-green-700 transition-colors"><Twitter size={18} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Quick Links</h4>
            <ul className="flex flex-col gap-3 text-sm">
              <li><a href="#" className="hover:text-green-400 transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-green-400 transition-colors">About Us</a></li>
              <li><a href="#tours" className="hover:text-green-400 transition-colors">Activities</a></li>
              <li><a href="#safaris" className="hover:text-green-400 transition-colors">Safari Packages</a></li>
              <li><a href="#contact" className="hover:text-green-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Contact Us</h4>
            <div className="flex flex-col gap-6 text-sm">
              <div>
                <p className="flex items-start gap-3 mb-2"><MapPin size={16} className="shrink-0 text-green-400" /> Kakamega Forest<br/>Kakamega Town<br/>Postal Code: 50100</p>
                <p className="flex items-center gap-3 mb-2"><Phone size={16} className="shrink-0 text-green-400" /> +254 712 767 753</p>
                <p className="flex items-center gap-3"><Phone size={16} className="shrink-0 text-green-400" /> +254 762 015 157</p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-serif text-white mb-6">Newsletter</h4>
            <p className="text-sm mb-4">Subscribe to our newsletter for the latest tours and news.</p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white/5 border border-white/10 px-4 py-3 text-sm rounded-sm focus:outline-none focus:border-green-400 text-white"
              />
              <Button className="w-full bg-green-700 hover:bg-green-800 text-white">Subscribe</Button>
            </form>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} KakamegaForest Eco-Guides. All Rights Reserved.</p>
          <div className="flex gap-4 border-l-0 md:border-l border-white/20 md:pl-4">
            <a href="#" className="hover:text-green-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-green-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
