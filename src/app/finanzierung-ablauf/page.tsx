import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { finanzierungAbschnitte } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Finanzierung & Ablauf",
  description:
    "Von der Finanzierung über die Planung bis zum Einzug – so läuft Ihr Hausbau ab.",
};

export default function FinanzierungAblaufPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-20 md:py-28">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            Finanzierung &amp; Ablauf
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-primary-200">
            Der Weg zum eigenen Fertighaus – Schritt für Schritt erklärt. Von
            der Finanzierung über die Planung bis zur Schlüsselübergabe.
          </p>
        </Container>
      </Section>

      {/* Abschnitte */}
      {finanzierungAbschnitte.map((abschnitt, index) => (
        <Section
          key={abschnitt.title}
          background={index % 2 === 0 ? "white" : "gray"}
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
    </>
  );
}
