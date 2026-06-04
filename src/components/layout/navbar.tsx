"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navigation } from "@/lib/constants";
import Button from "@/components/ui/button";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:h-28 lg:px-8 xl:h-32">
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
          {/* Desktop & Große Bildschirme: Großes Logo (ab lg) */}
          <div className="hidden lg:block">
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
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-[15px] font-medium transition-colors duration-200",
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
  );
};

export default Navbar;
