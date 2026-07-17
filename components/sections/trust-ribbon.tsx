import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const BADGES = ["Kerala Police", "Cyber Division", "AI-Powered Public Safety"];

export default function TrustRibbon() {
  return (
    <section className="pb-4">
      <Container>
        <Reveal>
          <div className="brand-gradient relative flex flex-col items-center gap-5 overflow-hidden rounded-4xl px-6 py-9 text-center md:flex-row md:justify-between md:px-10 md:text-left">
            <div className="pointer-events-none absolute -top-16 right-10 h-40 w-40 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-center gap-3.5 md:flex-row md:items-center">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white p-2">
                <Image
                  src="/kp-logo.png"
                  alt="Kerala Police logo"
                  width={32}
                  height={32}
                />
              </span>
              <p className="max-w-xs text-sm leading-relaxed text-white/85">
                Developed by Kerala Police to help people identify digital
                scams before they happen.
              </p>
            </div>

            <div className="relative flex flex-wrap items-center justify-center gap-x-3 gap-y-2 md:justify-end">
              {BADGES.map((badge, i) => (
                <span key={badge} className="flex items-center gap-3">
                  {i > 0 && (
                    <span className="h-1 w-1 rounded-full bg-white/40" />
                  )}
                  <span className="font-nohemi text-sm font-bold text-white">
                    {badge}
                  </span>
                </span>
              ))}
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
