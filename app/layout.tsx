import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import { GoogleAnalytics } from "@/components/google-analytics";
import { siteUrl, siteDescription } from "@/lib/site";

const ENTITY_SENTENCE = siteDescription;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cyberwall — Kerala Police Public Safety Initiative",
    template: "%s | Cyberwall",
  },
  description: ENTITY_SENTENCE,
  keywords: [
    "Cyberwall",
    "Kerala Police",
    "cyber fraud helpline",
    "scam link checker",
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
    title: "Cyberwall — Kerala Police Public Safety Initiative",
    description: ENTITY_SENTENCE,
    url: siteUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Cyberwall — Kerala Police Public Safety Initiative",
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
  serviceType: "Cyber fraud risk assessment",
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

const nohemi = localFont({
  src: "../fonts/Nohemi-VF.ttf",
  variable: "--font-nohemi",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={nohemi.variable}>
      <body className="min-h-screen text-neutral-950 antialiased">
        {children}

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSON_LD) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(SERVICE_JSON_LD) }}
        />

        <GoogleAnalytics />
      </body>
    </html>
  );
}
