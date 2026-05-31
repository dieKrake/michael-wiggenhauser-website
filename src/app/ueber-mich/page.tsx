import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import Button from "@/components/ui/button";
import { aboutMeData, aboutMeStats } from "@/lib/pages-text-data";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Michael Wiggenhauser – Ihr erfahrener Fachberater für ELK Fertighäuser.",
};

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 md:py-28">
        <Image
          src="/images/Hintergrund-Banner-über-mich.webp"
          alt="Michael Wiggenhauser – Persönliche Bauberatung für ELK Fertighäuser"
          fetchPriority="high"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/50" />
        <Container className="relative z-10 text-center">
          <Heading as="h1" className="text-white">
            Über mich
          </Heading>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/90">
            {aboutMeData.intro}
          </p>
        </Container>
      </section>

      {/* USPs */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="text-center">
            Warum genau mit mir?
          </Heading>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {aboutMeData.usps.map((usp) => (
              <Card key={usp.title}>
                <Heading as="h3">{usp.title}</Heading>
                <p className="mt-2 text-gray-600">{usp.description}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      {/* Persönliche Geschichte */}
      <Section background="white">
        <Container>
          <div className="grid items-center gap-12 md:grid-cols-2">
            <div>
              <Heading as="h2">Zusammenarbeit auf Augenhöhe</Heading>
              <p className="mt-4 text-gray-600">
                In einem Fertighaus habe ich mit meiner Familie unser
                gemeinsames Heim gefunden. Als Privatperson stehe ich selbst
                hinter dem Fertighaus-Konzept und lasse meine persönlichen
                Erfahrungen in die Beratung einfließen.
              </p>
            </div>
            <Image
              src="/images/michi-treppe.webp"
              alt="Michael Wiggenhauser"
              className="aspect-4/3 rounded-2xl object-cover"
              width={1000}
              height={750}
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Container>
      </Section>

      {/* Statistiken */}
      <Section background="primary">
        <Container>
          <Heading as="h2" className="text-center text-white">
            Erfolgsbilanz
          </Heading>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {aboutMeStats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-4xl font-bold text-white md:text-5xl">
                  {stat.value}
                  {stat.suffix}
                </p>
                <p className="text-primary-200 mt-2 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </Container>
      </Section>
    </>
  );
}
