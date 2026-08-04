import type { Metadata } from "next";

import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { StructuredData } from "@/components/structured-data";
import { Container } from "@/components/ui/container";
import { FaqItem } from "@/components/ui/faq-item";
import { ALL_FAQS, FAQ_GROUPS } from "@/lib/faq-data";
import { siteUrl } from "@/lib/site";
import { PlatformModal } from "@/components/ui/platform-modal";

const TITLE = "Cyberwall FAQ — Kerala Police's AI-Powered Digital Safety Assistant";
const DESCRIPTION =
  "Answers about what Cyberwall does, how it works, whether it's free, and what to do if you've already lost money to a scam.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteUrl}/faq`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteUrl}/faq`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

// FAQPage schema so search engines and AI answer-engines can quote
// these Q&As directly instead of guessing at what Cyberwall does.
const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: ALL_FAQS.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <StructuredData data={FAQ_JSON_LD} />
      <Navbar />
      <main className="pt-16 pb-24 md:pt-20">
        <Container>
          <h1 className="font-nunito mt-6 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Frequently asked questions
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            {DESCRIPTION}
          </p>

          <div className="mt-12 space-y-12">
            {FAQ_GROUPS.map((group) => (
              <section key={group.category}>
                <h2 className="font-nunito text-sm font-semibold text-brand">
                  {group.category}
                </h2>
                <div className="mt-4 space-y-3">
                  {group.items.map((item) => (
                    <div
                      key={item.question}
                      className="rounded-3xl bg-white px-6 md:px-8"
                    >
                      <FaqItem question={item.question} answer={item.answer} />
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
      <PlatformModal />
    </>
  );
}
