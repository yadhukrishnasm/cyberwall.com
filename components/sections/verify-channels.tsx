import Image from "next/image";
import {
  AppleIcon,
  GooglePlayIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  polAppAndroidUrl,
  polAppIosUrl,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

function PolAppLogo({ className }: { className?: string }) {
  return (
    <Image
      src="/polapp-logo.png"
      alt="PolApp"
      width={64}
      height={64}
      className={className}
    />
  );
}

const PLATFORMS = [
  {
    name: "WhatsApp",
    detail: whatsappNumber,
    icon: WhatsAppIcon,
    buttons: [{ label: "Chat on WhatsApp", href: whatsappHref, icon: null }],
    featured: true,
    cardClass: "bg-whatsapp",
    ctaClass: "bg-white text-whatsapp-deep",
  },
  {
    name: "Telegram",
    detail: null,
    icon: TelegramIcon,
    buttons: [{ label: "Open in Telegram", href: telegramHref, icon: null }],
    featured: false,
    cardClass: "bg-telegram-tint",
    iconClass: "text-telegram",
    ctaClass: "bg-telegram-deep text-white",
  },
  {
    name: "PolApp",
    detail: null,
    icon: PolAppLogo,
    buttons: [
      { label: "App Store", href: polAppIosUrl, icon: AppleIcon },
      { label: "Google Play", href: polAppAndroidUrl, icon: GooglePlayIcon },
    ],
    featured: false,
    cardClass: "bg-tint-lavender",
    iconClass: "",
    ctaClass: "bg-neutral-950 text-white",
  },
];

const HIGHLIGHTS = [
  "Fast Responses",
  "English & Malayalam",
  "Text • Image • Voice",
  "Familiar Platforms",
];

export default function VerifyChannels() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-10">
          <Reveal>
            <SectionHeading eyebrow="Where to verify" title="Ask naturally." />
            <p className="mt-5 max-w-sm text-lg leading-relaxed text-neutral-600">
              Just explain what&apos;s happening. Cyberwall understands your
              situation, performs the right security checks, and tells you
              what to do next.
            </p>

            <ul className="mt-7 space-y-3">
              {HIGHLIGHTS.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-base font-medium text-neutral-700"
                >
                  <span className="h-2 w-2 shrink-0 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="grid gap-4">
            {PLATFORMS.map((platform, i) => (
              <Reveal key={platform.name} delay={i * 100}>
                <div
                  className={cn(
                    "flex flex-col items-start gap-4 rounded-3xl p-6 sm:flex-row sm:items-center sm:justify-between md:p-7",
                    platform.cardClass,
                  )}
                >
                  <div className="flex items-center gap-3.5">
                    <span
                      className={cn(
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl p-2 shadow-sm",
                        platform.featured ? "bg-white/25" : "bg-white",
                      )}
                    >
                      <platform.icon
                        className={cn(
                          "h-full w-full object-contain",
                          platform.featured ? "text-white" : platform.iconClass,
                        )}
                      />
                    </span>
                    <div>
                      <span
                        className={cn(
                          "font-nohemi block text-lg font-bold",
                          platform.featured ? "text-white" : "text-neutral-950",
                        )}
                      >
                        {platform.name}
                      </span>
                      {platform.detail && (
                        <span
                          className={cn(
                            "text-sm",
                            platform.featured
                              ? "text-white/80"
                              : "text-neutral-500",
                          )}
                        >
                          {platform.detail}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex w-full flex-wrap gap-2 sm:w-auto">
                    {platform.buttons.map((button) => (
                      <a
                        key={button.label}
                        href={button.href}
                        target="_blank"
                        rel="noreferrer"
                        className={cn(
                          "flex flex-1 shrink-0 items-center justify-center gap-2 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-85 sm:flex-none",
                          button.icon ? "bg-neutral-950 text-white" : platform.ctaClass,
                        )}
                      >
                        {button.icon && <button.icon className="h-4 w-4" />}
                        {button.label}
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
