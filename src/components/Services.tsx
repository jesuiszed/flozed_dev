// Fichier : components/Services.tsx
// Section Services avec grille de cartes

"use client";

import { motion } from "framer-motion";
import { services } from "@/data/services";
import { ServiceCard } from "@/components/ServiceCard";
import { useI18n } from "@/lib/i18n";

export function Services() {
  const { t } = useI18n();
  
  return (
    <section id="services" className="py-20 lg:py-32 bg-zinc-50 dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            Mes{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t.servicesTitle}
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.servicesSubtitle}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
