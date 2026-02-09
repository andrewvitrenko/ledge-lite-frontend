import { z } from 'zod';

export const categoryFormSchema = z.object({
  name: z.string().trim().min(1, 'Name is required'),
  color: z.hex().trim().min(1, 'Color is required'),
});

export type TCategoryForm = z.infer<typeof categoryFormSchema>;
