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
      <div className="animate-in zoom-in-95 relative flex w-full max-w-2xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl duration-300 md:flex-row">
        {/* Close Button */}
        <button
          onClick={() => setShowExitPopup(false)}
          className="absolute top-4 right-4 z-10 rounded-full bg-black/10 p-2 transition-colors hover:bg-black/20"
          aria-label="Popup schließen"
        >
          <X className="h-5 w-5 text-gray-800" />
        </button>

        {/* Image Section - Only visible on desktop/tablet */}
        <div className="bg-primary/10 relative hidden w-2/5 md:block">
          <Image
            src="/images/Bungalow-2.webp"
            alt="Traumhaus Beratung"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 flex items-end bg-linear-to-t from-black/60 to-transparent p-6">
            <p className="font-medium text-white">
              Lass uns deinen Wohntraum realisieren.
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className="flex flex-col justify-center p-8 md:w-3/5 md:p-10">
          <h2 className="mb-4 text-3xl font-bold text-gray-900">Warte kurz!</h2>
          <h3 className="text-primary mb-3 text-xl font-semibold">
            Hast du noch offene Fragen?
          </h3>
          <p className="mb-8 leading-relaxed text-gray-600">
            Bevor du gehst: Ein Hausbau wirft viele Fragen auf. Nutze die Chance
            auf ein{" "}
            <span className="font-semibold text-gray-900">
              kostenloses und unverbindliches Erstgespräch
            </span>
            . Ich berate dich gerne persönlich zu deinem Bauvorhaben.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              onClick={scrollToContact}
              className="hover:bg-dark-brown/90 flex-1 rounded-lg bg-(--color-dark-brown) px-6 py-3.5 font-semibold text-white shadow-md transition-colors duration-200 hover:shadow-lg"
            >
              Jetzt Termin vereinbaren
            </button>
            <button
              onClick={() => setShowExitPopup(false)}
              className="rounded-lg px-6 py-3.5 font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700"
            >
              Nein, danke
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
