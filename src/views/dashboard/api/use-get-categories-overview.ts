import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';
import { useShallow } from 'zustand/shallow';

import { PeriodApi } from '@/entities/period/api';
import { usePeriodStore } from '@/entities/period/store';

export const useGetCategoriesOverview = () => {
  const periodId = usePeriodStore(useShallow((state) => state.period?.id));

  const query = useQuery({
    enabled: !!periodId,
    queryKey: ['period', 'getCategoriesOverview', periodId],
    queryFn: ({ signal }) =>
      PeriodApi.getCategoriesOverview(periodId!, { signal }),
  });

  useEffect(() => {
    if (query.error) {
      toast.error(query.error.message);
    }
  }, [query.error]);

  return query;
};
