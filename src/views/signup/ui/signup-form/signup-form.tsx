'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { FC, memo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';

import { CheckboxField, InputField, PasswordField } from '@/features/form';

import { defaultValues } from './config/default-values';
import { validationSchema } from './config/validation-schema';
import { TSignupForm } from './model';
import { Form } from './ui/form';
import { SubmitButton } from './ui/submit-button';

export const SignupForm: FC = memo(() => {
  const form = useForm<TSignupForm>({
    defaultValues,
    resolver: zodResolver(validationSchema),
  });

  return (
    <FormProvider {...form}>
      <Form>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="First name"
            placeholder="John"
            name="firstName"
            required
          />
          <InputField
            label="Last name"
            placeholder="Doe"
            name="lastName"
            required
          />
        </div>

        <InputField
          label="Email"
          type="email"
          placeholder="john@example.com"
          name="email"
          required
        />

        <PasswordField
          label="Password"
          placeholder="Create a strong password"
          name="password"
          required
        />

        <PasswordField
          label="Confirm password"
          placeholder="Confirm your password"
          name="confirmPassword"
          required
        />

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
      </Form>
    </FormProvider>
  );
});

SignupForm.displayName = 'SignupForm';
