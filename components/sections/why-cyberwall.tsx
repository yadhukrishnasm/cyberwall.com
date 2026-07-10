import { Fragment } from "react";
import {
  ArrowRightIcon,
  GaugeIcon,
  MessageIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { IconBox } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

const STAGES = [
  {
    label: "01",
    icon: MessageIcon,
    title: "Incoming contact",
    subtitle: "Call, message, link, QR code, or APK file",
    tone: "lavender" as const,
  },
  {
    label: "02",
    icon: GaugeIcon,
    title: "Cyberwall verification",
    subtitle: "Instant assessment",
    tone: "blue" as const,
  },
  {
    label: "03",
    icon: ShieldCheckIcon,
    title: "Safe decision",
    subtitle: "Action guided",
    tone: "cyan" as const,
  },
];

const TINT_BG = {
  lavender: "bg-tint-lavender",
  blue: "bg-tint-blue",
  cyan: "bg-tint-cyan",
} as const;

export default function WhyCyberwall() {
  return (
    <section id="why-cyberwall" className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Why Cyberwall"
            title="Scams keep changing. Cyberwall keeps you one step ahead."
          />
        </Reveal>

        {/* Problem + promise as a two-card bento */}
        <div className="mt-10 grid gap-4 md:grid-cols-5">
          <Reveal className="md:col-span-3">
            <div className="flex h-full flex-col justify-between rounded-[2rem] border border-neutral-200/70 bg-white p-8 md:p-10">
              <p className="text-sm font-semibold text-neutral-400">
                The threat landscape
              </p>
              <p className="mt-4 text-xl leading-relaxed text-neutral-700 md:text-2xl">
                Digital scams no longer come only through fake websites. They
                arrive through messages, calls, QR codes, fake jobs, investment
                offers, and social engineering.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80} className="md:col-span-2">
            <div className="brand-gradient relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-8 md:p-10">
              <div className="pointer-events-none absolute -right-10 -bottom-12 h-44 w-44 rounded-full bg-white/10 blur-3xl" />
              <IconBox icon={ShieldCheckIcon} tone="glass" size="lg" />
              <div className="relative mt-8">
                <p className="text-sm font-semibold text-white/70">
                  The Cyberwall shield
                </p>
                <p className="font-nohemi mt-3 text-2xl leading-snug font-bold text-white md:text-3xl">
                  Verify them before you act.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <p className="mt-14 text-sm font-semibold text-neutral-400">
            How Cyberwall intercepts scams
          </p>
        </Reveal>

        <div className="mt-5 flex flex-col items-stretch gap-3 md:flex-row md:items-center">
          {STAGES.map((stage, i) => (
            <Fragment key={stage.title}>
              <Reveal delay={180 + i * 80} className="flex-1">
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[2rem] p-7 md:p-8",
                    TINT_BG[stage.tone],
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-nohemi text-sm font-bold text-brand">
                      {stage.label}
                    </span>
                    <IconBox icon={stage.icon} tone="white" />
                  </div>
                  <span className="font-nohemi mt-6 text-xl font-bold text-neutral-950">
                    {stage.title}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-neutral-600">
                    {stage.subtitle}
                  </span>
                </div>
              </Reveal>

              {i < STAGES.length - 1 && (
                <div className="flex shrink-0 items-center justify-center">
                  <span className="flex h-9 w-9 rotate-90 items-center justify-center rounded-full border border-neutral-200 bg-white shadow-sm md:rotate-0">
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
