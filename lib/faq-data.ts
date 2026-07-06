export type FAQEntry = { question: string; answer: string };
export type FAQCategory = { category: string; items: FAQEntry[] };

export const FAQ_GROUPS: FAQCategory[] = [
  {
    category: "About Cyberwall",
    items: [
      {
        question: "What is Cyberwall?",
        answer:
          "Cyberwall is an official Kerala Police public safety initiative that helps citizens verify suspicious links, APK files, phone numbers, bank accounts, emails, and messages, and returns an instant risk assessment.",
      },
      {
        question: "Who runs Cyberwall?",
        answer:
          "Cyberwall is developed and operated under Kerala Police, Cyber Division, as part of its mission to reduce digital financial fraud.",
      },
      {
        question: "Is Cyberwall free?",
        answer: "Yes. It is a public safety initiative, free to use.",
      },
      {
        question: "Do I need to install an app to use Cyberwall?",
        answer:
          "No. There are no new apps to download and no complex setup — you simply forward suspicious content to Cyberwall on WhatsApp or Telegram, or use the official Kerala Police PolApp.",
      },
    ],
  },
  {
    category: "Capabilities",
    items: [
      {
        question: "What can I forward to Cyberwall?",
        answer:
          "You can forward suspicious links (URLs), APK files, phone numbers, bank account numbers, emails, and SMS or chat messages.",
      },
      {
        question: "What checks does Cyberwall run?",
        answer:
          "Cyberwall runs over 40 security checks across 6 input types — including domain age and reputation, APK permissions and Play Store matching, mail server and blacklist checks, TRAI DLT registry checks for SMS, and cross-referencing bank accounts and phone numbers against police scam databases.",
      },
      {
        question: "What does Cyberwall return after a check?",
        answer:
          "A trust score from 0–100, a clear verdict (Safe / Suspicious / High Risk), and a detailed report with the reasoning behind the result.",
      },
    ],
  },
  {
    category: "How it works",
    items: [
      {
        question: "How do I use Cyberwall on WhatsApp?",
        answer:
          "Forward the suspicious link, file, or message to the Cyberwall WhatsApp number, +91 94979 64163, and it will return a risk assessment.",
      },
      {
        question: "Can I use Cyberwall on Telegram?",
        answer: "Yes, message the Cyberwall bot on Telegram at @Cyber_wall_bot.",
      },
      {
        question: "Is Cyberwall integrated with the official Kerala Police app?",
        answer:
          "Yes. Cyberwall is integrated with the official Kerala Police PolApp for direct reporting, available on iOS and Android.",
      },
    ],
  },
  {
    category: "Data and reliability",
    items: [
      {
        question: "Does Cyberwall store my messages?",
        answer:
          "Cyberwall analyzes the input you send to return a result. Data retention follows Kerala Police guidelines intended to protect user privacy, with aggregate trend analysis only. Final data retention policy is pending.",
      },
      {
        question: "Is the result from Cyberwall legally binding?",
        answer:
          "No. Cyberwall provides advisory risk assessments only — it is not a legal determination.",
      },
      {
        question: "Can Cyberwall make mistakes?",
        answer:
          "Yes. While it uses multiple advanced checks, no automated system is 100% accurate. Always exercise independent judgment alongside Cyberwall's assessment.",
      },
    ],
  },
  {
    category: "Getting started / already scammed",
    items: [
      {
        question: "What should I do if I've already transferred money to a scammer?",
        answer:
          "Immediately call the national cybercrime helpline, 1930, or report it at cybercrime.gov.in. The sooner you report, the higher your chances of recovery.",
      },
      {
        question: "How do I get started with Cyberwall?",
        answer:
          "Text +91 94979 64163 on WhatsApp, message @Cyber_wall_bot on Telegram, or use the official Kerala Police PolApp to start verifying suspicious content.",
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
