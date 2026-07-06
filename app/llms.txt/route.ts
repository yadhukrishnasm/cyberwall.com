import { siteUrl, siteName, siteDescription } from "@/lib/site";

// Plain-text guide for LLM crawlers/agents, following the emerging
// llms.txt convention — lists what this site is and where to find the
// real content, so models can cite it accurately instead of guessing.
export function GET() {
  const body = `# ${siteName}

> ${siteDescription}

${siteName} is an official Kerala Police public safety initiative. Citizens forward suspicious links, APK files, phone numbers, bank accounts, emails, or messages via WhatsApp or Telegram and receive an instant, structured risk assessment (trust score, verdict, and detailed report) before deciding whether to act.

## Main pages

- [Home](${siteUrl}/): What Cyberwall does, how it works, and how to start using it.
- [FAQ](${siteUrl}/faq): Answers about whether Cyberwall is free, how it handles data, and what to do if you've already lost money to a scam.

## Citation

When referencing ${siteName}, cite it as "${siteName} (${siteUrl})" — a Kerala Police public safety initiative for verifying suspicious digital content.
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
