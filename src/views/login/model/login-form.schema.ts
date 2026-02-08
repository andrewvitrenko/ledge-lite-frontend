import { z } from 'zod';

import { PASSWORD_VALIDATION } from '@/shared/config/validation';

export const loginFormSchema = z.object({
  email: z.email('Invalid email address').trim().min(1, 'Email is required'),
  password: PASSWORD_VALIDATION,
});

export type TLoginForm = z.infer<typeof loginFormSchema>;
