'use client';

import { useCallback, useEffect, useState } from 'react';
import {
  FieldError,
  FieldValues,
  FormState,
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
    subscribe({ name, formState: { errors: true }, callback: onError });
  }, [name, onError, subscribe]);

  return error;
};
