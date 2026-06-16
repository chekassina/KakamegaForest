import { motion } from 'motion/react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';

export function ContactUs() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 max-w-2xl mx-auto">
          <span className="text-green-700 font-semibold tracking-widest uppercase text-sm mb-4 block">Get In Touch</span>
          <h2 className="text-4xl md:text-5xl font-serif text-safari-dark mb-6">Contact Us</h2>
          <p className="text-safari-dark/70 text-lg">
            Ready to explore the beautiful Kakamega Forest? Fill out the form or reach out via WhatsApp to book your tour.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-16 lg:gap-12 bg-white border border-gray-100 rounded-sm shadow-xl shadow-safari-dark/5 p-6 md:p-12">
          
          {/* Contact Details */}
          <div className="lg:w-1/3 flex flex-col gap-10">
            <div>
              <h3 className="text-2xl font-serif text-safari-dark mb-6">Contact Info</h3>
              <p className="text-safari-dark/70 text-sm mb-8 pr-4">We are available 24/7 to answer any of your questions regarding our tours and packages.</p>
            </div>
            
            <div className="flex flex-col gap-8">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 bg-green-50 flex items-center justify-center rounded-sm text-green-700">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-safari-dark mb-1">Office Location</h4>
                  <p className="text-safari-dark/70 text-sm">Kakamega Forest<br />Kakamega Town<br />Postal Code: 50100</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 shrink-0 bg-green-50 flex items-center justify-center rounded-sm text-green-700">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-safari-dark mb-1">Give Us A Call</h4>
                  <p className="text-safari-dark/70 text-sm">+254 712 767 753</p>
                  <p className="text-safari-dark/70 text-sm">+254 762 015 157</p>
                  <a href="https://wa.me/254712767753" target="_blank" rel="noopener noreferrer" className="block mt-2 text-green-600 font-semibold hover:text-green-800 transition-colors text-sm">
                    Chat on WhatsApp &rarr;
                  </a>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="w-full h-48 bg-gray-200 rounded-sm mt-4 overflow-hidden relative border border-gray-100 hidden sm:block">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.083758368943!2d34.846513437500004!3d0.2878953185590928!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1780000a6e7fdde3%3A0x6b876fc1548e35cf!2sKakamega%20Forest%20National%20Reserve!5e0!3m2!1sen!2sus!4v1714488358487!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen={true} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Maps Location for Kakamega Forest"
                ></iframe>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:w-2/3">
            <h3 className="text-2xl font-serif text-safari-dark mb-6">Book a Tour</h3>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-safari-dark mb-2">First Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors"
                  placeholder="John"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-safari-dark mb-2">Last Name</label>
                <input 
                  type="text" 
                  className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors"
                  placeholder="Doe"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-safari-dark mb-2">Email Address</label>
                <input 
                  type="email" 
                  className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors"
                  placeholder="john@example.com"
                />
              </div>
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-safari-dark mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors"
                  placeholder="+1 234 567 890"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-safari-dark mb-2">Interested Activity</label>
                <select className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors appearance-none">
                  <option>Guided Forest Tours</option>
                  <option>Bird Watching</option>
                  <option>Herping</option>
                  <option>Primate Watching</option>
                  <option>Safari Packages</option>
                </select>
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-safari-dark mb-2">Your Message</label>
                <textarea 
                  rows={4}
                  className="w-full bg-[#f9f9f9] border border-transparent focus:border-green-700 focus:bg-white px-4 py-3 rounded-sm outline-none transition-colors resize-none"
                  placeholder="Tell us about your trip dates and group size"
                ></textarea>
              </div>
              <div className="md:col-span-2 mt-2">
                <Button size="lg" className="w-full h-14 md:w-auto px-10 bg-green-700 hover:bg-green-800">Send Request</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
