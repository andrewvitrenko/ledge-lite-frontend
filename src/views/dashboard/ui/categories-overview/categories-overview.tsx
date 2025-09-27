import { PieChart } from 'lucide-react';
import { FC, memo } from 'react';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

import { Content } from './ui/content';

export const CategoriesOverview: FC = memo(() => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <PieChart className="h-5 w-5" />
          Expense Breakdown
        </CardTitle>
        <CardDescription>Spending by category this period</CardDescription>
      </CardHeader>
      <CardContent>
        <Content />
      </CardContent>
    </Card>
  );
});

CategoriesOverview.displayName = 'CategoriesOverview';
