import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

const TINTS = {
  1: "bg-tint-blue",
  2: "bg-tint-cyan",
  3: "bg-tint-lavender",
} as const;

// One tile in a bento grid. Swap the icon/gradient block for a real
// <img>/<video src="....gif"> once the prototype capture is ready —
// the title/description overlay can stay as-is.
export function CollageTile({
  icon: Icon,
  tint,
  title,
  description,
  className,
}: {
  icon: ComponentType<SVGProps<SVGSVGElement>>;
  tint: keyof typeof TINTS;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] p-7",
        TINTS[tint],
        className,
      )}
    >
      <div className="absolute -right-10 -bottom-12 h-40 w-40 rounded-full bg-brand/15 blur-3xl" />
      <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-sm">
        <Icon className="h-6 w-6 text-brand" strokeWidth={1.5} />
      </span>
      <div className="relative">
        <h3 className="font-nohemi line-clamp-2 text-base leading-snug font-bold text-neutral-950 md:text-lg">
          {title}
        </h3>
        <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-neutral-600">
          {description}
        </p>
      </div>
    </div>
  );
}
