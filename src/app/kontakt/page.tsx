import type { Metadata } from "next";
import { Phone, Mail, MapPin } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Kontaktiert Michael Wiggenhauser für ein unverbindliches Beratungsgespräch.",
};

export default function KontaktPage() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-20 md:py-28">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            Kontakt
          </Heading>
          <p className="text-primary-200 mx-auto mt-6 max-w-2xl text-lg">
            Ihr habt Fragen? Ich freue mich auf eure Anfrage.
          </p>
        </Container>
      </Section>

      {/* Kontakt-Info + Formular */}
      <Section background="gray">
        <Container>
          <div className="grid gap-12 md:grid-cols-2">
            {/* Kontaktdaten */}
            <div>
              <Heading as="h2">Kontaktdaten</Heading>
              <div className="mt-8 space-y-6">
                <div className="flex items-start gap-4">
                  <Phone className="text-primary-600 mt-1 h-5 w-5" />
                  <div>
                    <p className="font-medium text-gray-900">Telefon</p>
                    <p className="text-gray-600">{siteConfig.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <Mail className="text-primary-600 mt-1 h-5 w-5" />
                  <div>
                    <p className="font-medium text-gray-900">E-Mail</p>
                    <p className="text-gray-600">{siteConfig.email}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <MapPin className="text-primary-600 mt-1 h-5 w-5" />
                  <div>
                    <p className="font-medium text-gray-900">Adresse</p>
                    <p className="text-gray-600">
                      Musterstraße 1<br />
                      12345 Musterstadt
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Formular */}
            <Card hover={false}>
              <Heading as="h2">Schreibt mir</Heading>
              <form className="mt-6 space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
                    placeholder="Dein vollständiger Name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    E-Mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
                    placeholder="deine@email.de"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Nachricht
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="focus:border-primary-500 focus:ring-primary-500 mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900"
                    placeholder="Deine Nachricht..."
                  />
                </div>
                <div className="flex items-start gap-2">
                  <input
                    type="checkbox"
                    id="datenschutz"
                    name="datenschutz"
                    className="text-primary-600 focus:ring-primary-500 mt-1 h-4 w-4 rounded border-gray-300"
                  />
                  <label
                    htmlFor="datenschutz"
                    className="text-sm text-gray-600"
                  >
                    Ich habe die Datenschutzerklärung gelesen und stimme der
                    Verarbeitung meiner Daten zu.
                  </label>
                </div>
                <Button type="submit" variant="accent" className="w-full">
                  Nachricht senden
                </Button>
              </form>
            </Card>
          </div>
        </Container>
      </Section>
    </>
  );
}
