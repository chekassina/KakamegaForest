import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "The bird watching experience was incredible. We saw species we had never encountered before.",
    author: "Visitor",
    location: "Global"
  },
  {
    quote: "Professional guides and excellent knowledge of the forest ecosystem.",
    author: "Student Group",
    location: "University"
  }
];

export function Testimonials() {
  return (
    <section className="py-24 bg-green-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {testimonials.map((testimonial, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.2 }}
              className="text-center md:text-left"
            >
              <div className="flex justify-center md:justify-start gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((s) => (
                  <Star key={s} size={16} className="fill-green-400 text-green-400" />
                ))}
              </div>
              <blockquote className="text-2xl md:text-3xl font-serif font-medium leading-relaxed mb-8">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center justify-center md:justify-start gap-4">
                <div className="text-left">
                  <p className="font-serif text-lg text-green-50">{testimonial.author}</p>
                  <p className="text-xs text-green-400 uppercase tracking-widest">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
