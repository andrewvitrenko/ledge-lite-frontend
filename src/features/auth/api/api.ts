import { Api, EMethod } from '@/shared/api';

import { TAuthResponse, TLoginPayload, TSignupPayload } from './model';

class AuthApi extends Api {
  constructor() {
    super('auth');
  }

  public login(payload: TLoginPayload): Promise<TAuthResponse> {
    return this.request<TAuthResponse, TLoginPayload>(EMethod.POST, '/login', {
      data: payload,
    });
  }

  public signup(payload: TSignupPayload): Promise<TAuthResponse> {
    return this.request<TAuthResponse, TSignupPayload>(
      EMethod.POST,
      '/signup',
      { data: payload },
    );
  }
}

export const Auth = new AuthApi();
