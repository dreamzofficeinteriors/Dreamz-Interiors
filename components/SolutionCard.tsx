import React from "react";
import { TransitionLink } from "@/components/PageTransition";
import Image from "next/image";
import { SolutionSummaryItem } from "@/content/home";

interface SolutionCardProps {
  solution: SolutionSummaryItem;
  className?: string;
  priority?: boolean;
}

export default function SolutionCard({
  solution,
  className = "",
  priority = false,
}: SolutionCardProps) {
  return (
    <article
      className={`group relative flex flex-col justify-between bg-stone/40 border border-charcoal/10 rounded-[2px] p-6 sm:p-8 hover:border-charcoal/30 transition-all duration-300 ${className}`}
    >
      <div className="space-y-6">
        {/* Top Tag & Index */}
        <div className="flex items-center justify-between">
          <span className="text-xs uppercase tracking-wider font-semibold text-orange bg-orange/10 px-2.5 py-1 rounded-[2px] border border-orange/20">
            {solution.tag}
          </span>
          <span className="font-mono text-xs text-charcoal/40 font-semibold">
            0{solution.id === "commercial-furniture" ? "1" : solution.id === "modular" ? "2" : "3"}
          </span>
        </div>

        {/* Image preview */}
        <div className="relative aspect-[16/10] w-full overflow-hidden rounded-[2px] bg-stone">
          <Image
            src={solution.image}
            alt={solution.title}
            fill
            priority={priority}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
            className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>

        {/* Content */}
        <div className="space-y-3">
          <h3 className="font-heading text-2xl font-bold tracking-tight text-charcoal group-hover:text-orange transition-colors">
            <TransitionLink href={solution.href} className="focus:outline-none">
              <span className="absolute inset-0" aria-hidden="true" />
              {solution.title}
            </TransitionLink>
          </h3>

          <p className="text-sm text-charcoal/80 leading-relaxed">
            {solution.summary}
          </p>
        </div>

        {/* Bullets */}
        <ul className="space-y-2 border-t border-charcoal/10 pt-4 text-xs text-charcoal/70">
          {solution.bulletPoints.map((point, i) => (
            <li key={i} className="flex items-start gap-2">
              <span className="text-orange font-bold text-sm leading-none mt-0.5">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Card Action Link */}
      <div className="pt-6 mt-6 border-t border-charcoal/10 flex items-center justify-between text-xs font-heading font-semibold uppercase tracking-wider text-charcoal group-hover:text-orange transition-colors">
        <span>Explore Scope</span>
        <span className="text-base leading-none transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </div>
    </article>
  );
}

