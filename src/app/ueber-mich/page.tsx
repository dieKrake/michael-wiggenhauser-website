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
        <Container className="relative z-10 lg:text-center">
          <Heading as="h1" className="text-white">
            Michael Wiggenhauser
          </Heading>
          <p className="mt-6 max-w-2xl text-lg text-white/90 md:text-2xl lg:mx-auto lg:text-center">
            {aboutMeData.intro}
          </p>
        </Container>
      </section>

      {/* USPs */}
      <Section background="gray">
        <Container>
          <Heading as="h2" className="lg:text-center">
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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <Heading as="h2">Sorgenfrei bauen auf Augenhöhe</Heading>
              <p className="mt-4 text-gray-600 md:mt-8 lg:text-lg xl:text-xl">
                Viele Hausberater kennen den Bauprozess nur aus
                Kundengesprächen. Ich habe ihn selbst erlebt. <br />
                Als ich mein eigenes ELK Fertighaus gebaut habe, stand ich vor
                denselben Fragen wie meine Kunden heute: Welche Hausgröße passt
                zu uns? Welche Ausstattungsdetails sind wirklich sinnvoll? Wie
                läuft die Finanzierung ab? Worauf muss man bei Grundstück,
                Planung und Bemusterung achten? <br />
                Genau deshalb weiß ich, wie wichtig eine ehrliche Beratung und
                ein klarer Fahrplan sind. Ich kenne die Herausforderungen, die
                Unsicherheiten und die vielen Entscheidungen, die auf dem Weg
                zum eigenen Zuhause getroffen werden müssen. <br />
                Heute profitiert ihr von dieser Erfahrung. Gemeinsam besprechen
                wir eure Wünsche, Anforderungen und Möglichkeiten und entwickeln
                Schritt für Schritt ein Fertighaus, das wirklich zu euch passt.
                Persönlich, transparent und immer auf Augenhöhe.
              </p>
            </div>
            <div className="aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/michi-treppe.webp"
                alt="Michael Wiggenhauser"
                className="h-full w-full scale-160 object-cover sm:scale-140 lg:scale-120"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      <Section className="mt-0">
        <Container>
          <Heading className="lg:text-center">
            Immer für euch da. <br className="sm:hidden" /> Dort, wo ihr seid.
          </Heading>
          <p className="mt-4 text-base sm:mt-8 lg:mt-12 lg:text-center lg:text-lg xl:text-xl">
            Der Bau eines Hauses wirft viele Fragen auf – nicht nur während der
            Planungsphase, sondern auch zwischendurch. Deshalb lege ich großen
            Wert darauf, für meine Kunden jederzeit erreichbar zu sein. <br />
            <br />
            Ob telefonisch, per E-Mail, WhatsApp oder bei einem persönlichen
            Termin: Ich unterstütze euch bei allen Fragen rund um Fertighaus,
            Finanzierung, Grundstück, Hausplanung und Bauablauf. Besonders
            empfehlen kann ich einen gemeinsamen Besuch in der FertighausWelt
            Günzburg. Dort könnt ihr mit mir gemeinsam ein ELK-Musterhaus
            erleben, Ideen sammeln und ein besseres Gefühl dafür bekommen, wie
            euer zukünftiges Zuhause aussehen könnte. <br /> <br /> Mir ist der
            persönliche Austausch vor Ort besonders wichtig. Egal, wo ihr seid -
            ob in Aalen, Heidenheim, Ulm, Memmingen, Illertissen, ob in Kempten
            oder im Allgäu. Ich bin dort, wo ihr seid - und betreue auch
            regelmäßig Projekte in Augsburg, Günzburg, Neu-Ulm, Dillingen,
            Nördlingen, Donauwörth, Ravensburg, Biberach, Landsberg am Lech und
            vielen weiteren Regionen. <br /> <br /> Egal, ob ihr bereits
            konkrete Pläne habt oder euch erst einmal unverbindlich informieren
            möchtet: Ich freue mich darauf, euch kennenzulernen und euch auf dem
            Weg zu eurem Traumhaus zu begleiten.
          </p>
        </Container>
      </Section>

      {/* Statistiken */}
      <Section className="bg-(--color-dark-element)">
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
