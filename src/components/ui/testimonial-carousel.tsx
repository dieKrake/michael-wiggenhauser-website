"use client";

import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface TestimonialCarouselProps {
  items: Array<{ name: string; location: string; quote: string }>;
  className?: string;
}

export function TestimonialCarousel({
  items,
  className,
}: TestimonialCarouselProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: "start",
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onUpdate = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    emblaApi.on("select", onUpdate);
    emblaApi.on("reInit", onUpdate);
    onUpdate();
    return () => {
      emblaApi.off("select", onUpdate);
      emblaApi.off("reInit", onUpdate);
    };
  }, [emblaApi]);

  const showControls = canScrollPrev || canScrollNext;

  return (
    <div className={cn("relative", className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-4 lg:gap-6">
          {items.map((item) => (
            <div
              key={item.name}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_70%] lg:flex-[0_0_calc(33.333%-1rem)]"
            >
              <div className="rounded-2xl bg-white p-6 shadow-sm lg:p-8">
                <p className="text-base leading-relaxed text-neutral-600">
                  &ldquo;{item.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-sm font-semibold">{item.name}</p>
                  <p className="text-sm text-neutral-500">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showControls && (
        <div className="mt-6 flex items-center justify-center gap-4">
          <button
            onClick={scrollPrev}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/40"
            aria-label="Vorheriges Testimonial"
          >
            <ChevronLeft className="h-5 w-5 text-white" />
          </button>

          <div className="flex gap-2">
            {items.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  i === selectedIndex
                    ? "w-6 bg-white"
                    : "w-2 bg-white/40 hover:bg-white/60"
                )}
                aria-label={`Testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={scrollNext}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/40"
            aria-label="Nächstes Testimonial"
          >
            <ChevronRight className="h-5 w-5 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
