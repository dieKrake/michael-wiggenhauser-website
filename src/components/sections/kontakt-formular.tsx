import { Mail, Phone } from "lucide-react";
import Container from "@/components/layout/container";
import Heading from "@/components/ui/heading";
import Button from "@/components/ui/button";

const KontaktFormular = () => {
  return (
    <section
      id="kontakt"
      className="scroll-mt-24 border-t border-gray-200 bg-gray-50 py-16 md:py-24"
    >
      <Container>
        <div className="grid gap-12 md:grid-cols-2">
          {/* Info-Seite */}
          <div>
            <Heading as="h2">Sie haben noch Fragen?</Heading>
            <p className="mt-4 text-gray-600">
              Ich freue mich, Sie kennenzulernen. Vereinbaren Sie ein
              unverbindliches Erstgespräch – telefonisch, per E-Mail oder direkt
              über das Formular.
            </p>
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-gray-700" />
                <span className="text-gray-700">+49 123 456789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-gray-700" />
                <span className="text-gray-700">
                  info@michael-wiggenhauser.de
                </span>
              </div>
            </div>
          </div>

          {/* Formular */}
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="contact-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 focus:outline-none"
                  placeholder="Ihr Name"
                />
              </div>
              <div>
                <label
                  htmlFor="contact-email"
                  className="block text-sm font-medium text-gray-700"
                >
                  E-Mail
                </label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 focus:outline-none"
                  placeholder="ihre@email.de"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="contact-message"
                className="block text-sm font-medium text-gray-700"
              >
                Nachricht
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={5}
                className="mt-1 block w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-gray-700 focus:ring-1 focus:ring-gray-700 focus:outline-none"
                placeholder="Ihre Nachricht..."
              />
            </div>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                id="contact-datenschutz"
                name="datenschutz"
                className="mt-1 h-4 w-4 rounded border-gray-300 text-gray-800 focus:ring-gray-700"
              />
              <label
                htmlFor="contact-datenschutz"
                className="text-sm text-gray-600"
              >
                Ich habe die{" "}
                <a href="/agb" className="underline hover:text-gray-900">
                  AGB
                </a>{" "}
                und der{" "}
                <a
                  href="/datenschutz"
                  className="underline hover:text-gray-900"
                >
                  Datenschutzerklärung
                </a>{" "}
                gelesen und stimme der Verarbeitung meiner Daten zu.
              </label>
            </div>
            <Button type="submit" className="w-full">
              Nachricht senden
            </Button>
          </form>
        </div>
      </Container>
    </section>
  );
};

export default KontaktFormular;
