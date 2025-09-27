import { mockAccounts } from '@/entities/account/config/mock-data';
import { mockCategories } from '@/entities/category/config/mock-data';

import { TUser } from '../model';

export const user: TUser = {
  id: 'user-1',
  createdAt: '2025-01-01T00:00:00Z',
  updatedAt: '2025-01-01T00:00:00Z',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@example.com',
  accounts: mockAccounts,
  baseCurrency: 'USD',
  categories: mockCategories,
};
