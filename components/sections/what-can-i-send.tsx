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
                  "flex h-full flex-col justify-between rounded-[2rem] p-6",
                  TARGET_BG[target.tone],
                )}
              >
                <IconBox icon={target.icon} tone="white" />
                <span className="font-nohemi mt-6 text-lg font-bold text-neutral-950">
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
