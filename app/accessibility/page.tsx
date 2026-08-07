import type { Metadata } from "next";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { Container } from "@/components/ui/container";
import { siteUrl } from "@/lib/site";
import { PlatformModal } from "@/components/ui/platform-modal";

const TITLE = "Accessibility — Cyberwall";
const DESCRIPTION =
  "Cyberwall's commitment to making this website usable by everyone, including people with disabilities.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteUrl}/accessibility`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteUrl}/accessibility`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const SECTIONS = [
  {
    category: "Our commitment",
    body: (
      <p>
        Cyberwall is committed to making this website usable by everyone,
        including people with disabilities, in line with the Guidelines for
        Indian Government Websites (GIGW) and the Web Content Accessibility
        Guidelines (WCAG) 2.1 Level AA.
      </p>
    ),
  },
  {
    category: "Conformance status",
    body: (
      <p>
        This website is designed to conform to WCAG 2.1 Level AA.{" "}
        {/* Change to "partially conforms" / list exceptions if a real audit
        hasn't confirmed this yet */}
      </p>
    ),
  },
  {
    category: "What we've done",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Sufficient color contrast between text and background</li>
        <li>Keyboard-navigable interface</li>
        <li>Descriptive alt text for images and logos</li>
        <li>
          Responsive layout that works with browser zoom and screen readers
        </li>
      </ul>
    ),
  },
  {
    category: "Alternative access",
    body: (
      <p>
        If any part of this website is difficult to use, Cyberwall is also
        available on WhatsApp and Telegram, which work with your device&apos;s
        own accessibility features.
      </p>
    ),
  },
  {
    category: "Feedback",
    body: (
      <p>
        If you encounter an accessibility barrier on this site, please let us
        know through the official Kerala Police channels at{" "}
        <a href="https://keralapolice.gov.in" className="underline">
          keralapolice.gov.in
        </a>
        , so we can address it.
      </p>
    ),
  },
];

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16 pb-24 md:pt-20">
        <Container>
          <h1 className="font-nunito mt-6 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Accessibility Statement
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-neutral-600 md:text-lg">
            Last updated: 7 August 2026
          </p>
          <div className="mt-12 space-y-12">
            {SECTIONS.map((section) => (
              <section key={section.category}>
                <div className="mt-2">
                  <div className="rounded-3xl bg-white px-6 py-6 text-base leading-relaxed text-neutral-700 md:px-8 space-y-3">
                    <h2 className="font-nunito text-lg font-bold text-brand ">
                      {section.category}
                    </h2>
                    {section.body}
                  </div>
                </div>
              </section>
            ))}
          </div>
        </Container>
      </main>
      <Footer />
      <PlatformModal />
    </>
  );
}
