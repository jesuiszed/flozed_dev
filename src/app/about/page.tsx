// Fichier : app/about/page.tsx
// Page À propos complète - Suivant prompt.md

import { Metadata } from "next";
import Link from "next/link";
import { MapPin, Download, Globe, Mail, Calendar, ArrowRight, MessageCircle, Clock, Wrench, Handshake, User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "À propos | Florian Zed – Freelance Full-Stack Developer",
  description:
    "Développeur Full-Stack freelance avec 5+ ans d'expérience. Basé à Libreville, je travaille en remote avec des clients du monde entier.",
};

const techStack = {
  Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Query"],
  Backend: ["Node.js", "Python", "PostgreSQL", "Supabase", "Firebase", "Prisma"],
  Mobile: ["React Native", "Expo", "iOS", "Android"],
  DevOps: ["Vercel", "AWS", "Docker", "GitHub Actions", "Sentry", "CI/CD"],
  Tools: ["VS Code", "Figma", "Git", "Notion", "Linear", "Slack"],
};

const values = [
  {
    icon: MessageCircle,
    title: "Communication claire",
    description: "Updates réguliers, documentation complète, aucune surprise.",
  },
  {
    icon: Clock,
    title: "Délais respectés",
    description: "Je m'engage sur des deadlines réalistes et je les tiens.",
  },
  {
    icon: Wrench,
    title: "Code maintenable",
    description: "Architecture propre, tests, documentation. Votre équipe pourra reprendre facilement.",
  },
  {
    icon: Handshake,
    title: "Partenaire, pas prestataire",
    description: "Je m'investis dans votre succès et propose des améliorations proactives.",
  },
];

export default function AboutPage() {
  return (
    <section className="pt-32 pb-20 lg:pb-32 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            À propos de{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              moi
            </span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Développeur passionné par la création de produits digitaux qui ont un réel impact.
          </p>
        </div>

        {/* Bio section */}
        <div className="grid lg:grid-cols-3 gap-12 mb-20">
          {/* Avatar & quick info */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center mb-6">
              <User className="w-20 h-20 text-white" />
            </div>
            
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Florian Zed</h2>
            <p className="text-cyan-400 font-medium mb-4">Freelance Full-Stack Developer</p>
            
            <div className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-400" />
                Libreville, Gabon
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                Remote Worldwide (WAT/UTC+1)
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                hello@flozed.dev
              </div>
            </div>

            <Button variant="outline" className="mt-6" asChild>
              <a href="/cv-florian-zed.pdf" download>
                <Download className="w-4 h-4" />
                Télécharger mon CV
              </a>
            </Button>
          </div>

          {/* Bio text */}
          <div className="lg:col-span-2 space-y-6">
            <div className="prose prose-invert max-w-none">
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed text-lg">
                Je suis <strong className="text-zinc-900 dark:text-white">développeur Full-Stack freelance</strong> avec 
                plus de 5 ans d&apos;expérience dans la création d&apos;applications web et mobile performantes.
              </p>
              
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Basé à <strong className="text-zinc-900 dark:text-white">Libreville, Gabon</strong>, je travaille en remote 
                avec des clients du monde entier — Europe, Afrique et États-Unis. Mon fuseau horaire 
                (WAT/UTC+1) me permet une excellente réactivité avec les équipes européennes et une 
                bonne couverture avec le continent américain.
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Mon parcours m&apos;a mené de développeur junior dans une agence web à freelance spécialisé 
                dans les produits SaaS et les applications mobiles. J&apos;ai travaillé avec des startups 
                en phase de lancement, des PME en croissance, et des agences cherchant à renforcer 
                leur équipe technique.
              </p>

              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">
                Ma mission : transformer vos idées en <strong className="text-cyan-400">produits digitaux 
                qui génèrent des résultats mesurables</strong>. Code propre, communication claire, 
                délais respectés — ce sont les piliers de ma façon de travailler.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6 border-t border-zinc-200 dark:border-zinc-800">
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">5+</p>
                <p className="text-sm text-zinc-500">Années d&apos;expérience</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">15+</p>
                <p className="text-sm text-zinc-500">Projets livrés</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-zinc-900 dark:text-white">100%</p>
                <p className="text-sm text-zinc-500">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Mes valeurs de travail
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => (
              <Card key={value.title}>
                <CardContent className="p-6 text-center">
                  <value.icon className="w-10 h-10 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">{value.title}</h3>
                  <p className="text-zinc-600 dark:text-zinc-400 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <div className="mb-20">
          <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-8 text-center">
            Stack & Outils
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(techStack).map(([category, techs]) => (
              <Card key={category}>
                <CardContent className="p-6">
                  <h3 className="text-sm text-zinc-500 uppercase tracking-wider mb-4">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 border-cyan-500/20">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4">
              Prêt à travailler ensemble ?
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-xl mx-auto">
              Je suis actuellement disponible pour 1-2 nouveaux projets. 
              Discutons de vos besoins et voyons comment je peux vous aider.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" asChild>
                <a href="https://calendly.com/flozed" target="_blank" rel="noopener noreferrer">
                  <Calendar className="w-5 h-5" />
                  Réserver un call
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/#contact">
                  Me contacter
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
