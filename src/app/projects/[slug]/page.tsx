// Fichier : app/projects/[slug]/page.tsx
// Page détail projet (case study) - Suivant prompt.md

import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink, Github, Calendar, CheckCircle2 } from "lucide-react";
import { projects } from "@/data/projects";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  
  if (!project) {
    return {
      title: "Projet non trouvé",
    };
  }

  return {
    title: `${project.title} | Florian Zed`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [project.image],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="pt-32 pb-20 lg:pb-32 bg-white dark:bg-zinc-950 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-zinc-600 dark:text-zinc-400 hover:text-cyan-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        {/* Header */}
        <header className="max-w-4xl mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="purple">{project.sector}</Badge>
            {project.client && (
              <Badge variant="secondary">{project.client}</Badge>
            )}
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-white mb-4">
            {project.title}
          </h1>

          <p className="text-xl text-zinc-600 dark:text-zinc-400 mb-6">{project.description}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2 text-zinc-500 dark:text-zinc-400 text-sm">
              <Calendar className="w-4 h-4" />
              {new Date(project.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
              })}
            </div>

            {project.liveUrl && (
              <Button variant="outline" size="sm" asChild>
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="w-4 h-4" />
                  Voir le site
                </a>
              </Button>
            )}

            {project.githubUrl && (
              <Button variant="ghost" size="sm" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  Code source
                </a>
              </Button>
            )}
          </div>
        </header>

        {/* Project image */}
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-zinc-200 dark:bg-zinc-800 mb-12">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
            <span className="text-6xl opacity-30">📱</span>
          </div>
          {/* Uncomment when you have actual images */}
          {/* <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          /> */}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Problem */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                Le Problème
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.problem}</p>
            </section>

            {/* Solution */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-4 flex items-center gap-3">
                <span className="text-2xl">💡</span>
                La Solution
              </h2>
              <p className="text-zinc-700 dark:text-zinc-300 leading-relaxed">{project.solution}</p>
            </section>

            {/* Results */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-6 flex items-center gap-3">
                <span className="text-2xl">📈</span>
                Résultats
              </h2>
              <div className="grid sm:grid-cols-2 gap-4">
                {project.results.map((result, index) => (
                  <Card key={index} className="bg-emerald-500/5 border-emerald-500/20">
                    <CardContent className="p-4 flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-emerald-400 mt-0.5 shrink-0" />
                      <span className="text-zinc-700 dark:text-zinc-200">{result}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Tech stack */}
            <Card>
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-4">
                  Technologies utilisées
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* CTA */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white mb-2">
                  Un projet similaire ?
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  Discutons de vos besoins et voyons comment je peux vous aider.
                </p>
                <Button asChild className="w-full">
                  <Link href="/#contact">Me contacter</Link>
                </Button>
              </CardContent>
            </Card>
          </aside>
        </div>
      </div>
    </article>
  );
}
