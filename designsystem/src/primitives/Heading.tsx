import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const headingVariants = cva('font-display font-semibold tracking-tight text-foreground', {
  variants: {
    size: {
      sm: 'text-lg',
      md: 'text-xl',
      lg: 'text-2xl',
      xl: 'text-3xl',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export interface HeadingProps
  extends HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(({ className, size, ...props }, ref) => {
  return <h2 ref={ref} className={cn(headingVariants({ size }), className)} {...props} />;
});

Heading.displayName = 'Heading';

export default Heading;