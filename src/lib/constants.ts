export const siteConfig = {
  name: "Michael Wiggenhauser",
  description:
    "Euer Fachberater für ELK Fertighäuser – Neubau, Bestandsimmobilien und Abriss.",
  url: "https://www.sorgenfreibauen.de",
  phone: "+49 176 43488686",
  email: "michael.wiggenhauser@elkhaus.de",
  instagram:
    "https://www.instagram.com/michael.wiggenhauser?utm_source=qr&igsh=MXc4dHJkbzcxNnh5NQ==",
  address: {
    street: "Gartenweg 3",
    city: "73492 Schwabsberg",
    mapsHref:
      "https://www.google.com/maps/search/?api=1&query=Gartenweg+3%2C+73492+Schwabsberg",
  },
};

export const navigation = [
  { label: "SORGENFREI BAUEN", href: "/sorgenfrei-bauen" },
  { label: "DEIN WEG INS NEUE ZUHAUSE", href: "/dein-weg-ins-neue-zuhause" },
  { label: "ÜBER MICH", href: "/ueber-mich" },
] as const;

export const footerLinks = {
  main: navigation,
  legal: [
    { label: "AGB", href: "/agb" },
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
  ],
} as const;
