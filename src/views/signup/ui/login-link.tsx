import Link from 'next/link';
import { FC, memo } from 'react';

export const LoginLink: FC = memo(() => {
  return (
    <p className="text-muted-foreground w-full text-center text-sm">
      Already have an account?{' '}
      <Link href="/login" className="text-primary font-medium hover:underline">
        Sign in
      </Link>
    </p>
  );
});

LoginLink.displayName = 'LoginLink';
