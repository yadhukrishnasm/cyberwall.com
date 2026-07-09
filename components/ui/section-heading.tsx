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
    <div className={cn(align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span
          className={cn(
            "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold",
            tone === "dark"
              ? "bg-white/10 text-neutral-300"
              : "bg-tint-blue text-brand",
          )}
        >
          <span
            className={cn(
              "h-1.5 w-1.5 shrink-0 rounded-full",
              tone === "dark" ? "bg-neutral-300" : "bg-brand",
            )}
          />
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "font-nohemi mt-4 max-w-2xl text-3xl leading-[1.08] font-bold tracking-tight md:text-5xl",
          align === "center" && "mx-auto",
          tone === "dark" ? "text-white" : "text-neutral-950",
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            "mt-4 max-w-xl text-base leading-relaxed md:text-lg",
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
