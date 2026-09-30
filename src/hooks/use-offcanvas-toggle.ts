import type { RefObject } from 'react';
import { useMotionValueEvent, useScroll } from 'framer-motion';

interface UseOffcanvasToggleParams {
  element: RefObject<HTMLElement | null>;
  callback: (latestValue: number) => void;
}

export function useOffcanvasToggle({ element, callback }: UseOffcanvasToggleParams) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['500px 500px', 'end start'],
  });

  useMotionValueEvent(scrollYProgress, 'change', callback);

  return { scrollYProgress };
}
