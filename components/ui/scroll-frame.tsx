"use client";

import type { ReactNode } from "react";
import { motion, useTransform } from "framer-motion";
import type { MotionValue } from "framer-motion";
import { useSceneProgress } from "../hooks/useSceneProgress";



const MIN_EDGE = 0.0001;

export function SceneFrame({
  progress,
  start,
  end,
  fadeIn,
  fadeOut,
  children,
}: {
  progress: MotionValue<number>;
  start: number;
  end: number;
  fadeIn?: number;
  fadeOut?: number;
  children: (sceneProgress: MotionValue<number>) => ReactNode;
}) {
  const span = Math.max(end - start, MIN_EDGE);

  const safeFadeIn =
    fadeIn === undefined
      ? undefined
      : Math.max(MIN_EDGE, Math.min(fadeIn, span / 4));

  const safeFadeOut =
    fadeOut === undefined
      ? undefined
      : Math.max(MIN_EDGE, Math.min(fadeOut, span / 4));

  const opacity = useTransform(() => {
    const current = progress.get();

    if (current < start || current > end) {
      return 0;
    }

    if (
      safeFadeIn !== undefined &&
      current >= start &&
      current < start + safeFadeIn
    ) {
      return (current - start) / safeFadeIn;
    }

    if (
      safeFadeOut !== undefined &&
      current > end - safeFadeOut &&
      current <= end
    ) {
      return (end - current) / safeFadeOut;
    }

    return 1;
  });

  const pointerEvents = useTransform(opacity, (value) =>
    value > 0.5 ? "auto" : "none",
  );

  const sceneProgress = useSceneProgress(progress, start, end);

  return (
    <motion.div
      style={{
        opacity,
        pointerEvents,
      }}
      className="absolute inset-0"
    >
      {children(sceneProgress)}
    </motion.div>
  );
}
