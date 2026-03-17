import { cva } from 'class-variance-authority';

export const calendarVariants = cva(
  [
    'inline-block select-none font-sans',
  ],
  {
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
  }
);

export const calendarCellVariants = cva(
  [
    'flex items-center justify-center rounded cursor-pointer transition-colors duration-100',
    'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-1',
  ],
  {
    variants: {
      size: {
        sm: 'h-7 w-7 text-xs',
        md: 'h-8 w-8 text-sm',
        lg: 'h-9 w-9 text-base',
      },
      selected: {
        true: 'bg-[#000080] text-white font-semibold hover:bg-[#0000a0]',
        false: '',
      },
      outside: {
        true: 'text-gray-300',
        false: '',
      },
      disabled: {
        true: 'opacity-40 cursor-not-allowed pointer-events-none',
        false: '',
      },
    },
    compoundVariants: [
      {
        selected: false,
        outside: false,
        disabled: false,
        className: 'hover:bg-[#dae8ff] text-gray-700',
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
