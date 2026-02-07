// Fichier : components/ServiceCard.tsx
// Carte de service avec icône, bénéfices et CTA

"use client";

import { motion } from "framer-motion";
import { Rocket, Zap, Puzzle, Shield, Bot, Check, LucideIcon } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Service } from "@/lib/types";

const iconMap: Record<string, LucideIcon> = {
  Rocket,
  Zap,
  Puzzle,
  Shield,
  Bot,
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  const Icon = iconMap[service.icon] || Rocket;

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="h-full hover:border-cyan-500/50 transition-all duration-300 group">
        <CardHeader>
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center mb-4 group-hover:from-cyan-500/30 group-hover:to-blue-500/30 transition-colors">
            <Icon className="w-6 h-6 text-cyan-400" />
          </div>
          <CardTitle className="text-xl text-zinc-900 dark:text-white">{service.title}</CardTitle>
          <p className="text-zinc-600 dark:text-zinc-400 text-sm mt-2">{service.description}</p>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Benefits */}
          <ul className="space-y-2">
            {service.benefits.map((benefit) => (
              <li key={benefit} className="flex items-start gap-2 text-sm text-zinc-700 dark:text-zinc-300">
                <Check className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                {benefit}
              </li>
            ))}
          </ul>

          {/* Tech badges */}
          <div className="flex flex-wrap gap-2 pt-2">
            {service.technologies.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
            {service.technologies.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{service.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Timeline */}
          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-sm text-zinc-500">{service.timeline}</p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={scrollToContact} variant="secondary" className="w-full">
            {service.ctaText}
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  );
}
