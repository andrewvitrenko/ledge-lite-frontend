import { cva } from 'class-variance-authority';

import { EPeriodStatus } from '@/entities/period/model';

export const statusVariants = cva('text-xs', {
  variants: {
    status: {
      [EPeriodStatus.ACTIVE]: 'bg-green-100 text-green-800 border-green-200',
      [EPeriodStatus.ARCHIVED]: 'bg-blue-100 text-blue-800 border-blue-200',
      [EPeriodStatus.CLOSED]: 'bg-gray-100 text-gray-800 border-gray-200',
    },
  },
  defaultVariants: { status: EPeriodStatus.CLOSED },
});
