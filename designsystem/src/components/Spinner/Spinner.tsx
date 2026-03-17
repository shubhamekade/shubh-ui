import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const spinnerVariants = cva(
  'animate-spin rounded-full border-2 border-current border-t-transparent',
  {
    variants: {
      size: {
        xs:  'h-3 w-3 border',
        sm:  'h-4 w-4',
        md:  'h-6 w-6',
        lg:  'h-8 w-8 border-[3px]',
        xl:  'h-12 w-12 border-4',
      },
      color: {
        primary:  'text-primary',
        white:    'text-white',
        muted:    'text-muted-foreground',
        success:  'text-green-500',
        warning:  'text-amber-400',
        danger:   'text-red-500',
      },
    },
    defaultVariants: { size: 'md', color: 'primary' },
  }
);

export interface SpinnerProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'color'>,
    VariantProps<typeof spinnerVariants> {
  label?: string;
}

const Spinner: React.FC<SpinnerProps> = ({
  className,
  size,
  color,
  label = 'Loading…',
  ...props
}) => (
  <div
    role="status"
    aria-label={label}
    className={cn('inline-flex items-center justify-center', className)}
    {...props}
  >
    <div className={cn(spinnerVariants({ size, color }))} />
    <span className="sr-only">{label}</span>
  </div>
);

Spinner.displayName = 'Spinner';
export default Spinner;