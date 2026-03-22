import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/utils/cn';

const inlineVariants = cva('flex flex-wrap items-center', {
  variants: {
    gap: {
      xs: 'gap-xs',
      sm: 'gap-sm',
      md: 'gap-md',
      lg: 'gap-lg',
      xl: 'gap-xl',
    },
    justify: {
      start: 'justify-start',
      center: 'justify-center',
      between: 'justify-between',
      end: 'justify-end',
    },
  },
  defaultVariants: {
    gap: 'md',
    justify: 'start',
  },
});

export interface InlineProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof inlineVariants> {}

const Inline = forwardRef<HTMLDivElement, InlineProps>(
  ({ className, gap, justify, ...props }, ref) => {
    return <div ref={ref} className={cn(inlineVariants({ gap, justify }), className)} {...props} />;
  }
);

Inline.displayName = 'Inline';

export default Inline;
