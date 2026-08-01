/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Github, ExternalLink, ArrowUpRight, X, Sparkles, TrendingUp } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

const categories: ('All' | 'Machine Learning' | 'NLP' | 'Big Data' | 'Data Analytics')[] = [
  'All',
  'Machine Learning',
  'NLP',
  'Big Data',
  'Data Analytics',
];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<typeof categories[number]>('All');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Filter projects
  const filteredProjects = projectsData.filter((project) => {
    if (selectedCategory === 'All') return true;
    return project.category === selectedCategory;
  });

  return (
    <section id="projects" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Heading */}
        <div className="text-center mb-12">
          <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
            Portfolio
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white">
            Featured work
          </h2>
          <p className="text-neutral-500 dark:text-[#A1A1AA] mt-4 max-w-2xl mx-auto text-sm sm:text-base font-light">
            A mix of coursework, hackathon builds, and independent research. Click any card for details.
          </p>
        </div>

        {/* Category Filters - Minimal Monochrome Blocks */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2.5 text-[10px] uppercase tracking-widest font-mono font-bold rounded-none transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-purple-600 dark:bg-purple-500 text-white dark:text-white shadow-sm'
                  : 'border border-neutral-200 dark:border-[#27272A] bg-transparent text-neutral-500 dark:text-[#A1A1AA] hover:bg-purple-50/50 dark:hover:bg-purple-950/10 hover:border-purple-200 dark:hover:border-purple-900/30'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col h-full bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none overflow-hidden shadow-sm hover:border-purple-300 dark:hover:border-purple-900/60 transition-all cursor-pointer"
                onClick={() => setActiveProject(project)}
              >
                {/* Visual Placeholder Header - Desaturated Modern Tech Card Header */}
                <div className="relative h-44 bg-neutral-200 dark:bg-zinc-900 flex items-center justify-center p-6 text-neutral-900 dark:text-white">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#F3E8FF,transparent)] dark:bg-[radial-gradient(circle_at_50%_-20%,#2D1B4E,transparent)] opacity-60" />
                  
                  {/* Category icon overlay background */}
                  <div className="absolute top-4 right-4 border border-purple-200 dark:border-purple-900/30 bg-purple-50/95 dark:bg-purple-950/90 text-[9px] font-mono uppercase tracking-widest text-purple-700 dark:text-purple-300 px-2.5 py-1">
                    {project.category}
                  </div>

                  {/* Centered abstract graphics layout */}
                  <div className="text-center">
                    <span className="text-lg font-bold tracking-widest font-mono text-neutral-700 dark:text-white uppercase block">
                      {`[ ${project.category.slice(0, 3).toUpperCase()} ]`}
                    </span>
                    <span className="text-[9px] text-neutral-400 dark:text-[#71717A] mt-1.5 font-mono uppercase tracking-wider block">
                      project screenshot
                    </span>
                  </div>
                </div>

                {/* Content body */}
                <div className="flex flex-col flex-grow p-6 sm:p-8">
                  {/* Metrics Row */}
                  {project.metrics && project.metrics.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.metrics.map((metric) => (
                        <div key={metric.label} className="flex items-center gap-1 bg-purple-500/5 dark:bg-[#1C1C1F] border border-purple-100/50 dark:border-purple-900/30 px-2.5 py-1">
                          <TrendingUp className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                          <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-neutral-700 dark:text-[#A1A1AA]">
                            {metric.label}: {metric.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}

                  <h3 className="text-lg font-serif italic text-neutral-900 dark:text-white leading-tight group-hover:text-neutral-600 dark:group-hover:text-zinc-300 transition-colors mt-2">
                    {project.title}
                  </h3>

                  <p className="text-neutral-500 dark:text-[#A1A1AA] text-xs sm:text-sm mt-3.5 leading-relaxed flex-grow font-light">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-neutral-200 dark:border-[#27272A] bg-transparent text-neutral-500 dark:text-[#A1A1AA]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Card actions footer */}
                  <div className="flex items-center justify-between mt-6 pt-5 border-t border-neutral-200 dark:border-[#1F1F22] text-[10px] uppercase tracking-widest font-mono font-bold text-neutral-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Read More <ArrowUpRight className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                    </span>
                    <div className="flex items-center gap-3">
                      {project.githubUrl && (
                        <span className="p-1 text-neutral-400 dark:text-[#71717A]" onClick={(e) => e.stopPropagation()}>
                          <Github className="w-3.5 h-3.5" />
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Detailed Modal Overlay */}
        <AnimatePresence>
          {activeProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-neutral-950/70 backdrop-blur-sm"
                onClick={() => setActiveProject(null)}
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.98, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, y: 15 }}
                transition={{ type: 'spring', duration: 0.4 }}
                className="relative bg-white dark:bg-[#0B0B0C] border border-neutral-200 dark:border-zinc-800/80 rounded-none w-full max-w-2xl overflow-hidden shadow-2xl z-10"
              >
                {/* Header graphic */}
                <div className="border-b border-neutral-200 dark:border-zinc-800/80 bg-neutral-50 dark:bg-[#121214] p-6 sm:p-8 flex items-center justify-between relative">
                  <div>
                    <span className="text-[9px] font-mono uppercase tracking-widest border border-purple-200 dark:border-purple-900/40 px-2.5 py-1 text-purple-700 dark:text-purple-300 bg-purple-50/20 dark:bg-purple-950/10">
                      {activeProject.category}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-serif italic font-light mt-4 text-neutral-900 dark:text-white leading-tight">
                      {activeProject.title}
                    </h3>
                  </div>
                  <button
                    id="project-detail-close"
                    onClick={() => setActiveProject(null)}
                    className="p-2 rounded-none border border-neutral-300 dark:border-[#27272A] text-neutral-600 dark:text-[#A1A1AA] hover:bg-neutral-100 dark:hover:bg-zinc-900 transition-all focus:outline-none cursor-pointer"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Content body */}
                <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
                  {/* Metrics */}
                  {activeProject.metrics && activeProject.metrics.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-[#71717A] mb-3 flex items-center gap-1.5">
                        <Sparkles className="w-3 h-3 text-purple-600 dark:text-purple-400" />
                        Key Results & Metrics
                      </h4>
                      <div className="grid grid-cols-2 gap-4">
                        {activeProject.metrics.map((metric) => (
                          <div key={metric.label} className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 p-4 rounded-none shadow-sm">
                            <div className="text-[9px] font-mono uppercase tracking-widest text-neutral-400 dark:text-[#71717A]">{metric.label}</div>
                            <div className="text-lg font-serif italic text-neutral-900 dark:text-white mt-1">{metric.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Summary Description */}
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-[#71717A] mb-2">
                      Overview
                    </h4>
                    <p className="text-neutral-600 dark:text-[#A1A1AA] text-sm leading-relaxed font-light">
                      {activeProject.description}
                    </p>
                  </div>

                  {/* Project technical details bullets */}
                  {activeProject.details && activeProject.details.length > 0 && (
                    <div>
                      <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-[#71717A] mb-3">
                        Technical Highlights
                      </h4>
                      <ul className="space-y-3">
                        {activeProject.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-600 dark:text-[#A1A1AA] leading-relaxed font-light">
                            <span className="mt-1.5 w-1.5 h-1.5 bg-purple-600 dark:bg-purple-400 rotate-45 flex-shrink-0" />
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tags */}
                  <div>
                    <h4 className="text-[10px] font-mono tracking-widest uppercase text-neutral-400 dark:text-[#71717A] mb-2.5">
                      Technologies & Libraries
                    </h4>
                    <div className="flex flex-wrap gap-1.5">
                      {activeProject.tags.map((tag) => (
                        <span key={tag} className="px-2.5 py-1 text-[9px] font-mono uppercase tracking-widest border border-neutral-200 dark:border-[#27272A] bg-transparent text-neutral-600 dark:text-[#A1A1AA]">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer links */}
                <div className="p-6 border-t border-neutral-200 dark:border-zinc-800/80 flex justify-end gap-3 bg-neutral-50 dark:bg-[#121214]">
                  {activeProject.githubUrl && (
                    <a
                      id="project-github-link"
                      href={activeProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-6 py-3 border border-purple-200 dark:border-purple-900/40 text-purple-750 dark:text-purple-300 text-[10px] font-mono font-bold uppercase tracking-wider rounded-none hover:bg-purple-50 dark:hover:bg-purple-950/20 transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      GitHub Repository
                    </a>
                  )}
                  <a
                    id="project-demo-link"
                    href={activeProject.liveUrl || '#'}
                    onClick={(e) => activeProject.liveUrl === '#' && e.preventDefault()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-6 py-3 bg-purple-600 dark:bg-purple-500 text-white dark:text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-none hover:bg-purple-750 dark:hover:bg-purple-600 transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    Live Demo
                  </a>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
