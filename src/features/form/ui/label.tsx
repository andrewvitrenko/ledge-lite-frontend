'use client';

import * as LabelPrimitive from '@radix-ui/react-label';
import { cva } from 'class-variance-authority';
import { FC, HTMLProps, memo } from 'react';

import { useFieldError } from '@/features/form/lib/use-field-error';
import { TFieldConfig } from '@/features/form/model';
import { cn } from '@/shared/lib/utils';

const labelVariants = cva(
  'flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50',
  {
    variants: {
      required: {
        true: 'after:content-["*"] after:text-destructive',
      },
      error: {
        true: 'text-destructive',
      },
    },
    defaultVariants: { error: false, required: false },
  },
);

export type TLabelProps = HTMLProps<HTMLLabelElement> &
  Pick<TFieldConfig, 'name' | 'required' | 'label'>;

export const Label: FC<TLabelProps> = memo(
  ({ className, name, required, label, ...props }) => {
    const error = useFieldError(name);

    return (
      <LabelPrimitive.Root
        data-slot="label"
        className={cn(labelVariants({ className, required, error: !!error }))}
        {...props}
      >
        {label}
      </LabelPrimitive.Root>
    );
  },
);

Label.displayName = 'Label';
