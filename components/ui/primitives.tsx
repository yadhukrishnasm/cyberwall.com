import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

type IconType = ComponentType<SVGProps<SVGSVGElement>>;

const ICON_BOX_TONES = {
  blue: "bg-tint-blue text-brand",
  cyan: "bg-tint-cyan text-brand",
  lavender: "bg-tint-lavender text-brand",
  white: "bg-white text-brand shadow-sm",
  ink: "bg-neutral-950 text-white",
  glass: "bg-white/15 text-white",
} as const;

const ICON_BOX_SIZES = {
  sm: "h-10 w-10 rounded-xl [&>svg]:h-5 [&>svg]:w-5",
  md: "h-12 w-12 rounded-2xl [&>svg]:h-6 [&>svg]:w-6",
  lg: "h-14 w-14 rounded-2xl [&>svg]:h-7 [&>svg]:w-7",
} as const;

// The single icon-in-rounded-square treatment used across every section,
// so the whole site speaks one visual language.
export function IconBox({
  icon: Icon,
  tone = "blue",
  size = "md",
  className,
}: {
  icon: IconType;
  tone?: keyof typeof ICON_BOX_TONES;
  size?: keyof typeof ICON_BOX_SIZES;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center",
        ICON_BOX_TONES[tone],
        ICON_BOX_SIZES[size],
        className,
      )}
    >
      <Icon strokeWidth={1.6} />
    </span>
  );
}

// A small pill eyebrow with a leading dot — the label above every heading.
export function Eyebrow({
  children,
  tone = "light",
  className,
}: {
  children: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-sm font-semibold",
        tone === "dark" ? "bg-white/10 text-white/80" : "bg-tint-blue text-brand",
        className,
      )}
    >
      <span
        className={cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          tone === "dark" ? "bg-white/80" : "bg-brand",
        )}
      />
      {children}
    </span>
  );
}
