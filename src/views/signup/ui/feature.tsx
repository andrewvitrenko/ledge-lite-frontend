import { Check } from 'lucide-react';
import type { FC } from 'react';

type TFeatureProps = {
  text: string;
};

export const Feature: FC<TFeatureProps> = ({ text }) => {
  return (
    <li className="flex items-center space-x-2 text-sm">
      <div className="bg-primary text-primary-foreground flex h-4 w-4 items-center justify-center rounded-full">
        <Check className="h-2.5 w-2.5" />
      </div>
      <span>{text}</span>
    </li>
  );
};
