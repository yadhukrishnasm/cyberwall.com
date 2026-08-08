import type { Metadata } from "next";
import { headers } from "next/headers";
import Footer from "@/components/sections/footer";
import { Navbar } from "@/components/structure/navbar";
import { StructuredData } from "@/components/structured-data";
import { Container } from "@/components/ui/container";
import { siteUrl } from "@/lib/site";
import { PlatformModal } from "@/components/ui/platform-modal";

const TITLE = "Privacy Policy — Cyberwall";
const DESCRIPTION =
  "What Cyberwall collects when you use it to verify suspicious messages, links, calls, or files, and how that information is handled.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: `${siteUrl}/privacy`,
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: `${siteUrl}/privacy`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: TITLE,
    description: DESCRIPTION,
  },
};

const PAGE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: TITLE,
  description: DESCRIPTION,
  url: `${siteUrl}/privacy`,
  isPartOf: {
    "@type": "WebSite",
    name: "Cyberwall",
    url: siteUrl,
  },
};

const SECTIONS = [
  {
    category: "Who we are",
    body: (
      <p>
        Cyberwall is a digital safety initiative operated by the Kerala Police
        Cyber Division. This policy explains what information Cyberwall collects
        when you use it via WhatsApp, Telegram, PolApp, or this website, and how
        that information is handled.
      </p>
    ),
  },
  {
    category: "What we collect",
    body: (
      <ul className="list-disc space-y-1.5 pl-5">
        <li>Text you type or paste (messages, claims, URLs)</li>
        <li>Images and screenshots you upload</li>
        <li>Voice notes / audio you send (transcribed for analysis)</li>
        <li>
          Phone numbers, email addresses, bank/UPI/IFSC details you submit for
          checking
        </li>
        <li>APK files you upload for malware inspection</li>
        <li>Your WhatsApp/Telegram identifier, needed to reply to you</li>
      </ul>
    ),
  },
  {
    category: "Why we collect it",
    body: (
      <p>
        Solely to run the verification checks you requested and return a trust
        score, explanation, and recommended next steps. We do not use this data
        for advertising or profiling.
      </p>
    ),
  },
  {
    category: "Retention",
    body: (
      <p>
        Submitted content is retained only as long as needed to generate your
        assessment and for a limited period afterward for quality and
        fraud-pattern analysis, in line with Kerala Police data-handling
        guidelines. It is not sold or shared with unrelated third parties.
      </p>
    ),
  },
  {
    category: "Sharing",
    body: (
      <p>
        Data may be shared internally within Kerala Police (e.g. Cyber Division,
        SCRB) where relevant to fraud investigation or reporting, and with
        cybercrime.gov.in / 1930 only if you choose to report through those
        channels.
      </p>
    ),
  },
  {
    category: "Your rights",
    body: (
      <p>
        Under the Digital Personal Data Protection Act, 2023, you may request
        access to, correction of, or deletion of your personal data by
        contacting us below.
      </p>
    ),
  },
  {
    category: "Contact",
    body: (
      <p>
        For privacy queries, contact the Kerala Police Cyber Division through
        the official channels listed at{" "}
        <a href="https://keralapolice.gov.in" className="underline">
          keralapolice.gov.in
        </a>
        .
      </p>
    ),
  },
];

export default async function PrivacyPage() {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <>
      <StructuredData data={PAGE_JSON_LD} nonce={nonce} />
      <Navbar />
      <main className="pt-16 pb-24 md:pt-20">
        <Container>
          <h1 className="font-nunito mt-6 text-4xl font-bold tracking-tight text-neutral-950 md:text-5xl">
            Privacy Policy
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
