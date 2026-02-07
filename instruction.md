# INSTRUCTION PRINCIPALE POUR GITHUB COPILOT – Portfolio Freelance Florian Zed
# Objectif : Créer un portfolio moderne, professionnel et orienté conversion clients
# sur https://flozed_dev.tech
# Style global : Inspiré de flozed.me (esthétique minimaliste, animations fluides, dark mode élégant)
# mais beaucoup plus business-oriented, clair et orienté vente de services freelance.

## Règles générales pour TOUS les fichiers
- Projet Next.js 15 (App Router) + TypeScript
- Styling : Tailwind CSS + shadcn/ui components (préférer shadcn pour buttons, cards, forms, etc.)
- Animations : Framer Motion (priorité) + smooth scroll avec Lenis si besoin
- Dark mode obligatoire (via next-themes ou implémentation custom)
- Mobile first – responsive parfait
- Performances : images optimisées (next/image), pas d’animations bloquantes, respect prefers-reduced-motion
- SEO : metadata dynamiques dans layout.tsx / page.tsx, OpenGraph, schema.org Person + Offer
- Palette couleurs : Garder l’identité de flozed.me (dark background, accents colorés – ex: cyan/bleu/purple néon subtil) mais ajouter des tons pro (bleu profond #0ea5e9, gris #64748b, vert confiance #10b981)
- Typographie : Inter ou Geist pour texte, JetBrains Mono pour code/snippets
- Ton du texte : Professionnel, direct, confiant, orienté bénéfices client (pas trop "passionné de code")

## Structure du projet (à respecter)
app/
├── layout.tsx              ← Root layout avec Header + Footer + ThemeProvider
├── page.tsx                ← Page d'accueil (Hero + Services + Projets teaser + CTA)
├── about/
│   └── page.tsx
├── services/
│   └── page.tsx            ← Ou directement dans home si one-page
├── projects/
│   ├── page.tsx            ← Liste des projets
│   └── [slug]/
│       └── page.tsx        ← Page détail projet (case study)
├── contact/
│   └── page.tsx
components/
├── ui/                     ← shadcn components
├── Header.tsx
├── Footer.tsx
├── Hero.tsx
├── ServiceCard.tsx
├── ProjectCard.tsx
├── Testimonial.tsx
├── ContactForm.tsx
├── CalendlyEmbed.tsx       (ou simple lien)
lib/
├── utils.ts
├── types.ts                ← Définir types Project, Service, etc.
public/
└── data/
    ├── projects.ts         ← Tableau statique des projets (export const projects: Project[])
    └── services.ts         ← export const services: Service[]

## Sections obligatoires – Ordre sur la homepage (scroll fluide)
1. Header sticky (logo + nav + bouton "Book a call" / Calendly)
2. Hero
   - Titre principal : "Freelance Full-Stack Developer"
   - Sous-titre : "Je construis des produits web & mobile performants pour startups et PME – remote depuis Libreville"
   - Badges : "5+ ans d’expérience" "15+ projets livrés" "Disponible pour 1–2 nouveaux clients"
   - 2 CTA : "Voir mes services" et "Planifions un call" (Calendly)
3. Services (section la plus importante – 3 à 5 cartes)
   Exemples de services à implémenter :
   - MVP / Produit from scratch (9k–18k €, 8–14 sem)
   - Refonte & optimisation perf/SEO (4k–9k €)
   - Features sur mesure / Intégrations (T&M 65–85 €/h)
   - Maintenance mensuelle (800–2500 €/mois)
   Chaque carte : icône, titre, 3–4 bénéfices, techs badges, fourchette prix, bouton "Demander devis"
4. Projets (grille 1–3 colonnes)
   - 4 à 7 projets max
   - Chaque : mockup/image/vidéo, titre + client/secteur, problème → solution → résultat chiffré
   - Lien vers page détail [slug]
5. À propos (court)
   - Photo ou avatar stylé
   - Bio : 4–6 lignes orientées client (fiabilité, communication, remote WAT timezone)
   - Lien CV.pdf
6. Stack (badges groupés : Frontend, Backend, Mobile, DevOps…)
7. Témoignages (3–6 quotes avec nom/entreprise ou anonyme)
8. Contact final (formulaire + Calendly + réseaux + indicateur dispo : "Ouvert à X projets en ce moment")

## Données à créer dans data/
- projects.ts : tableau d'objets avec { slug, title, description, problem, solution, results, technologies: string[], image: string, liveUrl?, githubUrl?, date }
- services.ts : tableau { title, description, benefits: string[], technologies: string[], priceRange, timeline, ctaText }

## Fonctionnalités prioritaires
- Formulaire contact (React Hook Form + zod validation + envoi via Resend / EmailJS)
- Calendly lien ou embed
- Indicateur disponibilité (bandeau ou texte dynamique)
- Smooth scroll vers sections (via lenis ou scroll-behavior)
- Back to top button discret

## Checklist avant commit / déploiement
- Lighthouse score > 90 (perf, SEO, accessibilité)
- Mobile parfait (test sur iPhone/Android)
- Dark/light toggle stylé
- Tous liens fonctionnels
- Metadata corrects (title, description avec mots-clés : freelance fullstack, next.js freelance, développeur remote Afrique)

Quand tu crées un fichier, commence par :
// Fichier : app/page.tsx
// Suivre instruction.md – section Hero + Services + etc.

Maintenant, commence par créer les fichiers de base un par un.
Bonne génération !