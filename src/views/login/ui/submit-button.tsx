'use client';

import type { FC } from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '@/shared/ui/button';

import type { TLoginForm } from '../model/login-form.schema';

export const SubmitButton: FC = () => {
  const { isSubmitting } = useFormState<TLoginForm>();

  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? 'Signing in...' : 'Sign in'}
    </Button>
  );
};
