"use client";

import React, { useState, useEffect } from "react";
import { TransitionLink } from "@/components/PageTransition";
import { usePathname } from "next/navigation";
import Container from "@/components/Container";
import Button from "@/components/Button";
import MobileMenu from "@/components/MobileMenu";
import { brandContent } from "@/content/brand";

const navLinks = [
  { label: "Solutions", href: "/solutions" },
  { label: "Projects", href: "/projects" },
  { label: "Process", href: "/process" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = 40;
      setIsScrolled(window.scrollY > scrollThreshold);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-paper/95 backdrop-blur-md border-b border-charcoal/10 py-3.5 shadow-sm"
            : "bg-transparent py-5 md:py-6"
        }`}
      >
        <Container className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <TransitionLink
            href="/"
            className="group flex items-baseline gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 rounded-[2px]"
            aria-label={`${brandContent.name} Home`}
          >
            <span className="font-heading text-2xl md:text-3xl font-bold tracking-tight text-charcoal flex items-center gap-1.5">
              <span>{brandContent.name}</span>
              <span className="inline-block w-2 h-2 rounded-full bg-orange translate-y-[-2px]" />
            </span>
            <span className="hidden xl:inline-block font-sans text-xs uppercase tracking-wider text-charcoal/60 font-medium border-l border-charcoal/20 pl-2">
              Workspaces
            </span>
          </TransitionLink>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <TransitionLink
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-heading font-medium tracking-tight transition-colors relative py-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange rounded-[2px] ${
                    isActive
                      ? "text-charcoal font-semibold"
                      : "text-charcoal/75 hover:text-charcoal"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-orange rounded-full" />
                  )}
                </TransitionLink>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="flex items-center gap-3">
            <Button
              href="/contact"
              variant="primary"
              size="sm"
              className="hidden sm:inline-flex"
            >
              Talk to us
            </Button>

            {/* Mobile Menu Toggle Button */}
            <button
              type="button"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex md:hidden items-center justify-center p-2.5 rounded-[2px] text-charcoal hover:bg-stone/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
              aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <div className="w-6 h-5 relative flex flex-col justify-between">
                <span
                  className={`h-0.5 w-full bg-charcoal transition-transform duration-300 ${
                    isMobileMenuOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-charcoal transition-opacity duration-300 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`h-0.5 w-full bg-charcoal transition-transform duration-300 ${
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2.5" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </Container>
      </header>

      {/* Full-Screen Circular Clip-Path Mobile Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        navLinks={navLinks}
      />
    </>
  );
}

