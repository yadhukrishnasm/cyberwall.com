import { SmartphoneIcon, TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  telegramHandle,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";
import { cn } from "@/lib/utils";

const CHANNELS = [
  {
    name: "WhatsApp",
    icon: WhatsAppIcon,
    description:
      "Forward any suspicious message, link, or photo directly to our verified bot.",
    detail: whatsappNumber,
    href: whatsappHref,
    tint: "bg-box-1",
  },
  {
    name: "Telegram",
    icon: TelegramIcon,
    description:
      "Comprehensive bot support for file analysis and APK verification.",
    detail: telegramHandle,
    href: telegramHref,
    tint: "bg-box-2",
  },
  {
    name: "PolApp",
    icon: SmartphoneIcon,
    description:
      "Integrated with the official Kerala Police PolApp for direct reporting.",
    detail: "iOS & Android",
    href: undefined,
    tint: "bg-box-3",
  },
];

const TAGS = [
  "Zero apps to download",
  "Zero learning curve",
  "Native multilingual",
];

export default function AccessChannels() {
  return (
    <section className="border-t border-neutral-200 py-20 md:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            title="Security where you already are."
            description="No new apps. No complex setup. Just forward and verify."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CHANNELS.map((channel, i) => (
            <Reveal key={channel.name} delay={i * 100}>
              <div
                className={cn(
                  "flex h-full flex-col rounded-2xl border border-neutral-200 p-6",
                )}
              >
                <channel.icon className="h-5 w-5 text-neutral-950" />
                <span className="mt-4 text-xs font-medium tracking-wide text-neutral-400 uppercase">
                  {channel.name}
                </span>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-neutral-600">
                  {channel.description}
                </p>
                {channel.href ? (
                  <a
                    href={channel.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 text-sm font-medium text-neutral-950 underline decoration-neutral-300 underline-offset-4 transition-colors hover:decoration-neutral-950"
                  >
                    {channel.detail}
                  </a>
                ) : (
                  <span className="mt-5 text-sm font-medium text-neutral-950">
                    {channel.detail}
                  </span>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2">
            {TAGS.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-2 text-xs text-neutral-500"
              >
                <span className="h-1 w-1 rounded-full bg-neutral-400" />
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
