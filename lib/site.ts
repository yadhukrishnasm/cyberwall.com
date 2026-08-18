export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://cyberwall.keralapolice.gov.in";

export const siteName = "cyberwall";

export const siteDescription =
  "Cyberwall is Kerala Police's AI-powered digital safety assistant. Verify suspicious websites, messages, phone numbers, QR codes, screenshots, and more before you act — on WhatsApp, Telegram, or the official PolApp.";

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
