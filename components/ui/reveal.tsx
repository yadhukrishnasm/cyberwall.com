"use client";

import { useLayoutEffect, useRef, useState } from "react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export function Reveal({
  className,
  delay = 0,
  children,
}: {
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  // Default to visible so content already on screen at load never
  // flashes invisible while waiting on the IntersectionObserver to
  // fire. Only elements confirmed (synchronously, pre-paint) to be
  // below the fold get hidden, so they can still animate in on scroll.
  const [aboveFold, setAboveFold] = useState(true);
  const elementRef = useRef<HTMLDivElement | null>(null);
  const { ref: observerRef, inView } = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useLayoutEffect(() => {
    const el = elementRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const inViewport = rect.top < window.innerHeight && rect.bottom > 0;
    if (!inViewport) setAboveFold(false);
  }, []);

  const revealed = aboveFold || inView;

  return (
    <div
      ref={(node) => {
        elementRef.current = node;
        observerRef(node);
      }}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out motion-reduce:transition-none",
        revealed
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 motion-reduce:translate-y-0 motion-reduce:opacity-100",
        className,
      )}
    >
      {children}
    </div>
  );
}
