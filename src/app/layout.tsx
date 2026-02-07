// Fichier : app/layout.tsx
// Root layout avec Header, Footer, ThemeProvider - Suivant prompt.md

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BackToTop } from "@/components/BackToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Florian Zed – Freelance Full-Stack Developer | Next.js & React",
  description:
    "Développeur Full-Stack freelance basé à Libreville. Je construis des applications web & mobile performantes pour startups et PME. Next.js, React, React Native, TypeScript.",
  keywords: [
    "freelance fullstack",
    "next.js freelance",
    "développeur remote",
    "développeur web Gabon",
    "développeur Afrique",
    "React developer",
    "TypeScript freelance",
  ],
  authors: [{ name: "Florian Zed" }],
  creator: "Florian Zed",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://flozed.dev",
    siteName: "Florian Zed - Freelance Developer",
    title: "Florian Zed – Freelance Full-Stack Developer",
    description:
      "Développeur Full-Stack freelance. Applications web & mobile performantes pour startups et PME.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Florian Zed - Freelance Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Florian Zed – Freelance Full-Stack Developer",
    description:
      "Développeur Full-Stack freelance. Applications web & mobile performantes.",
    creator: "@flozed",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 transition-colors`}
      >
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <BackToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}
