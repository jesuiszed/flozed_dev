// Fichier : components/ThemeProvider.tsx
// Provider pour next-themes (dark/light mode) et i18n

"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ReactNode } from "react";
import { I18nProvider } from "@/lib/i18n";

interface ThemeProviderProps {
  children: ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <I18nProvider>{children}</I18nProvider>
    </NextThemesProvider>
  );
}
