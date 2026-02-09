'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import * as React from 'react';
import { useForm } from 'react-hook-form';

import type { TCategory } from '@/entities/category';
import { useMediaQuery } from '@/hooks/use-media-query';
import { type CategoryFormData, categoryFormSchema } from '@/lib/validations/core';
import { Button } from '@/shared/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/shared/ui/dialog';
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from '@/shared/ui/drawer';
import { Input } from '@/shared/ui/input';
import { Label } from '@/shared/ui/label';

import { CategoryColorPicker } from './category-color-picker';

interface CategoryDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  category?: TCategory;
  onSubmit: (data: CategoryFormData) => Promise<void>;
}

export function CategoryDialog({ open, onOpenChange, category, onSubmit }: CategoryDialogProps) {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const isDesktop = useMediaQuery('(min-width: 768px)');

  const form = useForm<CategoryFormData>({
    resolver: zodResolver(categoryFormSchema),
    defaultValues: {
      name: '',
      color: '#6366F1',
    },
  });

  // Reset form when dialog opens/closes or category changes
  React.useEffect(() => {
    if (open) {
      if (category) {
        form.reset({
          name: category.name,
          color: category.color || '#6366F1',
        });
      } else {
        form.reset({
          name: '',
          color: '#6366F1',
        });
      }
    }
  }, [open, category, form]);

  const handleSubmit = async (data: CategoryFormData) => {
    try {
      setIsSubmitting(true);
      await onSubmit(data);
      onOpenChange(false);
      form.reset();
    } catch (error) {
      // Error handling is done in parent component
    } finally {
      setIsSubmitting(false);
    }
  };

  const title = category ? 'Edit Category' : 'Create Category';
  const description = category
    ? 'Update the category name and color.'
    : 'Create a new category to organize your transactions.';

  

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-106.25">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </DialogHeader>
          <CategoryForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{description}</DrawerDescription>
        </DrawerHeader>
        <div className="px-4">
          <CategoryForm />
        </div>
      </DrawerContent>
    </Drawer>
  );
}
