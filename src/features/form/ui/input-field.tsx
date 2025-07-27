import { FC, HTMLProps, memo } from 'react';

import { cn } from '@/shared/lib/utils';

import { TFieldConfig } from '../model';
import { ErrorMessage } from './error-message';
import { InputBase } from './input-base';
import { Label } from './label';

export type TInputFieldProps = TFieldConfig &
  HTMLProps<HTMLInputElement> & {
    className?: string;
    containerClassName?: string;
    labelClassName?: string;
  };

export const InputField: FC<TInputFieldProps> = memo(
  ({
    name,
    required,
    className,
    containerClassName,
    label,
    labelClassName,
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
        <InputBase
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

InputField.displayName = 'InputField';
