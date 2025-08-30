import { mockCategories } from '@/entities/category/config/mock-data';

import { EPaymentType, TTransaction } from '../model';

export const mockTransactions: TTransaction[] = [
  {
    id: 'trans-1',
    createdAt: '2025-08-25T15:30:00Z',
    updatedAt: '2025-08-25T15:30:00Z',
    amount: 75.5,
    date: '2025-08-25',
    note: 'Weekly groceries',
    paymentType: EPaymentType.CARD,
    category: mockCategories[0],
    userId: 'user-1',
    currency: 'USD',
    periodId: 'period-1',
  },
  {
    id: 'trans-2',
    createdAt: '2025-08-26T09:15:00Z',
    updatedAt: '2025-08-26T09:15:00Z',
    amount: 25,
    date: '2025-08-26',
    note: 'Bus pass',
    paymentType: EPaymentType.CARD,
    category: mockCategories[1],
    userId: 'user-1',
    currency: 'USD',
    periodId: 'period-1',
  },
  {
    id: 'trans-3',
    createdAt: '2025-08-27T20:00:00Z',
    updatedAt: '2025-08-27T20:00:00Z',
    amount: 45,
    date: '2025-08-27',
    note: 'Movie night',
    paymentType: EPaymentType.CASH,
    category: mockCategories[2],
    userId: 'user-1',
    currency: 'USD',
    periodId: 'period-1',
  },
];
