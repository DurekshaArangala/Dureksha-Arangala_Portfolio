/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Award, ShieldCheck, Calendar, ArrowUpRight } from 'lucide-react';
import { certificationsData } from '../data';

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
            Certifications
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white">
            Milestones & Badges
          </h2>
          <p className="text-neutral-500 dark:text-[#A1A1AA] mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Professional milestones, credential verifications, and technical badges completed.
          </p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {certificationsData.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none p-6 sm:p-8 flex flex-col justify-between shadow-sm hover:border-purple-300 dark:hover:border-purple-900/60 hover:bg-neutral-100/30 dark:hover:bg-[#161619] transition-all group"
            >
              <div>
                {/* Badge Header Icon */}
                <div className="flex items-center justify-between mb-6">
                  <div className="w-10 h-10 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                    <Award className="w-5 h-5 group-hover:scale-105 transition-transform text-purple-600 dark:text-purple-400" />
                  </div>
                  <ShieldCheck className="w-4 h-4 text-purple-500/80 dark:text-purple-400/80" />
                </div>

                {/* Info */}
                <h4 className="font-sans text-sm sm:text-base font-bold text-neutral-900 dark:text-white leading-snug">
                  {cert.title}
                </h4>
                <p className="text-xs font-mono text-neutral-400 dark:text-[#71717A] mt-1.5">
                  {cert.issuer}
                </p>

                {/* Details list */}
                <div className="mt-5 space-y-2 pt-4 border-t border-neutral-200 dark:border-[#1F1F22] text-[10px] font-mono uppercase tracking-wider text-neutral-400 dark:text-[#71717A]">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-3.5 h-3.5 text-neutral-400 dark:text-[#71717A]" />
                    <span>Issued: {cert.date}</span>
                  </div>
                  {cert.credentialId && (
                    <div className="text-[9px]">
                      ID: {cert.credentialId}
                    </div>
                  )}
                </div>
              </div>

              {/* Action Link */}
              <div className="mt-6">
                <a
                  id={`cert-link-${cert.id}`}
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-900 dark:text-white hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                >
                  Verify Credential
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
