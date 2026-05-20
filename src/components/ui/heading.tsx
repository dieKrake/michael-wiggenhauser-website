import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4";
}

const Heading: FC<HeadingProps> = ({
  as: Tag = "h2",
  children,
  className,
  ...props
}) => {
  return (
    <Tag
      className={cn(
        "font-bold tracking-tight text-gray-900",
        {
          "text-3xl md:text-4xl lg:text-5xl": Tag === "h1",
          "text-2xl md:text-3xl lg:text-4xl": Tag === "h2",
          "text-xl md:text-2xl": Tag === "h3",
          "text-lg md:text-xl": Tag === "h4",
        },
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
