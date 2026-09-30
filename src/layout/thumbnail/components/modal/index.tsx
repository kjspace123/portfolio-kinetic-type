import { forwardRef } from 'react';
import { motion, type HTMLMotionProps, type Variants } from 'framer-motion';

import { Center } from '@/components';
import { thumbnailOptions } from '@/data';
import { cldImageUrl, randomId } from '@/utils';

const MotionComponent = motion.create(Center);

interface ThumbnailModalProps extends HTMLMotionProps<'div'> {
  variants: Variants;
  active: boolean;
  index: number;
}

export const ThumbnailModal = forwardRef<HTMLDivElement, ThumbnailModalProps>(
  function ThumbnailModal({ variants, active, index, ...props }, ref) {
    const items = thumbnailOptions.map(({ title, image }) => {
      const id = randomId();
      return (
        <Center key={id} className="h-full w-full">
          <img
            src={cldImageUrl(image)}
            width={320}
            height={320}
            className="h-full w-full object-cover"
            alt={`${title} thumbnail image`}
          />
        </Center>
      );
    });

    return (
      <MotionComponent
        ref={ref}
        className="pointer-events-none fixed left-1/2 top-1/2 h-80 w-80 overflow-hidden rounded bg-secondary-foreground"
        variants={variants}
        initial="initial"
        animate={active ? 'enter' : 'closed'}
        {...props}
      >
        <div
          className="relative h-full w-full"
          style={{
            top: `${index * -100}%`,
            transition: 'top 0.5s cubic-bezier(0.76, 0, 0.24, 1)',
          }}
        >
          {items}
        </div>
      </MotionComponent>
    );
  },
);
