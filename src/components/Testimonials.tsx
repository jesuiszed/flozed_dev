// Fichier : components/Testimonials.tsx
// Section Témoignages avec quotes clients

"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { testimonials } from "@/data/testimonials";
import { useI18n } from "@/lib/i18n";

export function Testimonials() {
  const { t } = useI18n();
  
  return (
    <section className="py-20 lg:py-32 bg-zinc-100 dark:bg-zinc-900/50 transition-colors">
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
            {t.testimonialsTitle.split(" ").slice(0, 3).join(" ")}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t.testimonialsTitle.split(" ").slice(3).join(" ")}
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.testimonialsSubtitle}
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:border-cyan-500/30 transition-colors">
                <CardContent className="p-6 space-y-4">
                  {/* Quote icon */}
                  <Quote className="w-8 h-8 text-cyan-500/30" />
                  
                  {/* Quote text */}
                  <p className="text-zinc-600 dark:text-zinc-300 leading-relaxed">
                    &quot;{testimonial.quote}&quot;
                  </p>

                  {/* Author */}
                  <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    <p className="font-semibold text-zinc-900 dark:text-white">{testimonial.author}</p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.role} @ {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
