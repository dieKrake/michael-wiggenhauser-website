import { FC } from "react";
import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/constants";

const Footer: FC = () => {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-semibold">{siteConfig.name}</p>
            <p className="mt-3 text-sm leading-relaxed text-neutral-400">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-neutral-500 uppercase">
              Rechtliches
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-neutral-400 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-neutral-800 pt-8">
          <p className="text-center text-xs text-neutral-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
