import React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/cn";

export const badgeVariants = cva(
  "inline-flex items-center gap-1 font-medium rounded-full transition-colors",
  {
    variants: {
      variant: {
        default: "bg-slate-100 text-slate-900",
        primary: "bg-slate-950 text-white",
        success: "bg-green-100 text-green-700",
        warning: "bg-amber-100 text-amber-700",
        danger: "bg-red-100 text-red-700",
        info: "bg-blue-100 text-blue-700",
        outline: "border border-slate-300 bg-transparent text-slate-900",
        ghost: "bg-transparent text-slate-600",
      },
      size: {
        sm: "px-2 py-1 text-xs",
        md: "px-3 py-1.5 text-sm",
        lg: "px-4 py-2 text-base",
      },
      dot: {
        true: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "md",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {
  dot?: boolean;
  dotColor?: string;
  removable?: boolean;
  onRemove?: () => void;
}

const Badge: React.FC<BadgeProps> = ({
  className,
  variant,
  size,
  dot,
  dotColor,
  removable,
  onRemove,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(badgeVariants({ variant, size, dot }), className)}
      {...props}
    >
      {dot && (
        <span
          className={cn(
            "inline-block w-1.5 h-1.5 rounded-full",
            dotColor || "bg-current"
          )}
          aria-hidden="true"
        />
      )}
      {children}
      {removable && (
        <button
          type="button"
          onClick={onRemove}
          className="ml-1 hover:opacity-70 transition-opacity"
          aria-label="Remove badge"
        >
          ×
        </button>
      )}
    </span>
  );
};

Badge.displayName = "Badge";
export default Badge;
export type { BadgeProps };
