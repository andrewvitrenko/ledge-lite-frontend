'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { InputField, PasswordField } from '@/features/form';

import { defaultValues } from './config/default-values';
import { validationSchema } from './config/validation';
import { TLoginForm } from './model';
import { ForgotPassword } from './ui/forgot-password';
import { Form } from './ui/form';
import { SubmitButton } from './ui/submit-button';

export const LoginForm: FC = memo(() => {
  const form = useForm<TLoginForm>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  return (
    <FormProvider {...form}>
      <Form>
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
      </Form>
    </FormProvider>
  );
});

LoginForm.displayName = 'LoginForm';
