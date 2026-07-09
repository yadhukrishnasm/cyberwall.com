export type FAQEntry = { question: string; answer: string };
export type FAQCategory = { category: string; items: FAQEntry[] };

export const FAQ_GROUPS: FAQCategory[] = [
  {
    category: "About Cyberwall",
    items: [
      {
        question: "Is Cyberwall free?",
        answer:
          "Yes. Cyberwall is a free public safety initiative from Kerala Police — there's no cost, subscription, or app to buy.",
      },
      {
        question: "Can I just ask Cyberwall a question?",
        answer:
          "Yes. You don't need a strict format. Explain your situation in your own words — in English or Malayalam — and Cyberwall will work out what to verify and how to help.",
      },
    ],
  },
  {
    category: "What you can send",
    items: [
      {
        question: "What can I send?",
        answer:
          "Websites, SMS, phone numbers, emails, bank details, APK files, and IP addresses — sent as typed text, a screenshot or image, or a voice note.",
      },
      {
        question: "What happens to screenshots and voice notes?",
        answer:
          "Cyberwall reads screenshots and transcribes voice notes to understand what you're asking about, then runs the relevant checks. They're used only to generate your assessment, following Kerala Police's data-handling guidelines.",
      },
    ],
  },
  {
    category: "How it works",
    items: [
      {
        question: "How does Cyberwall respond?",
        answer:
          "Cyberwall analyzes what you send using its verification engine, then replies with a Trust Score, a clear explanation of what it found, and recommended next steps.",
      },
      {
        question: "Does every response include a Trust Score?",
        answer:
          "Every response backed by a relevant analysis includes a Trust Score out of 100, so you have a single, unambiguous number to act on — alongside the plain-language explanation.",
      },
    ],
  },
  {
    category: "Data and reliability",
    items: [
      {
        question: "Does Cyberwall store my messages?",
        answer:
          "Cyberwall processes what you send to generate a result. Data retention follows Kerala Police guidelines intended to protect user privacy, with aggregate trend analysis only. Final data retention policy is pending.",
      },
      {
        question: "Is the result legally binding?",
        answer:
          "No. Cyberwall provides advisory risk assessments only — it is not a legal determination.",
      },
      {
        question: "Can Cyberwall make mistakes?",
        answer:
          "Yes. While it runs 35+ automated verification checks, no automated system is 100% accurate. Always exercise independent judgment alongside Cyberwall's assessment.",
      },
    ],
  },
  {
    category: "Already scammed",
    items: [
      {
        question: "What should I do if I've already transferred money?",
        answer:
          "Stop any further payments, call the national cybercrime helpline 1930 immediately, and report the incident as soon as possible at cybercrime.gov.in. The sooner you report, the higher your chances of recovery.",
      },
    ],
  },
];

export const ALL_FAQS: FAQEntry[] = FAQ_GROUPS.flatMap((group) => group.items);

// Plain-text rendering of every Q&A, used as grounding context for the
// AI-powered "Ask Cyberwall" endpoint.
export function buildFaqContextText(): string {
  return FAQ_GROUPS.map((group) => {
    const items = group.items
      .map((item) => `Q: ${item.question}\nA: ${item.answer}`)
      .join("\n\n");
    return `## ${group.category}\n\n${items}`;
  }).join("\n\n");
}
