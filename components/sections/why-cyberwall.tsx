import { Fragment } from "react";
import {
  ArrowRightIcon,
  GaugeIcon,
  MessageIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

// Same tinted-card language as "The verification process" further down
// the page, so the two 3-step sequences read as one consistent system
// instead of two different visual treatments.
const STAGES = [
  {
    label: "01",
    icon: MessageIcon,
    title: "Incoming contact",
    subtitle: "Call, message, link, QR code, or APK file",
    tint: "bg-tint-lavender",
  },
  {
    label: "02",
    icon: GaugeIcon,
    title: "Cyberwall verification",
    subtitle: "Instant assessment",
    tint: "bg-tint-blue",
  },
  {
    label: "03",
    icon: ShieldCheckIcon,
    title: "Safe decision",
    subtitle: "Action guided",
    tint: "bg-tint-cyan",
  },
];

export default function WhyCyberwall() {
  return (
    <section id="why-cyberwall" className="py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Cyberwall"
            title="Scams keep changing. Cyberwall keeps you one step ahead."
          />
        </Reveal>

        {/* Problem and promise as one card, not two competing blocks */}
        <Reveal delay={80}>
          <div className="mt-12 grid gap-8 rounded-3xl bg-white p-8 sm:grid-cols-2 md:p-10">
            <div>
              <p className="text-sm font-semibold text-neutral-500">
                The threat landscape
              </p>
              <p className="mt-3 text-lg leading-relaxed text-neutral-700">
                Digital scams no longer come only through fake websites. They
                arrive through messages, calls, QR codes, fake jobs,
                investment offers, and social engineering.
              </p>
            </div>
            <div className="border-neutral-100 sm:border-l sm:pl-8">
              <p className="text-sm font-semibold text-brand">
                The Cyberwall shield
              </p>
              <p className="font-nohemi mt-3 text-xl leading-snug font-semibold text-neutral-950 md:text-2xl">
                Cyberwall helps people verify them before they act.
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140}>
          <p className="mt-16 text-sm font-semibold text-neutral-500">
            How Cyberwall intercepts scams
          </p>
        </Reveal>

        <div className="mt-6 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {STAGES.map((stage, i) => (
            <Fragment key={stage.title}>
              <Reveal delay={180 + i * 80} className="flex-1">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl p-7",
                    stage.tint,
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-nohemi text-sm font-bold text-brand">
                      {stage.label}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <stage.icon className="h-6 w-6 text-brand" />
                    </span>
                  </div>
                  <span className="font-nohemi mt-5 text-xl font-bold text-neutral-950">
                    {stage.title}
                  </span>
                  <span className="mt-1.5 text-sm leading-relaxed text-neutral-600">
                    {stage.subtitle}
                  </span>
                </div>
              </Reveal>

              {i < STAGES.length - 1 && (
                <div className="flex shrink-0 items-center justify-center py-1">
                  <span className="flex h-9 w-9 rotate-90 items-center justify-center rounded-full bg-white shadow-sm md:rotate-0">
                    <ArrowRightIcon className="h-4 w-4 text-brand" />
                  </span>
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </Container>
    </section>
  );
}
