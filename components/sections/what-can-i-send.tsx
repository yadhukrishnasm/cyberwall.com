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

const INPUT_METHODS = [
  { label: "Typed Text / Prompt", icon: TypeIcon },
  { label: "Screenshot / Image", icon: ImageIcon },
  { label: "Voice Note / Audio", icon: MicIcon },
];

const ANALYSIS_TARGETS = [
  { label: "Website", icon: LinkIcon },
  { label: "SMS", icon: MessageIcon },
  { label: "Phone Number", icon: PhoneIcon },
  { label: "Email", icon: MailIcon },
  { label: "Bank Details", icon: LandmarkIcon },
  { label: "APK", icon: PackageIcon },
  { label: "IP Address", icon: GlobeIcon },
];

function ChipRow({
  items,
}: {
  items: { label: string; icon: (typeof INPUT_METHODS)[number]["icon"] }[];
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item) => (
        <span
          key={item.label}
          className="inline-flex items-center gap-2.5 rounded-full border border-white bg-white px-5 py-3 text-base font-medium text-neutral-800 shadow-sm"
        >
          <item.icon className="h-5 w-5 text-brand" />
          {item.label}
        </span>
      ))}
    </div>
  );
}

export default function WhatCanISend() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="brand-gradient-soft rounded-[2.5rem] p-8 md:p-14">
            <SectionHeading eyebrow="Inputs" title="What can I send?" />

            <div className="mt-10 space-y-10">
              <Reveal delay={80}>
                <span className="font-nohemi text-sm font-semibold text-neutral-500">
                  How you send it
                </span>
                <div className="mt-4">
                  <ChipRow items={INPUT_METHODS} />
                </div>
              </Reveal>

              <Reveal delay={140}>
                <span className="font-nohemi text-sm font-semibold text-neutral-500">
                  What we verify
                </span>
                <div className="mt-4">
                  <ChipRow items={ANALYSIS_TARGETS} />
                </div>
              </Reveal>
            </div>

            <Reveal delay={200}>
              <p className="mt-10 max-w-lg text-lg leading-relaxed text-neutral-700">
                Send whatever you&apos;re unsure about.{" "}
                <span className="font-semibold text-neutral-950">
                  Cyberwall understands what you&apos;re trying to verify.
                </span>
              </p>
            </Reveal>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
