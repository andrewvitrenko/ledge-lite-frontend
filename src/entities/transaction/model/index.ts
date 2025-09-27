import { TCategory } from '@/entities/category/model';
import { ValueOf } from '@/shared/model/utils';

export const EPaymentType = {
  CASH: 'CASH',
  CARD: 'CARD',
} as const;

export type EPaymentType = ValueOf<typeof EPaymentType>;

export type TTransaction = {
  id: string;
  createdAt: string;
  updatedAt: string;
  amount: number;
  date: string;
  note?: string;
  paymentType: EPaymentType;
  category?: TCategory;
  userId: string;
  currency: string;
  periodId?: string;
};
