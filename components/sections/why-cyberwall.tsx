import type { ComponentType, SVGProps } from "react";
import {
  LandmarkIcon,
  LinkIcon,
  MailIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
  ShieldCheckIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CyberwallInterceptionStory } from "./cyberwall-intersection";

type ThreatIcon = ComponentType<SVGProps<SVGSVGElement>>;

type ThreatType = {
  label: string;
  icon: ThreatIcon;
};

const THREAT_TYPES: ThreatType[] = [
  {
    label: "Suspicious websites",
    icon: LinkIcon,
  },
  {
    label: "Fraudulent SMS",
    icon: MessageIcon,
  },
  {
    label: "Unknown calls",
    icon: PhoneIcon,
  },
  {
    label: "Phishing emails",
    icon: MailIcon,
  },
  {
    label: "Fake bank details",
    icon: LandmarkIcon,
  },
  {
    label: "Malicious APK files",
    icon: PackageIcon,
  },
];

function ShieldDrawAnimation() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-[1.75rem] border border-white/15 bg-white/[0.08] sm:h-52">
      <style>{`
        @keyframes drawShield {
          0% {
            stroke-dashoffset: 320;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          55%,
          82% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: -320;
            opacity: 0;
          }
        }

        @keyframes drawCheck {
          0%,
          48% {
            stroke-dashoffset: 70;
            opacity: 0;
          }

          56% {
            opacity: 1;
          }

          72%,
          84% {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          100% {
            stroke-dashoffset: -70;
            opacity: 0;
          }
        }

        @keyframes shieldGlow {
          0%,
          45% {
            opacity: 0;
            transform: scale(0.8);
          }

          58% {
            opacity: 0.3;
          }

          78% {
            opacity: 0;
            transform: scale(1.18);
          }

          100% {
            opacity: 0;
            transform: scale(1.18);
          }
        }

        @keyframes shieldDot {
          0% {
            offset-distance: 0%;
            opacity: 0;
          }

          8% {
            opacity: 1;
          }

          55% {
            offset-distance: 100%;
            opacity: 1;
          }

          64%,
          100% {
            offset-distance: 100%;
            opacity: 0;
          }
        }

        .cyberwall-shield-outline {
          stroke-dasharray: 320;
          stroke-dashoffset: 320;
          animation: drawShield 4.5s ease-in-out infinite;
          will-change: stroke-dashoffset, opacity;
        }

        .cyberwall-shield-check {
          stroke-dasharray: 70;
          stroke-dashoffset: 70;
          animation: drawCheck 4.5s ease-in-out infinite;
          will-change: stroke-dashoffset, opacity;
        }

        .cyberwall-shield-glow {
          animation: shieldGlow 4.5s ease-out infinite;
          transform-origin: center;
          will-change: transform, opacity;
        }

        .cyberwall-shield-dot {
          offset-path: path(
            "M80 20 C66 29 52 33 38 36 V73 C38 96 54 114 80 126 C106 114 122 96 122 73 V36 C108 33 94 29 80 20 Z"
          );
          animation: shieldDot 4.5s ease-in-out infinite;
          will-change: offset-distance, opacity;
        }

        @media (prefers-reduced-motion: reduce) {
          .cyberwall-shield-outline,
          .cyberwall-shield-check,
          .cyberwall-shield-glow,
          .cyberwall-shield-dot {
            animation: none;
          }

          .cyberwall-shield-outline,
          .cyberwall-shield-check {
            stroke-dashoffset: 0;
            opacity: 1;
          }

          .cyberwall-shield-glow,
          .cyberwall-shield-dot {
            display: none;
          }
        }
      `}</style>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-40 w-40 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute h-28 w-28 rounded-full border border-white/10"
      />

      <div
        aria-hidden="true"
        className="cyberwall-shield-glow pointer-events-none absolute h-32 w-32 rounded-full border border-cyan-100/50"
      />

      <svg
        viewBox="0 0 160 150"
        fill="none"
        className="relative z-10 h-36 w-36 overflow-visible sm:h-40 sm:w-40"
        aria-hidden="true"
      >
        <path
          d="M80 20C66 29 52 33 38 36V73C38 96 54 114 80 126C106 114 122 96 122 73V36C108 33 94 29 80 20Z"
          className="cyberwall-shield-outline"
          stroke="rgba(255,255,255,0.95)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />

        <path
          d="M59 73L74 88L103 57"
          className="cyberwall-shield-check"
          stroke="rgba(165,243,252,1)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}

export default function WhyCyberwall() {
  return (
    <>
      <section id="why-cyberwall" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Cyberwall"
              title="Scams keep changing. Cyberwall keeps you one step ahead."
              description="Modern scams appear across different channels. Cyberwall helps you verify suspicious information before you trust it."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:auto-rows-[7rem] lg:grid-cols-12">
            {/* Threat landscape */}
            <Reveal className="lg:col-span-7 lg:row-span-4">
              <article className="relative isolate flex h-full min-h-[25rem] flex-col justify-between overflow-hidden rounded-[2rem] border border-neutral-200/70 bg-white p-7 sm:p-8 lg:p-10">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-tint-blue/70"
                  style={{
                    WebkitFilter: "blur(70px)",
                    filter: "blur(70px)",
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -left-20 h-56 w-56 rounded-full bg-tint-cyan/70"
                  style={{
                    WebkitFilter: "blur(64px)",
                    filter: "blur(64px)",
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)",
                  }}
                />

                <div className="relative z-10">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-brand sm:text-sm sm:normal-case sm:tracking-normal">
                    The threat landscape
                  </p>

                  <h3 className="mt-4 max-w-2xl font-nunito text-2xl font-bold leading-tight text-neutral-950 sm:text-3xl lg:text-4xl">
                    A scam does not always look like a scam.
                  </h3>

                  <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-600 sm:text-lg">
                    It may look like a delivery update, a bank alert, a job
                    offer, an urgent phone call, or an application sent by
                    someone you appear to trust.
                  </p>
                </div>

                <div className="relative z-10 mt-10 grid grid-cols-1 gap-2.5 min-[420px]:grid-cols-2 sm:grid-cols-3">
                  {THREAT_TYPES.map(({ label, icon: Icon }) => (
                    <div
                      key={label}
                      className="group flex min-h-14 min-w-0 items-center gap-3 rounded-2xl border border-white/90 bg-white/80 px-3.5 py-3 shadow-sm transition duration-300 ease-out hover:-translate-y-0.5 hover:bg-white hover:shadow-md"
                    >
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint-blue text-brand transition-colors duration-300 group-hover:bg-brand group-hover:text-white">
                        <Icon className="h-4 w-4" />
                      </span>

                      <span className="min-w-0 text-sm font-semibold leading-snug text-neutral-700">
                        {label}
                      </span>
                    </div>
                  ))}
                </div>
              </article>
            </Reveal>

            {/* Cyberwall solution */}
            <Reveal delay={80} className="lg:col-span-5 lg:row-span-4">
              <article className="brand-gradient relative isolate flex h-full min-h-[25rem] flex-col overflow-hidden rounded-[2rem] p-6 sm:p-7 lg:p-8">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -right-20 h-64 w-64 rounded-full bg-white/15"
                  style={{
                    WebkitFilter: "blur(64px)",
                    filter: "blur(64px)",
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)",
                  }}
                />

                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -top-20 h-48 w-48 rounded-full bg-cyan-300/15"
                  style={{
                    WebkitFilter: "blur(58px)",
                    filter: "blur(58px)",
                    WebkitTransform: "translateZ(0)",
                    transform: "translateZ(0)",
                  }}
                />

                <div className="relative z-10">
                  <ShieldDrawAnimation />
                </div>

                <div className="relative z-10 mt-7">
                  <p className="text-xs font-bold uppercase tracking-[0.12em] text-white/70 sm:text-sm sm:normal-case sm:tracking-normal">
                    The Cyberwall shield
                  </p>

                  <h3 className="mt-3 max-w-md font-nunito text-3xl font-bold leading-tight text-white sm:text-4xl">
                    Verify before you act.
                  </h3>

                  <p className="mt-4 max-w-md text-sm leading-relaxed text-white/75 sm:text-base">
                    Share what you received and get a clearer understanding of
                    the risk before clicking, calling, installing, or sending
                    money.
                  </p>
                </div>
              </article>
            </Reveal>
          </div>
        </Container>
      </section>

      <CyberwallInterceptionStory />
    </>
  );
}
