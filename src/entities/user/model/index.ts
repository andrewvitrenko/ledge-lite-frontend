import { TAccount } from '@/entities/account/model';
import { TCategory } from '@/entities/category/model';

export type TUser = {
  id: string;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  baseCurrency: string;
  accounts: TAccount[];
  categories: TCategory[];
};
