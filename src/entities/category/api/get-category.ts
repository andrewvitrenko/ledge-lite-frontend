import { apiClient } from '@/shared/api/api-client';

import type { TCategory, TCategoryId } from '../model/types';

export const getCategory = async (id: TCategoryId, signal: AbortSignal): Promise<TCategory> => {
  const response = await apiClient.get<TCategory>(`/categories/${id}`, { signal });

  return response.data;
};
