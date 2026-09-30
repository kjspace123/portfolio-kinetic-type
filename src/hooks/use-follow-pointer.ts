import { useCallback, useEffect, useRef, useState, type RefObject } from 'react';
import { gsap } from 'gsap';

type QuickToFn = (value: number) => void;

interface UseFollowPointerParams {
  modal: RefObject<HTMLElement | null>;
  cursor: RefObject<HTMLElement | null>;
  label: RefObject<HTMLElement | null>;
}

export function useFollowPointer({ modal, cursor, label }: UseFollowPointerParams) {
  const [item, setItem] = useState({ active: false, index: 0 });

  const xMoveModal = useRef<QuickToFn | null>(null);
  const yMoveModal = useRef<QuickToFn | null>(null);

  const xMoveCursor = useRef<QuickToFn | null>(null);
  const yMoveCursor = useRef<QuickToFn | null>(null);

  const xMoveLabel = useRef<QuickToFn | null>(null);
  const yMoveLabel = useRef<QuickToFn | null>(null);

  const handlePointerEnter = useCallback(
    (index: number) => setItem({ active: true, index }),
    [],
  );

  const handlePointerLeave = useCallback(
    (index: number) => setItem({ active: false, index }),
    [],
  );

  const moveItems = useCallback((x: number, y: number) => {
    xMoveModal.current?.(x);
    yMoveModal.current?.(y);
    xMoveCursor.current?.(x);
    yMoveCursor.current?.(y);
    xMoveLabel.current?.(x);
    yMoveLabel.current?.(y);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Move modal
      xMoveModal.current = gsap.quickTo(modal.current, 'left', {
        duration: 0.8,
        ease: 'power3',
      });
      yMoveModal.current = gsap.quickTo(modal.current, 'top', {
        duration: 0.8,
        ease: 'power3',
      });

      // Move cursor
      xMoveCursor.current = gsap.quickTo(cursor.current, 'left', {
        duration: 0.5,
        ease: 'power3',
      });
      yMoveCursor.current = gsap.quickTo(cursor.current, 'top', {
        duration: 0.5,
        ease: 'power3',
      });

      // Move cursor label
      xMoveLabel.current = gsap.quickTo(label.current, 'left', {
        duration: 0.45,
        ease: 'power3',
      });
      yMoveLabel.current = gsap.quickTo(label.current, 'top', {
        duration: 0.45,
        ease: 'power3',
      });
    });

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { item, handlePointerEnter, handlePointerLeave, moveItems };
}
