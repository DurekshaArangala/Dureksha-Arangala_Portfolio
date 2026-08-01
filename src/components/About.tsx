/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { GraduationCap, Trophy, Users, Lightbulb, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { personalInfo, educationTimeline } from '../data';

export default function About() {
  return (
    <section id="about" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center lg:text-left mb-16">
          <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
            Introduction
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white">
            About Me
          </h2>
          <p className="text-neutral-500 dark:text-[#A1A1AA] mt-4 max-w-2xl text-sm sm:text-base font-light">
            A look into my academic background, core achievements, and my journey in data science.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Bio & Stats Grid */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-6 text-neutral-600 dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed font-light">
              {personalInfo.bio.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              {personalInfo.stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 p-6 rounded-none text-center lg:text-left shadow-sm hover:border-purple-300 dark:hover:border-purple-900/60 hover:bg-neutral-100/30 dark:hover:bg-[#161619] transition-all"
                >
                  <div className="font-serif italic font-light text-3xl sm:text-4xl text-neutral-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] font-mono font-semibold text-neutral-400 dark:text-[#71717A] mt-2 uppercase tracking-widest">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Academic & Leadership Timeline */}
          <div className="lg:col-span-6">
            <div className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none p-6 sm:p-8 relative shadow-sm hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
              <h3 className="text-lg font-serif italic font-light text-neutral-900 dark:text-white mb-8 flex items-center gap-2.5">
                <GraduationCap className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                Education & Roles
              </h3>

              <div className="space-y-8 relative before:absolute before:inset-0 before:left-[11px] before:w-[1px] before:bg-neutral-200 dark:before:bg-[#27272A]">
                {educationTimeline.map((item, index) => (
                  <div key={index} className="relative pl-8 group">
                    {/* Bullet marker - rotatable square */}
                    <div className="absolute left-1 top-2.5 w-3.5 h-3.5 bg-neutral-50 dark:bg-black border border-neutral-400 dark:border-[#27272A] group-hover:bg-purple-600 dark:group-hover:bg-purple-400 group-hover:border-purple-600 dark:group-hover:border-purple-400 rotate-45 transition-all duration-300 z-10" />

                    {/* Content */}
                    <div>
                      <span className="inline-block px-3 py-1 border border-neutral-200 dark:border-[#27272A] bg-transparent text-neutral-600 dark:text-[#A1A1AA] text-[9px] font-mono uppercase tracking-widest mb-2">
                        {item.year}
                      </span>
                      <h4 className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white mt-1">
                        {item.title}
                      </h4>
                      <p className="text-xs font-mono text-neutral-400 dark:text-[#71717A]">
                        {item.organization}
                      </p>
                      <p className="text-neutral-500 dark:text-[#A1A1AA] text-xs sm:text-sm mt-2 leading-relaxed font-light">
                        {item.description}
                      </p>

                      {/* Timeline nested items */}
                      {item.details && item.details.length > 0 && (
                        <ul className="mt-3 space-y-1.5">
                          {item.details.map((detail, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-xs text-neutral-400 dark:text-[#71717A]">
                              <span className="mt-2 w-1 h-1 bg-purple-400 dark:bg-purple-600 rotate-45 flex-shrink-0" />
                              <span>{detail}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
