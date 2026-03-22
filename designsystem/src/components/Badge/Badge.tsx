import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-full border font-medium transition-colors duration-150',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-muted text-foreground',
        primary: 'border-primary/20 bg-accent text-accent-foreground',
        navy: 'border-sidebar-border bg-sidebar text-sidebar-foreground',
        secondary: 'border-border/60 bg-muted text-muted-foreground',
        success: 'border-success/20 bg-success-soft text-success',
        warning: 'border-warning/20 bg-warning-soft text-warning-foreground',
        destructive: 'border-destructive/20 bg-destructive-soft text-destructive',
        info: 'border-info/20 bg-info-soft text-info',
        outline: 'border-border bg-transparent text-foreground',
        ghost: 'border-transparent bg-transparent text-muted-foreground',
      },
      size: {
        sm: 'px-2 py-0.5 text-[10px] tracking-wide uppercase',
        md: 'px-2.5 py-0.5 text-xs',
        lg: 'px-3 py-1 text-sm',
      },
      dot: {
        true: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: string;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  dot,
  dotColor,
  removable,
  onRemove,
  children,
  ...props
}) => {
  return (
    <span className={cn(badgeVariants({ variant, size, dot }), className)} {...props}>
      {dot && (
        <span
          className={cn('inline-block h-1.5 w-1.5 rounded-full', dotColor || 'bg-current')}
          aria-hidden="true"
        />
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 -mr-0.5 flex h-3.5 w-3.5 items-center justify-center rounded-full opacity-60 transition-all hover:bg-foreground/10 hover:opacity-100"
          aria-label="Remove badge"
        >
          <svg viewBox="0 0 8 8" className="h-2 w-2" fill="currentColor" aria-hidden="true">
            <path d="M1.41 0L0 1.41 2.59 4 0 6.59 1.41 8 4 5.41 6.59 8 8 6.59 5.41 4 8 1.41 6.59 0 4 2.59 1.41 0z" />
          </svg>
        </button>
      )}
    </span>
  );
};

Badge.displayName = 'Badge';
export default Badge;
