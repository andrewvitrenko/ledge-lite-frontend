import {
  infiniteQueryOptions,
  queryOptions,
  type UndefinedInitialDataInfiniteOptions,
  type UndefinedInitialDataOptions,
} from '@tanstack/react-query';

import type { TPaginatedResponse } from '@/shared/model/api';

import type { TCategory, TCategoryId } from '../model/types';
import { getCategories } from './get-categories';
import { getCategory } from './get-category';

export const categoryQueries = {
  all: () => ['categories'] as const,
  lists: () => [...categoryQueries.all(), 'list'] as const,
  list: (
    search: string = '',
    limit: number = 10,
  ): UndefinedInitialDataInfiniteOptions<
    TPaginatedResponse<TCategory>,
    Error,
    TCategory[],
    readonly ['categories', 'list', string],
    number
  > => {
    return infiniteQueryOptions({
      queryKey: [...categoryQueries.lists(), search] as const,
      queryFn: ({ pageParam, signal }) => getCategories({ search, page: pageParam, limit }, signal),
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        const loadedItems = allPages.flat().length;
        if (loadedItems < lastPage.total) {
          return allPages.length + 1;
        }
        return undefined;
      },
      select: ({ pages }) => pages.flatMap(({ data }) => data),
    });
  },

  getOne: (
    id: TCategoryId,
  ): UndefinedInitialDataOptions<TCategory, Error, TCategory, readonly ['categories', TCategoryId]> => {
    return queryOptions({
      queryKey: [...categoryQueries.all(), id] as const,
      queryFn: ({ signal }) => getCategory(id, signal),
    });
  },
};
