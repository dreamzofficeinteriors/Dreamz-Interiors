import type { Metadata } from "next";
import { brandContent } from "@/content/brand";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dreamzinteriorspune.com";

export function constructMetadata({
  title,
  description,
  path = "",
  image = "/placeholders/og-cover.jpg",
}: {
  title?: string;
  description?: string;
  path?: string;
  image?: string;
} = {}): Metadata {
  const fullTitle = title
    ? `${title} | ${brandContent.name}`
    : `${brandContent.name} — ${brandContent.tagline}`;

  const metaDescription =
    description ||
    `${brandContent.descriptor}. 200+ projects completed across India. Planned, delivered and assembled under single accountability.`;

  const canonicalUrl = `${siteUrl}${path}`;

  return {
    title: fullTitle,
    description: metaDescription,
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description: metaDescription,
      url: canonicalUrl,
      siteName: brandContent.name,
      locale: "en_IN",
      type: "website",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: `${brandContent.name} — ${brandContent.descriptor}`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: metaDescription,
      images: [image],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: brandContent.legalName,
    alternateName: brandContent.name,
    url: siteUrl,
    logo: `${siteUrl}/placeholders/logo.png`,
    description: brandContent.positioning,
    slogan: brandContent.tagline,
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    knowsAbout: [
      "Commercial Furniture",
      "Modular Workstations",
      "Turnkey Workspace Fit-outs",
      "Ergonomic Seating",
      "Office Space Planning",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "+91922954281",
      contactType: "customer service",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  };
}

