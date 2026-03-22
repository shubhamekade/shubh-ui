import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";

export const buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-tight",
    "transition-all duration-200 ease-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
    "disabled:pointer-events-none disabled:opacity-40",
    "ring-offset-background select-none",
  ],
  {
    variants: {
      variant: {
        primary: "border border-primary bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 hover:border-primary/90 hover:-translate-y-px hover:shadow-md active:scale-[0.97] active:translate-y-0",
        secondary: "border border-border bg-background text-foreground shadow-sm hover:bg-muted hover:border-border/80 hover:-translate-y-px hover:shadow-sm active:scale-[0.97] active:translate-y-0",
        outline: "border border-border bg-transparent text-foreground hover:bg-muted hover:border-foreground/20 hover:-translate-y-px active:scale-[0.97] active:translate-y-0",
        ghost: "border border-transparent bg-transparent text-foreground hover:bg-accent hover:text-accent-foreground active:scale-[0.97]",
        danger: "border border-destructive bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90 hover:-translate-y-px hover:shadow-md active:scale-[0.97] active:translate-y-0",
      },
      size: {
        sm: "h-8 rounded-lg px-3.5 text-sm",
        md: "h-9 rounded-xl px-4 text-sm",
        lg: "h-10 rounded-xl px-5 text-base",
      },
      fullWidth: {
        true: "w-full",
      },
      loading: {
        true: "cursor-wait",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
