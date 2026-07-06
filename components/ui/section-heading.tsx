import { cn } from "@/lib/utils";

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
    <div
      className={cn(
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "text-xs font-medium tracking-wide uppercase",
            tone === "dark" ? "text-neutral-500" : "text-neutral-400",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-nohemi mt-3 max-w-lg text-2xl font-semibold tracking-tight md:text-3xl",
          align === "center" && "mx-auto",
          tone === "dark" ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-3 max-w-md text-sm leading-relaxed",
            align === "center" && "mx-auto",
            tone === "dark" ? "text-neutral-400" : "text-neutral-600",
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
