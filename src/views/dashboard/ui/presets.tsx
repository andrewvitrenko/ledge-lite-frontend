import { Star } from 'lucide-react';
import Link from 'next/link';
import { FC, memo } from 'react';

import { Button } from '@/shared/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/ui/card';

export const Presets: FC = memo(() => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Star className="h-5 w-5" />
          Favorite Presets
        </CardTitle>
        <CardDescription>
          Quick access to your most used presets
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="py-8 text-center">
          <Star className="text-muted-foreground mx-auto mb-4 h-12 w-12" />
          <p className="text-muted-foreground mb-4">No favorite presets yet</p>
          <Button asChild variant="outline">
            <Link href="/presets">Manage Presets</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
});

Presets.displayName = 'Presets';
