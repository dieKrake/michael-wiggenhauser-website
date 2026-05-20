"use client";

import { usePathname } from "next/navigation";
import KontaktFormular from "./kontakt-formular";

const LEGAL_PATHS = ["/agb", "/datenschutz", "/impressum"];

const KontaktFormularWrapper = () => {
  const pathname = usePathname();
  if (LEGAL_PATHS.includes(pathname)) return null;
  return <KontaktFormular />;
};

export default KontaktFormularWrapper;
