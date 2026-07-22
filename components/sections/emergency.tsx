import { PhoneIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";
import { IconBox } from "@/components/ui/primitives";
import { Reveal } from "@/components/ui/reveal";
import { cybercrimeReportUrl, helplineHref, helplineNumber } from "@/lib/contact";

const STEPS = [
  "Stop any further payments.",
  `Call ${helplineNumber} immediately.`,
  "Report the incident as soon as possible.",
];

export default function Emergency() {
  return (
    <section className="py-16 md:py-24">
      <Container>
        <Reveal>
          <div className="grid gap-8 overflow-hidden rounded-[2rem] border-2 border-flow-red-border/30 bg-flow-red-bg p-8 md:grid-cols-2 md:items-center md:gap-12 md:p-12">
            <div>
              <IconBox
                icon={PhoneIcon}
                className="bg-flow-red-border/15 text-flow-red-border"
                size="lg"
              />
              <h2 className="font-nunito mt-6 text-3xl font-bold tracking-tight text-neutral-950 md:text-4xl">
                Already transferred money?
              </h2>
              <p className="mt-4 max-w-md text-base leading-relaxed text-neutral-600">
                Act fast — the sooner you report, the higher the chance of
                recovering your money.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <CtaLink
                  href={helplineHref}
                  variant="primary"
                  className="!bg-none bg-flow-red-border shadow-flow-red-border/25"
                >
                  Call {helplineNumber} now
                </CtaLink>
                <CtaLink href={cybercrimeReportUrl} variant="underline">
                  Report at cybercrime.gov.in
                </CtaLink>
              </div>
            </div>

            <ol className="space-y-3">
              {STEPS.map((step, i) => (
                <li
                  key={step}
                  className="flex items-center gap-4 rounded-2xl border border-flow-red-border/20 bg-white/70 p-5"
                >
                  <span className="font-nunito flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-flow-red-border text-base font-bold text-white">
                    {i + 1}
                  </span>
                  <span className="text-base font-medium text-neutral-800">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
