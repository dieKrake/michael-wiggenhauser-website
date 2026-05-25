"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navigation } from "@/lib/constants";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link href="/" className="text-xl font-semibold tracking-tight">
          {siteConfig.name}
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
          <a
            href="#kontakt"
            className="ml-2 rounded-full bg-black px-5 py-2.5 text-[14px] font-medium text-white transition-opacity hover:opacity-80"
          >
            Kontakt aufnehmen
          </a>
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
