import type { FC } from 'react';

import { cn } from '@/shared/lib/utils';
import { Label } from '@/shared/ui/label';

import { ErrorMessage } from '../error-message';
import type { TInputFieldProps } from '../input-field';
import { PasswordInput } from './ui/password-input';

export const PasswordField: FC<Omit<TInputFieldProps, 'type'>> = ({
  name,
  label,
  className,
  containerClassName,
  labelClassName,
  ...props
}) => {
  return (
    <div className={cn('group space-y-2', containerClassName)}>
      <Label htmlFor={name} className={labelClassName}>
        {label}
      </Label>
      <PasswordInput name={name} className={className} {...props} />
      <ErrorMessage name={name} />
    </div>
  );
};
