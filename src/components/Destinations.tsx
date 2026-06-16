import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const packages = [
  {
    id: 'masai-mara',
    name: 'Masai Mara National Reserve',
    image: '/images/forest7.jpeg',
    description: 'Experience the world-famous wildlife and witness the Great Migration.',
  },
  {
    id: 'lake-naivasha',
    name: 'Lake Naivasha',
    image: '/images/forest8.jpeg',
    description: 'A beautiful freshwater lake known for hippo viewing and birdlife.',
  },
  {
    id: 'lake-baringo',
    name: 'Lake Baringo',
    image: '/images/forest9.jpeg',
    description: 'A paradise for bird watchers and nature enthusiasts.',
  },
  {
    id: 'lake-bogoria',
    name: 'Lake Bogoria',
    image: '/images/forest10.jpeg',
    description: 'Famous for its geysers, hot springs, and large flocks of flamingos.',
  },
  {
    id: 'tsavo-east',
    name: 'Tsavo East National Park',
    image: '/images/forest11.jpeg',
    description: 'Discover the vast wilderness and the famous red elephants of Tsavo.',
  },
  {
    id: 'tsavo-west',
    name: 'Tsavo West National Park',
    image: '/images/forest12.jpeg',
    description: 'Explore rugged landscapes, Mzima Springs, and diverse wildlife.',
  },
  {
    id: 'amboseli',
    name: 'Amboseli National Park',
    image: '/images/forest13.jpeg',
    description: 'Stunning views of Mount Kilimanjaro and large herds of free-ranging elephants.',
  }
];

export function Destinations() {
  return (
    <section id="safaris" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto md:pt-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Expand Your Adventure</span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark">Unforgettable <br/>Safari Packages</h2>
          </div>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="hidden md:inline-flex items-center text-green-700 hover:text-green-900 transition-colors font-medium border-b border-green-700 pb-1 group">
            Request a Package
            <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {packages.map((dest, i) => (
            <motion.div 
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group cursor-pointer bg-safari-light border border-gray-100 pb-6 rounded-sm overflow-hidden"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <div className="relative h-64 w-full overflow-hidden mb-6">
                <div className="absolute inset-0 bg-safari-dark/20 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <img 
                  src={dest.image} 
                  alt={dest.name} 
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>
              <div className="px-6">
                <h3 className="text-xl font-serif text-safari-dark mb-2 group-hover:text-green-700 transition-colors min-h-[56px]">{dest.name}</h3>
                <p className="text-safari-dark/70 text-sm leading-relaxed mb-4">{dest.description}</p>
                <span className="text-green-700 text-sm font-semibold uppercase tracking-wider block">Request &rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center md:hidden">
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="inline-flex items-center text-green-700 font-medium border-b border-green-700 pb-1">
            Request a Package
            <ArrowRight size={18} className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
