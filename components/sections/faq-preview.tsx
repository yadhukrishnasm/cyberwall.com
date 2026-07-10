import Link from "next/link";
import { ArrowUpRightIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { FaqItem } from "@/components/ui/faq-item";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ALL_FAQS } from "@/lib/faq-data";

const PREVIEW_COUNT = 5;

export default function FaqPreview() {
  const items = ALL_FAQS.slice(0, PREVIEW_COUNT);

  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid gap-8 md:grid-cols-5 md:gap-12">
          <Reveal className="md:col-span-2">
            <div className="md:sticky md:top-28">
              <SectionHeading
                eyebrow="FAQ"
                title="Questions people usually ask."
              />
              <Link
                href="/faq"
                className="mt-6 inline-flex items-center gap-1.5 text-base font-semibold text-brand transition-opacity hover:opacity-80"
              >
                View all FAQs
                <ArrowUpRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal delay={100} className="md:col-span-3">
            <div className="divide-y divide-neutral-200/80 rounded-[2rem] border border-neutral-200/70 bg-white px-6 md:px-8">
              {items.map((item) => (
                <FaqItem
                  key={item.question}
                  question={item.question}
                  answer={item.answer}
                />
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
