import type { TUserId } from '@/entities/user/@x/category';
import type { BrandId } from '@/shared/model/utils';

export type TCategoryId = BrandId<'category'>;

export type TCategory = {
  id: TCategoryId;
  name: string;
  userId: TUserId;
  color?: string;
  createdAt: string;
  updatedAt: string;
};
