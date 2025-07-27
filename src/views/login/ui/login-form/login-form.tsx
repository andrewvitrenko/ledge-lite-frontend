'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, memo, useCallback } from 'react';
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form';

import { InputField, PasswordField } from '@/features/form';

import { defaultValues } from './config/default-values';
import { validationSchema } from './config/validation';
import { TLoginForm } from './model';
import { ForgotPassword } from './ui/forgot-password';
import { SubmitButton } from './ui/submit-button';

export const LoginForm: FC = memo(() => {
  const form = useForm<TLoginForm>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<TLoginForm> = useCallback((values) => {
    console.log(values);
  }, []);

  return (
    <FormProvider {...form}>
      <form
        noValidate
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <InputField
          name="email"
          label="Email"
          type="email"
          placeholder="john@example.com"
          required
        />
        <PasswordField
          label="Password"
          placeholder="Enter your password"
          name="password"
          required
        />

        <ForgotPassword />

        <SubmitButton />
      </form>
    </FormProvider>
  );
});

LoginForm.displayName = 'LoginForm';
