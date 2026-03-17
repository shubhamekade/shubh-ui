import React, { forwardRef } from 'react';
import { cn } from '@/utils/cn';

export interface LabelProps extends React.HTMLAttributes<HTMLLabelElement> {
  variant?: 'default' | 'muted' | 'error';
  required?: boolean;
}

const variantMap = {
  default: 'text-foreground',
  muted: 'text-muted-foreground',
  error: 'text-destructive',
};

const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, variant = 'default', required = false, children, ...props }, ref) => (
    <label
      ref={ref}
      className={cn(
        'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
        variantMap[variant],
        required && "after:content-['*'] after:ml-0.5 after:text-destructive",
        className
      )}
      {...props}
    >
      {children}
    </label>
  )
);

Label.displayName = 'Label';
export default Label;
