import { PieChart } from 'lucide-react';
import type { FC } from 'react';

import { cn } from '../lib/utils';

type TLogoProps = {
  className?: string;
};

export const Logo: FC<TLogoProps> = ({ className }) => {
  return (
    <div
      className={cn(
        'bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-2xl shadow-lg',
        className,
      )}
    >
      <PieChart className="size-1/2" />
    </div>
  );
};
