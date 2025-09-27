import { format } from 'date-fns';
import { BarChart3, Clock } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';

import { mockAccounts } from '@/entities/account/config/mock-data';
import { mockTransactions } from '@/entities/transaction/config/mock-data';
import { PeriodNotice } from '@/features/period-notice';
import { PeriodSelector } from '@/features/period-selector';
import { formatCurrency } from '@/shared/lib/format-currency';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

import { mockChartData } from '../config/mock-data';
import { CategoriesOverview } from './categories-overview';
import { KPITiles } from './kpi-tiles';
import { Presets } from './presets';
import { QuickActions } from './quick-actions';

export const Content: FC = memo(() => {
  const isLoading = false;

  return (
    <main className="container mx-auto space-y-6 px-4 py-6">
      {/* Header with Period Selector */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Overview of your financial activity
          </p>
        </div>

        <PeriodSelector className="sm:w-auto" />
      </div>

      {/* Period Status Alerts */}
      <PeriodNotice />

      {/* KPI Tiles */}
      <KPITiles currency="USD" />

      {/* Quick Actions */}
      <QuickActions />

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Charts Section */}
        <div className="space-y-6">
          {/* Category Breakdown Chart */}
          <CategoriesOverview />

          {/* Account Distribution */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5" />
                Account Balances
              </CardTitle>
              <CardDescription>Current account distribution</CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="bg-muted h-48 animate-pulse rounded" />
              ) : mockChartData?.accountDistribution.length ? (
                <div className="space-y-4">
                  {mockChartData.accountDistribution.map((item) => (
                    <div
                      key={item.accountId}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="h-4 w-4 rounded-full"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="font-medium">{item.accountName}</span>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {formatCurrency(item.balance, 'USD')}
                        </div>
                        <div
                          className={`text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}
                        >
                          {item.change >= 0 ? '+' : ''}
                          {formatCurrency(item.change, 'USD')}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-muted-foreground flex h-48 items-center justify-center">
                  No account data available
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Activity Section */}
        <div className="space-y-6">
          {/* Recent Activity */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Recent Activity
              </CardTitle>
              <CardDescription>
                Latest transactions and transfers
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="space-y-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="bg-muted h-8 w-8 animate-pulse rounded" />
                        <div className="space-y-1">
                          <div className="bg-muted h-4 w-24 animate-pulse rounded" />
                          <div className="bg-muted h-3 w-16 animate-pulse rounded" />
                        </div>
                      </div>
                      <div className="bg-muted h-4 w-16 animate-pulse rounded" />
                    </div>
                  ))}
                </div>
              ) : mockTransactions.length ? (
                <div className="space-y-4">
                  {mockTransactions.map((transaction) => (
                    <div
                      key={transaction.id}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white"
                          style={{
                            backgroundColor:
                              transaction.category?.color || '#6B7280',
                          }}
                        >
                          {transaction.category?.name.charAt(0) || 'T'}
                        </div>
                        <div>
                          <div className="font-medium">
                            {transaction.category?.name || 'Transaction'}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {format(transaction.date, 'MMM d, hh:mm a')} •{' '}
                            {mockAccounts[0].name}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="font-medium">
                          {formatCurrency(transaction.amount, 'USD')}
                        </div>
                        <div className="text-muted-foreground text-sm">
                          {transaction.paymentType}
                        </div>
                      </div>
                    </div>
                  ))}

                  <Button asChild variant="outline" className="w-full">
                    <Link href="/transactions">View All Transactions</Link>
                  </Button>
                </div>
              ) : (
                <div className="py-8 text-center">
                  <Clock className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                  <p className="text-muted-foreground mb-4">
                    No recent activity
                  </p>
                  <Button asChild>
                    <Link href="/transactions/new">
                      Add Your First Transaction
                    </Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Favorite Presets */}
          <Presets />
        </div>
      </div>
    </main>
  );
});

Content.displayName = 'Content';
