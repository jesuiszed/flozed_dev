// Fichier : app/contact/page.tsx
// Page Contact dédiée - Suivant prompt.md

import { Metadata } from "next";
import { Calendar, Mail, MapPin, Clock, MessageCircle, Github, Linkedin, Twitter } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | Florian Zed – Freelance Full-Stack Developer",
  description:
    "Contactez-moi pour discuter de votre projet. Formulaire, Calendly ou email direct — je réponds sous 24-48h.",
};

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/flozed",
    icon: Github,
    handle: "@flozed",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/flozed",
    icon: Linkedin,
    handle: "Florian Zed",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/flozed",
    icon: Twitter,
    handle: "@flozed",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-32 pb-20 lg:pb-32 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <Badge variant="success" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            Disponible pour 1-2 nouveaux projets
          </Badge>
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Travaillons{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Ensemble
            </span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Vous avez un projet en tête ? Discutons-en ! Je réponds à tous les
            messages sous 24-48h.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form */}
          <div className="lg:col-span-3">
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <h2 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    Envoyez-moi un message
                  </h2>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-2 space-y-6">
            {/* Calendly card */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    Préférez un call ?
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                  Réservez directement un créneau de 30 minutes pour discuter de
                  votre projet. C&apos;est gratuit et sans engagement.
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://calendly.com/flozed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4" />
                    Réserver un call
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Direct email */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Email direct</h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Pour les demandes rapides ou les questions simples.
                </p>
                <a
                  href="mailto:hello@flozed.dev"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  hello@flozed.dev
                </a>
              </CardContent>
            </Card>

            {/* Location */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <MapPin className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Localisation</h3>
                </div>
                <p className="text-zinc-700 dark:text-zinc-300 mb-2">Libreville, Gabon</p>
                <p className="text-zinc-500 dark:text-zinc-400 text-sm">
                  Fuseau horaire : WAT (UTC+1)
                  <br />
                  Disponible remote worldwide
                </p>
              </CardContent>
            </Card>

            {/* Social links */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  Réseaux sociaux
                </h3>
                <div className="space-y-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 transition-colors"
                    >
                      <link.icon className="w-5 h-5" />
                      <span className="text-sm">{link.handle}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Response time */}
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700/50">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                ⚡ <strong className="text-zinc-900 dark:text-white">Temps de réponse moyen :</strong>{" "}
                12 heures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
