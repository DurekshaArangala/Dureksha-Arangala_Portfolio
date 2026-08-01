/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { Code2, BrainCircuit, Cloud, Workflow, Cpu, Users } from 'lucide-react';
import { skillsData } from '../data';

// Helper to resolve string keys to Lucide icons
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'Code2':
      return <Code2 className="w-5 h-5" />;
    case 'BrainCircuit':
      return <BrainCircuit className="w-5 h-5" />;
    case 'Cloud':
      return <Cloud className="w-5 h-5" />;
    case 'Workflow':
      return <Workflow className="w-5 h-5" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5" />;
    case 'Users':
      return <Users className="w-5 h-5" />;
    default:
      return <Code2 className="w-5 h-5" />;
  }
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
            Skills & Tools
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white">
            Tech Stack
          </h2>
          <p className="text-neutral-500 dark:text-[#A1A1AA] mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
            Tools I reach for daily, and the ones I'm actively leveling up.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillsData.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none p-6 sm:p-8 shadow-sm hover:border-purple-300 dark:hover:border-purple-900/60 hover:bg-neutral-100/30 dark:hover:bg-[#161619] transition-all"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-9 h-9 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center">
                  {getIcon(category.icon)}
                </div>
                <h4 className="font-mono text-xs uppercase tracking-widest font-bold text-neutral-900 dark:text-white">
                  {category.title}
                </h4>
              </div>

              {/* Skill Bars */}
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-1.5">
                    <div className="flex items-center justify-between text-xs sm:text-sm">
                      <span className="font-sans font-medium text-neutral-800 dark:text-[#E5E5E5]">
                        {skill.name}
                      </span>
                      <span className="font-mono text-[10px] text-neutral-400 dark:text-[#71717A]">
                        {skill.label}
                      </span>
                    </div>

                    {/* Progress Bar Container - minimalist black & white style */}
                    <div className="h-[4px] w-full bg-neutral-200 dark:bg-[#27272A] rounded-none overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: 'easeOut' }}
                        className="h-full rounded-none bg-purple-600 dark:bg-purple-500"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
