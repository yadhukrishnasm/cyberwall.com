import { cn } from "@/lib/utils";
import { Eyebrow } from "@/components/ui/primitives";

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "light",
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  tone?: "light" | "dark";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && <Eyebrow tone={tone}>{eyebrow}</Eyebrow>}
      <h2
        className={cn(
          "font-nohemi mt-5 text-3xl leading-[1.06] font-bold tracking-tight text-balance sm:text-4xl md:text-5xl",
          align === "center" ? "mx-auto max-w-3xl" : "max-w-2xl",
          tone === "dark" ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed text-pretty md:text-lg",
            align === "center" ? "mx-auto max-w-2xl" : "max-w-xl",
            tone === "dark" ? "text-neutral-400" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
