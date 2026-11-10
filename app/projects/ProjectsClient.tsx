"use client";

import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { CaseStudy, ProjectCategory } from "@/content/projects";

interface ProjectsClientProps {
  initialProjects: CaseStudy[];
}

export default function ProjectsClient({ initialProjects }: ProjectsClientProps) {
  const [activeFilter, setActiveFilter] = useState<"all" | ProjectCategory>("all");

  const filtered =
    activeFilter === "all"
      ? initialProjects
      : initialProjects.filter((p) => p.category === activeFilter);

  const filters: Array<{ label: string; value: "all" | ProjectCategory }> = [
    { label: "All Deployments", value: "all" },
    { label: "Commercial Furniture", value: "commercial-furniture" },
    { label: "Modular Systems", value: "modular" },
    { label: "Turnkey Handover", value: "turnkey" },
  ];

  return (
    <div className="space-y-10">
      {/* Filter Tabs */}
      <div
        className="flex flex-wrap items-center gap-2 border-b border-charcoal/15 pb-4"
        role="tablist"
        aria-label="Filter projects by solution line"
      >
        {filters.map((f) => {
          const isActive = activeFilter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setActiveFilter(f.value)}
              className={`font-heading text-xs uppercase tracking-wider font-semibold px-4 py-2.5 rounded-[2px] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange ${
                isActive
                  ? "bg-charcoal text-paper"
                  : "bg-stone/50 text-charcoal/70 hover:bg-stone hover:text-charcoal"
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {filtered.map((proj, idx) => (
          <ProjectCard key={proj.id} project={proj} priority={idx < 3} />
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="text-center py-16 bg-stone/30 border border-charcoal/10 rounded-[2px]">
          <p className="text-charcoal/70 text-sm">
            No projects found in this category.
          </p>
        </div>
      )}
    </div>
  );
}

