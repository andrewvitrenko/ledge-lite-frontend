'use client';

import { FC, HTMLProps, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFieldError } from '@/features/form/lib/use-field-error';
import { TFieldProps } from '@/features/form/model';
import { cn } from '@/shared/lib/utils';

export type TInputBaseProps = HTMLProps<HTMLInputElement> &
  Pick<TFieldProps, 'name' | 'shouldUnregister'>;

export const InputBase: FC<TInputBaseProps> = memo(
  ({ className, type = 'text', name, shouldUnregister, ...props }) => {
    const { register } = useFormContext();
    const error = useFieldError(name);

    return (
      <input
        type={type}
        data-slot="input"
        className={cn(
          'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input flex h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
          'focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
          'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive',
          className,
        )}
        {...props}
        {...register(name, { shouldUnregister })}
        aria-invalid={!!error}
      />
    );
  },
);

InputBase.displayName = 'InputBase';
