"use client";

import { FC } from "react";

export const CookieSettingsButton: FC = () => {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    window.dispatchEvent(new CustomEvent("show-cookie-consent"));
  };

  return (
    <button
      onClick={handleClick}
      className="cursor-pointer text-left text-sm text-gray-200 transition-colors hover:text-white"
    >
      Cookie-Einstellungen
    </button>
  );
};

export default CookieSettingsButton;
