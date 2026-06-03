import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { financingSections, sellingBulletPoints } from "@/lib/pages-text-data";
import { ArrowRight, Home, Key } from "lucide-react";
import Button from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Dein Weg ins Neue Zuhause",
  description:
    "6 Schritte zum neuen Zuhause – Ich begleite euren Weg zum ELK Fertighaus Schritt für Schritt d.",
};

export default function FinanzierungAblaufPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/Hintergrund Banner-Weg–ins-neue-ZuHause.webp"
          alt="6 Schritte zum neuen Zuhause beim ELK Fertighausbau – Schritt für Schritt zum neuen Zuhause"
          fill
          className="object-cover object-center"
          fetchPriority="high"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 lg:text-center">
          <Heading as="h1" className="text-white">
            6 Schritte zum neuen Zuhause
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-white/90 lg:mx-auto lg:text-center">
            Ich begleite euren Weg zum ELK Fertighaus Schritt für Schritt. Von
            der Finanzierung über die Planung bis hin zur Schlüsselübergabe.
          </p>
        </Container>
      </section>

      {/* Abschnitte */}
      {financingSections.map((abschnitt, index) => (
        <Section
          key={abschnitt.title}
          className="py-8 md:py-16 lg:py-24"
          background={index % 2 === 0 ? "gray" : "white"}
        >
          <Container>
            <div className="max-w-3xl lg:mx-auto">
              <div className="flex flex-col items-baseline gap-4 lg:flex-row lg:justify-center">
                <span className="text-3xl font-bold text-gray-200 md:text-4xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading as="h2" className="lg:text-center">
                  {abschnitt.title}
                </Heading>
              </div>
              <div className="mt-4 space-y-2 text-lg leading-relaxed text-gray-600 lg:text-center">
                {(Array.isArray(abschnitt.content)
                  ? abschnitt.content
                  : [abschnitt.content]
                ).map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
          </Container>
        </Section>
      ))}

      <section className="relative mt-16 overflow-hidden bg-neutral-100">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28">
            <h2 className="text-3xl leading-tight font-bold tracking-tight uppercase lg:text-3xl">
              Jetzt den ersten Schritt zum Traumhaus machen
            </h2>
            <div className="mt-8 border-l-[3px] border-black pl-6">
              <p className="text-base leading-relaxed text-neutral-600">
                „Eure Wünsche, Vorstellungen und Anforderungen an euer
                zukünftiges Zuhause kennt niemand besser als ihr selbst. Genau
                deshalb ist der erste Schritt so wichtig: In einer persönlichen
                Bedarfsanalyse sprechen wir gemeinsam über eure Ziele,
                Möglichkeiten und alle wichtigen baulichen, finanziellen und
                rechtlichen Aspekte. So entsteht aus eurem Traum Schritt für
                Schritt ein Zuhause, das wirklich zu euch passt.“
              </p>
              <p className="mt-4 text-sm font-semibold">
                - Michael Wiggenhauser
              </p>
            </div>
            <Button
              href="#kontakt"
              variant="accent"
              className="mt-8 gap-2 self-start lg:self-center"
            >
              Jetzt kostenlose Bedarfsanalyse vereinbaren
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Bild */}
          <div className="relative max-h-[600px] overflow-hidden lg:min-h-full">
            <div className="aspect-3/4 w-full lg:absolute lg:inset-0 lg:aspect-auto">
              <Image
                src="/images/michi-gespraech.webp"
                alt="Michael Wiggenhauser"
                priority
                fill
                className="object-cover object-[center_20%] transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Übergang: Vom neuen Haus zum Verkauf des alten */}
      <section className="hidden bg-(--color-dark-element) text-white sm:block">
        <Container className="py-16 text-center lg:py-20">
          <div className="mx-auto flex max-w-3xl flex-col items-center">
            <div className="flex items-center gap-4 text-white/60">
              <Key className="h-6 w-6" />
              <ArrowRight className="h-5 w-5" />
              <Home className="h-6 w-6" />
            </div>
            <span className="mt-6 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase">
              Und euer altes Zuhause?
            </span>
            <h2 className="mt-4 text-2xl leading-snug font-bold tracking-tight uppercase lg:text-3xl">
              Ihr habt euer Traumhaus gefunden –{" "}
              <br className="hidden sm:block" />
              was passiert mit dem alten?
            </h2>
          </div>
        </Container>
      </section>

      {/* === VERGLEICH: Divider-Option B – Label-Linie === */}
      <div className="mt-8 block bg-white py-12 sm:hidden">
        <Container>
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-gray-300" />
            <div className="flex items-center gap-3 text-(--color-dark-element)">
              <Home className="h-5 w-5" />
              <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                Und euer altes Zuhause?
              </span>
            </div>
            <span className="h-px flex-1 bg-gray-300" />
          </div>
        </Container>
      </div>

      {/* Sorgenfrei Verkaufen */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="lg:text-center">
            Sorgenfrei Verkaufen
          </Heading>
          <p className="mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-center">
            Sie möchten Ihre Immobilie verkaufen? Ich begleite Sie von der
            ersten Beratung bis zum erfolgreichen Abschluss – persönlich und
            professionell.
          </p>
          <div className="mt-12 max-w-3xl space-y-8 lg:mx-auto">
            {sellingBulletPoints.map((schritt) => (
              <div key={schritt.nummer}>
                <div className="flex items-baseline gap-4 lg:justify-center">
                  <span className="text-3xl font-bold text-gray-300">
                    {schritt.nummer}
                  </span>
                  <Heading as="h3" className="lg:text-center">
                    {schritt.title}
                  </Heading>
                </div>
                <p className="mt-2 text-gray-600 lg:text-center">
                  {schritt.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
