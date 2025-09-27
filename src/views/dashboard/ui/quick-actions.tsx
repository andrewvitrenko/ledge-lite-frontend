import { ArrowRightLeft, Plus, TrendingDown, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

export const QuickActions: FC = memo(() => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Plus className="h-5 w-5" />
          Quick Actions
        </CardTitle>
        <CardDescription>Common tasks to manage your finances</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <Button asChild className="h-auto flex-col gap-2 p-4">
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
  );
});

QuickActions.displayName = 'QuickActions';
