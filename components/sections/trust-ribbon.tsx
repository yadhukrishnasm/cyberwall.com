import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";

const BADGES = ["Kerala Police", "Cyber Division", "AI-Powered Public Safety"];

export default function TrustRibbon() {
  return (
    <section className="py-10">
      <Container>
        <Reveal>
          <div className="brand-gradient flex flex-col items-center gap-3 rounded-3xl px-6 py-8 text-center">
            <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
              {BADGES.map((badge, i) => (
                <span key={badge} className="flex items-center gap-5">
                  <span className="font-nohemi text-sm font-bold text-white md:text-base">
                    {badge}
                  </span>
                  {i < BADGES.length - 1 && (
                    <span className="hidden h-1.5 w-1.5 rounded-full bg-white/50 sm:inline-block" />
                  )}
                </span>
              ))}
            </div>
            <p className="text-sm text-white/75 italic md:text-base">
              Developed by Kerala Police to help people identify digital scams
              before they happen.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
