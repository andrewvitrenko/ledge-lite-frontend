'use client';

import { Calendar, CreditCard, Home, Menu, Plus } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, memo, useState } from 'react';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/shared/ui/sheet';

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

export const MobileNav: FC = memo(() => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle navigation menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <div className="flex flex-col space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">LedgerLite</h2>
            <div className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      'hover:bg-accent hover:text-accent-foreground flex items-center rounded-lg px-3 py-2 text-sm font-medium',
                      isActive
                        ? 'bg-accent text-accent-foreground'
                        : 'transparent',
                    )}
                  >
                    <item.icon className="mr-2 h-4 w-4" />
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="border-t px-3 py-2">
            <h3 className="text-muted-foreground mb-2 px-4 text-sm font-semibold">
              Quick Actions
            </h3>
            <div className="space-y-1">
              <Link
                href="/transactions/new"
                onClick={() => setOpen(false)}
                className="hover:bg-accent hover:text-accent-foreground flex items-center rounded-lg px-3 py-2 text-sm font-medium"
              >
                <Plus className="mr-2 h-4 w-4" />
                Add Transaction
              </Link>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
});

MobileNav.displayName = 'MobileNav';
