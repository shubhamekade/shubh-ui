'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface RadioProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'type' | 'size'
> {
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  error?: string;
}

const sizeMap = {
  sm: { outer: 'h-3.5 w-3.5', inner: 'h-1.5 w-1.5', label: 'text-xs' },
  md: { outer: 'h-4 w-4', inner: 'h-2 w-2', label: 'text-sm' },
  lg: { outer: 'h-5 w-5', inner: 'h-2.5 w-2.5', label: 'text-base' },
};

const Radio = forwardRef<HTMLInputElement, RadioProps>(
  ({ className, label, description, size = 'md', checked, disabled, error, id, ...props }, ref) => {
    const generatedId = useId();
    const radioId = id || `radio-${generatedId}`;
    const s = sizeMap[size];

    return (
      <div className={cn('flex items-start gap-2', className)}>
        <div className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            ref={ref}
            id={radioId}
            type="radio"
            checked={checked}
            disabled={disabled}
            className="sr-only"
            {...props}
          />
          <div
            className={cn(
              'flex items-center justify-center rounded-full border-2 transition-all duration-150',
              s.outer,
              checked ? 'border-primary' : 'border-input hover:border-primary',
              disabled && 'opacity-50 cursor-not-allowed',
              error && !checked && 'border-red-400'
            )}
            aria-hidden="true"
          >
            {checked && <div className={cn('rounded-full bg-primary', s.inner)} />}
          </div>
        </div>
        {(label || description) && (
          <label
            htmlFor={radioId}
            className={cn('cursor-pointer', disabled && 'cursor-not-allowed opacity-50')}
          >
            {label && (
              <span className={cn('font-medium text-foreground block', s.label)}>{label}</span>
            )}
            {description && (
              <span className="text-xs text-muted-foreground block mt-0.5">{description}</span>
            )}
          </label>
        )}
      </div>
    );
  }
);

Radio.displayName = 'Radio';
export default Radio;
