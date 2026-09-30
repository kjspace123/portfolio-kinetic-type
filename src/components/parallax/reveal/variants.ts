import type { Variants } from 'framer-motion';

export const reveal: Variants = {
  initial: {
    y: '100%',
  },
  open: i => ({
    y: '0%',
    transition: { duration: 0.5, delay: 0.01 * i },
  }),
  closed: {
    y: '100%',
    transition: { duration: 0.5 },
  },
};
