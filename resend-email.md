# Production-Ready E-Mail-Versand mit Next.js & Resend

Dieser Plan beschreibt die schrittweise Implementierung eines produktionsbereiten Kontaktformulars für die Website von Michael Wiggenhauser unter Verwendung von Next.js Server Actions und der Resend Mail-API.

## Übersicht der Schritte

1. **Vorbereitung & Registrierung**: Erstellen eines Resend-Kontos und Verifizierung der Domain des Kunden.
2. **Schnittstellen & API-Integration**: Installation der `resend` Bibliothek und Erstellung einer sicheren Next.js Server Action.
3. **Sicherheits- & Umgebungsvariablen**: Konfiguration der API-Schlüssel im Hosting-Anbieter (z.B. Vercel oder Netlify) und in der lokalen `.env`.
4. **Client-Formular-Anbindung**: Implementieren von Lade- und Erfolgszuständen im Kontaktformular (`kontakt-formular.tsx`) und Validierung der Checkboxen.
5. **DNS/DKIM-Konfiguration**: DNS-Einträge beim Domain-Provider hinterlegen, um Spam-Risiken zu minimieren.

---

## 1. Schritt für Schritt Anleitung für den Kunden (DNS & Resend)

### A. Resend Registrierung & API Key

1. Registriert euch auf [resend.com](https://resend.com) (kostenlos bis zu 3.000 E-Mails/Monat).
2. Erstellt im Dashboard unter **API Keys** einen neuen Schlüssel (z. B. mit dem Namen "Wiggenhauser-Website").
3. Kopiert diesen Schlüssel für die spätere Verwendung als Umgebungsvariable.

### B. Eigene Domain verifizieren (Wichtig für Spam-Schutz)

1. Geht im Resend-Dashboard auf **Domains** -> **Add Domain**.
2. Tragt eure Domain ein (z. B. `michael-wiggenhauser.de`).
3. Resend generiert nun **DNS-Einträge** (DKIM, SPF).
4. Meldet euch bei eurem Domain-Anbieter (z. B. Ionos, Strato, GoDaddy) an und tragt diese Einträge als neue TXT/MX-Records ein.
5. Klickt nach ein paar Minuten in Resend auf **Verify**. Sobald die Domain grün leuchtet, könnt ihr offizielle E-Mails von eurer Domain senden (z. B. `info@michael-wiggenhauser.de`).

---

## 2. Technische Implementierung (Schnittstellen)

### A. Paket installieren

Wir installieren das offizielle Resend-SDK in der Anwendung:

```bash
npm install resend
```

### B. Server Action erstellen (`src/app/actions/send-email.ts`)

Wir implementieren eine sichere Next.js Server Action, um den API-Key geheim zu halten und Daten direkt auf dem Server zu validieren:

```typescript
"use server";

import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const message = formData.get("message") as string;
  const datenschutz = formData.get("datenschutz") === "on";

  if (!name || !email || !message || !datenschutz) {
    return {
      success: false,
      error:
        "Bitte füllt alle Felder aus und stimmt den Datenschutzbestimmungen zu.",
    };
  }

  try {
    const data = await resend.emails.send({
      from: `Michael Wiggenhauser Kontakt <kontakt@michael-wiggenhauser.de>`, // Hier verifizierte Absenderadresse eintragen
      to: [
        process.env.CONTACT_RECEIVER_EMAIL || "info@michael-wiggenhauser.de",
      ],
      replyTo: email,
      subject: `Neue Kontaktanfrage von ${name}`,
      text: `Name: ${name}\nE-Mail: ${email}\n\nNachricht:\n${message}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #1f140d; background-color: #fcfbfb; border-radius: 12px; border: 1px solid #1f140d10;">
          <h2 style="color: #1f140d; border-bottom: 2px solid #1f140d10; padding-bottom: 10px;">Neue Anfrage über das Kontaktformular</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>E-Mail:</strong> <a href="mailto:${email}" style="color: #1f140d;">${email}</a></p>
          <div style="margin-top: 20px; padding: 15px; background: white; border-radius: 8px; border: 1px solid #1f140d05;">
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <p style="font-size: 11px; color: #737373; margin-top: 30px; border-top: 1px solid #1f140d10; padding-top: 10px;">
            Diese E-Mail wurde automatisch über das Kontaktformular auf michael-wiggenhauser.de generiert.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error: any) {
    return {
      success: false,
      error: error.message || "E-Mail konnte nicht gesendet werden.",
    };
  }
}
```

### C. Umgebungsvariablen (`.env.local`)

In der lokalen `.env.local` und im Hosting-Dashboard (z.B. Vercel) müssen folgende Variablen hinterlegt werden:

```env
RESEND_API_KEY=re_your_api_key_here
CONTACT_RECEIVER_EMAIL=info@michael-wiggenhauser.de
```

### D. Client-Seitige Integration (`kontakt-formular.tsx`)

Wir erweitern das Formular, um die Server Action aufzurufen und Feedback für den Nutzer anzuzeigen:

1. Nutzung von React's `useState` für `isSubmitting`, `successMessage` und `errorMessage`.
2. Formular-Submit abfangen, Daten absenden, Felder nach Erfolg leeren und eine schöne Erfolgsmeldung einblenden.

---

## 3. Verifizierung & Tests

- **Test-Modus**: Ohne Domainverifizierung kann Resend nur an die eigene Registrierungs-E-Mail-Adresse senden. Dies eignet sich hervorragend, um die Einreichung lokal zu testen.
- **Produktion**: Sobald die Domain verifiziert ist, können E-Mails an jede beliebige Adresse gesendet werden.
