export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ||
  "https://cyberwall.nysaclan.com";

export const siteName = "cyberwall";

export const siteDescription =
  "Cyberwall is an official Kerala Police public safety initiative that helps citizens verify suspicious links, APK files, phone numbers, bank accounts, emails, and messages. Forward a suspicious message on WhatsApp or Telegram and get an instant, AI-assisted risk assessment before you act.";

export const gaMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "";
