'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { FC } from 'react';

import { cn } from '@/shared/lib/utils';

import { navigation } from '../config';

export const DesktopNav: FC = () => {
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
              'hover:text-primary text-muted-foreground flex items-center text-sm font-medium transition-colors',
              { ['text-foreground']: isActive },
            )}
          >
            <item.icon className="mr-2 h-4 w-4" />
            {item.name}
          </Link>
        );
      })}
    </nav>
  );
};
