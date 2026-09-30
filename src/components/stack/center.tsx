import { forwardRef, type HTMLAttributes } from 'react';
import { cn } from '@/utils';

export const Center = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  function Center({ className, ...props }, ref) {
    return (
      <div
        ref={ref}
        className={cn('flex items-center justify-center', className)}
        {...props}
      />
    );
  },
);
