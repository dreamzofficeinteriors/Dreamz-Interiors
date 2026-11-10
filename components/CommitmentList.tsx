import React from "react";
import Container from "@/components/Container";
import { homeContent } from "@/content/home";
import RevealTitle from "@/components/RevealTitle";

interface CommitmentListProps {
  className?: string;
}

export default function CommitmentList({ className = "" }: CommitmentListProps) {
  const commitments = homeContent.commitments;

  return (
    <section className={`py-20 md:py-28 bg-stone/50 border-t border-charcoal/10 ${className}`}>
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Section Header */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-xs uppercase tracking-widest font-semibold text-orange">
              Our Commitments
            </span>
            <RevealTitle as="h2" className="text-title-2 font-bold text-charcoal">
              What you can count on.
            </RevealTitle>
            <p className="text-sm text-charcoal/75 leading-relaxed">
              We eliminate ambiguity from commercial furniture procurement. These three standards are locked into every contract we sign.
            </p>
          </div>

          {/* 3 Commitments */}
          <div className="lg:col-span-8 space-y-6">
            {commitments.map((item, index) => (
              <div
                key={item.id}
                className="bg-paper border border-charcoal/10 rounded-[2px] p-6 sm:p-8 space-y-3 relative group hover:border-charcoal/30 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-orange font-bold">
                    0{index + 1}
                  </span>
                  {item.confirmFlag && (
                    <span className="text-[10px] text-charcoal/40 font-mono">
                      {item.confirmFlag}
                    </span>
                  )}
                </div>

                <h3 className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
                  {item.title}
                </h3>

                <p className="text-sm md:text-base text-charcoal/80 leading-relaxed max-w-2xl">
                  {item.body}
                </p>

                {item.id === "warranty" && (
                  <div className="pt-2 text-xs font-semibold text-charcoal/60 uppercase tracking-wider">
                    • Water and fire damage are strictly excluded
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

