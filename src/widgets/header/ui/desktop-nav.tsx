'use client';

import { Calendar, CreditCard, Home } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, memo } from 'react';

import { cn } from '@/shared/lib/utils';

const navigation = [
  {
    name: 'Dashboard',
    href: '/dashboard',
    icon: Home,
  },
  {
    name: 'Transactions',
    href: '/transactions',
    icon: CreditCard,
  },
  {
    name: 'Periods',
    href: '/periods',
    icon: Calendar,
  },
];

export const DesktopNav: FC = memo(() => {
  const pathname = usePathname();

  return (
    <nav className="hidden items-center space-x-6 md:flex">
      {navigation.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'hover:text-primary flex items-center text-sm font-medium transition-colors',
              isActive ? 'text-foreground' : 'text-muted-foreground',
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
});

DesktopNav.displayName = 'DesktopNav';
