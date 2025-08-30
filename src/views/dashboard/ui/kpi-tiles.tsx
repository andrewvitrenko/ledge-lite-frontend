import { BarChart3, TrendingDown, TrendingUp, Wallet } from 'lucide-react';
import { FC, memo } from 'react';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/ui/card';

type TKPITilesProps = {
  data: {
    totalIncome: number;
    totalExpenses: number;
    netCash: number;
    netWorthChange: number;
  };
  isLoading?: boolean;
  currency?: string;
};

export const KPITiles: FC<TKPITilesProps> = memo(
  ({ data, isLoading = false, currency = 'USD' }) => {
    const formatCurrency = (amount: number) => {
      return new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: currency,
      }).format(amount);
    };

    const getNetCashColor = (netCash: number) => {
      if (netCash > 0) return 'text-green-600';
      if (netCash < 0) return 'text-red-600';
      return 'text-gray-600';
    };

    const getNetWorthChangeColor = (change: number) => {
      if (change > 0) return 'text-green-600';
      if (change < 0) return 'text-red-600';
      return 'text-gray-600';
    };

    if (isLoading) {
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
            <div className="text-2xl font-bold text-green-600">
              {formatCurrency(data.totalIncome)}
            </div>
            <p className="text-muted-foreground text-xs">
              Money earned this period
            </p>
          </CardContent>
        </Card>

        {/* Total Expenses */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Total Expenses
            </CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">
              {formatCurrency(data.totalExpenses)}
            </div>
            <p className="text-muted-foreground text-xs">
              Money spent this period
            </p>
          </CardContent>
        </Card>

        {/* Net Cash */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Net Cash</CardTitle>
            <Wallet className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div
              className={`text-2xl font-bold ${getNetCashColor(data.netCash)}`}
            >
              {formatCurrency(data.netCash)}
            </div>
            <p className="text-muted-foreground text-xs">
              Income minus expenses
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
              className={`text-2xl font-bold ${getNetWorthChangeColor(data.netWorthChange)}`}
            >
              {data.netWorthChange >= 0 ? '+' : ''}
              {formatCurrency(data.netWorthChange)}
            </div>
            <p className="text-muted-foreground text-xs">
              Change from last period
            </p>
          </CardContent>
        </Card>
      </div>
    );
  },
);

KPITiles.displayName = 'KPITiles';
