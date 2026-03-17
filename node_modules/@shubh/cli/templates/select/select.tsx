import { forwardRef, useId, type SelectHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export interface SelectProps extends Omit<SelectHTMLAttributes<HTMLSelectElement>, "size"> {
  options: SelectOption[];
  label?: string;
  hint?: string;
  error?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, id, options, label, hint, error, required, ...props }, ref) => {
    const generatedId = useId();
    const selectId = id ?? `select-${generatedId}`;

    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={selectId} className="mb-1.5 block text-sm font-medium text-slate-900">
            {label}
            {required ? <span className="ml-1 text-red-500">*</span> : null}
          </label>
        ) : null}
        <select
          ref={ref}
          id={selectId}
          aria-invalid={Boolean(error)}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition",
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
            className
          )}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value} disabled={option.disabled}>
              {option.label}
            </option>
          ))}
        </select>
        {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
        {hint && !error ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
      </div>
    );
  }
);

Select.displayName = "Select";

export default Select;
