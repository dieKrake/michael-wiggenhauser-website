import { FC } from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import { climateFriendlyHousesData } from "@/lib/pages-text-data";

export const ClimateFriendlyHouses: FC = () => {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 lg:max-w-none lg:grid-cols-4 lg:gap-4">
          {climateFriendlyHousesData.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-lg bg-(--color-dark-element) text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 max-h-[400px] w-full shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 250px"
                />
              </div>
              <div className="flex grow flex-col p-6">
                <h3 className="mb-3 text-base leading-snug font-bold tracking-wider uppercase">
                  {item.title}
                </h3>
                <p className="text-sm leading-relaxed font-light text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
};

export default ClimateFriendlyHouses;
