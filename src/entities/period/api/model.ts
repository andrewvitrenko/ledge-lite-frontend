import { TPaginatedResponse } from '@/shared/api';

export type TGetPeriodOverviewResponse = {
  totalIncome: number;
  totalExpenses: number;
  netWorth: number;
  netWorthChange: number;
};

export type TGetCategoryOverview = {
  categoryId: string;
  categoryName: string;
  totalAmount: number;
  percentageOfTotal: number;
  color: string;
};

export type TGetCategoriesOverviewResponse =
  TPaginatedResponse<TGetCategoryOverview>;
