import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Events from './components/Events';
import Team from './components/Team';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import BookingForm from './components/BookingForm';

function App() {
  const [isBookingFormOpen, setIsBookingFormOpen] = useState(false);

  const handleBookNowClick = () => {
    setIsBookingFormOpen(true);
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const elementPosition = contactSection.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white" id="home">
      <Header onBookNowClick={handleBookNowClick} />
      <Hero onBookNowClick={handleBookNowClick} onContactClick={handleContactClick} />
      <Services />
      <Portfolio />
      <Testimonials />
      <Events />
      <Team />
      <ContactForm />
      <Footer />
      <BookingForm isOpen={isBookingFormOpen} onClose={() => setIsBookingFormOpen(false)} />
    </div>
  );
}

export default App;
