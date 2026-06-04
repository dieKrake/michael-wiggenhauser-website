"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navigation } from "@/lib/constants";
import Button from "@/components/ui/button";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Spacer: reserviert konstant den Platz der ungescrollten Navbar,
          damit die fixed-Navbar keinen Layout-Reflow auslöst. */}
      <div className="h-20 lg:h-28 xl:h-32" aria-hidden="true" />
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 bg-white/80 backdrop-blur-md transition-all duration-300",
          isScrolled
            ? "border-b border-neutral-100 bg-white/95 shadow-sm"
            : "border-b border-transparent"
        )}
      >
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between px-6 transition-all duration-300 lg:px-8",
            isScrolled ? "h-20" : "h-20 lg:h-28 xl:h-32"
          )}
        >
          <Link href="/" className="flex items-center">
            {/* Mobil & Tablet: Kleines Logo (unter lg) */}
            <div className="block lg:hidden">
              <Image
                src="/images/Wiggenhauser-Logo-dark-small.png"
                alt={siteConfig.name}
                width={125}
                height={40}
                className="w-[60px] object-contain md:w-[70px]"
                style={{ height: "auto" }}
                priority
              />
            </div>
            {/* Desktop & Große Bildschirme: Logo mit geschmeidigem Wechsel (ab lg) */}
            <div className="hidden lg:relative lg:block lg:h-10 lg:w-[130px] xl:w-[150px]">
              {/* Großes Logo (sichtbar wenn nicht gescrollt) */}
              <div
                className={cn(
                  "absolute top-1/2 left-0 -translate-y-1/2 transition-all ease-in-out",
                  isScrolled
                    ? "pointer-events-none opacity-0 delay-0 duration-300"
                    : "opacity-100 delay-300 duration-500"
                )}
              >
                <Image
                  src="/images/Wiggenhauser-Logo-dark.png"
                  alt={siteConfig.name}
                  width={100}
                  height={30}
                  className="w-[130px] object-contain xl:w-[150px]"
                  style={{ height: "auto" }}
                  priority
                />
              </div>
              {/* Kleines Logo (sichtbar wenn gescrollt) */}
              <div
                className={cn(
                  "absolute top-1/2 left-0 -translate-y-1/2 transition-all ease-in-out",
                  isScrolled
                    ? "opacity-100 delay-300 duration-500"
                    : "pointer-events-none opacity-0 delay-0 duration-300"
                )}
              >
                <Image
                  src="/images/Wiggenhauser-Logo-dark-small.png"
                  alt={siteConfig.name}
                  width={125}
                  height={40}
                  className="w-[55px] object-contain xl:w-[60px]"
                  style={{ height: "auto" }}
                  priority
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-10 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-medium transition-all duration-300",
                  isScrolled ? "text-sm" : "text-base",
                  pathname === item.href
                    ? "text-black"
                    : "text-neutral-500 hover:text-black"
                )}
              >
                {item.label}
              </Link>
            ))}
            <Button href="#kontakt" variant="accent" size="sm" className="ml-2">
              Kontakt aufnehmen
            </Button>
          </nav>

          {/* Mobile Burger */}
          <button
            type="button"
            className="lg:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="border-t border-neutral-100 bg-white lg:hidden">
            <nav className="mx-auto max-w-7xl px-6 py-6">
              <ul className="flex flex-col gap-1">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-lg px-4 py-3 text-[15px] font-medium transition-colors",
                        pathname === item.href
                          ? "bg-neutral-50 text-black"
                          : "text-neutral-500 hover:bg-neutral-50 hover:text-black"
                      )}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
