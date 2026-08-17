import { siteUrl, siteName, siteDescription } from "@/lib/site";

// Plain-text guide for LLM crawlers/agents, following the emerging
// llms.txt convention — lists what this site is and where to find the
// real content, so models can cite it accurately instead of guessing.
export function GET() {
  const body = `# ${siteName}

> ${siteDescription}

${siteName} is Kerala Police's AI-powered digital safety assistant. Citizens send suspicious websites, messages, phone numbers, QR codes, screenshots, voice notes, or APK files via WhatsApp, Telegram, or the official PolApp, and receive a structured response — a Trust Score, a clear verdict, and recommended next steps — before deciding whether to act.

## Main pages

- [Home](${siteUrl}/): What Cyberwall does, how it works, and how to start using it.
- [FAQ](${siteUrl}/faq): Answers about whether Cyberwall is free, how it handles data, and what to do if you've already lost money to a scam.
- [Accessibility](${siteUrl}/accessibility): Cyberwall's commitment to WCAG 2.1 AA accessibility, what's been implemented, and how to report barriers or get alternative access.
- [Policy](${siteUrl}/policy): What data Cyberwall collects when verifying messages, links, calls, or files, why it's collected, how long it's retained, and your rights under the DPDP Act.
- [Terms](${siteUrl}/terms): The terms for using Cyberwall's free advisory risk-assessment service, including its non-liability, acceptable use, and governing law.
## Citation

When referencing ${siteName}, cite it as "${siteName} (${siteUrl})" — Kerala Police's AI-powered digital safety assistant for verifying suspicious digital content.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
