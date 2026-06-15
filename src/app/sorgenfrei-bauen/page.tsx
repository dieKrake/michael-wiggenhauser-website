import type { Metadata } from "next";
import Image from "next/image";
import { Check, ChevronDown } from "lucide-react";
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
  title: "Sorgenfrei bauen | Persönliche Fertighaus-Beratung mit ELK",
  description:
    "Von der ersten Idee bis zum Einzug: Persönliche Fertighaus-Beratung, Hausplanung und Baubegleitung für euren sorgenfreien Hausbau mit ELK.",
};

export default function SorgenfreiBauenPage() {
  const galerieKategorien = Object.values(elkGalery);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28 lg:flex lg:h-[500px] lg:items-center lg:py-0">
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
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-2xl lg:mx-auto lg:text-center">
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
            und begleite euer Fertighaus-Projekt von Anfang bis Ende. Damit ihr
            euch auf das Wesentliche konzentrieren könnt.
          </p>
          <div className="relative mt-12">
            <ul className="grid max-h-96 grid-cols-1 gap-4 overflow-y-auto scroll-smooth px-0.5 py-1 md:max-h-none md:grid-cols-2 md:overflow-visible lg:mx-auto lg:max-w-6xl lg:grid-cols-3">
              {servicesList.map((item) => (
                <li
                  key={item}
                  className="group flex snap-start items-center gap-4 rounded-xl border border-neutral-100 bg-white p-5 shadow-sm transition-all duration-300 hover:border-neutral-200"
                >
                  <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100 text-neutral-800">
                    <Check className="h-3.5 w-3.5 stroke-[2.5]" />
                  </div>
                  <span className="text-base font-medium text-neutral-700 transition-colors duration-300 group-hover:text-neutral-900 md:text-lg">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
            {/* Verlaufs-Fades als Scroll-Hinweis – nur auf dem Smartphone */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-8 bg-linear-to-b from-white to-transparent md:hidden"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 bottom-0 flex h-12 items-end justify-center bg-linear-to-t from-white via-white/80 to-transparent md:hidden"
            >
              <ChevronDown className="h-5 w-5 animate-bounce text-neutral-400" />
            </div>
          </div>
        </Container>
      </Section>

      {/* ELK Fertighäuser */}
      <Section className="bg-(--color-dark-brown)" id="elk-fertighaeuser">
        <Container>
          <Heading as="h2" className="text-white lg:text-center">
            ELK Fertighäuser
          </Heading>
          <p className="text-primary-200 mt-4 max-w-2xl lg:mx-auto lg:text-center lg:text-xl">
            Als Marktführer in Europa steht ELK für über 60 Jahre Erfahrung,
            schnelle Lieferzeiten zum Festpreis und komplette
            Individualisierbarkeit. Ihr profitiert beim Hausbau von bewährten
            Konzepten, hoher Qualität und Planungssicherheit.
          </p>
        </Container>
      </Section>

      <div className="block h-8 md:h-12 lg:h-0" />
      {/* Bildergalerie */}
      {galerieKategorien.map((kategorie) => (
        <Section
          key={kategorie.label}
          background="white"
          className="py-8 md:py-16 lg:py-24"
        >
          <Container>
            <Heading
              as="h2"
              className="mb-2 sm:mb-4 sm:text-center lg:mb-8 lg:text-center"
            >
              {kategorie.label}
            </Heading>
            <div className="mx-auto max-w-4xl">
              <ImageCarousel
                images={kategorie.bilder}
                sizes="(max-width: 768px) 100vw, 768px"
              />
            </div>
          </Container>
        </Section>
      ))}

      {/* Warum ein ELK-Haus? */}
      <Section key={whyElkSectionData.title} background="gray">
        <Container>
          <Heading as="h2" className="lg:text-center">
            {whyElkSectionData.title}
          </Heading>
          <p className="mt-4 max-w-2xl lg:mx-auto lg:text-center">
            {whyElkSectionData.description}
          </p>
        </Container>
        <div className="mt-8 flex flex-row items-stretch">
          <div className="relative overflow-hidden sm:w-1/3">
            <Image
              src="/images/Warum-ELK.webp"
              alt="ELK Haus"
              fill
              className="hidden object-cover object-left sm:block"
              sizes="(max-width: 1024px) 33vw, 500px"
            />
          </div>
          <div className="relative w-1/6 overflow-hidden sm:hidden">
            <div className="block h-full w-full bg-(--color-dark-brown) sm:hidden" />
          </div>
          <div className="flex w-full flex-col pr-4 pl-8 sm:pr-6 md:w-2/3 md:pl-16 lg:pr-8">
            {whyElkSectionData.usps.map((usp) => (
              <div key={usp.title} className="mb-6">
                <h3 className="mt-4 text-left text-lg font-semibold">
                  {usp.title}
                </h3>
                <p className="pr-0 text-gray-600 md:pr-12 lg:pr-16 xl:pr-32">
                  {usp.description}
                </p>
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
            bgImage="/images/Elk-Haus-Zimmer.webp"
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
      <Section background="gray">
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
