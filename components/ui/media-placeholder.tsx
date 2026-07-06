import type { ComponentType, SVGProps } from "react";
import { cn } from "@/lib/utils";

const TINTS = {
  1: "bg-box-1",
  2: "bg-box-2",
  3: "bg-box-3",
} as const;

// One tile in the checks collage. Tiles sit edge-to-edge in a variable-
// span grid (see checks.tsx) — swap the background/icon block for a
// real <img>/<video src="....gif"> once the prototype capture is ready,
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
        "relative flex h-full flex-col justify-between overflow-hidden p-5",
        TINTS[tint],
        className,
      )}
    >
      <div className="absolute -right-8 -bottom-10 h-32 w-32 rounded-full bg-accent/10 blur-2xl" />
      <Icon className="relative h-6 w-6 text-neutral-950/70" strokeWidth={1.5} />
      <div className="relative">
        <h3 className="font-nohemi text-sm font-semibold text-neutral-950">
          {title}
        </h3>
        <p className="mt-1 text-xs leading-relaxed text-neutral-700/80 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
}
