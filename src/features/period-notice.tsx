'use client';

import { differenceInDays, format } from 'date-fns';
import { AlertTriangle, Calendar } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';
import { useShallow } from 'zustand/shallow';

import { EPeriodStatus } from '@/entities/period/model';
import { usePeriodStore } from '@/entities/period/store';
import { Alert, AlertDescription } from '@/shared/ui/alert';
import { Button } from '@/shared/ui/button';

export const PeriodNotice: FC = memo(() => {
  const period = usePeriodStore(useShallow((state) => state.period));

  if (!period || period.status !== EPeriodStatus.ACTIVE) return null;

  const diff = differenceInDays(period.endDate, new Date());

  if (diff < 0) {
    return (
      <Alert className="border-red-200 bg-red-50">
        <AlertTriangle className="h-4 w-4 !text-red-600" />
        <AlertDescription className="text-red-800">
          This period ended on {format(period.endDate, 'MMM d, yyyy')}. Consider
          closing it to finalize your financial summary.
          <Button asChild size="sm" className="ml-2">
            <Link href={`/periods/${period.id}`}>Close Period</Link>
          </Button>
        </AlertDescription>
      </Alert>
    );
  }

  if (diff <= 7) {
    return (
      <Alert className="border-yellow-200 bg-yellow-50">
        <Calendar className="h-4 w-4 !text-yellow-600" />
        <AlertDescription className="text-yellow-800">
          This period ends on {format(period.endDate, 'MMM d, yyyy')}. Start
          planning for the next period.
        </AlertDescription>
      </Alert>
    );
  }

  return null;
});

PeriodNotice.displayName = 'PeriodNotice';
