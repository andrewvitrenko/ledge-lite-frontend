'use client';

import type { FC } from 'react';

import { Header } from '@/widgets/header/';

import { useGetPeriods } from './api/use-get-all-periods';
import { Content } from './ui/content';
import { Placeholder } from './ui/placeholder';

export const DashboardPage: FC = () => {
  const { data, isFetching } = useGetPeriods();

  const hasNoPeriods = !isFetching && data?.length === 0;

  return (
    <div className="bg-background min-h-dvh">
      <Header />

      {hasNoPeriods ? <Placeholder /> : <Content />}
    </div>
  );
};
