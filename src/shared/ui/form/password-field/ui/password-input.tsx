'use client';

import { Eye, EyeOff } from 'lucide-react';
import { type ComponentPropsWithRef, type FC, useState } from 'react';
import { useFormContext } from 'react-hook-form';

import { useFieldError } from '@/shared/lib/use-field-error';
import { cn } from '@/shared/lib/utils';
import type { TFieldProps } from '@/shared/model/form';
import { Button } from '@/shared/ui/button';
import { Input } from '@/shared/ui/input';

export type TPasswordInputProps = Omit<ComponentPropsWithRef<'input'>, 'type'> &
  Pick<TFieldProps, 'required' | 'shouldUnregister' | 'name'>;

export const PasswordInput: FC<TPasswordInputProps> = ({ className, name, required, shouldUnregister, ...props }) => {
  const { register } = useFormContext();
  const error = useFieldError(name);

  const [showPassword, setShowPassword] = useState(false);

  const onToggle = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <Input
        type={showPassword ? 'text' : 'password'}
        className={cn('h-11', className)}
        {...props}
        {...register(name, { shouldUnregister, required })}
        aria-required={required}
        aria-invalid={!!error}
        id={name}
      />
      <Button
        type="button"
        variant="ghost"
        size="sm"
        className="absolute top-0 right-0 h-full px-3 py-2 hover:bg-transparent"
        onClick={onToggle}
        tabIndex={-1}
      >
        {showPassword ? (
          <EyeOff className="text-muted-foreground h-4 w-4" />
        ) : (
          <Eye className="text-muted-foreground h-4 w-4" />
        )}
        <span className="sr-only">{showPassword ? 'Hide password' : 'Show password'}</span>
      </Button>
    </div>
  );
};
