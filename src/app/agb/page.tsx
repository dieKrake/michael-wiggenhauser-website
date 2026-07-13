import type { Metadata } from "next";
import Container from "@/components/layout/container";
import Section from "@/components/layout/section";

export const metadata: Metadata = {
  title: "AGB | Michael Wiggenhauser",
  description: "Allgemeine Geschäftsbedingungen von Michael Wiggenhauser",
};

export default function AGBPage() {
  return (
    <Section background="white">
      <Container>
        <div className="mx-auto max-w-3xl">
          <h1 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Allgemeine Geschäftsbedingungen
          </h1>

          <div className="space-y-8 text-gray-600">
            <div>
              <div className="text-sm leading-relaxed md:text-base">
                <strong>Michael Wiggenhauser</strong>
                <br />
                Selbstständiger Handelsvertreter für ELK Fertighäuser
                <br />
                Stand: 06.07.2026
              </div>
            </div>

            <div className="space-y-10">
              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 1 Geltungsbereich
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für
                    sämtliche Beratungs-, Vermittlungs- und Betreuungsleistungen
                    von
                    <br />
                    Michael Wiggenhauser
                    <br />
                    Gartenweg 3
                    <br />
                    73492 Rainau-Schwabsberg
                    <br />
                    nachfolgend „Handelsvertreter“ oder „Berater“ genannt.
                  </p>
                  <p>
                    (2) Die Leistungen richten sich sowohl an Verbraucher im
                    Sinne des § 13 BGB als auch an Unternehmer gemäß § 14 BGB.
                  </p>
                  <p>
                    (3) Abweichende Allgemeine Geschäftsbedingungen des
                    Auftraggebers finden keine Anwendung, sofern ihrer Geltung
                    nicht ausdrücklich schriftlich zugestimmt wurde.
                  </p>
                  <p>
                    (4) Maßgeblich ist jeweils die zum Zeitpunkt des
                    Vertragsschlusses gültige Fassung dieser AGB.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 2 Tätigkeit als selbstständiger Handelsvertreter
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Michael Wiggenhauser ist selbstständiger
                    Handelsvertreter für die ELK Fertighaus GmbH.
                  </p>
                  <p>
                    (2) Gegenstand der Tätigkeit ist die Beratung und Begleitung
                    von Interessenten beim Erwerb eines ELK Fertighauses sowie
                    die Unterstützung während der Planungs- und
                    Entscheidungsphase.
                  </p>
                  <p>
                    (3) Michael Wiggenhauser handelt im Rahmen seiner Tätigkeit
                    als Handelsvertreter im Namen und auf Rechnung der ELK
                    Fertighaus GmbH.
                  </p>
                  <p>
                    (4) Der Kaufvertrag über ein ELK Fertighaus kommt
                    ausschließlich zwischen dem Auftraggeber und der ELK
                    Fertighaus GmbH zustande.
                  </p>
                  <p>
                    (5) Sämtliche Verpflichtungen hinsichtlich Planung,
                    Bauausführung, Bauqualität, Lieferzeiten, Gewährleistung,
                    Mängelhaftung sowie sonstiger werkvertraglicher Leistungen
                    ergeben sich ausschließlich aus dem jeweiligen Vertrag mit
                    der ELK Fertighaus GmbH.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 3 Leistungsumfang
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Der Leistungsumfang richtet sich nach der individuellen
                    Vereinbarung mit dem Auftraggeber.
                  </p>
                  <p>(2) Die Leistungen können insbesondere umfassen:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>kostenlose Erstberatung</li>
                    <li>persönliche Bedarfsanalyse</li>
                    <li>Unterstützung bei der Grundstücksbewertung</li>
                    <li>Begleitung bei der Hausplanung</li>
                    <li>Konfiguration eines ELK Fertighauses</li>
                    <li>Erläuterung verschiedener Ausstattungsvarianten</li>
                    <li>Informationen zu Bauablauf und Projektorganisation</li>
                    <li>
                      Unterstützung bei der Zusammenstellung erforderlicher
                      Unterlagen
                    </li>
                    <li>Begleitung bis zum Abschluss des Hauskaufvertrages</li>
                    <li>
                      Betreuung während der Bauphase im Rahmen der
                      Handelsvertretertätigkeit
                    </li>
                  </ul>
                  <p>
                    (3) Ein Anspruch auf bestimmte Beratungsleistungen besteht
                    nur, soweit diese ausdrücklich vereinbart wurden.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 4 Kostenfreie Erstberatung
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Das erste Beratungsgespräch dient dem gegenseitigen
                    Kennenlernen sowie der unverbindlichen Einschätzung des
                    geplanten Bauvorhabens.
                  </p>
                  <p>(2) Die Erstberatung erfolgt grundsätzlich kostenfrei.</p>
                  <p>
                    (3) Durch die Inanspruchnahme einer kostenfreien
                    Erstberatung entsteht keine Verpflichtung zum Abschluss
                    eines Kaufvertrages oder zur Beauftragung weiterer
                    Leistungen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 5 Vertragsabschluss
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Die auf der Website dargestellten Leistungen stellen
                    kein verbindliches Angebot im rechtlichen Sinne dar.
                  </p>
                  <p>
                    (2) Ein Beratungsverhältnis kommt durch individuelle
                    Terminvereinbarung oder ausdrückliche Annahme einer Anfrage
                    durch Michael Wiggenhauser zustande.
                  </p>
                  <p>
                    (3) Ein Kaufvertrag über ein ELK Fertighaus kommt
                    ausschließlich mit der ELK Fertighaus GmbH zustande.
                  </p>
                  <p>
                    (4) Michael Wiggenhauser ist berechtigt, Kaufverträge im
                    Rahmen seiner Vertretungsbefugnis für die ELK Fertighaus
                    GmbH entgegenzunehmen bzw. im Namen der ELK Fertighaus GmbH
                    zu unterzeichnen.
                  </p>
                  <p>
                    (5) Preisangaben, Ausstattungen und technische
                    Spezifikationen richten sich ausschließlich nach den jeweils
                    gültigen Preislisten und Vertragsunterlagen der ELK
                    Fertighaus GmbH.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 6 Beratungsgrundsätze
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Sämtliche Beratungen erfolgen nach bestem Wissen und
                    Gewissen sowie auf Grundlage der zum Zeitpunkt der Beratung
                    verfügbaren Informationen.
                  </p>
                  <p>
                    (2) Wirtschaftliche Einschätzungen,
                    Finanzierungsmöglichkeiten, Förderprogramme oder Aussagen
                    zur Realisierbarkeit eines Bauvorhabens stellen
                    unverbindliche Empfehlungen dar und begründen keinen
                    Anspruch auf deren tatsächliche Umsetzung.
                  </p>
                  <p>
                    (3) Änderungen gesetzlicher Vorgaben, Förderprogramme,
                    Zinssätze oder behördlicher Anforderungen bleiben jederzeit
                    vorbehalten.
                  </p>
                  <p>
                    (4) Der Auftraggeber bleibt für sämtliche wirtschaftlichen
                    und finanziellen Entscheidungen selbst verantwortlich.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 7 Kommunikation
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Die Kommunikation kann persönlich, telefonisch, per
                    E-Mail oder auf Wunsch des Auftraggebers auch über
                    Messenger-Dienste wie WhatsApp erfolgen.
                  </p>
                  <p>
                    (2) Dem Auftraggeber ist bekannt, dass bei der Kommunikation
                    über Messenger-Dienste personenbezogene Daten verarbeitet
                    werden können. Die Nutzung erfolgt freiwillig.
                  </p>
                  <p>
                    (3) Vertrauliche oder besonders sensible Unterlagen sollten
                    vorzugsweise auf einem sicheren Übertragungsweg übermittelt
                    werden.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 8 Vermittlung von Partnerleistungen
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Im Rahmen seiner Tätigkeit vermittelt Michael
                    Wiggenhauser auf Wunsch des Auftraggebers Kontakte zu
                    qualifizierten Partnerunternehmen und Dienstleistern, die
                    das Bauvorhaben sinnvoll ergänzen oder unterstützen können.
                  </p>
                  <p>(2) Hierzu zählen insbesondere:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>Finanzierungspartner</li>
                    <li>Immobilienmakler</li>
                    <li>Grundstücksvermittler</li>
                    <li>Abriss- und Rückbauunternehmen</li>
                    <li>
                      Unternehmen für Schadstoffsanierung (z. B. Asbest-, KMF-,
                      PAK- oder PCB-Sanierungen)
                    </li>
                    <li>Architekten und Fachplaner</li>
                    <li>Vermessungsbüros</li>
                    <li>Energieberater</li>
                    <li>weitere am Bau beteiligte Fachunternehmen.</li>
                  </ul>
                  <p>
                    (3) Die Vermittlung erfolgt ausschließlich als
                    Serviceleistung. Ein Anspruch auf die Vermittlung eines
                    bestimmten Unternehmens besteht nicht.
                  </p>
                  <p>
                    (4) Sämtliche Verträge über die vermittelten Leistungen
                    werden ausschließlich zwischen dem Auftraggeber und dem
                    jeweiligen Partnerunternehmen geschlossen.
                  </p>
                  <p>
                    (5) Michael Wiggenhauser ist weder Vertragspartner noch
                    Leistungserbringer dieser Dienstleistungen und übernimmt
                    hierfür keine Gewähr oder Haftung.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 9 Finanzierung und Fördermittel
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Michael Wiggenhauser bietet selbst keine
                    Finanzierungsvermittlung oder Kreditberatung im Sinne der §§
                    34c oder 34i GewO an.
                  </p>
                  <p>
                    (2) Auf Wunsch stellt Michael Wiggenhauser den Kontakt zu
                    unabhängigen Finanzierungspartnern oder
                    Finanzierungsspezialisten der ELK Fertighaus GmbH her.
                  </p>
                  <p>
                    (3) Sämtliche Finanzierungsverträge werden ausschließlich
                    zwischen dem Auftraggeber und dem jeweiligen
                    Finanzierungspartner geschlossen.
                  </p>
                  <p>
                    (4) Hinweise zu Förderprogrammen, Zuschüssen oder
                    Finanzierungsmöglichkeiten erfolgen nach bestem Wissen auf
                    Grundlage der zum Zeitpunkt der Beratung bekannten
                    Informationen.
                  </p>
                  <p>
                    (5) Für die tatsächliche Bewilligung von Fördermitteln,
                    Finanzierungen oder Darlehen übernimmt Michael Wiggenhauser
                    keine Gewähr. Entscheidungen hierüber treffen ausschließlich
                    die jeweiligen Banken, Kreditinstitute oder Förderstellen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 10 Immobilienvermittlung
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Sofern der Auftraggeber Unterstützung beim Verkauf einer
                    bestehenden Immobilie oder eines Grundstücks wünscht,
                    erfolgt diese ausschließlich über kooperierende
                    Immobilienmakler oder hierfür zugelassene
                    Partnerunternehmen.
                  </p>
                  <p>
                    (2) Michael Wiggenhauser verfügt selbst über keine
                    Maklererlaubnis gemäß § 34c GewO und erbringt keine
                    Maklerleistungen im eigenen Namen.
                  </p>
                  <p>
                    (3) Maklerverträge kommen ausschließlich zwischen dem
                    Auftraggeber und dem jeweiligen Immobilienmakler zustande.
                  </p>
                  <p>
                    (4) Provisionsansprüche, Vergütungen oder sonstige
                    vertragliche Vereinbarungen richten sich ausschließlich nach
                    den jeweiligen Vereinbarungen mit dem beauftragten
                    Maklerunternehmen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 11 Abriss-, Rückbau- und Sanierungsleistungen
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Auf Wunsch vermittelt Michael Wiggenhauser erfahrene
                    Partnerunternehmen für den Abriss bestehender Gebäude sowie
                    für Rückbau-, Schadstoffsanierungs- und
                    Entsorgungsleistungen.
                  </p>
                  <p>(2) Hierzu gehören insbesondere:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>Hausabriss</li>
                    <li>selektiver Rückbau</li>
                    <li>Schadstoffsanierungen</li>
                    <li>Asbestsanierungen</li>
                    <li>fachgerechte Entsorgung belasteter Baustoffe</li>
                    <li>Vorbereitung von Grundstücken für eine Neubebauung.</li>
                  </ul>
                  <p>
                    (3) Die Ausführung sämtlicher Arbeiten erfolgt
                    ausschließlich durch eigenständige Fachunternehmen.
                  </p>
                  <p>
                    (4) Michael Wiggenhauser übernimmt hierbei ausschließlich
                    die Koordination und Vermittlung geeigneter Ansprechpartner.
                    Eine Haftung für Planung, Durchführung, Termine oder
                    Ausführungsqualität dieser Leistungen ist ausgeschlossen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 12 Wertermittlungen
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Wertermittlungen von Grundstücken oder Immobilien dienen
                    einer ersten Einschätzung des Marktwertes und stellen keine
                    Verkehrswertgutachten im Sinne der gesetzlichen Vorschriften
                    dar.
                  </p>
                  <p>
                    (2) Der Umfang der Wertermittlung wird jeweils individuell
                    vereinbart.
                  </p>
                  <p>
                    (3) Wertermittlungen können je nach Art und Umfang der
                    Leistung kostenfrei oder kostenpflichtig erfolgen.
                  </p>
                  <p>
                    (4) Sofern eine Vergütung anfällt, wird diese vor Beginn der
                    Leistung ausdrücklich mit dem Auftraggeber vereinbart.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 13 Aufwendungsersatz
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Werden auf ausdrücklichen Wunsch des Auftraggebers
                    besondere Leistungen erbracht, die über die übliche
                    kostenfreie Beratung hinausgehen, kann Michael Wiggenhauser
                    Ersatz der hierfür entstandenen Aufwendungen verlangen.
                  </p>
                  <p>(2) Hierzu zählen insbesondere:</p>
                  <ul className="list-inside list-disc space-y-2 pl-4">
                    <li>professionelle Exposéerstellung</li>
                    <li>Immobilienfotografie</li>
                    <li>Drohnenaufnahmen</li>
                    <li>Inseratskosten</li>
                    <li>besondere Marketingmaßnahmen</li>
                    <li>
                      Fahrtkosten außerhalb des üblichen Tätigkeitsgebietes
                    </li>
                    <li>Beschaffung kostenpflichtiger Unterlagen</li>
                    <li>sonstige projektbezogene Auslagen.</li>
                  </ul>
                  <p>
                    (3) Ein Anspruch auf Aufwendungsersatz besteht nur, soweit
                    dieser vor Durchführung der jeweiligen Maßnahme mit dem
                    Auftraggeber vereinbart wurde.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 14 Mitwirkungspflichten des Auftraggebers
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Der Auftraggeber verpflichtet sich, sämtliche für die
                    Beratung und Projektbegleitung erforderlichen Informationen
                    vollständig und wahrheitsgemäß zur Verfügung zu stellen.
                  </p>
                  <p>
                    (2) Änderungen, die das Bauvorhaben wesentlich beeinflussen
                    können, sind Michael Wiggenhauser unverzüglich mitzuteilen.
                  </p>
                  <p>
                    (3) Verzögerungen oder Mehraufwendungen, die aufgrund
                    unvollständiger oder unzutreffender Angaben entstehen, gehen
                    nicht zu Lasten von Michael Wiggenhauser.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 15 Haftung
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Michael Wiggenhauser ist selbstständiger
                    Handelsvertreter der ELK Fertighaus GmbH und handelt im
                    Rahmen seiner Tätigkeit als Vermittler und Berater für den
                    Erwerb von ELK Fertighäusern.
                  </p>
                  <p>
                    (2) Vertragspartner für den Erwerb eines ELK Fertighauses
                    ist ausschließlich die ELK Fertighaus GmbH. Sämtliche Rechte
                    und Pflichten aus dem Hauskaufvertrag, insbesondere
                    hinsichtlich Planung, Bauausführung, Bauqualität,
                    Lieferzeiten, Gewährleistung, Mängelansprüchen und sonstigen
                    werkvertraglichen Leistungen, bestehen ausschließlich
                    zwischen dem Auftraggeber und der ELK Fertighaus GmbH.
                    Soweit Michael Wiggenhauser im Namen der ELK Fertighaus GmbH
                    Erklärungen entgegennimmt oder Verträge unterzeichnet,
                    handelt er ausschließlich als Handelsvertreter und Vertreter
                    der ELK Fertighaus GmbH.
                  </p>
                  <p>
                    (3) Michael Wiggenhauser übernimmt keine Haftung für
                    Leistungen, Zusagen oder Entscheidungen der ELK Fertighaus
                    GmbH sowie der von ihm vermittelten Partnerunternehmen. Dies
                    gilt insbesondere für Finanzierungsentscheidungen,
                    Förderzusagen, Immobilienvermittlungen, Abriss-, Rückbau-
                    und Sanierungsleistungen sowie behördliche Genehmigungen
                    oder Entscheidungen Dritter.
                  </p>
                  <p>
                    (4) Beratungen, Empfehlungen und Einschätzungen erfolgen
                    nach bestem Wissen und auf Grundlage der zum Zeitpunkt der
                    Beratung verfügbaren Informationen. Sie stellen keine
                    verbindlichen Zusicherungen oder Garantien dar. Insbesondere
                    besteht kein Anspruch auf die Bewilligung von Fördermitteln
                    oder Finanzierungen sowie auf die Erteilung behördlicher
                    Genehmigungen.
                  </p>
                  <p>
                    (5) Die gesetzliche Haftung für vorsätzlich oder grob
                    fahrlässig verursachte Schäden sowie für Schäden aus der
                    Verletzung des Lebens, des Körpers oder der Gesundheit
                    bleibt unberührt.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 16 Bauzeiten und Termine
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Angaben zu Bauzeiten, Lieferfristen oder
                    Fertigstellungsterminen dienen ausschließlich der
                    Orientierung und beruhen auf den Informationen der ELK
                    Fertighaus GmbH oder der jeweiligen Partnerunternehmen.
                  </p>
                  <p>
                    (2) Änderungen aufgrund behördlicher Verfahren,
                    Witterungseinflüssen, Materialengpässen, höherer Gewalt oder
                    anderer unvorhersehbarer Ereignisse bleiben vorbehalten.
                  </p>
                  <p>
                    (3) Aus unverbindlichen Zeitangaben können keine
                    Schadensersatzansprüche gegenüber Michael Wiggenhauser
                    hergeleitet werden.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 17 Eigenleistungen des Bauherrn
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Entscheidet sich der Auftraggeber für Eigenleistungen
                    oder eine individuelle Ausbaustufe (z. B. Ausbauhaus),
                    erfolgen sämtliche Eigenleistungen auf eigene Verantwortung.
                  </p>
                  <p>
                    (2) Michael Wiggenhauser übernimmt keine Haftung für
                    Schäden, Mängel, Verzögerungen oder Folgekosten, die durch
                    Eigenleistungen oder durch beauftragte Drittunternehmen
                    entstehen.
                  </p>
                  <p>
                    (3) Eigenleistungen können Auswirkungen auf
                    Gewährleistungsansprüche oder Bauabläufe haben. Der
                    Auftraggeber ist verpflichtet, sich hierüber vor Beginn der
                    Arbeiten bei der ELK Fertighaus GmbH zu informieren.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 18 Visualisierungen, Grundrisse und Planungsunterlagen
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Sämtliche auf der Website, in Broschüren, Exposés oder
                    Präsentationen dargestellten Grundrisse, Visualisierungen,
                    Renderings, Fotos oder Ausstattungsbeispiele dienen
                    ausschließlich der Veranschaulichung.
                  </p>
                  <p>
                    (2) Abbildungen können Sonderausstattungen enthalten, die
                    nicht Bestandteil des jeweiligen Angebots sind.
                  </p>
                  <p>
                    (3) Technische Änderungen sowie Änderungen hinsichtlich
                    Materialien, Farben, Ausstattung oder Konstruktion bleiben
                    vorbehalten, sofern sie dem technischen Fortschritt dienen
                    oder aufgrund gesetzlicher Vorgaben erforderlich werden.
                  </p>
                  <p>
                    (4) Maßgeblich für den Leistungsumfang sind ausschließlich
                    die Vertragsunterlagen der ELK Fertighaus GmbH.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 19 Urheberrechte
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Sämtliche von Michael Wiggenhauser zur Verfügung
                    gestellten Unterlagen, Zeichnungen, Konzepte,
                    Präsentationen, Texte, Bilder und sonstigen Inhalte
                    unterliegen dem Urheberrecht sowie weiteren Schutzrechten.
                  </p>
                  <p>
                    (2) Eine Vervielfältigung, Weitergabe oder Veröffentlichung
                    ist ohne vorherige schriftliche Zustimmung unzulässig.
                  </p>
                  <p>
                    (3) Dies gilt insbesondere für Grundrisse, Hauskonzepte und
                    individuelle Planungsunterlagen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 20 Vertraulichkeit
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Beide Vertragsparteien verpflichten sich, sämtliche im
                    Rahmen der Zusammenarbeit bekannt gewordenen vertraulichen
                    Informationen vertraulich zu behandeln.
                  </p>
                  <p>
                    (2) Dies gilt insbesondere für personenbezogene Daten,
                    wirtschaftliche Verhältnisse, Bauplanungen sowie
                    Finanzierungsinformationen.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 21 Datenschutz
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Die Verarbeitung personenbezogener Daten erfolgt nach
                    den Bestimmungen der Datenschutz-Grundverordnung (DSGVO),
                    des Bundesdatenschutzgesetzes (BDSG) sowie den weiteren
                    einschlägigen datenschutzrechtlichen Vorschriften.
                  </p>
                  <p>
                    (2) Einzelheiten ergeben sich aus der jeweils gültigen
                    Datenschutzerklärung auf der Website.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 22 Kommunikation über elektronische Medien
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Die Kommunikation zwischen Michael Wiggenhauser und dem
                    Auftraggeber kann – sofern gewünscht – per E-Mail oder über
                    Messenger-Dienste wie WhatsApp erfolgen.
                  </p>
                  <p>
                    (2) Dem Auftraggeber ist bekannt, dass bei der Nutzung
                    elektronischer Kommunikationsmittel trotz angemessener
                    Sicherheitsmaßnahmen Restrisiken hinsichtlich der
                    Vertraulichkeit und Datensicherheit bestehen können.
                  </p>
                  <p>
                    (3) Die Nutzung dieser Kommunikationswege erfolgt auf Wunsch
                    bzw. mit Einverständnis des Auftraggebers.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 23 Änderungen dieser AGB
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    Michael Wiggenhauser behält sich vor, diese Allgemeinen
                    Geschäftsbedingungen anzupassen, soweit gesetzliche
                    Änderungen, Änderungen der Rechtsprechung oder
                    organisatorische Änderungen dies erforderlich machen. Für
                    bereits abgeschlossene Verträge gelten die zum Zeitpunkt des
                    Vertragsschlusses vereinbarten AGB.
                  </p>
                </div>
              </section>

              <section>
                <h2 className="mb-2 text-base font-bold text-gray-900 md:text-lg">
                  § 24 Schlussbestimmungen
                </h2>
                <div className="space-y-4 text-sm leading-relaxed md:text-base">
                  <p>
                    (1) Es gilt ausschließlich das Recht der Bundesrepublik
                    Deutschland unter Ausschluss des UN-Kaufrechts.
                  </p>
                  <p>
                    (2) Ist der Auftraggeber Kaufmann, juristische Person des
                    öffentlichen Rechts oder öffentlich-rechtliches
                    Sondervermögen, ist Gerichtsstand – soweit gesetzlich
                    zulässig – der Sitz von Michael Wiggenhauser.
                  </p>
                  <p>
                    (3) Sollten einzelne Bestimmungen dieser AGB ganz oder
                    teilweise unwirksam oder undurchführbar sein oder werden,
                    bleibt die Wirksamkeit der übrigen Bestimmungen unberührt.
                    Anstelle der unwirksamen Regelung tritt die gesetzliche
                    Regelung. Gleiches gilt für etwaige Regelungslücken.
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
