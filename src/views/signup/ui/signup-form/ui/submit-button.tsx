'use client';

import { FC, memo } from 'react';
import { useFormState } from 'react-hook-form';

import { Button } from '@/shared/ui/button';

export const SubmitButton: FC = memo(() => {
  const { isSubmitting } = useFormState();

  return (
    <Button type="submit" className="w-full" disabled={isSubmitting}>
      {isSubmitting ? 'Creating account...' : 'Create account'}
    </Button>
  );
});

SubmitButton.displayName = 'SubmitButton';
