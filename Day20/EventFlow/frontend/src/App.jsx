// src/App.jsx
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import HowItWorksSection from './components/HowItWorksSection';
import TestimonialsSection from './components/TestimonialsSection';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      text: "EventFlow made our conference ticketing and check-in process incredibly smooth. The QR code scanning was fast and reliable!",
      author: "John Doe",
      role: "Tech Conference Organizer",
      initials: "JD",
      avatar: "/api/placeholder/80/80"
    },
    {
      text: "The Stripe integration works flawlessly. We received payments quickly and the platform fee is very reasonable for the features offered.",
      author: "Sarah Miller",
      role: "Music Festival Director",
      initials: "SM",
      avatar: "/api/placeholder/80/80"
    },
    {
      text: "I love the admin panel - it's so intuitive! Creating events and managing tickets has never been easier.",
      author: "Robert Johnson",
      role: "Community Event Planner",
      initials: "RJ",
      avatar: "/api/placeholder/80/80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="App min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <Header isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <TestimonialsSection 
        testimonials={testimonials} 
        activeTestimonial={activeTestimonial} 
        setActiveTestimonial={setActiveTestimonial} 
      />
      <CTASection />
      <Footer />
    </div>
  );
}

export default App;