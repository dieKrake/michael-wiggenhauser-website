"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CarouselSlide {
  src?: string;
  alt?: string;
  title?: string;
  text?: string;
  bgClass?: string;
}

interface ImageCarouselProps {
  images?: Array<{ src: string; alt: string }>;
  slides?: Array<CarouselSlide>;
  className?: string;
  sizes?: string;
  quality?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
  showArrows?: boolean;
  bgImage?: string;
  bgOverlayClass?: string;
}

export function ImageCarousel({
  images,
  slides,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  quality = 80,
  autoplay = false,
  autoplayInterval = 6000,
  showArrows = true,
  bgImage,
  bgOverlayClass = "bg-black/60",
}: ImageCarouselProps) {
  // Use slides if provided, otherwise convert images to the slides format
  const items: CarouselSlide[] =
    slides ||
    (images ? images.map((img) => ({ src: img.src, alt: img.alt })) : []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback(
    (index: number) => emblaApi?.scrollTo(index),
    [emblaApi]
  );

  useEffect(() => {
    if (!emblaApi) return;
    const onSelect = () => setSelectedIndex(emblaApi.selectedScrollSnap());
    emblaApi.on("select", onSelect);
    onSelect();
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    let intervalId: NodeJS.Timeout | null = null;

    const startAutoplay = () => {
      // Clear any existing interval to be safe
      if (intervalId) clearInterval(intervalId);
      intervalId = setInterval(() => {
        emblaApi.scrollNext();
      }, autoplayInterval);
    };

    const stopAutoplay = () => {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopAutoplay();
      } else {
        startAutoplay();
      }
    };

    // Start only if document is visible
    if (!document.hidden) {
      startAutoplay();
    }

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopAutoplay();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [emblaApi, autoplay, autoplayInterval]);

  if (items.length === 0) return null;

  const isTextOnly = items.every((item) => !item.src);

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "relative overflow-hidden rounded-2xl",
          isTextOnly &&
            !bgImage &&
            (items[0]?.bgClass || "bg-(--color-dark-brown) text-white")
        )}
      >
        {/* Statisches Hintergrundbild mit Abdunkelung – außerhalb von emblaRef */}
        {bgImage && (
          <>
            <Image
              src={bgImage}
              alt="Hintergrund"
              fill
              className="pointer-events-none object-cover object-center"
              sizes={sizes}
              quality={quality}
              priority
            />
            <div
              className={cn(
                "pointer-events-none absolute inset-0",
                bgOverlayClass
              )}
            />
          </>
        )}

        {/* Embla Viewport – enthält nur den Slides-Container */}
        <div className="relative z-10" ref={emblaRef}>
          <div className="flex">
            {items.map((item, index) => (
              <div
                key={item.alt || item.title || index}
                className="relative min-w-0 flex-[0_0_100%]"
              >
                {item.src ? (
                  <Image
                    src={item.src}
                    alt={item.alt || ""}
                    width={1200}
                    height={675}
                    className="aspect-video w-full object-cover"
                    sizes={sizes}
                    quality={quality}
                    priority={index === 0}
                  />
                ) : (
                  <div
                    className={cn(
                      "flex aspect-video w-full flex-col items-center justify-center p-8 text-center sm:p-12 md:p-16 lg:p-20",
                      bgImage
                        ? "bg-transparent text-white"
                        : isTextOnly
                          ? "bg-transparent text-current"
                          : item.bgClass || "bg-(--color-dark-brown) text-white"
                    )}
                  >
                    {item.title && (
                      <h3 className="mb-6 text-lg font-bold tracking-tight sm:text-2xl md:text-3xl lg:text-4xl">
                        {item.title}
                      </h3>
                    )}
                    {item.text && (
                      <p className="sm:text-md max-w-3xl text-base leading-relaxed font-light text-white/90 md:text-lg lg:text-xl">
                        {item.text}
                      </p>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {items.length > 1 && (
        <>
          {showArrows && (
            <>
              <button
                onClick={scrollPrev}
                className="absolute top-1/2 left-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition hover:bg-white"
                aria-label="Vorheriges Bild"
              >
                <ChevronLeft className="h-5 w-5 text-gray-700" />
              </button>
              <button
                onClick={scrollNext}
                className="absolute top-1/2 right-3 z-10 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 shadow-md backdrop-blur-sm transition hover:bg-white"
                aria-label="Nächstes Bild"
              >
                <ChevronRight className="h-5 w-5 text-gray-700" />
              </button>
            </>
          )}

          <div className="mt-3 flex justify-center gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === selectedIndex
                    ? "w-6 bg-gray-800"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Bild ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
