import type { ComponentType, ReactNode, SVGProps } from "react";
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
  TypeIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;
type Tone = "blue" | "cyan" | "lavender";
type CardSpan = "normal" | "wide";

type VisualItem = {
  label: string;
  description: string;
  icon: IconType;
  tone: Tone;
  preview: ReactNode;
  span?: CardSpan;
};

const TINT_BG: Record<Tone, string> = {
  blue: "bg-tint-blue",
  cyan: "bg-tint-cyan",
  lavender: "bg-tint-lavender",
};

const INPUT_METHODS: VisualItem[] = [
  {
    label: "Typed Text / Prompt",
    description:
      "Type or paste the suspicious message, claim, or situation directly.",
    icon: TypeIcon,
    tone: "blue",
    preview: (
      <div className="w-full max-w-[15rem] rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-brand" />

          <span className="text-[10px] font-semibold text-neutral-400">
            Message
          </span>
        </div>

        <p className="mt-3 text-[11px] leading-relaxed text-neutral-700">
          I received a message saying my bank account will be blocked. Is it
          genuine?
        </p>

        <div className="mt-4 flex items-center gap-1.5">
          <span className="h-1.5 w-16 rounded-full bg-brand/15" />
          <span className="h-1.5 w-8 rounded-full bg-brand/10" />
        </div>
      </div>
    ),
  },
  {
    label: "Screenshot / Image",
    description:
      "Upload an image or screenshot containing suspicious information.",
    icon: ImageIcon,
    tone: "cyan",
    preview: (
      <div className="w-full max-w-[13rem] rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="h-2 w-16 rounded-full bg-neutral-200" />
          <div className="h-5 w-5 rounded-full bg-tint-blue" />
        </div>

        <div className="mt-3 rounded-xl bg-neutral-100 p-3">
          <div className="h-2 w-24 rounded-full bg-neutral-300" />
          <div className="mt-2 h-2 w-16 rounded-full bg-neutral-200" />

          <div className="mt-4 rounded-lg bg-flow-red-bg px-3 py-2">
            <p className="text-[8px] font-semibold text-flow-red-border">
              Payment required immediately
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Voice Note / Audio",
    description:
      "Send a voice note or audio recording when explaining it is easier.",
    icon: MicIcon,
    tone: "lavender",
    preview: (
      <div className="w-full max-w-[15rem] rounded-2xl border border-neutral-200/70 bg-white px-4 py-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand text-white">
            <MicIcon className="h-4 w-4" />
          </div>

          <div className="flex flex-1 items-center justify-center gap-1">
            {[10, 18, 26, 14, 30, 22, 12, 24, 16, 9].map(
              (height, index) => (
                <span
                  key={index}
                  className="w-1 rounded-full bg-brand/45"
                  style={{ height }}
                />
              ),
            )}
          </div>

          <span className="text-[9px] font-medium text-neutral-400">
            0:18
          </span>
        </div>
      </div>
    ),
  },
];

const ANALYSIS_TARGETS: VisualItem[] = [
  {
    label: "Website",
    description:
      "Verify suspicious websites and links before opening or sharing them.",
    icon: LinkIcon,
    tone: "blue",
    span:"wide",
    preview: (
      <div className="w-full max-w-[15rem] rounded-2xl border border-neutral-200/70 bg-white p-3 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
            <span className="h-1.5 w-1.5 rounded-full bg-neutral-300" />
          </div>

          <div className="min-w-0 flex-1 truncate rounded-lg bg-neutral-100 px-2 py-1.5 text-[9px] text-neutral-500">
            secure-bank-update.example
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-flow-red-bg text-xs font-bold text-flow-red-border">
            !
          </div>

          <div>
            <p className="text-[10px] font-semibold text-neutral-800">
              Suspicious link
            </p>

            <p className="text-[8px] text-neutral-400">
              Domain does not match
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "SMS",
    description:
      "Check suspicious text messages, urgent claims, and unknown senders.",
    icon: MessageIcon,
    tone: "cyan",
    preview: (
      <div className="w-full max-w-[15rem]">
        <div className="rounded-2xl rounded-bl-md border border-neutral-200/70 bg-white px-4 py-3 shadow-sm">
          <p className="text-[10px] leading-relaxed text-neutral-700">
            Your electricity connection will be disconnected tonight. Pay
            immediately using this link.
          </p>
        </div>

        <p className="mt-2 px-2 text-[8px] font-medium text-neutral-400">
          Unknown sender
        </p>
      </div>
    ),
  },
  {
    label: "Phone Number",
    description:
      "Check unknown callers, repeated calls, and suspicious phone numbers.",
    icon: PhoneIcon,
    tone: "lavender",
    preview: (
      <div className="w-full max-w-[14rem] rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-tint-blue">
            <PhoneIcon className="h-4 w-4 text-brand" />
          </div>

          <div className="min-w-0">
            <p className="font-nunito truncate text-xs font-semibold text-neutral-950">
              +91 98765 43210
            </p>

            <p className="mt-1 text-[9px] text-neutral-400">
              Unknown caller · 3 calls
            </p>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "Email",
    description:
      "Inspect senders, email content, attachments, and included links.",
    icon: MailIcon,
    tone: "cyan",
    preview: (
      <div className="w-full max-w-[15rem] rounded-2xl border border-neutral-200/70 bg-white p-3.5 shadow-sm">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <p className="truncate text-[10px] font-semibold text-neutral-800">
              Account verification required
            </p>

            <p className="mt-1 truncate text-[8px] text-neutral-400">
              security@bank-support.example
            </p>
          </div>

          <MailIcon className="h-4 w-4 shrink-0 text-brand" />
        </div>

        <div className="mt-3 rounded-lg bg-neutral-100 px-2.5 py-2">
          <p className="line-clamp-2 text-[8px] leading-relaxed text-neutral-500">
            Verify your account immediately to prevent temporary suspension.
          </p>
        </div>
      </div>
    ),
  },
  {
    label: "Bank Details",
    description:
      "Verify account information before transferring or receiving money.",
    icon: LandmarkIcon,
    tone: "lavender",
    preview: (
      <div className="w-full max-w-[14rem] rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-tint-blue">
            <LandmarkIcon className="h-4 w-4 text-brand" />
          </div>

          <div>
            <p className="text-[8px] font-medium text-neutral-400">
              Account received
            </p>

            <p className="mt-0.5 font-mono text-xs font-semibold text-neutral-800">
              •••• •••• 4582
            </p>
          </div>
        </div>

        <div className="mt-3 flex items-center justify-between border-t border-neutral-100 pt-3">
          <span className="text-[8px] text-neutral-400">IFSC</span>

          <span className="font-mono text-[9px] font-medium text-neutral-700">
            ABCD0123456
          </span>
        </div>
      </div>
    ),
  },
  {
    label: "APK",
    description:
      "Upload Android application files before installing them on your device.",
    icon: PackageIcon,
    tone: "blue",
    preview: (
      <div className="w-full max-w-[14rem] rounded-2xl border border-neutral-200/70 bg-white p-4 shadow-sm">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-tint-blue">
            <PackageIcon className="h-5 w-5 text-brand" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="truncate text-xs font-semibold text-neutral-800">
              Bank_Update.apk
            </p>

            <div className="mt-1.5 flex items-center gap-2">
              <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[8px] text-neutral-500">
                Android app
              </span>

              <span className="text-[8px] text-neutral-400">14.8 MB</span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    label: "IP Address",
    description:
      "Check infrastructure, location information, and suspicious risk signals.",
    icon: GlobeIcon,
    tone: "cyan",
    // span: "wide",
    preview: (
      <div className="w-full max-w-[14rem] rounded-2xl border border-neutral-800 bg-neutral-950 px-4 py-3 shadow-sm">
        <div className="flex items-center justify-between">
          <p className="font-mono text-[8px] text-neutral-500">
            IP address
          </p>

          <GlobeIcon className="h-3.5 w-3.5 text-cyan-300" />
        </div>

        <p className="mt-2 font-mono text-sm font-semibold text-white">
          185.220.101.42
        </p>

        <div className="mt-3 flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-flow-amber-border" />

          <span className="text-[8px] text-neutral-400">
            Ready for analysis
          </span>
        </div>
      </div>
    ),
  },
];

function VisualCard({
  item,
  index,
}: {
  item: VisualItem;
  index: number;
}) {
  return (
    <Reveal
      delay={index * 60}
      className={cn(
        "h-full min-w-0",
        item.span === "wide" && "sm:col-span-2 lg:col-span-2",
      )}
    >
      <article className="group flex h-full min-w-0 flex-col">
        <div
          className={cn(
            "relative isolate flex min-h-[15rem] flex-1 items-center justify-center overflow-hidden rounded-[2rem]",
            "px-4 py-8 sm:min-h-[17rem] sm:px-6 sm:py-10",
            item.span === "wide" && "sm:min-h-[16rem]",
            TINT_BG[item.tone],
          )}
        >
          {/* Safari-safe decorative layers */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -bottom-14 h-44 w-44 rounded-full bg-white/40"
            style={{
              filter: "blur(48px)",
              WebkitFilter: "blur(48px)",
              transform: "translateZ(0)",
            }}
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-16 -left-12 h-36 w-36 rounded-full bg-white/25"
            style={{
              filter: "blur(42px)",
              WebkitFilter: "blur(42px)",
              transform: "translateZ(0)",
            }}
          />

          {/* Existing preview object, enlarged */}
          <div
            className={cn(
              "relative z-10 flex w-full min-w-0 origin-center justify-center",
              "transform-gpu will-change-transform",
              "transition-transform duration-500 ease-out",
              "scale-[1.08] group-hover:scale-[1.12]",
              "sm:scale-[1.16] sm:group-hover:scale-[1.2]",
              item.span === "wide" &&
                "sm:scale-[1.22] sm:group-hover:scale-[1.26]",
            )}
            style={{
              WebkitBackfaceVisibility: "hidden",
              backfaceVisibility: "hidden",
            }}
          >
            {item.preview}
          </div>
        </div>

        <h3 className="font-nunito mt-4 text-lg leading-tight font-bold text-neutral-950 sm:mt-5 sm:text-xl">
          {item.label}
        </h3>

        <p className="mt-1.5 text-sm leading-relaxed text-neutral-600 sm:mt-2">
          {item.description}
        </p>
      </article>
    </Reveal>
  );
}

export default function WhatCanISend() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="What can I send?"
            title="Send whatever you're unsure about."
            description="Cyberwall understands what you're trying to verify."
          />
        </Reveal>

        {/* Input methods */}
        <div className="mt-10 sm:mt-12">
          <Reveal>
            <div className="border-b border-neutral-200/70 pb-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-brand uppercase sm:text-sm sm:normal-case sm:tracking-normal">
                    Input Methods
                  </p>

                  <h3 className="font-nunito mt-1.5 text-xl leading-tight font-bold text-neutral-950 sm:text-2xl">
                    How you send
                  </h3>
                </div>

                <p className="text-sm leading-relaxed text-neutral-500">
                  Text, image, or audio
                </p>
              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
            {INPUT_METHODS.map((item, index) => (
              <div
                key={item.label}
                className={cn(
                  "min-w-0",
                  index === 2 && "sm:col-span-2 lg:col-span-1",
                )}
              >
                <VisualCard item={item} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Analysis targets */}
        <div className="mt-20 md:mt-24">
          <Reveal>
            <div className="border-b border-neutral-200/70 pb-5">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-xs font-bold tracking-[0.12em] text-brand uppercase sm:text-sm sm:normal-case sm:tracking-normal">
                    Analysis Targets
                  </p>

                  <h3 className="font-nunito mt-1.5 text-xl leading-tight font-bold text-neutral-950 sm:text-2xl">
                    What we verify
                  </h3>
                </div>


              </div>
            </div>
          </Reveal>

          <div className="mt-6 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {ANALYSIS_TARGETS.map((item, index) => (
              <VisualCard
                key={item.label}
                item={item}
                index={index}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
