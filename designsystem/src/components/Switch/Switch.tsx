'use client';

import React, { forwardRef, useId } from 'react';
import { cn } from '@/utils/cn';

export interface SwitchProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  'size' | 'type'
> {
  label?: string;
  description?: string;
  size?: 'sm' | 'md' | 'lg';
  labelPlacement?: 'left' | 'right';
}

const sizeMap = {
  sm: { track: 'h-5 w-8', thumb: 'h-3.5 w-3.5', translate: '1rem', label: 'text-xs' },
  md: { track: 'h-6 w-10', thumb: 'h-4.5 w-4.5', translate: '1.125rem', label: 'text-sm' },
  lg: { track: 'h-7 w-12', thumb: 'h-5.5 w-5.5', translate: '1.25rem', label: 'text-base' },
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
          'relative inline-flex items-center rounded-full border-2 transition-all duration-200 ease-out cursor-pointer',
          s.track,
          checked ? 'border-primary bg-primary' : 'border-input bg-muted/80',
          disabled && 'opacity-50 cursor-not-allowed'
        )}
        aria-hidden="true"
      >
        <span
          style={{ '--switch-translate': s.translate } as React.CSSProperties}
          className={cn(
            'inline-block rounded-full bg-background shadow-sm transition-transform duration-200 ease-out',
            s.thumb,
            checked ? 'translate-x-[var(--switch-translate)]' : 'translate-x-0.5'
          )}
        />
      </div>
    );

    const labelEl = label && (
      <span className={cn('font-medium text-foreground', s.label)}>
        {label}
        {description && (
          <span className="block text-xs text-muted-foreground font-normal mt-0.5">
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
