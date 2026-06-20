import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import KontaktFormularWrapper from "@/components/sections/kontakt-formular-wrapper";
import { siteConfig } from "@/lib/constants";
import "./globals.css";
import WhatsAppButton from "@/components/ui/whatsapp-button";
import CookieConsent from "@/components/ui/cookie-consent";
import ExitPopup from "@/components/ui/exit-popup";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${inter.variable} h-full scroll-smooth antialiased`}
      style={{ scrollPaddingTop: "80px" }}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col">
        <Navbar />
        <WhatsAppButton variant="floating" phoneNumber={siteConfig.phone} />
        <main className="flex-1">{children}</main>
        <KontaktFormularWrapper />
        <Footer />
        <CookieConsent />
        <ExitPopup />
        <SpeedInsights />
      </body>
    </html>
  );
}
