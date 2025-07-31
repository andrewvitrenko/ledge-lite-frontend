export type TAuthResponse = {
  access_token: string;
};

export type TLoginPayload = {
  email: string;
  password: string;
};

export type TSignupPayload = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
};
