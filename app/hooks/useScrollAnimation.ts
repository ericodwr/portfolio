import { useRef, useEffect } from "react";
import { useScroll, useTransform, MotionValue } from "framer-motion";

interface UseScrollAnimationReturn {
  ref: React.RefObject<HTMLDivElement>;
  opacity: MotionValue<number>;
  y: MotionValue<number>;
}

export function useScrollAnimation(): UseScrollAnimationReturn {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollY, [0, 100, 200], [0, 1, 0.5]);
  const y = useTransform(scrollY, [0, 100, 200], [50, 0, -50]);

  return { ref, opacity, y };
}
