import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung",
};

export default function DatenschutzPage() {
  return (
    <Section background="white">
      <Container>
        <div className="prose mx-auto max-w-3xl">
          <Heading as="h1">Datenschutzerklärung</Heading>
          <p className="mt-6 text-gray-600">
            Platzhalter – Hier wird die vollständige Datenschutzerklärung
            eingefügt. Diese Seite enthält Informationen zur Erhebung,
            Verarbeitung und Nutzung personenbezogener Daten gemäß DSGVO.
          </p>
        </div>
      </Container>
    </Section>
  );
}
