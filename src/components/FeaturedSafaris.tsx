import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Clock, Map } from 'lucide-react';
import { Button } from './ui/button';
import { safaris } from '../data/safaris';

export function FeaturedSafaris() {
  return (
    <section id="safaris" className="py-24 md:py-32 bg-[#F0EFE6] px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-safari-primary font-semibold tracking-widest uppercase text-sm mb-4 block">Hand-Crafted Itineraries</span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6">Featured Safari Packages</h2>
          <p className="text-safari-dark/70 text-lg">
            Experience the wild with our meticulously designed itineraries. Every journey with Wilber Safari Holidays promises an unforgettable African adventure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {safaris.map((safari, index) => (
            <motion.div
              key={safari.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="bg-white rounded-sm overflow-hidden flex flex-col group shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 overflow-hidden">
                <span className="absolute top-4 left-4 z-20 bg-white/95 text-safari-dark text-xs font-bold uppercase tracking-wider px-3 py-1">
                  {safari.type}
                </span>
                <img 
                  src={safari.image} 
                  alt={safari.title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
              </div>
              <div className="p-8 flex flex-col flex-1">
                <div className="flex gap-4 text-xs font-medium text-safari-dark/60 uppercase tracking-wider mb-4 border-b border-gray-100 pb-4">
                  <span className="flex items-center"><Clock size={14} className="mr-1.5 text-safari-primary" /> {safari.duration}</span>
                  <span className="flex items-center"><Map size={14} className="mr-1.5 text-safari-primary" /> Multi-Park</span>
                </div>
                <h3 className="text-2xl font-serif text-safari-dark mb-3 line-clamp-2">{safari.title}</h3>
                <p className="text-safari-dark/70 text-sm mb-8 flex-1">
                  Locations: {safari.locations}
                </p>
                <Link to={`/safari/${safari.id}`} className="block w-full">
                  <Button className="w-full justify-center">View Itinerary Details</Button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button variant="outline" size="lg" className="border-safari-dark text-safari-dark hover:bg-safari-dark hover:text-white">
            Discover All Tour Packages
          </Button>
        </div>
      </div>
    </section>
  );
}
