import * as AvatarPrimitive from '@radix-ui/react-avatar';

import { cn } from '@/shared/lib/utils';
import type { ComponentPropsWithRef, FC } from 'react';

export const Avatar: FC<ComponentPropsWithRef<typeof AvatarPrimitive.Root>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn(
        'relative flex size-8 shrink-0 overflow-hidden rounded-full',
        className,
      )}
      {...props}
    />
  );
}

export const AvatarImage: FC<ComponentPropsWithRef<typeof AvatarPrimitive.Image>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square size-full', className)}
      {...props}
    />
  );
}

export const AvatarFallback: FC<ComponentPropsWithRef<typeof AvatarPrimitive.Fallback>> = ({
  className,
  ...props
}) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn(
        'bg-muted flex size-full items-center justify-center rounded-full',
        className,
      )}
      {...props}
    />
  );
}
