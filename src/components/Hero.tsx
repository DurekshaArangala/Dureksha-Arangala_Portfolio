/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowDown, Mail, Download, Github, Linkedin, MessageSquare, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo } from '../data';

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  const handleScrollDown = () => {
    const nextSection = document.getElementById('about');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  const handleDownloadCV = () => {
    const nextSection = document.getElementById('cv-section');
    if (nextSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = nextSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-32 pb-16 overflow-hidden bg-white dark:bg-black"
    >
      {/* Decorative Radial Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#F3E8FF,transparent)] dark:bg-[radial-gradient(circle_at_50%_-20%,#1A0F2B,transparent)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: Info details */}
          <div className="lg:col-span-7 text-center lg:text-left order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block mb-6 px-4 py-1.5 border border-purple-200 dark:border-purple-900/30 bg-purple-50/30 dark:bg-purple-950/10 rounded-full text-[10px] uppercase tracking-widest text-purple-700 dark:text-purple-300 font-mono font-medium"
            >
              Available for Internships
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-[76px] leading-[1.0] font-light mb-6 text-neutral-900 dark:text-white"
            >
              Hey, I'm <br />
              <span className="font-serif italic font-light text-neutral-900 dark:text-white">
                {personalInfo.name}
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="font-mono text-xs sm:text-sm uppercase tracking-widest text-neutral-700 dark:text-[#71717A] mt-4 font-semibold"
            >
              Aspiring Data Scientist | BSc(Hons) in Data Science (UG)
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-neutral-500 dark:text-[#A1A1AA] mt-6 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0 font-light"
            >
              Final-Year Data Science Undergraduate passionate about AI, Machine Learning, Deep Learning, and Data Engineering. I enjoy building intelligent solutions, exploring data-driven technologies, and continuously learning to solve real-world challenges.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-8"
            >
              <button
                id="hero-download-cv-btn"
                onClick={handleDownloadCV}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-purple-600 dark:bg-purple-500 text-white dark:text-white text-xs uppercase tracking-widest font-bold rounded-none hover:bg-purple-700 dark:hover:bg-purple-600 transition-all cursor-pointer font-mono shadow-sm border border-purple-600 dark:border-purple-500"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </button>
              <button
                id="hero-contact-btn"
                onClick={onContactClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 border border-purple-200 dark:border-purple-900/40 bg-transparent text-purple-700 dark:text-purple-300 text-xs uppercase tracking-widest font-bold rounded-none hover:bg-purple-50/50 dark:hover:bg-purple-950/10 transition-all cursor-pointer font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                Contact Me
              </button>
            </motion.div>
          </div>

          {/* Right: Picture and Decorative frames */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col items-center gap-6 relative"
            >
              <div className="relative">
                {/* Round Colorful Profile Photo with Round Animations */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 flex items-center justify-center">
                  {/* Rotating Outer Dashed/Gradient Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-2 border-dashed border-purple-500/60 dark:border-purple-400/60"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Secondary Fast Rotating Ring (Reverse) */}
                  <motion.div
                    className="absolute inset-3 rounded-full border border-purple-300/40 dark:border-purple-800/20 border-t-purple-600 dark:border-t-purple-400"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  />

                  {/* Inner Profile Image Container */}
                  <div className="relative w-[86%] h-[86%] rounded-full bg-neutral-100 dark:bg-black border border-neutral-200 dark:border-[#1F1F22] p-2 sm:p-3 shadow-xl overflow-hidden">
                    <img
                      src={personalInfo.profileImage}
                      alt={personalInfo.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover rounded-full transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                </div>

                {/* Floating tech pill */}
                <div className="absolute -bottom-2 right-4 bg-white dark:bg-black border border-purple-200 dark:border-purple-950/40 px-4 py-2 rounded-full shadow-md flex items-center gap-2 z-10">
                  <div className="w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rotate-45 animate-pulse" />
                  <span className="text-[10px] uppercase tracking-widest font-mono font-semibold text-purple-700 dark:text-purple-300"> Open to Work </span>
                </div>
              </div>

              {/* Connected Social Links placed under profile photo */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="mt-6 flex flex-col sm:flex-row sm:items-center justify-center gap-4 w-full"
              >
                <div className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium text-center sm:text-left">
                  Connect
                </div>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  <a
                    id="hero-social-linkedin"
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-neutral-200 dark:border-[#27272A] bg-white dark:bg-black text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-900 flex items-center justify-center transition-colors"
                    aria-label="LinkedIn Profile"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    id="hero-social-github"
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-neutral-200 dark:border-[#27272A] bg-white dark:bg-black text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-900 flex items-center justify-center transition-colors"
                    aria-label="GitHub Profile"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                 
                  <a
                    id="hero-social-Email"
                    href={`mailto:${personalInfo.socials.email}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-neutral-200 dark:border-[#27272A] bg-white dark:bg-black text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-900 flex items-center justify-center transition-colors text-lg"
                    aria-label="Email"
                  >
                    🖂
                  </a>
                  <a
                    id="hero-social-medium"
                    href={personalInfo.socials.medium}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 border border-neutral-200 dark:border-[#27272A] bg-white dark:bg-black text-neutral-500 dark:text-neutral-400 hover:text-purple-600 dark:hover:text-purple-400 hover:border-purple-300 dark:hover:border-purple-900 flex items-center justify-center transition-colors font-bold text-xs font-mono"
                    aria-label="Medium Blog"
                  >
                    M
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll down button at bottom */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:block">
          <motion.button
            id="hero-scroll-indicator"
            onClick={handleScrollDown}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-neutral-400 dark:text-zinc-500 hover:text-purple-600 dark:hover:text-purple-400 transition-colors focus:outline-none cursor-pointer"
          >
            <span className="text-[9px] font-mono tracking-widest uppercase">Scroll Down</span>
            <ArrowDown className="w-3 h-3" />
          </motion.button>
        </div>
      </div>
    </section>
  );
}
