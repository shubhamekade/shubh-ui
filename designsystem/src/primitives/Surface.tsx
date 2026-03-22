import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const surfaceVariants = cva('border text-foreground shadow-card', {
  variants: {
    variant: {
      default: 'border-border bg-surface',
      elevated: 'border-border bg-surface-elevated shadow-card-md',
      muted: 'border-border bg-surface-muted',
      sidebar: 'border-sidebar-border bg-sidebar text-sidebar-foreground',
      ghost: 'border-transparent bg-transparent shadow-none',
    },
    radius: {
      md: 'rounded-md',
      lg: 'rounded-xl',
      xl: 'rounded-2xl',
    },
    padding: {
      none: 'p-0',
      sm: 'p-lg',
      md: 'p-xl',
      lg: 'p-2xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    radius: 'lg',
    padding: 'md',
  },
});

export interface SurfaceProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof surfaceVariants> {}

const Surface = forwardRef<HTMLDivElement, SurfaceProps>(
  ({ className, variant, radius, padding, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(surfaceVariants({ variant, radius, padding }), className)}
        {...props}
      />
    );
  }
);

Surface.displayName = 'Surface';

export default Surface;
