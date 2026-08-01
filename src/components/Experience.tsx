/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Briefcase, HeartHandshake, Download, Sparkles, FileText, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import { experienceTimeline, volunteeringData, personalInfo } from '../data';

export default function Experience() {
  return (
    <section id="experience" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Experience Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-24">
          {/* Left: Heading & Intro */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
              Experience
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white leading-tight">
              Leadership & Engagement
            </h2>
            <p className="text-neutral-500 dark:text-[#A1A1AA] mt-4 text-sm sm:text-base font-light leading-relaxed">
              Leading technical operations, organizing international hackathons, and fostering technology-driven student communities.
            </p>
          </div>

          {/* Right: Secretary Role Timeline */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none p-6 sm:p-8 hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
              <h3 className="text-base font-serif italic font-light text-neutral-900 dark:text-white mb-6 flex items-center gap-2">
                <Briefcase className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                Experience History
              </h3>

              <div className="space-y-8">
                {experienceTimeline.map((item, idx) => (
                  <div key={idx} className="border-l border-neutral-300 dark:border-[#27272A] pl-6 space-y-3">
                    <div>
                      <span className="inline-block px-3 py-1 border border-purple-200 dark:border-purple-900/30 bg-purple-50/20 dark:bg-purple-950/10 text-purple-700 dark:text-purple-300 text-[9px] font-mono uppercase tracking-widest">
                        {item.year}
                      </span>
                    </div>
                    <h4 className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white mt-2">
                      {item.title} — <span className="font-serif italic font-light text-neutral-500 dark:text-[#A1A1AA]">{item.organization}</span>
                    </h4>
                    <p className="text-neutral-500 dark:text-[#A1A1AA] text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>

                    {item.details && item.details.length > 0 && (
                      <ul className="space-y-1.5 pt-2">
                        {item.details.map((detail, dIdx) => (
                          <li key={dIdx} className="flex items-start gap-2.5 text-xs text-neutral-400 dark:text-[#71717A] leading-relaxed font-light">
                            <span className="mt-2 w-1 h-1 bg-purple-400 dark:bg-purple-600 rotate-45 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Volunteering Sub-Section */}
        <div className="mb-24">
          <div className="text-center mb-12">
            <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
              Community
            </span>
            <h3 className="text-2xl sm:text-3xl font-serif italic font-light text-neutral-900 dark:text-white">
              Volunteering & Outreach
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {volunteeringData.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 p-6 rounded-none flex flex-col justify-between hover:border-purple-300 dark:hover:border-purple-900/60 hover:bg-neutral-100/30 dark:hover:bg-[#161619] transition-all"
              >
                <div>
                  <span className="inline-block px-2.5 py-0.5 border border-purple-200 dark:border-purple-900/30 text-purple-750 dark:text-purple-300 text-[9px] font-mono uppercase tracking-widest mb-4">
                    {item.tag}
                  </span>
                  <h4 className="font-sans text-sm font-bold text-neutral-900 dark:text-white leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-neutral-500 dark:text-[#A1A1AA] text-xs mt-3 leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
                <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-purple-600 dark:text-purple-400 mt-5 uppercase tracking-widest">
                  <HeartHandshake className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                  Volunteered
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Dedicated CV Download Section */}
        <div id="cv-section" className="pt-16 border-t border-neutral-200 dark:border-[#1F1F22]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Mockup image of CV/Resume */}
            <div className="lg:col-span-5 flex justify-center order-2 lg:order-1">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                {/* CV mockup container - styled with sharp high contrast lines */}
                <div className="w-64 sm:w-72 h-auto rounded-none overflow-hidden shadow-2xl border border-neutral-200 dark:border-[#1F1F22] bg-white dark:bg-black p-2 transform -rotate-1 hover:rotate-0 transition-transform duration-500">
                  <img
                    src={personalInfo.cvImage}
                    alt="Resume CV Mockup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full rounded-none object-contain"
                  />
                </div>
              </motion.div>
            </div>

            {/* Right Column: Prompt content */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left order-1 lg:order-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 border border-purple-200 dark:border-purple-900/30 text-purple-700 dark:text-purple-300 text-[9px] font-mono uppercase tracking-widest bg-purple-50/20 dark:bg-purple-950/10">
                <FileText className="w-3.5 h-3.5 text-purple-600 dark:text-purple-400" />
                Resume Curriculum Vitae
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif italic font-light text-neutral-900 dark:text-white">
                Curriculum Vitae
              </h3>

              <p className="text-neutral-500 dark:text-[#A1A1AA] text-xs sm:text-sm leading-relaxed max-w-xl mx-auto lg:mx-0 font-light">
                For a complete, comprehensive version of my academic milestones, deep technical skills, and research project write-ups in Data Science, please click below to download my full Curriculum Vitae.
              </p>

              <div className="pt-3">
                {/* Download PDF button - styled with sharp modern rectangle */}
                <a
                  id="cv-download-link"
                  href="/api/cv/download"
                  download="Dureksha_Arangala_Data_Science_CV.pdf"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 bg-purple-600 dark:bg-purple-500 text-white dark:text-white font-mono font-bold uppercase tracking-widest text-[10px] rounded-none hover:bg-purple-700 dark:hover:bg-purple-600 hover:-translate-y-0.5 transition-all border border-purple-600 dark:border-purple-500"
                >
                  <Download className="w-4 h-4" />
                  Download CV (PDF, 1.5MB)
                </a>
              </div>

              {/* Connect details */}
              <div className="pt-6 flex flex-col sm:flex-row sm:items-center justify-center lg:justify-start gap-3 text-[10px] font-mono font-bold text-neutral-400 dark:text-[#71717A]">
                <span>CONNECT DIRECTLY VIA</span>
                <div className="flex items-center justify-center lg:justify-start gap-4 text-neutral-600 dark:text-neutral-300">
                  <a
                    id="cv-connect-linkedin"
                    href={personalInfo.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1 transition-colors"
                  >
                    LinkedIn <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                  <span className="w-1 h-1 bg-neutral-300 dark:bg-[#27272A] rounded-full" />
                  <a
                    id="cv-connect-github"
                    href={personalInfo.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-purple-600 dark:hover:text-purple-400 inline-flex items-center gap-1 transition-colors"
                  >
                    GitHub <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
