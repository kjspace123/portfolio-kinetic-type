import { useRef, type ReactNode } from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import type { VariantProps } from 'class-variance-authority';

import { useMagnetic } from '@/hooks';
import { cn } from '@/utils';

import { magneticVariance } from './index.variance';

interface MagneticButtonProps
  extends Omit<HTMLMotionProps<'button'>, 'children'>,
    VariantProps<typeof magneticVariance> {
  children?: ReactNode;
}

export function MagneticButton({
  children,
  className,
  variant,
  size,
  ...props
}: MagneticButtonProps) {
  const elementRef = useRef<HTMLButtonElement>(null);
  const {
    position: { x, y },
    handleMagneticMove,
    handleMagneticOut,
  } = useMagnetic(elementRef);

  return (
    <motion.button
      ref={elementRef}
      className={cn(magneticVariance({ variant, size, className }))}
      animate={{ x, y }}
      transition={{
        type: 'spring',
        damping: 15,
        stiffness: 150,
        mass: 0.1,
      }}
      onPointerMove={handleMagneticMove}
      onPointerOut={handleMagneticOut}
      whileHover={{ scale: 1.1 }}
      {...props}
    >
      <span className="relative z-[1] block w-max whitespace-nowrap">
        {children}
      </span>
    </motion.button>
  );
}
