import { FileTextIcon, GaugeIcon, ShieldCheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { whatsappHref } from "@/lib/contact";

const STEPS = [
  {
    label: "01",
    icon: GaugeIcon,
    title: "Trust Score",
    description: "A risk-based confidence score, from 0 to 100.",
  },
  {
    label: "02",
    icon: ShieldCheckIcon,
    title: "Clear Verdict",
    description: "Safe, Suspicious, or High Risk — stated plainly.",
  },
  {
    label: "03",
    icon: FileTextIcon,
    title: "Detailed Report",
    description:
      "A comprehensive summary and expanded reasoning, for full transparency.",
  },
];

export default function Response() {
  return (
    <section id="how-it-works" className="border-t border-neutral-200 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How it works"
            title="How Cyberwall responds"
            description="When you forward suspicious content, Cyberwall evaluates it and returns a structured result — so you can decide confidently."
          />
        </Reveal>

        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {STEPS.map((step, i) => (
            <Reveal key={step.title} delay={i * 100}>
              <div className="flex items-center justify-between border-t border-neutral-950 pt-5">
                <span className="font-nohemi text-xs text-neutral-400">
                  {step.label}
                </span>
                <step.icon className="h-5 w-5 text-neutral-950" />
              </div>
              <h3 className="font-nohemi mt-3 text-lg font-semibold text-neutral-950">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-neutral-600">
                {step.description}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={320}>
          <CtaLink href={whatsappHref} variant="primary" className="mt-12">
            Try now
          </CtaLink>
        </Reveal>
      </Container>
    </section>
  );
}
