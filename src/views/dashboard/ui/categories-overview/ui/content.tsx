import { FC, memo } from 'react';

import { formatCurrency } from '@/shared/lib/format-currency';
import { useGetCategoriesOverview } from '@/views/dashboard/api/use-get-categories-overview';

export const Content: FC = memo(() => {
  const { data, isFetching } = useGetCategoriesOverview();

  if (isFetching || !data) {
    return <div className="bg-muted h-64 animate-pulse rounded" />;
  }

  if (!data.data.length) {
    return (
      <div className="text-muted-foreground flex h-64 items-center justify-center">
        No expense data available
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {data.data.map(
        ({
          categoryId,
          categoryName,
          color,
          percentageOfTotal,
          totalAmount,
        }) => (
          <div key={categoryId} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div
                className="h-4 w-4 rounded-full"
                style={{ backgroundColor: color }}
              />
              <span className="font-medium">{categoryName}</span>
            </div>
            <div className="text-right">
              <div className="font-medium">
                {formatCurrency(totalAmount, 'USD')}
              </div>
              <div className="text-muted-foreground text-sm">
                {percentageOfTotal}%
              </div>
            </div>
          </div>
        ),
      )}
    </div>
  );
});

Content.displayName = 'Content';
