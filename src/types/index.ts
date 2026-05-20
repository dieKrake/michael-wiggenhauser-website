export interface NavItem {
  label: string;
  href: string;
}

export interface LeistungsKarte {
  title: string;
  description: string;
  href: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface Feature {
  title: string;
  description: string;
  icon: string;
}

export interface Testimonial {
  name: string;
  location: string;
  quote: string;
}

export interface Statistik {
  label: string;
  value: number;
  suffix: string;
}

export interface Hausmodell {
  name: string;
  flaeche: string;
  dach: string;
  href: string;
  image: string;
}

export interface Event {
  date: string;
  dateEnd?: string;
  title: string;
  location: string;
  description: string;
}
