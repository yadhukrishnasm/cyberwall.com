import Image from "next/image";
import { GaugeIcon, ShieldCheckIcon, SparklesIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { PhoneMockup } from "@/components/ui/phone-mockup";
import { TryNowButton } from "@/components/ui/platform-modal";
import { Reveal } from "@/components/ui/reveal";
import { helplineHref, helplineNumber } from "@/lib/contact";
import { cn } from "@/lib/utils";

// A small "Verified instantly" style status card, à la the floating
// confirmation cards in the reference. Reused both floating (lg) and
// inline (mobile) so the two layouts never drift apart.
function VerifiedCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-2xl bg-white p-3 shadow-xl shadow-neutral-950/5",
        className,
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-flow-green-bg">
        <ShieldCheckIcon className="h-4 w-4 text-flow-green-border" />
      </span>
      <span className="font-nohemi pr-1 text-sm font-semibold text-neutral-900">
        Verified instantly
      </span>
    </div>
  );
}

function AiCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-center gap-2.5 rounded-2xl bg-white p-3 shadow-xl shadow-neutral-950/5",
        className,
      )}
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint-blue">
        <SparklesIcon className="h-4 w-4 text-brand" />
      </span>
      <span className="font-nohemi pr-1 text-sm font-semibold text-neutral-900">
        AI-powered
      </span>
    </div>
  );
}

function TrustScoreCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-44 rounded-2xl bg-white p-4 shadow-xl shadow-neutral-950/5 hidden md:visible",
        className,
      )}
    >
      <div className="flex items-center gap-2.5">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-tint-cyan">
          <GaugeIcon className="h-4 w-4 text-brand" />
        </span>
        <div className="leading-tight">
          <p className="font-nohemi text-lg font-bold text-neutral-950">
            92
            <span className="text-xs font-medium text-neutral-400">/100</span>
          </p>
          <p className="text-[11px] font-medium text-neutral-500">Trust Score</p>
        </div>
      </div>
      <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-neutral-100">
        <div className="brand-gradient h-full w-[92%] rounded-full" />
      </div>
    </div>
  );
}

const Hero = () => {
  return (
    <section className="pt-10 pb-16 md:pt-14 md:pb-24">
      <Container className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
        {/* ── Left: message ── */}
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white py-1.5 pr-4 pl-1.5">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-blue p-1">
                <Image
                  alt="Kerala Police logo"
                  src="/kp-logo.png"
                  height={20}
                  width={20}
                />
              </span>
              <span className="font-nohemi text-sm font-semibold text-neutral-700">
                Official Kerala Police Initiative
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="font-nohemi mt-6 max-w-xl text-5xl leading-[1.04] font-bold tracking-tight text-neutral-950 sm:text-6xl md:text-7xl">
              Stop scams <span className="text-brand-gradient">before</span> you
              act.
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="font-nohemi mt-5 text-lg font-semibold text-neutral-700 md:text-xl">
              Kerala Police&apos;s AI-powered digital safety assistant.
            </p>
          </Reveal>

          <Reveal delay={260}>
            <p className="mt-4 max-w-md text-lg leading-relaxed text-neutral-600">
              Verify suspicious websites, messages, phone numbers, QR codes,
              screenshots, and more before making a decision.
            </p>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex flex-wrap items-center gap-6">
              <TryNowButton>Try Now</TryNowButton>
              <CtaLink
                href={helplineHref}
                variant="underline"
                className="text-neutral-600"
              >
                Already lost money? Call {helplineNumber}
              </CtaLink>
            </div>
          </Reveal>
        </div>

        {/* ── Right: phone + floating status cards ── */}
        <Reveal delay={160}>
          {/* Desktop: floating cards around the phone */}
          <div className="relative mx-auto hidden max-w-sm lg:block">
            <div className="brand-gradient-soft rounded-[2.5rem] px-6 py-12">
              <PhoneMockup />
            </div>

            <VerifiedCard className="absolute top-[8%] -left-6 -rotate-3" />
            <TrustScoreCard className="absolute top-[42%] -right-8 rotate-2" />
            <AiCard className="absolute bottom-[9%] -left-4 rotate-2" />
          </div>

          {/* Mobile + tablet: phone, then the same cards as a plain row */}
          <div className="lg:hidden">
            <div className="brand-gradient-soft mx-auto max-w-xs rounded-[2.5rem] px-4 py-10 sm:max-w-sm">
              <PhoneMockup />
            </div>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
              <VerifiedCard />
              <AiCard />
              <TrustScoreCard />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Hero;
