import { format } from 'date-fns';
import { FC, memo } from 'react';

import { TPeriod } from '@/entities/period/model';
import { Badge } from '@/shared/ui/badge';

import { statusVariants } from '../config/styles';

export const PeriodOption: FC<TPeriod> = memo(
  ({ name, startDate, endDate, status }) => {
    return (
      <div className="flex w-full items-center justify-between">
        <div>
          <div className="font-medium">{name}</div>
          <div className="text-muted-foreground text-sm">
            {format(startDate, 'MMM d')} - {format(endDate, 'MMM d, yyyy')}
          </div>
        </div>
        <Badge
          variant="outline"
          className={statusVariants({ status, className: 'ml-2' })}
        >
          {status}
        </Badge>
      </div>
    );
  },
);

PeriodOption.displayName = 'PeriodOption';
