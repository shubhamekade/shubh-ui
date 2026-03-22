import { cva } from 'class-variance-authority';

export const calendarVariants = cva(['inline-block select-none font-sans'], {
  variants: {
    size: {
      sm: 'text-xs w-56',
      md: 'text-sm w-64',
      lg: 'text-base w-72',
    },
  },
  defaultVariants: {
    size: 'md',
  },
});

export const calendarCellVariants = cva(
  [
    'flex cursor-pointer items-center justify-center rounded-lg border transition-colors duration-100',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/25 focus-visible:ring-offset-1',
  ],
  {
    variants: {
      size: {
        sm: 'h-7 w-7 text-xs',
        md: 'h-8 w-8 text-sm',
        lg: 'h-9 w-9 text-base',
      },
      selected: {
        true: 'border-primary bg-primary text-primary-foreground font-semibold',
        false: '',
      },
      outside: {
        true: 'text-muted-foreground/40',
        false: '',
      },
      disabled: {
        true: 'pointer-events-none cursor-not-allowed opacity-30',
        false: '',
      },
    },
    compoundVariants: [
      {
        selected: false,
        outside: false,
        disabled: false,
        className: 'border-transparent text-foreground hover:bg-muted',
      },
    ],
    defaultVariants: {
      size: 'md',
      selected: false,
      outside: false,
      disabled: false,
    },
  }
);
