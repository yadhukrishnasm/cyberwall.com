"use client";

import type { ReactNode } from "react";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";import type { MotionValue } from "framer-motion";
import { SceneFrame } from "./scroll-frame";



export type ScrollStoryScene = {
  start: number;
  end: number;
  render: (sceneProgress: MotionValue<number>) => ReactNode;
};

const CROSSFADE_EDGE = 0.02;
const RELEASE_TAIL_VH =10;

export function ScrollStory({
  heightVh,
  scenes,
  className = "",
  startOffset = "start",
}: {
  heightVh: number;
  scenes: ScrollStoryScene[];
  className?: string;
  startOffset?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: [`start ${startOffset}`, "end end"] as NonNullable<
      Parameters<typeof useScroll>[0]
    >["offset"],
  });

  const exitY = useTransform(
    scrollYProgress,
    [0.94, 1],
    ["0%", "-8%"],
  );

  return (
    <div
      ref={ref}
      className={`relative z-20 ${className}`}
      style={{
        height: `${heightVh}vh`,
      }}
    >
      <div
        style={{
          height: `calc(100% - ${RELEASE_TAIL_VH}vh)`,
        }}
      >
        <div className="sticky top-0 z-20 h-dvh">
          <motion.div
            className="relative h-full overflow-visible"
            style={{ y: exitY }}
          >            {scenes.map((scene, index) => {
              const isFirstScene = index === 0;
              const isLastScene = index === scenes.length - 1;

              return (

                <SceneFrame
                  key={`${scene.start}-${scene.end}-${index}`}
                  progress={scrollYProgress}
                  start={scene.start}
                  end={scene.end}
                  fadeIn={isFirstScene ? undefined : CROSSFADE_EDGE}
                  fadeOut={isLastScene ? undefined : CROSSFADE_EDGE}
                >
                  {scene.render}

                </SceneFrame>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
