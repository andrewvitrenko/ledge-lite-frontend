'use client';

import { FC, memo } from 'react';

import { useFieldError } from '../lib/use-field-error';

type TErrorMessageProps = {
  name: string;
};

export const ErrorMessage: FC<TErrorMessageProps> = memo(({ name }) => {
  const error = useFieldError(name);

  if (!error) return null;

  return (
    <p
      id={`${name}-error`}
      className="text-destructive animate-fade-in text-sm"
    >
      {error}
    </p>
  );
});

ErrorMessage.displayName = 'ErrorMessage';
