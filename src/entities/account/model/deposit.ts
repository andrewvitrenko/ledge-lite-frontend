import { TTransaction } from '@/entities/transaction/model';

export type TDeposit = {
  id: string;
  createdAt: string;
  updatedAt: string;
  accountId: string;
  transaction: TTransaction;
};
