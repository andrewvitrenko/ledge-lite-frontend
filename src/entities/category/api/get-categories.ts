import { apiClient } from '@/shared/api/api-client';

import type { TGetAllCategoriesParams, TGetAllCategoriesResponse } from '../model/api';

export const getCategories = async (
  params: TGetAllCategoriesParams,
  signal: AbortSignal,
): Promise<TGetAllCategoriesResponse> => {
  const response = await apiClient.get<TGetAllCategoriesResponse>('/categories', { params, signal });

  return response.data;
};
