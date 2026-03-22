import { cva } from 'class-variance-authority';

export const inputVariants = cva(
  [
    'flex w-full rounded-xl border bg-surface text-foreground transition-all duration-150 ease-out',
    'placeholder:text-muted-foreground/60',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50',
    'disabled:cursor-not-allowed disabled:opacity-50 disabled:bg-muted/50',
    'read-only:cursor-default read-only:bg-muted/40',
  ],
  {
    variants: {
      variant: {
        default: 'border-input hover:border-muted-foreground/30',
        error:
          'border-destructive/40 bg-destructive-soft focus-visible:ring-destructive/20 focus-visible:border-destructive/60',
        success:
          'border-success/40 bg-success-soft focus-visible:ring-success/20 focus-visible:border-success/60',
      },
      size: {
        sm: 'h-8 rounded-lg px-3 text-sm',
        md: 'h-9 px-3.5 text-sm',
        lg: 'h-10 px-4 text-base',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
    },
  }
);
