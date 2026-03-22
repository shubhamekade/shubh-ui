'use client';

import React, {
  useState,
  useRef,
  useCallback,
  useId,
  type KeyboardEvent,
} from 'react';
import { CalendarIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';
import { useClickOutside } from '@/hooks/useClickOutside';
import Calendar from '@/components/Calendar';
import type { CalendarTheme } from '@/components/Calendar';

// ─── Types ────────────────────────────────────────────────────────────────────

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps {
  /** Controlled selected date */
  value?: Date | null;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date | null;
  /** Called when a date is selected or cleared */
  onChange?: (date: Date | null) => void;
  /** Placeholder text */
  placeholder?: string;
  /** Size variant */
  size?: DatePickerSize;
  /** Color theme for the calendar popover */
  theme?: CalendarTheme;
  /** Label shown above the input */
  label?: string;
  /** Whether the field is required */
  required?: boolean;
  /** Error message or flag */
  error?: string | boolean;
  /** Helper text shown below the input */
  hint?: string;
  /** Disable the picker */
  disabled?: boolean;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Format the display string — defaults to locale 'en-US' medium date */
  formatDate?: (date: Date) => string;
  /** Additional class on the root wrapper */
  className?: string;
  /** id for the input element */
  id?: string;
  /** ARIA label for the input */
  'aria-label'?: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const DEFAULT_FORMAT = (date: Date) =>
  date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

const sizeConfig = {
  sm: {
    height: 'h-8',
    text:   'text-sm',
    icon:   'h-3.5 w-3.5',
    zone:   'w-9',          // 36 px left icon zone
    pl:     'pl-10',        // 40 px — text starts after zone + gap
    pr:     'pr-9',
    radius: 'rounded-lg',
    hint:   'text-xs',
  },
  md: {
    height: 'h-10',
    text:   'text-sm',
    icon:   'h-4 w-4',
    zone:   'w-10',         // 40 px
    pl:     'pl-11',        // 44 px
    pr:     'pr-10',
    radius: 'rounded-xl',
    hint:   'text-xs',
  },
  lg: {
    height: 'h-11',
    text:   'text-sm',
    icon:   'h-[18px] w-[18px]',
    zone:   'w-12',         // 48 px
    pl:     'pl-[52px]',    // 52 px
    pr:     'pr-11',
    radius: 'rounded-xl',
    hint:   'text-xs',
  },
} as const;

// ─── Component ────────────────────────────────────────────────────────────────

export default function DatePicker({
  value,
  defaultValue,
  onChange,
  placeholder = 'Select a date',
  size = 'md',
  theme = 'light',
  label,
  required,
  error,
  hint,
  disabled = false,
  minDate,
  maxDate,
  formatDate = DEFAULT_FORMAT,
  className,
  id,
  'aria-label': ariaLabel,
}: DatePickerProps) {
  const generatedId = useId();
  const inputId = id ?? `datepicker-${generatedId}`;

  const [internalValue, setInternalValue] = useState<Date | null>(defaultValue ?? null);
  const selected = value !== undefined ? value : internalValue;

  const [open, setOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useClickOutside(wrapperRef, useCallback(() => setOpen(false), []));

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Escape') setOpen(false);
  };

  const handleSelect = (date: Date) => {
    if (value === undefined) setInternalValue(date);
    onChange?.(date);
    setOpen(false);
  };

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (value === undefined) setInternalValue(null);
    onChange?.(null);
  };

  const displayValue = selected ? formatDate(selected) : '';
  const hasError = Boolean(error);
  const cfg = sizeConfig[size];

  return (
    <div
      ref={wrapperRef}
      className={cn('relative w-full', className)}
      onKeyDown={handleKeyDown}
    >
      {/* Label */}
      {label && (
        <label htmlFor={inputId} className="mb-1.5 block text-sm font-medium text-foreground">
          {label}
          {required && (
            <span className="ml-1 text-destructive" aria-label="required">*</span>
          )}
        </label>
      )}

      {/* Trigger */}
      <div className="relative flex items-center">

        {/* Left icon zone with separator line */}
        <div
          aria-hidden="true"
          className={cn(
            'pointer-events-none absolute left-0 top-0 flex h-full items-center justify-center border-r',
            cfg.zone,
            hasError
              ? 'border-destructive/40 text-destructive/80'
              : open
              ? 'border-primary/30 text-primary'
              : 'border-input text-muted-foreground/70 group-hover:text-muted-foreground',
            disabled && 'opacity-40',
          )}
        >
          <CalendarIcon className={cfg.icon} />
        </div>

        {/* Main button */}
        <button
          id={inputId}
          type="button"
          role="combobox"
          aria-haspopup="dialog"
          aria-expanded={open}
          aria-label={ariaLabel ?? label ?? placeholder}
          aria-invalid={hasError}
          disabled={disabled}
          onClick={() => !disabled && setOpen((v) => !v)}
          className={cn(
            'relative flex w-full items-center border bg-surface transition-all duration-150',
            cfg.height,
            cfg.text,
            cfg.pl,
            cfg.pr,
            cfg.radius,
            // State: open
            open && !hasError && 'border-primary shadow-[0_0_0_3px_hsl(var(--primary)/0.12)]',
            // State: error
            hasError && 'border-destructive/60 shadow-[0_0_0_3px_hsl(var(--destructive)/0.10)]',
            // State: default / hover
            !open && !hasError && 'border-input hover:border-muted-foreground/40',
            // Text colour
            displayValue ? 'text-foreground font-medium' : 'text-muted-foreground/60',
            // Disabled
            disabled
              ? 'cursor-not-allowed opacity-50 bg-muted/40 hover:border-input'
              : 'cursor-pointer',
          )}
        >
          {displayValue || placeholder}
        </button>

        {/* Right end — clear button or animated chevron */}
        <div className="pointer-events-none absolute right-0 top-0 flex h-full items-center pr-3">
          {selected && !disabled ? (
            <button
              type="button"
              onClick={handleClear}
              aria-label="Clear date"
              className={cn(
                'pointer-events-auto flex items-center justify-center rounded-md p-0.5',
                'text-muted-foreground/60 transition-colors',
                'hover:bg-muted hover:text-foreground',
              )}
            >
              <XMarkIcon className={cfg.icon} />
            </button>
          ) : (
            <CalendarIcon
              aria-hidden="true"
              className={cn(
                cfg.icon,
                'text-muted-foreground/50 transition-colors duration-150',
                open && 'text-primary',
              )}
            />
          )}
        </div>
      </div>

      {/* Error / Hint */}
      {hasError && typeof error === 'string' && (
        <p className={cn('mt-1.5 text-destructive', cfg.hint)} role="alert">
          {error}
        </p>
      )}
      {!hasError && hint && (
        <p className={cn('mt-1.5 text-muted-foreground', cfg.hint)}>{hint}</p>
      )}

      {/* Calendar popover */}
      {open && (
        <div
          role="dialog"
          aria-label="Date picker calendar"
          aria-modal="false"
          className={cn(
            'absolute left-0 top-full z-50 mt-2',
            'rounded-2xl border border-border bg-popover shadow-dropdown',
            'p-2',
            'animate-[fade-in_0.18s_ease-out]',
            'origin-top',
          )}
        >
          <Calendar
            value={selected ?? null}
            onChange={handleSelect}
            theme={theme}
            minDate={minDate}
            maxDate={maxDate}
            aria-label="Pick a date"
          />
        </div>
      )}
    </div>
  );
}
