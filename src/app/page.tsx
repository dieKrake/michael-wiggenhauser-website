import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, HardHat, MessageCircle, Home, Check } from "lucide-react";
import {
  heroSectionTextTop,
  landingPageTiles,
  testimonials,
} from "@/lib/pages-text-data";
import Button from "@/components/ui/button";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";

export const metadata: Metadata = {
  title: "ELK Fertighaus-Fachberatung | Sorgenfrei zum Traumhaus ",
  description:
    "Sorgenfrei ins neue Zuhause: Persönliche Beratung für euer ELK Fertighaus. Von Bedarfsanalyse und Planung bis zur Schlüsselübergabe - alles aus einer Hand.",
};

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="grid lg:grid-cols-12 lg:grid-rows-[auto_1fr] 2xl:grid-cols-12 2xl:grid-rows-1">
          {/* Bild links – volle Höhe */}
          <div className="relative aspect-video sm:aspect-auto sm:min-h-[50vh] lg:col-span-6 lg:row-span-1 lg:aspect-video lg:min-h-0 2xl:col-span-5 2xl:row-span-1 2xl:aspect-auto 2xl:min-h-0">
            <Image
              src="/images/titelbild-front.webp"
              alt="ELK Fertighaus"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
              fetchPriority="high"
            />
          </div>

          {/* Rechte Seite: Bild oben + Text unten */}
          <div className="hidden lg:col-span-6 lg:flex lg:flex-col 2xl:col-span-7 2xl:flex 2xl:flex-col">
            {/* Bild rechts oben */}
            <div className="relative min-h-[40vh] flex-1 lg:aspect-video lg:min-h-0 lg:flex-none 2xl:aspect-auto 2xl:min-h-[40vh] 2xl:flex-1">
              {/* Diagonaler Teiler – relativ zur linken Kante des rechten Containers (lg-2xl) */}
              <div className="pointer-events-none absolute inset-y-0 z-10 hidden w-36 -translate-x-1/2 -skew-x-16 bg-(--color-dark-brown) will-change-transform lg:left-[4%] lg:block 2xl:hidden">
                <div className="pointer-events-none absolute inset-y-0 left-24 w-16 bg-gray-50" />
              </div>
              <Image
                src="/images/titelbild-back.webp"
                alt="ELK Fertighaus"
                fill
                className="object-cover"
                sizes="58vw"
                fetchPriority="high"
                priority
              />
            </div>

            {/* Text rechts unten */}
            <div className="bg-gray-50 py-8 pl-28 sm:hidden lg:hidden 2xl:block">
              <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase lg:text-5xl">
                {heroSectionTextTop.titleLine1}
                <br />
                {heroSectionTextTop.titleLine2}
              </h1>

              <div className="3xl:mt-12 grid grid-cols-[1fr_2fr] items-center gap-8 pr-8">
                <p className="order-last border-l border-neutral-200 pr-4 pl-8 text-base leading-relaxed text-neutral-700">
                  {heroSectionTextTop.description}
                </p>
                <div className="justify-left flex">
                  <Button href="#kontakt" variant="accent" className="gap-2">
                    Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Text unter den Bildern lg-2xl */}
          <div className="relative z-20 -mt-2 hidden bg-gray-50 lg:col-span-12 lg:grid lg:grid-cols-6 lg:grid-rows-2 2xl:hidden">
            <h1 className="col-span-6 mt-8 flex justify-center text-center font-bold tracking-tight text-neutral-900 uppercase lg:text-4xl">
              {heroSectionTextTop.titleLine1}
              <br />
              {heroSectionTextTop.titleLine2}
            </h1>
            <div className="col-span-6 mt-4 grid grid-cols-1 gap-4 px-28 text-center">
              <p>{heroSectionTextTop.description}</p>
            </div>
            <div className="col-span-6 flex items-center justify-center pb-8">
              <Button href="#kontakt" variant="accent" className="gap-2">
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Diagonaler Teiler zwischen den Bildern (2xl) */}
        <div className="4xl:left-[40%] 4xl:w-52 pointer-events-none absolute inset-y-0 left-[38%] z-10 hidden w-36 -translate-x-1/2 -skew-x-16 bg-(--color-dark-brown) 2xl:block">
          <div className="3xl:w-40 4xl:w-48 pointer-events-none absolute inset-y-0 left-36 w-28 2xl:bg-gray-50" />
        </div>

        {/* Mobile: Text unter dem Bild */}
        <div className="px-6 py-4 sm:py-10 lg:hidden">
          <h1 className="text-3xl font-bold tracking-tight text-neutral-900 uppercase">
            {heroSectionTextTop.titleLine1}
            <br />
            {heroSectionTextTop.titleLine2}
          </h1>

          <div
            className="my-5 h-px"
            style={{ backgroundColor: "var(--color-dark-brown)" }}
          />

          <div className="grid grid-cols-1 gap-6">
            <p className="text-base leading-relaxed text-neutral-700">
              {heroSectionTextTop.description}
            </p>
            <div className="flex">
              <Button href="#kontakt" variant="accent" className="gap-2">
                Kontakt aufnehmen <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service-Karten */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-3">
            {landingPageTiles.map((item, index) => {
              const icons = [HardHat, Home, MessageCircle];
              const Icon = icons[index] || Home;
              return (
                <Link
                  key={item.title}
                  href={item.href}
                  className="group flex flex-col justify-between rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-200/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-200/60 sm:p-8"
                >
                  <div className="text-left lg:text-center">
                    <Icon className="h-12 w-12 stroke-[1.2] text-neutral-800 transition-transform duration-300 group-hover:scale-110 lg:mx-auto" />
                    <h3 className="mt-6 text-sm font-bold tracking-wider uppercase">
                      {item.title}
                    </h3>
                    <p className="mt-3 text-base leading-relaxed text-neutral-600 lg:mx-auto lg:max-w-xs">
                      {item.description}
                    </p>
                  </div>
                  <div className="mt-6 border-t border-neutral-100 pt-4 text-left lg:text-center">
                    <span className="inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-neutral-800 uppercase transition-colors group-hover:text-black">
                      Mehr erfahren{" "}
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Wrapper to swap order on mobile/tablet but keep normal order on desktop (lg) */}
      <div className="flex flex-col">
        {/* Intro-Text */}
        <section className="hidden px-6 pt-16 pb-0 lg:block lg:py-24 lg:pt-0 lg:pb-0">
          <div className="mx-auto max-w-7xl pb-0 lg:pb-28">
            <p className="mx-auto max-w-5xl text-base leading-relaxed text-neutral-700 lg:text-center lg:text-lg">
              Ob moderner Bungalow, energieeffizientes Einfamilienhaus oder
              schlüsselfertiges Mehrfamilienhaus – mit ELK setzen wir auf
              nachhaltiges Bauen, hochwertige Architektur und maximale
              Planungssicherheit. Gemeinsam verwirklichen wir euer modernes
              Fertighaus.
            </p>
            <p className="mx-auto mt-4 max-w-5xl text-base leading-relaxed text-neutral-700 lg:text-center lg:text-lg">
              Lasst uns euren Traum vom eigenen Fertighaus Schritt für Schritt
              angehen: persönlich, planbar und sorgenfrei. Schreibt mir gerne
              für eine kostenlose Erstberatung.
            </p>
          </div>
        </section>

        {/* Willkommens-Text */}
        <section className="relative overflow-hidden bg-neutral-100">
          <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
            {/* Text */}
            <div className="flex flex-col justify-center px-6 py-16 lg:px-16 lg:py-24">
              <h2 className="text-3xl leading-tight font-bold tracking-tight uppercase lg:text-3xl">
                Sorgenfrei bauen beginnt mit einem Gespräch.
              </h2>
              <div className="mt-8 border-l-[3px] border-black pl-6">
                <p className="text-base leading-relaxed text-neutral-600">
                  In einem kostenlosen Erstgespräch klären wir eure Wünsche,
                  Möglichkeiten und die nächsten Schritte auf dem Weg zum
                  eigenen Fertighaus. Gemeinsam sprechen wir über Finanzierung,
                  Hausplanung und den Ablauf eures Bauvorhabens – und klären
                  alle offenen Fragen.
                </p>
              </div>
              <a
                href="#kontakt"
                className="group mt-10 inline-flex items-center gap-2 text-sm font-bold tracking-wider uppercase hover:underline"
              >
                Jetzt Kontakt aufnehmen{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>

            {/* Bild */}
            <div className="relative max-h-[350px] overflow-hidden sm:max-h-[450px] lg:min-h-full">
              <div className="relative aspect-3/4 w-full lg:absolute lg:inset-0 lg:aspect-auto">
                <Image
                  src="/images/michi-treppe.webp"
                  alt="Michael Wiggenhauser"
                  priority
                  quality={90}
                  fill
                  className="translate-x-6 scale-220 object-cover object-[center_100%] transition-transform duration-700 min-[440px]:object-[center_140%] min-[700px]:translate-y-[-10px] min-[760px]:translate-y-[-25px] min-[820px]:translate-y-[-40px] min-[940px]:translate-y-[-55px] sm:translate-x-14 sm:object-[center_150%] md:translate-x-13 md:scale-170 lg:translate-x-10 lg:translate-y-0 lg:scale-200 lg:object-[center_48%] lg:hover:scale-205"
                  sizes="(max-width: 1024px) 220vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Leistungen als elegante Liste */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <h2 className="text-3xl font-semibold tracking-tight lg:text-4xl">
                Meine Dienstleistungen
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-600">
                Von der ersten Idee bis zum Einzug begleite ich
                partnerschaftlich und professionell.
              </p>
              <Link
                href="/sorgenfrei-bauen"
                className="group mt-10 hidden items-center gap-2 text-sm font-bold tracking-wider uppercase hover:underline lg:inline-flex"
              >
                Mehr erfahren{" "}
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
            <ul className="space-y-5">
              {[
                "Neubau von Einfamilien-, Doppel- und Mehrfamilienhäusern",
                "Individuelle Grundrissplanung und Konfiguration",
                "Finanzierungsberatung inkl. Fördermittelprüfung",
                "Begleitung vom Erstgespräch bis zur Schlüsselübergabe",
                "Verkauf Eurer bestehenden Immobilie",
              ].map((item) => (
                <li
                  key={item}
                  className="group flex items-start gap-4 border-b border-neutral-100 pt-1 pb-4 transition-all duration-300 hover:border-neutral-200"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800 transition-colors duration-300 group-hover:bg-neutral-900 group-hover:text-white">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
              <Link
                href="/sorgenfrei-bauen#leistungen"
                className="mt-8 inline-flex items-center gap-1.5 text-sm font-bold tracking-wider text-neutral-800 uppercase lg:mt-0 lg:hidden"
              >
                Mehr erfahren <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </ul>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-neutral-100 py-0 lg:py-0">
        {/* Constrained + rounded on desktop, full-width on mobile */}
        <div className="relative overflow-hidden md:rounded-none lg:mx-auto lg:max-w-7xl xl:rounded-3xl">
          {/* Background image */}
          <div className="absolute inset-0">
            <Image
              src="/images/testimonials.webp"
              alt="Zufriedene Bauherren"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content */}
          <div className="relative px-6 py-16 lg:px-12 lg:py-24">
            <h2 className="text-center text-3xl font-semibold tracking-tight text-white lg:text-4xl">
              Zufriedene Bauherren
            </h2>

            <TestimonialCarousel items={testimonials} className="mt-10" />
          </div>
        </div>
      </section>
    </>
  );
}
