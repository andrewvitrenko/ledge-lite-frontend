import { Api, EMethod, TRequestOptions } from '@/shared/api';

import { TCategory } from '../model/types';
import {
  TCreateCategoryPayload,
  TGetAllCategoriesParams,
  TGetAllCategoriesResponse,
  TUpdateCategoryPayload,
} from './model';

class CategoryApiFactory extends Api {
  constructor() {
    super('categories');
  }

  public getAll(
    params: TGetAllCategoriesParams,
    opts?: TRequestOptions,
  ): Promise<TGetAllCategoriesResponse> {
    return this.request<TGetAllCategoriesResponse>(
      EMethod.GET,
      '/',
      { params },
      {
        auth: true,
        ...opts,
      },
    );
  }

  public getById(id: string, opts?: TRequestOptions): Promise<TCategory> {
    return this.request<TCategory>(EMethod.GET, `/${id}`, undefined, {
      auth: true,
      ...opts,
    });
  }

  public create(data: TCreateCategoryPayload): Promise<TCategory> {
    return this.request<TCategory, TCreateCategoryPayload>(
      EMethod.POST,
      '/',
      { data },
      { auth: true },
    );
  }

  public update(id: string, data: TUpdateCategoryPayload): Promise<TCategory> {
    return this.request<TCategory, TUpdateCategoryPayload>(
      EMethod.PATCH,
      `/${id}`,
      { data },
      { auth: true },
    );
  }

  public delete(id: string): Promise<void> {
    return this.request<void>(EMethod.DELETE, `/${id}`, undefined, {
      auth: true,
    });
  }
}

export const CategoryApi = new CategoryApiFactory();
