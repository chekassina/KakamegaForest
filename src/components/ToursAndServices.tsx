import { motion } from 'motion/react';
import { Camera, Bird, Map, Target } from 'lucide-react';

const activities = [
  {
    id: 'guided-forest-tours',
    title: 'Guided Forest Tours',
    description: 'Explore trails, waterfalls and unique rainforest ecosystems with our experienced eco-guides.',
    image: '/images/forest3.jpeg',
    iconName: 'Map'
  },
  {
    id: 'bird-watching',
    title: 'Bird Watching',
    description: 'Observe rare forest birds including the Great Blue Turaco in their natural habitat.',
    image: '/images/forest4.jpeg',
    iconName: 'Bird'
  },
  {
    id: 'herping',
    title: 'Herping',
    description: 'Discover reptiles and amphibians safely with our expert herpetology guides.',
    image: '/images/forest5.jpeg',
    iconName: 'Camera'
  },
  {
    id: 'primate-watching',
    title: 'Primate Watching',
    description: 'Track Colobus and Blue Monkeys, observing their behavior from a respectful distance.',
    image: '/images/forest6.jpeg',
    iconName: 'Target'
  }
];

const icons: Record<string, any> = {
  Map, Bird, Camera, Target
};

export function ToursAndServices() {
  return (
    <section id="tours" className="py-24 bg-safari-light px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Our Activities</span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6">Discover the Forest</h2>
          <p className="text-safari-dark/70 text-lg">
            Choose from a variety of engaging guided tours tailored to your interests in nature and wildlife.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {activities.map((activity, index) => {
            const IconComponent = icons[activity.iconName] || Map;
            
            return (
              <motion.div
                key={activity.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group border border-gray-100 rounded-sm overflow-hidden hover:shadow-xl transition-shadow bg-white flex flex-col md:flex-row"
              >
                <div className="relative h-64 md:h-auto md:w-1/2 overflow-hidden shrink-0">
                  <img 
                    src={activity.image} 
                    alt={activity.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-safari-dark/20 group-hover:bg-safari-dark/10 transition-colors duration-300" />
                  <div className="absolute top-4 left-4 h-10 w-10 bg-white/90 rounded-sm flex items-center justify-center text-green-700 z-10">
                    <IconComponent size={20} />
                  </div>
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center">
                  <h3 className="font-serif text-2xl text-safari-dark mb-4 group-hover:text-green-700 transition-colors">{activity.title}</h3>
                  <p className="text-safari-dark/70 text-base leading-relaxed">{activity.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
