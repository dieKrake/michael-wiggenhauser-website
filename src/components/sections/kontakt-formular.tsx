import { Mail, Phone } from "lucide-react";

const KontaktFormular = () => {
  return (
    <section
      id="kontakt"
      className="scroll-mt-20 border-t border-neutral-100 py-24 md:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-16 md:grid-cols-2">
          {/* Info-Seite */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight md:text-4xl">
              Kontakt aufnehmen
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-neutral-600">
              Sorgenfrei bauen beginnt mit einem Gespräch. Ich freue mich
              darauf, euch kennenzulernen. Vereinbart jetzt ein kostenloses
              Erstgespräch – telefonisch, per E-Mail oder direkt über das
              Formular.
            </p>
            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-neutral-400" />
                <span className="text-[15px] text-neutral-700">
                  +49 123 456789
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-neutral-400" />
                <span className="text-[15px] text-neutral-700">
                  info@michael-wiggenhauser.de
                </span>
              </div>
            </div>
          </div>

          {/* Formular */}
          <form className="space-y-5">
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
                  placeholder="ihre@email.de"
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
            <button
              type="submit"
              className="w-full rounded-full bg-black px-7 py-3.5 text-[15px] font-medium text-white transition-opacity hover:opacity-80"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default KontaktFormular;
