import { forwardRef, useId, useState, type InputHTMLAttributes, type ReactNode } from 'react';
import { Eye, EyeOff, X } from 'lucide-react';

import { cn } from '../../utils/cn';
import { inputVariants } from './component.variants';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  variant?: 'default' | 'error' | 'success';
  size?: 'sm' | 'md' | 'lg';
  leftElement?: ReactNode;
  rightElement?: ReactNode;
  clearable?: boolean;
  onClear?: () => void;
  error?: string | boolean;
  success?: string;
  hint?: string;
  label?: string;
  required?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      size,
      type = 'text',
      leftElement,
      rightElement,
      clearable,
      onClear,
      error,
      success,
      hint,
      label,
      required,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const [showPassword, setShowPassword] = useState(false);
    const generatedId = useId();
    const inputId = id || `input-${generatedId}`;
    const effectiveVariant = error ? 'error' : success ? 'success' : variant;
    const effectiveType = type === 'password' && showPassword ? 'text' : type;
    const hasLeftElement = Boolean(leftElement);
    const hasRightElement =
      Boolean(rightElement) || type === 'password' || Boolean(clearable && value);

    return (
      <div className="w-full">
        {label ? (
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-slate-900">
            {label}
            {required ? (
              <span className="ml-1 text-red-500" aria-label="required">
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <div className="relative flex items-center">
          {hasLeftElement ? (
            <div className="pointer-events-none absolute left-3 flex items-center text-slate-400">
              {leftElement}
            </div>
          ) : null}
          <input
            ref={ref}
            id={inputId}
            type={effectiveType}
            value={value}
            className={cn(
              inputVariants({ variant: effectiveVariant, size }),
              hasLeftElement && 'pl-9',
              hasRightElement && 'pr-10',
              className
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={
              error
                ? `${inputId}-error`
                : success
                  ? `${inputId}-success`
                  : hint
                    ? `${inputId}-hint`
                    : undefined
            }
            {...props}
          />
          {hasRightElement ? (
            <div className="absolute right-3 flex items-center gap-1">
              {clearable && value ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="text-slate-400 transition-colors hover:text-slate-600"
                  aria-label="Clear input"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}
              {type === 'password' ? (
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="text-slate-400 transition-colors hover:text-slate-600"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              ) : null}
              {rightElement ? <span className="text-slate-400">{rightElement}</span> : null}
            </div>
          ) : null}
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-red-500" role="alert">
            {typeof error === 'string' ? error : 'This field is invalid.'}
          </p>
        ) : null}
        {success && !error ? (
          <p id={`${inputId}-success`} className="mt-1 text-xs text-green-600">
            {success}
          </p>
        ) : null}
        {hint && !error && !success ? (
          <p id={`${inputId}-hint`} className="mt-1 text-xs text-slate-500">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
