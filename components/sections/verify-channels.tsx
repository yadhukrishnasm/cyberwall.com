import { SmartphoneIcon, TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  keralaPoliceUrl,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const PLATFORMS = [
  {
    name: "WhatsApp",
    detail: whatsappNumber,
    icon: WhatsAppIcon,
    cta: "Chat on WhatsApp",
    href: whatsappHref,
    featured: true,
    cardClass: "bg-whatsapp",
    ctaClass: "bg-white text-whatsapp-deep",
  },
  {
    name: "Telegram",
    detail: null,
    icon: TelegramIcon,
    cta: "Open in Telegram",
    href: telegramHref,
    featured: false,
    cardClass: "bg-telegram-tint",
    iconClass: "text-telegram",
    ctaClass: "bg-telegram-deep text-white",
  },
  {
    name: "PolApp",
    detail: null,
    icon: SmartphoneIcon,
    cta: "Download App",
    href: keralaPoliceUrl,
    featured: false,
    cardClass: "bg-tint-lavender",
    iconClass: "text-brand",
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
                        "flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl shadow-sm",
                        platform.featured ? "bg-white/25" : "bg-white",
                      )}
                    >
                      <platform.icon
                        className={cn(
                          "h-6 w-6",
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
                  <a
                    href={platform.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "w-full shrink-0 rounded-full px-5 py-2.5 text-center text-sm font-semibold transition-opacity hover:opacity-85 sm:w-auto",
                      platform.ctaClass,
                    )}
                  >
                    {platform.cta}
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
