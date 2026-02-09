import type { AxiosResponse } from 'axios';

import { apiClient } from '@/shared/api/api-client';

import type { TUpdateCategoryPayload } from '../model/api';
import type { TCategory, TCategoryId } from '../model/types';

export const updateCategory = async (id: TCategoryId, payload: TUpdateCategoryPayload): Promise<TCategory> => {
  const response = await apiClient.patch<TCategory, AxiosResponse<TCategory>, TUpdateCategoryPayload>(
    `/categories/${id}`,
    payload,
  );

  return response.data;
};
