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
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading eyebrow="FAQ" title="Questions people usually ask." />
        </Reveal>

        <div className="mt-10 space-y-3">
          {items.map((item, i) => (
            <Reveal key={item.question} delay={i * 60}>
              <div className="rounded-3xl bg-white px-6 md:px-8">
                <FaqItem question={item.question} answer={item.answer} />
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={280}>
          <Link
            href="/faq"
            className="mt-8 inline-block text-base font-semibold text-brand underline decoration-brand/30 underline-offset-4 transition-colors hover:decoration-brand"
          >
            View all FAQs
          </Link>
        </Reveal>
      </Container>
    </section>
  );
}
