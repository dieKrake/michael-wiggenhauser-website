import { FC, HTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

const Card: FC<CardProps> = ({
  children,
  hover = true,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl bg-white p-6 shadow-sm md:p-8",
        hover && "transition-shadow hover:shadow-md",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
