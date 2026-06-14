"use client";

import { useExitIntent } from "@/hooks/use-exit-intent";
import { X } from "lucide-react";
import Image from "next/image";

export default function ExitPopup() {
  const { showExitPopup, setShowExitPopup } = useExitIntent();

  if (!showExitPopup) return null;

  const scrollToContact = () => {
    setShowExitPopup(false);
    const contactSection = document.getElementById("kontakt");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-300">
      <div className="animate-in zoom-in-95 relative flex w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl duration-300 md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setShowExitPopup(false)}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/80 p-1.5 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Popup schließen"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Image Section */}
        <div className="relative h-48 w-full shrink-0 md:h-auto md:w-1/2">
          <Image
            src="/images/Bungalow-2.webp"
            alt="Modernes Bungalow-Fertighaus mit Pool"
            fill
            priority
            quality={60}
            sizes="(max-width: 768px) 100vw, 384px"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
          <p className="absolute right-4 bottom-4 left-4 text-base leading-snug font-semibold text-white drop-shadow-md">
            Lass uns deinen Wohntraum realisieren.
          </p>
        </div>

        {/* Content Section */}
        <div className="flex flex-col p-8 md:w-1/2 md:p-10">
          <h2 className="mb-2 text-3xl leading-tight font-bold text-gray-900">
            Noch kein Grundstück?
          </h2>
          <h3 className="mb-4 text-lg font-semibold text-(--color-dark-brown)">
            Perfekt für ein erstes Gespräch.
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            Wer früh plant, trifft später bessere Entscheidungen. Gemeinsam
            zeige ich euch, welches Fertighaus zu euren Vorstellungen passt,
            welche Voraussetzungen wichtig sind und helfe sogar bei der
            Grundstückssuche. Kostenlos, unverbindlich und oft der entscheidende
            erste Schritt zum Eigenheim.
          </p>

          <div className="mt-auto flex flex-col gap-3 sm:flex-row sm:items-center">
            <button
              onClick={scrollToContact}
              className="hover:bg-dark-brown/90 rounded-lg bg-(--color-dark-brown) px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:shadow-lg"
            >
              Jetzt Beratung vereinbaren
            </button>
            <button
              onClick={() => setShowExitPopup(false)}
              className="rounded-lg px-5 py-3 text-center text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              Nein, danke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
