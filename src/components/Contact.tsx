/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Github, Linkedin, Send, Check, Loader2, Phone, Sparkles } from 'lucide-react';
import { personalInfo } from '../data';

const elseWhereProfiles = [
  {
    prefix: 'GH',
    title: 'GitHub',
    handle: '@dureksha',
    link: personalInfo.socials.github,
    color: 'hover:border-slate-400 dark:hover:border-slate-600',
  },
  {
    prefix: 'in',
    title: 'LinkedIn',
    handle: '/in/dureksha-arangala',
    link: personalInfo.socials.linkedin,
    color: 'hover:border-blue-400 dark:hover:border-blue-600',
  },
  {
    prefix: 'MS',
    title: 'Microsoft Learn',
    handle: 'Student Profile',
    link: 'https://learn.microsoft.com/en-us/users/DurekshaArangala-3461',
    color: 'hover:border-teal-400 dark:hover:border-teal-600',
  },
  {
    prefix: 'G',
    title: 'Google Skills',
    handle: 'Profile & badges',
    link: ' https://www.skills.google/public_profiles/d785e1d6-7928-4e33-939b-c77333ebe92b',
    color: 'hover:border-red-400 dark:hover:border-red-600',
  },
  {
    prefix: 'M',
    title: 'Medium',
    handle: '@dureksha.ds',
    link: personalInfo.socials.medium,
    color: 'hover:border-zinc-400 dark:hover:border-zinc-650',
  },
  {
    prefix: '✉️',
    title: 'Email',
    handle: 'durekshachammi2911@gmail.com',
    link: `mailto:${personalInfo.socials.email}`,
    color: 'hover:border-violet-400 dark:hover:border-violet-600',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        // Reset state after 4 seconds
        setTimeout(() => setStatus('idle'), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Contact submit error:', error);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white dark:bg-black overflow-hidden relative border-t border-neutral-200/50 dark:border-[#1F1F22]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Primary Let's Talk Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-24">
          
          {/* Left Column: Contact details */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
              Connect
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif italic font-light text-neutral-900 dark:text-white leading-tight">
              Let's Talk
            </h2>
            <p className="text-neutral-500 dark:text-[#A1A1AA] text-sm sm:text-base leading-relaxed max-w-md mx-auto lg:mx-0 font-light">
              Reach out for internships, collaborations, research discussions, or just to talk about data science and ML!
            </p>

            {/* Structured Contact Info Cards */}
            <div className="space-y-3 pt-6 max-w-sm mx-auto lg:mx-0">
              <div className="flex items-center gap-4 bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 px-5 py-4 rounded-none hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
                <div className="w-10 h-10 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest">EMAIL</div>
                  <a href={`mailto:${personalInfo.socials.email}`} className="text-xs sm:text-sm font-semibold text-neutral-850 dark:text-[#E5E5E5] hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    {personalInfo.socials.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 px-5 py-4 rounded-none hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
                <div className="w-10 h-10 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest">LINKEDIN</div>
                  <a href={personalInfo.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-neutral-850 dark:text-[#E5E5E5] hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    dureksha-arangala
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 px-5 py-4 rounded-none hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
                <div className="w-10 h-10 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest">GITHUB</div>
                  <a href={personalInfo.socials.github} target="_blank" rel="noopener noreferrer" className="text-xs sm:text-sm font-semibold text-neutral-850 dark:text-[#E5E5E5] hover:text-purple-600 dark:hover:text-purple-400 transition-colors">
                    github.com/dureksha
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 px-5 py-4 rounded-none hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
                <div className="w-10 h-10 rounded-none bg-purple-50/50 dark:bg-purple-950/10 border border-purple-200 dark:border-purple-950/40 text-purple-600 dark:text-purple-400 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-[9px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest">PHONE</div>
                  <span className="text-xs sm:text-sm font-semibold text-neutral-850 dark:text-[#E5E5E5]">
                    +94 76 939 5758
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-7">
            <div className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 rounded-none p-6 sm:p-8 shadow-sm hover:border-purple-300 dark:hover:border-purple-900/40 transition-all">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[10px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-[#27272A] bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" className="block text-[10px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-[#27272A] bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-[10px] font-mono font-bold text-neutral-400 dark:text-[#71717A] uppercase tracking-widest mb-2">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What would you like to build or discuss?"
                    className="w-full px-4 py-3 rounded-none border border-neutral-200 dark:border-[#27272A] bg-neutral-50 dark:bg-black text-neutral-800 dark:text-white text-xs sm:text-sm focus:outline-none focus:border-purple-600 dark:focus:border-purple-400 transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    id="contact-submit-btn"
                    disabled={status === 'loading' || status === 'success'}
                    className={`w-full py-3.5 rounded-none text-xs font-mono font-bold uppercase tracking-widest flex items-center justify-center gap-2 cursor-pointer transition-all border border-purple-600 dark:border-purple-500 ${
                      status === 'success'
                        ? 'bg-purple-800 dark:bg-purple-600 text-white dark:text-white'
                        : 'bg-purple-600 dark:bg-purple-500 hover:bg-purple-700 dark:hover:bg-purple-600 text-white dark:text-white shadow-sm'
                    }`}
                  >
                    {status === 'loading' && (
                      <>
                        <Loader2 className="w-3.5 h-3.5 animate-spin" />
                        Sending message...
                      </>
                    )}
                    {status === 'success' && (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        Message Sent! Thank you.
                      </>
                    )}
                    {status === 'idle' && (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Send Message
                      </>
                    )}
                    {status === 'error' && (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Error! Try again.
                      </>
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Find me Elsewhere Bento-grid */}
        <div className="pt-16 border-t border-neutral-200 dark:border-[#1F1F22]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-12">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-purple-600 dark:text-purple-400 font-mono font-medium block mb-2">
                Social Index
              </span>
              <h3 className="text-2xl sm:text-3xl font-serif italic font-light text-neutral-900 dark:text-white">
                Find me elsewhere
              </h3>
            </div>
            <p className="text-neutral-500 dark:text-[#A1A1AA] text-sm max-w-md font-light">
              Profiles, code repositories, blogs, and learning boards — pick your favorite network.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            {elseWhereProfiles.map((profile, idx) => (
              <a
                key={profile.title}
                id={`elsewhere-link-${idx}`}
                href={profile.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-neutral-50 dark:bg-[#121214] border border-neutral-200 dark:border-zinc-800/80 p-5 rounded-none flex flex-col justify-between transition-all hover:border-purple-300 dark:hover:border-purple-900/60 hover:bg-neutral-100/30 dark:hover:bg-[#161619] group"
              >
                <div>
                  <div className="text-[10px] font-mono font-bold text-neutral-400 dark:text-[#71717A]">
                    {profile.prefix}
                  </div>
                  <h4 className="font-sans text-sm font-bold text-neutral-900 dark:text-white mt-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {profile.title}
                  </h4>
                </div>
                <p className="text-neutral-500 dark:text-[#A1A1AA] text-[9px] sm:text-[10px] font-mono mt-4 truncate">
                  {profile.handle}
                </p>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
