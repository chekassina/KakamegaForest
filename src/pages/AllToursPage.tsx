import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, MapPin, X, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import toursData from '../data/toursData.json';

type TourDataType = {
  title: string;
  link: string;
  description: string;
  included: string[];
  excluded: string[];
};

export function AllToursPage() {
  const [selectedTour, setSelectedTour] = useState<TourDataType | null>(null);

  const handleTourClick = (tour: TourDataType) => {
    setSelectedTour(tour);
  };

  return (
    <div className="min-h-screen bg-safari-light">
      {/* Header */}
      <div className="relative h-[40vh] min-h-[300px] bg-safari-dark">
        <div className="absolute inset-0 z-0 bg-cover bg-center opacity-40" style={{ backgroundImage: `url('/images/forest1.jpeg')` }} />
        
        <div className="absolute top-0 left-0 right-0 z-20 pt-6 px-6 max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-white hover:text-safari-primary transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Home
          </Link>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pt-10 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-safari-primary/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-6 inline-block">
              Discover
            </span>
            <h1 className="text-4xl md:text-5xl font-serif text-white font-bold leading-tight mb-4">
              All Tours & Safaris
            </h1>
            <p className="text-white/80 text-lg">Explore our complete collection of unforgettable experiences.</p>
          </motion.div>
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {(toursData as TourDataType[]).map((tour, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i % 3 * 0.1 }}
              className="bg-white border border-gray-100 rounded shadow-sm hover:shadow-xl transition-all p-6 flex flex-col cursor-pointer group"
              onClick={() => handleTourClick(tour)}
            >
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-serif text-safari-dark group-hover:text-safari-primary transition-colors pr-2 leading-snug">
                    {tour.title}
                  </h3>
                  <MapPin size={20} className="text-gray-300 group-hover:text-safari-primary transition-colors shrink-0" />
                </div>
                <p className="text-safari-dark/60 text-sm line-clamp-3 mb-6">
                  {tour.description && tour.description !== tour.title ? tour.description : 'Detailed information for this tour is available. Click to view full details.'}
                </p>
              </div>
              <div className="pt-4 border-t border-gray-100 mt-auto flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-safari-primary">View Details</span>
                <ArrowLeft size={16} className="text-safari-primary rotate-180 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal for Tour Details */}
      <AnimatePresence>
        {selectedTour && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm" 
              onClick={() => setSelectedTour(null)} 
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden z-10"
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white shrink-0">
                <h3 className="text-2xl font-serif font-bold text-safari-dark truncate pr-4">{selectedTour.title}</h3>
                <button 
                  onClick={() => setSelectedTour(null)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                  aria-label="Close modal"
                >
                  <X size={24} className="text-safari-dark" />
                </button>
              </div>
              
              <div className="flex-1 w-full bg-white overflow-y-auto p-6 md:p-8">
                <div className="prose prose-safari max-w-none text-safari-dark/80 whitespace-pre-line mb-8">
                  {selectedTour.description === selectedTour.title || !selectedTour.description ? (
                    <p>Detailed information for this tour is currently being updated. Please contact us to learn more about this exciting experience.</p>
                  ) : (
                    <p className="leading-relaxed">{selectedTour.description}</p>
                  )}
                </div>

                {selectedTour.included && selectedTour.included.length > 0 && selectedTour.excluded && selectedTour.excluded.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-8 mt-8">
                    <div>
                      <h4 className="text-xl font-serif text-safari-dark mb-4">Included</h4>
                      <ul className="space-y-3">
                        {selectedTour.included.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base">
                            <CheckCircle2 size={16} className="text-green-500 mt-1 mr-2 shrink-0" />
                            <span className="text-safari-dark/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-xl font-serif text-safari-dark mb-4">Excluded</h4>
                      <ul className="space-y-3">
                        {selectedTour.excluded.map((item, idx) => (
                          <li key={idx} className="flex items-start text-sm md:text-base">
                            <X size={16} className="text-red-400 mt-1 mr-2 shrink-0" />
                            <span className="text-safari-dark/80">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                <div className="mt-12 text-center pb-4">
                  <Link to="/" onClick={() => {
                    setSelectedTour(null);
                    setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100);
                  }}>
                    <Button className="px-8 h-12 text-sm font-semibold tracking-wide">
                      Enquire About This Tour
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
}
