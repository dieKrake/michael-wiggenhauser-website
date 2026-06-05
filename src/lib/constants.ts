export const siteConfig = {
  name: "Michael Wiggenhauser",
  description:
    "Euer Fachberater für ELK Fertighäuser – Verkauf, Bauberatung und individuelle Hausplanung.",
  url: "https://www.michael-wiggenhauser.de",
  phone: "+49 176 43488686",
  email: "michael.wiggenhauser@elkhaus.de",
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
