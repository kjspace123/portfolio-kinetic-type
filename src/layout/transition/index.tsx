import { useState, type PropsWithChildren } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { useLenis, useTimeOut } from '@/hooks';

import { Preloader } from './preloader';

export function Transition({ children }: PropsWithChildren) {
  const [isLoading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useLenis();
  useTimeOut({
    callback: () => {
      setLoading(false);
      window.scrollTo(0, 0);
    },
    duration: 2000,
    deps: [],
  });

  return (
    <div key={pathname} className="overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading ? <Preloader /> : null}
      </AnimatePresence>
      {children}
    </div>
  );
}
