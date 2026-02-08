'use client';

import { useTheme } from 'next-themes';
import type { FC } from 'react';
import { Toaster as Sonner, type ToasterProps } from 'sonner';

export const Toaster: FC<ToasterProps> = (props) => {
  const { theme = 'system' } = useTheme();

  return (
    <Sonner
      theme={theme as ToasterProps['theme']}
      className="toaster group"
      position="bottom-center"
      richColors
      style={
        {
          '--normal-bg': 'var(--popover)',
          '--normal-text': 'var(--popover-foreground)',
          '--normal-border': 'var(--border)',
        } as React.CSSProperties
      }
      {...props}
    />
  );
};
