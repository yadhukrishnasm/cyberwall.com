import {
  GaugeIcon,
  LandmarkIcon,
  LinkIcon,
  MessageIcon,
  PackageIcon,
  ShieldCheckIcon,
  SparklesIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CollageTile } from "@/components/ui/media-placeholder";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TryNowButton } from "@/components/ui/platform-modal";
import { cn } from "@/lib/utils";

const PROCESS_STEPS = [
  {
    label: "01",
    icon: MessageIcon,
    title: "Share Naturally",
    subtitle: "Understand",
    description:
      "Just explain the situation, upload a screenshot, or send a voice note.",
    tint: "bg-tint-blue",
  },
  {
    label: "02",
    icon: GaugeIcon,
    title: "Threat Analysis",
    subtitle: "Check",
    description:
      "The engine runs domain checks, phone checks, APK scans, and scam reports.",
    tint: "bg-tint-cyan",
  },
  {
    label: "03",
    icon: ShieldCheckIcon,
    title: "Clear Guidance",
    subtitle: "Guide",
    description:
      "Cyberwall returns a safety score and tells you exactly what to do.",
    tint: "bg-tint-lavender",
  },
];

const SCORE_CARDS = [
  {
    score: "92",
    label: "Looks Trustworthy",
    bg: "bg-flow-green-bg",
    border: "border-flow-green-border",
    dot: "bg-flow-green-border",
  },
  {
    score: "61",
    label: "Proceed Carefully",
    bg: "bg-flow-amber-bg",
    border: "border-flow-amber-border",
    dot: "bg-flow-amber-border",
  },
  {
    score: "18",
    label: "High Risk",
    bg: "bg-flow-red-bg",
    border: "border-flow-red-border",
    dot: "bg-flow-red-border",
  },
];

const PILLARS = [
  {
    icon: LinkIcon,
    title: "Link & Domain Safety",
    description:
      "Scans URLs for phishing threats, fake lookalike domains, age records, and active content risks.",
    tint: 1,
    span: 2,
  },
  {
    icon: PackageIcon,
    title: "App & Malware Auditing",
    description:
      "Inspects Android APK files, permission requests, and digital signatures for malicious code.",
    tint: 2,
    span: 1,
  },
  {
    icon: MessageIcon,
    title: "Identity & Message Verification",
    description:
      "Audits incoming caller IDs, country risk codes, and official SMS/DLT sender headers.",
    tint: 3,
    span: 1,
  },
  {
    icon: LandmarkIcon,
    title: "Financial Account Screening",
    description:
      "Scans UPI IDs, bank accounts, and IFSC codes to detect known money laundering pathways.",
    tint: 2,
    span: 2,
  },
  {
    icon: SparklesIcon,
    title: "AI Contextual Analysis",
    description:
      "Uses OCR and natural language reasoning to analyze chats, screenshots, and voice call patterns.",
    tint: 1,
    span: 2,
  },
] as const;

export default function HowCyberwallWorks() {
  return (
    <>
      {/* 1. The Verification Process */}
      <section id="how-it-works" className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="The verification process"
            />
          </Reveal>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-3xl p-7",
                    step.tint,
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-nohemi text-sm font-bold text-brand">
                      {step.label} · {step.subtitle}
                    </span>
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
                      <step.icon className="h-6 w-6 text-brand" />
                    </span>
                  </div>
                  <h3 className="font-nohemi mt-6 text-xl font-bold text-neutral-950 md:text-2xl">
                    {step.title}
                  </h3>
                  <p className="mt-2.5 text-base leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <TryNowButton className="mt-12">Try Now</TryNowButton>
          </Reveal>
        </Container>
      </section>

      {/* 2. The Analysis Output: Trust Score */}
      <section className="py-20 md:py-28">
        <Container>
          <div className="grid items-center gap-12 overflow-hidden rounded-[2.5rem] bg-white p-8 md:grid-cols-2 md:gap-16 md:p-14">
            <Reveal>
              {/* Score pill stack — graphic stand-in for a product shot.
                  The playful tilt/offset only kicks in at sm: so nothing
                  pokes past the card edge on narrow phones. */}
              <div className="relative mx-auto flex max-w-xs flex-col gap-4">
                {SCORE_CARDS.map((card, i) => (
                  <div
                    key={card.score}
                    className={cn(
                      "flex items-center gap-4 rounded-3xl border-2 px-6 py-5 shadow-sm",
                      card.bg,
                      card.border,
                      i === 0 && "-rotate-2",
                      i === 1 && "translate-x-4 rotate-1",
                      i === 2 && "-rotate-1",
                    )}
                  >
                    <span className={cn("h-3 w-3 rounded-full", card.dot)} />
                    <span className="font-nohemi text-3xl font-bold text-neutral-950">
                      {card.score}
                      <span className="text-base font-medium text-neutral-500">
                        /100
                      </span>
                    </span>
                    <span className="ml-auto text-sm font-semibold text-neutral-700">
                      {card.label}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={100}>
              <SectionHeading
                eyebrow="The analysis output"
                title="Trust Score"
              />
              <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-600">
                Every relevant analysis includes a Trust Score, a clear
                explanation, and recommended next steps. It gives you a single,
                unambiguous metric to decide before you act.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3. The Backend Engine */}
      <section id="engine" className="py-20 md:py-28">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Engine"
              title="AI that reasons. Security that verifies."
              description="Powered by over 35+ automated verification checks running in the background. Cyberwall analyzes threat indicators in milliseconds to protect you from fraud."
            />
          </Reveal>

          <div className="mt-12 grid grid-cols-2 auto-rows-[14rem] gap-4 md:grid-cols-4 md:auto-rows-[16rem]">
            {PILLARS.map((pillar, i) => (
              <Reveal
                key={pillar.title}
                delay={i * 60}
                className={
                  pillar.span === 2 ? "col-span-2" : "col-span-2 sm:col-span-1"
                }
              >
                <CollageTile
                  icon={pillar.icon}
                  tint={pillar.tint}
                  title={pillar.title}
                  description={pillar.description}
                />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
