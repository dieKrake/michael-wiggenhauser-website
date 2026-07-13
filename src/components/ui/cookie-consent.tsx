"use client";

import { FC, useEffect, useState } from "react";
import Link from "next/link";
import { Cookie } from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "./button";

export const CookieConsent: FC = () => {
  const [isMounted, setIsMounted] = useState(false);
  const [isAnimated, setIsAnimated] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem("cookie-consent-choice");
    if (!consent) {
      const mountTimer = setTimeout(() => setIsMounted(true), 0);
      // Wait for mount, then trigger entrance animation
      const animTimer = setTimeout(() => setIsAnimated(true), 1500);
      return () => {
        clearTimeout(mountTimer);
        clearTimeout(animTimer);
      };
    }
  }, []);

  useEffect(() => {
    const handleOpen = () => {
      setIsMounted(true);
      // Wait a tiny bit to let the DOM node render, then trigger slide up animation
      const animTimer = setTimeout(() => setIsAnimated(true), 50);
      return () => clearTimeout(animTimer);
    };

    window.addEventListener("show-cookie-consent", handleOpen);
    return () => window.removeEventListener("show-cookie-consent", handleOpen);
  }, []);

  const handleDismiss = (choice: "all" | "essential") => {
    localStorage.setItem("cookie-consent-choice", choice);
    setIsAnimated(false);
    // Wait for exit animation to finish before unmounting (300ms)
    const unmountTimer = setTimeout(() => setIsMounted(false), 300);
    return () => clearTimeout(unmountTimer);
  };

  const handleAcceptAll = () => handleDismiss("all");
  const handleAcceptEssential = () => handleDismiss("essential");

  if (!isMounted) return null;

  return (
    <div
      className={cn(
        "fixed right-6 bottom-6 left-6 z-50 mx-auto max-w-md md:right-6 md:left-auto md:mx-0",
        "transform transition-all duration-300 ease-out",
        isAnimated
          ? "translate-y-0 scale-100 opacity-100"
          : "pointer-events-none translate-y-12 scale-95 opacity-0"
      )}
    >
      <div className="relative overflow-hidden rounded-3xl border border-neutral-100 bg-white p-6 shadow-2xl md:p-8">
        {/* Subtle decorative background detail */}
        <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />

        {/* Header */}
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-600">
            <Cookie className="h-6 w-6" />
          </div>
          <div className="flex-1">
            <h3 className="text-base font-bold tracking-wide text-neutral-900 uppercase">
              Bevor wir das Fundament legen...
            </h3>
            <p className="mt-2 text-xs leading-relaxed text-neutral-500">
              Für einen sorgenfreien Rundgang durch die ELK-Traumhäuser und ein
              stabiles Tragwerk dieser Website nutzen wir Cookies.
            </p>
          </div>
        </div>

        {/* Body Info / Links */}
        <p className="mt-4 text-[11px] text-neutral-400">
          Durch den Klick auf „Alle akzeptieren“ stimmt ihr diesem Bauplan zu.
          Informationen findet ihr in unserer{" "}
          <Link
            href="/datenschutz"
            className="font-medium text-neutral-600 underline transition-colors hover:text-black"
          >
            Datenschutzerklärung
          </Link>{" "}
          und unseren{" "}
          <Link
            href="/agb"
            className="font-medium text-neutral-600 underline transition-colors hover:text-black"
          >
            AGB
          </Link>
          .
        </p>

        {/* Actions */}
        <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-end">
          <button
            onClick={handleAcceptEssential}
            className="rounded-xl px-4 py-2 text-center text-xs font-semibold text-neutral-500 transition-all duration-200 hover:bg-neutral-50 hover:text-neutral-900"
          >
            Nur essenzielle Cookies
          </button>
          <Button
            onClick={handleAcceptAll}
            variant="accent"
            size="sm"
            className="w-full text-center sm:w-auto"
          >
            Alle akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
