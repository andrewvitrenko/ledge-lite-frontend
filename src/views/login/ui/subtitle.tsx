import { FC, memo } from 'react';

export const Subtitle: FC = memo(() => {
  return (
    <p className="text-muted-foreground">Sign in to your LedgerLite account</p>
  );
});

Subtitle.displayName = 'LoginSubtitle';
