import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn, Play } from 'lucide-react';

const galleryItems = Array.from({ length: 22 }, (_, i) => ({
  type: 'image',
  src: `/images/forest${i + 1}.jpeg`
})).concat([
  {
    type: 'video',
    src: '/images/forest23.mp4' // Assuming standard video extension, fallback to jpeg if strictly named
  }
]);

export function Gallery() {
  const [selectedItem, setSelectedItem] = useState<{type: string, src: string} | null>(null);

  return (
    <section id="gallery" className="py-24 bg-safari-light px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Capturing Memories</span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6">Explore Our Gallery</h2>
          <p className="text-safari-dark/70 text-lg">
            Glimpses into the unforgettable moments and the majestic wildlife from our recent tours.
          </p>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {galleryItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 10) * 0.05 }}
              className="relative overflow-hidden group rounded-sm cursor-pointer break-inside-avoid"
              onClick={() => setSelectedItem(item)}
            >
              {item.type === 'video' ? (
                <div className="w-full h-48 bg-black flex items-center justify-center">
                  <Play className="text-white/70" size={48} />
                </div>
              ) : (
                <img 
                  src={item.src} 
                  alt={`Kakamega gallery image ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback if the user actually uploaded it as something else
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1516426122078-c23e76319801?auto=format&fit=crop&q=80';
                  }}
                />
              )}
              <div className="absolute inset-0 bg-safari-dark/0 group-hover:bg-safari-dark/40 transition-colors duration-500 z-10 flex items-center justify-center">
                {item.type === 'video' ? (
                  <Play className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                ) : (
                  <ZoomIn className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" size={32} />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/95 backdrop-blur-sm"
            onClick={() => setSelectedItem(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-green-400 transition-colors z-50"
              onClick={() => setSelectedItem(null)}
            >
              <X size={32} />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="max-w-full max-h-[90vh] flex items-center justify-center"
            >
              {selectedItem.type === 'video' ? (
                <video 
                  src={selectedItem.src} 
                  controls 
                  autoPlay 
                  className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                  onError={(e) => {
                    // Fallback to the jpeg name if they literally named a video .jpeg
                    if (selectedItem.src.endsWith('.mp4')) {
                      selectedItem.src = '/images/forest23.jpeg';
                      // Force reload
                      (e.target as HTMLVideoElement).load();
                    }
                  }}
                />
              ) : (
                <img 
                  src={selectedItem.src} 
                  alt="Gallery Preview" 
                  className="max-w-full max-h-[90vh] object-contain rounded-sm shadow-2xl"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
