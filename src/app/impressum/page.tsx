import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Impressum | Michael Wiggenhauser",
  description: "Impressum und rechtliche Hinweise von Michael Wiggenhauser",
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
                Angaben gemäß § 5 DDG (Digitale-Dienste-Gesetz)
              </h2>
              <div className="mt-2 text-sm leading-relaxed md:text-base">
                <strong>Michael Wiggenhauser</strong>
                <br />
                Selbstständiger Handelsvertreter für ELK Fertighäuser
                <br />
                Gartenweg 3
                <br />
                73492 Rainau-Schwabsberg
                <br />
                Deutschland
              </div>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Kontakt
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                <strong>Telefon:</strong>{" "}
                <a
                  href="tel:+4917643488686"
                  className="text-gray-600 underline underline-offset-4 hover:text-gray-900"
                >
                  +49 176 43488686
                </a>
                <br />
                <strong>E-Mail:</strong>{" "}
                <a
                  href="mailto:michael.wiggenhauser@elkhaus.de"
                  className="text-gray-600 underline underline-offset-4 hover:text-gray-900"
                >
                  michael.wiggenhauser@elkhaus.de
                </a>
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG
              </h2>
              <p className="mt-2 font-mono text-sm leading-relaxed text-gray-800 md:text-base">
                DE461437753
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Tätigkeitsbeschreibung
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Michael Wiggenhauser ist selbstständiger Handelsvertreter für
                die ELK Fertighaus GmbH und vermittelt Fertighäuser im Namen und
                auf Rechnung der ELK Fertighaus GmbH. Darüber hinaus berät er
                Bauinteressenten und vermittelt auf Wunsch Kontakte zu
                Kooperationspartnern in den Bereichen Finanzierung,
                Immobilienvermittlung sowie Abriss- und Rückbauleistungen.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Michael Wiggenhauser
                <br />
                Gartenweg 3
                <br />
                73492 Rainau-Schwabsberg
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                EU-Streitschlichtung
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
                . Meine E-Mail-Adresse findet ihr oben im Impressum.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Verbraucherstreitbeilegung
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Ich bin weder verpflichtet noch bereit, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Haftung für Inhalte
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Als Diensteanbieter bin ich gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG bin ich jedoch nicht
                verpflichtet, übermittelte oder gespeicherte fremde
                Informationen zu überwachen oder nach Umständen zu forschen, die
                auf eine rechtswidrige Tätigkeit hinweisen.
              </p>
              <p className="mt-4 text-sm leading-relaxed md:text-base">
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden entsprechender Rechtsverletzungen werde ich
                diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Haftung für Links
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Meine Website enthält Links zu externen Websites Dritter, auf
                deren Inhalte ich keinen Einfluss habe. Deshalb kann ich für
                diese fremden Inhalte auch keine Gewähr übernehmen. Für die
                Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter
                oder Betreiber der Seiten verantwortlich.
              </p>
              <p className="mt-4 text-sm leading-relaxed md:text-base">
                Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren
                zu diesem Zeitpunkt nicht erkennbar. Eine permanente inhaltliche
                Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
                Bekanntwerden entsprechender Rechtsverletzungen werde ich
                derartige Links umgehend entfernen.
              </p>
            </div>

            <div>
              <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                Urheberrecht
              </h2>
              <p className="mt-2 text-sm leading-relaxed md:text-base">
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                dieser Website unterliegen dem deutschen Urheberrecht. Jede
                Vervielfältigung, Bearbeitung, Verbreitung oder sonstige
                Verwertung außerhalb der Grenzen des Urheberrechts bedarf der
                vorherigen schriftlichen Zustimmung des jeweiligen Urhebers bzw.
                Erstellers.
              </p>
              <p className="mt-4 text-sm leading-relaxed md:text-base">
                Downloads und Kopien dieser Website sind ausschließlich für den
                privaten, nicht kommerziellen Gebrauch gestattet.
              </p>
              <p className="mt-4 text-sm leading-relaxed md:text-base">
                Soweit Inhalte auf dieser Website nicht vom Betreiber erstellt
                wurden, werden die Urheberrechte Dritter beachtet und
                entsprechend gekennzeichnet. Solltet ihr dennoch auf eine
                Urheberrechtsverletzung aufmerksam werden, freue ich mich über
                einen entsprechenden Hinweis. Bei Bekanntwerden von
                Rechtsverletzungen werde ich die betreffenden Inhalte umgehend
                entfernen.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
