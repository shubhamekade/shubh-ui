import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium',
    'transition-colors duration-150',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
    'disabled:pointer-events-none disabled:opacity-50',
    'ring-offset-background',
  ],
  {
    variants: {
      variant: {
        primary: 'bg-primary text-primary-foreground shadow-sm hover:bg-primary/90',
        secondary: 'bg-muted text-foreground hover:bg-muted/80',
        outline: 'border border-border bg-background text-foreground hover:bg-muted',
        ghost: 'bg-transparent text-foreground hover:bg-muted',
        danger: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
        navy: 'bg-navy text-white shadow-sm hover:bg-navy-medium',
        success: 'bg-success text-white shadow-sm hover:bg-success/90',
        warning: 'bg-warning text-foreground shadow-sm hover:bg-warning/90',
        link: 'bg-transparent p-0 text-primary underline-offset-4 hover:underline',
      },
      size: {
        xs: 'h-8 px-2 text-xs',
        sm: 'h-9 px-3',
        md: 'h-10 px-4 py-2',
        lg: 'h-11 px-6 text-base',
        xl: 'h-12 px-7 text-base',
        icon: 'h-10 w-10 p-0',
        'icon-sm': 'h-8 w-8 p-0',
        'icon-lg': 'h-12 w-12 p-0',
      },
      fullWidth: {
        true: 'w-full',
      },
      loading: {
        true: 'cursor-wait',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  }
);
