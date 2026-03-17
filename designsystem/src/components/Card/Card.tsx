import { forwardRef, type HTMLAttributes } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../../utils/cn';

export const cardVariants = cva(
  'rounded-xl border border-slate-200 bg-white text-slate-950 shadow-sm transition-shadow',
  {
    variants: {
      variant: {
        default: 'border-slate-200 bg-white',
        elevated: 'border-slate-100 shadow-md',
        outline: 'border-2 border-slate-300 shadow-none',
        outlined: 'border-2 border-slate-300 shadow-none',
        filled: 'border-slate-200 bg-slate-100',
        accent: 'border-blue-200 bg-blue-50',
        navy: 'border-blue-900 bg-blue-900 text-white',
        primary: 'border-slate-900 bg-slate-900 text-white',
        ghost: 'border-transparent bg-transparent shadow-none',
      },
      padding: {
        none: 'p-0',
        sm: 'p-4',
        md: 'p-5',
        lg: 'p-6',
        xl: 'p-8',
      },
      hoverable: {
        true: 'cursor-pointer hover:shadow-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      padding: 'md',
    },
  }
);

export interface CardProps
  extends HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardVariants> {}

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, padding, hoverable, children, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, padding, hoverable }), className)}
      {...props}
    >
      {children}
    </div>
  )
);

const CardHeader = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn('flex flex-col space-y-1.5', className)} {...props} />
  )
);

const CardTitle = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={cn('text-lg font-semibold leading-none tracking-tight', className)}
      {...props}
    />
  )
);

const CardDescription = forwardRef<HTMLParagraphElement, HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn('text-sm text-slate-500', className)} {...props} />
  )
);

const CardContent = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn('pt-0', className)} {...props} />
);

const CardFooter = forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn('flex items-center border-t border-slate-100 pt-4', className)}
      {...props}
    />
  )
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardTitle.displayName = 'CardTitle';
CardDescription.displayName = 'CardDescription';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
export default Card;
