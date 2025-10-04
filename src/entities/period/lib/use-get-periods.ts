import { useQuery } from '@tanstack/react-query';
import { useEffect } from 'react';
import { toast } from 'sonner';

import { PeriodApi } from '@/entities/period/api';

export const useGetPeriods = () => {
  const query = useQuery({
    queryKey: ['periods', 'getAll'],
    queryFn: ({ signal }) => PeriodApi.getAll({ signal }),
  });

  useEffect(() => {
    if (query.error) {
      toast.error(query.error.message);
    }
  }, [query.error]);

  return query;
};
