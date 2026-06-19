import { FC } from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { partnerData } from "@/lib/pages-text-data";
import { cn } from "@/lib/utils";

const bgClasses: Record<string, string> = {
  light: "bg-white",
  dark: "bg-(--color-dark-brown)",
};

export const PartnerSection: FC = () => {
  return (
    <Section background="gray" id="partner">
      <Container>
        <Heading as="h2" className="text-center">
          {partnerData.title}
        </Heading>
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-3">
          {partnerData.partners.map((partner) => (
            <div
              key={partner.name}
              className={cn(
                "flex aspect-video items-center justify-center overflow-hidden rounded-2xl p-8 shadow-sm",
                bgClasses[partner.bg] ?? "bg-white"
              )}
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
