import { Check } from 'lucide-react';
import { FC, memo } from 'react';

export type TFeatureProps = {
  feature: string;
};

export const Feature: FC<TFeatureProps> = memo(({ feature }) => {
  return (
    <li className="flex items-center space-x-2 text-sm">
      <div className="bg-primary text-primary-foreground flex h-4 w-4 items-center justify-center rounded-full">
        <Check className="h-2.5 w-2.5" />
      </div>
      <span>{feature}</span>
    </li>
  );
});

Feature.displayName = 'Feature';
