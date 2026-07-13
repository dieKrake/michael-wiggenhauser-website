"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";
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
  allowFullscreen?: boolean;
}

export function ImageCarousel({
  images,
  slides,
  className,
  sizes = "(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px",
  quality = 65,
  autoplay = false,
  autoplayInterval = 6000,
  showArrows = true,
  bgImage,
  bgOverlayClass = "bg-black/60",
  allowFullscreen = true,
}: ImageCarouselProps) {
  // Use slides if provided, otherwise convert images to the slides format
  const items: CarouselSlide[] =
    slides ||
    (images ? images.map((img) => ({ src: img.src, alt: img.alt })) : []);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [fullscreenStartIndex, setFullscreenStartIndex] = useState(0);
  const [fullscreenSelectedIndex, setFullscreenSelectedIndex] = useState(0);
  const [fullscreenRef, fullscreenApi] = useEmblaCarousel({
    loop: true,
    startIndex: fullscreenStartIndex,
  });

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

  // Fullscreen management
  const openFullscreen = (index: number) => {
    if (!allowFullscreen) return;
    setFullscreenStartIndex(index);
    setFullscreenSelectedIndex(index);
    setIsFullscreen(true);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
  };

  // Handle ESC key to close fullscreen
  useEffect(() => {
    if (!isFullscreen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeFullscreen();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isFullscreen]);

  // Listen to fullscreen carousel select events
  useEffect(() => {
    if (!fullscreenApi) return;
    const onSelect = () => {
      setFullscreenSelectedIndex(fullscreenApi.selectedScrollSnap());
    };
    fullscreenApi.on("select", onSelect);
    onSelect();
    return () => {
      fullscreenApi.off("select", onSelect);
    };
  }, [fullscreenApi, isFullscreen]);

  useEffect(() => {
    document.body.style.overflow = isFullscreen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isFullscreen]);

  const fullscreenScrollPrev = useCallback(
    () => fullscreenApi?.scrollPrev(),
    [fullscreenApi]
  );
  const fullscreenScrollNext = useCallback(
    () => fullscreenApi?.scrollNext(),
    [fullscreenApi]
  );

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
              className="animate-ken-burns pointer-events-none object-cover object-center will-change-transform"
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
                  <button
                    onClick={() => openFullscreen(index)}
                    className={cn(
                      "relative aspect-video w-full overflow-hidden rounded-2xl",
                      allowFullscreen && "group cursor-pointer"
                    )}
                    disabled={!allowFullscreen}
                  >
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
                    {allowFullscreen && (
                      <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all duration-300 group-hover:bg-black/20">
                        <div className="opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                          <Maximize2 className="h-10 w-10 text-white drop-shadow-lg" />
                        </div>
                      </div>
                    )}
                  </button>
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

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div
          className="fixed inset-0 z-100 flex flex-col bg-black/95 backdrop-blur-sm"
          onClick={closeFullscreen}
        >
          {/* Close Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              closeFullscreen();
            }}
            className="absolute top-4 right-4 z-110 rounded-full p-2 text-white transition-colors hover:bg-white/10"
            aria-label="Vollbild schließen"
          >
            <X className="h-8 w-8" />
          </button>

          {/* Fullscreen Embla Carousel */}
          <div
            className="relative w-full flex-1"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative h-full w-full" ref={fullscreenRef}>
              <div className="flex h-full">
                {items.map((item, index) => (
                  <div
                    key={item.alt || item.title || index}
                    className="relative flex min-w-0 flex-[0_0_100%] items-center justify-center p-4 md:p-12"
                  >
                    {item.src ? (
                      <div className="relative flex h-full w-full items-center justify-center">
                        <Image
                          src={item.src}
                          alt={item.alt || ""}
                          fill
                          className="object-contain"
                          sizes="100vw"
                          quality={80}
                          priority={Math.abs(index - fullscreenStartIndex) <= 1}
                        />
                      </div>
                    ) : (
                      <div
                        className={cn(
                          "flex h-full w-full flex-col items-center justify-center p-8 text-center",
                          item.bgClass || "bg-(--color-dark-brown) text-white"
                        )}
                      >
                        {item.title && (
                          <h3 className="mb-6 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                            {item.title}
                          </h3>
                        )}
                        {item.text && (
                          <p className="max-w-3xl text-lg leading-relaxed font-light text-white/90 md:text-xl lg:text-2xl">
                            {item.text}
                          </p>
                        )}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Fullscreen Navigation Arrows */}
            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fullscreenScrollPrev();
                  }}
                  className="absolute top-1/2 left-4 z-110 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Vorheriges Bild"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    fullscreenScrollNext();
                  }}
                  className="absolute top-1/2 right-4 z-110 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                  aria-label="Nächstes Bild"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}
          </div>

          {/* Fullscreen Indicators */}
          {items.length > 1 && (
            <div className="absolute right-0 bottom-6 left-0 flex justify-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => {
                    e.stopPropagation();
                    fullscreenApi?.scrollTo(i);
                  }}
                  className={cn(
                    "h-2 rounded-full transition-all duration-300",
                    i === fullscreenSelectedIndex
                      ? "w-6 bg-white"
                      : "w-2 bg-white/40 hover:bg-white/60"
                  )}
                  aria-label={`Bild ${i + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
