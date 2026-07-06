import { PlusIcon } from "@/components/icons";
import type { FAQEntry } from "@/lib/faq-data";

// Native <details>/<summary> — expands and reads with zero client JS,
// and the answer text is present in the raw HTML either way.
export function FaqItem({ question, answer }: FAQEntry) {
  return (
    <details className="group py-5">
      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-medium text-neutral-950 marker:content-none">
        {question}
        <PlusIcon className="h-4 w-4 shrink-0 text-neutral-400 transition-transform duration-200 group-open:rotate-45" />
      </summary>
      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-neutral-600">
        {answer}
      </p>
    </details>
  );
}
