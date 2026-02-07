// Fichier : components/ContactForm.tsx
// Formulaire de contact avec React Hook Form + Zod

"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select } from "@/components/ui/select";
import { useI18n } from "@/lib/i18n";

const contactSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  projectType: z.string().min(1, "Veuillez sélectionner un type de projet"),
  budget: z.string().optional(),
  message: z.string().min(20, "Le message doit contenir au moins 20 caractères"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { t } = useI18n();

  const projectTypes = [
    { value: "", label: t.projectType },
    { value: "mvp", label: t.projectMvp },
    { value: "refonte", label: t.projectRefonte },
    { value: "features", label: t.projectFeatures },
    { value: "maintenance", label: t.projectMaintenance },
    { value: "other", label: t.projectOther },
  ];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus("loading");
    
    try {
      // Simulate API call - replace with actual email service (Resend, EmailJS, etc.)
      await new Promise((resolve) => setTimeout(resolve, 1500));
      console.log("Form submitted:", data);
      
      setSubmitStatus("success");
      reset();
      
      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name & Email row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Input
            placeholder={t.yourName}
            {...register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
          )}
        </div>
        <div>
          <Input
            type="email"
            placeholder={t.yourEmail}
            {...register("email")}
            className={errors.email ? "border-red-500" : ""}
          />
          {errors.email && (
            <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Project type & Budget row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <Select
            options={projectTypes}
            {...register("projectType")}
            className={errors.projectType ? "border-red-500" : ""}
          />
          {errors.projectType && (
            <p className="text-red-400 text-sm mt-1">{errors.projectType.message}</p>
          )}
        </div>
        <div>
          <Input
            placeholder={t.budgetPlaceholder}
            {...register("budget")}
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <Textarea
          placeholder={t.messagePlaceholder}
          rows={5}
          {...register("message")}
          className={errors.message ? "border-red-500" : ""}
        />
        {errors.message && (
          <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
        )}
      </div>

      {/* Submit button */}
      <Button
        type="submit"
        size="lg"
        className="w-full"
        disabled={submitStatus === "loading"}
      >
        {submitStatus === "loading" ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            {t.sending}
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            {t.sendRequest}
          </>
        )}
      </Button>

      {/* Status messages */}
      {submitStatus === "success" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 p-4 rounded-lg"
        >
          <CheckCircle className="w-5 h-5" />
          <span>{t.successMessage}</span>
        </motion.div>
      )}

      {submitStatus === "error" && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-500/10 p-4 rounded-lg"
        >
          <AlertCircle className="w-5 h-5" />
          <span>{t.errorMessage}</span>
        </motion.div>
      )}
    </form>
  );
}