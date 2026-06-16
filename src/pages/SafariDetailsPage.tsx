import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { MapPin, Clock, ArrowLeft, Calendar, CheckCircle2 } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Footer } from '../components/Footer';
import { safaris } from '../data/safaris';

export function SafariDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const safari = safaris.find((s) => s.id === id);

  if (!safari) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-safari-light">
        <div className="text-center">
          <h2 className="text-2xl font-serif mb-4">Safari not found.</h2>
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
      <div className="relative h-[60vh] min-h-[400px]">
        <div className="absolute inset-0 z-0 bg-cover bg-center" style={{ backgroundImage: `url(${safari.image})` }}>
          <div className="absolute inset-0 bg-safari-dark/50" />
        </div>
        
        {/* Navigation Bar inside the hero for the details page */}
        <div className="absolute top-0 left-0 right-0 z-20 pt-6 px-6 max-w-7xl mx-auto flex justify-between items-center">
          <Link to="/" className="inline-flex items-center text-white hover:text-safari-primary transition-colors">
            <ArrowLeft size={20} className="mr-2" /> Back to Safaris
          </Link>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center px-6 pt-20 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="bg-safari-primary/90 text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm mb-6 inline-block">
              {safari.type}
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-bold leading-tight mb-6">
              {safari.title}
            </h1>
            <div className="flex flex-wrap items-center justify-center gap-6 text-white/90 text-sm md:text-base font-medium uppercase tracking-wider">
              <span className="flex items-center"><Clock size={18} className="mr-2 text-safari-primary" /> {safari.duration}</span>
              <span className="flex items-center"><MapPin size={18} className="mr-2 text-safari-primary" /> {safari.locations}</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20">
          
          {/* Main Detail */}
          <div className="lg-col-span-2">
            <h2 className="text-3xl font-serif text-safari-dark mb-6">Safari Overview</h2>
            <p className="text-safari-dark/80 text-lg leading-relaxed mb-10">
              {safari.description}
            </p>

            <h3 className="text-2xl font-serif text-safari-dark mb-6">What to Expect</h3>
            <ul className="space-y-4 mb-12">
              {safari.whatToExpect.map((item, idx) => (
                <li key={idx} className="flex items-start text-safari-dark/80">
                  <CheckCircle2 size={20} className="text-safari-primary mt-1 mr-4 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            {safari.itinerary && (
              <>
                <h3 className="text-2xl font-serif text-safari-dark mb-6">Detailed Itinerary</h3>
                <div className="border-l-2 border-safari-primary/30 pl-6 space-y-8 mb-12">
                  {safari.itinerary.map((day, idx) => (
                    <div key={idx}>
                      <h4 className="font-serif text-lg text-safari-dark font-medium mb-2">
                        {day.day}: {day.title}
                      </h4>
                      <p className="text-safari-dark/70 text-sm leading-relaxed whitespace-pre-line">
                        {day.description}
                      </p>
                    </div>
                  ))}
                </div>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {safari.includes && (
                <div className="bg-white border text-sm border-gray-100 p-6 rounded-sm shadow-sm md:col-span-1">
                  <h4 className="font-serif text-xl text-safari-dark mb-4 border-b border-gray-100 pb-2">Tour Includes</h4>
                  <ul className="space-y-3">
                    {safari.includes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-safari-dark/80">
                         <span className="text-green-600 font-bold mr-2 mt-0.5">✓</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {safari.excludes && (
                <div className="bg-white border text-sm border-gray-100 p-6 rounded-sm shadow-sm md:col-span-1">
                  <h4 className="font-serif text-xl text-safari-dark mb-4 border-b border-gray-100 pb-2">Tour Excludes</h4>
                  <ul className="space-y-3">
                    {safari.excludes.map((item, idx) => (
                      <li key={idx} className="flex items-start text-safari-dark/80">
                        <span className="text-red-500 font-bold mr-2 mt-0.5">✕</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Sticky Booking/Contact Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 bg-white border border-gray-100 rounded-sm shadow-xl shadow-safari-dark/5 p-8">
              <h3 className="text-2xl font-serif text-safari-dark mb-2">Book This Safari</h3>
              <p className="text-safari-dark/60 text-sm mb-6">Request a quote to customize your dates, accommodation, and group size.</p>
              
              <form className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-safari-dark uppercase tracking-widest mb-2">Name</label>
                  <input type="text" className="w-full border border-gray-200 rounded-sm px-4 py-2 text-sm focus:border-safari-primary outline-none transition-colors" placeholder="Full Name" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-safari-dark uppercase tracking-widest mb-2">Email</label>
                  <input type="email" className="w-full border border-gray-200 rounded-sm px-4 py-2 text-sm focus:border-safari-primary outline-none transition-colors" placeholder="Email Address" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-safari-dark uppercase tracking-widest mb-2">Expected Date</label>
                  <div className="relative">
                    <Calendar size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input type="text" className="w-full border border-gray-200 rounded-sm pl-10 pr-4 py-2 text-sm focus:border-safari-primary outline-none transition-colors" placeholder="DD/MM/YYYY" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-safari-dark uppercase tracking-widest mb-2">Guests</label>
                  <select className="w-full border border-gray-200 rounded-sm px-4 py-2 text-sm focus:border-safari-primary outline-none transition-colors bg-white">
                    <option>1 Person</option>
                    <option>2 People</option>
                    <option>3 - 5 People</option>
                    <option>6+ People</option>
                  </select>
                </div>
                <Button className="w-full h-12 mt-4 text-sm font-semibold tracking-wide">Request Quote</Button>
              </form>
              
              <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                <p className="text-xs text-safari-dark/60 uppercase tracking-widest mb-2">Or call us directly at</p>
                <p className="text-safari-primary font-serif text-lg">+254 (0) 799 951 497</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <Footer />
    </div>
  );
}
