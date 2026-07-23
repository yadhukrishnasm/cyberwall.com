"use client";

import {
  useLayoutEffect,
  useRef,
  useState,
  type ComponentType,
  type RefObject,
} from "react";
import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";

import { GaugeIcon, MessageIcon, ShieldCheckIcon } from "@/components/icons";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";

import { Reveal } from "../ui/reveal";
import { ScrollStory } from "../ui/scroll-story";

/* -------------------------------------------------------------------------- */
/*                               Global controls                              */
/* -------------------------------------------------------------------------- */

/**
 * Controls how long the desktop section remains sticky.
 *
 * Increase it for slower animation and more scroll distance.
 * Decrease it for faster animation and earlier sticky release.
 */
const STORY_HEIGHT_VH = 560;

/**
 * Desktop SVG path.
 *
 * The last two numbers in each curve determine the destination node.
 * Keep the node x/y values synchronized with this path.
 */
const STORY_PATH = `
  M 50 18

  C 50 25, 15 25, 15 36

  C 15 42, 85 42, 85 53

  C 85 64, 15 64, 15 75

  C 15 86, 50 88, 50 94
`;

/* -------------------------------------------------------------------------- */
/*                               Mobile controls                              */
/* -------------------------------------------------------------------------- */

/**
 * Mobile node dimensions in pixels.
 *
 * This must match the h-10/w-10 Tailwind classes used by MobileTimelineNode.
 */
const MOBILE_NODE_SIZE = 40;

/**
 * Thickness of the mobile timeline line.
 *
 * Increase for a stronger line.
 * Recommended range: 4–7.
 */
const MOBILE_LINE_WIDTH = 10;

/**
 * Background line color.
 *
 * This line remains visible behind the animated line.
 */
const MOBILE_LINE_TRACK_COLOR = "#E5E7EB";

/**
 * Controls when the mobile line begins animating.
 *
 * "start 85%" means animation begins when the top of the timeline
 * reaches 85% of the viewport height.
 */
const MOBILE_SCROLL_START = "start 85%";

/**
 * Controls when the mobile line finishes animating.
 *
 * "end 65%" means animation completes when the bottom of the timeline
 * reaches 65% of the viewport height.
 *
 * Increase 65% to finish sooner.
 * Decrease 65% to finish later.
 */
const MOBILE_SCROLL_END = "end 65%";

/**
 * Controls how much of scroll progress is used to draw the line.
 *
 * 0.95 means the line completes at 95% of the measured scroll progress.
 * Lower values make it finish earlier.
 */
const MOBILE_LINE_FINISH_PROGRESS = 0.95;

/**
 * Gap between mobile timeline cards.
 *
 * Change space-y-4 to space-y-5 or space-y-6 for more spacing.
 */
const MOBILE_CARD_SPACING = "space-y-4";

/* -------------------------------------------------------------------------- */
/*                                    Types                                   */
/* -------------------------------------------------------------------------- */

type StoryIcon = ComponentType<{
  className?: string;
}>;

type StoryTone = "neutral" | "lavender" | "blue" | "cyan" | "success";

type StoryStep = {
  label: string;
  eyebrow: string;
  icon: StoryIcon;
  title: string;
  description: string;
  tone: StoryTone;
  accent: string;
  x: number;
  y: number;
  side: "left" | "right";
  revealAt: number;
};

type TimelineGeometry = {
  top: number;
  height: number;
};

/* -------------------------------------------------------------------------- */
/*                              Custom final icon                             */
/* -------------------------------------------------------------------------- */

function ProtectedActionIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />

      <path
        d="m7.5 12 3 3 6-7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/*                                  Content                                   */
/* -------------------------------------------------------------------------- */

const STORY_STEPS: readonly StoryStep[] = [
  {
    label: "00",
    eyebrow: "Your query",
    icon: MessageIcon,
    title: "Something feels suspicious",
    description:
      "You receive a call, message, link, QR code, or APK file and want to know whether it is safe.",
    tone: "cyan",
    accent: "#32C4F0",
    x: 50,
    y: 18,
    side: "right",
    revealAt: 0.025,
  },
  {
    label: "01",
    eyebrow: "Incoming contact",
    icon: MessageIcon,
    title: "Share what you received",
    description:
      "Send the suspicious call details, message, link, QR code, screenshot, or application file to Cyberwall.",
    tone: "blue",
    accent: "#3C8AF5",
    x: 15,
    y: 36,
    side: "right",
    revealAt: 0.22,
  },
  {
    label: "02",
    eyebrow: "Cyberwall verification",
    icon: GaugeIcon,
    title: "Cyberwall checks the threat",
    description:
      "The verification engine analyses available signals and performs an instant assessment.",
    tone: "blue",
    accent: "#2F67F6",
    x: 85,
    y: 53,
    side: "left",
    revealAt: 0.48,
  },
  {
    label: "03",
    eyebrow: "Safe decision",
    icon: ShieldCheckIcon,
    title: "You receive clear guidance",
    description:
      "Cyberwall explains the risk and tells you whether to proceed, verify further, block, report, or avoid.",
    tone: "blue",
    accent: "#2A5FE8",
    x: 15,
    y: 75,
    side: "right",
    revealAt: 0.73,
  },
  {
    label: "04",
    eyebrow: "Protected action",
    icon: ProtectedActionIcon,
    title: "You act with confidence",
    description:
      "The suspicious interaction is stopped before it turns into financial loss, identity theft, or malware exposure.",
    tone: "blue",
    accent: "#2555D8",
    x: 50,
    y: 94,
    side: "right",
    revealAt: 0.9,
  },
];

const TONE_CLASSES: Record<StoryTone, string> = {
  neutral: "bg-neutral-100",
  lavender: "bg-tint-lavender",
  blue: "bg-tint-blue",
  cyan: "bg-tint-cyan",
  success: "bg-emerald-50",
};

/* -------------------------------------------------------------------------- */
/*                              Main section                                  */
/* -------------------------------------------------------------------------- */

export function CyberwallInterceptionStory() {
  return (
    <section className="relative">
      <DesktopSectionHeading />
      <DesktopInterceptionStory />
      <MobileInterceptionStory />
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Desktop version                               */
/* -------------------------------------------------------------------------- */

function DesktopSectionHeading() {
  return (
    <div className="hidden pb-3 pt-16 lg:block">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How Cyberwall intercepts scams"
            title="From suspicion to a safe decision"
            description="Cyberwall sits between the suspicious interaction and your next action, helping you verify the risk before damage is done."
          />
        </Reveal>
      </Container>
    </div>
  );
}

function DesktopInterceptionStory() {
  return (
    <div className="hidden lg:block">
      <ScrollStory
        heightVh={STORY_HEIGHT_VH}
        startOffset="86%"
        scenes={[
          {
            start: 0,
            end: 1,
            render: (progress) => (
              <DesktopInterceptionScene progress={progress} />
            ),
          },
        ]}
      />
    </div>
  );
}

function DesktopInterceptionScene({
  progress,
}: {
  progress: MotionValue<number>;
}) {
  /**
   * Controls when the desktop line becomes visible.
   */
  const lineOpacity = useTransform(progress, [0, 0.015, 1], [0, 1, 1]);

  /**
   * Controls when the desktop line finishes drawing.
   *
   * Change 0.9:
   * - Lower value = finishes sooner.
   * - Higher value = finishes later.
   */
  const lineProgress = useTransform(progress, [0, 0.9], [0, 1]);

  return (
    <div className="relative mx-auto h-full w-full max-w-[1440px] px-8 xl:px-12">
      <div className="relative h-full w-full pb-6 pt-16">
        <DesktopTimelineLine progress={lineProgress} opacity={lineOpacity} />

        {STORY_STEPS.map((step, index) => (
          <DesktopTimelineStep
            key={step.label}
            step={step}
            index={index}
            progress={progress}
          />
        ))}
      </div>
    </div>
  );
}

function DesktopTimelineLine({
  progress,
  opacity,
}: {
  progress: MotionValue<number>;
  opacity: MotionValue<number>;
}) {
  return (
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      className="pointer-events-none absolute inset-0 h-full w-full"
      aria-hidden="true"
    >
      <defs>
        {/*
         * Main timeline gradient.
         *
         * The colors come directly from globals.css, ensuring the SVG
         * always matches the rest of the website's brand palette.
         *
         * Adjust the stop offsets to change how much space each color gets:
         * - Smaller cyan offset = faster transition into blue.
         * - Larger brand offset = blue remains visible for longer.
         */}
        <linearGradient
          id="cyberwallDesktopInterceptionLine"
          gradientUnits="userSpaceOnUse"
          x1="50"
          y1="18"
          x2="50"
          y2="94"
        >
          <stop offset="0%" stopColor="var(--color-cyan)" />

          <stop offset="38%" stopColor="var(--color-brand)" />

          <stop offset="72%" stopColor="var(--color-brand)" />

          <stop offset="100%" stopColor="var(--color-brand-deep)" />
        </linearGradient>

        <mask id="cyberwallDesktopInterceptionMask" maskUnits="userSpaceOnUse">
          <rect x="0" y="0" width="100" height="100" fill="black" />

          <motion.path
            d={STORY_PATH}
            fill="none"
            stroke="white"
            strokeWidth="4.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              pathLength: progress,
            }}
          />
        </mask>
      </defs>

      <motion.g
        mask="url(#cyberwallDesktopInterceptionMask)"
        style={{
          opacity,
        }}
      >
        <path
          d={STORY_PATH}
          fill="none"
          stroke="url(#cyberwallDesktopInterceptionLine)"
          strokeWidth="6.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </motion.g>
    </svg>
  );
}

function DesktopTimelineStep({
  step,
  index,
  progress,
}: {
  step: StoryStep;
  index: number;
  progress: MotionValue<number>;
}) {
  const isLastStep = index === STORY_STEPS.length - 1;

  /**
   * Controls how quickly each node appears.
   *
   * Smaller ranges create faster animation.
   * Larger ranges create slower animation.
   */
  const revealStart = isLastStep ? step.revealAt - 0.025 : step.revealAt - 0.07;

  const revealEnd = isLastStep ? step.revealAt : step.revealAt + 0.07;

  /**
   * Controls how quickly each card appears after its node.
   */
  const cardRevealStart = isLastStep
    ? step.revealAt - 0.018
    : step.revealAt - 0.02;

  const cardRevealEnd = isLastStep ? step.revealAt : step.revealAt + 0.1;

  const opacity = useTransform(progress, [revealStart, revealEnd], [0, 1]);

  const nodeScale = useTransform(progress, [revealStart, revealEnd], [0.72, 1]);

  const cardOpacity = useTransform(
    progress,
    [cardRevealStart, cardRevealEnd],
    [0, 1],
  );

  const cardX = useTransform(
    progress,
    [cardRevealStart, cardRevealEnd],
    [step.side === "left" ? 24 : -24, 0],
  );

  const cardY = useTransform(
    progress,
    [cardRevealStart, cardRevealEnd],
    [14, 0],
  );

  const Icon = step.icon;
  const cardOnLeft = step.side === "left";

  return (
    <div
      className="absolute z-10"
      style={{
        left: `${step.x}%`,
        top: `${step.y}%`,
        transform: "translate(-50%, -50%)",
      }}
    >
      <span
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 select-none font-nunito text-[5.25rem] font-black leading-none xl:text-[9rem]"
        style={{
          color: step.accent,
          opacity: 0.45,
          transform:
            index % 2 === 0 ? "translate(-18%, -66%)" : "translate(-89%, -40%)",
        }}
      >
        {step.label}
      </span>

      {/*<motion.div
        style={{
          opacity,
          scale: nodeScale,
        }}
        className="relative z-20 flex h-14 w-14 items-center justify-center rounded-[1.1rem] border border-white bg-white shadow-[0_14px_38px_rgba(15,23,42,0.14)] xl:h-16 xl:w-16"
      >
        <div
          className="flex h-10 w-10 items-center justify-center rounded-xl xl:h-12 xl:w-12"
          style={{
            background: `linear-gradient(145deg, ${step.accent}BB, ${step.accent})`,
            boxShadow: `0 10px 25px ${step.accent}25`,
          }}
        >
          <Icon className="h-5 w-5 text-white" />
        </div>
      </motion.div>*/}

      <motion.div
        style={{
          opacity: cardOpacity,
          x: cardX,
          y: cardY,
        }}
        className={cn(
          "absolute top-1/2 z-10 w-[18rem] -translate-y-1/2 rounded-[1.4rem] border border-neutral-200/80 bg-white p-5 shadow-[0_16px_45px_rgba(15,23,42,0.08)] xl:w-[20rem]",
          cardOnLeft
            ? "right-[1.75rem] xl:right-[2rem]"
            : "left-[1.75rem] xl:left-[2rem]",
        )}
      >
        <StepEyebrow step={step} />

        <h3 className="mt-3 font-nunito text-lg font-bold leading-snug text-neutral-950 xl:text-xl">
          {step.title}
        </h3>

        <p className="mt-2 text-xs leading-5 text-neutral-600 xl:text-sm xl:leading-6">
          {step.description}
        </p>
      </motion.div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               Mobile version                               */
/* -------------------------------------------------------------------------- */

function MobileInterceptionStory() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const firstNodeRef = useRef<HTMLDivElement>(null);
  const lastNodeRef = useRef<HTMLDivElement>(null);

  const geometry = useTimelineGeometry({
    timelineRef,
    firstNodeRef,
    lastNodeRef,
  });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: [MOBILE_SCROLL_START, MOBILE_SCROLL_END],
  });

  const lineProgress = useTransform(
    scrollYProgress,
    [0, MOBILE_LINE_FINISH_PROGRESS],
    [0, 1],
  );

  return (
    <div className="py-16 lg:hidden">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="How Cyberwall intercepts scams"
            title="From suspicion to a safe decision"
            description="Cyberwall sits between the suspicious interaction and your next action, helping you verify the risk before damage is done."
          />
        </Reveal>

        <div ref={timelineRef} className="relative mt-10">
          <MobileTimelineLine
            top={geometry.top}
            height={geometry.height}
            progress={lineProgress}
          />

          <div className={MOBILE_CARD_SPACING}>
            {STORY_STEPS.map((step, index) => (
              <Reveal key={step.label} delay={index * 80}>
                <MobileTimelineStep
                  step={step}
                  nodeRef={
                    index === 0
                      ? firstNodeRef
                      : index === STORY_STEPS.length - 1
                        ? lastNodeRef
                        : undefined
                  }
                />
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}

/**
 * Measures the exact distance between:
 *
 * - the centre of the first mobile node;
 * - the centre of the final mobile node.
 *
 * The line therefore always begins and ends inside the nodes,
 * even when card heights or text wrapping change.
 */
function useTimelineGeometry({
  timelineRef,
  firstNodeRef,
  lastNodeRef,
}: {
  timelineRef: RefObject<HTMLDivElement | null>;
  firstNodeRef: RefObject<HTMLDivElement | null>;
  lastNodeRef: RefObject<HTMLDivElement | null>;
}) {
  const [geometry, setGeometry] = useState<TimelineGeometry>({
    top: 0,
    height: 0,
  });

  useLayoutEffect(() => {
    const timeline = timelineRef.current;
    const firstNode = firstNodeRef.current;
    const lastNode = lastNodeRef.current;

    if (!timeline || !firstNode || !lastNode) {
      return;
    }

    const updateGeometry = () => {
      const timelineRect = timeline.getBoundingClientRect();

      const firstNodeRect = firstNode.getBoundingClientRect();

      const lastNodeRect = lastNode.getBoundingClientRect();

      const firstNodeCenter =
        firstNodeRect.top + firstNodeRect.height / 2 - timelineRect.top;

      const lastNodeCenter =
        lastNodeRect.top + lastNodeRect.height / 2 - timelineRect.top;

      setGeometry({
        top: firstNodeCenter,
        height: Math.max(0, lastNodeCenter - firstNodeCenter),
      });
    };

    updateGeometry();

    /**
     * Reveals and font loading can alter card heights after mount.
     * Running again on the next frame captures those layout changes.
     */
    const frame = requestAnimationFrame(updateGeometry);

    const observer = new ResizeObserver(updateGeometry);

    observer.observe(timeline);
    observer.observe(firstNode);
    observer.observe(lastNode);

    window.addEventListener("resize", updateGeometry);

    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener("resize", updateGeometry);
    };
  }, [timelineRef, firstNodeRef, lastNodeRef]);

  return geometry;
}

function MobileTimelineLine({
  top,
  height,
  progress,
}: {
  top: number;
  height: number;
  progress: MotionValue<number>;
}) {
  if (height <= 0) {
    return null;
  }

  /**
   * Centres the SVG canvas on the mobile node.
   *
   * The node starts at left: 0 and has width MOBILE_NODE_SIZE.
   */
  const left = MOBILE_NODE_SIZE / 2 - MOBILE_LINE_WIDTH / 2;

  /**
   * The visible line is centred within the SVG canvas.
   */
  const lineX = MOBILE_LINE_WIDTH / 2;

  return (
    <svg
      className="pointer-events-none absolute z-0 overflow-visible"
      style={{
        left,
        top,
        width: MOBILE_LINE_WIDTH,
        height,
      }}
      viewBox={`0 0 ${MOBILE_LINE_WIDTH} ${height}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <defs>
        {/*
         * Mobile version of the exact desktop gradient.
         *
         * gradientUnits="userSpaceOnUse" makes the gradient span the
         * complete measured timeline rather than restarting or collapsing.
         */}
        <linearGradient
          id="cyberwallMobileInterceptionLine"
          gradientUnits="userSpaceOnUse"
          x1={lineX}
          y1={0}
          x2={lineX}
          y2={height}
        >
          <stop offset="0%" stopColor="var(--color-cyan)" />

          <stop offset="38%" stopColor="var(--color-brand)" />

          <stop offset="72%" stopColor="var(--color-brand)" />

          <stop offset="100%" stopColor="var(--color-brand-deep)" />
        </linearGradient>
      </defs>

      {/* Always-visible neutral background track */}
      <path
        d={`M ${lineX} 0 L ${lineX} ${height}`}
        fill="none"
        stroke={MOBILE_LINE_TRACK_COLOR}
        strokeWidth={MOBILE_LINE_WIDTH}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />

      {/* Scroll-controlled gradient foreground line */}
      <motion.path
        d={`M ${lineX} 0 L ${lineX} ${height}`}
        fill="none"
        stroke="url(#cyberwallMobileInterceptionLine)"
        strokeWidth={MOBILE_LINE_WIDTH}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        style={{
          pathLength: progress,
        }}
      />
    </svg>
  );
}

function MobileTimelineStep({
  step,
  nodeRef,
}: {
  step: StoryStep;
  nodeRef?: RefObject<HTMLDivElement | null>;
}) {
  const Icon = step.icon;

  return (
    <div className="relative pl-14">
      <MobileTimelineNode ref={nodeRef} accent={step.accent} icon={Icon} />

      <div className={cn("rounded-[1.4rem] p-5", TONE_CLASSES[step.tone])}>
        <span
          className="font-nunito text-[0.65rem] font-bold uppercase"
          style={{
            color: step.accent,
          }}
        >
          {step.label} · {step.eyebrow}
        </span>

        <h3 className="mt-3 font-nunito text-lg font-bold text-neutral-950">
          {step.title}
        </h3>

        <p className="mt-2 text-sm leading-6 text-neutral-600">
          {step.description}
        </p>
      </div>
    </div>
  );
}

function MobileTimelineNode({
  ref,
  accent,
  icon: Icon,
}: {
  ref?: RefObject<HTMLDivElement | null>;
  accent: string;
  icon: StoryIcon;
}) {
  return (
    <div
      ref={ref}
      className="absolute left-0 top-5 z-10 flex h-10 w-10 items-center justify-center rounded-xl  shadow-[0_10px_28px_rgba(15,23,42,0.14)]"
      style={{
        backgroundColor: accent,
      }}
    >
      <Icon className="h-4 w-4 text-white" />
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              Shared content                                */
/* -------------------------------------------------------------------------- */

function StepEyebrow({ step }: { step: StoryStep }) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="whitespace-nowrap rounded-full px-2.5 py-1 font-nunito text-xs font-medium "
        style={{
          color: step.accent,
          backgroundColor: `${step.accent}12`,
        }}
      >
        {step.label} · {step.eyebrow}
      </span>

      <span className="h-px min-w-4 flex-1 bg-gradient-to-r from-neutral-200 to-transparent" />
    </div>
  );
}
