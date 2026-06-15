import { FC } from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { partnerData } from "@/lib/pages-text-data";

export const PartnerSection: FC = () => {
  return (
    <Section background="gray" id="partner">
      <Container>
        <Heading as="h2" className="text-center">
          {partnerData.title}
        </Heading>
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-8 sm:grid-cols-2">
          {partnerData.partners.map((partner) => (
            <div
              key={partner.name}
              className="flex aspect-video items-center justify-center overflow-hidden rounded-2xl bg-white p-8 shadow-sm"
            >
              {partner.image ? (
                <Image
                  src={partner.image}
                  alt={partner.alt}
                  width={400}
                  height={225}
                  className="h-full w-full object-contain"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              ) : (
                <span className="text-sm font-medium tracking-wide text-gray-400 uppercase">
                  {partner.name}
                </span>
              )}
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default PartnerSection;
