'use client';

import { format } from 'date-fns';
import {
  AlertTriangle,
  ArrowRightLeft,
  BarChart3,
  Calendar,
  Clock,
  PieChart,
  Plus,
  Star,
  TrendingDown,
  TrendingUp,
} from 'lucide-react';
import Link from 'next/link';
import { FC, useState } from 'react';

import { mockAccounts } from '@/entities/account/config/mock-data';
import { EPeriodStatus, TPeriod } from '@/entities/period/model';
import { mockTransactions } from '@/entities/transaction/config/mock-data';
import { Alert, AlertDescription } from '@/shared/ui/alert';
import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';
import { Header } from '@/widgets/header/';

import { KPITiles } from './ui/kpi-tiles';
import { PeriodSelector } from './ui/period-selector';

const mockChartData = {
  categoryBreakdown: [
    {
      categoryId: '1',
      categoryName: 'Groceries',
      amount: 85.5,
      color: '#EF4444',
      percentage: 54.9,
    },
    {
      categoryId: '2',
      categoryName: 'Transportation',
      amount: 45.0,
      color: '#F59E0B',
      percentage: 28.9,
    },
    {
      categoryId: '4',
      categoryName: 'Entertainment',
      amount: 25.0,
      color: '#8B5CF6',
      percentage: 16.1,
    },
  ],
  accountDistribution: [
    {
      accountId: '1',
      accountName: 'Main Checking',
      balance: 2500.0,
      color: '#3B82F6',
      change: 500.0,
    },
    {
      accountId: '2',
      accountName: 'Savings Account',
      balance: 10000.0,
      color: '#10B981',
      change: 0.0,
    },
    {
      accountId: '3',
      accountName: 'Credit Card',
      balance: -1250.0,
      color: '#EF4444',
      change: -155.5,
    },
  ],
  cashFlow: [
    { date: '2025-01-01', income: 3500, expenses: 0, net: 3500 },
    { date: '2025-01-02', income: 0, expenses: 0, net: 3500 },
    { date: '2025-01-03', income: 0, expenses: 0, net: 3500 },
    { date: '2025-01-04', income: 0, expenses: 0, net: 3500 },
    { date: '2025-01-05', income: 0, expenses: 0, net: 3500 },
    { date: '2025-01-06', income: 0, expenses: 25, net: 3475 },
    { date: '2025-01-07', income: 0, expenses: 45, net: 3430 },
    { date: '2025-01-08', income: 0, expenses: 85.5, net: 3344.5 },
  ],
};

const kpis = {
  totalIncome: 3500,
  totalExpenses: 1200,
  netCash: 2300,
  netWorthChange: 1500,
};

export const DashboardPage: FC = () => {
  const [selectedPeriod, setSelectedPeriod] = useState<TPeriod | null>(null);
  const [isLoading] = useState(false);

  const handlePeriodChange = (period: TPeriod) => {
    setSelectedPeriod(period);
  };

  const isPeriodEndingSoon = (period: TPeriod) => {
    if (period.status !== 'ACTIVE') return false;

    const endDate = new Date(period.endDate);
    const today = new Date();
    const daysUntilEnd = Math.ceil(
      (endDate.getTime() - today.getTime()) / (1000 * 60 * 60 * 24),
    );

    return daysUntilEnd <= 7 && daysUntilEnd >= 0;
  };

  const isPeriodPastDue = (period: TPeriod) => {
    if (period.status !== EPeriodStatus.ACTIVE) return false;

    const endDate = new Date(period.endDate);
    const today = new Date();

    return endDate < today;
  };

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(amount);
  };

  return (
    <div className="bg-background min-h-screen">
      <Header />

      <main className="container mx-auto space-y-6 px-4 py-6">
        {/* Header with Period Selector */}
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">
              Overview of your financial activity
            </p>
          </div>

          <PeriodSelector
            selectedPeriodId={selectedPeriod?.id}
            onPeriodChange={handlePeriodChange}
            className="sm:w-auto"
          />
        </div>

        {/* Period Status Alerts */}
        {selectedPeriod && isPeriodPastDue(selectedPeriod) && (
          <Alert className="border-red-200 bg-red-50">
            <AlertTriangle className="h-4 w-4 text-red-600" />
            <AlertDescription className="text-red-800">
              This period ended on{' '}
              {new Date(selectedPeriod.endDate).toLocaleDateString()}. Consider
              closing it to finalize your financial summary.
              <Button asChild size="sm" className="ml-2">
                <Link href={`/periods/${selectedPeriod.id}`}>Close Period</Link>
              </Button>
            </AlertDescription>
          </Alert>
        )}

        {selectedPeriod &&
          isPeriodEndingSoon(selectedPeriod) &&
          !isPeriodPastDue(selectedPeriod) && (
            <Alert className="border-yellow-200 bg-yellow-50">
              <Calendar className="h-4 w-4 text-yellow-600" />
              <AlertDescription className="text-yellow-800">
                This period ends on{' '}
                {new Date(selectedPeriod.endDate).toLocaleDateString()}. Start
                planning for the next period.
              </AlertDescription>
            </Alert>
          )}

        {/* KPI Tiles */}
        {kpis && <KPITiles data={kpis} isLoading={isLoading} currency="USD" />}

        {/* Quick Actions */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Plus className="h-5 w-5" />
              Quick Actions
            </CardTitle>
            <CardDescription>
              Common tasks to manage your finances
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {/* <Button asChild className="h-auto flex-col gap-2 p-4">
                <Link href="/transactions/new">
                  <Plus className="h-6 w-6" />
                  <span className="text-sm">New Transaction</span>
                </Link>
              </Button> */}

              <Button
                asChild
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
              >
                <Link href="/transfers/new">
                  <ArrowRightLeft className="h-6 w-6" />
                  <span className="text-sm">New Transfer</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
              >
                <Link href="/deposits/new">
                  <TrendingUp className="h-6 w-6" />
                  <span className="text-sm">New Deposit</span>
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-auto flex-col gap-2 p-4"
              >
                <Link href="/withdrawals/new">
                  <TrendingDown className="h-6 w-6" />
                  <span className="text-sm">New Withdrawal</span>
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          {/* Charts Section */}
          <div className="space-y-6">
            {/* Category Breakdown Chart */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="h-5 w-5" />
                  Expense Breakdown
                </CardTitle>
                <CardDescription>
                  Spending by category this period
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoading ? (
                  <div className="bg-muted h-64 animate-pulse rounded" />
                ) : mockChartData.categoryBreakdown.length ? (
                  <div className="space-y-4">
                    {mockChartData.categoryBreakdown.map((item) => (
                      <div
                        key={item.categoryId}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className="h-4 w-4 rounded-full"
                            style={{ backgroundColor: item.color }}
                          />
                          <span className="font-medium">
                            {item.categoryName}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {formatCurrency(item.amount)}
                          </div>
                          <div className="text-muted-foreground text-sm">
                            {item.percentage}%
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-muted-foreground flex h-64 items-center justify-center">
                    No expense data available
                  </div>
                )}
              </CardContent>
            </Card>

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
                          <span className="font-medium">
                            {item.accountName}
                          </span>
                        </div>
                        <div className="text-right">
                          <div className="font-medium">
                            {formatCurrency(item.balance)}
                          </div>
                          <div
                            className={`text-sm ${item.change >= 0 ? 'text-green-600' : 'text-red-600'}`}
                          >
                            {item.change >= 0 ? '+' : ''}
                            {formatCurrency(item.change)}
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
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
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
                            {formatCurrency(transaction.amount)}
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
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="h-5 w-5" />
                  Favorite Presets
                </CardTitle>
                <CardDescription>
                  Quick access to your most used presets
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="py-8 text-center">
                  <Star className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
                  <p className="text-muted-foreground mb-4">
                    No favorite presets yet
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/presets">Manage Presets</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
};
