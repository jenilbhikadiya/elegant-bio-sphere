
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Hobbies from '@/components/Hobbies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  // Update the document title
  useEffect(() => {
    document.title = 'Your Name - Personal Portfolio';
  }, []);
  
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
      
      {/* Back to top button */}
      <a
        href="#"
        className="fixed bottom-8 right-8 bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors z-10"
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
      </a>
    </div>
  );
};

export default Index;
