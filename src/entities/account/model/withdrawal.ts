import { TTransaction } from '@/entities/transaction/model';

export type TWithdrawal = {
  id: string;
  createdAt: string;
  updatedAt: string;
  transaction: TTransaction;
  accountId: string;
};
