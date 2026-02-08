'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  type FieldError,
  type FieldValues,
  type FormState,
  useFormContext,
} from 'react-hook-form';

export const useFieldError = (name: string): string | null => {
  const [error, setError] = useState<string | null>(null);

  const { subscribe } = useFormContext();

  const onError = useCallback(
    ({ errors }: Partial<FormState<FieldValues>>) => {
      const error = errors?.[name] as FieldError | undefined;

      setError(error?.message ?? null);
    },
    [name],
  );

  useEffect(() => {
    const unsubscribe = subscribe({ name, formState: { errors: true }, callback: onError });

    return unsubscribe;
  }, [name, onError, subscribe]);

  return error;
};
