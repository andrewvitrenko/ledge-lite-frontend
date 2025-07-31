import { z } from 'zod';

import { PASSWORD_VALIDATION } from '@/shared/config/validation';

export const validationSchema = z.object({
  email: z.email('Invalid email address').min(1, 'Email is required'),
  password: PASSWORD_VALIDATION,
});
