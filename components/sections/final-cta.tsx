import { Container } from "@/components/ui/container";
import { TryNowButton } from "@/components/ui/platform-modal";
import { Reveal } from "@/components/ui/reveal";

export default function FinalCta() {
  return (
    <section className="py-10">
      <Container>
        <Reveal>
          <div className="brand-gradient relative overflow-hidden rounded-[2.5rem] px-8 py-16 text-center md:py-24">
            <div className="absolute -top-24 -right-16 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
            <div className="absolute -bottom-24 -left-16 h-72 w-72 rounded-full bg-cyan/25 blur-3xl" />

            <h2 className="font-nohemi relative mx-auto max-w-2xl text-3xl leading-[1.08] font-bold tracking-tight text-white md:text-5xl">
              Ask Cyberwall before you trust.
            </h2>

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
