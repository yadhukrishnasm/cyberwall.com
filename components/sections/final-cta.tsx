import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/platform-modal";
import { Reveal } from "@/components/ui/reveal";

export default function FinalCta() {
  return (
    <section className="py-8">
      <Container>
        <Reveal>
          <div className="brand-gradient relative overflow-hidden rounded-[2rem] px-8 py-20 text-center md:py-28">
            <div className="pointer-events-none absolute -top-28 -right-20 h-80 w-80 rounded-full bg-white/10 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-cyan/25 blur-3xl" />

            <h2 className="font-nohemi relative mx-auto max-w-3xl text-4xl leading-[1.05] font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              Ask Cyberwall before you trust.
            </h2>
            <p className="relative mx-auto mt-5 max-w-md text-base text-white/80 md:text-lg">
              Free, official, and always a message away.
            </p>

            <div className="relative mt-9">
              <TryNowButton
                variant="dark"
                className="text-brand shadow-xl shadow-brand-deep/30"
              >
                Start Verifying Now
              </TryNowButton>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
