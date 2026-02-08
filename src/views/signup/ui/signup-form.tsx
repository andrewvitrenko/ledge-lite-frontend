'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import type { FC } from 'react';
import { FormProvider, useForm, type SubmitHandler } from 'react-hook-form';

import { CheckboxField, InputField, PasswordField } from '@/shared/ui/form';

import { SubmitButton } from './submit-button';
import { validationSchema, type TSignupForm } from '../model/signup-form.schema';

type TSignupFormProps = {
  onSubmit: SubmitHandler<TSignupForm>;
};

export const SignupForm: FC<TSignupFormProps> = ({ onSubmit }) => {
  const form = useForm<TSignupForm>({
    defaultValues: { email: '', firstName: '', lastName: '', confirmPassword: '', password: '', terms: false },
    resolver: zodResolver(validationSchema),
  });

  return (
    <FormProvider {...form}>
      <form noValidate onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <InputField label="First name" placeholder="John" name="firstName" required />
          <InputField label="Last name" placeholder="Doe" name="lastName" required />
        </div>

        <InputField label="Email" type="email" placeholder="john@example.com" name="email" required />

        <PasswordField label="Password" placeholder="Create a strong password" name="password" required />

        <PasswordField label="Confirm password" placeholder="Confirm your password" name="confirmPassword" required />

        <CheckboxField id="terms" name="terms">
          <label
            htmlFor="terms"
            className="text-sm leading-none font-normal peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            I agree to the{' '}
            <Link href="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
          </label>
        </CheckboxField>

        <SubmitButton />
      </form>
    </FormProvider>
  );
};
