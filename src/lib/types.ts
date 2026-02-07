// Fichier : lib/types.ts
// Définition des types TypeScript pour le portfolio

export interface Project {
  slug: string;
  title: string;
  client?: string;
  sector: string;
  description: string;
  problem: string;
  solution: string;
  results: string[];
  technologies: string[];
  image: string;
  mockups?: string[];
  liveUrl?: string;
  githubUrl?: string;
  date: string;
  featured?: boolean;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  technologies: string[];
  priceRange: string;
  timeline: string;
  ctaText: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}
