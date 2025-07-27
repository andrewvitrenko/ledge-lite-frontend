import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  isAxiosError,
} from 'axios';

import { EMethod, TError } from './model';

export class Api {
  private http: AxiosInstance;

  constructor(base: string) {
    this.http = axios.create({
      baseURL: `${process.env.NEXT_PUBLIC_API_HOST}/${base}`,
    });
  }

  protected async request<
    TResponse extends object,
    TPayload extends object = object,
  >(
    method: EMethod,
    url: string,
    config: Omit<AxiosRequestConfig<TPayload>, 'url' | 'method'>,
  ): Promise<TResponse> {
    try {
      const { data } = await this.http.request<
        TResponse,
        AxiosResponse<TResponse>,
        TPayload
      >({ url, method, ...config });

      return data;
    } catch (e) {
      if (isAxiosError<TError>(e)) {
        const message =
          e.response?.data.message ?? 'NEtwork error. Please try again later';

        throw new Error(message);
      }

      throw new Error('Something went wrong. Please try again later', {
        cause: e,
      });
    }
  }
}
