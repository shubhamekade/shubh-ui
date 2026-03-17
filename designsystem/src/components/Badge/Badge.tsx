import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const badgeVariants = cva(
  'inline-flex items-center gap-1 font-medium rounded-full transition-colors',
  {
    variants: {
      variant: {
        default: 'bg-accent text-accent-foreground',
        primary: 'bg-primary text-primary-foreground',
        navy: 'bg-navy text-white',
        secondary: 'bg-muted text-muted-foreground',
        success: 'bg-green-100 text-green-700',
        warning: 'bg-amber-100 text-amber-700',
        destructive: 'bg-red-100 text-red-700',
        info: 'bg-sky-100 text-sky-700',
        outline: 'border border-border bg-transparent text-foreground',
        ghost: 'bg-transparent text-muted-foreground',
      },
      size: {
        sm: 'px-1.5 py-0.5 text-xs',
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
          className={cn('inline-block w-1.5 h-1.5 rounded-full', dotColor || 'bg-current')}
          aria-hidden="true"
        />
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-0.5 hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          ×
        </button>
      )}
    </span>
  );
};

Badge.displayName = 'Badge';
export default Badge;
