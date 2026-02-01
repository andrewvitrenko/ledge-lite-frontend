import type { TAccountId } from '@/entities/account/@x/transaction';
import type { BrandId } from '@/shared/model/utils';

import type { TTransaction } from './types';

export type TWithdrawalId = BrandId<'withdrawal'>;

export type TWithdrawal = {
  id: TWithdrawalId;
  createdAt: string;
  updatedAt: string;
  accountId: TAccountId;
  transaction: TTransaction;
};
