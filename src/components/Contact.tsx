// Fichier : components/Contact.tsx
// Section Contact avec formulaire et Calendly

"use client";

import { motion } from "framer-motion";
import { Calendar, Mail, MessageCircle, Clock, Zap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ContactForm } from "@/components/ContactForm";
import { useI18n } from "@/lib/i18n";

export function Contact() {
  const { t } = useI18n();
  
  return (
    <section id="contact" className="py-20 lg:py-32 bg-white dark:bg-zinc-950 transition-colors">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <Badge variant="success" className="mb-4">
            <Clock className="w-4 h-4 mr-2" />
            {t.nextSlotAvailable}
          </Badge>
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
            {t.letsWork}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              {t.together}
            </span>
          </h2>
          <p className="text-zinc-600 dark:text-zinc-400 text-lg">
            {t.contactSubtitle}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Contact form - larger */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="lg:col-span-3"
          >
            <Card>
              <CardContent className="p-6 sm:p-8">
                <div className="flex items-center gap-3 mb-6">
                  <MessageCircle className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">
                    {t.sendMeMessage}
                  </h3>
                </div>
                <ContactForm />
              </CardContent>
            </Card>
          </motion.div>

          {/* Calendly & quick contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Calendly card */}
            <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {t.preferCall}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-6">
                  {t.bookSlotDescription}
                </p>
                <Button asChild className="w-full">
                  <a
                    href="https://calendly.com/flozed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Calendar className="w-4 h-4" />
                    {t.bookCall}
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Direct email */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
                    {t.directEmail}
                  </h3>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm mb-4">
                  {t.directEmailDescription}
                </p>
                <a
                  href="mailto:hello@flozed.dev"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                >
                  hello@flozed.dev
                </a>
              </CardContent>
            </Card>

            {/* Response time */}
            <div className="bg-zinc-100 dark:bg-zinc-800/50 rounded-xl p-4 border border-zinc-200 dark:border-zinc-700/50">
              <p className="text-zinc-600 dark:text-zinc-400 text-sm flex items-center gap-2">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span><strong className="text-zinc-900 dark:text-white">{t.avgResponseTime}:</strong> {t.responseTimeValue}</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
