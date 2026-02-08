import { apiClient } from '@/shared/api/api-client';
import type { TAuthResponse, TLoginPayload } from '../model/api';
import type { AxiosResponse } from 'axios';

export const login = async (payload: TLoginPayload): Promise<TAuthResponse> => {
  const response = await apiClient.post<TAuthResponse, AxiosResponse<TAuthResponse>, TLoginPayload>(
    '/auth/login',
    payload,
  );

  return response.data;
};
