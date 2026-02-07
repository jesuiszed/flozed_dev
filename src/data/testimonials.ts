// Fichier : data/testimonials.ts
// Témoignages clients - Suivant prompt.md

import { Testimonial } from "@/lib/types";

export const testimonials: Testimonial[] = [
  {
    id: "1",
    quote:
      "Florian a transformé notre idée en un produit fonctionnel en seulement 10 semaines. Sa communication est excellente et il a su anticiper nos besoins. Je recommande sans hésiter.",
    author: "Marc Dupont",
    role: "CEO",
    company: "TechStartup FR",
  },
  {
    id: "2",
    quote:
      "Notre site était une catastrophe niveau performance. Après la refonte par Florian, notre Lighthouse est passé de 34 à 98. Les leads ont suivi. Travail remarquable.",
    author: "Sophie Martin",
    role: "Directrice Marketing",
    company: "Consulting Group",
  },
  {
    id: "3",
    quote:
      "Professionnel, réactif et force de proposition. Florian a développé notre app mobile dans les temps et le budget. L'adoption par nos clients a été immédiate.",
    author: "Jean-Baptiste Ondo",
    role: "Fondateur",
    company: "RetailCo Gabon",
  },
  {
    id: "4",
    quote:
      "On cherchait un dev capable de comprendre nos enjeux business, pas juste de coder. Florian a dépassé nos attentes sur tous les plans.",
    author: "Claire Bemba",
    role: "Product Manager",
    company: "HotelTech",
  },
  {
    id: "5",
    quote:
      "L'intégration AI qu'il a développée nous fait gagner des heures chaque semaine. Code propre, bien documenté, facile à maintenir.",
    author: "Thomas Renard",
    role: "CTO",
    company: "MediaAgency",
  },
];
