import type { BrandId } from '@/shared/model/utils';

export type TUserId = BrandId<'user'>;

export type TUser = {
  id: TUserId;
  createdAt: string;
  updatedAt: string;
  firstName: string;
  lastName: string;
  email: string;
  baseCurrency: string;
};
