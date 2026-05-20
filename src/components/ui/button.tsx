import { FC, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

const Button: FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}) => {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        {
          "bg-primary-700 text-white hover:bg-primary-800 focus-visible:ring-primary-700":
            variant === "primary",
          "bg-white text-primary-700 hover:bg-gray-50 focus-visible:ring-primary-700":
            variant === "secondary",
          "border-2 border-primary-700 text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-700":
            variant === "outline",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
