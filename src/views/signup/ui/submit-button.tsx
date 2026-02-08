'use client';

import { type FC } from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '@/shared/ui/button';

import type { TSignupForm } from '../model/signup-form.schema';

export const SubmitButton: FC = () => {
  const { isSubmitting } = useFormState<TSignupForm>();

  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? 'Creating account...' : 'Create account'}
    </Button>
  );
};
