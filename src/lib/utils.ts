// Fichier : lib/utils.ts
// Utilitaires pour le projet - cn() pour les classes Tailwind

import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
