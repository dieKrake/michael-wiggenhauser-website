import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { financingSections, sellingBulletPoints } from "@/lib/pages-text-data";

export const metadata: Metadata = {
  title: "Dein Weg ins Neue Zuhause",
  description:
    "Von der Finanzierung über die Planung bis zum Einzug – so läuft Ihr Hausbau ab.",
};

export default function FinanzierungAblaufPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/Hintergrund Banner-Weg–ins-neue-ZuHause.webp"
          alt="Finanzierung &amp; Ablauf beim ELK Fertighausbau – Schritt für Schritt zum neuen Zuhause"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 text-center">
          <Heading as="h1" className="text-white">
            Finanzierung &amp; Ablauf
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            Der Weg zum eigenen Fertighaus – Schritt für Schritt erklärt. Von
            der Finanzierung über die Planung bis zur Schlüsselübergabe.
          </p>
        </Container>
      </section>

      {/* Abschnitte */}
      {financingSections.map((abschnitt, index) => (
        <Section
          key={abschnitt.title}
          background={index % 2 === 0 ? "gray" : "white"}
        >
          <Container>
            <div className="mx-auto max-w-3xl">
              <div className="flex items-baseline gap-4">
                <span className="text-4xl font-bold text-gray-200">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <Heading as="h2">{abschnitt.title}</Heading>
              </div>
              <p className="mt-4 text-lg leading-relaxed text-gray-600">
                {abschnitt.content}
              </p>
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
            {sellingBulletPoints.map((schritt) => (
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
    </>
  );
}
