/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  // Try to read theme from local storage or default to dark mode as her resume screenshots show dark mode as standard
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      // Fallback to dark mode as her primary screenshots are dark themed
      return true;
    }
    return true;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  // Handler to scroll to contact section
  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = contactSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-black text-neutral-900 dark:text-[#F0F0F0] selection:bg-neutral-200 dark:selection:bg-neutral-800 transition-colors duration-200">
      {/* Navbar */}
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Hero Section */}
      <Hero onContactClick={handleContactClick} />

      {/* Main Content Layout */}
      <main>
        {/* About Me Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Portfolio Section */}
        <Projects />

        {/* Certifications & Badges Section */}
        <Certifications />

        {/* Experience & Volunteerings Section with CV download option */}
        <Experience />

        {/* Contact form and Connect Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
