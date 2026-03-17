import { forwardRef, useId, type InputHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface RadioProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "type"> {
  label?: string;
  hint?: string;
}

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, id, label, hint, disabled, ...props }, ref) => {
    const generatedId = useId();
    const inputId = id ?? `radio-${generatedId}`;

    return (
      <label htmlFor={inputId} className={cn("inline-flex cursor-pointer items-start gap-2", disabled && "cursor-not-allowed opacity-60")}>
        <input
          ref={ref}
          id={inputId}
          type="radio"
          disabled={disabled}
          className={cn("mt-0.5 h-4 w-4 border-slate-300 text-blue-600 focus:ring-blue-500", className)}
          {...props}
        />
        <span className="space-y-0.5">
          {label ? <span className="block text-sm font-medium text-slate-900">{label}</span> : null}
          {hint ? <span className="block text-xs text-slate-500">{hint}</span> : null}
        </span>
      </label>
    );
  }
);

Radio.displayName = "Radio";

export default Radio;
