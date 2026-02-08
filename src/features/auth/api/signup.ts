import type { AxiosResponse } from 'axios';

import { apiClient } from '@/shared/api/api-client';

import type { TAuthResponse, TSignupPayload } from '../model/api';

export const signUp = async (payload: TSignupPayload): Promise<TAuthResponse> => {
  const response = await apiClient.post<TAuthResponse, AxiosResponse<TAuthResponse>, TSignupPayload>(
    '/auth/signup',
    payload,
  );

  return response.data;
};
