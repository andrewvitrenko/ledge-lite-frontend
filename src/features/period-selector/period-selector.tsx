import { Calendar } from 'lucide-react';
import { FC, memo, useCallback, useEffect } from 'react';
import { useShallow } from 'zustand/shallow';

import { usePeriodStore } from '@/entities/period/store';
import { cn } from '@/shared/lib/utils';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/shared/ui/select';

import { useGetActivePeriod } from './api/use-get-active-period';
import { useGetPeriods } from './api/use-get-periods';
import { PeriodLabel } from './ui/period-label';
import { PeriodOption } from './ui/period-option';
import { Placeholder } from './ui/placeholder';

export type TPeriodSelectorProps = {
  className?: string;
};

export const PeriodSelector: FC<TPeriodSelectorProps> = memo(
  ({ className }) => {
    const { selectedPeriod, setPeriod } = usePeriodStore(
      useShallow((state) => ({
        selectedPeriod: state.period?.id,
        setPeriod: state.setPeriod,
      })),
    );

    const { data: periods, isFetching: isLoadingAllPeriods } = useGetPeriods();
    const { data: activePeriod, isFetching: isLoadingActivePeriod } =
      useGetActivePeriod();

    useEffect(() => {
      if (selectedPeriod || isLoadingActivePeriod || !periods?.length) return;

      setPeriod(activePeriod ?? periods[0]);
    }, [
      activePeriod,
      isLoadingActivePeriod,
      periods,
      selectedPeriod,
      setPeriod,
    ]);

    const handlePeriodChange = useCallback(
      (periodId: string) => {
        const period = periods?.find((p) => p.id === periodId);
        if (period) {
          setPeriod(period);
        }
      },
      [periods, setPeriod],
    );

    const isFetching = isLoadingAllPeriods || isLoadingActivePeriod;

    if (isFetching) return <Placeholder className={className} />;

    return (
      <div className={cn('flex items-center space-x-2', className)}>
        <Calendar className="text-muted-foreground h-4 w-4" />

        <Select value={selectedPeriod || ''} onValueChange={handlePeriodChange}>
          <SelectTrigger className="w-auto min-w-48">
            <SelectValue placeholder="Select period">
              <PeriodLabel />
            </SelectValue>
          </SelectTrigger>
          <SelectContent>
            {periods?.map((period) => (
              <SelectItem key={period.id} value={period.id}>
                <PeriodOption {...period} />
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
    );
  },
);

PeriodSelector.displayName = 'PeriodSelector';
