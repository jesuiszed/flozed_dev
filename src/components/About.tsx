// Fichier : components/About.tsx
// Section À propos avec bio et stack

"use client";

import { motion } from "framer-motion";
import { MapPin, Download, Globe, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/lib/i18n";

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
  Backend: ["Node.js", "Python", "PostgreSQL", "Supabase", "Firebase"],
  Mobile: ["React Native", "Expo"],
  DevOps: ["Vercel", "AWS", "Docker", "GitHub Actions", "Sentry"],
};

export function About() {
  const { t } = useI18n();
  
  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white">
              {t.aboutTitle.split(" ").slice(0, -1).join(" ")}{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                {t.aboutTitle.split(" ").slice(-1)}
              </span>
            </h2>

            {/* Avatar placeholder with icon */}
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center">
              <User className="w-12 h-12 text-white" />
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-zinc-300 leading-relaxed">
              <p>
                Je suis <strong className="text-zinc-900 dark:text-white">Florian Zed</strong>, développeur Full-Stack 
                freelance avec plus de 5 ans d&apos;expérience dans la création d&apos;applications 
                web et mobile performantes.
              </p>
              <p>
                Basé à <strong className="text-zinc-900 dark:text-white">Libreville, Gabon</strong>, je travaille en 
                remote avec des clients du monde entier — Europe, Afrique et États-Unis. 
                Mon fuseau horaire (WAT/UTC+1) me permet une bonne réactivité avec la plupart des équipes.
              </p>
              <p>
                Ma mission : transformer vos idées en produits digitaux qui 
                <strong className="text-cyan-500"> génèrent des résultats mesurables</strong>. 
                Code propre, communication claire, délais respectés.
              </p>
            </div>

            {/* Location & availability */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                <MapPin className="w-4 h-4 text-cyan-500" />
                Libreville, Gabon
              </div>
              <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
                <Globe className="w-4 h-4 text-cyan-500" />
                Remote Worldwide
              </div>
            </div>

            {/* Download CV */}
            <Button variant="outline" asChild>
              <a href="/cv-florian-zed.pdf" download>
                <Download className="w-4 h-4" />
                {t.downloadCV}
              </a>
            </Button>
          </motion.div>

          {/* Right - Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{t.stackTools}</h3>
            
            <div className="space-y-6">
              {Object.entries(techStack).map(([category, techs]) => (
                <div key={category}>
                  <p className="text-sm text-zinc-500 mb-3 uppercase tracking-wider">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="px-3 py-1.5 text-sm hover:bg-cyan-500/20 hover:text-cyan-500 transition-colors cursor-default"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
