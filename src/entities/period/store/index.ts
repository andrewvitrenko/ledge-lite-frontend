import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { TPeriod } from '../model';

export type TPeriodStore = {
  period: TPeriod | null;
  setPeriod: (period: TPeriod) => void;
};

export const usePeriodStore = create<TPeriodStore>()(
  persist(
    (set) => ({
      period: null,
      setPeriod: (period) => set({ period }),
    }),
    {
      name: 'period',
      storage: createJSONStorage(() => localStorage),
    },
  ),
);
