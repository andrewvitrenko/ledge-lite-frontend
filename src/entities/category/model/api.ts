import type { TPaginatedResponse, TPaginationParams } from '@/shared/model/api';

import type { TCategory } from './types';

export type TGetAllCategoriesResponse = TPaginatedResponse<TCategory>;

export type TGetAllCategoriesParams = {
  search?: string;
} & TPaginationParams;

export type TCreateCategoryPayload = Pick<TCategory, 'name' | 'color'>;

export type TUpdateCategoryPayload = Partial<TCreateCategoryPayload>;
