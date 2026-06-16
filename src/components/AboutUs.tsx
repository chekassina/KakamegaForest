import { motion } from 'motion/react';
import { Camera, Compass, Heart } from 'lucide-react';

export function AboutUs() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 w-full h-[500px] overflow-hidden rounded-sm shadow-2xl">
              <img 
                src="/images/forest2.jpeg" 
                alt="Environmental Conservation" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Ornament */}
            <div className="absolute -top-10 -left-10 w-40 h-40 border border-green-700/30 z-0 hidden lg:block"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pt-16 lg:pt-0"
          >
            <span className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 block">About Us</span>
            <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6 leading-tight">
              Authentic Eco-Tourism Experiences
            </h2>
            <p className="text-safari-dark/80 text-lg mb-8 leading-relaxed">
              KAKAMEGAFOREST ECO-GUIDES offers authentic eco-tourism experiences in the tropical Kakamega Forest. We specialize in guided rainforest walks, bird watching, herping expeditions, primate tracking and educational tours for students and visitors from around the world.
            </p>
            
            <div className="flex flex-col gap-6">
              <div className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-sm bg-green-50 flex items-center justify-center text-green-700">
                  <Compass size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-safari-dark mb-2">Expert Local Guides</h4>
                  <p className="text-safari-dark/70 text-sm">Our guides have intimate knowledge of the forest trails, animal behavior, and the local ecosystem.</p>
                </div>
              </div>
              
              <div className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-sm bg-green-50 flex items-center justify-center text-green-700">
                  <Heart size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-safari-dark mb-2">Sustainable Tourism</h4>
                  <p className="text-safari-dark/70 text-sm">We are committed to preserving the natural environment and supporting the local community.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="shrink-0 h-12 w-12 rounded-sm bg-green-50 flex items-center justify-center text-green-700">
                  <Camera size={24} />
                </div>
                <div>
                  <h4 className="text-xl font-serif text-safari-dark mb-2">Unforgettable Sightings</h4>
                  <p className="text-safari-dark/70 text-sm">From rare bird species to unique primates and reptiles, every tour promises a memorable experience.</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
