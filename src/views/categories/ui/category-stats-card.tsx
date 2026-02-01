'use client';

import { ArrowRightLeft, Hash, TrendingDown, TrendingUp } from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CurrencyDisplay } from '@/components/ui/currency-display';
import { cn } from '@/lib/utils';

interface CategoryStats {
  categoryId: string;
  category: {
    id: string;
    name: string;
    color?: string;
    userId: string;
    createdAt: Date;
    updatedAt: Date;
  };
  totalIncome: number;
  totalExpenses: number;
  totalTransfers: number;
  transactionCount: number;
}

interface CategoryStatsCardProps {
  stats: CategoryStats;
}

export function CategoryStatsCard({ stats }: CategoryStatsCardProps) {
  const {
    category,
    totalIncome,
    totalExpenses,
    totalTransfers,
    transactionCount,
  } = stats;
  const netAmount = totalIncome - totalExpenses;

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-base">
          <div
            className="h-3 w-3 rounded-full"
            style={{ backgroundColor: category.color || '#6B7280' }}
          />
          {category.name}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Income */}
        {totalIncome > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <TrendingUp className="h-4 w-4 text-green-500" />
              Income
            </div>
            <CurrencyDisplay
              amount={totalIncome}
              className="font-medium text-green-600"
            />
          </div>
        )}

        {/* Expenses */}
        {totalExpenses > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <TrendingDown className="h-4 w-4 text-red-500" />
              Expenses
            </div>
            <CurrencyDisplay
              amount={totalExpenses}
              className="font-medium text-red-600"
            />
          </div>
        )}

        {/* Transfers */}
        {totalTransfers > 0 && (
          <div className="flex items-center justify-between">
            <div className="text-muted-foreground flex items-center gap-2 text-sm">
              <ArrowRightLeft className="h-4 w-4 text-blue-500" />
              Transfers
            </div>
            <CurrencyDisplay
              amount={totalTransfers}
              className="font-medium text-blue-600"
            />
          </div>
        )}

        {/* Net Amount */}
        {(totalIncome > 0 || totalExpenses > 0) && (
          <div className="flex items-center justify-between border-t pt-2">
            <div className="text-sm font-medium">Net Amount</div>
            <CurrencyDisplay
              amount={netAmount}
              className={cn(
                'font-semibold',
                netAmount > 0
                  ? 'text-green-600'
                  : netAmount < 0
                    ? 'text-red-600'
                    : 'text-muted-foreground',
              )}
            />
          </div>
        )}

        {/* Transaction Count */}
        <div className="flex items-center justify-between">
          <div className="text-muted-foreground flex items-center gap-2 text-sm">
            <Hash className="h-4 w-4" />
            Transactions
          </div>
          <Badge variant="secondary">{transactionCount}</Badge>
        </div>
      </CardContent>
    </Card>
  );
}
