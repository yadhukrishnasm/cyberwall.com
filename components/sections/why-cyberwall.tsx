import {
  ShieldCheckIcon,
} from "@/components/icons";
import { Container } from "@/components/ui/container";
import { IconBox } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { CyberwallInterceptionStory } from "./cyberwall-intersection";



export default function WhyCyberwall() {
  return (
    <>
      <section id="why-cyberwall" className="py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow="Why Cyberwall"
              title="Scams keep changing. Cyberwall keeps you one step ahead."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 md:grid-cols-5">
            <Reveal className="md:col-span-3">
              <div className="flex h-full flex-col justify-between rounded-[2rem] border border-neutral-200/70 bg-white p-8 md:p-10">
                <p className="text-sm font-semibold text-neutral-400">
                  The threat landscape
                </p>

                <p className="mt-4 text-xl leading-relaxed text-neutral-700 md:text-2xl">
                  Digital scams no longer come only through fake websites. They
                  arrive through messages, calls, QR codes, fake jobs,
                  investment offers, and social engineering.
                </p>
              </div>
            </Reveal>

            <Reveal delay={80} className="md:col-span-2">
              <div className="brand-gradient relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-8 md:p-10">
                <div className="pointer-events-none absolute -bottom-12 -right-10 h-44 w-44 rounded-full bg-white/10 blur-3xl" />

                <IconBox
                  icon={ShieldCheckIcon}
                  tone="glass"
                  size="lg"
                />

                <div className="relative mt-8">
                  <p className="text-sm font-semibold text-white/70">
                    The Cyberwall shield
                  </p>

                  <p className="mt-3 font-nohemi text-2xl font-bold leading-snug text-white md:text-3xl">
                    Verify them before you act.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      <CyberwallInterceptionStory />
    </>
  );
}
