import { Api, EMethod, TRequestOptions } from '@/shared/api';

import { TPeriod } from '../model';
import { TGetPeriodOverviewResponse } from './model';

class PeriodApiFactory extends Api {
  constructor() {
    super('periods');
  }

  public getAll(opts?: Omit<TRequestOptions, 'auth'>): Promise<TPeriod[]> {
    return this.request<TPeriod[]>(EMethod.GET, '/', undefined, {
      auth: true,
      ...opts,
    });
  }

  public getActive(opts?: Omit<TRequestOptions, 'auth'>): Promise<TPeriod> {
    return this.request<TPeriod>(EMethod.GET, '/active', undefined, {
      auth: true,
      ...opts,
    });
  }

  public getOverview(
    periodId: string,
    opts?: Omit<TRequestOptions, 'auth'>,
  ): Promise<TGetPeriodOverviewResponse> {
    return this.request<TGetPeriodOverviewResponse>(
      EMethod.GET,
      `/${periodId}/overview`,
      undefined,
      { auth: true, ...opts },
    );
  }
}

export const PeriodApi = new PeriodApiFactory();
