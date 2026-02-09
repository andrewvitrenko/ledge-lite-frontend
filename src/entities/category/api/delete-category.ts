import type { AxiosResponse } from 'axios';

import { apiClient } from '@/shared/api/api-client';

import type { TCategory, TCategoryId } from '../model/types';

export const deleteCategory = async (id: TCategoryId): Promise<TCategory> => {
  const response = await apiClient.delete<TCategory, AxiosResponse<TCategory>>(`/categories/${id}`);

  return response.data;
};
