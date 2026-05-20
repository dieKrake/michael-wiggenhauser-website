import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays, MapPin } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { events } from "@/lib/placeholder-data";

export const metadata: Metadata = {
  title: "Aktuelles & Termine",
  description: "Aktuelle Termine, Messen und Veranstaltungen rund um ELK Fertighäuser.",
};

export default function AktuellesPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-20 md:py-28">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            Aktuelles &amp; Termine
          </Heading>
        </Container>
      </Section>

      {/* Event-Liste */}
      <Section background="gray">
        <Container>
          <div className="mx-auto max-w-3xl space-y-6">
            {events.map((event) => (
              <Card key={event.title}>
                <div className="flex items-start gap-4">
                  <CalendarDays className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                  <div>
                    <p className="text-sm font-medium text-primary-700">
                      {event.date}
                      {event.dateEnd && ` – ${event.dateEnd}`}
                    </p>
                    <Heading as="h3" className="mt-1">
                      {event.title}
                    </Heading>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <MapPin className="h-4 w-4" />
                      {event.location}
                    </div>
                    <p className="mt-2 text-gray-600">{event.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA */}
      <Section background="white">
        <Container className="text-center">
          <Heading as="h2">Sie haben Fragen?</Heading>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Setzen Sie sich mit mir in Kontakt zur Terminvereinbarung.
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
