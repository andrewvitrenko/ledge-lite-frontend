import { useMutation, type UseMutationResult } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

import type { TAuthResponse, TSignupPayload } from '../model/api';
import { signUp } from './signup';

type TUseSignup = UseMutationResult<TAuthResponse, Error, TSignupPayload>;

export const useSignup = (): TUseSignup => {
  return useMutation({
    mutationKey: ['auth', 'signup'],
    mutationFn: (payload) => signUp(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: ({ access_token }) => {
      Cookies.set('access_token', access_token);
    },
  });
};
