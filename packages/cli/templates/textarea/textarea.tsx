import { forwardRef, useId, type TextareaHTMLAttributes } from "react";
import { cn } from "@/utils/cn";

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, id, label, hint, error, required, rows = 4, ...props }, ref) => {
    const generatedId = useId();
    const textareaId = id ?? `textarea-${generatedId}`;

    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={textareaId} className="mb-1.5 block text-sm font-medium text-slate-900">
            {label}
            {required ? <span className="ml-1 text-red-500">*</span> : null}
          </label>
        ) : null}
        <textarea
          ref={ref}
          id={textareaId}
          rows={rows}
          aria-invalid={Boolean(error)}
          className={cn(
            "w-full rounded-md border bg-white px-3 py-2 text-sm outline-none transition",
            error
              ? "border-red-500 focus:ring-2 focus:ring-red-200"
              : "border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-100",
            className
          )}
          {...props}
        />
        {error ? <p className="mt-1 text-xs text-red-500">{error}</p> : null}
        {hint && !error ? <p className="mt-1 text-xs text-slate-500">{hint}</p> : null}
      </div>
    );
  }
);

Textarea.displayName = "Textarea";

export default Textarea;
