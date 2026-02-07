// Fichier : components/ProjectCard.tsx
// Carte de projet avec image, techs et résultats

"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Project } from "@/lib/types";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Link href={`/projects/${project.slug}`}>
        <Card className="overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group cursor-pointer">
          {/* Image */}
          <div className="relative aspect-video overflow-hidden bg-zinc-200 dark:bg-zinc-800">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
              <span className="text-4xl opacity-50">📱</span>
            </div>
            {/* Uncomment when you have actual images */}
            {/* <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500"
            /> */}
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-100 dark:from-zinc-900 via-transparent to-transparent" />
            
            {/* Live link badge */}
            {project.liveUrl && (
              <div className="absolute top-4 right-4">
                <Badge variant="secondary" className="gap-1">
                  <ExternalLink className="w-3 h-3" />
                  Live
                </Badge>
              </div>
            )}
          </div>

          <CardContent className="p-6 space-y-4">
            {/* Sector */}
            <Badge variant="purple" className="text-xs">
              {project.sector}
            </Badge>

            {/* Title */}
            <h3 className="text-xl font-semibold text-zinc-900 dark:text-white group-hover:text-cyan-500 dark:group-hover:text-cyan-400 transition-colors flex items-center gap-2">
              {project.title}
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </h3>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm line-clamp-2">
              {project.description}
            </p>

            {/* Key result */}
            {project.results[0] && (
              <p className="text-emerald-400 text-sm font-medium">
                ✓ {project.results[0]}
              </p>
            )}

            {/* Tech stack */}
            <div className="flex flex-wrap gap-2 pt-2">
              {project.technologies.slice(0, 4).map((tech) => (
                <Badge key={tech} variant="outline" className="text-xs">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
