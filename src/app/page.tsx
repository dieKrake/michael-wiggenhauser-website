import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, HardHat, MessageCircle, Home } from "lucide-react";
import { leistungsKarten, testimonials } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Startseite",
  description:
    "Ihr Fachberater für ELK Fertighäuser – Bauberatung, Finanzierung und individuelle Hausplanung.",
};

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        {/* Bilder */}
        <div className="grid md:grid-cols-2">
          {/* Bild links – nur auf Desktop sichtbar */}
          <div className="relative hidden min-h-[70vh] bg-neutral-300 md:block">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
              Haus-Bild 1 Placeholder
            </div>
          </div>

          {/* Bild rechts – immer sichtbar */}
          <div className="relative min-h-[50vh] bg-neutral-200 md:min-h-[70vh]">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
              Haus-Bild 2 Placeholder
            </div>
          </div>
        </div>

        {/* Text unter Bildern (mobil) / Overlay unten rechts (desktop) */}
        <div className="px-6 py-10 md:absolute md:right-0 md:bottom-0 md:p-12">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase md:text-5xl">
            Sorgenfrei ins neue
            <br />
            Zuhause
          </h1>
          <a
            href="#kontakt"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Service-Karten */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            {leistungsKarten.map((item, index) => {
              const icons = [Home, HardHat, MessageCircle];
              const Icon = icons[index] || Home;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group text-center"
                >
                  <Icon className="mx-auto h-12 w-12 stroke-[1.2] text-neutral-800" />
                  <h3 className="mt-6 text-sm font-bold tracking-wider uppercase">
                    {item.title}
                  </h3>
                  <p className="mx-auto mt-3 max-w-xs text-[15px] leading-relaxed text-neutral-600">
                    {item.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-neutral-800 uppercase">
                    Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Willkommens-Text */}
      <section className="relative overflow-hidden bg-neutral-100">
        <div className="mx-auto grid max-w-7xl md:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-20 md:py-28 lg:px-16">
            <h2 className="text-3xl leading-tight font-bold tracking-tight uppercase md:text-4xl">
              Ich freue mich
              <br />
              auf Sie
            </h2>
            <div className="mt-8 border-l-[3px] border-black pl-6">
              <p className="text-[15px] leading-relaxed text-neutral-600">
                Ob Neubau, Finanzierung oder der Verkauf Ihrer bestehenden
                Immobilie – diese spannende Phase birgt Herausforderungen. Mein
                umfassender Service bietet maßgeschneiderte Lösungen für Ihr
                individuelles Bauvorhaben.
              </p>
            </div>
            <a
              href="#kontakt"
              className="mt-10 inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase"
            >
              Jetzt Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Bild */}
          <div className="flex items-end justify-center bg-neutral-200 md:bg-transparent">
            <div className="aspect-3/4 w-full max-w-md bg-neutral-300 md:aspect-auto md:h-full">
              <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                Porträt-Foto Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen als elegante Liste */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 md:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
                Meine Dienstleistungen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Von der ersten Idee bis zum Einzug begleite ich Sie
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
