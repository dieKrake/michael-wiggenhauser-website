import { FC, ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

type ButtonBaseProps = {
  variant?: "primary" | "secondary" | "outline" | "accent";
  size?: "sm" | "md" | "lg";
  className?: string;
  children?: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, keyof ButtonBaseProps> & {
    href?: undefined;
  };

type ButtonAsAnchor = ButtonBaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const getClasses = (
  variant: ButtonBaseProps["variant"] = "primary",
  size: ButtonBaseProps["size"] = "md",
  className?: string
) =>
  cn(
    "inline-flex items-center justify-center font-medium tracking-widest uppercase transition-opacity focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none",
    {
      "bg-neutral-900 text-white hover:opacity-75 focus-visible:ring-neutral-900":
        variant === "primary",
      "bg-white text-neutral-900 hover:opacity-75 focus-visible:ring-neutral-900":
        variant === "secondary",
      "border border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white focus-visible:ring-neutral-900":
        variant === "outline",
      "bg-[var(--color-divider)] text-white hover:opacity-75 focus-visible:ring-[var(--color-divider)]":
        variant === "accent",
    },
    {
      "px-5 py-2.5 text-xs": size === "sm",
      "px-7 py-3.5 text-xs": size === "md",
      "px-10 py-4 text-sm": size === "lg",
    },
    className
  );

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  href,
  ...props
}) => {
  if (href !== undefined) {
    return (
      <a
        href={href}
        className={getClasses(variant, size, className)}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      className={getClasses(variant, size, className)}
      {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};

export default Button;
