import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

import type { TAuthResponse, TLoginPayload } from '../model/api';
import { login } from './login';

export type TUseLogin = UseMutationResult<TAuthResponse, Error, TLoginPayload>;

export const useLogin = (): TUseLogin => {
  return useMutation({
    mutationKey: ['auth', 'login'],
    mutationFn: (payload) => login(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: ({ access_token }) => {
      Cookies.set('access_token', access_token);
    },
  });
};
