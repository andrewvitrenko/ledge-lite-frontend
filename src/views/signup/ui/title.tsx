import { FC, memo } from 'react';

export const Title: FC = memo(() => {
  return <h1 className="text-3xl font-bold tracking-tight">Create account</h1>;
});

Title.displayName = 'Title';
