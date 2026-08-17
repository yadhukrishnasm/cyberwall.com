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
  console.log("trying to open modal");
  const dialog = document.getElementById(
    PLATFORM_MODAL_ID,
  ) as HTMLDialogElement | null;
  dialog?.showModal();
}

const BUTTON_CLASSES = {
  primary:
    "brand-gradient rounded-3xl px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-brand/25 transition-all hover:opacity-90",
  dark: "rounded-4xl bg-white px-7 py-3.5 text-base font-semibold text-neutral-950 transition-opacity hover:opacity-85",
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
            <h2 className="font-nunito text-2xl font-bold tracking-tight text-neutral-950 md:text-3xl">
              Choose how to verify
            </h2>
            <p className="mt-1.5 text-base text-neutral-600">
              Cyberwall lives where you already chat.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close"
            onClick={(e) =>
              (e.currentTarget.closest("dialog") as HTMLDialogElement)?.close()
            }
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
                "rounded-3xl border-2 p-5 md:p-6",
                platform.cardClass,
              )}
            >
              <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
                {/* Left */}
                <div className="flex items-center gap-4">
                  <div
                    className={cn(
                      "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl p-2 shadow-sm",
                      platform.iconClass,
                    )}
                  >
                    <platform.icon className="h-full w-full object-contain" />
                  </div>

                  <div>
                    <h3 className="font-nunito text-lg font-bold text-neutral-950">
                      {platform.name}
                    </h3>

                    <p className="mt-1 text-sm font-medium text-neutral-700">
                      {platform.detail}
                    </p>
                  </div>
                </div>

                {/* Right */}
                <div className="flex w-full flex-row sm:flex-col justify-center gap-2 sm:w-auto sm:min-w-[200px]">
                  {platform.buttons.map((button) => (
                    <a
                      key={button.label}
                      href={button.href}
                      target="_blank"
                      rel="noreferrer"
                      className={cn(
                        "flex items-center justify-center gap-2 w-full rounded-full px-5 py-2 sm:py-3.5 text-sm font-semibold transition-opacity hover:opacity-85",
                        button.icon
                          ? "bg-violet-900 text-white"
                          : platform.ctaClass,
                      )}
                    >
                      {button.icon && <button.icon className="h-4 w-4" />}
                      {button.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
