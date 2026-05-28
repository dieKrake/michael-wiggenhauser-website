import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum",
};

export default function ImpressumPage() {
  return (
    <Section background="white">
      <Container>
        <div className="prose mx-auto max-w-3xl">
          <Heading as="h1">Impressum</Heading>
          <div className="mt-6 space-y-4 text-gray-600">
            <p>
              <strong>Michael Wiggenhauser</strong>
              <br />
              Selbstständiger Handelsvertreter für ELK Fertighaus
            </p>
            <p>
              Musterstraße 1<br />
              12345 Musterstadt
            </p>
            <p>
              Telefon: {siteConfig.phone}
              <br />
              E-Mail: {siteConfig.email}
            </p>
            <p>
              <strong>Haftungsausschluss:</strong> Platzhalter – Vollständiges
              Impressum wird hier eingefügt.
            </p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
