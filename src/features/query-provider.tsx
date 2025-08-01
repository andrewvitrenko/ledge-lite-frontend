'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC, PropsWithChildren } from 'react';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: { refetchOnMount: false, refetchOnWindowFocus: false },
  },
});

export const QueryProvider: FC<PropsWithChildren> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
