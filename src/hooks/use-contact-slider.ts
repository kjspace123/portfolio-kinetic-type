import type { RefObject } from 'react';
import { useScroll, useTransform } from 'framer-motion';

export function useContactSlider(element: RefObject<HTMLElement | null>) {
  const { scrollYProgress } = useScroll({
    target: element,
    offset: ['start end', 'end start'],
  });

  const transformX = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const transformY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return { transformX, transformY };
}
