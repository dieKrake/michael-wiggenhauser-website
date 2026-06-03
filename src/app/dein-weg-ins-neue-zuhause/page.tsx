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
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-2xl lg:mx-auto lg:text-center">
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

      {/* Übergang: Vom neuen Haus zum Verkauf des alten */}
      <section className="hidden bg-(--color-dark-element) text-white lg:block">
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
              was passiert mit dem alten?
            </h2>
          </div>
        </Container>
      </section>

      {/* === VERGLEICH: Divider-Option B – Label-Linie === */}
      <div className="block bg-(--color-dark-element) py-12 sm:py-16 md:py-20 lg:hidden">
        <Container>
          <div className="flex items-center gap-6">
            <span className="h-px flex-1 bg-gray-300" />
            <div className="flex items-center gap-3 text-gray-50">
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
      <Section className="relative overflow-hidden py-24 text-white sm:py-32 lg:py-40">
        <Image
          src="/images/Bild 6.png"
          alt="Sorgenfrei Verkaufen"
          fill
          className="object-cover object-top"
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
        <Container>
          <p className="text-lg lg:text-center lg:text-xl">
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
            <strong>Besichtigungen</strong> bis hin zur
            <strong>Auswahl</strong> geeigneter Käufer stehe ich euch mit meiner
            Erfahrung und Marktkenntnis zur Seite. Ihr könnt euch entspannt
            zurücklehnen, während ich mich um die Details kümmere und euch bis
            zum Notartermin und darüber hinaus begleite.
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
    </>
  );
}
