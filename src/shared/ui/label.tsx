'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { FC, HTMLProps } from 'react';

import { cn } from '@/shared/lib/utils';

export type TLabelProps = HTMLProps<HTMLLabelElement>;

export const Label: FC<TLabelProps> = ({ className, ...props }) => {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn(
        [
          'flex items-center gap-2 text-sm leading-none font-medium select-none',
          'group-has-[*:disabled]:pointer-events-none group-has-[*:disabled]:cursor-not-allowed group-has-[*:disabled]:opacity-50',
          'group-has-[*[aria-required=true]]:after:text-destructive group-has-[*[aria-required=true]]:after:content-["*"]',
        ],
        className,
      )}
      {...props}
    />
  );
};
