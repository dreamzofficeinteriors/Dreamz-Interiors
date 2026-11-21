import { MetadataRoute } from "next";
import { solutionsData } from "@/content/solutions";
import { projectsData } from "@/content/projects";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://dreamzworkspaces.com";
  const now = new Date();

  const staticPages = [
    "",
    "/solutions",
    "/projects",
    "/process",
    "/about",
    "/faqs",
    "/contact",
    "/privacy",
    "/terms",
  ].map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : route.startsWith("/solutions") || route.startsWith("/projects") ? 0.8 : 0.6,
  }));

  const solutionPages = solutionsData.map((sol) => ({
    url: `${siteUrl}/solutions/${sol.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  const projectPages = projectsData.map((proj) => ({
    url: `${siteUrl}/projects/${proj.slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [...staticPages, ...solutionPages, ...projectPages];
}

