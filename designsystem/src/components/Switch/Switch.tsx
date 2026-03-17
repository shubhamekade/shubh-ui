'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface SwitchProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  labelPlacement?: 'left' | 'right';
}

const sizeMap = {
  sm: { track: 'h-4 w-7', thumb: 'h-3 w-3', translate: 'translate-x-3', label: 'text-xs' },
  md: { track: 'h-5 w-9', thumb: 'h-4 w-4', translate: 'translate-x-4', label: 'text-sm' },
  lg: { track: 'h-6 w-11', thumb: 'h-5 w-5', translate: 'translate-x-5', label: 'text-base' },
};

const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  (
    {
      className,
      label,
      description,
      size = 'md',
      labelPlacement = 'right',
      checked,
      disabled,
      id,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const switchId = id || `switch-${generatedId}`;
    const s = sizeMap[size];

    const track = (
      <div
        className={cn(
          'relative inline-flex items-center rounded-full transition-colors duration-200 ease-in-out cursor-pointer',
          s.track,
          checked ? 'bg-[#000080]' : 'bg-gray-300',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        aria-hidden="true"
      >
        <span
          className={cn(
            'inline-block rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out',
            s.thumb,
            checked ? s.translate : 'translate-x-0.5'
          )}
        />
      </div>
    );

    const labelEl = label && (
      <span className={cn('font-medium text-[#1e1e1e]', s.label)}>
        {label}
        {description && (
          <span className="block text-xs text-[#808080] font-normal mt-0.5">
            {description}
          </span>
        )}
      </span>
    );

    return (
      <label
        htmlFor={switchId}
        className={cn(
          'inline-flex items-start gap-2.5 cursor-pointer',
          disabled && 'cursor-not-allowed opacity-50',
          className
        )}
      >
        <input
          ref={ref}
          id={switchId}
          type="checkbox"
          role="switch"
          checked={checked}
          disabled={disabled}
          className="sr-only"
          aria-checked={checked}
          {...props}
        />
        {labelPlacement === 'left' && labelEl}
        {track}
        {labelPlacement === 'right' && labelEl}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
export default Switch;