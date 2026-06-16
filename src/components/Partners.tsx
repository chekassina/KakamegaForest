import { motion } from 'motion/react';

const partners = [
  { name: "TRA", logo: "https://wilbersafariholidays.com/wp-content/uploads/2021/07/tra.jpg" },
  { name: "Viator", logo: "https://wilbersafariholidays.com/wp-content/uploads/2022/01/viator-2.jpg" },
  { name: "Safarigo", logo: "https://wilbersafariholidays.com/wp-content/uploads/2023/02/safarigo.jpg" },
  { name: "Safari Deals", logo: "https://wilbersafariholidays.com/wp-content/uploads/2022/01/safarideals.jpg" },
  { name: "Pesapal", logo: "https://wilbersafariholidays.com/wp-content/uploads/2021/12/pesapal.png" },
  { name: "Ministry of Tourism", logo: "https://wilbersafariholidays.com/wp-content/uploads/2021/12/ministry.png" },
  { name: "Horizon Guides", logo: "https://wilbersafariholidays.com/wp-content/uploads/2021/12/tsa.png" }, // Reusing an existing logo as placeholder, ideally we'd have the real one
  { name: "TripAdvisor", logo: "https://wilbersafariholidays.com/wp-content/uploads/2022/04/WhatsApp-Image-2022-04-01-at-5.01.43-AM-300x171.jpeg" }, // Placeholder logo for TripAdvisor
];

export function Partners() {
  return (
    <section className="py-16 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <span className="text-safari-primary font-semibold tracking-widest uppercase text-xs mb-8 block">Our Partners, Accreditations & Reviews</span>
        <div className="flex justify-center gap-10 md:gap-16 items-center flex-wrap opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <img src={partner.logo} alt={partner.name} className="h-12 md:h-16 object-contain" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
