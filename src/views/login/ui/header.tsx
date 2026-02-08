import type { FC } from 'react';

import { Logo } from '@/shared/ui/logo';

export const Header: FC = () => {
  return (
    <header className="space-y-4 text-center">
      <div className="flex justify-center">
        <Logo className="size-16" />
      </div>
      <div className="space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
        <p className="text-muted-foreground">Sign in to your LedgerLite account</p>
      </div>
    </header>
  );
};
