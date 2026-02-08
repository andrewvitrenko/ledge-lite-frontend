import Link from 'next/link';
import type { FC } from 'react';

export const SignUpLink: FC = () => {
  return (
    <p className="text-muted-foreground w-full text-center text-sm">
      Don&apos;t have an account?{' '}
      <Link href="/signup" className="text-primary font-medium hover:underline">
        Sign up
      </Link>
    </p>
  );
};
