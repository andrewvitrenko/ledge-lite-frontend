'use client';

import { FC, HTMLProps, PropsWithChildren } from 'react';
import { useController } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Checkbox } from '@/shared/ui/checkbox';

import { TFieldProps } from '../model';
import { ErrorMessage } from './error-message';

export type TCheckboxFieldProps = Omit<HTMLProps<HTMLButtonElement>, 'type'> &
  Omit<TFieldProps, 'label'>;

export const CheckboxField: FC<PropsWithChildren<TCheckboxFieldProps>> = ({
  name,
  shouldUnregister,
  children,
  className,
  ...props
}) => {
  const {
    field: { value, onChange },
    fieldState: { error },
  } = useController({ name, shouldUnregister });

  return (
    <div className="flex items-start space-y-2 space-x-2">
      <Checkbox
        aria-invalid={!!error}
        className={cn('mt-1', className)}
        checked={value}
        onCheckedChange={onChange}
        {...props}
      />
      <div className="space-y-1">
        {children}
        <ErrorMessage name={name} />
      </div>
    </div>
  );
};
