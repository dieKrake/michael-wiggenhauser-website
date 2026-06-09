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
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const onUpdate = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
      setScrollSnaps(emblaApi.scrollSnapList());
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
              className="flex min-w-0 flex-[0_0_85%] flex-col sm:flex-[0_0_70%] lg:flex-[0_0_calc(33.333%-1rem)]"
            >
              <div className="hlg:p-8 flex flex-1 flex-col justify-between rounded-3xl border border-white/20 bg-white/95 p-6 shadow-md backdrop-blur-sm transition-all duration-300">
                <div className="flex flex-1 flex-col">
                  {/* Subtle Quotation mark and Stars row */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-serif text-4xl leading-none text-neutral-400/35 select-none">
                      „
                    </span>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className="h-4 w-4 fill-current text-amber-500"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="-mt-2 text-base leading-relaxed font-medium text-neutral-700 italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div className="mt-6 border-t border-neutral-100 pt-4">
                  <p className="text-sm font-bold text-neutral-900">
                    {item.name}
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-neutral-500">
                    {item.location}
                  </p>
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
            {scrollSnaps.map((_, i) => (
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
