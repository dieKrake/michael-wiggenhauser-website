import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";

export const metadata: Metadata = {
  title: "AGB",
  description: "Allgemeine Geschäftsbedingungen",
};

export default function AGBPage() {
  return (
    <Section background="white">
      <Container>
        <div className="prose mx-auto max-w-3xl">
          <Heading as="h1">Allgemeine Geschäftsbedingungen</Heading>
          <p className="mt-6 text-gray-600">
            Platzhalter – Hier werden die vollständigen Allgemeinen
            Geschäftsbedingungen eingefügt. Diese Seite enthält die
            vertraglichen Grundlagen für die Zusammenarbeit mit Michael
            Wiggenhauser als selbstständigem Handelsvertreter für ELK
            Fertighäuser.
          </p>
        </div>
      </Container>
    </Section>
  );
}
