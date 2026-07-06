import Image from "next/image";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { helplineHref, helplineNumber, whatsappHref } from "@/lib/contact";

const Hero = () => {
  return (
    <section className="pt-14 pb-16 md:pt-20 md:pb-24">
      <Container>
        <Reveal>
          <div className="flex items-center gap-2.5 text-sm">
            <Image
              alt="Kerala Police logo"
              src="/kp-logo.png"
              height={22}
              width={22}
              className="shrink-0"
            />
            <span className="font-nohemi font-medium text-neutral-600">
              A Kerala Police initiative
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="font-nohemi mt-6 text-sm font-medium tracking-wide text-neutral-500 md:text-base">
            Proactive. Intuitive. Secure.
          </p>
        </Reveal>

        <Reveal delay={140}>
          <h1 className="font-nohemi mt-2 max-w-3xl text-4xl leading-[1.08] font-bold tracking-tight text-neutral-950 sm:text-5xl md:text-6xl">
            See it. Know it. Report it.
          </h1>
        </Reveal>

        <Reveal delay={220}>
          <p className="font-nohemi mt-6 max-w-xl text-base leading-relaxed tracking-wide text-neutral-600">
            Cyberwall helps citizens recognize digital threats early and
            report them with confidence. Forward a suspicious link, message,
            or call and get an instant risk assessment — right where you
            already chat.
          </p>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-9 flex flex-wrap items-center gap-5">
            <CtaLink href={whatsappHref} variant="primary">
              Try it on WhatsApp
            </CtaLink>
            <CtaLink
              href={helplineHref}
              variant="underline"
              className="text-neutral-600 hover:text-neutral-950"
            >
              Already lost money? Call {helplineNumber}
            </CtaLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
};

export default Hero;
