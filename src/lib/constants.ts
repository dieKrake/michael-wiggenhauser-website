export const siteConfig = {
  name: "Michael Wiggenhauser",
  description:
    "Ihr Fachberater für ELK Fertighäuser – Bauberatung, Finanzierung und individuelle Hausplanung.",
  url: "https://www.michael-wiggenhauser.de",
};

export const navigation = [
  { label: "Startseite", href: "/" },
  { label: "Leistungen", href: "/leistungen" },
  { label: "Über mich", href: "/ueber-mich" },
  { label: "Aktuelles", href: "/aktuelles" },
] as const;

export const footerLinks = {
  main: navigation,
  legal: [
    { label: "Datenschutz", href: "/datenschutz" },
    { label: "Impressum", href: "/impressum" },
  ],
} as const;
