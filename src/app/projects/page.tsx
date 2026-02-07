// Fichier : app/projects/page.tsx
// Liste de tous les projets - Suivant prompt.md

import { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

export const metadata: Metadata = {
  title: "Projets | Florian Zed – Freelance Full-Stack Developer",
  description:
    "Découvrez mes réalisations : applications web, apps mobiles, dashboards SaaS, et plus. Résultats concrets et métriques pour chaque projet.",
};

export default function ProjectsPage() {
  return (
    <section className="pt-32 pb-20 lg:pb-32 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Projets
            </span>
          </h1>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            Chaque projet est une success story. Découvrez comment j&apos;aide mes
            clients à atteindre leurs objectifs avec des solutions techniques
            sur-mesure.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
