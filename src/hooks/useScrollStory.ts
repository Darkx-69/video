import { useRef } from 'react';
import { useScroll, useTransform, MotionValue } from 'motion/react';

export interface UseScrollStoryOptions {
  offset?: ["start start" | "start end" | "end end" | "end start", "start start" | "start end" | "end end" | "end start"];
}

export function useScrollStory(options?: UseScrollStoryOptions) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: options?.offset || ['start start', 'end end'],
  });

  return { containerRef, scrollYProgress };
}

export function useStageProgress(
  scrollYProgress: MotionValue<number>,
  stageIndex: number,
  totalStages: number
) {
  const start = stageIndex / totalStages;
  const end = (stageIndex + 1) / totalStages;
  const peak = start + (end - start) * 0.5;

  // Opacity peaks in the middle of this stage's scroll interval
  const opacity = useTransform(
    scrollYProgress,
    [
      Math.max(0, start - 0.05),
      start,
      peak,
      end - 0.05,
      Math.min(1, end),
    ],
    [0, 1, 1, 1, 0]
  );

  return { opacity, start, end };
}
