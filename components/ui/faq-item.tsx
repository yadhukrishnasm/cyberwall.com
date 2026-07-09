import { PlusIcon } from "@/components/icons";
import type { FAQEntry } from "@/lib/faq-data";

// Native <details>/<summary> — expands and reads with zero client JS,
// and the answer text is present in the raw HTML either way.
export function FaqItem({ question, answer }: FAQEntry) {
  return (
    <details className="group py-5 md:py-6">
      <summary className="font-nohemi flex cursor-pointer list-none items-center justify-between gap-4 text-base font-semibold text-neutral-950 marker:content-none md:text-lg">
        {question}
        <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-tint-blue">
          <PlusIcon className="h-4 w-4 text-brand transition-transform duration-200 group-open:rotate-45" />
        </span>
      </summary>
      <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600">
        {answer}
      </p>
    </details>
  );
}
