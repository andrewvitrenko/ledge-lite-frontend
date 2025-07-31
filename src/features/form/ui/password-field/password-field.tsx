import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { ErrorMessage } from '../error-message';
import { TInputFieldProps } from '../input-field';
import { Label } from '../label';
import { PasswordInput } from './ui/password-input';

export const PasswordField: FC<Omit<TInputFieldProps, 'type'>> = memo(
  ({
    name,
    label,
    className,
    containerClassName,
    labelClassName,
    required,
    shouldUnregister,
    ...props
  }) => {
    return (
      <div className={cn('space-y-2', containerClassName)}>
        <Label
          label={label}
          name={name}
          required={required}
          className={labelClassName}
        />
        <PasswordInput
          name={name}
          className={className}
          shouldUnregister={shouldUnregister}
          {...props}
        />
        <ErrorMessage name={name} />
      </div>
    );
  },
);

PasswordField.displayName = 'PasswordField';
