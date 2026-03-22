'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  hint?: string;
  error?: string;
  success?: string;
  required?: boolean;
  resize?: 'none' | 'both' | 'horizontal' | 'vertical';
  showCount?: boolean;
  maxLength?: number;
}

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      className,
      label,
      hint,
      error,
      success,
      required,
      resize = 'vertical',
      showCount = false,
      maxLength,
      id,
      value,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const textareaId = id || `textarea-${generatedId}`;
    const charCount = typeof value === 'string' ? value.length : 0;

    const resizeMap = {
      none: 'resize-none',
      both: 'resize',
      horizontal: 'resize-x',
      vertical: 'resize-y',
    };

    return (
      <div className="w-full">
        {label && (
          <label htmlFor={textareaId} className="mb-1.5 block text-sm font-medium text-foreground">
            {label}
            {required && <span className="ml-1 text-destructive">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            'w-full min-h-[96px] rounded-xl border bg-surface px-3.5 py-3 text-sm font-sans text-foreground placeholder:text-muted-foreground',
            'transition-all duration-150 ease-out',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/20 focus-visible:border-primary/50',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-muted/50',
            error
              ? 'border-destructive/40 bg-destructive-soft focus-visible:ring-destructive/20'
              : 'border-input hover:border-muted-foreground/30',
            success && !error && 'border-success/40 bg-success-soft focus-visible:ring-success/20',
            resizeMap[resize],
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        <div className="flex items-start justify-between mt-1">
          <div>
            {error && (
              <p className="text-xs text-destructive" role="alert">
                {error}
              </p>
            )}
            {success && !error && <p className="text-xs text-success">{success}</p>}
            {hint && !error && !success && <p className="text-xs text-muted-foreground">{hint}</p>}
          </div>
          {showCount && (
            <span className="ml-2 shrink-0 text-xs tabular-nums text-muted-foreground">
              {charCount}
              {maxLength ? `/${maxLength}` : ''}
            </span>
          )}
        </div>
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
