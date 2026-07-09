import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { Reveal } from "@/components/ui/reveal";
import { cybercrimeReportUrl, helplineHref, helplineNumber } from "@/lib/contact";

const STEPS = [
  "Stop any further payments.",
  `Call ${helplineNumber} immediately.`,
  "Report the incident as soon as possible.",
];

export default function Emergency() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <Reveal>
          <div className="rounded-[2.5rem] border-2 border-flow-red-border bg-flow-red-bg p-8 md:p-14">
            <h2 className="font-nohemi text-3xl font-bold tracking-tight text-neutral-950 md:text-5xl">
              Already transferred money?
            </h2>

            <ol className="mt-8 space-y-4">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-start gap-4 text-lg text-neutral-800"
                >
                  <span className="font-nohemi flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-flow-red-border text-base font-bold text-white">
                    {i + 1}
                  </span>
                  {step}
                </li>
              ))}
            </ol>

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CtaLink
                href={helplineHref}
                variant="primary"
                className="!bg-none bg-flow-red-border !shadow-flow-red-border/25"
              >
                Call {helplineNumber} now
              </CtaLink>
              <CtaLink href={cybercrimeReportUrl} variant="underline">
                Report at cybercrime.gov.in
              </CtaLink>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
