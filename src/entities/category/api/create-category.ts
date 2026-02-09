import type { AxiosResponse } from 'axios';

import { apiClient } from '@/shared/api/api-client';

import type { TCreateCategoryPayload } from '../model/api';
import type { TCategory } from '../model/types';

export const createCategory = async (payload: TCreateCategoryPayload): Promise<TCategory> => {
  const response = await apiClient.post<TCategory, AxiosResponse<TCategory>, TCreateCategoryPayload>(
    '/categories',
    payload,
  );

  return response.data;
};
