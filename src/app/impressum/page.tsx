import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Impressum | Krazius Solutions",
  description: "Impressum und rechtliche Hinweise von Krazius Solutions",
};

export default function ImpressumPage() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Impressum
          </h1>

          <div className="space-y-8 text-gray-600">
            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Angaben gemäß § 5 TMG
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                <strong>Firma:</strong> Michael Wiggenhauser
                <br />
                <strong>Adresse:</strong> Gartenweg 3, 73489 Rainau Schwabsberg
                <br />
                <strong>Geschäftsführer:</strong> Michael Wiggenhauser
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Kontakt
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+491624059165"
                  className="text-gray-600 underline underline-offset-4 hover:text-gray-900"
                >
                  +49 176 43488686
                </a>
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:m.wiggenhauser.privat@gmail.com"
                  className="text-gray-600 underline underline-offset-4 hover:text-gray-900"
                >
                  m.wiggenhauser.privat@gmail.com
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Umsatzsteuer-Identifikationsnummer gemäß § 27 a
                Umsatzsteuergesetz
              </h2>
              <p className="mt-2 font-mono text-sm leading-relaxed text-gray-800 md:text-base">
                DE461437753
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Michael Wiggenhauser
                <br />
                <strong>Adresse:</strong> Gartenweg 3, 73497 Rainau Schwabsberg
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Streitschlichtung
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 underline underline-offset-4 hover:text-gray-900"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
                . Unsere E-Mail-Adresse finden Sie oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Haftung für Inhalte
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
