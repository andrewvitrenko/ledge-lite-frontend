import type { TUserId } from '@/entities/user/@x/account';
import type { BrandId, ValueOf } from '@/shared/model/utils';

export const EAccountType = {
  ASSET: 'ASSET',
  LIABILITY: 'LIABILITY',
  CREDIT: 'CREDIT',
  SAVINGS: 'SAVINGS',
} as const;

export type EAccountType = ValueOf<typeof EAccountType>;

export type TAccountId = BrandId<'account'>;

export type TAccount = {
  id: TAccountId;
  name: string;
  userId: TUserId;
  balance: number;
  createdAt: string;
  updatedAt: string;
  currency: string;
  color?: string;
  type: EAccountType;
};
