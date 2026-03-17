import { cva } from "class-variance-authority";

export const inputVariants = cva(
  [
    "flex w-full rounded-md border bg-white text-slate-900 transition-colors",
    "placeholder:text-slate-400",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-950",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "read-only:cursor-default read-only:bg-slate-50",
  ],
  {
    variants: {
      variant: {
        default: "border-slate-200 hover:border-slate-300",
        error: "border-red-500 bg-red-50/40 focus-visible:ring-red-500",
        success: "border-green-500 bg-green-50/40 focus-visible:ring-green-500",
      },
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);
