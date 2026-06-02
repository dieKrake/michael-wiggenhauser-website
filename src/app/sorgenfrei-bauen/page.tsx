import type { Metadata } from "next";
import Image from "next/image";
import { Check } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { Accordion } from "@/components/ui/accordion";
import { ImageCarousel } from "@/components/ui/image-carousel";
import ClimateFriendlyHouses from "@/components/sections/climate-friendly-houses";
import {
  servicesList,
  elkGalery,
  faqItems,
  whyElkSectionData,
  sliderFactsData,
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
          fetchPriority="high"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 lg:text-center">
          <Heading as="h1" className="text-white">
            Sorgenfrei Bauen
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-white/90 lg:mx-auto lg:text-center">
            Von der ersten Idee bis zum Einzug – ich begleite euch durch alle
            Phasen eures Bauvorhabens. Persönlich, kompetent und transparent.
          </p>
        </Container>
      </section>

      {/* Leistungen */}
      <Section background="white" id="leistungen">
        <Container>
          <Heading as="h2" className="lg:text-center">
            Meine Leistungen
          </Heading>
          <p className="mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-center">
            Als euer ELK-Fachberater übernehme ich die komplette Koordination
            und Begleitung (Begleitung?) eures Fertighaus-Projekts. Damit ihr
            euch auf das Wesentliche konzentrieren könnt.
          </p>
          <div className="mt-12 max-w-2xl lg:mx-auto">
            <ul className="space-y-4 lg:mx-auto lg:w-fit">
              {servicesList.map((item) => (
                <li key={item} className="flex items-center gap-3">
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
          <Heading as="h2" className="lg:text-center">
            ELK Fertighäuser
          </Heading>
          <p className="mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-center">
            Als einer der führenden Hersteller Europas steht ELK für über 60
            Jahre Erfahrung, schnelle Lieferzeiten zum Festpreis und komplette
            Individualisierbarkeit. Jedes Haus wird exakt nach euren Wünschen
            konfiguriert.
          </p>
        </Container>
      </Section>

      {/* Bildergalerie */}
      {galerieKategorien.map((kategorie) => (
        <Section key={kategorie.label} background="white">
          <Container>
            <Heading as="h2" className="sm:text-center lg:text-center">
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

      {/* Warum ein ELK-Haus? */}
      <Section key={whyElkSectionData.title}>
        <Container>
          <Heading as="h2" className="lg:text-center">
            {whyElkSectionData.title}
          </Heading>
          <p className="mt-4 max-w-2xl text-gray-600 lg:mx-auto lg:text-center">
            {whyElkSectionData.description}
          </p>
        </Container>
        <div className="mt-8 flex flex-row items-stretch">
          <div className="relative overflow-hidden md:w-1/3">
            <Image
              src="/images/Bungalow-1.webp"
              alt="ELK Haus"
              fill
              className="hidden object-cover object-left md:block"
              sizes="(max-width: 1024px) 33vw, 500px"
            />
          </div>
          <div className="relative w-1/5 overflow-hidden md:hidden">
            <div className="block h-full w-full rounded-r-sm bg-(--color-dark-element) md:hidden" />
          </div>
          <div className="flex w-full flex-col py-4 pr-4 pl-8 sm:pr-6 md:w-2/3 md:pl-16 lg:pr-8">
            {whyElkSectionData.usps.map((usp) => (
              <div key={usp.title} className="mb-6">
                <h3 className="mt-4 text-left text-lg font-semibold">
                  {usp.title}
                </h3>
                <p className="text-gray-600">{usp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* Slider Facts */}
      <Section>
        <Container>
          <ImageCarousel
            autoplay={true}
            showArrows={false}
            bgImage="/images/Bungalow-3.webp"
            slides={sliderFactsData.map((fact) => ({
              title: fact.title,
              text: fact.text,
            }))}
          />
        </Container>
      </Section>

      {/* Climate friendly houses */}
      <ClimateFriendlyHouses />

      {/* FAQ */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="lg:text-center">
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
