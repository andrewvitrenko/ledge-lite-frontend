import { TPaginatedResponse, TPaginationOptions } from '@/shared/api';

import { TCategory } from '../model/types';

export type TGetAllCategoriesResponse = TPaginatedResponse<TCategory>;

export type TGetAllCategoriesParams = {
  filter?: string;
} & TPaginationOptions;

export type TCreateCategoryPayload = Pick<TCategory, 'name' | 'color'>;

export type TUpdateCategoryPayload = Partial<TCreateCategoryPayload>;
