import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Destinations } from '../components/Destinations';
import { AboutUs } from '../components/AboutUs';
import { ToursAndServices } from '../components/ToursAndServices';
import { Gallery } from '../components/Gallery';
import { Testimonials } from '../components/Testimonials';
import { ContactUs } from '../components/ContactUs';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <div className="min-h-screen bg-safari-light">
      <Navbar />
      <Hero />
      <AboutUs />
      <ToursAndServices />
      <Destinations />
      <Gallery />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
