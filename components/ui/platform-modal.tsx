"use client";

import Image from "next/image";
import {
  AppleIcon,
  GooglePlayIcon,
  TelegramIcon,
  WhatsAppIcon,
  XIcon,
} from "@/components/icons";
import {
  polAppAndroidUrl,
  polAppIosUrl,
  telegramHandle,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

export const PLATFORM_MODAL_ID = "platform-modal";

function openPlatformModal() {
  const dialog = document.getElementById(PLATFORM_MODAL_ID) as HTMLDialogElement | null;
  dialog?.showModal();
}

const BUTTON_CLASSES = {
  primary:
    "brand-gradient rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:opacity-90",
  dark: "rounded-full bg-white px-7 py-3.5 text-base font-semibold text-neutral-950 transition-opacity hover:opacity-85",
} as const;

// Every "Try Now" / "Start Verifying Now" CTA across the page opens
// this same shared <dialog> (rendered once by <PlatformModal />).
export function TryNowButton({
  variant = "primary",
  className,
  children,
}: {
  variant?: keyof typeof BUTTON_CLASSES;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={openPlatformModal}
      className={cn(BUTTON_CLASSES[variant], className)}
    >
      {children}
    </button>
  );
}

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

// All three are equally valid ways to reach Cyberwall — same card
// treatment, same border weight, no "primary" badge. Each keeps only
// its own brand color for identity, not for hierarchy.
const PLATFORMS = [
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    copy: "Start checking immediately on the app you already use.",
    detail: whatsappNumber,
    buttons: [{ label: "Start Chat", href: whatsappHref, icon: null }],
    cardClass: "bg-whatsapp-tint border-whatsapp/40",
    iconClass: "bg-whatsapp text-white",
    ctaClass: "bg-whatsapp-deep text-white",
    shotClass: "bg-whatsapp/15 text-whatsapp-deep",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    copy: "Full Cyberwall experience, including larger files and APK verification.",
    detail: telegramHandle,
    buttons: [{ label: "Try on Telegram", href: telegramHref, icon: null }],
    cardClass: "bg-telegram-tint border-telegram/40",
    iconClass: "bg-telegram text-white",
    ctaClass: "bg-telegram-deep text-white",
    shotClass: "bg-telegram/15 text-telegram-deep",
  },
  {
    name: "PolApp",
    icon: PolAppLogo,
    copy: "Built into the official Kerala Police PolApp.",
    detail: "iOS & Android",
    buttons: [
      { label: "App Store", href: polAppIosUrl, icon: AppleIcon },
      { label: "Google Play", href: polAppAndroidUrl, icon: GooglePlayIcon },
    ],
    cardClass: "bg-tint-lavender border-brand/30",
    // The PolApp mark ships on a white background (not transparent), so
    // every box it sits in — including the screenshot slot — has to be
    // white too, or the logo's own backing shows up as a mismatched box.
    iconClass: "bg-white",
    ctaClass: "bg-neutral-950 text-white",
    shotClass: "bg-white",
  },
];

export function PlatformModal() {
  return (
    <dialog
      id={PLATFORM_MODAL_ID}
      className="m-auto max-h-[85vh] w-[min(560px,calc(100vw-2rem))] overflow-y-auto rounded-[2rem] bg-surface p-0 backdrop:bg-neutral-950/60 backdrop:backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) e.currentTarget.close();
      }}
    >
      <div className="p-6 md:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 className="font-nohemi text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
              Choose how to verify
            </h2>
            <p className="mt-1.5 text-base text-neutral-600">
              Cyberwall lives where you already chat.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={(e) => (e.currentTarget.closest("dialog") as HTMLDialogElement)?.close()}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-neutral-500 shadow-sm transition-colors hover:text-neutral-950"
          >
            <XIcon className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-7 space-y-4">
          {PLATFORMS.map((platform) => (
            <div
              key={platform.name}
              className={cn(
                "flex flex-col gap-4 rounded-3xl border-2 p-5 sm:flex-row sm:items-center",
                platform.cardClass,
              )}
            >
              {/* Screenshot slot — swap for the real product capture
                  (whatsapp/telegram/polapp example) when available. */}
              <div
                className={cn(
                  "hidden aspect-[9/16] w-16 shrink-0 items-center justify-center rounded-xl p-2 sm:flex",
                  platform.shotClass,
                )}
              >
                <platform.icon className="h-full w-full object-contain opacity-70" />
              </div>

              <span
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl p-2 shadow-sm sm:hidden",
                  platform.iconClass,
                )}
              >
                <platform.icon className="h-full w-full object-contain" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg p-1 sm:flex",
                      platform.iconClass,
                    )}
                  >
                    <platform.icon className="h-full w-full object-contain" />
                  </span>
                  <span className="font-nohemi text-lg font-bold text-neutral-950">
                    {platform.name}
                  </span>
                </div>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {platform.copy}
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">
                  {platform.detail}
                </p>
              </div>

              <div className="flex shrink-0 flex-wrap gap-2">
                {platform.buttons.map((button) => (
                  <a
                    key={button.label}
                    href={button.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(
                      "flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85",
                      button.icon
                        ? "bg-neutral-950 text-white"
                        : platform.ctaClass,
                    )}
                  >
                    {button.icon && <button.icon className="h-4 w-4" />}
                    {button.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
