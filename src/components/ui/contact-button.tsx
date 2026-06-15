import React from "react";
import { ArrowUpRight } from "lucide-react";

interface ContactButtonProps {
  href?: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  target?: string;
  rel?: string;
  className?: string;
}

export const ContactButton: React.FC<ContactButtonProps> = ({
  href,
  icon: Icon,
  label,
  value,
  target,
  rel,
  className = "",
}) => {
  const isLinkActive = href && href !== "" && href !== "#";

  return (
    <a
      href={isLinkActive ? href : undefined}
      target={target}
      rel={rel}
      className={`group hover:border-dark-brown/20 flex items-center gap-4 rounded-xl border border-neutral-200/50 bg-white/50 p-3.5 transition-all duration-300 ${
        isLinkActive
          ? "cursor-pointer hover:bg-white hover:shadow-md"
          : "cursor-default"
      } ${className}`}
    >
      <div className="bg-dark-brown/5 text-dark-brown group-hover:bg-dark-brown flex h-11 w-11 shrink-0 items-center justify-center rounded-lg transition-colors duration-300 group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-[11px] font-bold tracking-wider text-neutral-400 uppercase">
          {label}
        </p>
        <p className="group-hover:text-dark-brown mt-0.5 truncate text-sm font-bold text-neutral-900 transition-colors">
          {value}
        </p>
      </div>
      {isLinkActive && (
        <ArrowUpRight className="group-hover:text-dark-brown ml-auto h-5 w-5 shrink-0 text-neutral-300 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  );
};
