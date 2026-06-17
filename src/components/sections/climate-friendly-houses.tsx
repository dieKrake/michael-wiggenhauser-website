import { FC } from "react";
import Image from "next/image";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import { climateFriendlyHousesData } from "@/lib/pages-text-data";

export const ClimateFriendlyHouses: FC = () => {
  return (
    <Section background="white">
      <Container>
        {/* Mobile & Tablet: gestapelte Karten */}
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-1 gap-6 lg:hidden">
          {climateFriendlyHousesData.map((item, index) => (
            <div
              key={index}
              className="flex h-full flex-col overflow-hidden rounded-lg bg-(--color-dark-brown) text-white shadow-md transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-4/3 max-h-[400px] w-full shrink-0">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
              <div className="flex grow flex-col p-6">
                <h3 className="mb-3 text-base leading-snug font-bold tracking-wider whitespace-pre-line uppercase">
                  {item.title}
                </h3>
                <p className="text-md leading-relaxed font-light text-white/90">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop (lg+): Image-Accordion – gehovertes Panel dehnt sich aus */}
        <div className="group/list mt-4 hidden h-[460px] gap-3 lg:flex">
          {climateFriendlyHousesData.map((item, index) => (
            <div
              key={index}
              className="group/item relative flex-1 cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-in-out hover:grow-[2.5]"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 ease-in-out group-hover/item:scale-105"
                sizes="(max-width: 1024px) 0px, 45vw"
              />
              {/* Farbverlauf-Overlay für Lesbarkeit */}
              <div className="from-dark-brown via-dark-brown/55 to-dark-brown/10 group-hover/item:via-dark-brown/70 absolute inset-0 bg-linear-to-t transition-opacity duration-500" />

              <div className="absolute bottom-0 left-0 flex w-full flex-col p-6 text-white transition-[width] duration-500 ease-in-out group-hover/item:w-[380px] xl:group-hover/item:w-[460px]">
                <h3 className="text-lg leading-snug font-bold tracking-wider whitespace-pre-line uppercase opacity-100 transition-opacity delay-500 duration-300 group-hover/item:opacity-100! group-hover/item:delay-0 group-hover/list:opacity-0 group-hover/list:delay-0 group-hover/list:duration-200">
                  {item.title}
                </h3>
                <p className="mt-0 max-h-0 overflow-hidden text-lg leading-relaxed font-light whitespace-pre-line text-white/90 opacity-0 transition-all duration-500 ease-in-out group-hover/item:mt-3 group-hover/item:max-h-72 group-hover/item:opacity-100">
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
