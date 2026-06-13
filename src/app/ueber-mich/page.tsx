import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Card from "@/components/ui/card";
import { aboutMeData, aboutMeStats } from "@/lib/pages-text-data";

export const metadata: Metadata = {
  title:
    "ELK Fachberater Michael Wiggenhauser | Sorgenfrei bauen auf Augenhöhe",
  description:
    "Euer persönlicher Ansprechpartner für ELK Fertighäuser. Stets erreichbar und dort, wo ihr seid.",
};

export default function UeberMichPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative mx-auto max-h-[500px] min-h-[370px] max-w-[2000px] overflow-hidden py-32 sm:min-h-[400px] md:py-60 lg:max-h-[400px] lg:min-h-[300px] lg:py-68">
        <Image
          src="/images/michi-treppe.webp"
          alt="Michael Wiggenhauser – Persönliche Bauberatung für ELK Fertighäuser"
          fetchPriority="high"
          fill
          quality={80}
          className="translate-x-9 translate-y-6 scale-260 object-cover object-center sm:translate-x-12 sm:scale-200 sm:object-[center_48%] md:scale-150 md:object-[center_50%] lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:object-[center_50%] xl:object-[center_47%]"
          priority
          sizes="(max-width: 640px) 250vw, (max-width: 1024px) 150vw, 100vw"
        />
        <div className="absolute inset-0 hidden bg-black/35 md:block" />
        <Container className="relative z-10 hidden md:block lg:text-center">
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
              <p className="mt-4 text-gray-600 md:mt-8">
                Viele Hausberater kennen den Bauprozess nur aus
                Kundengesprächen. Ich habe ihn selbst erlebt. <br />
                Als ich mein eigenes ELK Fertighaus gebaut habe, stand ich vor
                denselben Fragen wie meine Kunden heute: Welche Hausgröße passt
                zu uns? Welche Ausstattungsdetails sind wirklich sinnvoll? Wie
                läuft die Finanzierung ab? Worauf muss man bei Grundstück,
                Planung und Bemusterung achten? <br /> <br />
                Genau deshalb weiß ich, wie wichtig eine ehrliche Beratung und
                ein klarer Fahrplan sind. Ich kenne die Herausforderungen, die
                Unsicherheiten und die vielen Entscheidungen, die auf dem Weg
                zum eigenen Zuhause getroffen werden müssen. <br /> <br />
                Heute profitiert ihr von dieser Erfahrung. Gemeinsam besprechen
                wir eure Wünsche, Anforderungen und Möglichkeiten und entwickeln
                Schritt für Schritt ein Fertighaus, das wirklich zu euch passt.
                Persönlich, transparent und immer auf Augenhöhe.
              </p>
            </div>
            <div className="order-first aspect-4/3 overflow-hidden rounded-2xl lg:order-0">
              <Image
                src="/images/michi-about-2.webp"
                alt="Michael Wiggenhauser"
                className="h-full w-full scale-120 object-cover object-[center_44%] sm:scale-110 lg:scale-110"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </Container>
      </Section>

      {/* Statistiken */}
      <Section className="bg-(--color-dark-brown)">
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

      {/* Persönliche Geschichte */}
      <Section background="white" className="py-16 sm:pb-8 md:pt-24 md:pb-8">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="aspect-4/3 overflow-hidden rounded-2xl">
              <Image
                src="/images/michi-about-3.webp"
                alt="Michael Wiggenhauser"
                className="h-full w-full scale-120 object-cover object-[center_38%] sm:scale-110 lg:scale-110"
                width={1000}
                height={600}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div>
              <Heading as="h2" className="text-left">
                Immer für euch da. <br /> Dort, wo ihr seid.
              </Heading>
              <p className="mt-4 text-left text-gray-600 md:mt-8">
                Der Bau eines Hauses wirft viele Fragen auf – nicht nur während
                der Planungsphase, sondern auch zwischendurch. Deshalb lege ich
                großen Wert darauf, für meine Kunden jederzeit erreichbar zu
                sein. <br />
                <br />
                Ob telefonisch, per E-Mail, WhatsApp oder bei einem persönlichen
                Termin: Ich unterstütze euch bei allen Fragen rund um
                Fertighaus, Finanzierung, Grundstück, Hausplanung und Bauablauf.
                Besonders empfehlen kann ich einen gemeinsamen Besuch in der
                FertighausWelt Günzburg. Dort könnt ihr mit mir gemeinsam ein
                ELK-Musterhaus erleben, Ideen sammeln und ein besseres Gefühl
                dafür bekommen, wie euer zukünftiges Zuhause aussehen könnte.{" "}
                <br /> <br /> Mir ist der persönliche Austausch vor Ort
                besonders wichtig. Egal, wo ihr seid - ob in Aalen, Heidenheim,
                Ulm, Memmingen, Illertissen, ob in Kempten oder im Allgäu. Ich
                bin dort, wo ihr seid - und betreue auch regelmäßig Projekte in
                Augsburg, Günzburg, Neu-Ulm, Dillingen, Nördlingen, Donauwörth,
                Ravensburg, Biberach, Landsberg am Lech und vielen weiteren
                Regionen. <br /> <br /> Egal, ob ihr bereits konkrete Pläne habt
                oder euch erst einmal unverbindlich informieren möchtet: Ich
                freue mich darauf, euch kennenzulernen und euch auf dem Weg zu
                eurem Traumhaus zu begleiten.
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
