import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { siteConfig, footerLinks } from "@/lib/constants";

const Footer: FC = () => {
  return (
    <footer className="bg-(--color-dark-brown) text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <Image
              src="/images/Wiggenhauser-Logo-light.png"
              alt={siteConfig.name}
              width={160}
              height={40}
              className="object-contain"
              style={{ height: "auto" }}
            />
            <p className="mt-3 text-sm leading-relaxed text-gray-200">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-100 uppercase">
              Navigation
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold tracking-wider text-gray-100 uppercase">
              Rechtliches
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-200 transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div
          className="mt-16 pt-8"
          style={{ borderTop: "1px solid var(--color-divider)" }}
        >
          <p className="text-center text-xs text-gray-300">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
