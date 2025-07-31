import { useMutation } from '@tanstack/react-query';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

import { Auth, TAuthResponse, TSignupPayload } from '../api';

export const useSignup = () => {
  return useMutation<TAuthResponse, Error, TSignupPayload>({
    mutationKey: ['auth', 'signup'],
    mutationFn: (payload) => Auth.signup(payload),
    onError: (error) => toast.error(error.message),
    onSuccess: ({ access_token }) => {
      Cookies.set('access_token', access_token);
    },
  });
};
