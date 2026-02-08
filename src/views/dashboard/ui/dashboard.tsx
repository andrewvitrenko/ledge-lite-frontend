import type { FC } from 'react';

import { Header } from '@/widgets/header/';

import { Placeholder } from './placeholder';

export const DashboardPage: FC = () => {
  return (
    <div className="bg-background min-h-dvh">
      <Header />

      <Placeholder />
    </div>
  );
};
