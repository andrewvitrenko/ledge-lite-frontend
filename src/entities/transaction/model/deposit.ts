import type { TAccountId } from '@/entities/account/@x/transaction';
import type { BrandId } from '@/shared/model/utils';

import type { TTransaction } from './types';

export type TDepositId = BrandId<'deposit'>;

export type TDeposit = {
  id: TDepositId;
  transaction: TTransaction;
  createdAt: string;
  updatedAt: string;
  accountId: TAccountId;
};
