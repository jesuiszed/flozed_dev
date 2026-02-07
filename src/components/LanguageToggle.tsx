// Fichier : components/LanguageToggle.tsx
// Toggle FR/EN pour l'internationalisation

"use client";

import { useI18n } from "@/lib/i18n";
import { Languages } from "lucide-react";

export function LanguageToggle() {
  const { locale, setLocale } = useI18n();

  return (
    <button
      onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
      className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors text-sm font-medium"
      aria-label="Toggle language"
    >
      <Languages className="w-4 h-4" />
      <span className="uppercase">{locale}</span>
    </button>
  );
}
