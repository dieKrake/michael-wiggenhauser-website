import type { Metadata } from "next";
import { Check } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import {
  leistungenListe,
  elkGalerie,
  sorgenfreiVerkaufenSchritte,
  faqItems,
} from "@/lib/pages-text-data";

export const metadata: Metadata = {
  title: "Sorgenfrei Bauen",
  description:
    "Leistungen, ELK Fertighäuser und Immobilienverkauf – alles aus einer Hand.",
};

export default function SorgenfreiBauenPage() {
  const galerieKategorien = Object.values(elkGalerie);

  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-20 md:py-28">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            Sorgenfrei Bauen
          </Heading>
          <p className="text-primary-200 mx-auto mt-6 max-w-2xl text-lg">
            Von der ersten Idee bis zum Einzug – ich begleite Sie durch alle
            Phasen Ihres Bauvorhabens. Persönlich, kompetent und transparent.
          </p>
        </Container>
      </Section>

      {/* Leistungen */}
      <Section background="white" id="leistungen">
        <Container>
          <Heading as="h2" className="text-center">
            Unsere Leistungen
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Als Ihr Fachberater übernehme ich die komplette Koordination und
            Begleitung Ihres Hausbau-Projekts – damit Sie sich auf das
            Wesentliche konzentrieren können.
          </p>
          <div className="mx-auto mt-12 max-w-2xl">
            <ul className="space-y-4">
              {leistungenListe.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-gray-800" />
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Container>
      </Section>

      {/* ELK Fertighäuser */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            ELK Fertighäuser
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Als einer der führenden Hersteller Europas steht ELK für über 60
            Jahre Erfahrung, schnelle Lieferzeiten zum Festpreis und komplette
            Individualisierbarkeit. Jedes Haus wird exakt nach Ihren Wünschen
            konfiguriert.
          </p>
        </Container>
      </Section>

      {/* Bildergalerie */}
      {galerieKategorien.map((kategorie) => (
        <Section key={kategorie.label} background="white">
          <Container>
            <Heading as="h3" className="text-center">
              {kategorie.label}
            </Heading>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {kategorie.bilder.map((bild) => (
                <div
                  key={bild.alt}
                  className="overflow-hidden rounded-xl border border-gray-200"
                >
                  <div className="flex aspect-video items-center justify-center bg-gray-100 text-sm text-gray-400">
                    {bild.alt}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </Section>
      ))}

      {/* Sorgenfrei Verkaufen */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            Sorgenfrei Verkaufen
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Sie möchten Ihre Immobilie verkaufen? Ich begleite Sie von der
            ersten Beratung bis zum erfolgreichen Abschluss – persönlich und
            professionell.
          </p>
          <div className="mx-auto mt-12 max-w-3xl space-y-8">
            {sorgenfreiVerkaufenSchritte.map((schritt) => (
              <div key={schritt.nummer} className="flex gap-6">
                <span className="text-3xl font-bold text-gray-300">
                  {schritt.nummer}
                </span>
                <div>
                  <Heading as="h3">{schritt.title}</Heading>
                  <p className="mt-2 text-gray-600">{schritt.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="text-center">
            Häufig gestellte Fragen
          </Heading>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {faqItems.map((item) => (
              <Card key={item.question}>
                <Heading as="h3">{item.question}</Heading>
                <p className="mt-2 text-gray-600">{item.answer}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
