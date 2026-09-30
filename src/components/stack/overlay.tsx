import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils';

export const FixedOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function FixedOverlay({ className, ...props }, ref) {
    return <div ref={ref} className={cn('fixed inset-0', className)} {...props} />;
  },
);

export const AbsoluteOverlay = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function AbsoluteOverlay({ className, ...props }, ref) {
    return <div ref={ref} className={cn('absolute inset-0', className)} {...props} />;
  },
);
