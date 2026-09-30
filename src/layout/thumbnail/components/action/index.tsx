import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

import { Center, MagneticButton } from '@/components';

export function ThumbnailAction({ children }: PropsWithChildren) {
  return (
    <Center>
      <Link to="/work">
        <MagneticButton
          variant="outline"
          className="px-10 py-8 text-base before:-top-1/2 hover:text-background"
        >
          {children}
        </MagneticButton>
      </Link>
    </Center>
  );
}
