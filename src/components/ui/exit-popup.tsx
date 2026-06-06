"use client";

import { useExitIntent } from "@/hooks/use-exit-intent";
import { X } from "lucide-react";

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
      <div className="animate-in zoom-in-95 relative w-full max-w-lg rounded-2xl border-t-4 border-(--color-dark-brown) bg-white p-8 shadow-2xl duration-300 md:p-10">
        {/* Close Button */}
        <button
          onClick={() => setShowExitPopup(false)}
          className="absolute top-4 right-4 rounded-full p-1.5 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-700"
          aria-label="Popup schließen"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Content Section */}
        <div className="flex flex-col">
          <h2 className="mb-2 text-3xl leading-tight font-bold text-gray-900">
            Warte kurz!
          </h2>
          <h3 className="mb-4 text-lg font-semibold text-(--color-dark-brown)">
            Hast du noch offene Fragen zu deinem Bauvorhaben?
          </h3>
          <p className="mb-8 text-sm leading-relaxed text-gray-600 md:text-base">
            Bevor du gehst: Ein Hausbau wirft viele Fragen auf. Nutze die Chance
            auf ein{" "}
            <span className="font-semibold text-gray-900">
              kostenloses und unverbindliches Erstgespräch
            </span>
            . Ich berate dich gerne persönlich und zeige dir deinen besten Weg
            ins neue Zuhause.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={() => setShowExitPopup(false)}
              className="order-2 rounded-lg px-5 py-3 text-center text-sm font-medium text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-700 sm:order-1"
            >
              Nein, danke
            </button>
            <button
              onClick={scrollToContact}
              className="hover:bg-dark-brown/90 order-1 rounded-lg bg-(--color-dark-brown) px-6 py-3 text-center text-sm font-semibold text-white shadow-md transition-colors duration-200 hover:shadow-lg sm:order-2"
            >
              Jetzt Termin vereinbaren
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
