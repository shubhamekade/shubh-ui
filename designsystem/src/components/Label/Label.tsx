import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/utils/cn';

export const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
  {
    variants: {
      variant: {
        default: 'text-foreground',
        muted: 'text-muted-foreground',
        error: 'text-destructive',
      },
      required: {
        true: "after:content-['*'] after:ml-0.5 after:text-destructive",
      },
    },
    defaultVariants: {
      variant: 'default',
      required: false,
    },
  }
);

export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {}

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant, required, ...props }, ref) => (
    <label ref={ref} className={cn(labelVariants({ variant, required }), className)} {...props} />
  )
);

Label.displayName = 'Label';
export default Label;
