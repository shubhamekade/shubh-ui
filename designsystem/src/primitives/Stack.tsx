import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const stackVariants = cva('flex flex-col', {
  variants: {
    gap: {
      xs: 'gap-xs',
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
      '2xl': 'gap-2xl',
    },
    align: {
      start: 'items-start',
      center: 'items-center',
      end: 'items-end',
      stretch: 'items-stretch',
    },
  },
  defaultVariants: {
    gap: 'md',
    align: 'stretch',
  },
});

export interface StackProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof stackVariants> {}

const Stack = forwardRef<HTMLDivElement, StackProps>(({ className, gap, align, ...props }, ref) => {
  return <div ref={ref} className={cn(stackVariants({ gap, align }), className)} {...props} />;
});

Stack.displayName = 'Stack';

export default Stack;
