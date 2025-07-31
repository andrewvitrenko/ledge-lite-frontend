'use client';

import { useRouter } from 'next/navigation';
import { FC, memo, PropsWithChildren, useCallback } from 'react';
import { SubmitHandler, useFormContext, useFormState } from 'react-hook-form';

import { useSignup } from '@/features/auth/lib/use-signup';
import { omit } from '@/shared/lib/omit';

import { TSignupForm } from '../model';

export const Form: FC<PropsWithChildren> = memo(({ children }) => {
  const { mutateAsync } = useSignup();

  const { errors } = useFormState();
  console.log('Form errors:', errors);

  const router = useRouter();

  const { handleSubmit } = useFormContext<TSignupForm>();

  const onSubmit: SubmitHandler<TSignupForm> = useCallback(
    async (values) => {
      await mutateAsync(omit(values, ['confirmPassword', 'terms']));
      router.push('/');
    },
    [mutateAsync, router],
  );

  return (
    <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
      {children}
    </form>
  );
});

Form.displayName = 'Form';
