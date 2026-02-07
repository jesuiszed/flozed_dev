# PROMPT PRINCIPAL – Génération Portfolio Freelance Professionnel
# Site cible : https://flozed_dev.tech
# Auteur : Florian Zed (Libreville, Gabon – Remote WAT)
# Date : Février 2026
# Objectif : Transformer le style esthétique/minimaliste/personnel de https://flozed.me 
#           en un portfolio FREELANCE orienté clients (startups, PME, agences).
#           Focus : Conversion rapide → leads qualifiés (calls Calendly, devis)

## RÈGLES GLOBALES (à respecter absolument dans tous les fichiers)
- Stack : Next.js 15+ (App Router) + TypeScript strict
- Styling : Tailwind CSS 4 + shadcn/ui (Button, Card, Form, Badge, etc.)
- Animations : Framer Motion (priorité) – transitions subtiles, pas d'effets lourds
- Smooth scroll : Lenis ou native scroll-behavior: smooth
- Thème : Dark mode par défaut + toggle light/dark (next-themes)
- Mobile first – responsive parfait (test iPhone/Android)
- Performances : next/image optimisé, <2s LCP, Lighthouse > 92-95
- SEO : metadata dynamiques, title/description avec mots-clés ("freelance fullstack", "next.js freelance", "développeur remote Gabon/Afrique")
- Accessibilité : aria-labels, focus visible, prefers-reduced-motion
- Ton du texte : Professionnel, confiant, orienté bénéfices client (résultats business, fiabilité, délais)
  → Éviter le ton "passionné créatif" de flozed.me → privilégier "je livre des résultats mesurables"

## IDENTITÉ VISUELLE – Inspirée mais professionnalisée vs flozed.me
- Palette : Fond dark (#0f0f0f / #111) + accents néon subtils (cyan #06b6d4, purple #a855f7, vert confiance #10b981)
- Typo principale : Geist Sans ou Inter (corps), Geist Mono / JetBrains Mono (code)
- Espacements : Très aérés, sections bien séparées
- Animations : Fade-in au scroll, hover légers sur cards, curseur custom optionnel
- Header : Sticky, logo à gauche, menu centré/droite + CTA "Book a Call" visible

## STRUCTURE DU SITE (pages & sections prioritaires)
Homepage (/) – One-page scroll avec ces sections dans l'ordre :
1. Header sticky
2. Hero (accroche 5 secondes)
3. Services / Offres (section ★ la plus importante ★)
4. Projets / Case Studies (grille + lien vers pages détail [slug])
5. À propos (court – humain & crédible)
6. Stack & Outils (badges groupés)
7. Témoignages (quotes clients)
8. Contact / Let's Work Together (form + Calendly + dispo)
9. Footer (liens, copyright)

Autres pages :
- /about
- /services (optionnel si one-page)
- /projects
- /projects/[slug] (case study détaillé)
- /contact

## CONTENU OBLIGATOIRE – À RESPECTER / ADAPTER

### Hero
Titre : "Freelance Full-Stack Developer"
Sous-titre : "Je construis des applications web & mobile rapides, scalables et orientées conversion pour startups et PME – remote depuis Libreville (WAT)"
Badges / mini-stats : "5+ ans d’expérience" • "15+ projets livrés" • "Clients en Europe, Afrique, US" • "Disponible pour 1–2 nouveaux projets"
CTA principaux : 
- Primaire : "Voir mes services" (scroll vers #services)
- Secondaire : "Planifions un call" → lien Calendly

### Services (cartes 3–5)
Exemples à implémenter :
1. MVP / Produit from scratch
   - Bénéfices : Lancement rapide, stack moderne, focus utilisateur
   - Techs : Next.js, React Native, Supabase / Firebase, Stripe
   - Délai : 8–14 semaines
   - Budget : 9 000 – 18 000 €
2. Refonte & Performances / SEO
   - Gains : -50% temps chargement, +30% conversion
   - Budget : 4 000 – 9 000 €
3. Features & Intégrations sur mesure (AI, paiements, dashboards)
   - Tarif : 65–90 €/h ou forfait
4. Maintenance & Support mensuel
   - 800–2 500 €/mois

Chaque carte : icône, titre, 3–4 bullets bénéfices, tech badges, fourchette prix, bouton "Demander devis"

### Projets
Format case study light sur home + page dédiée :
- Problème client
- Solution technique
- Résultats chiffrés (+40% vitesse, -60% bounce, X utilisateurs, etc.)
- Tech stack
- Mockups / vidéos / images
4–7 projets max (même anciens → reformulés business)

### À propos
Bio courte (4–6 lignes) : expertise, remote WAT, valeurs (transparence, communication claire, code maintenable)
Photo/avatar stylé + lien CV.pdf

### Témoignages
3–6 quotes (LinkedIn, email, anonymes au début) avec nom / entreprise / rôle

### Contact
- Formulaire : nom, email, type projet, budget indicatif, message (React Hook Form + zod + Resend/EmailJS)
- Embed Calendly ou lien direct
- Réseaux : LinkedIn, GitHub, X/Twitter, email pro
- Texte dispo : "Actuellement ouvert à 1–2 nouveaux projets – prochain slot disponible mars 2026"

## CHECKLIST LANCEMENT
- Tous CTA fonctionnels
- Formulaire teste & envoi email ok
- Dark/light toggle
- Mobile parfait
- Metadata SEO (title: "Florian Zed – Freelance Full-Stack Developer | Next.js & React")
- Analytics minimal (Plausible ou Simple Analytics)

Quand tu génères un fichier, commence toujours par un commentaire :
// Fichier : app/page.tsx
// Suivant prompt.md – implémentation section Hero + Services etc.

Maintenant, génère les fichiers un par un en respectant strictement ces instructions.
Commence par app/layout.tsx si besoin, puis app/page.tsx.