"use client";

import { SmartphoneIcon, TelegramIcon, WhatsAppIcon, XIcon } from "@/components/icons";
import {
  keralaPoliceUrl,
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

const PLATFORMS = [
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    badge: "Primary",
    copy: "Start checking immediately on the app you already use.",
    detail: whatsappNumber,
    cta: "Start Chat",
    href: whatsappHref,
    cardClass: "bg-whatsapp-tint border-whatsapp/40",
    iconClass: "bg-whatsapp text-white",
    ctaClass: "bg-whatsapp-deep text-white",
    shotClass: "bg-whatsapp/15 text-whatsapp-deep",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    badge: null,
    copy: "Full Cyberwall experience, including larger files and APK verification.",
    detail: telegramHandle,
    cta: "Try on Telegram",
    href: telegramHref,
    cardClass: "bg-telegram-tint border-transparent",
    iconClass: "bg-telegram text-white",
    ctaClass: "bg-telegram-deep text-white",
    shotClass: "bg-telegram/15 text-telegram-deep",
  },
  {
    name: "PolApp",
    icon: SmartphoneIcon,
    badge: null,
    copy: "Built into the official Kerala Police PolApp.",
    detail: "iOS & Android",
    cta: "Download App",
    href: keralaPoliceUrl,
    cardClass: "bg-tint-lavender border-transparent",
    iconClass: "brand-gradient text-white",
    ctaClass: "bg-neutral-950 text-white",
    shotClass: "bg-brand/10 text-brand",
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
                  "hidden aspect-[9/16] w-16 shrink-0 items-center justify-center rounded-xl sm:flex",
                  platform.shotClass,
                )}
              >
                <platform.icon className="h-6 w-6 opacity-60" />
              </div>

              <span
                className={cn(
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl shadow-sm sm:hidden",
                  platform.iconClass,
                )}
              >
                <platform.icon className="h-7 w-7" />
              </span>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "hidden h-7 w-7 shrink-0 items-center justify-center rounded-lg sm:flex",
                      platform.iconClass,
                    )}
                  >
                    <platform.icon className="h-4 w-4" />
                  </span>
                  <span className="font-nohemi text-lg font-bold text-neutral-950">
                    {platform.name}
                  </span>
                  {platform.badge && (
                    <span className="rounded-full bg-whatsapp-deep px-2.5 py-0.5 text-[11px] font-semibold text-white">
                      {platform.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-neutral-600">
                  {platform.copy}
                </p>
                <p className="mt-1 text-sm font-semibold text-neutral-800">
                  {platform.detail}
                </p>
              </div>

              <a
                href={platform.href}
                target="_blank"
                rel="noreferrer"
                className={cn(
                  "shrink-0 rounded-full px-5 py-2.5 text-sm font-semibold transition-opacity hover:opacity-85",
                  platform.ctaClass,
                )}
              >
                {platform.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </dialog>
  );
}
