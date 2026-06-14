import { useState, useEffect } from "react";

const STORAGE_KEY = "exitPopupLastSeen";
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export function useExitIntent() {
  const [showExitPopup, setShowExitPopup] = useState(false);

  useEffect(() => {
    // Only run on client
    if (typeof window === "undefined") return;

    const handleMouseLeave = (e: MouseEvent) => {
      // Check if mouse left the top of the viewport
      if (e.clientY <= 0) {
        // Show the popup at most once per day (persisted across sessions)
        const lastSeen = Number(localStorage.getItem(STORAGE_KEY));
        const isFresh = lastSeen && Date.now() - lastSeen < ONE_DAY_MS;

        if (!isFresh) {
          setShowExitPopup(true);
          localStorage.setItem(STORAGE_KEY, String(Date.now()));
        }
      }
    };

    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return { showExitPopup, setShowExitPopup };
}
