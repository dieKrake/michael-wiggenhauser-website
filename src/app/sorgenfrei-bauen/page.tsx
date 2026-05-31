import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { Accordion } from "@/components/ui/accordion";
import { ImageCarousel } from "@/components/ui/image-carousel";
import {
  servicesList,
  elkGalery,
  sellingBulletPoints,
  faqItems,
} from "@/lib/pages-text-data";

export const metadata: Metadata = {
  title: "Sorgenfrei Bauen",
  description:
    "Leistungen, ELK Fertighäuser und Immobilienverkauf – alles aus einer Hand.",
};

export default function SorgenfreiBauenPage() {
  const galerieKategorien = Object.values(elkGalery);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/Hintergrund-Banner-Sorgenfrei-bauen.webp"
          alt="Moderne ELK Fertighäuser – Sorgenfrei Bauen mit persönlicher Bauberatung"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 text-center">
          <Heading as="h1" className="text-white">
            Sorgenfrei Bauen
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Von der ersten Idee bis zum Einzug – ich begleite Sie durch alle
            Phasen Ihres Bauvorhabens. Persönlich, kompetent und transparent.
          </p>
        </Container>
      </section>

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
              {servicesList.map((item) => (
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
            <div className="mx-auto mt-8 max-w-3xl">
              <ImageCarousel
                images={kategorie.bilder}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </Container>
        </Section>
      ))}

      {/* FAQ */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="text-center">
            Häufig gestellte Fragen
          </Heading>
          <div className="mx-auto mt-12 max-w-3xl">
            <Accordion items={faqItems} />
          </div>
        </Container>
      </Section>
    </>
  );
}
