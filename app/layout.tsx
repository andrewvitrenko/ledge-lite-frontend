import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from 'next-themes';
import { FC, PropsWithChildren } from 'react';

import { QueryProvider } from '@/features/query-provider';
import { Toaster } from '@/shared/ui/sonner';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LedgerLite - Personal Budget Tracker',
  description: 'A modern personal budget tracker that works offline',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'LedgerLite',
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: 'website',
    siteName: 'LedgerLite',
    title: 'LedgerLite - Personal Budget Tracker',
    description: 'A modern personal budget tracker that works offline',
  },
  twitter: {
    card: 'summary',
    title: 'LedgerLite - Personal Budget Tracker',
    description: 'A modern personal budget tracker that works offline',
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          enableColorScheme
          enableSystem
          defaultTheme="system"
          disableTransitionOnChange
        >
          <QueryProvider>{children}</QueryProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
