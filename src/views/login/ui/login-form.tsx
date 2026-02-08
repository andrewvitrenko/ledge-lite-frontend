'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { type FC, memo } from 'react';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';

import { InputField, PasswordField } from '@/shared/ui/form';

import { SubmitButton } from './submit-button';
import Link from 'next/link';
import { loginFormSchema, type TLoginForm } from '../model/login-form.schema';

type TLoginFormProps = {
  onSubmit: SubmitHandler<TLoginForm>;
}

export const LoginForm: FC<TLoginFormProps> = ({ onSubmit }) => {
  const form = useForm<TLoginForm>({
    defaultValues: { email: '', password: '' },
    resolver: zodResolver(loginFormSchema),
  });

  const { handleSubmit } = form;

  return (
    <FormProvider {...form}>
      <form noValidate className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
        <InputField name="email" label="Email" type="email" placeholder="john@example.com" required />
        <PasswordField label="Password" placeholder="Enter your password" name="password" required />

        <div className="text-right">
          <Link href="/forgot-password" className="text-primary text-sm hover:underline">
            Forgot password?
          </Link>
        </div>

        <SubmitButton />
      </form>
    </FormProvider>
  );
};
