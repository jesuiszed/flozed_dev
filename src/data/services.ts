// Fichier : data/services.ts
// Données des services freelance - Suivant prompt.md

import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: "mvp",
    title: "MVP / Produit from scratch",
    description:
      "Transformez votre idée en produit fonctionnel. Je conçois et développe votre application web ou mobile de A à Z, avec une stack moderne et scalable.",
    icon: "Rocket",
    benefits: [
      "Lancement rapide en 8-14 semaines",
      "Stack moderne et maintenable",
      "Architecture scalable dès le départ",
      "Focus utilisateur et conversion",
    ],
    technologies: ["Next.js", "React Native", "Supabase", "Firebase", "Stripe", "TypeScript"],
    priceRange: "",
    timeline: "8-14 semaines",
    ctaText: "Discutons de votre projet",
  },
  {
    id: "refonte",
    title: "Refonte & Optimisation",
    description:
      "Votre site est lent ou mal référencé ? Je le transforme en machine de performance. Gains mesurables en vitesse, SEO et conversions.",
    icon: "Zap",
    benefits: [
      "Jusqu'à -50% temps de chargement",
      "+30% de conversions en moyenne",
      "SEO technique optimisé",
      "Core Web Vitals au vert",
    ],
    technologies: ["Next.js", "Performance Audit", "SEO", "Lighthouse", "Analytics"],
    priceRange: "",
    timeline: "4-8 semaines",
    ctaText: "Auditer mon site",
  },
  {
    id: "features",
    title: "Features & Intégrations",
    description:
      "Besoin d'une fonctionnalité spécifique ? Intégration AI, paiements, dashboards, APIs tierces... Je développe exactement ce qu'il vous faut.",
    icon: "Puzzle",
    benefits: [
      "Intégrations sur mesure",
      "APIs REST & GraphQL",
      "Dashboards analytics",
      "Fonctionnalités AI",
    ],
    technologies: ["OpenAI", "Stripe", "Twilio", "Resend", "Webhooks", "APIs"],
    priceRange: "",
    timeline: "Sur devis",
    ctaText: "Décrire mon besoin",
  },
  {
    id: "automation",
    title: "Automatisation & Workflows",
    description:
      "Gagnez du temps et réduisez les erreurs. J'automatise vos processus métier avec des solutions no-code/low-code et des intégrations sur mesure.",
    icon: "Bot",
    benefits: [
      "Automatisation de tâches répétitives",
      "Intégrations entre vos outils",
      "Workflows intelligents",
      "Réduction des erreurs humaines",
    ],
    technologies: ["Make", "Zapier", "n8n", "Airtable", "Notion API", "Custom Scripts"],
    priceRange: "",
    timeline: "1-4 semaines",
    ctaText: "Automatiser mes process",
  },
  {
    id: "maintenance",
    title: "Maintenance & Support",
    description:
      "Gardez votre produit en pleine forme. Mises à jour, corrections de bugs, monitoring, améliorations continues. Tranquillité d'esprit garantie.",
    icon: "Shield",
    benefits: [
      "Réponse sous 24-48h",
      "Mises à jour de sécurité",
      "Monitoring proactif",
      "Évolutions mensuelles incluses",
    ],
    technologies: ["Sentry", "Vercel", "GitHub Actions", "Monitoring", "CI/CD"],
    priceRange: "",
    timeline: "Engagement 3 mois min.",
    ctaText: "Voir les formules",
  },
];
