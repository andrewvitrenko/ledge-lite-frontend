'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Loader2 } from 'lucide-react';
import type { FC } from 'react';
import { type SubmitHandler, useForm } from 'react-hook-form';

import { useIsMobile } from '@/shared/lib/use-is-mobile';
import { Button } from '@/shared/ui/button';
import { DialogClose, DialogFooter } from '@/shared/ui/dialog';
import { DrawerClose, DrawerFooter } from '@/shared/ui/drawer';
import { InputField } from '@/shared/ui/form';

import { categoryFormSchema, type TCategoryForm } from '../model/category-form.schema';

type TCategoryFormProps = {
  onSubmit: SubmitHandler<TCategoryForm>;
  defaultValues?: TCategoryForm;
};

export const CategoryForm: FC<TCategoryFormProps> = ({ onSubmit, defaultValues }) => {
  const form = useForm({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: defaultValues || {
      name: '',
      color: '#6366F1',
    },
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = form;

  const isMobile = useIsMobile();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <InputField name="name" label="Name" required disabled={isSubmitting} />
      </div>

      <div className="space-y-2">
        <Label>Color</Label>
        <CategoryColorPicker
          value={form.watch('color')}
          onChange={(color) => form.setValue('color', color)}
          disabled={isSubmitting}
        />
        {form.formState.errors.color && (
          <p className="text-destructive text-sm">{form.formState.errors.color.message}</p>
        )}
      </div>

      {isMobile ? (
        <DrawerFooter>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 role="status" className="animate-spin" />}
            {isSubmitting ? 'Saving...' : defaultValues ? 'Update' : 'Create'}
          </Button>
          <DrawerClose asChild>
            <Button variant="outline" type="button" disabled={isSubmitting}>
              Cancel
            </Button>
          </DrawerClose>
        </DrawerFooter>
      ) : (
        <DialogFooter>
          <DialogClose asChild>
            <Button type="button" variant="outline" disabled={isSubmitting}>
              Cancel
            </Button>
          </DialogClose>
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting && <Loader2 role="status" className="animate-spin" />}
            {isSubmitting ? 'Saving...' : defaultValues ? 'Update' : 'Create'}
          </Button>
        </DialogFooter>
      )}
    </form>
  );
};
