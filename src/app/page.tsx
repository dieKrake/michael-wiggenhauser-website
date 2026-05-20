import Link from "next/link";
import { Home, Calculator, Users, Trees, Leaf, Heart, Zap } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import {
  heroData,
  leistungsKarten,
  faqItems,
  nachhaltigkeitFeatures,
  testimonials,
} from "@/lib/placeholder-data";

const iconMap = {
  calculator: Calculator,
  home: Home,
  users: Users,
  trees: Trees,
  leaf: Leaf,
  heart: Heart,
  zap: Zap,
};

export default function Startseite() {
  return (
    <>
      {/* Hero */}
      <Section background="primary" className="py-24 md:py-36">
        <Container className="text-center">
          <Heading as="h1" className="text-white">
            {heroData.headline}
          </Heading>
          <p className="text-primary-200 mx-auto mt-6 max-w-2xl text-lg md:text-xl">
            {heroData.subline}
          </p>
          <div className="mt-10">
            <Link href={heroData.ctaHref}>
              <Button variant="secondary" size="lg">
                {heroData.ctaText}
              </Button>
            </Link>
          </div>
        </Container>
      </Section>

      {/* Leistungs-Karten */}
      <Section background="gray">
        <Container>
          <div className="grid gap-8 md:grid-cols-3">
            {leistungsKarten.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Card key={item.title}>
                  {Icon && <Icon className="text-primary-600 h-10 w-10" />}
                  <Heading as="h3" className="mt-4">
                    {item.title}
                  </Heading>
                  <p className="mt-3 text-gray-600">{item.description}</p>
                  <Link
                    href={item.href}
                    className="text-primary-700 hover:text-primary-800 mt-4 inline-block text-sm font-medium"
                  >
                    Mehr erfahren &rarr;
                  </Link>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Statistik-Banner */}
      <Section background="white">
        <Container className="text-center">
          <p className="text-lg font-medium text-gray-500 md:text-xl">
            In nur{" "}
            <span className="text-primary-700 text-3xl font-bold">
              23 Sekunden
            </span>{" "}
            wächst in Deutschland das Holz für ein Fertighaus nach.
          </p>
        </Container>
      </Section>

      {/* FAQ */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            Häufig gestellte Fragen
          </Heading>
          <div className="mx-auto mt-12 max-w-3xl divide-y divide-gray-200">
            {faqItems.map((item) => (
              <details key={item.question} className="group py-5">
                <summary className="flex cursor-pointer items-center justify-between text-lg font-medium text-gray-900">
                  {item.question}
                  <span className="text-primary-600 ml-4 transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 text-gray-600">{item.answer}</p>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nachhaltigkeit */}
      <Section background="white">
        <Container>
          <Heading as="h2" className="text-center">
            Nachhaltig und effizient
          </Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {nachhaltigkeitFeatures.map((item) => {
              const Icon = iconMap[item.icon as keyof typeof iconMap];
              return (
                <Card key={item.title} className="text-center">
                  {Icon && (
                    <Icon className="text-primary-600 mx-auto h-10 w-10" />
                  )}
                  <Heading as="h3" className="mt-4">
                    {item.title}
                  </Heading>
                  <p className="mt-3 text-sm text-gray-600">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* E-Book CTA */}
      <Section background="primary">
        <Container className="text-center">
          <Heading as="h2" className="text-white">
            Kostenloses E-Book
          </Heading>
          <p className="text-primary-200 mx-auto mt-4 max-w-xl">
            Ihr Leitfaden zum passenden Fertighausanbieter. Verschaffen Sie sich
            einen genauen Überblick.
          </p>
          <div className="mt-8">
            <Button variant="secondary" size="lg">
              Zum kostenlosen E-Book
            </Button>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section background="gray">
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

      {/* Kontakt CTA */}
      <Section background="white">
        <Container className="text-center">
          <Heading as="h2">Sie haben noch Fragen?</Heading>
          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Ich freue mich, Sie kennenzulernen. Vereinbaren Sie ein
            unverbindliches Erstgespräch.
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
