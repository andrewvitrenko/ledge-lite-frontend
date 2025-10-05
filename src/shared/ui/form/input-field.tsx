import { FC, HTMLProps, memo } from 'react';
import { useFormContext } from 'react-hook-form';

import { cn } from '@/shared/lib/utils';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { useFieldError } from '../../lib/use-field-error';
import { TFieldProps } from '../../model/form';
import { ErrorMessage } from './error-message';

export type TInputFieldProps = TFieldProps &
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
    const error = useFieldError(name);
    const { register } = useFormContext();

    return (
      <div className={cn('group space-y-2', containerClassName)}>
        <Label htmlFor={name} className={labelClassName}>
          {label}
        </Label>
        <Input
          className={className}
          {...props}
          {...register(name, { shouldUnregister, required })}
          aria-required={required}
          aria-invalid={!!error}
          id={name}
        />
        <ErrorMessage name={name} />
      </div>
    );
  },
);

InputField.displayName = 'InputField';
