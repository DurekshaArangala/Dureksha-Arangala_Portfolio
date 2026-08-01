/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-neutral-50 dark:bg-black text-neutral-500 dark:text-[#A1A1AA] py-16 border-t border-neutral-200 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          {/* Left Block */}
          <div className="md:col-span-5 text-center md:text-left space-y-4">
            <a
              href="#home"
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 group focus:outline-none"
            >
              <span className="font-serif italic font-light text-xl tracking-tight text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                Dureksha<span className="text-purple-600 dark:text-purple-400">.</span>
              </span>
            </a>
            <p className="text-neutral-400 dark:text-[#71717A] text-xs max-w-sm font-light">
              Final-year Data Science Undergraduate at SLTC, passionate about Machine Learning, NLP, and Artificial Intelligence.
            </p>
          </div>

          {/* Center/Right Menu */}
          <div className="md:col-span-4 flex flex-wrap justify-center gap-6 text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-400 dark:text-[#71717A]">
            <a href="#about" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-purple-600 dark:hover:text-purple-400 transition-colors">Contact</a>
          </div>

          {/* Right Social Blocks */}
          <div className="md:col-span-3 flex justify-center md:justify-end gap-3">
            <a
              id="footer-linkedin-link"
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-none bg-neutral-200 dark:bg-zinc-900 border border-neutral-300 dark:border-[#27272A] text-neutral-700 dark:text-zinc-300 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-300 dark:hover:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              id="footer-github-link"
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-none bg-neutral-200 dark:bg-zinc-900 border border-neutral-300 dark:border-[#27272A] text-neutral-700 dark:text-zinc-300 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-300 dark:hover:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              id="footer-mail-link"
              href={`mailto:${personalInfo.socials.email}`}
              className="w-9 h-9 rounded-none bg-neutral-200 dark:bg-zinc-900 border border-neutral-300 dark:border-[#27272A] text-neutral-700 dark:text-zinc-300 flex items-center justify-center hover:bg-purple-50 dark:hover:bg-purple-950/20 hover:border-purple-300 dark:hover:border-purple-900/40 hover:text-purple-600 dark:hover:text-purple-400 transition-all"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-neutral-200 dark:border-[#1F1F22] flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[10px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#71717A]">
          <div>
            &copy; {currentYear} {personalInfo.name}. All rights reserved.
          </div>
          <div>
            Designed & Developed in Colombo, Sri Lanka
          </div>
        </div>
      </div>
    </footer>
  );
}
