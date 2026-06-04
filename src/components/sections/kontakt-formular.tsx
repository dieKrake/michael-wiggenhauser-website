import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import Button from "@/components/ui/button";
import { siteConfig } from "@/lib/constants";

const KontaktFormular = () => {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 bg-linear-to-b from-white via-neutral-50 to-neutral-100 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2 md:items-stretch">
          {/* Info-Seite (Personal Trust & Quote) */}
          <div className="flex h-full flex-col justify-between lg:pr-4">
            <div>
              {/* Profil-Header */}
              <div className="flex items-center gap-5">
                <div className="relative h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-neutral-200 shadow-md">
                  <Image
                    src="/images/michi-kontakt.webp"
                    alt="Michael Wiggenhauser"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <span className="text-dark-brown inline-block text-[11px] font-bold tracking-widest uppercase">
                    Euer ELK Bauberater
                  </span>
                  <h3 className="mt-1 text-xl leading-none font-bold text-neutral-900">
                    Michael Wiggenhauser
                  </h3>
                  <p className="mt-1.5 text-xs font-semibold text-neutral-500">
                    Region Bodensee, Allgäu & Oberschwaben
                  </p>
                </div>
              </div>

              {/* Zitat-Box */}
              <div className="border-dark-brown/10 bg-dark-brown/5 relative mt-6 rounded-2xl border p-6 text-neutral-700 italic">
                <span className="text-dark-brown/15 absolute -top-4 -left-1 font-serif text-6xl leading-none select-none">
                  „
                </span>
                <p className="relative z-10 text-[15px] leading-relaxed font-medium">
                  Ein Haus baut man meistens nur einmal im Leben. Lasst uns
                  diesen Weg von Anfang an gemeinsam gehen – ehrlich,
                  transparent und völlig sorgenfrei.
                </p>
                <p className="text-dark-brown relative z-10 mt-3 text-xs font-bold tracking-wider uppercase not-italic">
                  — Michael Wiggenhauser
                </p>
              </div>
            </div>

            {/* Premium Klickbare Kontakt-Karten */}
            <div className="mt-8 space-y-3 border-t border-neutral-200/60 pt-6">
              <a
                href={`tel:${siteConfig.phone}`}
                className="group hover:border-dark-brown/20 flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="bg-dark-brown/5 text-dark-brown group-hover:bg-dark-brown flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                    Telefonisch erreichbar
                  </p>
                  <p className="group-hover:text-dark-brown mt-0.5 text-sm font-bold text-neutral-900 transition-colors">
                    {siteConfig.phone}
                  </p>
                </div>
              </a>

              <a
                href={`mailto:${siteConfig.email}`}
                className="group hover:border-dark-brown/20 flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-3.5 transition-all duration-300 hover:bg-white hover:shadow-md"
              >
                <div className="bg-dark-brown/5 text-dark-brown group-hover:bg-dark-brown flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors group-hover:text-white">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
                    E-Mail schreiben
                  </p>
                  <p className="group-hover:text-dark-brown mt-0.5 text-sm font-bold text-neutral-900 transition-colors">
                    {siteConfig.email}
                  </p>
                </div>
              </a>
            </div>
          </div>

          {/* Formular */}
          <form className="space-y-5 rounded-2xl border border-neutral-200 bg-white p-6 shadow-lg shadow-neutral-200/50 sm:p-8">
            <h3 className="text-dark-brown mb-6 text-2xl font-bold tracking-tight">
              Kontakt
            </h3>
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-neutral-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="mt-1.5 block w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] transition-colors focus:border-black focus:bg-white focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-neutral-700"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="mt-1.5 block w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] transition-colors focus:border-black focus:bg-white focus:outline-none"
                  placeholder={siteConfig.email}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-neutral-700"
              >
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-1.5 block w-full rounded-xl border border-neutral-200 bg-neutral-50 px-4 py-3 text-[15px] transition-colors focus:border-black focus:bg-white focus:outline-none"
                placeholder="Ihre Nachricht..."
              />
            </div>
            <div className="flex items-start gap-2.5">
              <input
                type="checkbox"
                id="contact-datenschutz"
                name="datenschutz"
                className="mt-1 h-4 w-4 rounded border-neutral-300 text-black focus:ring-black"
              />
              <label
                htmlFor="contact-datenschutz"
                className="text-sm leading-relaxed text-neutral-500"
              >
                Ich habe die{" "}
                <a
                  href="/agb"
                  className="text-neutral-700 underline underline-offset-2 hover:text-black"
                >
                  AGB
                </a>{" "}
                und die{" "}
                <a
                  href="/datenschutz"
                  className="text-neutral-700 underline underline-offset-2 hover:text-black"
                >
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>
            <Button type="submit" variant="accent" className="w-full">
              Nachricht senden
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontaktFormular;
