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
    <section className="py-10">
      <Container>
        <div className="rounded-[2.5rem] bg-neutral-950 px-8 py-16 text-white md:px-14 md:py-20">
          <Reveal>
            <SectionHeading tone="dark" eyebrow="The reality" title="Scams are scaling." />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-neutral-400 md:text-lg">
              As digital scams become increasingly organized and AI-driven,
              traditional defense is no longer enough. Cyberwall is engineered
              as Kerala Police&apos;s proactive solution to this growing
              threat — putting immediate, intelligence-backed verification
              tools directly in the hands of citizens to intercept and block
              scams before they cause financial or personal harm.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-3">
            {STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100}>
                <div className="h-full rounded-3xl bg-white/5 p-7">
                  <p className="font-nohemi text-brand-gradient text-4xl font-bold md:text-5xl">
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
            <div className="mt-10 space-y-1 border-t border-white/10 pt-6 text-xs leading-relaxed text-neutral-500">
              <p>
                India statistics source:{" "}
                <a
                  href="https://pib.gov.in/PressReleasePage.aspx?PRID=2085351"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-600 underline-offset-2 hover:text-neutral-300"
                >
                  MHA Year-End Review 2025 (PIB)
                </a>
                , Ministry of Home Affairs.
              </p>
              <p>
                Kerala statistics source:{" "}
                <a
                  href="https://www.newindianexpress.com/states/kerala/2026/Jan/01/rs-814-crore-swindled-by-cyber-fin-criminals-from-kerala"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-neutral-600 underline-offset-2 hover:text-neutral-300"
                >
                  New Indian Express Report (Jan 2026)
                </a>
                , Kerala Police Cyber Division &amp; State Crime Records
                Bureau (SCRB) data.
              </p>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
