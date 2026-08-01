/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Project {
  id: string;
  title: string;
  description: string;
  category: 'Machine Learning' | 'NLP' | 'Computer Vision' | 'Data Analytics';
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  readMoreUrl?: string;
  details?: string[];
  metrics?: { label: string; value: string }[];
}

export interface SkillItem {
  name: string;
  level: number; // 0 to 100
  label: 'Advanced' | 'Intermediate' | 'Beginner';
}

export interface SkillCategory {
  title: string;
  icon: string; // lucide icon name
  skills: SkillItem[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  organization: string;
  description: string;
  details?: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  logoUrl?: string;
  link?: string;
}

export interface ContactMessage {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}
