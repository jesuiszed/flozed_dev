// Fichier : components/Footer.tsx
// Footer avec liens et copyright

"use client";

import Link from "next/link";
import { Github, Linkedin, Twitter, Mail, MapPin } from "lucide-react";
import { useI18n } from "@/lib/i18n";

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/flozed",
    icon: Github,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/flozed",
    icon: Linkedin,
  },
  {
    name: "Twitter",
    href: "https://twitter.com/flozed",
    icon: Twitter,
  },
  {
    name: "Email",
    href: "mailto:hello@flozed.dev",
    icon: Mail,
  },
];

export function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();
  
  const footerLinks = [
    { href: "#services", label: t.navServices },
    { href: "#projects", label: t.navProjects },
    { href: "#about", label: t.navAbout },
    { href: "#contact", label: t.navContact },
  ];

  return (
    <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl font-bold">
              <span className="text-cyan-400">flozed</span>
              <span className="text-zinc-400">.dev</span>
            </Link>
            <p className="text-zinc-600 dark:text-zinc-400 text-sm max-w-xs">
              {t.footerDescription}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4">{t.footerNavigation}</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-zinc-900 dark:text-white font-semibold mb-4">{t.stayConnected}</h4>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 transition-colors"
                  aria-label={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
            <p className="text-zinc-500 text-sm mt-4 flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Libreville, Gabon (WAT)
            </p>
            <p className="text-zinc-500 text-sm">
              {t.availableRemote}
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {currentYear} Florian Zed. {t.allRightsReserved}
          </p>
          <p className="text-zinc-600 text-xs">
            {t.builtWith}
          </p>
        </div>
      </div>
    </footer>
  );
}
