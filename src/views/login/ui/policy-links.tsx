import Link from 'next/link';
import { FC, memo } from 'react';

export const PolicyLinks: FC = memo(() => {
  return (
    <footer className="text-muted-foreground text-center text-xs">
      <p>
        By signing in, you agree to our{' '}
        <Link href="/terms" className="hover:underline">
          Terms of Service
        </Link>{' '}
        and{' '}
        <Link href="/privacy" className="hover:underline">
          Privacy Policy
        </Link>
      </p>
    </footer>
  );
});

PolicyLinks.displayName = 'PolicyLinks';
