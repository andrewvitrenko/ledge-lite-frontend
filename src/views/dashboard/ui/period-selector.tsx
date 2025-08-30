import { cva } from 'class-variance-authority';
import { format } from 'date-fns';
import { Calendar } from 'lucide-react';
import { FC, memo, useEffect, useState } from 'react';

import { periods } from '@/entities/period/config/mock-data';
import { EPeriodStatus, TPeriod } from '@/entities/period/model';
import { cn } from '@/shared/lib/utils';
import { Badge } from '@/shared/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

const statusVariants = cva('text-sx', {
  variants: {
    status: {
      [EPeriodStatus.ACTIVE]: 'bg-green-100 text-green-800 border-green-200',
      [EPeriodStatus.ARCHIVED]: 'bg-blue-100 text-blue-800 border-blue-200',
      [EPeriodStatus.CLOSED]: 'bg-gray-100 text-gray-800 border-gray-200',
    },
  },
  defaultVariants: { status: EPeriodStatus.CLOSED },
});

type TPeriodSelectorProps = {
  selectedPeriodId?: string;
  onPeriodChange: (period: TPeriod) => void;
  className?: string;
};

export const PeriodSelector: FC<TPeriodSelectorProps> = memo(
  ({ selectedPeriodId, onPeriodChange, className }) => {
    const isLoading = false;
    const [selectedPeriod, setSelectedPeriod] = useState<TPeriod | null>(null);

    useEffect(() => {
      if (selectedPeriodId && periods.length > 0) {
        const period = periods.find((p) => p.id === selectedPeriodId);
        if (period) {
          setSelectedPeriod(period);
        }
      } else if (periods.length > 0 && !selectedPeriod) {
        // Auto-select active period or first period
        const activePeriod =
          periods.find((p) => p.status === 'ACTIVE') || periods[0];
        setSelectedPeriod(activePeriod);
        onPeriodChange(activePeriod);
      }
    }, [selectedPeriodId, selectedPeriod, onPeriodChange]);

    const handlePeriodChange = (periodId: string) => {
      const period = periods.find((p) => p.id === periodId);
      if (period) {
        setSelectedPeriod(period);
        onPeriodChange(period);
      }
    };

    if (isLoading) {
      return (
        <div className={cn('flex items-center space-x-2', className)}>
          <div className="bg-muted h-10 w-48 animate-pulse rounded-md" />
        </div>
      );
    }

    return (
      <div className={cn('flex items-center space-x-2', className)}>
        <Calendar className="text-muted-foreground h-4 w-4" />

        <Select
          value={selectedPeriod?.id || ''}
          onValueChange={handlePeriodChange}
        >
          <SelectTrigger className="w-auto min-w-48">
            <SelectValue placeholder="Select period">
              {selectedPeriod && (
                <div className="flex items-center space-x-2">
                  <span className="font-medium">{selectedPeriod.name}</span>
                  <Badge
                    variant="outline"
                    className={statusVariants({
                      status: selectedPeriod.status,
                    })}
                  >
                    {selectedPeriod.status}
                  </Badge>
                </div>
              )}
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {periods.map((period) => (
              <SelectItem key={period.id} value={period.id}>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <div className="font-medium">{period.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {format(period.startDate, 'MMM d')} -{' '}
                      {format(period.endDate, 'MMM d, yyyy')}
                    </div>
                  </div>
                  <Badge
                    variant="outline"
                    className={statusVariants({
                      status: period.status,
                      className: 'ml-2',
                    })}
                  >
                    {period.status}
                  </Badge>
                </div>
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
);

PeriodSelector.displayName = 'PeriodSelector';
