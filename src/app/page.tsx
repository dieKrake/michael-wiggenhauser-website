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
        <div className="grid lg:grid-cols-2">
          {/* Bild links – nur auf Desktop sichtbar */}
          <div className="relative hidden min-h-[70vh] bg-neutral-300 lg:block">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
              Haus-Bild 1 Placeholder
            </div>
          </div>

          {/* Bild rechts – immer sichtbar */}
          <div className="relative min-h-[50vh] bg-neutral-200 lg:min-h-[70vh]">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
              Haus-Bild 2 Placeholder
            </div>
          </div>
        </div>

        {/* Text unter Bildern (mobil) / Overlay unten rechts (desktop) */}
        <div className="px-6 py-10 lg:absolute lg:right-0 lg:bottom-0 lg:w-1/2 lg:p-12">
          {/* Container 1: Überschrift */}
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase lg:text-5xl">
            Sorgenfrei ins neue
            <br />
            Zuhause
          </h1>
          {/* Container 2 & 3: Text first, Button below on mobile / reversed on desktop */}
          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-center">
            <p className="order-first text-base leading-relaxed text-neutral-700 lg:order-last">
              Der Bau eines Hauses ist eine der wichtigsten Entscheidungen im
              Leben. Umso wichtiger ist ein Partner, der euch zuverlässig
              begleitet – von der ersten Idee bis zum Einzug. Als persönlicher
              ELK-Fachberater unterstütze ich euch dabei, euer individuelles
              Fertighaus sorgenfrei zu planen und sicher umzusetzen.
            </p>
            <div className="flex lg:justify-center">
              <a
                href="#kontakt"
                className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-80"
              >
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Intro-Text */}
      <section className="border-b border-neutral-100 px-6 py-14 lg:py-16">
        <div className="mx-auto max-w-7xl">
          <p className="mx-auto max-w-5xl text-base leading-relaxed text-neutral-700 lg:text-center lg:text-lg lg:font-bold">
            Ob moderner Bungalow, energieeffizientes Einfamilienhaus oder
            schlüsselfertiges Mehrfamilienhaus – mit ELK setzen wir auf
            nachhaltiges Bauen, hochwertige Architektur und maximale
            Planungssicherheit. Gemeinsam verwirklichen wir euer modernes
            Fertighaus.
          </p>
          <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-neutral-700 lg:text-center lg:text-lg lg:font-bold">
            Lasst uns euren Traum vom eigenen Fertighaus Schritt für Schritt
            angehen: persönlich, planbar und sorgenfrei. Schreibt mir gerne für
            eine kostenlose Erstberatung.
          </p>
        </div>
      </section>

      {/* Service-Karten */}
      <section className="py-12 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-3">
            {leistungsKarten.map((item, index) => {
              const icons = [HardHat, Home, MessageCircle];
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
                  <p className="mx-auto mt-3 max-w-xs text-base leading-relaxed text-neutral-600">
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
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28">
            <h2 className="text-3xl leading-tight font-bold tracking-tight uppercase lg:text-3xl">
              Sorgenfrei bauen beginnt mit einem Gespräch.
            </h2>
            <div className="mt-8 border-l-[3px] border-black pl-6">
              <p className="text-base leading-relaxed text-neutral-600">
                In einem kostenlosen Erstgespräch klären wir eure Wünsche,
                Möglichkeiten und die nächsten Schritte auf dem Weg zum eigenen
                Fertighaus. Gemeinsam sprechen wir über Finanzierung,
                Hausplanung und den Ablauf eures Bauvorhabens – und klären alle
                offenen Fragen.
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
          <div className="flex items-end justify-center bg-neutral-200 lg:bg-transparent">
            <div className="aspect-3/4 w-full max-w-md bg-neutral-300 lg:aspect-auto lg:h-full">
              <div className="flex h-full w-full items-center justify-center text-sm text-neutral-500">
                Porträt-Foto Placeholder
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leistungen als elegante Liste */}
      <section className="py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Meine Dienstleistungen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Von der ersten Idee bis zum Einzug begleite ich
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
                  className="border-b border-neutral-100 pb-4 text-base text-neutral-700"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-12 lg:py-16">
        {/* Constrained + rounded on desktop, full-width on mobile */}
        <div className="relative overflow-hidden lg:mx-auto lg:max-w-7xl lg:rounded-3xl">
          {/* Background image */}
          <div className="absolute inset-0 bg-neutral-400">
            <div className="flex h-full w-full items-center justify-center text-sm text-neutral-600">
              Zufriedene Kunden Placeholder-Bild
            </div>
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/35" />

          {/* Content */}
          <div className="relative px-6 py-16 lg:px-12 lg:py-24">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              Zufriedene Bauherren
            </h2>

            {/* Mobile: swipe slider */}
            <div className="mt-10 flex snap-x snap-mandatory scroll-pl-6 scrollbar-none gap-4 overflow-x-auto pb-4 lg:hidden [&::-webkit-scrollbar]:hidden">
              <div className="shrink-0 basis-6" />
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="w-[80vw] shrink-0 snap-start rounded-2xl bg-white p-6 shadow-sm"
                >
                  <p className="text-base leading-relaxed text-neutral-600">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                  <div className="mt-6 border-t border-neutral-100 pt-4">
                    <p className="text-sm font-semibold">{item.name}</p>
                    <p className="text-sm text-neutral-500">{item.location}</p>
                  </div>
                </div>
              ))}
              <div className="shrink-0 basis-6" />
            </div>

            {/* Desktop: 3-col grid */}
            <div className="mt-16 hidden gap-8 lg:grid lg:grid-cols-3">
              {testimonials.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white p-8 shadow-sm"
                >
                  <p className="text-base leading-relaxed text-neutral-600">
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
        </div>
      </section>
    </>
  );
}
