import { FC } from "react";
import Link from "next/link";
import { siteConfig, footerLinks } from "@/lib/constants";
import Container from "./container";

const Footer: FC = () => {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <Container>
        <div className="grid gap-8 py-12 md:grid-cols-3">
          {/* Brand */}
          <div>
            <p className="text-lg font-bold text-primary-800">
              {siteConfig.name}
            </p>
            <p className="mt-2 text-sm text-gray-600">
              {siteConfig.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Navigation</p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.main.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <p className="text-sm font-semibold text-gray-900">Rechtliches</p>
            <ul className="mt-3 flex flex-col gap-2">
              {footerLinks.legal.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-600 transition-colors hover:text-primary-700"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 py-6">
          <p className="text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {siteConfig.name}. Alle Rechte
            vorbehalten.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
