import Link from 'next/link';
import { FC, memo } from 'react';

export const ForgotPassword: FC = memo(() => {
  return (
    <div className="text-right">
      <Link
        href="/forgot-password"
        className="text-primary text-sm hover:underline"
      >
        Forgot password?
      </Link>
    </div>
  );
});

ForgotPassword.displayName = 'ForgotPassword';
