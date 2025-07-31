import { FC, memo } from 'react';

export const Subtitle: FC = memo(() => {
  return (
    <p className="text-muted-foreground">
      Start your journey to better financial management
    </p>
  );
});

Subtitle.displayName = 'Subtitle';
