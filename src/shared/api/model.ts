import { ValueOf } from '../model/utils';

export const EMethod = {
  GET: 'GET',
  POST: 'POST',
  DELETE: 'DELETE',
  PUT: 'PUT',
} as const;

export type EMethod = ValueOf<typeof EMethod>;

export type TError = {
  message: string;
  error?: string;
  statusCode: number;
};

export type TRequestOptions = {
  auth?: boolean;
  signal?: AbortSignal;
};

export type TPaginationOptions = {
  page: number;
  take: number;
};

export type TPaginatedResponse<T> = {
  data: T[];
  total: number;
};
