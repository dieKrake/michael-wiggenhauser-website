"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig, navigation } from "@/lib/constants";
import Container from "./container";

const Navbar: FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <Container>
        <nav className="flex h-16 items-center justify-between md:h-20">
          <Link
            href="/"
            className="text-lg font-bold text-primary-800 md:text-xl"
          >
            {siteConfig.name}
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary-700",
                    pathname === item.href
                      ? "text-primary-700"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Burger */}
          <button
            type="button"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </nav>
      </Container>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-gray-100 bg-white md:hidden">
          <Container>
            <ul className="flex flex-col gap-1 py-4">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                      pathname === item.href
                        ? "bg-primary-50 text-primary-700"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </div>
      )}
    </header>
  );
};

export default Navbar;
