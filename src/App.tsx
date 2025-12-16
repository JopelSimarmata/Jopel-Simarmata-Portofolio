import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { PortfolioShowcase } from './components/PortfolioShowcase';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'portfolio', 'experience', 'contact'];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <div id="home">
        <Hero />
      </div>
      
      <div id="about">
        <About />
      </div>
      
      <div id="portfolio">
        <PortfolioShowcase />
      </div>
      
      <div id="experience">
        <Experience />
      </div>
      
      <div id="contact">
        <Contact />
      </div>
    </div>
  );
}