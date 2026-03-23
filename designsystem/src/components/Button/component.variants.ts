import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight',
    'transition-all duration-200 ease-out',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background',
    'disabled:pointer-events-none disabled:opacity-40',
    'ring-offset-background select-none',
  ],
  {
    variants: {
      variant: {
        primary: [
          'border border-primary bg-primary text-primary-foreground shadow-sm',
          'hover:bg-transparent hover:border-primary hover:text-primary hover:-translate-y-px hover:shadow-md',
          'active:scale-[0.97] active:translate-y-0',
        ],
        secondary: [
          'border border-border bg-background text-foreground shadow-sm',
          'hover:bg-muted hover:border-border/80 hover:-translate-y-px hover:shadow-sm',
          'active:scale-[0.97] active:translate-y-0',
        ],
        outline: [
          'border border-primary bg-transparent text-primary',
          'hover:bg-primary hover:border-primary hover:-translate-y-px hover:text-primary-foreground',
          'active:scale-[0.97] active:translate-y-0',
        ],
        ghost: [
          'border border-transparent bg-transparent text-foreground',
          'hover:bg-accent hover:text-accent-foreground',
          'active:scale-[0.97]',
        ],
        danger: [
          'border border-destructive bg-destructive text-destructive-foreground shadow-sm',
          'hover:bg-destructive/90 hover:-translate-y-px hover:shadow-md',
          'active:scale-[0.97] active:translate-y-0',
        ],
        destructive: [
          'border border-destructive bg-destructive text-destructive-foreground shadow-sm',
          'hover:bg-destructive/90 hover:-translate-y-px hover:shadow-md',
          'active:scale-[0.97] active:translate-y-0',
        ],
        navy: 'border border-sidebar-border bg-sidebar text-sidebar-foreground hover:bg-sidebar-accent active:scale-[0.97]',
        success: [
          'border border-success bg-success text-success-foreground shadow-sm',
          'hover:bg-success/90 hover:-translate-y-px hover:shadow-md',
          'active:scale-[0.97] active:translate-y-0',
        ],
        warning: [
          'border border-warning bg-warning text-warning-foreground shadow-sm',
          'hover:bg-warning/90 hover:-translate-y-px hover:shadow-md',
          'active:scale-[0.97] active:translate-y-0',
        ],
        link: 'bg-transparent border-transparent p-0 text-primary underline-offset-4 hover:underline h-auto',
      },
      size: {
        xs: 'h-7 rounded-lg px-3 text-xs',
        sm: 'h-8 rounded-lg px-3.5 text-sm',
        md: 'h-9 rounded-xl px-4 text-sm',
        lg: 'h-10 rounded-xl px-5 text-base',
        xl: 'h-12 rounded-xl px-6 text-base',
        icon: 'h-9 w-9 rounded-xl p-0',
        'icon-sm': 'h-7 w-7 rounded-lg p-0',
        'icon-lg': 'h-11 w-11 rounded-xl p-0',
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
