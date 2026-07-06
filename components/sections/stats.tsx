import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { helplineHref, helplineNumber } from "@/lib/contact";

const STATS = [
  { value: "28.1 Lakh", label: "Cybercrime cases in India (2025)" },
  { value: "24%", label: "Rise in incidents within 12 months" },
  { value: "₹814 Cr", label: "Lost in Kerala alone, annually" },
];

export default function Stats() {
  return (
    <section
      id="why-cyberwall"
      className="border-t border-neutral-200 bg-neutral-950 py-20 text-white md:py-28"
    >
      <Container>
        <Reveal>
          <SectionHeading tone="dark" title="Scams are scaling. So must protection." />
        </Reveal>

        <div className="mt-14 grid gap-10 sm:grid-cols-3">
          {STATS.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 100}>
              <p className="font-nohemi text-3xl font-semibold md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-neutral-400">
                {stat.label}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={340}>
          <div className="mt-16 flex flex-col items-start gap-4 border-t border-neutral-800 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-md text-sm leading-relaxed text-neutral-400">
              Already lost money? The faster you report, the higher the
              chance of recovery — this is the official cybercrime helpline.
            </p>
            <CtaLink href={helplineHref} variant="dark" className="shrink-0">
              Call {helplineNumber} now
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
