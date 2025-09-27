import { cva } from 'class-variance-authority';
import { BarChart3, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { FC, memo } from 'react';

import { formatCurrency } from '@/shared/lib/format-currency';
import { cn } from '@/shared/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

import { useGetPeriodOverview } from '../api/use-get-period-overview';

const moneyStateVariants = cva('text-2xl font-bold', {
  variants: {
    state: {
      positive: 'text-green-600',
      negative: 'text-red-600',
      neutral: 'text-gray-600',
    },
  },
  defaultVariants: { state: 'neutral' },
});

const getMoneyState = (amount: number) => {
  if (amount > 0) return 'positive';
  if (amount < 0) return 'negative';
  return 'neutral';
};

export type TKPITilesProps = {
  currency?: string;
};

export const KPITiles: FC<TKPITilesProps> = memo(({ currency = 'USD' }) => {
  const { isFetching, data } = useGetPeriodOverview();

  if (isFetching || !data) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <Card key={i}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div className="bg-muted h-4 w-24 animate-pulse rounded" />
              <div className="bg-muted h-4 w-4 animate-pulse rounded" />
            </CardHeader>
            <CardContent>
              <div className="bg-muted mb-2 h-8 w-32 animate-pulse rounded" />
              <div className="bg-muted h-3 w-20 animate-pulse rounded" />
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
      {/* Total Income */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Income</CardTitle>
          <TrendingUp className="h-4 w-4 text-green-600" />
        </CardHeader>
        <CardContent>
          <div className={moneyStateVariants({ state: 'positive' })}>
            {formatCurrency(data.totalIncome, currency)}
          </div>
          <p className="text-muted-foreground text-xs">
            Money earned this period
          </p>
        </CardContent>
      </Card>

      {/* Total Expenses */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
          <TrendingDown className="h-4 w-4 text-red-600" />
        </CardHeader>
        <CardContent>
          <div className={moneyStateVariants({ state: 'negative' })}>
            {formatCurrency(data.totalExpenses, currency)}
          </div>
          <p className="text-muted-foreground text-xs">
            Money spent this period
          </p>
        </CardContent>
      </Card>

      {/* Net Cash */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Net Worth</CardTitle>
          <Wallet className="h-4 w-4 text-blue-600" />
        </CardHeader>
        <CardContent>
          <div
            className={moneyStateVariants({
              state: getMoneyState(data.netWorth),
            })}
          >
            {formatCurrency(data.netWorth, currency)}
          </div>
          <p className="text-muted-foreground text-xs">
            Value of all of your assets
          </p>
        </CardContent>
      </Card>

      {/* Net Worth Change */}
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">
            Net Worth Change
          </CardTitle>
          <BarChart3 className="h-4 w-4 text-purple-600" />
        </CardHeader>
        <CardContent>
          <div
            className={cn(
              moneyStateVariants({
                state: getMoneyState(data.netWorthChange),
              }),
              { ['before:content-[+]']: data.netWorthChange >= 0 },
            )}
          >
            {formatCurrency(data.netWorthChange, currency)}
          </div>
          <p className="text-muted-foreground text-xs">
            Change from last period
          </p>
        </CardContent>
      </Card>
    </div>
  );
});

KPITiles.displayName = 'KPITiles';
