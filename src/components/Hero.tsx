import { motion } from 'motion/react';
import { Button } from './ui/button';
import { MapPin, Calendar, Users } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div 
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url("/images/forest1.jpeg")' }}
      >
        <div className="absolute inset-0 bg-safari-dark/50" />
        <div className="absolute inset-0 bg-gradient-to-t from-safari-dark/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center mt-20">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="block text-green-400 font-bold text-sm md:text-base tracking-[0.3em] uppercase mb-6"
        >
          KakamegaForest Eco-Guides
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-5xl md:text-7xl lg:text-8xl font-serif text-white font-bold leading-tight mb-8"
        >
          Discover <span className="text-green-500 italic">Kakamega Forest</span> <br className="hidden md:block" /> 
          Like Never Before
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto font-light leading-relaxed mb-12"
        >
          Guided rainforest adventures, bird watching, primate tracking, herping expeditions and unforgettable Kenyan safaris.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8"
        >
          <Button size="lg" className="w-full sm:w-auto text-lg bg-green-700 hover:bg-green-800" onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}>
            Book a Tour
          </Button>
          <Button size="lg" variant="outline" className="w-full sm:w-auto text-lg text-white border-white hover:bg-white hover:text-green-900 bg-transparent" onClick={() => document.getElementById('gallery')?.scrollIntoView({ behavior: 'smooth' })}>
            Explore Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
