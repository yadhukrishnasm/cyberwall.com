"use client";

import Script from "next/script";
import { gaMeasurementId } from "@/lib/site";

type GoogleAnalyticsProps = {
  nonce: string;
};

/**
 * Loads GA4 only when an ID is configured.
 *
 * - No scripts are rendered when NEXT_PUBLIC_GA_MEASUREMENT_ID is unset.
 * - Uses CSP nonces instead of 'unsafe-inline'.
 * - Only enables the default GA4 page_view behaviour.
 */
export function GoogleAnalytics({ nonce }: GoogleAnalyticsProps) {
  if (!gaMeasurementId) {
    return null;
  }

  return (
    <>
      <Script
        nonce={nonce}
        src={`https://www.googletagmanager.com/gtag/js?id=${gaMeasurementId}`}
        strategy="afterInteractive"
      />

      <Script id="ga4-init" nonce={nonce} strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gaMeasurementId}');
        `}
      </Script>
    </>
  );
}
