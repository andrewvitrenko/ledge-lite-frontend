import { FC, memo } from 'react';
import { useShallow } from 'zustand/shallow';

import { usePeriodStore } from '@/entities/period/store';
import { Badge } from '@/shared/ui/badge';

import { statusVariants } from '../config/styles';

export const PeriodLabel: FC = memo(() => {
  const { name, status } = usePeriodStore(
    useShallow((state) => ({
      name: state.period?.name,
      status: state.period?.status,
    })),
  );

  return (
    <div className="flex items-center space-x-2">
      <span className="font-medium">{name}</span>
      <Badge variant="outline" className={statusVariants({ status })}>
        {status}
      </Badge>
    </div>
  );
});

PeriodLabel.displayName = 'PeriodLabel';
