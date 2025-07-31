import { FC, memo } from 'react';

import { Logo } from '@/shared/ui/logo';

import { Subtitle } from './subtitle';
import { Title } from './title';

export const Header: FC = memo(() => {
  return (
    <header className="space-y-4 text-center">
      <div className="flex justify-center">
        <Logo className="size-16" />
      </div>
      <div className="space-y-2">
        <Title />
        <Subtitle />
      </div>
    </header>
  );
});

Header.displayName = 'Header';
