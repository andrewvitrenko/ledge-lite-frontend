'use client';

import { Plus } from 'lucide-react';
import Link from 'next/link';
import type { FC } from 'react';

import { useIsMobile } from '@/shared/lib/use-is-mobile';
import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

import { DesktopNav } from './desktop-nav';
import { MobileNav } from './mobile-nav';
import { ThemeToggle } from './theme-toggle';
import { UserMenu } from './user-menu';

export const Header: FC = () => {
  const isMobile = useIsMobile();

  return (
    <header className="bg-background/95 supports-backdrop-filter:bg-background/60 border-b-border sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <MobileNav />
        <div className="flex md:mr-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="size-8 rounded-lg" />
            <span className="inline-block font-bold max-sm:sr-only">LedgerLite</span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-end space-x-2">
          <nav className="flex items-center space-x-2">
            <Link href="/transactions/new">
              <Button size={isMobile ? 'icon' : 'sm'}>
                <Plus className="h-4 w-4" />
                <span className="max-md:sr-only md:ml-2">Add Transaction</span>
              </Button>
            </Link>

            <ThemeToggle />
            <UserMenu />
          </nav>
        </div>
      </div>
    </header>
  );
};
