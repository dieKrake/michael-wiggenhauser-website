import { FC } from "react";
import { MapPin, Navigation } from "lucide-react";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

interface MapsLocationProps {
  /**
   * Optional custom iframe source URL from Google Maps.
   * If not provided, a default placeholder/high-quality coordinate will be used.
   */
  iframeSrc?: string;
  /**
   * Optional custom address lines.
   */
  address?: {
    street: string;
    city: string;
    extra?: string;
  };
}

export const MapsLocation: FC<MapsLocationProps> = ({
  iframeSrc = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3354.9729309936783!2d10.087193276951892!3d49.03232398844979!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4798fb309caa44cd%3A0xe5844fe5d39ed93b!2sHauptstra%C3%9Fe%2060%2C%2073489%20Jagstzell!5e0!3m2!1sde!2sde!4v1781106048955!5m2!1sde!2sde", // Roadmap view (!5e0) instead of Satellite view (!5e1)
  address = {
    street: "Musterstraße 1",
    city: "12345 Musterstadt",
    extra: "ELK Musterhaus / Beratungsbüro",
  },
}) => {
  // Generate a Google Maps search/route link from the address
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    `${address.street}, ${address.city}`
  )}`;

  return (
    <Section id="standort" background="gray">
      <Container>
        {/* Header */}
        <div className="max-w-2xl">
          <p className="text-xs font-semibold tracking-[0.2em] text-gray-500 uppercase">
            Standort & Anfahrt
          </p>
          <Heading as="h2" className="mt-3 text-gray-900">
            Besucht mich im Musterhaus
          </Heading>
          <p className="mt-4 text-base leading-relaxed text-gray-600">
            Ich freue mich auf euren Besuch – kommt vorbei und lasst euch
            persönlich und unverbindlich beraten.
          </p>
        </div>

        {/* Map with overlay card */}
        <div className="relative mt-10 md:mt-14">
          <div className="h-[320px] overflow-hidden rounded-2xl shadow-sm ring-1 ring-gray-900/10 sm:h-[420px] lg:h-[560px]">
            <iframe
              src={iframeSrc}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Standort"
              className="h-full w-full"
            />
          </div>

          {/* Info Card */}
          <div className="mt-6 lg:absolute lg:bottom-8 lg:left-8 lg:mt-0 lg:w-full lg:max-w-xs">
            <div className="rounded-2xl bg-white/95 p-6 shadow-xl ring-1 ring-gray-900/5 backdrop-blur-sm sm:p-8">
              {/* Adresse */}
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-neutral-900 text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  {address.extra && (
                    <p className="text-xs font-semibold tracking-widest text-gray-500 uppercase">
                      {address.extra}
                    </p>
                  )}
                  <p className="mt-1 text-base font-semibold text-gray-900">
                    {address.street}
                    <br />
                    {address.city}
                  </p>
                </div>
              </div>

              <Button
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary"
                className="mt-6 w-full gap-2"
              >
                <Navigation className="h-4 w-4" />
                Anfahrt planen
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default MapsLocation;
