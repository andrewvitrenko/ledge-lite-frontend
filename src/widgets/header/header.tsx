import { Bell, Plus } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';

import { Badge } from '@/shared/ui/badge';
import { Button } from '@/shared/ui/button';
import { Logo } from '@/shared/ui/logo';

import { DesktopNav } from './ui/desktop-nav';
import { MobileNav } from './ui/mobile-nav';
import { ThemeToggle } from './ui/theme-toggle';
import { UserMenu } from './ui/user-menu';

export const Header: FC = memo(() => {
  return (
    <header className="bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b-border sticky top-0 z-50 w-full border-b backdrop-blur">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-8">
        <MobileNav />
        <div className="mr-4 hidden md:flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Logo className="size-8 rounded-lg" />
            <span className="inline-block font-bold max-sm:sr-only">
              LedgerLite
            </span>
          </Link>
          <DesktopNav />
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
            <Link href="/transactions/new" className="md:hidden">
              <Button size="sm" className="h-8 w-8" variant="default">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Add Transaction</span>
              </Button>
            </Link>
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="/transactions/new" className="hidden md:block">
              <Button size="sm">
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Button>
            </Link>

            <Link href="/notifications" className="relative">
              <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                <Bell className="h-4 w-4" />
                <Badge
                  variant="destructive"
                  className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center p-0 text-xs"
                >
                  3
                </Badge>
              </Button>
            </Link>

            <ThemeToggle />
            <UserMenu />
          </nav>
        </div>
      </div>
    </header>
  );
});

Header.displayName = 'Header';
