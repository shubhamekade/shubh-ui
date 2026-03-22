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
          <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-foreground">
            {label}
            {required ? (
              <span className="ml-1 text-destructive" aria-label="required">
                *
              </span>
            ) : null}
          </label>
        ) : null}
        <div className="relative flex items-center">
          {hasLeftElement ? (
            <div className="pointer-events-none absolute left-3.5 flex items-center text-muted-foreground">
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
              hasLeftElement && 'pl-10',
              hasRightElement && 'pr-11',
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
            <div className="absolute right-3.5 flex items-center gap-1.5">
              {clearable && value ? (
                <button
                  type="button"
                  onClick={onClear}
                  className="rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Clear input"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              ) : null}
              {type === 'password' ? (
                <button
                  type="button"
                  onClick={() => setShowPassword((current) => !current)}
                  className="rounded-md p-0.5 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              ) : null}
              {rightElement ? <span className="text-muted-foreground">{rightElement}</span> : null}
            </div>
          ) : null}
        </div>
        {error ? (
          <p id={`${inputId}-error`} className="mt-1 text-xs text-destructive" role="alert">
            {typeof error === 'string' ? error : 'This field is invalid.'}
          </p>
        ) : null}
        {success && !error ? (
          <p id={`${inputId}-success`} className="mt-1 text-xs text-success">
            {success}
          </p>
        ) : null}
        {hint && !error && !success ? (
          <p id={`${inputId}-hint`} className="mt-1 text-xs text-muted-foreground">
            {hint}
          </p>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
