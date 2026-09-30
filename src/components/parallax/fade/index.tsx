import type { PropsWithChildren } from 'react';
import { motion } from 'framer-motion';

import { fade } from './variants';

export function ParallaxFade({ children }: PropsWithChildren) {
  return (
    <motion.div variants={fade} initial="initial" whileInView="open">
      {children}
    </motion.div>
  );
}
