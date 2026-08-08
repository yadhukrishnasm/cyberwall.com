import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import { headers } from "next/headers";
import "./globals.css";

import { GoogleAnalytics } from "@/components/google-analytics";
import { siteDescription, siteUrl } from "@/lib/site";

const ENTITY_SENTENCE = siteDescription;

const nunito = Nunito({
  subsets: ["latin"],
  variable: "--font-nunito",
  display: "swap",
  preload: true,
  fallback: ["Arial", "sans-serif"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyberwall — Kerala Police's AI-Powered Digital Safety Assistant",
    template: "%s | Cyberwall",
  },
  description: ENTITY_SENTENCE,
  keywords: [
    "Cyberwall",
    "Kerala Police",
    "digital safety assistant",
    "cyber fraud helpline",
    "scam link checker",
    "trust score",
    "APK safety check",
    "phishing detection",
    "online fraud reporting Kerala",
    "WhatsApp scam checker",
    "cybercrime helpline 1930",
  ],
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: "Cyberwall — Kerala Police's AI-Powered Digital Safety Assistant",
    description: ENTITY_SENTENCE,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberwall — Kerala Police's AI-Powered Digital Safety Assistant",
    description: ENTITY_SENTENCE,
  },
};

const ORG_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "GovernmentOrganization",
  name: "Cyberwall",
  url: siteUrl,
  description: ENTITY_SENTENCE,
  parentOrganization: {
    "@type": "GovernmentOrganization",
    name: "Kerala Police",
    url: "https://keralapolice.gov.in",
  },
};

const SERVICE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "AI-powered digital safety verification",
  provider: {
    "@type": "GovernmentOrganization",
    name: "Kerala Police",
  },
  name: "Cyberwall",
  description: ENTITY_SENTENCE,
  areaServed: {
    "@type": "State",
    name: "Kerala",
  },
  isAccessibleForFree: true,
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonce = (await headers()).get("x-nonce") ?? undefined;

  return (
    <html lang="en" className={nunito.variable}>
      <body className="min-h-screen font-sans text-neutral-950 antialiased">
        {children}

        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(ORG_JSON_LD),
          }}
        />

        <script
          nonce={nonce}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(SERVICE_JSON_LD),
          }}
        />

        <GoogleAnalytics nonce={nonce} />
      </body>
    </html>
  );
}
