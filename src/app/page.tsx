import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  heroData,
  leistungsKarten,
  testimonials,
} from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Ihr Fachberater für ELK Fertighäuser – Bauberatung, Finanzierung und individuelle Hausplanung.",
};

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center bg-neutral-950 px-6">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl leading-tight font-semibold tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            {heroData.headline}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-400 md:text-xl">
            {heroData.subline}
          </p>
          <div className="mt-10">
            <a
              href={heroData.ctaHref}
              className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3.5 text-[15px] font-medium text-black transition-opacity hover:opacity-80"
            >
              {heroData.ctaText}
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Service-Karten */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-3">
            {leistungsKarten.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="group rounded-2xl border border-neutral-200 p-8 transition-all duration-200 hover:border-neutral-300 hover:shadow-lg"
              >
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-neutral-600">
                  {item.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-medium text-black opacity-0 transition-opacity group-hover:opacity-100">
                  Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Willkommens-Text */}
      <section className="border-y border-neutral-100 bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 text-center lg:px-8">
          <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Wir freuen uns auf Sie
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-neutral-600">
            Ob Neubau, Finanzierung oder der Verkauf Ihrer bestehenden Immobilie
            – diese spannende Phase birgt Herausforderungen. Unser umfassender
            Service bietet maßgeschneiderte Lösungen für Ihr individuelles
            Bauvorhaben.
          </p>
          <a
            href="#kontakt"
            className="mt-8 inline-flex items-center gap-2 text-[15px] font-medium text-black underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-black"
          >
            Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Leistungen als elegante Liste */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Unsere umfassenden Dienstleistungen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Von der ersten Idee bis zum Einzug begleiten wir Sie
                partnerschaftlich und professionell.
              </p>
            </div>
            <ul className="space-y-4">
              {[
                "Neubau von Einfamilien-, Doppel- und Mehrfamilienhäusern",
                "Individuelle Grundrissplanung und Konfiguration",
                "Finanzierungsberatung inkl. Fördermittelprüfung",
                "Begleitung vom Erstgespräch bis zur Schlüsselübergabe",
                "Verkauf Ihrer bestehenden Immobilie",
              ].map((item) => (
                <li
                  key={item}
                  className="border-b border-neutral-100 pb-4 text-[15px] text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-neutral-100 bg-neutral-50 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-3xl font-semibold tracking-tight md:text-4xl">
            Zufriedene Bauherren
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <div
                key={item.name}
                className="rounded-2xl bg-white p-8 shadow-sm"
              >
                <p className="text-[15px] leading-relaxed text-neutral-600">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-neutral-500">{item.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
