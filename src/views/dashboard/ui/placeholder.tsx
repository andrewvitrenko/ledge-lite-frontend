import { BarChart3, Calendar, CalendarPlus, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

export const Placeholder: FC = () => {
  return (
    <main className="container mx-auto px-4 py-6">
      <div className="mx-auto max-w-2xl space-y-8 text-center">
        {/* Header */}
        <div className="space-y-4">
          <Logo className="mx-auto size-24" />
          <div>
            <h1 className="text-3xl font-bold">Welcome to LedgerLite</h1>
            <p className="text-muted-foreground mt-2 text-lg">
              Get started by creating your first budget period
            </p>
          </div>
        </div>

        {/* Description */}
        <div className="space-y-4">
          <p className="text-muted-foreground">
            Budget periods help you organize your finances by time frames. You
            can track income, expenses, and transfers within each period to get
            a clear picture of your financial health.
          </p>

          <div className="grid grid-cols-1 gap-4 text-sm md:grid-cols-3">
            <div className="bg-muted/50 rounded-lg p-4">
              <Calendar className="text-primary mx-auto mb-2 h-6 w-6" />
              <div className="font-medium">Set Time Frame</div>
              <div className="text-muted-foreground">
                Define start and end dates
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <TrendingUp className="text-primary mx-auto mb-2 h-6 w-6" />
              <div className="font-medium">Track Progress</div>
              <div className="text-muted-foreground">
                Monitor income and expenses
              </div>
            </div>
            <div className="bg-muted/50 rounded-lg p-4">
              <BarChart3 className="text-primary mx-auto mb-2 h-6 w-6" />
              <div className="font-medium">Analyze Results</div>
              <div className="text-muted-foreground">
                Review financial insights
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <Button asChild size="lg" className="px-8 py-6 text-lg">
            <Link href="/periods/new">
              <CalendarPlus className="mr-2 h-5 w-5" />
              Create Your First Period
            </Link>
          </Button>

          <p className="text-muted-foreground text-sm">
            You can always create additional periods later or modify existing
            ones.
          </p>
        </div>

        {/* Help Link */}
        <div className="border-t-border border-t pt-8">
          <p className="text-muted-foreground text-sm">
            Need help getting started?{' '}
            <Link href="/help" className="text-primary hover:underline">
              Check out our guide
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};
