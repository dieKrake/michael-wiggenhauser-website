import { FC } from "react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { Accordion } from "@/components/ui/accordion";
import { worriesSection } from "@/lib/pages-text-data";

const WorriesSection: FC = () => {
  const data = worriesSection[0];

  if (!data) return null;

  const accordionItems = data.dropDownItems.map((item) => ({
    question: item.header.trim(),
    answer: item.description.trim(),
  }));

  return (
    <Section background="gray">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[5fr_7fr] lg:items-start lg:gap-16">
          {/* Info-Spalte */}
          <div className="lg:sticky lg:top-28">
            <p className="text-dark-brown text-xs font-bold tracking-[0.2em] uppercase">
              {data.heading}
            </p>
            <Heading as="h2" className="mt-3">
              {data.h2Text}
            </Heading>
            <p className="mt-5 text-base leading-relaxed text-gray-600">
              {data.text}
            </p>
          </div>

          {/* Accordion-Spalte */}
          <Accordion items={accordionItems} />
        </div>
      </Container>
    </Section>
  );
};

export default WorriesSection;
