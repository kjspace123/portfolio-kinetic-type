import type { Variants } from 'framer-motion';

export const fade: Variants = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: { duration: 0.75 },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};
