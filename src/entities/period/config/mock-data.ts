import { formatISO } from 'date-fns';

import { EPeriodStatus, TPeriod } from '../model';

export const periods: TPeriod[] = [
  {
    id: '1',
    userId: 'user_1',
    name: 'January 2025',
    startDate: formatISO(new Date('2025-01-01')),
    endDate: formatISO(new Date('2025-01-31')),
    status: EPeriodStatus.ACTIVE,
    createdAt: '2025-01-01T00:00:00Z',
    updatedAt: '2025-01-01T00:00:00Z',
    accountSnapshots: [],
  },
  {
    id: '2',
    userId: 'user_1',
    name: 'December 2024',
    startDate: formatISO(new Date('2024-12-01')),
    endDate: formatISO(new Date('2024-12-31')),
    status: EPeriodStatus.CLOSED,
    createdAt: '2024-12-01T00:00:00Z',
    updatedAt: '2024-12-31T23:59:59Z',
    accountSnapshots: [],
  },
];
