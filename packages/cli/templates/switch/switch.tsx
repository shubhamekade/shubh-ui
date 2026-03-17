import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface SwitchProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
}

const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, checked = false, onCheckedChange, label, disabled, ...props }, ref) => {
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => onCheckedChange?.(!checked)}
        className={cn(
          "inline-flex items-center gap-2",
          disabled && "cursor-not-allowed opacity-60",
          className
        )}
        {...props}
      >
        <span
          className={cn(
            "relative inline-flex h-6 w-11 rounded-full transition-colors",
            checked ? "bg-blue-600" : "bg-slate-300"
          )}
        >
          <span
            className={cn(
              "absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform",
              checked ? "translate-x-5" : "translate-x-0.5"
            )}
          />
        </span>
        {label ? <span className="text-sm text-slate-900">{label}</span> : null}
      </button>
    );
  }
);

Switch.displayName = "Switch";

export default Switch;
