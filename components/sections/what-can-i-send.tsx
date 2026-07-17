import type { ComponentType, SVGProps } from "react";
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
import { IconBox } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const INPUT_METHODS = [
  { label: "Typed text or prompt", icon: TypeIcon },
  { label: "Screenshot or image", icon: ImageIcon },
  { label: "Voice note or audio", icon: MicIcon },
];

const TARGETS: {
  label: string;
  icon: IconType;
  tone: "blue" | "cyan" | "lavender";
  span?: boolean;
}[] = [
  { label: "Website", icon: LinkIcon, tone: "blue" },
  { label: "SMS", icon: MessageIcon, tone: "cyan" },
  { label: "Phone Number", icon: PhoneIcon, tone: "lavender" },
  { label: "Email", icon: MailIcon, tone: "cyan" },
  { label: "Bank Details", icon: LandmarkIcon, tone: "lavender" },
  { label: "APK", icon: PackageIcon, tone: "blue" },
  { label: "IP Address", icon: GlobeIcon, tone: "cyan", span: true },
];

const TARGET_BG = {
  blue: "bg-tint-blue",
  cyan: "bg-tint-cyan",
  lavender: "bg-tint-lavender",
} as const;

// Hand-picked "scattered" transforms so no two icon objects sit at the
// same offset or angle — deterministic (not Math.random) to stay
// hydration-safe. Each combines a vertical anchor, a bleed amount, and
// a tilt. Cycled by tile index.
const ICON_POSES = [
  "translate-y-[-54%] translate-x-[26%] rotate-[10deg]",
  "translate-y-[-38%] translate-x-[33%] rotate-[-8deg]",
  "translate-y-[-60%] translate-x-[20%] rotate-[16deg]",
  "translate-y-[-44%] translate-x-[30%] rotate-[-12deg]",
  "translate-y-[-56%] translate-x-[23%] rotate-[4deg]",
  "translate-y-[-40%] translate-x-[35%] rotate-[-5deg]",
  "translate-y-[-50%] translate-x-[17%] rotate-[13deg]",
];

export default function WhatCanISend() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <div className="grid auto-rows-[minmax(9.5rem,auto)] grid-cols-2 gap-4 md:grid-cols-4">
          {/* Focal card — carries the heading, caption and input methods */}
          <Reveal className="col-span-2 md:row-span-2">
            <div className="brand-gradient relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 md:p-10">
              <div className="pointer-events-none absolute -top-16 -right-12 h-52 w-52 rounded-full bg-white/10 blur-3xl" />
              <div className="relative">
                <h2 className="font-nohemi text-3xl leading-tight font-bold text-white md:text-4xl">
                  What can I send?
                </h2>
                <p className="mt-4 max-w-sm text-base leading-relaxed text-white/80">
                  Send whatever you&apos;re unsure about. Cyberwall understands
                  what you&apos;re trying to verify.
                </p>
              </div>

              <div className="relative mt-8 space-y-2.5 md:mt-auto md:pt-8">
                <p className="text-xs font-semibold text-white/60">
                  How you send it
                </p>
                {INPUT_METHODS.map((method) => (
                  <div key={method.label} className="flex items-center gap-3">
                    <IconBox icon={method.icon} tone="glass" size="sm" />
                    <span className="text-sm font-medium text-white">
                      {method.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Analysis targets — colorful tiles filling the bento */}
          {TARGETS.map((target, i) => (
            <Reveal
              key={target.label}
              delay={i * 50}
              className={cn(target.span && "col-span-2")}
            >
              <div
                className={cn(
                  "relative flex h-full min-h-[11rem] flex-col justify-end overflow-hidden rounded-[2rem] p-7",
                  TARGET_BG[target.tone],
                )}
              >
                {/* 3D-lite icon object bleeding off the right edge.
                    To use a real 3D icon render later, drop a PNG in
                    /public and swap this block for:
                    <Image src={target.image} fill className="absolute ... object-contain" /> */}
                <div
                  className={cn(
                    "pointer-events-none absolute top-1/2 right-0",
                    ICON_POSES[i % ICON_POSES.length],
                  )}
                >
                  <div className="flex h-28 w-28 items-center justify-center rounded-[2rem] bg-linear-to-br from-white via-white to-brand/10 shadow-xl shadow-brand/25 ring-1 ring-white/70">
                    <target.icon
                      strokeWidth={2.25}
                      className="h-14 w-14 text-brand drop-shadow-sm"
                    />
                  </div>
                </div>

                <span className="font-nohemi relative text-xl font-bold text-neutral-950">
                  {target.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
