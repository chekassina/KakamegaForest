import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowLeft, CheckCircle2, Info, X } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { services } from '../data/services';
import toursData from '../data/toursData.json';

type TourDataType = {
  title: string;
  link: string;
  description: string;
  included: string[];
  excluded: string[];
};

export function ServiceDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const service = services.find((s) => s.id === id);
  const [selectedTour, setSelectedTour] = useState<TourDataType | null>(null);

  const handleTourClick = (tourLink: string) => {
    const tour = (toursData as TourDataType[]).find(t => t.link === tourLink);
    if (tour) {
      setSelectedTour(tour);
    } else {
      setSelectedTour({
        title: 'Tour Details',
        link: tourLink,
        description: 'Detailed information for this tour is currently being updated. Please contact us to learn more about this exciting experience.',
        included: [],
        excluded: []
      });
    }
  };

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-safari-light">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Service not found.</h2>
          <Link to="/">
            <Button>Return Home</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-safari-light">
      
      {/* Detail Header / Hero */}
      <div className="relative h-[50vh] min-h-[350px]">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${service.image})` }}>
          <div className="absolute inset-0 bg-safari-dark/60" />
        </div>
        
        {/* Navigation Bar inside the hero for the details page */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-6 px-6 max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/#services" className="inline-flex items-center text-white hover:text-safari-primary transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Services
          </Link>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pt-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-safari-primary/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-6 inline-block">
              Our Services
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-6">
              {service.title}
            </h1>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Detail */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-serif text-safari-dark mb-6">Overview</h2>
            <p className="text-safari-dark/80 text-lg leading-relaxed mb-10 whitespace-pre-line">
              {service.longDescription}
            </p>

            <h3 className="text-2xl font-serif text-safari-dark mb-6">Service Features</h3>
            <ul className="space-y-4 mb-12">
              {service.features.map((item, idx) => (
                <li key={idx} className="flex items-start text-safari-dark/80">
                  <CheckCircle2 size={20} className="text-safari-primary mt-1 mr-4 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {service.tours && service.tours.length > 0 && (
              <div>
                <h3 className="text-2xl font-serif text-safari-dark mb-6">Available Tours & Safaris</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {service.tours.map((tour, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleTourClick(tour.link)}
                      className="group w-full text-left flex items-center justify-between p-4 bg-white border border-gray-200 rounded hover:border-safari-primary hover:shadow-md transition-all text-sm md:text-base"
                    >
                      <span className="font-medium text-safari-dark group-hover:text-safari-primary transition-colors pr-3 leading-snug">
                        {tour.title}
                      </span>
                      <Info size={18} className="text-gray-400 group-hover:text-safari-primary transition-colors shrink-0" />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sticky Info Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-gray-100 rounded-sm shadow-xl shadow-safari-dark/5 p-8">
              <h3 className="text-2xl font-serif text-safari-dark mb-2">Interested?</h3>
              <p className="text-safari-dark/60 text-sm mb-6">Contact us now to find out more about this service or to plan your trip.</p>
              
              <Link to="/" onClick={() => setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100)}>
                <Button className="w-full h-12 mt-4 text-sm font-semibold tracking-wide">Inquire Now</Button>
              </Link>
              
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-safari-dark/60 uppercase tracking-widest mb-2">Or call us directly at</p>
                <p className="text-safari-primary font-serif text-lg">+254 (0) 799 951 497</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Modal for Tour Details */}
      {selectedTour && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8">
          <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setSelectedTour(null)} />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            className="relative bg-white rounded shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden z-10"
          >
            <div className="flex items-center justify-between p-6 border-b border-gray-100 bg-white">
              <h3 className="text-2xl font-serif font-bold text-safari-dark truncate pr-4">{selectedTour.title}</h3>
              <button 
                onClick={() => setSelectedTour(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors flex-shrink-0"
                aria-label="Close modal"
              >
                <X size={24} className="text-safari-dark" />
              </button>
            </div>
            
            <div className="flex-1 w-full bg-white relative overflow-y-auto p-6 md:p-8">
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

              <div className="mt-12 text-center">
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

      <Footer />
    </div>
  );
}
