import { Metadata } from "next";
import Container, { Section } from "@/components/Container";
import RevealTitle from "@/components/RevealTitle";
import FAQAccordion from "@/components/FAQAccordion";
import CTABand from "@/components/CTABand";
import { faqsContent } from "@/content/faqs";
import { constructMetadata } from "@/lib/seo";

export const metadata: Metadata = constructMetadata({
  title: "Frequently Asked Questions — Workspace Procurement & Delivery",
  description:
    "Common questions about Dreamz's commercial furniture specifications, non-manufacturing operating model, 1-year warranty, and Pan-India delivery.",
  path: "/faqs",
});

export default function FAQsPage() {
  // Filter out any items with [CONFIRM] flags for structured data compliance
  const verifiedFaqs = faqsContent.filter((faq) => !faq.confirmFlag);

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: verifiedFaqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      <div className="pt-24 md:pt-32">
        <Section surface="paper" className="pt-8 md:pt-16 pb-12">
          <Container>
            <div className="max-w-4xl space-y-6">
              <span className="text-xs uppercase tracking-widest font-semibold text-orange">
                Transparent Operations
              </span>
              <RevealTitle as="h1" className="text-display font-extrabold text-charcoal">
                Frequently asked questions.
              </RevealTitle>
              <p className="text-body-lg text-charcoal/80 max-w-2xl leading-relaxed">
                Direct answers regarding our operating model, warranty terms, delivery timelines, and pan-India project execution.
              </p>
            </div>
          </Container>
        </Section>

        <Section surface="stone">
          <Container>
            <div className="max-w-4xl mx-auto bg-paper p-8 sm:p-12 border border-charcoal/10 rounded-[2px] shadow-sm">
              <FAQAccordion items={faqsContent} />
            </div>
          </Container>
        </Section>

        <CTABand />
      </div>
    </>
  );
}

