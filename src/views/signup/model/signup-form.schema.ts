import { z } from 'zod';

import { PASSWORD_VALIDATION } from '@/shared/config/validation';

export const validationSchema = z
  .object({
    email: z.email('Invalid email address').trim().min(1, 'Email is required'),
    firstName: z.string().trim().min(1, 'First name is required'),
    lastName: z.string().trim().min(1, 'Last name is required'),
    password: PASSWORD_VALIDATION,
    confirmPassword: PASSWORD_VALIDATION,
    terms: z.boolean().check((ctx) => {
      if (!ctx.value) {
        ctx.issues.push({
          code: 'invalid_value',
          values: [ctx.value],
          input: ctx.value,
          message: 'You must agree to the terms and conditions',
        });
      }
    }),
  })
  .superRefine((data, ctx) => {
    const { confirmPassword, password } = data;

    if (confirmPassword !== password) {
      ctx.addIssue({
        code: 'invalid_value',
        input: confirmPassword,
        message: 'Passwords do not match',
        values: [confirmPassword, password],
        path: ['confirmPassword'],
      });
    }
  });

export type TSignupForm = z.infer<typeof validationSchema>;
