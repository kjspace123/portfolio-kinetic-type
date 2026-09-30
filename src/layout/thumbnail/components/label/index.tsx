import type { PropsWithChildren } from 'react';

export function ThumbnailLabel({ children }: PropsWithChildren) {
  return (
    <div
      style={{
        paddingInlineStart: 'clamp(2.5em, 8vw, 8em)',
      }}
    >
      <h5 className="text-xs text-secondary-foreground">{children}</h5>
    </div>
  );
}
