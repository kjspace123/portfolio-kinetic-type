import { Link } from 'react-router-dom';

import { thumbnailOptions } from '@/data';

interface ThumbnailListProps {
  handlePointerEnter: (index: number) => void;
  handlePointerLeave: (index: number) => void;
  moveItems: (x: number, y: number) => void;
}

export function ThumbnailList({
  handlePointerEnter,
  handlePointerLeave,
  moveItems,
}: ThumbnailListProps) {
  const items = thumbnailOptions.map(({ href, title }, index) => {
    const id = index;
    return (
      <li
        key={`thumbnail-list-${id}`}
        className="border-t border-solid transition-all last-of-type:border-b group-hover:opacity-90"
        style={{
          paddingInline: 'calc(clamp(1em,3vw,4em) * 2)',
          paddingBlock: 'clamp(1em,3vw,4em)',
        }}
        onPointerEnter={({ clientX, clientY }) => {
          handlePointerEnter(id);
          moveItems(clientX, clientY);
        }}
        onPointerLeave={({ clientX, clientY }) => {
          handlePointerLeave(id);
          moveItems(clientX, clientY);
        }}
      >
        <Link
          to={href}
          className="flex items-center justify-between max-lg:flex-wrap"
        >
          <h4
            style={{
              fontSize: 'calc(clamp(3.25em, 7vw, 8em) * 0.75)',
            }}
          >
            {title}
          </h4>
          <p className="text-lg font-medium">Design & Development</p>
        </Link>
      </li>
    );
  });

  return <ul className="group">{items}</ul>;
}
