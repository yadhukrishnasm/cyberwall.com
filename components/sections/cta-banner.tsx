import { TelegramIcon, WhatsAppIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import {
  telegramHandle,
  telegramHref,
  whatsappHref,
  whatsappNumber,
} from "@/lib/contact";

export default function CtaBanner() {
  return (
    <section className="border-t border-neutral-200 py-20 md:py-28">
      <Container className="text-center">
        <Reveal>
          <SectionHeading
            align="center"
            title="Start protecting yourself."
            description="Join thousands of citizens using Cyberwall to stay safe from digital fraud. Choose whichever platform you already use."
          />
        </Reveal>

        <Reveal delay={140}>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <CtaLink href={whatsappHref} variant="primary" icon={<WhatsAppIcon className="h-4 w-4" />}>
              WhatsApp · {whatsappNumber}
            </CtaLink>
            <CtaLink href={telegramHref} variant="secondary" icon={<TelegramIcon className="h-4 w-4" />}>
              Telegram · {telegramHandle}
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
