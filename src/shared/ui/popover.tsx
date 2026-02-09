import { Popover as PopoverPrimitive } from 'radix-ui';
import type { ComponentPropsWithRef, FC } from 'react';

import { cn } from '@/shared/lib/utils';

export const Popover: FC<PopoverPrimitive.PopoverProps> = (props) => {
  return <PopoverPrimitive.Root data-slot="popover" {...props} />;
};

export const PopoverTrigger: FC<ComponentPropsWithRef<typeof PopoverPrimitive.Trigger>> = (props) => {
  return <PopoverPrimitive.Trigger data-slot="popover-trigger" {...props} />;
};

export const PopoverContent: FC<ComponentPropsWithRef<typeof PopoverPrimitive.Content>> = ({
  className,
  align = 'center',
  sideOffset = 4,
  ...props
}) => {
  return (
    <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
        data-slot="popover-content"
        align={align}
        sideOffset={sideOffset}
        className={cn(
          'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 w-72 origin-(--radix-popover-content-transform-origin) rounded-md border p-4 shadow-md outline-hidden',
          className,
        )}
        {...props}
      />
    </PopoverPrimitive.Portal>
  );
};

export const PopoverAnchor: FC<ComponentPropsWithRef<typeof PopoverPrimitive.Anchor>> = (props) => {
  return <PopoverPrimitive.Anchor data-slot="popover-anchor" {...props} />;
};

export const PopoverHeader: FC<ComponentPropsWithRef<'div'>> = ({ className, ...props }) => {
  return <div data-slot="popover-header" className={cn('flex flex-col gap-1 text-sm', className)} {...props} />;
};

export const PopoverTitle: FC<ComponentPropsWithRef<'h2'>> = ({ className, ...props }) => {
  return <div data-slot="popover-title" className={cn('font-medium', className)} {...props} />;
};

export const PopoverDescription: FC<ComponentPropsWithRef<'p'>> = ({ className, ...props }) => {
  return <p data-slot="popover-description" className={cn('text-muted-foreground', className)} {...props} />;
};
