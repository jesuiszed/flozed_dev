// Fichier : data/projects.ts
// Données des projets / case studies - Suivant prompt.md

import { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "zedfolio-portfolio",
    title: "Zedfolio Portfolio",
    description:
      "Portfolio personnel développé avec React et TailwindCSS, présentant mes projets et compétences avec une interface moderne et responsive.",
    technologies: ["React", "TailwindCSS"],
    image: "/projects/zedfolio.jpg",
    githubUrl: "https://github.com/jesuiszed/zedfolio",
    liveUrl: "https://flozed.me",
    date: "2025-08",
    featured: true,
  },
  {
    slug: "twofa",
    title: "TwoFA",
    description:
      "Système d'authentification à double facteur (2FA) développé en C# avec .NET, offrant une couche de sécurité supplémentaire pour les applications web.",
    technologies: ["C#", ".NET"],
    image: "/projects/twofa.jpg",
    githubUrl: "https://github.com/jesuiszed/2faDotnet",
    date: "2025-03",
    featured: true,
  },
  {
    slug: "gstock-api",
    title: "GStock API",
    description:
      "API de gestion de stock développée en C# avec .NET, permettant la gestion complète des articles et des mouvements de stock.",
    technologies: ["C#", ".NET"],
    image: "/projects/gstock.jpg",
    githubUrl: "https://github.com/jesuiszed/gstockApi",
    date: "2025-01",
    featured: true,
  },
  {
    slug: "voyager",
    title: "Voyager",
    client: "Freelance",
    sector: "Travel / Tourism",
    description:
      "Site vitrine d'une agence de voyage développé avec Python et Django, présentant des destinations et offres de voyage avec un design élégant en TailwindCSS.",
    technologies: ["Python", "Django", "TailwindCSS"],
    image: "/projects/voyager.jpg",
    githubUrl: "https://github.com/jesuiszed/voyage",
    date: "2024-11",
    featured: true,
  },
  {
    slug: "gestvoyage",
    title: "gestVoyage",
    client: "Freelance",
    sector: "Travel / Tourism",
    description:
      "Application de gestion de voyages développée avec Python et Django, facilitant l'organisation et le suivi des voyages avec une interface utilisateur intuitive.",
    technologies: ["Python", "Django", "TailwindCSS"],
    image: "/projects/gestvoyage.jpg",
    githubUrl: "https://github.com/jesuiszed/GestionVoyage",
    date: "2024-11",
    featured: false,
  },
  {
    slug: "kouty-medical-service",
    title: "Kouty Medical Service",
    client: "Freelance",
    sector: "Healthcare",
    description:
      "Plateforme de services médicaux développée avec Python, Django et Bootstrap, offrant une solution complète pour la gestion des rendez-vous et dossiers médicaux.",
    technologies: ["Python", "Django", "Bootstrap"],
    image: "/projects/kouty.jpg",
    githubUrl: "https://github.com/jesuiszed/koutyrepo",
    liveUrl: "https://kouty.com",
    date: "2024-11",
    featured: true,
  },
  {
    slug: "ppm-playpark-manager",
    title: "PPM (PlayPark Manager)",
    description:
      "Système de gestion pour parcs de loisirs, développé avec Python et Django, permettant d'optimiser les opérations et l'expérience client.",
    technologies: ["Python", "Django"],
    image: "/projects/ppm.jpg",
    githubUrl: "https://github.com/jesuiszed/ppm",
    date: "2024-05",
    featured: false,
  },
  {
    slug: "budget-visualiser",
    title: "Budget Visualiser",
    description:
      "Application de visualisation budgétaire développée en Java avec Spring Boot, permettant une gestion claire et interactive des finances personnelles.",
    technologies: ["Java", "Spring Boot"],
    image: "/projects/budget-visualiser.jpg",
    githubUrl: "https://github.com/jesuiszed/myBAV",
    date: "2025-07",
    featured: false,
  },
  {
    slug: "watchapp",
    title: "WatchApp",
    description:
      "Application mobile pour amateurs de montres, développée avec Java et Kotlin, offrant un catalogue, des critiques et des recommandations.",
    technologies: ["Java", "Kotlin"],
    image: "/projects/watchapp.jpg",
    githubUrl: "https://github.com/jesuiszed/spring-boot-wearWatch",
    date: "2024-04",
    featured: false,
  },
  {
    slug: "vod-service",
    title: "VOD Service",
    description:
      "Service backend pour plateforme de vidéo à la demande, développé en Java avec Spring Boot, gérant le streaming, les utilisateurs et les abonnements.",
    technologies: ["Java", "Spring Boot"],
    image: "/projects/vod-service.jpg",
    githubUrl: "https://github.com/jesuiszed/myvod",
    date: "2025-07",
    featured: false,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
