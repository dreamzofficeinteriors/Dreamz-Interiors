import React from "react";
import { TransitionLink } from "@/components/PageTransition";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "dark";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-heading font-medium tracking-tight rounded-[2px] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 active:translate-y-[1px] disabled:opacity-50 disabled:pointer-events-none select-none";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-2 uppercase tracking-wider",
    md: "text-sm px-5 py-3 tracking-normal",
    lg: "text-base px-7 py-4 tracking-normal",
  };

  const variantStyles = {
    primary:
      "bg-orange text-white hover:text-white btn-wipe border border-orange shadow-sm",
    secondary:
      "bg-transparent text-charcoal border border-charcoal hover:text-white btn-wipe",
    dark:
      "bg-charcoal text-white border border-charcoal hover:text-white btn-wipe btn-wipe-orange",
    ghost:
      "bg-transparent text-charcoal hover:bg-stone/50 border border-transparent",
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`.trim();

  if (href) {
    if (isExternal || href.startsWith("tel:") || href.startsWith("mailto:") || href.startsWith("http")) {
      return (
        <a
          href={href}
          className={combinedClasses}
          target={isExternal || href.startsWith("http") ? "_blank" : undefined}
          rel={isExternal || href.startsWith("http") ? "noopener noreferrer" : undefined}
        >
          {children}
        </a>
      );
    }

    return (
      <TransitionLink href={href} className={combinedClasses}>
        {children}
      </TransitionLink>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}

