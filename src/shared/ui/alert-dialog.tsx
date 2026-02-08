import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { cn } from '@/shared/lib/utils';
import { Button } from '@/shared/ui/button';
import type { ComponentPropsWithRef, FC } from 'react';

export const AlertDialog: FC<AlertDialogPrimitive.AlertDialogProps> = (props) => {
  return <AlertDialogPrimitive.Root data-slot="alert-dialog" {...props} />;
}

export const AlertDialogTrigger: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Trigger>> = (props) => {
  return (
    <AlertDialogPrimitive.Trigger data-slot="alert-dialog-trigger" {...props} />
  );
}

export const AlertDialogPortal: FC<AlertDialogPrimitive.AlertDialogPortalProps> = (props) => {
  return (
    <AlertDialogPrimitive.Portal data-slot="alert-dialog-portal" {...props} />
  );
}

export const AlertDialogOverlay: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Overlay>> = ({
  className,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Overlay
      data-slot="alert-dialog-overlay"
      className={cn(
        'data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 fixed inset-0 z-50 bg-black/50',
        className,
      )}
      {...props}
    />
  );
}

export const AlertDialogContent: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Content> & {
  size?: 'default' | 'sm';
}> = ({
  className,
  size = 'default',
  ...props
}) => {
  return (
    <AlertDialogPortal>
      <AlertDialogOverlay />
      <AlertDialogPrimitive.Content
        data-slot="alert-dialog-content"
        data-size={size}
        className={cn(
          'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 group/alert-dialog-content fixed top-[50%] left-[50%] z-50 grid w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 data-[size=sm]:max-w-xs data-[size=default]:sm:max-w-lg',
          className,
        )}
        {...props}
      />
    </AlertDialogPortal>
  );
}

export const AlertDialogHeader: FC<ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-slot="alert-dialog-header"
      className={cn(
        'grid grid-rows-[auto_1fr] place-items-center gap-1.5 text-center has-data-[slot=alert-dialog-media]:grid-rows-[auto_auto_1fr] has-data-[slot=alert-dialog-media]:gap-x-6 sm:group-data-[size=default]/alert-dialog-content:place-items-start sm:group-data-[size=default]/alert-dialog-content:text-left sm:group-data-[size=default]/alert-dialog-content:has-data-[slot=alert-dialog-media]:grid-rows-[auto_1fr]',
        className,
      )}
      {...props}
    />
  );
}

export const AlertDialogFooter: FC<ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-slot="alert-dialog-footer"
      className={cn(
        'flex flex-col-reverse gap-2 group-data-[size=sm]/alert-dialog-content:grid group-data-[size=sm]/alert-dialog-content:grid-cols-2 sm:flex-row sm:justify-end',
        className,
      )}
      {...props}
    />
  );
}

export const AlertDialogTitle: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Title>> = ({
  className,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Title
      data-slot="alert-dialog-title"
      className={cn(
        'text-lg font-semibold sm:group-data-[size=default]/alert-dialog-content:group-has-data-[slot=alert-dialog-media]/alert-dialog-content:col-start-2',
        className,
      )}
      {...props}
    />
  );
}

export const AlertDialogDescription: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Description>> = ({
  className,
  ...props
}) => {
  return (
    <AlertDialogPrimitive.Description
      data-slot="alert-dialog-description"
      className={cn('text-muted-foreground text-sm', className)}
      {...props}
    />
  );
}

export const AlertDialogMedia: FC<ComponentPropsWithRef<'div'>> = ({
  className,
  ...props
}) => {
  return (
    <div
      data-slot="alert-dialog-media"
      className={cn(
        "bg-muted mb-2 inline-flex size-16 items-center justify-center rounded-md sm:group-data-[size=default]/alert-dialog-content:row-span-2 *:[svg:not([class*='size-'])]:size-8",
        className,
      )}
      {...props}
    />
  );
}

export const AlertDialogAction: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Action> &
  Pick<ComponentPropsWithRef<typeof Button>, 'variant' | 'size'>> = ({
  className,
  variant = 'default',
  size = 'default',
  ...props
}) => {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Action
        data-slot="alert-dialog-action"
        className={cn(className)}
        {...props}
      />
    </Button>
  );
}

export const AlertDialogCancel: FC<ComponentPropsWithRef<typeof AlertDialogPrimitive.Cancel> &
  Pick<ComponentPropsWithRef<typeof Button>, 'variant' | 'size'>> = ({
  className,
  variant = 'outline',
  size = 'default',
  ...props
}) => {
  return (
    <Button variant={variant} size={size} asChild>
      <AlertDialogPrimitive.Cancel
        data-slot="alert-dialog-cancel"
        className={cn(className)}
        {...props}
      />
    </Button>
  );
}