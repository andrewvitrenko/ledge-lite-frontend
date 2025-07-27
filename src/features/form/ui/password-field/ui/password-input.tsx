'use client';

import { Eye, EyeOff } from 'lucide-react';
import { FC, memo, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';

import { InputBase, TInputBaseProps } from '../../input-base';

export const PasswordInput: FC<Omit<TInputBaseProps, 'type'>> = memo(
  ({ className, ...props }) => {
    const [showPassword, setShowPassword] = useState(false);

    const onToggle = () => setShowPassword((prev) => !prev);

    return (
      <div className="relative">
        <InputBase
          type={showPassword ? 'text' : 'password'}
          className={cn('h-11', className)}
          {...props}
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
          <span className="sr-only">
            {showPassword ? 'Hide password' : 'Show password'}
          </span>
        </Button>
      </div>
    );
  },
);

PasswordInput.displayName = 'PasswordInput';
