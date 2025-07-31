import { useRouter } from 'next/navigation';
import { FC, memo, PropsWithChildren, useCallback } from 'react';
import { SubmitHandler, useFormContext } from 'react-hook-form';

import { useLogin } from '@/features/auth/lib/use-login';

import { TLoginForm } from '../model';

export const Form: FC<PropsWithChildren> = memo(({ children }) => {
  const { mutateAsync } = useLogin();

  const router = useRouter();

  const { handleSubmit } = useFormContext<TLoginForm>();

  const onSubmit: SubmitHandler<TLoginForm> = useCallback(
    async (values) => {
      await mutateAsync(values);
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
