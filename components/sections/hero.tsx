import Image from "next/image";
import {
  GlobeIcon,
  LandmarkIcon,
  LinkIcon,
  MailIcon,
  MessageIcon,
  PackageIcon,
  PhoneIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { TryNowButton } from "@/components/ui/platform-modal";
import { Reveal } from "@/components/ui/reveal";
import { helplineHref, helplineNumber } from "@/lib/contact";
import { cn } from "@/lib/utils";

type CapabilityCardProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
};

function CapabilityCard({
  icon,
  title,
  description,
  className,
}: CapabilityCardProps) {
  return (
    <div
      className={cn(
        "relative z-20 w-full rounded-[1.5rem] border border-neutral-200/70 bg-white/95 p-4",
        "shadow-[0_18px_50px_-24px_rgba(15,23,42,0.28)] backdrop-blur-xl",
        "transition-transform duration-500 ease-out hover:-translate-y-1",
        className,
      )}
    >
      <div className="flex items-start gap-3.5">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-tint-blue text-brand">
          {icon}
        </span>

        <div className="min-w-0">
          <p className="font-nohemi text-sm font-semibold text-neutral-950 sm:text-base">
            {title}
          </p>

          <p className="mt-1 text-xs leading-relaxed text-neutral-500 sm:text-[13px]">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}

function FloatingIcon({
  icon,
  className,
  label,
}: {
  icon: React.ReactNode;
  className?: string;
  label: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center rounded-2xl px-4 py-2",
        "border border-neutral-200/70 bg-white/90 backdrop-blur-xl",
        "shadow-[0_18px_40px_-20px_rgba(15,23,42,0.28)]",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:scale-105",
        className,
      )}
    >
      <span className="text-brand">{icon}</span>
      <p className="mt-0.5 whitespace-nowrap text-[8px] font-medium text-brand">
        {label}
      </p>
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
            <h1 className="font-nohemi mx-auto mt-6 max-w-4xl text-5xl leading-[0.98] font-bold tracking-[-0.045em] text-neutral-950 sm:text-6xl md:text-7xl lg:text-[5.25rem]">
              Stop scams{" "}
              <span className="whitespace-nowrap">
                <span className="text-brand-gradient">before</span> you act.
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
              Verify suspicious websites, messages, phone numbers, emails,
              banking details, APK files, and IP addresses before making a
              decision.
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

          {/* Phone fades upward first */}
          <div className="absolute top-9 left-1/2 z-10 -translate-x-1/2">
            <Reveal delay={420}>
              <PhoneMockup />
            </Reveal>
          </div>

          {/* IP Address */}
          <div className="absolute top-[90px] left-30 z-20">
            <Reveal delay={520}>
              <CapabilityCard
                className="w-[245px] -rotate-1"
                icon={<GlobeIcon className="h-5 w-5" />}
                title="IP Address"
                description="Check whether an IP address is suspicious or unsafe."
              />
            </Reveal>
          </div>

          {/* Email */}
          <div className="absolute top-[85px] right-30 z-20">
            <Reveal delay={580}>
              <CapabilityCard
                className="w-[245px] rotate-1"
                icon={<MailIcon className="h-5 w-5" />}
                title="Email"
                description="Inspect suspicious emails, senders, and included links."
              />
            </Reveal>
          </div>

          {/* SMS */}
          <div className="absolute top-[255px] left-10 z-20">
            <Reveal delay={640}>
              <CapabilityCard
                className="w-[245px] rotate-1"
                icon={<MessageIcon className="h-5 w-5" />}
                title="SMS"
                description="Review suspicious text messages and scam claims."
              />
            </Reveal>
          </div>

          {/* Bank details */}
          <div className="absolute top-[255px] right-8 z-20">
            <Reveal delay={700}>
              <CapabilityCard
                className="w-[245px] -rotate-1"
                icon={<LandmarkIcon className="h-5 w-5" />}
                title="Bank Details"
                description="Verify account details linked to suspicious payments."
              />
            </Reveal>
          </div>

          {/* Phone number */}
          <div className="absolute bottom-8 left-24 z-20">
            <Reveal delay={760}>
              <CapabilityCard
                className="w-[245px] -rotate-1"
                icon={<PhoneIcon className="h-5 w-5" />}
                title="Phone Number"
                description="Check suspicious callers and reported scam numbers."
              />
            </Reveal>
          </div>

          {/* APK */}
          <div className="absolute right-20 bottom-8 z-20">
            <Reveal delay={820}>
              <CapabilityCard
                className="w-[245px] rotate-1"
                icon={<PackageIcon className="h-5 w-5" />}
                title="APK"
                description="Check Android application files before installing them."
              />
            </Reveal>
          </div>

          {/* Website under and overlapping phone */}
          <div className="absolute bottom-0 left-1/2 z-20 -translate-x-1/2">
            <Reveal delay={880}>
              <CapabilityCard
                className="w-[260px]"
                icon={<LinkIcon className="h-5 w-5" />}
                title="Website"
                description="Check suspicious websites and links before opening them."
              />
            </Reveal>
          </div>
        </div>

        {/* Mobile and tablet visual */}
        <div className="mt-10 lg:hidden">
          <div className="relative mx-auto h-[520px] w-[320px]">
            {/* Mobile curved line */}
            <Reveal delay={360}>
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-1/2 z-0 h-[500px] w-[390px] -translate-x-1/2 overflow-visible"
                viewBox="0 0 390 500"
                fill="none"
                preserveAspectRatio="none"
              >
                <path
                  d="
                    M-30 40
                    C45 35 50 185 115 190
                    S175 75 225 105
                    S275 305 335 300
                    S365 380 420 465
                  "
                  stroke="url(#mobileHeroPathGradient)"
                  strokeWidth="12"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <defs>
                  <linearGradient
                    id="mobileHeroPathGradient"
                    x1="-30"
                    y1="40"
                    x2="420"
                    y2="465"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#00C8F0" />
                    <stop offset="50%" stopColor="#00AEEF" />
                    <stop offset="100%" stopColor="#4169E1" />
                  </linearGradient>
                </defs>
              </svg>
            </Reveal>

            {/* Phone fades upward */}
            <div className="absolute top-0 left-1/2 z-10 -translate-x-1/2">
              <Reveal delay={420}>
                <PhoneMockup />
              </Reveal>
            </div>

            {/* Website */}
            <div className="absolute top-6 left-2 z-30">
              <Reveal delay={520}>
                <FloatingIcon
                  label="Website"
                  icon={<LinkIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* Email */}
            <div className="absolute top-14 right-2 z-30">
              <Reveal delay={580}>
                <FloatingIcon
                  label="Email"
                  icon={<MailIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* SMS */}
            <div className="absolute top-52 -left-2 z-30">
              <Reveal delay={640}>
                <FloatingIcon
                  label="SMS"
                  icon={<MessageIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* APK */}
            <div className="absolute top-64 -right-2 z-30">
              <Reveal delay={700}>
                <FloatingIcon
                  label="APK"
                  icon={<PackageIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* Phone number */}
            <div className="absolute bottom-26 -left-5 z-30">
              <Reveal delay={760}>
                <FloatingIcon
                  label="Phone Number"
                  icon={<PhoneIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* Bank details */}
            <div className="absolute -right-8 bottom-22 z-30">
              <Reveal delay={820}>
                <FloatingIcon
                  label="Bank Details"
                  icon={<LandmarkIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>

            {/* IP address */}
            <div className="absolute bottom-2 left-1/2 z-30 -translate-x-1/2">
              <Reveal delay={880}>
                <FloatingIcon
                  label="IP Address"
                  icon={<GlobeIcon className="h-6 w-6" />}
                />
              </Reveal>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
2;
