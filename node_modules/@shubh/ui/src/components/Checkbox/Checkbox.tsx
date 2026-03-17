'use client';

import React, { forwardRef, useId } from 'react';
import { Check, Minus } from 'lucide-react';
import { cn } from '@/utils/cn';

export interface CheckboxProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  indeterminate?: boolean;
  error?: string;
}

const sizeMap = {
  sm: { box: 'h-3.5 w-3.5', icon: 'h-2.5 w-2.5', label: 'text-xs' },
  md: { box: 'h-4 w-4',   icon: 'h-3 w-3',   label: 'text-sm' },
  lg: { box: 'h-5 w-5',   icon: 'h-3.5 w-3.5', label: 'text-base' },
};

const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      className,
      label,
      description,
      size = 'md',
      indeterminate = false,
      checked,
      disabled,
      error,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const checkboxId = id || `checkbox-${generatedId}`;
    const s = sizeMap[size];

    return (
      <div className={cn('flex items-start gap-2', className)}>
        <div className="relative flex items-center justify-center shrink-0 mt-0.5">
          <input
            ref={ref}
            id={checkboxId}
            type="checkbox"
            checked={checked}
            disabled={disabled}
            className="sr-only peer"
            aria-checked={indeterminate ? 'mixed' : checked}
            {...props}
          />
          <div
            className={cn(
              'flex items-center justify-center rounded transition-all duration-150 border-2 cursor-pointer',
              s.box,
              checked || indeterminate
                ? 'bg-[#000080] border-[#000080]'
                : 'bg-white border-[#d7d7d7] hover:border-[#000080]',
              disabled && 'opacity-50 cursor-not-allowed',
              error && !checked && 'border-red-400'
            )}
            aria-hidden="true"
          >
            {indeterminate ? (
              <Minus className={cn(s.icon, 'text-white')} strokeWidth={3} />
            ) : checked ? (
              <Check className={cn(s.icon, 'text-white')} strokeWidth={3} />
            ) : null}
          </div>
        </div>
        {(label || description) && (
          <label htmlFor={checkboxId} className={cn('cursor-pointer', disabled && 'cursor-not-allowed')}>
            {label && (
              <span className={cn('font-medium text-[#1e1e1e] block', s.label)}>
                {label}
              </span>
            )}
            {description && (
              <span className="text-xs text-[#808080] block mt-0.5">{description}</span>
            )}
          </label>
        )}
        {error && (
          <p className="text-xs text-red-500 mt-1" role="alert">{error}</p>
        )}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';
export default Checkbox;