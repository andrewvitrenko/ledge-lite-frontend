import { TTransaction } from '@/entities/transaction/model';

export type TTransfer = {
  id: string;
  createdAt: string;
  updatedAt: string;
  transaction: TTransaction;
  sourceId: string;
  destinationId: string;
};
