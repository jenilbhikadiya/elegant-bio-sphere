
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";

const Index = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  
  // Update the document title
  useEffect(() => {
    document.title = 'Your Name - Personal Portfolio';
  }, []);
  
  // Show back to top button when scrolled down
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Smooth scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };
  
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Hobbies />
      <Contact />
      <Footer />
      <Toaster />
      
      {/* Back to top button with animation */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 hover:scale-110 transition-all duration-300 z-10 ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 15l7-7 7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default Index;
