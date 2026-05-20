import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  background?: "white" | "gray" | "primary";
}

const Section: FC<SectionProps> = ({
  children,
  background = "white",
  className,
  ...props
}) => {
  return (
    <section
      className={cn(
        "py-16 md:py-24",
        {
          "bg-white": background === "white",
          "bg-gray-50": background === "gray",
          "bg-primary-900 text-white": background === "primary",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
};

export default Section;
