import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  bauberatungDetails,
  hausmodelle,
  testimonials,
} from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Bauberatung, Finanzierung und ELK Fertighäuser – unsere Leistungen im Überblick.",
};

export default function LeistungenPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-20 md:py-28">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            Wir schaffen Wohnen
          </Heading>
          <p className="text-primary-200 mx-auto mt-6 max-w-2xl text-lg">
            Mit unserem Rundum-Service bieten wir Lösungen für alle, die ein
            Haus bauen wollen. Unser Fokus liegt auf Ihren individuellen
            Wünschen und Bedürfnissen.
          </p>
        </Container>
      </Section>

      {/* Bauberatung & Finanzierung */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            Bauberatung &amp; Finanzierung
          </Heading>
          <div className="mx-auto mt-12 max-w-3xl space-y-6">
            {bauberatungDetails.map((item) => (
              <Card key={item.title}>
                <Heading as="h3">{item.title}</Heading>
                <p className="mt-2 text-gray-600">{item.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* ELK Fertighäuser */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="text-center">
            ELK Fertighäuser
          </Heading>
          <p className="mx-auto mt-4 max-w-2xl text-center text-gray-600">
            Schnelle Lieferzeiten zum Festpreis, sichere Budgetplanung und
            komplette Individualisierbarkeit – als einer der führenden
            Hersteller Europas mit über 60 Jahren Erfahrung.
          </p>
        </Container>
      </Section>

      {/* Hausmodelle */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            Unsere Hausmodelle
          </Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {hausmodelle.map((haus) => (
              <Card key={haus.name}>
                <div className="aspect-video rounded-lg bg-gray-200" />
                <Heading as="h3" className="mt-4">
                  {haus.name}
                </Heading>
                <p className="mt-1 text-sm text-gray-500">
                  {haus.flaeche} · {haus.dach}
                </p>
                <a
                  href={haus.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-700 hover:text-primary-800 mt-3 inline-block text-sm font-medium"
                >
                  Mehr erfahren &rarr;
                </a>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="text-center">
            Zufriedene Bauherren
          </Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {testimonials.map((item) => (
              <Card key={item.name}>
                <p className="text-gray-600 italic">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-4">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="gray">
        <Container className="text-center">
          <Heading as="h2">Sie haben noch Fragen?</Heading>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Kontaktieren Sie uns für ein unverbindliches Beratungsgespräch.
          </p>
          <div className="mt-8">
            <Link href="/kontakt">
              <Button size="lg">Kontakt aufnehmen</Button>
            </Link>
          </div>
        </Container>
      </Section>
    </>
  );
}
