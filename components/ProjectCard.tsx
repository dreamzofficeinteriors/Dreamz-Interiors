import React from "react";
import { TransitionLink } from "@/components/PageTransition";
import Image from "next/image";
import { CaseStudy } from "@/content/projects";

interface ProjectCardProps {
  project: CaseStudy;
  className?: string;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  className = "",
  priority = false,
}: ProjectCardProps) {
  const primaryMetric = project.metrics[0];

  return (
    <article
      className={`group relative flex flex-col justify-between bg-stone/40 border border-charcoal/10 rounded-[2px] overflow-hidden hover:border-charcoal/30 transition-all duration-300 ${className}`}
    >
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-stone">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-wipe group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 z-10 flex flex-wrap gap-2">
          <span className="text-xs uppercase tracking-wider font-semibold text-charcoal bg-paper/90 backdrop-blur-sm px-2.5 py-1 rounded-[2px] border border-charcoal/10">
            {project.categoryLabel}
          </span>
        </div>
      </div>

      <div className="p-6 md:p-8 flex flex-col justify-between flex-1 space-y-6">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-charcoal/60">
            <span>{project.location}</span>
          </div>

          <h3 className="font-heading text-xl md:text-2xl font-bold tracking-tight text-charcoal group-hover:text-orange transition-colors">
            <TransitionLink href={`/projects/${project.slug}`} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {project.title}
            </TransitionLink>
          </h3>

          <p className="text-sm text-charcoal/75 line-clamp-2 leading-relaxed">
            {project.brief.overview}
          </p>
        </div>

        {/* Primary Metric Bar */}
        {primaryMetric && (
          <div className="border-t border-charcoal/10 pt-4 flex items-baseline justify-between">
            <div>
              <span className="block font-heading text-2xl font-bold text-charcoal tracking-tight">
                {primaryMetric.value}
              </span>
              <span className="text-xs text-charcoal/65">
                {primaryMetric.label}
              </span>
            </div>
            <span className="text-xs font-heading font-semibold uppercase tracking-wider text-charcoal group-hover:text-orange flex items-center gap-1 transition-colors">
              Case Study →
            </span>
          </div>
        )}
      </div>
    </article>
  );
}

