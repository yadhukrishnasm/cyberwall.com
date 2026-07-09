import Image from "next/image";
import {
  GlobeIcon,
  ImageIcon,
  LandmarkIcon,
  LinkIcon,
  MailIcon,
  MessageIcon,
  MicIcon,
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

// Floating chips scattered around the phone mockup (desktop only —
// a plain wrapped row is used on mobile so nothing overlaps).
const CHIPS = [
  { label: "Website", icon: LinkIcon, position: "top-[4%] left-[2%] -rotate-3" },
  { label: "Screenshot", icon: ImageIcon, position: "top-0 left-[36%] rotate-2" },
  { label: "SMS", icon: MessageIcon, position: "top-[7%] right-[0%] rotate-3" },
  { label: "Phone Number", icon: PhoneIcon, position: "top-[32%] left-[-2%] rotate-2" },
  { label: "Email", icon: MailIcon, position: "top-[36%] right-[-2%] -rotate-2" },
  { label: "Bank Details", icon: LandmarkIcon, position: "top-[60%] left-[0%] rotate-3" },
  { label: "APK", icon: PackageIcon, position: "top-[64%] right-[2%] -rotate-3" },
  { label: "Voice Note", icon: MicIcon, position: "bottom-[4%] left-[10%] -rotate-2" },
  { label: "IP Address", icon: GlobeIcon, position: "bottom-[2%] right-[8%] rotate-2" },
];

function Chip({
  chip,
  className,
}: {
  chip: (typeof CHIPS)[number];
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border border-white bg-white/90 px-4 py-2 text-sm font-medium text-neutral-800 shadow-md shadow-brand/10 backdrop-blur-sm",
        className,
      )}
    >
      <chip.icon className="h-4 w-4 text-brand" />
      {chip.label}
    </span>
  );
}

const Hero = () => {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24">
      <Container className="grid items-center gap-16 md:grid-cols-2 md:gap-8">
        <div>
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200 bg-white px-4 py-2">
              <Image
                alt="Kerala Police logo"
                src="/kp-logo.png"
                height={22}
                width={22}
                className="shrink-0"
              />
              <span className="font-nohemi text-sm font-semibold text-neutral-700">
                Official Kerala Police Initiative
              </span>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <h1 className="font-nohemi mt-6 max-w-xl text-5xl leading-[1.04] font-bold tracking-tight text-neutral-950 sm:text-6xl md:text-7xl">
              Stop scams <span className="text-brand-gradient">before</span>{" "}
              you act.
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

        <Reveal delay={160}>
          {/* Floating layout needs real width margin for the chips not
              to clip — only turned on at lg: (1024px+). Phones and
              tablets get the safe stacked layout below instead. */}
          <div className="relative mx-auto hidden min-h-[580px] max-w-md lg:block">
            <div className="brand-gradient-soft absolute inset-4 rounded-[3rem]" />
            <div className="absolute inset-0 flex items-center justify-center">
              <PhoneMockup />
            </div>

            {CHIPS.map((chip) => (
              <Chip
                key={chip.label}
                chip={chip}
                className={cn("absolute", chip.position)}
              />
            ))}
          </div>

          {/* Mobile + tablet: mockup + a simple wrapped chip row, nothing floats */}
          <div className="lg:hidden">
            <div className="brand-gradient-soft mx-auto max-w-xs rounded-[2.5rem] px-4 py-10 sm:max-w-sm">
              <PhoneMockup />
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-2.5">
              {CHIPS.map((chip) => (
                <Chip key={chip.label} chip={chip} />
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Hero;
