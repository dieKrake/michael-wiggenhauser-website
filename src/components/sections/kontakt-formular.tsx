"use client";

import { useState, FormEvent, useEffect } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Mail, Phone, Loader2, CheckCircle2, XCircle } from "lucide-react";
import Button from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  datenschutz?: string;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const KontaktFormular = () => {
  const pathname = usePathname();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    datenschutz: false,
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  // Reset form when navigating to a different page
  useEffect(() => {
    setFormData({ name: "", email: "", message: "", datenschutz: false });
    setErrors({});
    setSubmitStatus("idle");
  }, [pathname]);

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name || !formData.name.trim()) {
      newErrors.name = "Bitte gib deinen Namen ein.";
    }

    if (!formData.email || !formData.email.trim()) {
      newErrors.email = "Bitte gib deine E-Mail-Adresse ein.";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Bitte gib eine gültige E-Mail-Adresse ein.";
    }

    if (!formData.message || !formData.message.trim()) {
      newErrors.message = "Bitte gib eine Nachricht ein.";
    }

    if (!formData.datenschutz) {
      newErrors.datenschutz = "Bitte stimme der Datenschutzerklärung zu.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (submitStatus === "loading") return;

    if (!validateForm()) {
      return;
    }

    setSubmitStatus("loading");

    try {
      // Künstliche Verzögerung von 1,5 Sekunden für die Ladeanimation
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Hier würde der echte API-Call stehen (z.B. Resend oder ein Next.js Server Action)
      console.log("Formular erfolgreich gesendet:", formData);

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "", datenschutz: false });
      setErrors({});
    } catch (error) {
      console.error(error);
      setSubmitStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-linear-to-b from-white via-neutral-50 to-neutral-100 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-stretch">
          {/* Info-Seite (Personal Trust & Quote) */}
          <div className="flex h-full flex-col justify-between lg:pr-4">
            <div>
              {/* Profil-Header */}
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 shadow-md">
                  <Image
                    src="/images/michi-kontakt.webp"
                    alt="Michael Wiggenhauser"
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-dark-brown inline-block text-[11px] font-bold tracking-widest uppercase">
                    Euer ELK Bauberater
                  </span>
                  <h3 className="mt-1 text-xl leading-none font-bold text-neutral-900">
                    Michael Wiggenhauser
                  </h3>
                </div>
              </div>

              {/* Zitat-Box */}
              <div className="border-dark-brown/10 bg-dark-brown/5 relative mt-6 rounded-2xl border p-6 text-neutral-700 italic">
                <span className="text-dark-brown/15 absolute -top-4 -left-1 font-serif text-6xl leading-none select-none">
                  „
                </span>
                <p className="relative z-10 text-[15px] leading-relaxed font-medium">
                  Ein Haus baut man meistens nur einmal im Leben. Lasst uns
                  diesen Weg von Anfang an gemeinsam gehen – ehrlich,
                  transparent und völlig sorgenfrei.
                </p>
              </div>
            </div>

            {/* Premium Klickbare Kontakt-Karten */}
            <div className="mt-8 space-y-3 border-t border-neutral-200/60 pt-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group hover:border-dark-brown/20 flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="bg-dark-brown/5 text-dark-brown group-hover:bg-dark-brown flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                    Telefonisch erreichbar
                  </p>
                  <p className="group-hover:text-dark-brown mt-0.5 text-sm font-bold text-neutral-900 transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group hover:border-dark-brown/20 flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="bg-dark-brown/5 text-dark-brown group-hover:bg-dark-brown flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                    E-Mail schreiben
                  </p>
                  <p className="group-hover:text-dark-brown mt-0.5 text-sm font-bold text-neutral-900 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Formular */}
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-200/50 sm:p-8"
          >
            <h3 className="text-dark-brown mb-6 text-2xl font-bold tracking-tight">
              Kontakt
            </h3>

            {/* Status-Meldungen */}
            {submitStatus === "success" && (
              <div className="flex items-start gap-3 rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-emerald-800">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" />
                <div>
                  <h4 className="text-sm font-semibold">
                    Nachricht erfolgreich gesendet!
                  </h4>
                  <p className="mt-1 text-xs text-emerald-700/90">
                    Vielen Dank für dein Interesse. Ich werde mich so schnell
                    wie möglich persönlich bei dir melden.
                  </p>
                </div>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="flex items-start gap-3 rounded-xl border border-red-100 bg-red-50/50 p-4 text-red-800">
                <XCircle className="mt-0.5 h-5 w-5 shrink-0 text-red-600" />
                <div>
                  <h4 className="text-sm font-semibold">
                    Senden fehlgeschlagen
                  </h4>
                  <p className="mt-1 text-xs text-red-700/90">
                    Es gab ein Problem beim Übermitteln deiner Nachricht. Bitte
                    versuche es später noch einmal oder kontaktiere mich direkt
                    telefonisch.
                  </p>
                </div>
              </div>
            )}

            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name || ""}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-[15px] transition-colors focus:outline-none ${
                    errors.name
                      ? "border-red-500 bg-red-50 focus:border-red-500"
                      : "border-neutral-200 bg-neutral-50 focus:border-black focus:bg-white"
                  }`}
                  placeholder="Dein Name"
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-600">{errors.name}</p>
                )}
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-neutral-700"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email || ""}
                  onChange={handleChange}
                  className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-[15px] transition-colors focus:outline-none ${
                    errors.email
                      ? "border-red-500 bg-red-50 focus:border-red-500"
                      : "border-neutral-200 bg-neutral-50 focus:border-black focus:bg-white"
                  }`}
                  placeholder={siteConfig.email}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600">{errors.email}</p>
                )}
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-700"
              >
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                value={formData.message || ""}
                onChange={handleChange}
                rows={5}
                className={`mt-1.5 block w-full rounded-xl border px-4 py-3 text-[15px] transition-colors focus:outline-none ${
                  errors.message
                    ? "border-red-500 bg-red-50 focus:border-red-500"
                    : "border-neutral-200 bg-neutral-50 focus:border-black focus:bg-white"
                }`}
                placeholder="Deine Nachricht..."
              />
              {errors.message && (
                <p className="mt-1 text-xs text-red-600">{errors.message}</p>
              )}
            </div>
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="contact-datenschutz"
                name="datenschutz"
                checked={formData.datenschutz || false}
                onChange={handleChange}
                className={`mt-1 h-4 w-4 rounded text-black focus:ring-black ${
                  errors.datenschutz ? "border-red-500" : "border-neutral-300"
                }`}
              />
              <label
                htmlFor="contact-datenschutz"
                className="text-sm leading-relaxed text-neutral-500"
              >
                Ich habe die{" "}
                <a
                  href="/agb"
                  className="text-neutral-700 underline underline-offset-2 hover:text-black"
                >
                  AGB
                </a>{" "}
                und die{" "}
                <a
                  href="/datenschutz"
                  className="text-neutral-700 underline underline-offset-2 hover:text-black"
                >
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>
            {errors.datenschutz && (
              <p className="mt-1 text-xs text-red-600">{errors.datenschutz}</p>
            )}
            <Button
              type="submit"
              variant="accent"
              className="flex w-full items-center justify-center gap-2"
              disabled={submitStatus === "loading"}
            >
              {submitStatus === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                "Nachricht senden"
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontaktFormular;
