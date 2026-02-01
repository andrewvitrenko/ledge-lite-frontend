import type { TCategory } from '@/entities/category/@x/transaction';
import type { TUserId } from '@/entities/user/@x/transaction';
import type { BrandId, ValueOf } from '@/shared/model/utils';

export const EPaymentType = {
  CASH: 'CASH',
  CARD: 'CARD',
} as const;

export type EPaymentType = ValueOf<typeof EPaymentType>;

export type TTransactionId = BrandId<'transaction'>;

export type TTransaction = {
  id: TTransactionId;
  createdAt: string;
  updatedAt: string;
  amount: number;
  date: string;
  note?: string;
  paymentType: EPaymentType;
  category?: TCategory;
  userId: TUserId;
  currency: string;
};
