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
          <label htmlFor={textareaId} className="block text-sm font-medium text-[#1e1e1e] mb-1.5">
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <textarea
          ref={ref}
          id={textareaId}
          value={value}
          maxLength={maxLength}
          className={cn(
            'w-full min-h-[80px] px-3 py-2.5 text-sm font-sans rounded-md border bg-white text-[#1e1e1e] placeholder:text-[#808080]',
            'transition-all duration-150',
            'focus:outline-none focus-visible:ring-2 focus-visible:ring-[#000080] focus-visible:ring-offset-0 focus-visible:border-[#000080]',
            'disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50',
            error
              ? 'border-red-400 focus-visible:ring-red-400'
              : 'border-[#d7d7d7] hover:border-[#b0b0b0]',
            success && !error && 'border-green-400 focus-visible:ring-green-400',
            resizeMap[resize],
            className
          )}
          aria-invalid={!!error}
          {...props}
        />
        <div className="flex items-start justify-between mt-1">
          <div>
            {error && (
              <p className="text-xs text-red-500" role="alert">
                {error}
              </p>
            )}
            {success && !error && <p className="text-xs text-green-600">{success}</p>}
            {hint && !error && !success && <p className="text-xs text-[#808080]">{hint}</p>}
          </div>
          {showCount && (
            <span className="text-xs text-[#808080] tabular-nums shrink-0 ml-2">
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
