import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
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
        <div className="grid lg:grid-cols-12">
          {/* Bild links – volle Höhe */}
          <div className="relative min-h-[28vh] sm:min-h-[50vh] lg:col-span-5 lg:row-span-1 lg:min-h-0">
            <Image
              src="/images/haus-placeholder.webp"
              alt="ELK Fertighaus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
          </div>

          {/* Rechte Seite: Bild oben + Text unten */}
          <div className="hidden lg:col-span-7 lg:flex lg:flex-col">
            {/* Bild rechts oben */}
            <div className="relative min-h-[40vh] flex-1">
              <Image
                src="/images/haus-placeholder2.webp"
                alt="ELK Fertighaus"
                fill
                className="object-cover"
                sizes="58vw"
                priority
              />
            </div>

            {/* Text rechts unten */}
            <div className="bg-gray-50 py-8 pl-28">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase lg:text-5xl">
                Sorgenfrei ins neue
                <br />
                Zuhause
              </h1>

              <div className="grid grid-cols-[1fr_2fr] items-center gap-8">
                <p className="order-last border-l border-neutral-200 pr-4 pl-8 text-base leading-relaxed text-neutral-700">
                  Der Bau eines Hauses ist eine der wichtigsten Entscheidungen
                  im Leben. Umso wichtiger ist ein Partner, der euch zuverlässig
                  begleitet – von der ersten Idee bis zum Einzug. Als
                  persönlicher ELK-Fachberater unterstütze ich euch dabei, euer
                  individuelles Fertighaus sorgenfrei zu planen und sicher
                  umzusetzen.
                </p>
                <div className="flex justify-center">
                  <a
                    href="#kontakt"
                    className="inline-flex items-center gap-2 rounded-full bg-black px-6 py-3 text-[14px] font-medium text-white transition-opacity hover:opacity-80"
                  >
                    Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Diagonaler Teiler zwischen den Bildern */}
        <div className="pointer-events-none absolute inset-y-0 left-[38%] z-10 hidden w-36 -translate-x-1/2 -skew-x-16 bg-gray-700 lg:block">
          <div className="pointer-events-none absolute inset-y-0 left-36 w-28 bg-gray-50" />
        </div>

        {/* Mobile: Text unter dem Bild */}
        <div className="px-6 py-4 sm:py-10 lg:hidden">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase">
            Sorgenfrei ins neue
            <br />
            Zuhause
          </h1>

          <div className="my-5 h-px bg-neutral-200" />

          <div className="grid grid-cols-1 gap-6">
            <p className="text-base leading-relaxed text-neutral-700">
              Der Bau eines Hauses ist eine der wichtigsten Entscheidungen im
              Leben. Umso wichtiger ist ein Partner, der euch zuverlässig
              begleitet – von der ersten Idee bis zum Einzug. Als persönlicher
              ELK-Fachberater unterstütze ich euch dabei, euer individuelles
              Fertighaus sorgenfrei zu planen und sicher umzusetzen.
            </p>
            <div className="flex">
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
          <div className="relative overflow-hidden lg:min-h-full">
            <div className="aspect-3/4 w-full lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src="/images/michi-gespraech.JPG"
                alt="Michael Wiggenhauser"
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
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
          <div className="absolute inset-0">
            <Image
              src="/images/placeholder-stock-family.jpg"
              alt="Zufriedene Bauherren"
              fill
              className="object-cover object-[center_100%]"
              sizes="100vw"
            />
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
