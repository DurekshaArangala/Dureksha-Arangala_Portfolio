/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  darkMode: boolean;
  setDarkMode: (dark: boolean) => void;
}

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Experiences', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar({ darkMode, setDarkMode }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Monitor scroll to change navbar appearance and active section
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;

      for (const item of navItems) {
        const id = item.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const targetId = href.slice(1);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-50/90 dark:bg-black/90 backdrop-blur-md border-b border-neutral-200/50 dark:border-[#1F1F22] py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between">
          {/* Logo - Elegant Serif Italic Branding */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2 group focus:outline-none"
            id="nav-logo"
          >
            <span className="font-serif italic font-semibold text-xl tracking-wide text-neutral-900 dark:text-white transition-colors">
              Dureksha<span className="text-purple-600 dark:text-purple-400 font-sans font-light">.</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  id={`nav-link-${id}`}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`relative pb-1 text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-150 ${
                    isActive
                      ? 'text-purple-600 dark:text-purple-400'
                      : 'text-neutral-400 dark:text-zinc-500 hover:text-neutral-900 dark:hover:text-white'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-purple-600 dark:bg-purple-400"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Controls: Theme Toggle Switch & Menu */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle - Matches the Rivera switch element */}
            <button
              id="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              className="flex items-center gap-2 focus:outline-none cursor-pointer group"
              aria-label="Toggle dark mode"
            >
              <div className="w-10 h-5 bg-neutral-200 dark:bg-[#27272A] rounded-full relative p-0.5 transition-colors duration-200">
                <motion.div
                  className="w-4 h-4 bg-white dark:bg-neutral-100 rounded-full shadow-sm flex items-center justify-center"
                  animate={{ x: darkMode ? 20 : 0 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                >
                  {darkMode ? (
                    <Moon className="w-2.5 h-2.5 text-neutral-900" />
                  ) : (
                    <Sun className="w-2.5 h-2.5 text-amber-500" />
                  )}
                </motion.div>
              </div>
              <span className="hidden sm:inline text-[9px] uppercase tracking-widest text-neutral-500 dark:text-[#71717A] font-mono group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                {darkMode ? 'Dark' : 'Light'}
              </span>
            </button>

            {/* Mobile Menu Button */}
            <button
              id="mobile-menu-btn"
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-md border border-neutral-200 dark:border-[#27272A] text-neutral-600 dark:text-zinc-400 hover:bg-neutral-100 dark:hover:bg-zinc-900 transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden bg-neutral-50 dark:bg-black border-b border-neutral-200 dark:border-[#1F1F22] overflow-hidden"
          >
            <div className="px-6 pt-3 pb-8 space-y-2">
              {navItems.map((item) => {
                const id = item.href.slice(1);
                const isActive = activeSection === id;
                return (
                  <a
                    key={item.href}
                    id={`mobile-nav-link-${id}`}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className={`block px-4 py-2.5 text-[11px] uppercase tracking-widest font-medium transition-colors ${
                      isActive
                        ? 'text-purple-600 dark:text-purple-400 bg-purple-500/10 dark:bg-purple-500/10 font-semibold border-l-2 border-purple-600 dark:border-purple-400'
                        : 'text-neutral-500 dark:text-zinc-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-50 dark:hover:bg-zinc-900'
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
