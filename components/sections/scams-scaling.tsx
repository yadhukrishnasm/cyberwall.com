import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

const STATS = [
  { value: "28.1 Lakh", label: "Cybercrime cases reported in India (2025)" },
  { value: "24%", label: "Increase compared to the previous year" },
  { value: "₹814 Cr", label: "Estimated annual financial loss in Kerala" },
];

export default function ScamsScaling() {
  return (
    <section className="py-8">
      <Container>
        <div className="relative overflow-hidden rounded-[2rem] bg-neutral-950 px-8 py-16 text-white md:px-14 md:py-20">
          <div className="pointer-events-none absolute -top-24 -right-16 h-72 w-72 rounded-full bg-brand/25 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 -left-10 h-72 w-72 rounded-full bg-cyan/15 blur-3xl" />

          <Reveal className="relative">
            <SectionHeading
              tone="dark"
              eyebrow="The reality"
              title="Scams are scaling."
            />
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              As digital scams become increasingly organized and AI-driven,
              traditional defense is no longer enough. Cyberwall is Kerala
              Police&apos;s proactive answer — putting immediate,
              intelligence-backed verification tools directly in citizens&apos;
              hands to intercept scams before they cause harm.
            </p>
          </Reveal>

          <div className="relative mt-12 grid gap-4 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="h-full rounded-[1.5rem] border border-white/10 bg-white/5 p-7">
                  <p className="font-nunito text-brand-gradient text-4xl font-bold md:text-5xl">
                    {stat.value}
                  </p>
                  <p className="mt-3 text-base leading-relaxed text-neutral-400">
                    {stat.label}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={340}>
            <p className="relative mt-8 text-xs leading-relaxed text-neutral-500">
              Sources:{" "}
              <a
                href="https://pib.gov.in/PressReleasePage.aspx?PRID=2085351"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-600 underline-offset-2 hover:text-neutral-300"
              >
                MHA Year-End Review 2025 (PIB)
              </a>
              , Ministry of Home Affairs ·{" "}
              <a
                href="https://www.newindianexpress.com/states/kerala/2026/Jan/01/rs-814-crore-swindled-by-cyber-fin-criminals-from-kerala"
                target="_blank"
                rel="noreferrer"
                className="underline decoration-neutral-600 underline-offset-2 hover:text-neutral-300"
              >
                New Indian Express (Jan 2026)
              </a>
              , Kerala Police Cyber Division &amp; SCRB.
            </p>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
