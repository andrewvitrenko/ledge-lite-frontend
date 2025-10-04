import { Calendar } from 'lucide-react';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

export type TPlaceholderProps = {
  className?: string;
};

export const Placeholder: FC<TPlaceholderProps> = memo(({ className }) => {
  return (
    <div className={cn('flex items-center space-x-2', className)}>
      <Calendar className="text-muted-foreground h-4 w-4" />
      <div className="bg-muted h-10 w-48 animate-pulse rounded-md" />
    </div>
  );
});

Placeholder.displayName = 'Placeholder';
