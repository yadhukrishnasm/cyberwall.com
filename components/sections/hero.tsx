import Image from "next/image";
import {
  GlobeIcon,
  LandmarkIcon,
  MessageIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { TryNowButton } from "@/components/ui/platform-modal";
import { Reveal } from "@/components/ui/reveal";
import { helplineHref, helplineNumber } from "@/lib/contact";
import { cn } from "@/lib/utils";

type SpecialityCardProps = {
  icon?: React.ReactNode;
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
  official?: boolean;
};

function SpecialityCard({
  icon,
  eyebrow,
  title,
  description,
  className,
  official = false,
}: SpecialityCardProps) {
  return (
    <div
      className={cn(
        "relative z-20 w-full overflow-hidden rounded-[1.25rem]",
        "border border-neutral-200/70 bg-white/95 px-3 py-3",
        "shadow-[0_16px_38px_-24px_rgba(15,23,42,0.3)] backdrop-blur-xl",
        "transition-[transform,box-shadow] duration-500 ease-out",
        "hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.36)]",
        "sm:rounded-[1.5rem] sm:p-4 transition-all",
        className,
      )}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-10 -right-10 h-24 w-24 rounded-full bg-tint-blue/50 blur-3xl sm:-top-12 sm:-right-12 sm:h-28 sm:w-28"
      />

      <div className="relative flex flex-col items-start gap-2 sm:flex-row sm:gap-3.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint-blue text-brand sm:h-11 sm:w-11 sm:rounded-2xl">
          {official ? (
            <Image
              src="/kp-logo.png"
              alt=""
              width={24}
              height={24}
              className="h-5 w-5 object-contain sm:h-7 sm:w-7"
            />
          ) : (
            icon
          )}
        </span>

        <div className="min-w-0">
          <p className="text-[8px] font-semibold tracking-[0.11em] text-brand uppercase sm:text-[10px] sm:tracking-[0.12em]">
            {eyebrow}
          </p>

          <p className="font-nohemi mt-0.5 text-sm leading-tight font-semibold text-neutral-950 sm:mt-1 sm:text-base">
            {title}
          </p>

          <p className="mt-1.5 hidden text-xs leading-relaxed text-neutral-500 sm:block sm:text-[13px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-8 pb-10 sm:pt-12 md:pt-14 lg:pb-12">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-20 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-tint-cyan/40 blur-[120px]" />

        <div className="absolute top-16 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-tint-blue/70 blur-[130px]" />

        <div className="absolute bottom-0 left-1/2 h-72 w-[56rem] -translate-x-1/2 rounded-full bg-brand/5 blur-[120px]" />
      </div>

      <Container className="relative z-10">
        {/* Hero content */}
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white/90 py-1.5 pr-4 pl-1.5 shadow-sm shadow-neutral-950/5 backdrop-blur-lg">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-blue p-1">
                <Image
                  alt="Kerala Police logo"
                  src="/kp-logo.png"
                  height={20}
                  width={20}
                />
              </span>

              <span className="font-nohemi text-xs font-semibold text-neutral-700 sm:text-sm">
                Official Kerala Police Initiative
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="font-nohemi mx-auto mt-6 max-w-4xl text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-neutral-950 sm:text-6xl md:text-7xl lg:text-[6.25rem]">
              Stop scams{" "}
              <span className="whitespace-nowrap">
                <span className="text-brand-gradient pr-1">before</span> you act.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="font-nohemi mx-auto mt-5 max-w-2xl text-lg leading-relaxed font-semibold text-neutral-700 sm:text-xl">
              Kerala Police&apos;s AI-powered digital safety assistant.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-neutral-500 sm:text-lg">
              Share anything suspicious and receive a clear risk assessment
              before you click, pay, install, reply, or share personal
              information.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
              <TryNowButton className="min-w-32">Try Now</TryNowButton>

              <CtaLink
                href={helplineHref}
                variant="underline"
                className="text-sm text-neutral-600 sm:text-base"
              >
                Already lost money? Call {helplineNumber}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        {/* Desktop visual */}
        <div className="relative mx-auto mt-8 hidden min-h-[590px] max-w-6xl lg:block">
          {/* Curved line */}
          <Reveal delay={360}>
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-0 top-10 z-0 h-[500px] w-full overflow-visible"
              viewBox="0 0 1200 500"
              fill="none"
              preserveAspectRatio="none"
            >
              <path
                d="
                  M-60 80
                  C120 80 130 360 300 360
                  S470 140 620 180
                  S760 420 920 390
                  S1080 250 1260 440
                "
                stroke="url(#heroPathGradient)"
                strokeWidth="19"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              <defs>
                <linearGradient
                  id="heroPathGradient"
                  x1="-60"
                  y1="310"
                  x2="1260"
                  y2="310"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0%" stopColor="#00C8F0" />
                  <stop offset="45%" stopColor="#00AEEF" />
                  <stop offset="70%" stopColor="#1767F2" />
                  <stop offset="100%" stopColor="#4169E1" />
                </linearGradient>
              </defs>
            </svg>
          </Reveal>

          {/* Phone */}
          <div className="absolute top-9 left-1/2 z-10 -translate-x-1/2">
            <Reveal delay={420}>
              <PhoneMockup />
            </Reveal>
          </div>

          {/* 9+ input types */}
          {/* 9+ input types */}
          <div className="absolute top-[90px] left-[7%] z-30">
            <Reveal delay={540}>
              <SpecialityCard
                className="w-[265px] -rotate-1"
                icon={<MessageIcon className="h-5 w-5" />}
                eyebrow="Flexible input"
                title="9+ input types supported"
                description="Send text, screenshots, audio, links, files, contact details, and other suspicious information."
              />
            </Reveal>
          </div>

          {/* 40+ validation checks */}
          <div className="absolute top-[105px] right-[6%] z-30">
            <Reveal delay={620}>
              <SpecialityCard
                className="w-[275px] rotate-1"
                icon={<GlobeIcon className="h-5 w-5" />}
                eyebrow="Deep analysis"
                title="40+ validations and checks"
                description="Cyberwall examines technical, behavioural, identity, and threat-intelligence signals."
              />
            </Reveal>
          </div>

          {/* Clear guidance */}
          <div className="absolute bottom-[65px] left-[8%] z-30">
            <Reveal delay={700}>
              <SpecialityCard
                className="w-[270px] rotate-1"
                icon={<LandmarkIcon className="h-5 w-5" />}
                eyebrow="Practical next steps"
                title="Clear guidance"
                description="Know whether to proceed, ignore, block, report, or seek immediate help."
              />
            </Reveal>
          </div>

          {/* Kerala Police initiative */}
          <div className="absolute right-[8%] bottom-[45px] z-30">
            <Reveal delay={780}>
              <SpecialityCard
                className="w-[275px] -rotate-1"
                official
                eyebrow="Trusted initiative"
                title="Backed by Kerala Police"
                description="A digital safety initiative designed to help the public make safer online decisions."
              />
            </Reveal>
          </div>
        </div>

        {/* Mobile and tablet visual */}
        <div className="mt-10 lg:hidden">
          <div className="relative mx-auto h-[590px] w-full max-w-[350px]">            {/* Mobile curved line */}
            <Reveal delay={360}>
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 z-0 h-[510px] w-[410px] -translate-x-1/2 overflow-visible"
                viewBox="0 0 410 510"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="
                    M-35 42
                    C45 35 55 185 120 190
                    S185 72 235 108
                    S285 310 345 300
                    S380 390 445 470
                  "
                  stroke="url(#mobileHeroPathGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <defs>
                  <linearGradient
                    id="mobileHeroPathGradient"
                    x1="-35"
                    y1="42"
                    x2="445"
                    y2="470"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#00C8F0" />
                    <stop offset="50%" stopColor="#00AEEF" />
                    <stop offset="100%" stopColor="#4169E1" />
                  </linearGradient>
                </defs>
              </svg>
            </Reveal>

            {/* Phone */}
            <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
              <Reveal delay={420}>
                <PhoneMockup />
              </Reveal>
            </div>

            {/* 9+ input types */}
            <div className="absolute top-12 left-1 z-30">
              <Reveal delay={540}>
                <SpecialityCard
                  className="w-[132px] -rotate-1"
                  icon={<MessageIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  eyebrow="Flexible input"
                  title="9+ input types"
                  description="Text, images, audio, files, links, and more."
                />
              </Reveal>
            </div>

            {/* 40+ checks */}
            <div className="absolute top-[190px] right-1 z-30">
              <Reveal delay={620}>
                <SpecialityCard
                  className="w-[132px] rotate-1"
                  icon={<GlobeIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  eyebrow="Deep analysis"
                  title="40+ checks"
                  description="Multiple risk signals are verified together."
                />
              </Reveal>
            </div>

            {/* Clear guidance */}
            <div className="absolute bottom-[116px] left-1 z-30">
              <Reveal delay={700}>
                <SpecialityCard
                  className="w-[132px] rotate-1"
                  icon={<LandmarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />}
                  eyebrow="Next steps"
                  title="Clear guidance"
                  description="Know whether to proceed, block, report, or seek help."
                />
              </Reveal>
            </div>

            {/* Kerala Police initiative */}
            <div className="absolute right-1 bottom-5 z-30">
              <Reveal delay={780}>
                <SpecialityCard
                  className="w-[138px] -rotate-1"
                  official
                  eyebrow="Trusted initiative"
                  title="Kerala Police"
                  description="Public digital safety guidance backed by Kerala Police."
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
