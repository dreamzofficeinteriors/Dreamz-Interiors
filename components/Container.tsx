import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "main" | "article" | "header" | "footer";
}

export default function Container({
  children,
  className = "",
  id,
  as: Component = "div",
}: ContainerProps) {
  return (
    <Component
      id={id}
      className={`mx-auto w-full max-w-[1440px] px-4 sm:px-6 md:px-8 lg:px-12 ${className}`}
    >
      {children}
    </Component>
  );
}

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
  surface?: "paper" | "stone" | "charcoal";
}

export function Section({
  children,
  className = "",
  id,
  surface = "paper",
  ...props
}: SectionProps) {
  const surfaceStyles = {
    paper: "bg-paper text-charcoal",
    stone: "bg-stone text-charcoal",
    charcoal: "bg-charcoal text-paper",
  };

  return (
    <section
      id={id}
      className={`py-16 md:py-24 lg:py-32 ${surfaceStyles[surface]} ${className}`}
      {...props}
    >
      {children}
    </section>
  );
}

