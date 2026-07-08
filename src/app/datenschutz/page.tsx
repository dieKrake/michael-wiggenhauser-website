import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export const metadata: Metadata = {
  title: "Datenschutz | Michael Wiggenhauser",
  description: "Datenschutzerklärung von Michael Wiggenhauser",
};

export default function DatenschutzPage() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Datenschutzerklärung
          </h1>

          <div className="space-y-8 text-gray-600">
            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Einleitung und Überblick
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Wir haben diese Datenschutzerklärung (Fassung
                  06.07.2026-313225633) verfasst, um Ihnen gemäß der Vorgaben
                  der{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&from=DE&tid=313225633#d1e2269-1-1"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-900 underline underline-offset-4 hover:text-black"
                  >
                    Datenschutz-Grundverordnung (EU) 2016/679
                  </a>{" "}
                  und anwendbaren nationalen Gesetzen zu erklären, welche
                  personenbezogenen Daten (kurz Daten) wir als Verantwortliche –
                  und die von uns beauftragten Auftragsverarbeiter (z. B.
                  Provider) – verarbeiten, zukünftig verarbeiten werden und
                  welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten
                  Begriffe sind geschlechtsneutral zu verstehen.
                </p>
                <p>
                  <strong>Kurz gesagt:</strong> Wir informieren Sie umfassend
                  über Daten, die wir über Sie verarbeiten.
                </p>
                <p>
                  Datenschutzerklärungen klingen für gewöhnlich sehr technisch
                  und verwenden juristische Fachbegriffe. Diese
                  Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge
                  so einfach und transparent wie möglich beschreiben. Soweit es
                  der Transparenz förderlich ist, werden technische{" "}
                  <strong>Begriffe leserfreundlich erklärt</strong>, Links zu
                  weiterführenden Informationen geboten und{" "}
                  <strong>Grafiken</strong> zum Einsatz gebracht. Wir
                  informieren damit in klarer und einfacher Sprache, dass wir im
                  Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene
                  Daten verarbeiten, wenn eine entsprechende gesetzliche
                  Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man
                  möglichst knappe, unklare und juristisch-technische
                  Erklärungen abgibt, so wie sie im Internet oft Standard sind,
                  wenn es um Datenschutz geht. Ich hoffe, Sie finden die
                  folgenden Erläuterungen interessant und informativ und
                  vielleicht ist die eine oder andere Information dabei, die Sie
                  noch nicht kannten.
                </p>
                <p>
                  Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an
                  die unten bzw. im Impressum genannte verantwortliche Stelle zu
                  wenden, den vorhandenen Links zu folgen und sich weitere
                  Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten
                  finden Sie selbstverständlich auch im Impressum.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Anwendungsbereich
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Diese Datenschutzerklärung gilt für alle von uns im
                  Unternehmen verarbeiteten personenbezogenen Daten und für alle
                  personenbezogenen Daten, die von uns beauftragte Firmen
                  (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten
                  meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie
                  zum Beispiel Name, E-Mail-Adresse und postalische Anschrift
                  einer Person. Die Verarbeitung personenbezogener Daten sorgt
                  dafür, dass wir unsere Dienstleistungen und Produkte anbieten
                  und abrechnen können, sei es online oder offline. Der
                  Anwendungsbereich dieser Datenschutzerklärung umfasst:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>
                    alle Onlineauftritte (Websites, Onlineshops), die wir
                    betreiben
                  </li>
                  <li>Social Media Auftritte und E-Mail-Kommunikation</li>
                  <li>mobile Apps für Smartphones und andere Geräte</li>
                </ul>
                <p>
                  <strong>Kurz gesagt:</strong> Die Datenschutzerklärung gilt
                  für alle Bereiche, in denen personenbezogene Daten im
                  Unternehmen über die genannten Kanäle strukturiert verarbeitet
                  werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in
                  Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls
                  gesondert informieren.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Rechtsgrundlagen
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  In der folgenden Datenschutzerklärung geben wir Ihnen
                  transparente Informationen zu den rechtlichen Grundsätzen und
                  Vorschriften, also den Rechtsgrundlagen der
                  Datenschutz-Grundverordnung, die uns ermöglichen,
                  personenbezogene Daten zu verarbeiten.
                </p>
                <p>
                  Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG
                  (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom
                  27. April 2016. Diese Datenschutz-Grundverordnung der EU
                  können Sie selbstverständlich online auf EUR-Lex, dem Zugang
                  zum EU-Recht, unter{" "}
                  <a
                    href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-900 underline underline-offset-4 hover:text-black"
                  >
                    https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679
                  </a>{" "}
                  nachlesen.
                </p>
                <p>
                  Wir verarbeiten Ihre Daten nur, wenn mindestens eine der
                  folgenden Bedingungen zutrifft:
                </p>
                <ol className="list-inside list-decimal space-y-4 pl-4">
                  <li>
                    <strong>Einwilligung</strong> (Artikel 6 Absatz 1 lit. a
                    DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu
                    einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die
                    Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.
                  </li>
                  <li>
                    <strong>Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO):
                    Um einen Vertrag oder vorvertragliche Verpflichtungen mit
                    Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum
                    Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen
                    wir vorab personenbezogene Informationen.
                  </li>
                  <li>
                    <strong>Rechtliche Verpflichtung</strong> (Artikel 6 Absatz
                    1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung
                    unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind
                    wir gesetzlich verpflichtet Rechnungen für die Buchhaltung
                    aufzuheben. Diese enthalten in der Regel personenbezogene
                    Daten.
                  </li>
                  <li>
                    <strong>Berechtigte Interessen</strong> (Artikel 6 Absatz 1
                    lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre
                    Grundrechte nicht einschränken, behalten wir uns die
                    Verarbeitung personenbezogener Daten vor. Wir müssen zum
                    Beispiel gewisse Daten verarbeiten, um unsere Website sicher
                    und wirtschaftlich effizient betreiben zu können. Diese
                    Verarbeitung ist somit ein berechtigtes Interesse.
                  </li>
                </ol>
                <p>
                  Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im
                  öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie
                  dem Schutz lebenswichtiger Interessen treten bei uns in der
                  Regel nicht auf. Soweit eine solche Rechtsgrundlage doch
                  einschlägig sein sollte, wird diese an der entsprechenden
                  Stelle ausgewiesen.
                </p>
                <p>
                  Zusätzlich zu der EU-Verordnung gelten auch noch nationale
                  Gesetze:
                </p>
                <ul className="list-inside list-disc space-y-2 pl-4">
                  <li>
                    In <strong>Österreich</strong> ist dies das Bundesgesetz zum
                    Schutz natürlicher Personen bei der Verarbeitung
                    personenbezogener Daten (<strong>Datenschutzgesetz</strong>
                    ), kurz <strong>DSG</strong>.
                  </li>
                  <li>
                    In <strong>Deutschland</strong> gilt das{" "}
                    <strong>Bundesdatenschutzgesetz</strong>, kurz{" "}
                    <strong>BDSG</strong>.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Kontaktdaten des Verantwortlichen
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung
                  personenbezogener Daten haben, finden Sie nachfolgend die
                  Kontaktdaten des Verantwortlichen gemäß Artikel 4 Absatz 7
                  EU-Datenschutz-Grundverordnung (DSGVO):
                </p>
                <div className="rounded-lg bg-gray-50 p-6">
                  <p>
                    <strong>Michael Wiggenhauser</strong>
                    <br />
                    Selbstständiger Handelsvertreter für ELK Fertighäuser
                    <br />
                    Gartenweg 3, 73492 Rainau-Saverwang, Deutschland
                  </p>
                  <p className="mt-4">
                    <strong>E-Mail:</strong>{" "}
                    <a
                      href="mailto:michael.wiggenhauser@elkhaus.de"
                      className="text-gray-900 underline underline-offset-4 hover:text-black"
                    >
                      michael.wiggenhauser@elkhaus.de
                    </a>
                    <br />
                    <strong>Telefon:</strong>{" "}
                    <a
                      href="tel:+4917643488686"
                      className="text-gray-900 underline underline-offset-4 hover:text-black"
                    >
                      +49 176 43488686
                    </a>
                    <br />
                    <strong>Impressum:</strong>{" "}
                    <a
                      href="https://www.sorgenfreibauen.de/impressum"
                      className="text-gray-900 underline underline-offset-4 hover:text-black"
                    >
                      https://www.sorgenfreibauen.de/impressum
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Speicherdauer
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Dass wir personenbezogene Daten nur so lange speichern, wie es
                  für die Bereitstellung unserer Dienstleistungen und Produkte
                  unbedingt notwendig ist, gilt als generelles Kriterium bei
                  uns. Das bedeutet, dass wir personenbezogene Daten löschen,
                  sobald der Grund für die Datenverarbeitung nicht mehr
                  vorhanden ist. In einigen Fällen sind wir gesetzlich dazu
                  verpflichtet, bestimmte Daten auch nach Wegfall des
                  ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken
                  der Buchführung.
                </p>
                <p>
                  Sollten Sie die Löschung Ihrer Daten wünschen oder die
                  Einwilligung zur Datenverarbeitung widerrufen, werden die
                  Daten so rasch wie möglich und soweit keine Pflicht zur
                  Speicherung besteht, gelöscht.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Rechte laut Datenschutz-Grundverordnung
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die
                  folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen
                  und transparenten Verarbeitung von Daten kommt:
                </p>
                <ul className="list-inside list-disc space-y-4 pl-4">
                  <li>
                    Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber,
                    ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen,
                    haben Sie Recht darauf eine Kopie der Daten zu erhalten und
                    die folgenden Informationen zu erfahren:
                    <ul className="list-circle mt-2 list-inside space-y-1 pl-6">
                      <li>
                        zu welchem Zweck wir die Verarbeitung durchführen;
                      </li>
                      <li>
                        die Kategorien, also die Arten von Daten, die
                        verarbeitet werden;
                      </li>
                      <li>
                        wer diese Daten erhält und wenn die Daten an Drittländer
                        übermittelt werden, wie die Sicherheit garantiert werden
                        kann;
                      </li>
                      <li>wie lange die Daten gespeichert werden;</li>
                      <li>
                        das Bestehen des Rechts auf Berichtigung, Löschung oder
                        Einschränkung der Verarbeitung und dem Widerspruchsrecht
                        gegen die Verarbeitung;
                      </li>
                      <li>
                        dass Sie sich bei einer Aufsichtsbehörde beschweren
                        können;
                      </li>
                      <li>
                        die Herkunft der Daten, wenn wir sie nicht bei Ihnen
                        erhoben haben;
                      </li>
                      <li>
                        ob Profiling durchgeführt wird, ob also Daten
                        automatisch ausgewertet werden, um zu einem persönlichen
                        Profil von Ihnen zu gelangen.
                      </li>
                    </ul>
                  </li>
                  <li>
                    Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung
                    der Daten, was bedeutet, dass wir Daten richtig stellen
                    müssen, falls Sie Fehler finden.
                  </li>
                  <li>
                    Sie haben laut Artikel 17 DSGVO das Recht auf Löschung
                    („Recht auf Vergessenwerden“), was konkret bedeutet, dass
                    Sie die Löschung Ihrer Daten verlangen dürfen.
                  </li>
                  <li>
                    Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung
                    der Verarbeitung, was bedeutet, dass wir die Daten nur mehr
                    speichern dürfen aber nicht weiter verwenden.
                  </li>
                  <li>
                    Sie haben laut Artikel 20 DSGVO das Recht auf
                    Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf
                    Anfrage Ihre Daten in einem gängigen Format zur Verfügung
                    stellen.
                  </li>
                  <li>
                    Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht,
                    welches nach Durchsetzung eine Änderung der Verarbeitung mit
                    sich bringt.
                  </li>
                  <li>
                    Sie haben laut Artikel 22 DSGVO unter Umständen das Recht,
                    nicht einer ausschließlich auf einer automatisierten
                    Verarbeitung (zum Beispiel Profiling) beruhenden
                    Entscheidung unterworfen zu werden.
                  </li>
                  <li>
                    Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde.
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Baden-Württemberg Datenschutzbehörde
              </h2>
              <div className="rounded-lg bg-gray-50 p-6 text-sm leading-relaxed md:text-base">
                <p>
                  <strong>Landesbeauftragter für Datenschutz:</strong> Prof. Dr.
                  Tobias Keber
                  <br />
                  <strong>Adresse:</strong> Lautenschlagerstraße 20, 70173
                  Stuttgart
                  <br />
                  <strong>Telefonnr.:</strong> 07 11/61 55 41-0
                  <br />
                  <strong>E-Mail-Adresse:</strong>{" "}
                  <a
                    href="mailto:poststelle@lfdi.bwl.de"
                    className="text-gray-900 underline underline-offset-4 hover:text-black"
                  >
                    poststelle@lfdi.bwl.de
                  </a>
                  <br />
                  <strong>Website:</strong>{" "}
                  <a
                    href="https://www.baden-wuerttemberg.datenschutz.de/"
                    target="_blank"
                    rel="noopener"
                    className="text-gray-900 underline underline-offset-4 hover:text-black"
                  >
                    https://www.baden-wuerttemberg.datenschutz.de/
                  </a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Sicherheit der Datenverarbeitung
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Um personenbezogene Daten zu schützen, haben wir sowohl
                  technische als auch organisatorische Maßnahmen umgesetzt. Wo
                  es uns möglich ist, verschlüsseln oder pseudonymisieren wir
                  personenbezogene Daten. Dadurch machen wir es im Rahmen
                  unserer Möglichkeiten so schwer wie möglich, dass Dritte aus
                  unseren Daten auf persönliche Informationen schließen können.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                TLS-Verschlüsselung mit https
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Wir verwenden HTTPS (das Hypertext Transfer Protocol Secure
                  steht für „sicheres Hypertext-Übertragungsprotokoll“), um
                  Daten abhörsicher im Internet zu übertragen. Das bedeutet,
                  dass die komplette Übertragung aller Daten von Ihrem Browser
                  zu unserem Webserver abgesichert ist – niemand kann
                  „mithören“.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Kommunikation
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Kommunikation Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Alle, die mit uns
                            per Telefon, E-Mail oder Online-Formular
                            kommunizieren
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong> z. B.
                            Telefonnummer, Name, E-Mail-Adresse, eingegebene
                            Formulardaten.
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> Abwicklung der
                            Kommunikation mit Kunden, Geschäftspartnern usw.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> Dauer des
                            Geschäftsfalls und der gesetzlichen Vorschriften
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b
                            DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO
                            (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Cookies
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Cookies Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Besucher der Website
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> abhängig vom jeweiligen
                            Cookie.
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong> Abhängig vom
                            jeweils eingesetzten Cookie.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> abhängig vom
                            jeweiligen Cookie, von Stunden bis Jahren.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Instagram Datenschutzerklärung
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Wir haben auf unserer Website Funktionen von Instagram
                  eingebaut. Instagram ist eine Social Media Plattform der Firma
                  Instagram LLC, 1601 Willow Rd, Menlo Park CA 94025, USA.
                  Instagram ist seit 2012 ein Tochterunternehmen von Facebook
                  Inc. und gehört zu den Facebook-Produkten. Das Einbetten von
                  Instagram-Inhalten wird Social-Media-Plugin genannt. Dies
                  ermöglicht uns, Ihnen Inhalte wie Fotos, Buttons oder Videos
                  von Instagram direkt auf unserer Webseite zu zeigen.
                </p>
                <p>
                  Wenn Sie Webseiten unserer Präsenz aufrufen, die eine
                  Instagram-Funktion eingebaut haben, werden Daten an Instagram
                  übermittelt, gespeichert und verarbeitet. Instagram verwendet
                  dieselben Systeme wie Facebook. Ihre Daten werden also über
                  alle Facebook-Unternehmen hinweg verarbeitet.
                </p>
                <p>
                  Instagram verarbeitet Daten von Ihnen u.a. auch in den USA.
                  Instagram bzw. Meta Platforms ist aktiver Teilnehmer des EU-US
                  Data Privacy Frameworks. Zudem verwendet Instagram
                  Standardvertragsklauseln.
                </p>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Partnerprogramme Einleitung
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Partnerprogramme Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Besucher der Website
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> wirtschaftlicher Erfolg
                            und Optimierung der Serviceleistung.
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong>{" "}
                            Zugriffsstatistiken, Gerätedaten, Klickverhalten,
                            IP-Adressen.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> bis Daten nicht
                            mehr benötigt werden.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Cookie Consent Management Platform Einleitung
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Cookie Consent Management Platform Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Website Besucher
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> Einholung und Verwaltung
                            der Zustimmung zu Cookies.
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong> IP-Adresse,
                            Zeitpunkt der Zustimmung, Art der Zustimmung.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> mehrere Jahre
                            möglich.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Cloud-Dienste
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Cloud-Dienste Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Websitebetreiber und
                            Besucher
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> Sicherheit und
                            Datenspeicherung
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong> IP-Adresse,
                            Name, technische Daten.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> bis Erfüllung der
                            Dienstleistung.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Online-Kartendienste Einleitung
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Online-Kartendienste Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Besucher der Website
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> Verbesserung der
                            Nutzererfahrung
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong> IP-Adresse,
                            Standortdaten, Suchgegenstände.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> abhängig vom
                            Tool.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Google Maps Datenschutzerklärung
              </h2>
              <div className="overflow-hidden rounded-lg border border-gray-200">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-sm font-bold text-gray-900">
                        Google Maps Zusammenfassung
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    <tr>
                      <td className="px-6 py-4 text-sm text-gray-600">
                        <ul className="space-y-2">
                          <li>
                            👥 <strong>Betroffene:</strong> Besucher der Website
                          </li>
                          <li>
                            🤝 <strong>Zweck:</strong> Optimierung der
                            Serviceleistung
                          </li>
                          <li>
                            📒 <strong>Verarbeitete Daten:</strong>{" "}
                            Suchbegriffe, IP-Adresse, Standortkoordinaten.
                          </li>
                          <li>
                            📅 <strong>Speicherdauer:</strong> abhängig von den
                            Daten.
                          </li>
                          <li>
                            ⚖️ <strong>Rechtsgrundlagen:</strong> Art. 6 Abs. 1
                            lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f
                            DSGVO (Berechtigte Interessen)
                          </li>
                        </ul>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="space-y-4 p-6 text-sm leading-relaxed text-gray-600 md:text-base">
                  <p>
                    Wir benützen auf unserer Website Google Maps der Firma
                    Google Inc. Für den europäischen Raum ist das Unternehmen
                    Google Ireland Limited (Gordon House, Barrow Street Dublin
                    4, Irland) verantwortlich.
                  </p>
                  <p>
                    Google verarbeitet Daten von Ihnen u.a. auch in den USA.
                    Google ist aktiver Teilnehmer des EU-US Data Privacy
                    Frameworks. Zudem verwendet Google Standardvertragsklauseln.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="mb-4 text-xl font-bold text-gray-900 md:text-2xl">
                Schlusswort
              </h2>
              <div className="space-y-4 text-sm leading-relaxed md:text-base">
                <p>
                  Herzlichen Glückwunsch! Wenn Sie diese Zeilen lesen, haben Sie
                  sich wirklich durch unsere gesamte Datenschutzerklärung
                  „gekämpft“ oder zumindest bis hier hin gescrollt. Wie Sie am
                  Umfang unserer Datenschutzerklärung sehen, nehmen wir den
                  Schutz Ihrer persönlichen Daten, alles andere als auf die
                  leichte Schulter.
                </p>
                <p>
                  Uns ist es wichtig, Sie nach bestem Wissen und Gewissen über
                  die Verarbeitung personenbezogener Daten zu informieren. Bei
                  Fragen zum Thema Datenschutz auf unserer Website zögern Sie
                  bitte nicht, uns oder die verantwortliche Stelle zu
                  kontaktieren. Wir wünschen Ihnen noch eine schöne Zeit und
                  hoffen, Sie auf unserer Website bald wieder begrüßen zu
                  dürfen.
                </p>
                <p className="pt-4 font-bold text-gray-900">
                  Alle Texte sind urheberrechtlich geschützt.
                </p>
                <p className="text-xs text-gray-500">
                  Quelle:{" "}
                  <a
                    href="https://www.adsimple.de/datenschutz-generator/"
                    target="_blank"
                    rel="noopener"
                    className="underline hover:text-gray-900"
                  >
                    Datenschutzerklärung
                  </a>{" "}
                  erstellt mit dem Datenschutz Generator für Deutschland von
                  AdSimple
                </p>
              </div>
            </section>
          </div>
        </div>
      </Container>
    </Section>
  );
}
