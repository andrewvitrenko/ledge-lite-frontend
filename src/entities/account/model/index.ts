import { ValueOf } from '@/shared/model/utils';

import { TDeposit } from './deposit';
import { TTransfer } from './transfer';
import { TWithdrawal } from './withdrawal';

export const EAccountType = {
  ASSET: 'ASSET',
  LIABILITY: 'LIABILITY',
  CREDIT: 'CREDIT',
  SAVINGS: 'SAVINGS',
} as const;

export type EAccountType = ValueOf<typeof EAccountType>;

export type TAccount = {
  id: string;
  name: string;
  userId: string;
  balance: number;
  createdAt: string;
  updatedAt: string;
  currency: string;
  color?: string;
  type: EAccountType;
  incomingTransfers: TTransfer[];
  outgoingTransfers: TTransfer[];
  deposits: TDeposit[];
  withdrawals: TWithdrawal[];
};
