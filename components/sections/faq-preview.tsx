import Link from "next/link";
import { Container } from "@/components/ui/container";
import { FaqItem } from "@/components/ui/faq-item";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { ALL_FAQS } from "@/lib/faq-data";

const PREVIEW_COUNT = 4;

export default function FaqPreview() {
  const items = ALL_FAQS.slice(0, PREVIEW_COUNT);

  return (
    <section className="border-t border-neutral-200 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions people usually ask." />
        </Reveal>

        <div className="mt-10 divide-y divide-neutral-200 border-t border-neutral-200">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <FaqItem question={item.question} answer={item.answer} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <Link
            href="/faq"
            className="mt-8 inline-block text-sm font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
          >
            View all FAQs
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
