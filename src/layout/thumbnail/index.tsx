import { useRef } from 'react';

import { useFollowPointer } from '@/hooks';

import {
  ThumbnailAction,
  ThumbnailCursorCircle,
  ThumbnailCursorLabel,
  ThumbnailLabel,
  ThumbnailList,
  ThumbnailModal,
} from './components';
import { scaleUp } from './variants';

export function Thumbnail() {
  const modal = useRef<HTMLDivElement>(null);
  const cursor = useRef<HTMLDivElement>(null);
  const label = useRef<HTMLDivElement>(null);

  const {
    item: { active, index },
    handlePointerEnter,
    handlePointerLeave,
    moveItems,
  } = useFollowPointer({
    modal,
    cursor,
    label,
  });

  return (
    <section
      className="container relative"
      onPointerMove={({ clientX, clientY }) => moveItems(clientX, clientY)}
    >
      <div className="my-8 flex flex-col gap-10">
        <ThumbnailLabel>Recent work</ThumbnailLabel>
        <ThumbnailList
          handlePointerEnter={handlePointerEnter}
          handlePointerLeave={handlePointerLeave}
          moveItems={moveItems}
        />
        <ThumbnailModal
          ref={modal}
          variants={scaleUp}
          active={active}
          index={index}
        />
        <ThumbnailCursorCircle
          ref={cursor}
          variants={scaleUp}
          active={active}
        />
        <ThumbnailCursorLabel ref={label} variants={scaleUp} active={active}>
          View
        </ThumbnailCursorLabel>
        <ThumbnailAction>
          More work<sup className="text-muted-foreground">14</sup>
        </ThumbnailAction>
      </div>
    </section>
  );
}
