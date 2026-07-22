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
import { IconBox } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { TryNowButton } from "@/components/ui/platform-modal";
import { cn } from "@/lib/utils";

// const PROCESS_STEPS = [
//   {
//     label: "01",
//     icon: MessageIcon,
//     title: "Share naturally",
//     subtitle: "Understand",
//     description:
//       "Just explain the situation, upload a screenshot, or send a voice note.",
//     tone: "blue" as const,
//   },
//   {
//     label: "02",
//     icon: GaugeIcon,
//     title: "Threat analysis",
//     subtitle: "Check",
//     description:
//       "The engine runs domain checks, phone checks, APK scans, and scam reports.",
//     tone: "cyan" as const,
//   },
//   {
//     label: "03",
//     icon: ShieldCheckIcon,
//     title: "Clear guidance",
//     subtitle: "Guide",
//     description:
//       "Cyberwall returns a safety score and tells you exactly what to do.",
//     tone: "lavender" as const,
//   },
// ];

const TINT_BG = {
  blue: "bg-tint-blue",
  cyan: "bg-tint-cyan",
  lavender: "bg-tint-lavender",
} as const;

const SCORE_CARDS = [
  {
    score: "92",
    label: "Looks trustworthy",
    bg: "bg-flow-green-bg",
    border: "border-flow-green-border/40",
    dot: "bg-flow-green-border",
  },
  {
    score: "61",
    label: "Proceed carefully",
    bg: "bg-flow-amber-bg",
    border: "border-flow-amber-border/40",
    dot: "bg-flow-amber-border",
  },
  {
    score: "18",
    label: "High risk",
    bg: "bg-flow-red-bg",
    border: "border-flow-red-border/40",
    dot: "bg-flow-red-border",
  },
];

const PILLARS = [
  {
    icon: LinkIcon,
    title: "Link & domain safety",
    description:
      "Scans URLs for phishing threats, fake lookalike domains, age records, and active content risks.",
    tint: 1,
    span: 2,
  },
  {
    icon: PackageIcon,
    title: "App & malware auditing",
    description:
      "Inspects Android APK files, permission requests, and digital signatures for malicious code.",
    tint: 2,
    span: 1,
  },
  {
    icon: MessageIcon,
    title: "Identity & message verification",
    description:
      "Audits incoming caller IDs, country risk codes, and official SMS/DLT sender headers.",
    tint: 3,
    span: 1,
  },
  {
    icon: LandmarkIcon,
    title: "Financial account screening",
    description:
      "Scans UPI IDs, bank accounts, and IFSC codes to detect known money-laundering pathways.",
    tint: 2,
    span: 2,
  },
  {
    icon: SparklesIcon,
    title: "AI contextual analysis",
    description:
      "Uses OCR and natural-language reasoning to analyze chats, screenshots, and call patterns.",
    tint: 1,
    span: 2,
  },
] as const;

export default function HowCyberwallWorks() {
  return (
    <>
      {/* 1 · Verification process */}
      {/*<section id="how-it-works" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="How it works"
              title="The verification process"
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {PROCESS_STEPS.map((step, i) => (
              <Reveal key={step.title} delay={i * 100}>
                <div
                  className={cn(
                    "flex h-full flex-col rounded-[2rem] p-8",
                    TINT_BG[step.tone],
                  )}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-nunito text-sm font-bold text-brand">
                      {step.label} · {step.subtitle}
                    </span>
                    <IconBox icon={step.icon} tone="white" />
                  </div>
                  <h3 className="font-nunito mt-8 text-2xl font-bold text-neutral-950">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-base leading-relaxed text-neutral-600">
                    {step.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={320}>
            <div className="mt-8">
              <TryNowButton>Try Now</TryNowButton>
            </div>
          </Reveal>
        </Container>
      </section>*/}

      {/* 2 · Trust Score */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center mt-10 gap-4 rounded-[2rem] border border-neutral-200/70 bg-white p-8 md:grid-cols-2 md:gap-12 md:p-12">
            <Reveal>
              <div className="relative mx-auto flex max-w-sm flex-col gap-3">
                {SCORE_CARDS.map((card, i) => (
                  <div
                    key={card.score}
                    className={cn(
                      "flex items-center gap-4 rounded-2xl border-2 px-6 py-5",
                      card.bg,
                      card.border,
                      i === 0 && "-rotate-2",
                      i === 1 && "translate-x-4 rotate-1",
                      i === 2 && "-translate-x-2 rotate-2",
                    )}
                  >
                    <span className={cn("h-3 w-3 rounded-full", card.dot)} />
                    <span className="font-nunito text-3xl font-bold text-neutral-950">
                      {card.score}
                      <span className="text-base font-medium text-neutral-400">
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
                eyebrow="Analysis Output"
                title="Trust Score & Recommendations"
              />
              <p className="mt-5 text-base leading-relaxed text-neutral-600 md:text-lg font-nunito">
                Every relevant analysis includes a Trust Score, a clear
                explanation, and recommended next steps. It gives you a single,
                unambiguous metric to decide before you act.
              </p>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* 3 · Engine */}
      <section id="engine" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Engine"
              title="AI that reasons. Security that verifies."
              description="Over 35 automated verification checks run in the background, analyzing threat indicators in milliseconds to protect you from fraud."
            />
          </Reveal>

          <div className="mt-10 grid auto-rows-[15rem] grid-cols-2 gap-4 md:grid-cols-4">
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
