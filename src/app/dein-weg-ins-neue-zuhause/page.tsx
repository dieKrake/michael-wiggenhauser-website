import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { financingSections } from "@/lib/pages-text-data";
import {
  ArrowRight,
  ClipboardList,
  FileCheck2,
  Hammer,
  Home,
  Key,
  PencilRuler,
  PiggyBank,
} from "lucide-react";
import Button from "@/components/ui/button";
import WorriesSection from "@/components/sections/worries-section";

export const metadata: Metadata = {
  title:
    "In 6 Schritten zum Fertighaus | Bewährtes Modell inklusive Verkaufsberatung",
  description:
    "Intensive Beratung und Begleitung von der Planung über die Fertighaus-Konfiguration bis hin zur Schlüsselübergabe.",
};

const stepIcons = [
  ClipboardList,
  PiggyBank,
  PencilRuler,
  FileCheck2,
  Hammer,
  Key,
];

export default function FinanzierungAblaufPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:flex lg:h-[500px] lg:items-center lg:py-0">
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
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-2xl lg:mx-auto lg:text-center">
            Ich begleite euren Weg zum ELK Fertighaus Schritt für Schritt. Von
            der Finanzierung über die Planung bis hin zur Schlüsselübergabe.
          </p>
        </Container>
      </section>

      {/* Ablauf – Vertikale Timeline */}
      <Section id="timeline">
        <Container>
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-dark-brown/60 text-sm font-semibold tracking-[0.2em] uppercase">
              Der Ablauf
            </span>
            <Heading as="h2" className="mt-3">
              Von der ersten Idee bis zur Schlüsselübergabe
            </Heading>
          </div>

          <ol className="relative mx-auto max-w-3xl">
            {financingSections.map((abschnitt, index) => {
              const Icon = stepIcons[index];
              const isLast = index === financingSections.length - 1;
              const paragraphs = Array.isArray(abschnitt.content)
                ? abschnitt.content
                : [abschnitt.content];

              return (
                <li
                  key={abschnitt.title}
                  className="relative flex gap-5 pb-12 last:pb-0 md:gap-8"
                >
                  {/* Verbindungslinie */}
                  {!isLast && (
                    <span
                      aria-hidden
                      className="bg-dark-brown/20 absolute top-14 bottom-0 left-6 w-px -translate-x-1/2 md:left-7"
                    />
                  )}

                  {/* Marker */}
                  <div className="bg-dark-brown relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-white shadow-md md:h-14 md:w-14">
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </div>

                  {/* Inhalt */}
                  <div className="pt-1.5 md:pt-2.5">
                    <Heading as="h3" className="flex items-start">
                      <span className="text-dark-brown/30 w-8 shrink-0 md:w-10">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="flex-1">{abschnitt.title}</span>
                    </Heading>
                    <div className="mt-3 space-y-2 pl-8 text-lg leading-relaxed text-gray-600 md:pl-10">
                      {paragraphs.map((para, i) => (
                        <p key={i}>{para}</p>
                      ))}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
        </Container>
      </Section>

      <section className="relative mt-16 overflow-hidden bg-neutral-100">
        <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
          {/* Text */}
          <div className="flex flex-col justify-center px-6 py-20 lg:px-16 lg:py-28">
            <h2 className="text-3xl leading-tight font-bold tracking-tight uppercase lg:text-3xl">
              Jetzt den ersten Schritt zum Traumhaus machen
            </h2>
            <div className="mt-8 border-l-[3px] border-black pl-6">
              <p className="pr-0 text-base leading-relaxed text-neutral-600 md:pr-16 lg:pr-0">
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
            <div className="relative aspect-3/4 w-full lg:absolute lg:inset-0 lg:aspect-auto">
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

      {/* Bedenken / Häufige Sorgen */}
      <WorriesSection />

      {/* Übergang: Vom neuen Haus zum Verkauf des alten */}
      <section className="bg-dark-brown hidden text-white lg:block">
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
            <h2 className="mt-4 text-xl leading-snug font-bold tracking-tight uppercase lg:text-2xl">
              Ihr habt euer Traumhaus gefunden –{" "}
              <br className="hidden sm:block" />
              was passiert Bestandsimmobilien?
            </h2>
            <div className="mt-8 flex justify-center gap-4">
              <Button href="#verkaufen" variant="secondary">
                Verkauf
              </Button>
              <Button href="#abreissen" variant="secondary">
                Abriss
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* === VERGLEICH: Divider-Option B – Label-Linie === */}
      <div className="bg-dark-brown block py-12 text-white sm:py-16 md:py-20 lg:hidden">
        <Container>
          <div className="flex flex-col items-center">
            <div className="flex w-full items-center gap-6">
              <span className="h-px flex-1 bg-gray-300/20" />
              <div className="flex items-center gap-3 text-gray-50">
                <Home className="h-5 w-5" />
                <span className="text-sm font-semibold tracking-[0.2em] uppercase">
                  Und euer altes Zuhause?
                </span>
              </div>
              <span className="h-px flex-1 bg-gray-300/20" />
            </div>

            <div className="mt-8 flex w-full flex-col justify-center gap-4 px-4 sm:flex-row sm:px-0">
              <Button
                href="#verkaufen"
                variant="secondary"
                className="w-full normal-case sm:w-auto"
              >
                Verkauf
              </Button>
              <Button
                href="#abreissen"
                variant="secondary"
                className="w-full normal-case sm:w-auto"
              >
                Abriss
              </Button>
            </div>
          </div>
        </Container>
      </div>

      {/* Sorgenfrei Verkaufen */}
      <Section
        id="verkaufen"
        className="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40"
      >
        <Image
          src="/images/haus-verkaufen.webp"
          alt="Sorgenfrei Verkaufen"
          fill
          className="object-cover object-[center_60%]"
          fetchPriority="high"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10">
          <Heading as="h2" className="text-white lg:text-center">
            Sorgenfrei Verkaufen
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-white/90 lg:mx-auto lg:text-center">
            Du möchtest eine bestehende Immobilie verkaufen? Auch hier begleite
            ich dich von der ersten Beratung bis zum erfolgreichen Abschluss -
            persönlich, professionell und sorgenfrei.
          </p>
        </Container>
      </Section>
      <Section background="gray">
        <Container className="max-w-5xl">
          <p className="text-lg lg:text-center">
            Den ersten Schritt bildet eine{" "}
            <strong>kostenlose und unverbindliche Wertermittlung</strong>, bei
            der ich eure Immobilie anhand aktueller Marktpreise und regionaler
            Entwicklungen realistisch bewerte.
            <br />
            <br />
            Damit eure Immobilie optimal präsentiert wird, kümmere ich mich um
            alle wichtigen Unterlagen und erstelle ein{" "}
            <strong>hochwertiges Exposé mit professionellen Bilder</strong> und
            aussagekräftigen Beschreibungen. So erreichen wir die passenden
            Interessenten und schaffen die besten Voraussetzungen für einen
            erfolgreichen Verkauf.
            <br />
            <br />
            Von der <strong>Vermarktung</strong> über{" "}
            <strong>Besichtigungen</strong> bis hin zur <strong>Auswahl</strong>{" "}
            geeigneter Käufer stehe ich euch mit meiner Erfahrung und
            Marktkenntnis zur Seite. Ihr könnt euch entspannt zurücklehnen,
            während ich mich um die Details kümmere und euch bis zum Notartermin
            und darüber hinaus begleite.
            <br />
            <br />
            Auch wenn ihr nur ein Grundstück verkaufen möchtet, unterstütze ich
            euch gerne. Durch mein Netzwerk und zahlreiche Interessenten –
            insbesondere im Bereich Neubau und Fertighäuser – lassen sich
            passende Käufer oft schnell finden.
            <br />
            <br />
            Mein Ziel ist es, euren Immobilienverkauf so einfach, transparent
            und erfolgreich wie möglich zu gestalten.
          </p>
        </Container>
      </Section>

      {/* Sorgenfrei Abreissen */}
      <Section
        id="abreissen"
        className="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40"
      >
        <Image
          src="/images/haus-verkaufen.webp"
          alt="Sorgenfrei Verkaufen"
          fill
          className="object-cover object-[center_60%]"
          fetchPriority="high"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10">
          <Heading as="h2" className="text-white lg:text-center">
            Abriss und Neubau
          </Heading>
          <p className="mt-4 max-w-2xl text-lg text-white/90 lg:mx-auto lg:text-center">
            Nicht jede Bestandsimmobilie lässt sich wirtschaftlich sanieren. Oft
            ist es sinnvoller, ein altes Haus abzureißen und die Möglichkeiten
            eines modernen Neubaus zu nutzen. Auch bei diesem Schritt begleite
            ich euch.
          </p>
        </Container>
      </Section>
      <Section background="gray">
        <Container className="max-w-5xl">
          <p className="text-lg lg:text-center">
            Gemeinsam mit erfahrenen{" "}
            <Link
              href="/ueber-mich#partner"
              className="text-blue-600 hover:underline"
            >
              Partnerunternehmen
            </Link>{" "}
            übernehmen wir die{" "}
            <strong>
              komplette Planung und Koordination aller notwendigen
              Abbrucharbeiten
            </strong>
            . Dazu gehören neben dem klassischen <strong>Hausabriss</strong>{" "}
            auch Spezialleistungen wie <strong>Asbestsanierungen</strong>,{" "}
            <strong>Schadstoffrückbau</strong> und die{" "}
            <strong>fachgerechte Entsorgung</strong> von Baumaterialien.
            <br />
            <br />
            Nach dem Rückbau schaffen wir die optimale Grundlage für euer neues
            ELK Fertighaus. Der große Vorteil:{" "}
            <strong>
              Abriss und Neubau werden zentral koordiniert und aufeinander
              abgestimmt
            </strong>
            . Dadurch entstehen wertvolle Synergieeffekte, die Zeit sparen,
            Kosten reduzieren und für maximale Planungssicherheit sorgen.
            <br />
            <br />
            Ihr müsst euch nicht mit verschiedenen Gewerken, Behörden oder
            Dienstleistern abstimmen. Stattdessen habt ihr einen{" "}
            <strong>festen Ansprechpartner</strong> an eurer Seite, der den
            gesamten Prozess begleitet - vom ersten Gespräch über den Hausabriss
            bis zum Einzug in euer neues Fertighaus.
            <br />
            <br />
            So wird aus einer in die Jahre gekommenen Immobilie Schritt für
            Schritt ein modernes, energieeffizientes Zuhause - persönlich,
            planbar und sorgenfrei.
          </p>
        </Container>
      </Section>
    </>
  );
}
