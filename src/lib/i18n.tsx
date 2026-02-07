// Fichier : lib/i18n.tsx
// Contexte d'internationalisation FR/EN

"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

type Locale = "fr" | "en";

interface Translations {
  // Header
  services: string;
  projects: string;
  about: string;
  contact: string;
  bookCall: string;
  navServices: string;
  navProjects: string;
  navAbout: string;
  navContact: string;
  
  // Hero
  heroTitle: string;
  heroSubtitle: string;
  availableBadge: string;
  stat1: string;
  stat2: string;
  stat3: string;
  viewServices: string;
  planCall: string;
  
  // Services
  servicesTitle: string;
  servicesSubtitle: string;
  
  // Projects
  projectsTitle: string;
  projectsSubtitle: string;
  viewAllProjects: string;
  
  // About
  aboutTitle: string;
  aboutSubtitle: string;
  downloadCV: string;
  stackTools: string;
  yearsExp: string;
  projectsDelivered: string;
  clientsSatisfied: string;
  
  // Values
  valuesTitle: string;
  value1Title: string;
  value1Desc: string;
  value2Title: string;
  value2Desc: string;
  value3Title: string;
  value3Desc: string;
  value4Title: string;
  value4Desc: string;
  
  // Testimonials
  testimonialsTitle: string;
  testimonialsSubtitle: string;
  
  // Contact
  contactTitle: string;
  contactSubtitle: string;
  nextSlot: string;
  nextSlotAvailable: string;
  letsWork: string;
  together: string;
  sendMessage: string;
  sendMeMessage: string;
  preferCall: string;
  callDesc: string;
  bookSlotDescription: string;
  bookCallBtn: string;
  directEmail: string;
  directEmailDescription: string;
  emailDesc: string;
  avgResponse: string;
  avgResponseTime: string;
  responseTimeValue: string;
  
  // Form
  yourName: string;
  yourEmail: string;
  projectType: string;
  yourBudget: string;
  budgetPlaceholder: string;
  messageLabel: string;
  messagePlaceholder: string;
  sendRequest: string;
  sending: string;
  successMessage: string;
  errorMessage: string;
  
  // Project types
  projectMvp: string;
  projectRefonte: string;
  projectFeatures: string;
  projectMaintenance: string;
  projectOther: string;
  
  // Footer
  footerDesc: string;
  footerDescription: string;
  navigation: string;
  footerNavigation: string;
  stayConnected: string;
  location: string;
  remoteWorldwide: string;
  availableRemote: string;
  allRights: string;
  allRightsReserved: string;
  builtWith: string;
  
  // Common
  backToProjects: string;
  problem: string;
  solution: string;
  results: string;
  techUsed: string;
  similarProject: string;
  contactMe: string;
  readyToWork: string;
  readyToWorkDesc: string;
}

const translations: Record<Locale, Translations> = {
  fr: {
    // Header
    services: "Services",
    projects: "Projets",
    about: "À propos",
    contact: "Contact",
    bookCall: "Book a Call",
    navServices: "Services",
    navProjects: "Projets",
    navAbout: "À propos",
    navContact: "Contact",
    
    // Hero
    heroTitle: "Developer",
    heroSubtitle: "Je construis des applications web & mobile rapides, scalables et orientées conversion pour startups et PME — remote depuis Libreville.",
    availableBadge: "Disponible pour 1-2 nouveaux projets",
    stat1: "5+ ans d'expérience",
    stat2: "15+ projets livrés",
    stat3: "Clients Europe, Afrique, US",
    viewServices: "Voir mes services",
    planCall: "Planifions un call",
    
    // Services
    servicesTitle: "Services",
    servicesSubtitle: "Des solutions techniques adaptées à vos enjeux business. Du MVP à la maintenance, je vous accompagne à chaque étape.",
    
    // Projects
    projectsTitle: "Projets Récents",
    projectsSubtitle: "Des résultats concrets pour mes clients. Chaque projet est une success story avec des métriques mesurables.",
    viewAllProjects: "Voir tous les projets",
    
    // About
    aboutTitle: "À propos de moi",
    aboutSubtitle: "Développeur passionné par la création de produits digitaux qui ont un réel impact.",
    downloadCV: "Télécharger mon CV",
    stackTools: "Stack & Outils",
    yearsExp: "Années d'expérience",
    projectsDelivered: "Projets livrés",
    clientsSatisfied: "Clients satisfaits",
    
    // Values
    valuesTitle: "Mes valeurs de travail",
    value1Title: "Communication claire",
    value1Desc: "Updates réguliers, documentation complète, aucune surprise.",
    value2Title: "Délais respectés",
    value2Desc: "Je m'engage sur des deadlines réalistes et je les tiens.",
    value3Title: "Code maintenable",
    value3Desc: "Architecture propre, tests, documentation. Votre équipe pourra reprendre facilement.",
    value4Title: "Partenaire, pas prestataire",
    value4Desc: "Je m'investis dans votre succès et propose des améliorations proactives.",
    
    // Testimonials
    testimonialsTitle: "Ce que disent mes clients",
    testimonialsSubtitle: "La satisfaction client est ma priorité. Voici quelques retours de personnes avec qui j'ai eu le plaisir de collaborer.",
    
    // Contact
    contactTitle: "Travaillons Ensemble",
    contactSubtitle: "Vous avez un projet en tête ? Discutons-en ! Je réponds à tous les messages sous 24-48h.",
    nextSlot: "Prochain slot disponible : Mars 2026",
    nextSlotAvailable: "Prochain slot disponible : Mars 2026",
    letsWork: "Travaillons",
    together: "Ensemble",
    sendMessage: "Envoyez-moi un message",
    sendMeMessage: "Envoyez-moi un message",
    preferCall: "Préférez un call ?",
    callDesc: "Réservez directement un créneau de 30 minutes pour discuter de votre projet.",
    bookSlotDescription: "Réservez directement un créneau de 30 minutes pour discuter de votre projet.",
    bookCallBtn: "Réserver un call",
    directEmail: "Email direct",
    directEmailDescription: "Pour les demandes rapides ou les questions simples.",
    emailDesc: "Pour les demandes rapides ou les questions simples.",
    avgResponse: "Temps de réponse moyen : 12 heures",
    avgResponseTime: "Temps de réponse moyen",
    responseTimeValue: "12 heures",
    
    // Form
    yourName: "Votre nom",
    yourEmail: "Votre email",
    projectType: "Type de projet",
    yourBudget: "Votre budget",
    budgetPlaceholder: "Ex: 5000€, 10-15k€, à définir...",
    messageLabel: "Message",
    messagePlaceholder: "Décrivez votre projet, vos besoins, vos délais...",
    sendRequest: "Envoyer ma demande",
    sending: "Envoi en cours...",
    successMessage: "Message envoyé ! Je vous réponds sous 24-48h.",
    errorMessage: "Une erreur est survenue. Veuillez réessayer ou me contacter directement.",
    
    // Project types
    projectMvp: "MVP / Produit from scratch",
    projectRefonte: "Refonte & Optimisation",
    projectFeatures: "Features & Intégrations",
    projectMaintenance: "Maintenance & Support",
    projectOther: "Autre",
    
    // Footer
    footerDesc: "Freelance Full-Stack Developer basé à Libreville. Je construis des produits web & mobile performants pour startups et PME.",
    footerDescription: "Freelance Full-Stack Developer basé à Libreville. Je construis des produits web & mobile performants pour startups et PME.",
    navigation: "Navigation",
    footerNavigation: "Navigation",
    stayConnected: "Restons connectés",
    location: "Libreville, Gabon",
    remoteWorldwide: "Disponible remote worldwide",
    availableRemote: "Disponible remote worldwide",
    allRights: "Tous droits réservés.",
    allRightsReserved: "Tous droits réservés.",
    builtWith: "Construit avec Next.js, Tailwind CSS & ❤️",
    
    // Common
    backToProjects: "Retour aux projets",
    problem: "Le Problème",
    solution: "La Solution",
    results: "Résultats",
    techUsed: "Technologies utilisées",
    similarProject: "Un projet similaire ?",
    contactMe: "Me contacter",
    readyToWork: "Prêt à travailler ensemble ?",
    readyToWorkDesc: "Je suis actuellement disponible pour 1-2 nouveaux projets. Discutons de vos besoins et voyons comment je peux vous aider.",
  },
  en: {
    // Header
    services: "Services",
    projects: "Projects",
    about: "About",
    contact: "Contact",
    bookCall: "Book a Call",
    navServices: "Services",
    navProjects: "Projects",
    navAbout: "About",
    navContact: "Contact",
    
    // Hero
    heroTitle: "Developer",
    heroSubtitle: "I build fast, scalable, and conversion-oriented web & mobile applications for startups and SMBs — remote from Libreville.",
    availableBadge: "Available for 1-2 new projects",
    stat1: "5+ years of experience",
    stat2: "15+ projects delivered",
    stat3: "Clients in Europe, Africa, US",
    viewServices: "View my services",
    planCall: "Let's schedule a call",
    
    // Services
    servicesTitle: "Services",
    servicesSubtitle: "Technical solutions tailored to your business challenges. From MVP to maintenance, I support you every step of the way.",
    
    // Projects
    projectsTitle: "Recent Projects",
    projectsSubtitle: "Concrete results for my clients. Each project is a success story with measurable metrics.",
    viewAllProjects: "View all projects",
    
    // About
    aboutTitle: "About me",
    aboutSubtitle: "Developer passionate about creating digital products that have a real impact.",
    downloadCV: "Download my CV",
    stackTools: "Stack & Tools",
    yearsExp: "Years of experience",
    projectsDelivered: "Projects delivered",
    clientsSatisfied: "Satisfied clients",
    
    // Values
    valuesTitle: "My work values",
    value1Title: "Clear communication",
    value1Desc: "Regular updates, complete documentation, no surprises.",
    value2Title: "Deadlines met",
    value2Desc: "I commit to realistic deadlines and I keep them.",
    value3Title: "Maintainable code",
    value3Desc: "Clean architecture, tests, documentation. Your team can easily take over.",
    value4Title: "Partner, not provider",
    value4Desc: "I invest in your success and proactively suggest improvements.",
    
    // Testimonials
    testimonialsTitle: "What my clients say",
    testimonialsSubtitle: "Client satisfaction is my priority. Here are some feedbacks from people I've had the pleasure to work with.",
    
    // Contact
    contactTitle: "Let's Work Together",
    contactSubtitle: "Have a project in mind? Let's discuss it! I respond to all messages within 24-48h.",
    nextSlot: "Next available slot: March 2026",
    nextSlotAvailable: "Next available slot: March 2026",
    letsWork: "Let's Work",
    together: "Together",
    sendMessage: "Send me a message",
    sendMeMessage: "Send me a message",
    preferCall: "Prefer a call?",
    callDesc: "Book a 30-minute slot directly to discuss your project.",
    bookSlotDescription: "Book a 30-minute slot directly to discuss your project.",
    bookCallBtn: "Book a call",
    directEmail: "Direct email",
    directEmailDescription: "For quick requests or simple questions.",
    emailDesc: "For quick requests or simple questions.",
    avgResponse: "Average response time: 12 hours",
    avgResponseTime: "Average response time",
    responseTimeValue: "12 hours",
    
    // Form
    yourName: "Your name",
    yourEmail: "Your email",
    projectType: "Project type",
    yourBudget: "Your budget",
    budgetPlaceholder: "E.g: $5000, $10-15k, to be defined...",
    messageLabel: "Message",
    messagePlaceholder: "Describe your project, needs, timeline...",
    sendRequest: "Send my request",
    sending: "Sending...",
    successMessage: "Message sent! I'll respond within 24-48h.",
    errorMessage: "An error occurred. Please try again or contact me directly.",
    
    // Project types
    projectMvp: "MVP / Product from scratch",
    projectRefonte: "Redesign & Optimization",
    projectFeatures: "Features & Integrations",
    projectMaintenance: "Maintenance & Support",
    projectOther: "Other",
    
    // Footer
    footerDesc: "Freelance Full-Stack Developer based in Libreville. I build high-performance web & mobile products for startups and SMBs.",
    footerDescription: "Freelance Full-Stack Developer based in Libreville. I build high-performance web & mobile products for startups and SMBs.",
    navigation: "Navigation",
    footerNavigation: "Navigation",
    stayConnected: "Stay connected",
    location: "Libreville, Gabon",
    remoteWorldwide: "Available remote worldwide",
    availableRemote: "Available remote worldwide",
    allRights: "All rights reserved.",
    allRightsReserved: "All rights reserved.",
    builtWith: "Built with Next.js, Tailwind CSS & ❤️",
    
    // Common
    backToProjects: "Back to projects",
    problem: "The Problem",
    solution: "The Solution",
    results: "Results",
    techUsed: "Technologies used",
    similarProject: "Similar project?",
    contactMe: "Contact me",
    readyToWork: "Ready to work together?",
    readyToWorkDesc: "I'm currently available for 1-2 new projects. Let's discuss your needs and see how I can help.",
  },
};

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Translations;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("fr");

  useEffect(() => {
    const saved = localStorage.getItem("locale") as Locale;
    if (saved && (saved === "fr" || saved === "en")) {
      setLocale(saved);
    }
  }, []);

  const handleSetLocale = (newLocale: Locale) => {
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
  };

  return (
    <I18nContext.Provider
      value={{
        locale,
        setLocale: handleSetLocale,
        t: translations[locale],
      }}
    >
      {children}
    </I18nContext.Provider>
  );
}

export function useI18n() {
  const context = useContext(I18nContext);
  if (!context) {
    throw new Error("useI18n must be used within an I18nProvider");
  }
  return context;
}
