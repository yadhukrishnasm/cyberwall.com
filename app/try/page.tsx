import Image from "next/image";
import {
  AppleIcon,
  GooglePlayIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

import {
  polAppAndroidUrl,
  polAppIosUrl,
  telegramHandle,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/structure/navbar";
import Footer from "@/components/sections/footer";

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
    icon: WhatsAppIcon,
    detail: whatsappNumber,
    blurb: "Chat like you normally would. No app download needed.",
    buttons: [{ label: "Start Chat", href: whatsappHref, icon: WhatsAppIcon }],
    cardClass: "bg-whatsapp-tint border-whatsapp/40",
    iconClass: "bg-whatsapp text-white",
    ctaClass: "bg-whatsapp-deep text-white",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    detail: telegramHandle,
    blurb: "Message the bot directly, works on desktop and mobile.",
    buttons: [
      { label: "Try on Telegram", href: telegramHref, icon: TelegramIcon },
    ],
    cardClass: "bg-telegram-tint border-telegram/40",
    iconClass: "bg-telegram text-white",
    ctaClass: "bg-telegram-deep text-white",
  },
  {
    name: "PolApp",
    icon: PolAppLogo,
    detail: "iOS & Android",
    blurb: "The official Kerala Police app with all safety features.",
    buttons: [
      { label: "App Store", href: polAppIosUrl, icon: AppleIcon },
      { label: "Google Play", href: polAppAndroidUrl, icon: GooglePlayIcon },
    ],
    cardClass: "bg-tint-lavender border-brand/30",
    iconClass: "bg-white",
    ctaClass: "bg-violet-900 text-white",
  },
];

export default function TryPage() {
  return (
    <>
      <Navbar />

      <section className="relative isolate overflow-hidden py-16 sm:py-20">
        {/* Background decoration */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        >
          <div className="absolute top-0 left-[-10rem] h-[28rem] w-[28rem] rounded-full bg-tint-cyan/35 blur-[100px]" />
          <div className="absolute top-0 right-[-12rem] h-[32rem] w-[32rem] rounded-full bg-tint-blue/50 blur-[110px]" />
        </div>

        <Container className="relative z-10">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-neutral-200/80 bg-white py-1.5 pr-4 pl-1.5 shadow-sm shadow-neutral-950/5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-tint-blue p-1">
                  <Image
                    alt="Kerala Police logo"
                    src="/kp-logo.png"
                    height={20}
                    width={20}
                    priority
                  />
                </span>

                <span className="font-nunito text-xs font-semibold text-neutral-700 sm:text-sm">
                  Official Kerala Police Initiative
                </span>
              </div>
            </Reveal>

            <Reveal delay={120}>
              <h1 className="mx-auto mt-6 font-nunito text-4xl leading-[1.05] font-bold tracking-[-0.03em] text-neutral-950 sm:text-5xl">
                Available on three platforms
              </h1>
            </Reveal>

            <Reveal delay={200}>
              <p className="mx-auto mt-4 max-w-md text-base leading-relaxed text-neutral-500 sm:text-lg">
                Choose the one that works best for you.
              </p>
            </Reveal>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[600px] space-y-5 sm:mt-14">
            {PLATFORMS.map((platform, i) => (
              <Reveal key={platform.name} delay={280 + i * 120}>
                <div
                  className={cn(
                    "group rounded-[1.75rem] border-2 p-5 shadow-[0_16px_38px_-24px_rgba(15,23,42,0.3)] transition-all duration-300",
                    "hover:-translate-y-1 hover:shadow-[0_24px_50px_-24px_rgba(15,23,42,0.36)]",
                    "sm:p-7",
                    platform.cardClass,
                  )}
                >
                  <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex items-center gap-4">
                      <div
                        className={cn(
                          "flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl p-2.5 shadow-sm transition-transform duration-300 group-hover:scale-105",
                          platform.iconClass,
                        )}
                      >
                        <platform.icon className="h-full w-full object-contain" />
                      </div>

                      <div>
                        <div className="flex flex-wrap items-center gap-2">
                          <h3 className="font-nunito text-xl font-bold text-neutral-950">
                            {platform.name}
                          </h3>
                        </div>

                        <p className="mt-1 text-sm font-medium text-neutral-700">
                          {platform.detail}
                        </p>

                        <p className="mt-1 text-sm text-neutral-500">
                          {platform.blurb}
                        </p>
                      </div>
                    </div>

                    <div className="flex w-full flex-row justify-center gap-2 sm:w-auto sm:min-w-[200px] sm:flex-col">
                      {platform.buttons.map((button) => (
                        <a
                          key={button.label}
                          href={button.href}
                          target="_blank"
                          rel="noreferrer"
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-opacity hover:opacity-85 w-full",
                            platform.ctaClass,
                          )}
                        >
                          {button.icon && <button.icon className="h-4 w-4" />}
                          {button.label}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280 + PLATFORMS.length * 120 + 100}>
            <p className="mx-auto mt-10 max-w-md text-center text-sm text-neutral-500">
              Cyberwall uses AI and cybercrime data for analysis. Results may be
              incorrect. Help us improve by sharing your feedback through the
              Cyberwall bot.
            </p>
          </Reveal>
        </Container>
      </section>

      <Footer />
    </>
  );
}
