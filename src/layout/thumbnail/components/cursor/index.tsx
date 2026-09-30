import { forwardRef } from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

import { Center } from '@/components';
import { cn } from '@/utils';

const MotionComponent = motion.create(Center);

const cursorShapeClassName =
  'fixed z-[2] size-20 rounded-full text-sm leading-5 text-background pointer-events-none';

interface ThumbnailCursorProps extends HTMLMotionProps<'div'> {
  variants: Variants;
  active: boolean;
}

export const ThumbnailCursorCircle = forwardRef<HTMLDivElement, ThumbnailCursorProps>(
  function ThumbnailCursorCircle({ variants, active, className, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        className={cn(cursorShapeClassName, 'bg-primary', className)}
        variants={variants}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);

export const ThumbnailCursorLabel = forwardRef<HTMLDivElement, ThumbnailCursorProps>(
  function ThumbnailCursorLabel({ variants, active, className, ...props }, ref) {
    return (
      <MotionComponent
        ref={ref}
        className={cn(cursorShapeClassName, className)}
        variants={variants}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        {...props}
      />
    );
  },
);
