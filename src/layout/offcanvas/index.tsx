import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

import { OffcanvasBody, OffcanvasToggle } from './components';

export function Offcanvas() {
  const [isOpen, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isOpen ? <OffcanvasBody /> : null}
      </AnimatePresence>
      <OffcanvasToggle isOpen={isOpen} handleOpen={setOpen} />
    </>
  );
}
